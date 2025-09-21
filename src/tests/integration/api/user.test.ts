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

  test("should fail invalid email", async () => {
    const userData = {
      email: "invalid@gg",
      password: "12345678",
    };

    const response = await fetch(`${BASE_URL}/api/user`, {
      method: "POST",
      body: JSON.stringify(userData),
    });

    expect(response.status).toBe(400);

    const body = await response.json();

    expect(body.error).not.toBe(undefined);
    expect(Object.keys(body).length).toBe(1);
  });

  test("should fail invalid password", async () => {
    const userData = {
      email: "invalid@gmail.com",
      password: "1234567",
    };

    const response = await fetch(`${BASE_URL}/api/user`, {
      method: "POST",
      body: JSON.stringify(userData),
    });

    expect(response.status).toBe(400);

    const body = await response.json();

    expect(body.error).not.toBe(undefined);
    expect(Object.keys(body).length).toBe(1);
  });

  test("should fail empty data", async () => {
    const userData = {};

    const response = await fetch(`${BASE_URL}/api/user`, {
      method: "POST",
      body: JSON.stringify(userData),
    });

    expect(response.status).toBe(400);

    const body = await response.json();

    expect(body.error).not.toBe(undefined);
    expect(Object.keys(body).length).toBe(1);
  });

  test("should fail no data", async () => {
    const response = await fetch(`${BASE_URL}/api/user`, {
      method: "POST",
    });

    expect(response.status).toBe(500);

    const body = await response.json();

    expect(body.error).not.toBe(undefined);
    expect(Object.keys(body).length).toBe(1);
  });

  test("should fail invalid email and password", async () => {
    const userData = {
      email: "opa",
      password: "seila",
    };

    const response = await fetch(`${BASE_URL}/api/user`, {
      method: "POST",
      body: JSON.stringify(userData),
    });

    expect(response.status).toBe(400);

    const body = await response.json();

    expect(body.error).not.toBe(undefined);
    expect(Object.keys(body).length).toBe(1);
  });
});
