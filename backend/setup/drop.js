import data from "./data.js";
import Connection from "../app/db/connection.js";

try {
  const models = data.map((data) => data.model);
  Connection.open();
  for (const model of models) {
    await model.collection.deleteMany({});
  }
  process.stdout.write("\n -- SUCCESSFULLY DROPPED DATABASE -- \n");
  process.exit();
} catch (e) {
  process.stdout.write("Failed due to: ", e);
  process.exit(1);
}
