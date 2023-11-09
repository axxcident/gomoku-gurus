import React from 'react';
import { render, waitFor } from '@testing-library/react';
import InvisibleBoard from '../src/components/InvisibleBoard';
import { getGameBoard, clickTile } from './api/Gamedata';
import { checkFiveInARow } from './api/Wincheck';

jest.mock('./api/Gamedata', () => ({
  // getGameBoard: jest.fn().mockResolvedValue({ /* Mocked response */ }),
  getGameBoard: jest.fn(() => Promise.resolve({ /* mock data here */ })),
  clickTile: jest.fn(),
}));

jest.mock('./api/Wincheck', () => ({
  checkFiveInARow: jest.fn(),
}));

describe('InvisibleBoard', () => {
  it('renders without crashing', async () => {
    const { getByTestId } = render(<InvisibleBoard boardId="b069ba45-ce62-4334-b96a-adea04d30a" />);
    // const { getByTestId } = render(<InvisibleBoard boardId={{boardId: "b069ba45-ce62-4334-b96a-adea04d30a"}} />);
    await waitFor(() => expect(getByTestId('invisible-board')).toBeInTheDocument());
  });

  // Add more tests here
});
