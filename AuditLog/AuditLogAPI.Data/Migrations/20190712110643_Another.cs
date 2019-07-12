using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace AuditLogAPI.Data.Migrations
{
    public partial class Another : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<DateTime>(
                name: "AuditDate",
                table: "AuditLogs",
                nullable: true,
                oldClrType: typeof(DateTime));

            migrationBuilder.AddColumn<int>(
                name: "Duration",
                table: "AuditLogs",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<DateTime>(
                name: "EndDate",
                table: "AuditLogs",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Environment",
                table: "AuditLogs",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "StartDate",
                table: "AuditLogs",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Duration",
                table: "AuditLogs");

            migrationBuilder.DropColumn(
                name: "EndDate",
                table: "AuditLogs");

            migrationBuilder.DropColumn(
                name: "Environment",
                table: "AuditLogs");

            migrationBuilder.DropColumn(
                name: "StartDate",
                table: "AuditLogs");

            migrationBuilder.AlterColumn<DateTime>(
                name: "AuditDate",
                table: "AuditLogs",
                nullable: false,
                oldClrType: typeof(DateTime),
                oldNullable: true);
        }
    }
}
