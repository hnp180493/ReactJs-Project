using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Comment.React.Models;
using Comment.React.Service;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Comment.React.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LikeButtonController : ControllerBase
    {
        private readonly ILikeButtonService _likeButtonService;

        public LikeButtonController(ILikeButtonService likeButtonService)
        {
            _likeButtonService = likeButtonService;
        }

        [HttpPost]
        [Route("clickLike")]
        public void ClickLike([FromBody]LikeButtonModel model)
        {
            var likeModel = _likeButtonService.GetByCommentIdAndUserId(model.CommentId, model.UserId);
            if (likeModel == null)
            {
                _likeButtonService.Add(model);
            }
            else
            {
                _likeButtonService.Update(model);
            }
        }
        [HttpGet]
        [Route("totalLikeByCommentId/{commentId}")]
        public async Task<int> TotalLikeByCommentId(int commentId)
        {
            var result = await _likeButtonService.TotalLikeByCommentId(commentId);
            return result;
        }
    }
}