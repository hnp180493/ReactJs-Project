using Comment.React.Models;
using System.Collections;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;

namespace Comment.React.Repository
{
    public interface ICommentRepository : IRepository<CommentModel>
    {
        IEnumerable<CommentModel> GetCommentsAndUsers(string email, int page, int pageSize);
        IEnumerable<CommentModel> GetChildCommentsAndUsers(string email, int parentId, int page = 1, int pageSize = 10);
        int GetTotalRows(int parentId = 0);
    }
    public class CommentRepository : RepositoryBase<CommentModel>, ICommentRepository
    {
        public CommentRepository(CommentDbContext commentDb) : base(commentDb)
        {
        }

        public IEnumerable<CommentModel> GetCommentsAndUsers(string email, int page = 1, int pageSize = 10)
        {
            var comments = _dataContext.Comments.OrderByDescending(x => x.CommentId)
                .Where(x => x.ParentId == 0)
                .Skip((page - 1) * pageSize).Take(pageSize);
            foreach (var item in comments)
            {
                item.TotalReply = _dataContext.Comments.Count(x => x.ParentId == item.CommentId);
                item.TotalLike = _dataContext.LikeButtons.Count(x => x.IsLike && x.CommentId == item.CommentId);
                var buttonLike = _dataContext.LikeButtons.FirstOrDefault(x => x.Email == email && x.CommentId == item.CommentId);
                if (buttonLike == null)
                {
                    item.IsLike = false;
                }
                else
                {
                    item.IsLike = buttonLike.IsLike;
                }
            }

            _dataContext.Comments.Include(x => x.User).Select(x => new { x.User }).ToList();

            return comments;
        }

        public IEnumerable<CommentModel> GetChildCommentsAndUsers(string email, int parentId, int page = 1, int pageSize = 10)
        {
            var comments = _dataContext.Comments.OrderByDescending(x => x.CommentId)
                .Where(x => x.ParentId == parentId)
                .Skip((page - 1) * pageSize).Take(pageSize);
            foreach (var item in comments)
            {
                item.TotalLike = _dataContext.LikeButtons.Count(x => x.IsLike && x.CommentId == item.CommentId);
                var buttonLike = _dataContext.LikeButtons.FirstOrDefault(x => x.Email == email && x.CommentId == item.CommentId);
                if (buttonLike == null)
                {
                    item.IsLike = false;
                }
                else
                {
                    item.IsLike = buttonLike.IsLike;
                }
            }
            _dataContext.Comments.Include(x => x.User).Select(x => new { x.User }).ToList();

            return comments;
        }

        public int GetTotalRows(int parentId = 0)
        {
            return _dataContext.Comments.Count(x => x.ParentId == parentId);
        }

    }
}
