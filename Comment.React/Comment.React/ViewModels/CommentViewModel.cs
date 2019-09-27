using Comment.React.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Comment.React.ViewModels
{
    public class CommentViewModel
    {
        public int Id { get; set; }
        public string Email { get; set; }
        public string DateFormatted { get; set; }
        public string Content { get; set; }
        public int Like { get; set; } = 0;
        public int? ParentId { get; set; }

        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string FullName { get; set; }
        public string Image { get; set; }
        public TypeAccounts Type { get; set; }
    }
}
