import { describe, expect, test } from "vitest";

describe("GET /api/status", () => {
  test("should return 200", async () => {
    const response = await fetch(`${process.env.BASE_URL}/api/status`);

    expect(response.status).toBe(200);
  });
});
