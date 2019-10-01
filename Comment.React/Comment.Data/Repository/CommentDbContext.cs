using Comment.React.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Comment.React.Repository
{
    public class CommentDbContext : DbContext
    {
        public CommentDbContext(DbContextOptions options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<LikeButtonModel>()
                .HasKey(x => new {x.CommentId, x.Email });
        }

        public virtual DbSet<CommentModel> Comments { get; set; }
        public virtual DbSet<UserModel> Users { get; set; }
        public virtual DbSet<LikeButtonModel> LikeButtons { get; set; }
    }
}
