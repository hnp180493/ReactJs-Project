using Comment.React.Models;
using Comment.React.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Comment.React.Service
{
    public interface ILikeButtonService
    {
        IEnumerable<LikeButtonModel> GetByCommentId(int commentId);
    }
    public class LikeButtonService : ILikeButtonService
    {
        private readonly ILikeButtonRepository _likeButtonRepo;
        public LikeButtonService(ILikeButtonRepository likeButtonRepo)
        {
            _likeButtonRepo = likeButtonRepo;
        }

        public IEnumerable<LikeButtonModel> GetByCommentId(int commentId)
        {
            return _likeButtonRepo.GetMulti(x => x.CommentId == commentId);
        }
    }
}
