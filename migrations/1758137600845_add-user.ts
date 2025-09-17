import { MigrationBuilder } from "node-pg-migrate";

export async function up(pgm: MigrationBuilder): Promise<void> {
  pgm.createTable("users", {
    id: "id",
    email: {
      type: "VARCHAR(50)",
      notNull: true,
      unique: true,
    },
    password: {
      type: "TEXT",
      notNull: true,
    },
  });
}

export async function down(pgm: MigrationBuilder): Promise<void> {}
