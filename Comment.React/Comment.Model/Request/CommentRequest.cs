﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Comment.Model.Request
{
    public class CommentRequest
    {
        public string Email { get; set; }
        public int Page { get; set; } = 1;
        public int PageSize { get; set; } = 10;
        public int ParentId { get; set; }
    }
}
