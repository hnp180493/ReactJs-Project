using Comment.Model.Enum;
using System;

namespace Comment.Model.Response
{
    public class CommentResponse
    {
        public int CommentId { get; set; }
        public string Email { get; set; }
        public DateTime CreatedOn { get; set; }
        public string Content { get; set; }
        public int Like { get; set; }
        public int ParentId { get; set; }

        //public string FirstName { get; set; }
        //public string LastName { get; set; }
        public string FullName { get; set; }
        public string Image { get; set; }
        public TypeAccounts Type { get; set; }
    }
}
