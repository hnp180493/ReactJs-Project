using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Comment.React.Models
{
    public class AddOrEditCommentRequest
    {
        public int CommentId { get; set; }
        public string Email { get; set; }
        public string Content { get; set; }
        public int ParentId { get; set; }
    }
}
