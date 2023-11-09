import React from 'react';
import { render, waitFor } from '@testing-library/react';
import InvisibleBoard from '../src/components/InvisibleBoard';
import { getGameBoard, clickTile } from './api/Gamedata';
import { checkFiveInARow } from './api/Wincheck';

jest.mock('./api/Gamedata', () => ({
  getGameBoard: jest.fn(() => Promise.resolve({ /* mock data here */ })),
  clickTile: jest.fn(),
}));

jest.mock('./api/Wincheck', () => ({
  checkFiveInARow: jest.fn(),
}));

describe('InvisibleBoard', () => {
  it('renders without crashing', async () => {
    const mockData = { /* your mock data here */ };
    getGameBoard.mockResolvedValueOnce(mockData);

    const { getByTestId } = render(<InvisibleBoard boardId="default" />);

    // Wait for the asynchronous data fetching to complete
    await waitFor(() => expect(getByTestId('invisible-board')).toBeInTheDocument());

    // Add your assertions based on the fetched data
  });

  // Add more tests here
});
