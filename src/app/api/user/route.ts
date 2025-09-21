import { userModel } from "@/models/user";
import { Validator } from "@/models/validator";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const validation = Validator.validate(body);

    if (validation.error) {
      return NextResponse.json(
        {
          error: validation.error,
        },
        {
          status: 400,
        }
      );
    }

    const user = await userModel.create(body.email, body.password);

    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json(
      {
        error: (error as Error).message,
      },
      {
        status: 500,
      }
    );
  }
}
