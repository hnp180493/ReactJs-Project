using AutoMapper;
using Comment.React.Helper;
using Comment.React.Models;
using Comment.React.Service;
using Comment.React.ViewModels;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using User.React.Service;

namespace Comment.React.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CommentController : ControllerBase
    {
        private readonly ICommentService _commentService;
        private readonly IMapper _mapper;
        private readonly ILikeButtonService _likeService;
        public CommentController(ICommentService commentService, ILikeButtonService likeService, IMapper mapper)
        {
            _commentService = commentService;
            _mapper = mapper;
            _likeService = likeService;
        }

        [HttpGet]
        [Route("getall")]
        public List<CommentViewModel> GetAll()
        {
            var commentsModel = _commentService.GetCommentsAndUsers().ToList();
            var commentsView = _mapper.Map<List<CommentViewModel>>(commentsModel);

            return commentsView;
        }

        [HttpGet]
        [Route("getById/{id}")]
        public CommentModel GetById(int id)
        {
            return _commentService.GetById(id);
        }

        [HttpPost]
        [Route("add")]
        public void Add([FromBody]CommentModel commentViewModel)
        {
            var commentModel = _mapper.Map<CommentModel>(commentViewModel);
            _commentService.Add(commentModel);
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