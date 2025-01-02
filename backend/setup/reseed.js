import data from "./data.js";
import Connection from "../app/db/connection.js";

try {
  Connection.open();
  for (const { model, seed } of data) {
    for (const document of seed) {
      await model.create(document);
    }
  }
  process.stdout.write("\n -- SUCCESSFULLY RESEEDED DATABASE -- \n");
  process.exit();
} catch (e) {
  process.stdout.write("Failed due to: ", e);
  process.exit(1);
}
