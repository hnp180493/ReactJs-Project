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
    }
}