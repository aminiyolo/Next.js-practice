const express = require("express");
const cors = require("cors");
const { posts } = require("./data.js");

const app = express();
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.get("/api/posts", (req, res) => {
  res.json(posts);
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`server ${PORT} is running`);
});
