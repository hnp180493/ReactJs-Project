using Comment.React.Models;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading.Tasks;

namespace Comment.React.Repository
{
    public interface ILikeButtonRepository : IRepository<LikeButtonModel>
    {
        Task<int> TotalLikeByCommentId(int commentId);
    }
    public class LikeButtonRepository : RepositoryBase<LikeButtonModel>, ILikeButtonRepository
    {
        public LikeButtonRepository(CommentDbContext commentDb):base(commentDb)
        {
        }

        public async Task<int> TotalLikeByCommentId(int commentId)
        {
            var result = await _dataContext.LikeButtons.CountAsync(x => x.CommentId == commentId && x.IsLike);
            return result;
        }
    }
}
