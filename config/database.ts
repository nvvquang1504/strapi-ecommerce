import path from "path";

export default ({ env }) => {
  return {
    connection: {
      client: env("DATABASE_CLIENT"),
      connection: {
        connectionString: env("DATABASE_URL"),
        host: env("DATABASE_HOST"),
        port: env.int("DATABASE_PORT"),
        database: env("DATABASE_NAME"),
        user: env("DATABASE_USERNAME"),
        password: env("DATABASE_PASSWORD"),
        ssl: { rejectUnauthorized: false },
      },
    },
  };
};
