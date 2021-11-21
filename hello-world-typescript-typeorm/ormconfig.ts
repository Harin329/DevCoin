//For secure connection:
//import * as fs from "fs";

module.exports = {
  type: "cockroachdb",
  host: "free-tier4.aws-us-west-2.cockroachlabs.cloud",
  port: 26257,
  username: "rafid",
  password: "Iamtheboss10",
  database: "kudocoin-github-1371.defaultdb",
  ssl: true,
  extra: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
  //For secure connection:
  /*ssl: {
     ca: fs.readFileSync('certs/cc-ca.crt').toString()
   },*/
  synchronize: true,
  logging: false,
  entities: ["src/entity/**/*.ts"],
  migrations: ["src/migration/**/*.ts"],
  subscribers: ["src/subscriber/**/*.ts"],
  cli: {
    entitiesDir: "src/entity",
    migrationsDir: "src/migration",
    subscribersDir: "src/subscriber",
  },
};
