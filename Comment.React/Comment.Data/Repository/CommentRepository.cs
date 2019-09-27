using Comment.React.Models;
using System.Collections;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;

namespace Comment.React.Repository
{
    public interface ICommentRepository: IRepository<CommentModel>
    {
        IEnumerable<CommentModel> GetCommentsAndUsers();
    }
    public class CommentRepository: RepositoryBase<CommentModel>, ICommentRepository
    {
        public CommentRepository(CommentDbContext commentDb): base(commentDb)
        {
        }

        public IEnumerable<CommentModel> GetCommentsAndUsers()
        {
            var data = _dataContext.Comments.Include("User").OrderByDescending(x=>x.Id).ToList();
            var madData = _dataContext.Comments.Include(x => x.User).Select(x => new { x.User }).ToList();

            return data;
        }
    }
}
