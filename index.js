const exspress = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const compression = require("compression");
const routes = require("./src/routes");

const app = exspress();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(helmet());
app.use(compression());

app.use("/api", routes);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/*", (req, res) => {
  res.status(404).send("404 Not Found");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
