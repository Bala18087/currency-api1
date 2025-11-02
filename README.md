# 💱 Currency Quotes API

### 📖 Description
A Node.js + Express backend API that provides:
- Live currency quotes (USD to ARS)
- Average of quotes
- Slippage (difference vs. average)

---

## ⚙️ Endpoints

| Method | Endpoint | Description |
|---------|-----------|-------------|
| GET | `/api/quotes` | Returns quotes from 3 different sources |
| GET | `/api/average` | Returns average buy/sell price |
| GET | `/api/slippage` | Returns slippage vs average |

---

## 🧩 Example Response

**GET `/api/average`**
```json
{
  "average_buy_price": 141.26,
  "average_sell_price": 145.1
}
```

**GET `/api/slippage`**
```json
[
  {
    "source": "https://www.ambito.com/contenidos/dolar.html",
    "buy_price_slippage": -0.0067,
    "sell_price_slippage": -0.0076
  }
]
```

---

## 🚀 How to Run Locally

```bash
git clone https://github.com/yourusername/currency-api.git
cd currency-api
npm install
npm start
```

Then open:  
👉 [http://localhost:3000/api/quotes](http://localhost:3000/api/quotes)

---

## 🌐 Deployment

### Option 1: Render
1. Push this code to GitHub.
2. Go to [https://render.com](https://render.com).
3. Create a new Web Service → Connect GitHub repo.
4. Build command: `npm install`
5. Start command: `npm start`

Your API will be live at a public URL like:
```
https://currency-api.onrender.com/api/quotes
```

---

## 🧰 Tech Stack
- Node.js + Express
- Axios (HTTP client)
- ES Modules
- Cached data for 60 seconds
