using Microsoft.EntityFrameworkCore.Migrations;

namespace Comment.Data.Migrations
{
    public partial class RemoveIslikeLikeButtonModel : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Like",
                table: "Comments");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "Like",
                table: "Comments",
                nullable: false,
                defaultValue: 0);
        }
    }
}
