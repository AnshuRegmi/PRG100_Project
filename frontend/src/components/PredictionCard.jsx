import React from 'react';

const PredictionCard = ({ stock, currentPrice, predictedPrice, recommendation }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 mb-6">
      <h2 className="text-2xl font-bold mb-4">{stock} Prediction</h2>
      <p>Current Price: NPR {currentPrice}</p>
      <p>Predicted Price: NPR {predictedPrice}</p>
      <p className={`font-bold ${recommendation === 'Buy' ? 'text-green-500' : 'text-red-500'}`}>
        Recommendation: {recommendation}
      </p>
    </div>
  );
};

export default PredictionCard;
