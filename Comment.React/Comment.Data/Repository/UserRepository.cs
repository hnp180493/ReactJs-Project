using Comment.React.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Comment.React.Repository
{
    public interface IUserRepository:IRepository<UserModel>
    {

    }
    public class UserRepository: RepositoryBase<UserModel>, IUserRepository
    {
        public UserRepository(CommentDbContext commentDb):base(commentDb)
        {
        }
    }
}
