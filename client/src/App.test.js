import React from 'react';
import { render, waitFor, screen, fireEvent } from '@testing-library/react';
import InvisibleBoard from '../src/components/InvisibleBoard';
import { getGameBoard, clickTile } from './api/Gamedata';
import { checkFiveInARow } from './api/Wincheck';
import LosingPopup from './components/LosingPopUp';
import WinnerPopup from './components/WinnerPopUp';


// jest.mock('./api/Gamedata', () => ({
//   getGameBoard: jest.fn(() => Promise.resolve({ /* mock data here */ })),
//   clickTile: jest.fn(),
// }));
// Mock the API file
jest.mock('./api/Gamedata', () => ({
  getGameBoard: jest.fn(),
  clickTile: jest.fn(),
}));

jest.mock('./api/Wincheck', () => ({
  checkFiveInARow: jest.fn(),
}));

describe('InvisibleBoard', () => {
  it('renders without crashing', async () => {
    // Example data you want to use in your test
    const mockData = {
      "default": {
        "id":"","name":"empty game","round":1,"playerTurn":1,"player1":[],"player2":[],"state":"new","board":{"minInRow":5,"cols":16,"rows":16,"tiles":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]}
      },
    };
    // Mock the implementation of getGameBoard to use the actual function
    getGameBoard.mockResolvedValueOnce(mockData);
    // const { getByTestId } = render(<InvisibleBoard boardId="default" />);
    const { getByTestId } = render(<InvisibleBoard />);
    // Wait for the asynchronous data fetching to complete
    // await waitFor(() => expect(getByTestId('invisible-board')).toBeInTheDocument());
    await waitFor(() => {
      expect(getByTestId('i-board')).toBeInTheDocument();

      // Once 'i-board' is present, wait for 'invisible-row'
      waitFor(() => {
        const clickableButton = getByTestId('invisible-row').querySelector('.invisible-cell');
        expect(clickableButton).toBeInTheDocument();
        fireEvent.click(clickableButton);
        expect(getByTestId('invisible-board').querySelector('.b-circle')).toBeInTheDocument();
        expect(getByTestId('invisible-board').querySelector('.w-circle')).toBeInTheDocument();
      });
    });
  });

  it('changes state correctly on handleInvisibleClick', async () => {
    const mockData = {
      "default": {
        "id":"","name":"empty game","round":1,"playerTurn":1,"player1":[],"player2":[],"state":"new","board":{"minInRow":5,"cols":16,"rows":16,"tiles":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]}
      },
    };
    getGameBoard.mockResolvedValueOnce(mockData);

    const { getByTestId } = render(<InvisibleBoard />);
    await waitFor(() => expect(getByTestId('invisible-board')).toBeInTheDocument());

    // Mock a click event here and check if the state variables change as expected
    fireEvent.click(/* your clickable element */);

    // Add your assertions based on the expected state changes
  });

  it('calls getGameBoard and clickTile with correct arguments', async () => {
    const mockData = {
      "default": {
        "id":"","name":"empty game","round":1,"playerTurn":1,"player1":[],"player2":[],"state":"new","board":{"minInRow":5,"cols":16,"rows":16,"tiles":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]}
      },
    };
    getGameBoard.mockResolvedValueOnce(mockData);
    const clickTileMock = jest.fn();
    const { getByTestId } = render(<InvisibleBoard clickTile={clickTileMock} />);

    await waitFor(() => {
      expect(getByTestId('i-board')).toBeInTheDocument();

      // Once 'i-board' is present, wait for 'invisible-row'
      waitFor(() => {
        const clickableButton = getByTestId('invisible-row').querySelector('.invisible-cell');
        expect(clickableButton).toBeInTheDocument();
        fireEvent.click(clickableButton);
        expect(getByTestId('invisible-board').querySelector('.b-circle')).toBeInTheDocument();
        expect(getByTestId('invisible-board').querySelector('.w-circle')).toBeInTheDocument();
        expect(clickTileMock).toHaveBeenCalledWith(
          'default',
          0,
          0,
          'playerName',
          1
        );
      });
    });
  });

  it('identifies win condition correctly', async () => {
    const mockData = {
      "default": {
        "id":"","name":"empty game","round":1,"playerTurn":1,"player1":[],"player2":[],"state":"new","board":{"minInRow":5,"cols":16,"rows":16,"tiles":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]}
      },
    };
    getGameBoard.mockResolvedValueOnce(mockData);
    const clickTileMock = jest.fn();
    const { getByTestId } = render(<InvisibleBoard clickTile={clickTileMock} />);


    await waitFor(() => {
      expect(getByTestId('i-board')).toBeInTheDocument();

      // Once 'i-board' is present, wait for 'invisible-row'
      waitFor(() => {
        const clickableButtons = getByTestId('invisible-row').querySelector('.invisible-cell');
        // fireEvent.click(clickableButtons[0][0]);
        fireEvent.click(clickableButtons[0]);
        fireEvent.click(clickableButtons[1]);
        fireEvent.click(clickableButtons[2]);
        fireEvent.click(clickableButtons[3]);
        fireEvent.click(clickableButtons[4]);
        expect(clickTileMock).toHaveBeenCalledWith(
          'default',
          0,
          0,
          'playerName',
          1
        );
        expect(clickTileMock).toHaveBeenCalledWith(
          'default',
          0,
          1,
          'playerName',
          1
        );
        expect(clickTileMock).toHaveBeenCalledWith(
          'default',
          0,
          2,
          'playerName',
          1
        );
        expect(clickTileMock).toHaveBeenCalledWith(
          'default',
          0,
          3,
          'playerName',
          1
        );
        expect(clickTileMock).toHaveBeenCalledWith(
          'default',
          0,
          4,
          'playerName',
          1
        );
      });
    });

  });

});

describe('LosingPopup', () => {
  it('renders without crashing', () => {
    render(<LosingPopup />);
    expect(screen.getByTestId('losing-popup')).toBeInTheDocument();
  });
});

describe('WinnerPopup', () => {
  it('renders without crashing', () => {
    render(<WinnerPopup />);
    expect(screen.getByTestId('winner-popup')).toBeInTheDocument();
  });
});
