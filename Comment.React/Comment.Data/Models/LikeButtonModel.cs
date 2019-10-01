using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Comment.React.Models
{
    public class LikeButtonModel
    {
        [Key]
        [Column(Order = 1)]
        public int CommentId { get; set; }
        [Key]
        [Column(Order = 2)]
        public string Email { get; set; }

        public bool IsLike { get; set; } = true;

        [ForeignKey("CommentId")]
        public virtual CommentModel Comment { get; set; }
        [ForeignKey("Email")]
        public virtual UserModel User { get; set; }
    }
}
