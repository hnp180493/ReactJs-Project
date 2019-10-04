using Comment.Model.Request;
using Comment.Model.Response;
using Comment.React.Models;
using Comment.React.Service;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace Comment.React.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CommentController : ControllerBase
    {
        private readonly ICommentService _commentService;
        private readonly ILikeButtonService _likeService;
        public CommentController(ICommentService commentService, ILikeButtonService likeService)
        {
            _commentService = commentService;
            _likeService = likeService;
        }

        [HttpGet]
        [Route("get-comments")]
        public ListCommentResponse GetComments([FromQuery]CommentRequest request)
        {
            var comments = _commentService.GetCommentsAndUsers(request);

            return comments;
        }

        [HttpGet]
        [Route("get-child-comments-and-users")]
        public ListCommentResponse GetChildCommentsAndUsers([FromQuery]CommentRequest request)
        {
            var comments = _commentService.GetChildCommentsAndUsers(request);

            return comments;
        }


        [HttpGet]
        [Route("getById/{id}")]
        public CommentModel GetById(int id)
        {
            return _commentService.GetById(id);
        }

        [HttpPost]
        [Route("add")]
        public void Add([FromBody]AddOrEditCommentRequest comment)
        {
            _commentService.Add(comment);
        }


        [HttpPost]
        [Route("update")]
        public void Update([FromBody]CommentModel comment)
        {
            _commentService.Update(comment);
        }

        [HttpPost]
        [Route("delete")]
        public void Delete([FromBody]CommentModel comment)
        {
            _commentService.Update(comment);
        }
    }
}