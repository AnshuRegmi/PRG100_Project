// PRG100_Project/backend/index.js
const express = require('express');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// Dummy prediction API
app.get('/predict', (req, res) => {
  res.json({
    stock: 'NABIL',
    currentPrice: 900,
    predictedPrice: 950,
    recommendation: 'Buy'
  });
});

// Dummy historical data API
app.get('/historical-data', (req, res) => {
  res.json({
    stock: 'NABIL',
    data: [
      { date: '2024-03-18', price: 880 },
      { date: '2024-03-19', price: 885 },
      { date: '2024-03-20', price: 890 },
      { date: '2024-03-21', price: 895 },
      { date: '2024-03-22', price: 900 }
    ]
  });
});

app.listen(port, () => {
  console.log(`Backend server running on http://localhost:${port}`);
});
