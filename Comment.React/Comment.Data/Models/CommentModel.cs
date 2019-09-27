using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Comment.React.Models
{
    public class CommentModel
    {
        [Key]
        public int Id { get; set; }
        [MaxLength(500)]
        public string Email { get; set; }
        public string DateFormatted { get; set; }
        public string Content { get; set; }
        public int Like { get; set; } = 0;
        public int? ParentId { get; set; }
        [ForeignKey("Email")]
        public virtual UserModel User { get; set; }
    }
}
