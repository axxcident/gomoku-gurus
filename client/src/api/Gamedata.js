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
// Funktion som fetchar ett specifik bräda med dess id
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

const clickTile = async(rowId, colId, playerName, isPlayer1orPlayer2) => {
  // const url = new URL(window.location.href);
  // const boardId = url.pathname.split('/').pop();
  const boardId = "2ca69660-fa1b-45be-b53d-29ea6ca839f9";
  try {
    const response = await axios.post(`/api/click_tile/${boardId}`, { rowId, colId, playerName, isPlayer1orPlayer2 });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};


export { getGameData, addPlayer1, addPlayer2, createNewGameBoard, clickTile, getGameBoard, changeBoardState };
