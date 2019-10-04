using Comment.React.Models;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading.Tasks;

namespace Comment.React.Repository
{
    public interface ILikeButtonRepository : IRepository<LikeButtonModel>
    {
        int GetTotalLikeComment(int commentId);
    }
    public class LikeButtonRepository : RepositoryBase<LikeButtonModel>, ILikeButtonRepository
    {
        public LikeButtonRepository(CommentDbContext commentDb) : base(commentDb)
        {
        }

        public int GetTotalLikeComment(int commentId)
        {
            return _dataContext.LikeButtons.Count(x => x.CommentId == commentId && x.IsLike);
        }
    }
}
