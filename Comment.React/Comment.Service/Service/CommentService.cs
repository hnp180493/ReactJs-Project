using AutoMapper;
using Comment.Model.Request;
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
        ListCommentResponse GetCommentsAndUsers(CommentRequest request);
        ListCommentResponse GetChildCommentsAndUsers(CommentRequest request);
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

        public ListCommentResponse GetCommentsAndUsers(CommentRequest request)
        {
            var response = new ListCommentResponse();
            var data= _commentRepo.GetCommentsAndUsers(request.Email, request.Page, request.PageSize);
            response.Comments = _mapper.Map<IEnumerable<CommentResponse>>(data);
            var totalRows = _commentRepo.GetTotalRows();
            response.TotalPages = (int)Math.Ceiling((decimal)totalRows / request.PageSize);
            return response;
        }

        public ListCommentResponse GetChildCommentsAndUsers(CommentRequest request)
        {
            var response = new ListCommentResponse();
            var data = _commentRepo.GetChildCommentsAndUsers(request.Email, request.ParentId, request.Page, request.PageSize);
            response.Comments = _mapper.Map<IEnumerable<CommentResponse>>(data);
            var totalRows = _commentRepo.GetTotalRows(request.ParentId);
            response.TotalPages = (int)Math.Ceiling((decimal)totalRows / request.PageSize);
            return response;
        }


        public void Update(CommentModel comment)
        {
            _commentRepo.Update(comment);
            _commentRepo.SaveChange();
        }
    }
}
