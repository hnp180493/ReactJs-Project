using Microsoft.EntityFrameworkCore.Migrations;

namespace Comment.React.Migrations
{
    public partial class addLikeButtonField : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "IsLike",
                table: "LikeButtons",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IsLike",
                table: "LikeButtons");
        }
    }
}
