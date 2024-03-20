const sqlite3 = require("sqlite3");

const data = require("./lib/sampleData.json");

const db = new sqlite3.Database("inventorydb.sqlite3");

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS Products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    description TEXT,
    price REAL,
    category TEXT
  )`);

  const stmt = db.prepare(
    `INSERT INTO Products (id, name, description, price, category) VALUES (?,?,?,?,?)`
  );
  data.forEach((product) => {
    stmt.run(
      [
        product.id,
        product.name,
        product.description,
        product.price,
        product.category,
      ],
      (err) => {
        if (err) console.error(err.message);
      }
    );
  });
  stmt.finalize();
});

db.close();

console.log("database seeded successfully");
