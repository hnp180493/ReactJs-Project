using AutoMapper;
using Comment.Model.Response;
using Comment.React.Models;
using Comment.React.Repository;
using System;
using System.Collections.Generic;

namespace Comment.React.Service
{
    public interface ICommentService
    {
        IEnumerable<CommentModel> GetAll();
        CommentModel GetById(int id);
        void Add(AddOrEditCommentRequest comment);
        void Update(CommentModel comment);
        void Delete(int id);
        IEnumerable<CommentResponse> GetCommentsAndUsers(int page, int pageSize);
        IEnumerable<CommentResponse> GetChildCommentsAndUsers(int parentId, int page, int pageSize);
    }
    public class CommentService: ICommentService
    {
        private readonly ICommentRepository _commentRepo;
        private readonly IMapper _mapper;

        public CommentService(ICommentRepository commentRepo, IMapper mapper)
        {
            _commentRepo = commentRepo;
            _mapper = mapper;

        }

        public void Add(AddOrEditCommentRequest comment)
        {
            var commentModel = _mapper.Map<CommentModel>(comment);

            commentModel.CreatedOn = DateTime.Now;

            _commentRepo.Add(commentModel);
            _commentRepo.SaveChange();
        }

        public void Delete(int id)
        {
            _commentRepo.Delete(id);
            _commentRepo.SaveChange();
        }

        public IEnumerable<CommentModel> GetAll()
        {
            return _commentRepo.GetAll();
        }

        public CommentModel GetById(int id)
        {
            return _commentRepo.GetById(id);
        }

        public IEnumerable<CommentResponse> GetCommentsAndUsers(int page, int pageSize)
        {
            var data= _commentRepo.GetCommentsAndUsers(page, pageSize);
            var comments = _mapper.Map<IEnumerable<CommentResponse>>(data);
            return comments;
        }

        public IEnumerable<CommentResponse> GetChildCommentsAndUsers(int parentId, int page, int pageSize)
        {
            var data = _commentRepo.GetChildCommentsAndUsers(parentId, page, pageSize);
            var comments = _mapper.Map<IEnumerable<CommentResponse>>(data);
            return comments;
        }


        public void Update(CommentModel comment)
        {
            _commentRepo.Update(comment);
            _commentRepo.SaveChange();
        }
    }
}
