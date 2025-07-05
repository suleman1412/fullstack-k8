import express from "express";
import pg from "pg";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());
const pool = new pg.Pool({
  connectionString: "postgres://postgres:postgres@db.default.svc.cluster.local:5432/postgres",
  // connectionString: "postgres://postgres:postgres@localhost:5432/postgres",
});

app.get("/users", async (req, res) => {
  const result = await pool.query("SELECT * FROM users");
  res.json(result.rows);
});

app.post("/users", async (req, res) => {
  const result = await pool.query("INSERT INTO users (name) VALUES ($1) RETURNING *", [req.body.name]);
  res.json(result.rows[0]);
});


async function initDb() {
  try {
    await pool.query(`CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL
    )`);
    
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  } catch (err){
    console.error("Error initializing database: ", err);
  }
}

initDb();