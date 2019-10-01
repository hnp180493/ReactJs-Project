using Comment.React.Models;
using System.Collections;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;

namespace Comment.React.Repository
{
    public interface ICommentRepository : IRepository<CommentModel>
    {
        IEnumerable<CommentModel> GetCommentsAndUsers(int page, int pageSize);
        IEnumerable<CommentModel> GetChildCommentsAndUsers(int parentId, int page = 1, int pageSize = 10);
    }
    public class CommentRepository : RepositoryBase<CommentModel>, ICommentRepository
    {
        public CommentRepository(CommentDbContext commentDb) : base(commentDb)
        {
        }

        public IEnumerable<CommentModel> GetCommentsAndUsers(int page = 1, int pageSize = 10)
        {
            var query = _dataContext.Comments.Skip((page - 1) * pageSize).Take(pageSize)
                .OrderByDescending(x => x.CommentId)
                .Where(x=>x.ParentId == 0);
            var madData = _dataContext.Comments.Include(x => x.User).Select(x => new { x.User }).ToList();

            return query;
        }

        public IEnumerable<CommentModel> GetChildCommentsAndUsers(int parentId, int page = 1, int pageSize = 10)
        {
            var query = _dataContext.Comments.Where(x=> x.ParentId == parentId).Skip((page - 1) * pageSize).Take(pageSize)
                .OrderByDescending(x => x.CommentId)
                .Where(x => x.ParentId == 0);
            var madData = _dataContext.Comments.Include(x => x.User).Select(x => new { x.User }).ToList();

            return query;
        }
    }
}
