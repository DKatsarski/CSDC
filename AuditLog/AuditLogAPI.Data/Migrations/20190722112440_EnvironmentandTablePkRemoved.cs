using Microsoft.EntityFrameworkCore.Migrations;

namespace AuditLogAPI.Data.Migrations
{
    public partial class EnvironmentandTablePkRemoved : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Environment",
                table: "AuditLogs");

            migrationBuilder.DropColumn(
                name: "TablePk",
                table: "AuditLogs");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Environment",
                table: "AuditLogs",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "TablePk",
                table: "AuditLogs",
                nullable: true);
        }
    }
}
