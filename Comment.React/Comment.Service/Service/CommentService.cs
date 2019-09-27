using Comment.React.Models;
using Comment.React.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Comment.React.Service
{
    public interface ICommentService
    {
        IEnumerable<CommentModel> GetAll();
        CommentModel GetById(int id);
        void Add(CommentModel comment);
        void Update(CommentModel comment);
        void Delete(int id);
        IEnumerable<CommentModel> GetCommentsAndUsers();
    }
    public class CommentService: ICommentService
    {
        private readonly ICommentRepository _commentRepo;

        public CommentService(ICommentRepository commentRepo)
        {
            _commentRepo = commentRepo;
        }

        public void Add(CommentModel comment)
        {
            comment.DateFormatted = DateTime.Now.ToString("d");
            _commentRepo.Add(comment);
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

        public IEnumerable<CommentModel> GetCommentsAndUsers()
        {
            return _commentRepo.GetCommentsAndUsers();
        }


        public void Update(CommentModel comment)
        {
            _commentRepo.Update(comment);
            _commentRepo.SaveChange();
        }
    }
}
