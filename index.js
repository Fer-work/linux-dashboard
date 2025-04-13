const express = require("express");
const path = require("path");
const app = express();
const os = require("os");

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "views"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/system", (req, res) => {
  const uptime = os.uptime();
  const totalMem = os.totalmem();
  const freeMem = os.freemem();
  const load = os.loadavg();

  res.json({
    uptime,
    totalMem,
    freeMem,
    load,
  });
});

app.get("/", (req, res) => {
  res.render("index");
});

const PORT = 3000;
app.listen(PORT, () =>
  console.log(`Dashboard running on http://localhost:${PORT}`)
);
