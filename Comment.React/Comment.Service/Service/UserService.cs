using Comment.React.Models;
using Comment.React.Repository;
using System.Collections.Generic;

namespace User.React.Service
{
    public interface IUserService
    {
        IEnumerable<UserModel> GetAll();
        UserModel GetById(string id);
        void Add(UserModel comment);
        void Update(UserModel comment);
        void Delete(int id);
    }
    public class UserService : IUserService
    {
        private readonly IUserRepository _userRepo;

        public UserService(IUserRepository userRepo)
        {
            _userRepo = userRepo;
        }

        public void Add(UserModel comment)
        {
            _userRepo.Add(comment);
            _userRepo.SaveChange();
        }

        public void Delete(int id)
        {
            _userRepo.Delete(id);
            _userRepo.SaveChange();
        }

        public IEnumerable<UserModel> GetAll()
        {
            return _userRepo.GetAll();
        }

        public UserModel GetById(string email)
        {
            return _userRepo.GetSingleByCondition(x=>x.Email == email);
        }


        public void Update(UserModel comment)
        {
            _userRepo.Update(comment);
            _userRepo.SaveChange();
        }
    }
}
