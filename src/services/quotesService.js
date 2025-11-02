import axios from "axios";

let cache = { data: null, lastUpdated: 0 };
const CACHE_TIMEOUT = 60000;

const sources = [
  { name: "Ámbito", url: "https://www.ambito.com/contenidos/dolar.html" },
  { name: "DolarHoy", url: "https://www.dolarhoy.com" },
  { name: "Cronista", url: "https://www.cronista.com/MercadosOnline/moneda.html?id=ARSB" }
];

async function fetchQuotes() {
  return [
    { buy_price: 140.3, sell_price: 144.0, source: sources[0].url },
    { buy_price: 141.0, sell_price: 145.2, source: sources[1].url },
    { buy_price: 142.5, sell_price: 146.1, source: sources[2].url }
  ];
}

export async function getQuotes() {
  const now = Date.now();
  if (cache.data && now - cache.lastUpdated < CACHE_TIMEOUT) return cache.data;
  const data = await fetchQuotes();
  cache = { data, lastUpdated: now };
  return data;
}

export async function getAverage() {
  const quotes = await getQuotes();
  const avgBuy = quotes.reduce((a, b) => a + b.buy_price, 0) / quotes.length;
  const avgSell = quotes.reduce((a, b) => a + b.sell_price, 0) / quotes.length;
  return { average_buy_price: avgBuy, average_sell_price: avgSell };
}

export async function getSlippage() {
  const quotes = await getQuotes();
  const avg = await getAverage();

  return quotes.map(q => ({
    source: q.source,
    buy_price_slippage: Number(((q.buy_price - avg.average_buy_price) / avg.average_buy_price).toFixed(4)),
    sell_price_slippage: Number(((q.sell_price - avg.average_sell_price) / avg.average_sell_price).toFixed(4))
  }));
}
