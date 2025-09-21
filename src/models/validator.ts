import z from "zod";

export class Validator {
  static validate(data: Record<keyof typeof schemas, unknown>) {
    const dataKeys = Object.keys(data) as (keyof typeof schemas)[];
    if (dataKeys.length === 0) {
      return {
        error: "Nenhum dado enviado",
      };
    }

    for (let key of dataKeys) {
      if (!schemas[key]) throw new Error("Dados inválidos");

      const { success, error } = schemas[key]().safeParse(data);

      if (!success)
        return {
          error: error.message,
        };
    }

    return {
      error: null,
    };
  }
}

const schemas = {
  email: function () {
    return z.object({
      email: z.email().nonempty(),
    });
  },
  password: function () {
    return z.object({
      password: z.string().min(8).max(50),
    });
  },
};
