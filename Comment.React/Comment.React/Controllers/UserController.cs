using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Comment.React.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using User.React.Service;

namespace Comment.React.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserService _userService;
        public UserController(IUserService userService)
        {
            _userService = userService;
        }


        [HttpPost]
        [Route("add")]
        public void Add([FromBody]UserModel model)
        {
            var user = _userService.GetById(model.Email);
            if (user == null)
            {
                _userService.Add(model);
            }
        }
    }
}