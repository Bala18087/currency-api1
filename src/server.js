import express from "express";
import quotesRouter from "./routes/quotes.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api", quotesRouter);

app.get("/", (req, res) => {
  res.send("✅ Currency Quotes API is running...");
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
