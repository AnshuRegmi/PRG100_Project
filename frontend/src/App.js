import React, { useEffect, useState } from 'react';
import { fetchPrediction, fetchHistoricalData } from './services/api';
import PredictionCard from './components/PredictionCard';
import HistoricalChart from './components/HistoricalChart';
import './index.css'; // Ensure Tailwind styles load

function App() {
  const [prediction, setPrediction] = useState(null);
  const [historicalData, setHistoricalData] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const pred = await fetchPrediction();
      setPrediction(pred);

      const hist = await fetchHistoricalData();
      setHistoricalData(hist.data);
    };
    loadData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center mb-8">
        NEPSE Stock Predictor Dashboard
      </h1>
      {prediction && (
        <PredictionCard
          stock={prediction.stock}
          currentPrice={prediction.currentPrice}
          predictedPrice={prediction.predictedPrice}
          recommendation={prediction.recommendation}
        />
      )}
      {historicalData.length > 0 && <HistoricalChart data={historicalData} />}
    </div>
  );
}

export default App;
