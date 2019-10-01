using Comment.Model.Enum;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Comment.React.Models
{
    public class UserModel
    {
        [Key]
        [MaxLength(500)]
        public string Email { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string FullName { get; set; }
        public string Image { get; set; }
        public TypeAccounts Type { get; set; }

        public virtual ICollection<CommentModel> Comments { get; set; }

    }
}
