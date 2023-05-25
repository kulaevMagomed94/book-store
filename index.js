const express = require("express");
const connectDb = require('./db')

const app = express();
const port = 3000;

app.use(express.json())

app.get("/", (req, res) => {
  res.send('ok')
});

app.use(require("./routes/author.routes"));
app.use(require("./routes/books.routes"));
app.use(require("./routes/genres.routes"));
app.use(require("./routes/review.routes"));

app.listen(port, () => {
  connectDb()
  console.log("Server");
});
