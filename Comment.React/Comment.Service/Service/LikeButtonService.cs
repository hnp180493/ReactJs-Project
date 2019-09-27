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
        LikeButtonModel GetByCommentIdAndUserId(int commentId, string userId);
        void Add(LikeButtonModel model);
        void Update(LikeButtonModel model);
        Task<int> TotalLikeByCommentId(int commentId);
    }
    public class LikeButtonService : ILikeButtonService
    {
        private readonly ILikeButtonRepository _likeButtonRepo;
        public LikeButtonService(ILikeButtonRepository likeButtonRepo)
        {
            _likeButtonRepo = likeButtonRepo;
        }

        public void Add(LikeButtonModel model)
        {
            _likeButtonRepo.Add(model);
            _likeButtonRepo.SaveChange();
        }

        public IEnumerable<LikeButtonModel> GetByCommentId(int commentId)
        {
            return _likeButtonRepo.GetMulti(x=>x.CommentId == commentId);
        }

        public async Task<int> TotalLikeByCommentId(int commentId)
        {
            return await _likeButtonRepo.TotalLikeByCommentId(commentId);
        }

        public LikeButtonModel GetByCommentIdAndUserId(int commentId, string userId)
        {
            return _likeButtonRepo.GetSingleByCondition(x => x.CommentId == commentId && x.UserId == userId);
        }

        public void Update(LikeButtonModel model)
        {
            var likeModel = _likeButtonRepo.GetSingleByCondition(x => x.CommentId == model.CommentId && x.UserId == model.UserId);
            likeModel.IsLike = !likeModel.IsLike;
            _likeButtonRepo.SaveChange();
        }
    }
}
