import { db } from "@/db";
import { BASE_URL } from "@/tests/constants";
import { describe, expect, test } from "vitest";

describe("POST /api/user", () => {
  test("should allow user creation", async () => {
    const userData = {
      email: "test13a55@agmail.com",
      password: "password",
    };

    const response = await fetch(`${BASE_URL}/api/user`, {
      method: "POST",
      body: JSON.stringify(userData),
    });

    expect(response.status).toBe(200);

    const body = await response.json();

    expect(body.id).not.toBe(null);
    expect(body.id).not.toBe(undefined);

    expect(body.email).toEqual(userData.email);
    expect(body.password).toBe(undefined);

    // cleaning up
    await db.query(`DELETE FROM users`);
  });
});
