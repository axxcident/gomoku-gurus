import axios from 'axios';

// Set the base URL for Axios
axios.defaults.baseURL = 'http://localhost:3001';
// Insomnia Referens http://localhost:3001/api/get_game
const getGameData = async () => {
  try {
    const response = await axios.get('/api/get_game');
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const getGameBoard = async (boardId) => {
  try {
    const response = await axios.get(`/api/get_board/${boardId}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const createNewGameBoard = async () => {
  try {
    const response = await axios.post('/api/create_new_board');
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

// Återställ data med board id
const resetGameBoard = async (boardId) => {
  try {
    const response = await axios.post(`/api/reset_board/${boardId}`);
    console.log('Board reset successful');
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


const changeBoardState = async (boardId, newState) => {
    try {
      const response = await axios.post(`/api/change_board_state/${boardId}`, { newState });
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

const clickTile = async(boardId, rowId, colId, playerName, isPlayer1orPlayer2) => {
  // console.log("From gameData: ", boardId, rowId, colId, playerName, isPlayer1orPlayer2);
  try {
    const response = await axios.post(`/api/click_tile/${boardId}`, { rowId, colId, playerName, isPlayer1orPlayer2 });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export { getGameData, addPlayer1, addPlayer2, createNewGameBoard, clickTile, getGameBoard, changeBoardState, resetGameBoard };
