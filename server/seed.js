const sqlite3 = require("sqlite3");

const data = require("./lib/sampleData.json");

const db = new sqlite3.Database("inventorydb.sqlite3");
console.log("database connection established");

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS Products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    category TEXT,
    product_name TEXT,
    description TEXT,
    purchase_price REAL,
    sales_price REAL,
    margin INT,
    location TEXT
  )`);



  const stmt = db.prepare(
    `INSERT INTO Products (id, category, product_name, description, purchase_price, sales_price, margin, location) VALUES (?,?,?,?,?,?,?,?)`
  );
  data.forEach((product) => {
    stmt.run(
      [
        product.id,
        product.category,
        product.product_name,
        product.description,
        product.purchase_price,
        product.sales_price,
        product.margin,
        product.location,
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
