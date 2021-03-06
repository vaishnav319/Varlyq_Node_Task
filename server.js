const express = require("express");
const cors = require("cors");
const app = express();
const connectDB = require("./config/db");
//init middleware
app.use(express.json({ extended: false }));
app.use(cors());
//connect database
connectDB();
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/posts", require("./routes/api/posts"));
app.get("/", (req, res) => {
  res.send("API running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
