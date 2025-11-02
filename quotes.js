import express from "express";
import { getQuotes, getAverage, getSlippage } from "../services/quotesService.js";

const router = express.Router();

router.get("/quotes", async (req, res) => {
  try {
    const data = await getQuotes();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/average", async (req, res) => {
  try {
    const data = await getAverage();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/slippage", async (req, res) => {
  try {
    const data = await getSlippage();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
