// const axios = require('axios').default;
import axios from 'axios';
// Set the base URL for Axios
axios.defaults.baseURL = 'http://localhost:3000';

const getGameData = async () => {
  try {
    const response = await axios.get('/api/game');
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
export { getGameData };
// module.exports = { getGameData };
