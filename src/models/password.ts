import bcrypt from "bcrypt";

export class Password {
  private password: string;
  private saltRounds: number;

  constructor(password: string) {
    this.password = password;
    this.saltRounds = 10;
  }

  async hash() {
    const hashedPassword = await bcrypt.hash(this.password, this.saltRounds);
    return hashedPassword;
  }
}
