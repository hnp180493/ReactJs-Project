using Comment.React.Service;
using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Comment.Service.SignalR
{
    public class LikeButtonHub : Hub
    {
        private readonly ILikeButtonService _likeButtonService;
        public LikeButtonHub(ILikeButtonService likeButtonService)
        {
            _likeButtonService = likeButtonService;
        }
        public async Task LikeButtonClick(int commentId, string email)
        {
            int totalLike =_likeButtonService.GetTotalLikeComment(commentId);
            await Clients.All.SendAsync("LIKE_BUTTON_CLICK", commentId, email, totalLike);
        }
    }
}
