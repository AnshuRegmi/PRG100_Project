import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000';

export const fetchPrediction = async () => {
  const response = await axios.get(`${API_BASE_URL}/predict`);
  return response.data;
};

export const fetchHistoricalData = async () => {
  const response = await axios.get(`${API_BASE_URL}/historical-data`);
  return response.data;
};
