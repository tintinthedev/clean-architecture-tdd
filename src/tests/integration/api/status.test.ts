import { describe, expect, test } from "vitest";
import { BASE_URL } from "@/tests/constants";

describe("GET /api/status", () => {
  test("should return 200", async () => {
    const response = await fetch(`${BASE_URL}/api/status`);

    expect(response.status).toBe(200);
  });

  test("should be healthy", async () => {
    const response = await fetch(`${BASE_URL}/api/status`);
    const body = await response.json();

    expect(body.status).toEqual("healthy");
  });

  test("should return correct database information", async () => {
    const response = await fetch(`${BASE_URL}/api/status`);
    const body = await response.json();

    expect(body.db_version).toEqual("17.6 (Debian 17.6-1.pgdg13+1)");
  });
});
