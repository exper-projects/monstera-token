import dotEnv from "dotenv";
import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = process.env.PORT || 4000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function (req, res, next) {
  req.setTimeout(1000 * 45, function () {
    res.status(200).json({ msg: "Timeout" });
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
