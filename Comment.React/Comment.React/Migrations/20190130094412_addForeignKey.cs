using Microsoft.EntityFrameworkCore.Migrations;

namespace Comment.React.Migrations
{
    public partial class addForeignKey : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateIndex(
                name: "IX_Comments_Email",
                table: "Comments",
                column: "Email");

            migrationBuilder.AddForeignKey(
                name: "FK_Comments_Users_Email",
                table: "Comments",
                column: "Email",
                principalTable: "Users",
                principalColumn: "Email",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Comments_Users_Email",
                table: "Comments");

            migrationBuilder.DropIndex(
                name: "IX_Comments_Email",
                table: "Comments");
        }
    }
}
