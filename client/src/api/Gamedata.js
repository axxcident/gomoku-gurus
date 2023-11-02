import axios from 'axios';
// Set the base URL for Axios
axios.defaults.baseURL = 'http://localhost:3001';
// http://localhost:3001/api/get_game
const getGameData = async () => {
  try {
    const response = await axios.get('/api/get_game');
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const addPlayer1 = async (playerName) => {
  try {
    const response = await axios.post('/api/add_player1', { playerName });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const addPlayer2 = async (playerName) => {
  try {
    const response = await axios.post('/api/add_player2', { playerName });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};


export { getGameData, addPlayer1, addPlayer2 };
