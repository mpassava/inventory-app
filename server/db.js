const sqlite3 = require("sqlite3").verbose();

const DB = new sqlite3.Database("inventorydb.sqlite3", sqlite3.OPEN_READWRITE,(err) => {
  if (err) {
    console.error(err.message, "error connecting to database");
    return;
  }

  console.log("database connection established");
});

process.on("SIGINT", () => {
  DB.close((err) => {
    if (err) {
      console.error(err.message, "error closing database");
      return;
    }
    console.log("database connection closed");
    process.exit(0);
  });
});

module.exports = DB;
