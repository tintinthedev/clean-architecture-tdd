import { db } from "@/db";
import { Password } from "./password";

class User {
  static async create(email: string, password: string) {
    const hashedPassword = await new Password(password).hash();

    const query = {
      text: `INSERT INTO users(email, password) VALUES ($1, $2)
              RETURNING json_build_object(
                'id', id,
                'email', email
              ) as user`,
      values: [email, hashedPassword],
    };

    const queryResponse = await db.query(query);

    return queryResponse.rows[0].user;
  }
}

export { User as userModel };
