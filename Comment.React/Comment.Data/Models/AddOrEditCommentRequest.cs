using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Comment.React.Models
{
    public class CommentModel
    {
        [Key]
        public int CommentId { get; set; }
        [MaxLength(500)]
        public string Email { get; set; }
        public DateTime CreatedOn { get; set; }
        public string Content { get; set; }
        public int Like { get; set; }
        public int ParentId { get; set; }
        [ForeignKey("Email")]
        public virtual UserModel User { get; set; }
    }
}
