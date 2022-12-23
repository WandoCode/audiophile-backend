module.exports = ({ env }) => ({
  connection: {
    client: "mysql",
    connection: {
      host: env("MYSQLHOST", "127.0.0.1"),
      port: env.int("MYSQLPORT", 5931),
      database: env("MYSQLDATABASE", "railway"),
      user: env("MYSQLUSER", "postgres"),
      password: env("MYSQLPASSWORD", "password"),
      ssl: env.bool(true),
    },
  },
});
