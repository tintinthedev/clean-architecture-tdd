import { db } from "@/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();

  const query = {
    text: `INSERT INTO users(email, password) VALUES($1, $2)
            RETURNING json_build_object(
              'id', id,
              'email', email
            ) AS user`,
    values: [body.email, body.password],
  };

  const insertResult = await db.query(query);

  const dbUser = insertResult.rows[0].user;

  return NextResponse.json(dbUser);
}
