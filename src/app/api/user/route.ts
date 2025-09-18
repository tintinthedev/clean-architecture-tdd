import { userModel } from "@/models/user";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();

  const user = await userModel.create(body.email, body.password);

  return NextResponse.json(user);
}
