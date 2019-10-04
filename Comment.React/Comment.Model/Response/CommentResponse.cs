using Comment.Model.Enum;
using System;
using System.Collections.Generic;

namespace Comment.Model.Response
{
    public class ListCommentResponse
    {
        public IEnumerable<CommentResponse> Comments { get; set; }
        public int TotalPages { get; set; }
    }
    public class CommentResponse
    {
        public int CommentId { get; set; }
        public string Email { get; set; }
        public DateTime CreatedOn { get; set; }
        public string Content { get; set; }
        public int ParentId { get; set; }
        public int TotalReply { get; set; }
        public int TotalLike { get; set; }
        public bool IsLike { get; set; }

        //public string FirstName { get; set; }
        //public string LastName { get; set; }
        public string FullName { get; set; }
        public string Image { get; set; }
        public TypeAccounts Type { get; set; }
    }
}
