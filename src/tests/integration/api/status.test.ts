import { describe, expect, test } from "vitest";
import {BASE_URL} from "@/tests/constants"

describe("GET /api/status", () => {
  test("should return 200", async () => {
    const response = await fetch(`${BASE_URL}/api/status`);

    expect(response.status).toBe(200);
  });
});
