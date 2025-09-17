import { NextResponse } from "next/server";
import { db } from "@/db";

export async function GET() {
  try {
    const dbVersionResult = await db.query("SHOW server_version");
    const dbVersion = dbVersionResult.rows[0].server_version;

    return NextResponse.json({
      db_version: dbVersion,
      status: "healthy",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json({
      status: "unhealthy",
    });
  }
}
