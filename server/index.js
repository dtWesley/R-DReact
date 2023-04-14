import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = 3500;
app.use(cors());
app.use(express.json());

app.get("/test", async (req, res) => {
  const text = JSON.stringify("Hello");
  res.end(text);
});

app.post("/add", async (req, res) => {
  const word = req.body.word;

  try {
    const newWord = JSON.stringify(word + "wow");
    res.send(newWord);
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
