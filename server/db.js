const sqlite3 = require("sqlite3");

class DB {
  constructor() {
    this.db = null;

    process.on("SIGINT", async () => {
      await this.close();
      process.exit(0);
    });
  }

  connect() {
    if (this.db) {
      console.log("already connected to database");
      return;
    }
    this.db = new sqlite3.Database(
      "inventorydb.sqlite3",
      sqlite3.OPEN_READWRITE,
      (err) => {
        if (err) {
          console.error(err.message, "error connecting to database");
          return;
        }

        console.log("database connection established");
      }
    );
  }

  close() {
    return new Promise((resolve, reject) => {
      if (this.db) {
        this.db.close((err) => {
          if (err) {
            console.error(err.message, "error closing database");
            reject(err);
            return;
          }
          console.log("database connection closed");
          this.db = null;
          resolve();
        });
      } else {
        resolve();
      }
    });
  }

  run(query, params, callback) {
    this.db.run(query, params, callback);
  }

  all(query, params = {}, callback) {
    this.db.all(query, params, callback);
  }
}

let instance = null;

module.exports = {
  getInstance: () => {
    if (!instance) {
      instance = new DB();
    }
    return instance;
  },
};
