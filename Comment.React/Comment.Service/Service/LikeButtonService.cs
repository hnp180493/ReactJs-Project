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
        bool LikeComment(int commentId, string email);
        int GetTotalLikeComment(int commentId);
    }
    public class LikeButtonService : ILikeButtonService
    {
        private readonly ILikeButtonRepository _likeButtonRepo;
        public LikeButtonService(ILikeButtonRepository likeButtonRepo)
        {
            _likeButtonRepo = likeButtonRepo;
        }

        public bool LikeComment(int commentId, string email)
        {
            try
            {
                var likeButton = _likeButtonRepo.GetSingleByCondition(x => x.CommentId == commentId && x.Email == email);
                if (likeButton == null)
                {
                    _likeButtonRepo.Add(new LikeButtonModel
                    {
                        CommentId = commentId,
                        Email = email,
                        IsLike = true
                    });
                }
                else
                {
                    likeButton.IsLike = !likeButton.IsLike;
                    _likeButtonRepo.Update(likeButton);
                }
                _likeButtonRepo.SaveChange();

            }
            catch (Exception ex)
            {
                return false;
            }

            return true;
        }
        public int GetTotalLikeComment(int commentId)
        {
            return _likeButtonRepo.GetTotalLikeComment(commentId);
        }
    }
}
