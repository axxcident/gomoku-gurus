import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import InvisibleBoard from '../src/components/InvisibleBoard'; // Update with the correct path

jest.mock('../src/api/Gamedata', () => ({
  getGameBoard: jest.fn().mockResolvedValue({ /* Mocked response */ }),
  clickTile: jest.fn(),
}));

jest.mock('../src/api/Wincheck', () => ({
  checkFiveInARow: jest.fn(),
}));

describe('InvisibleBoard', () => {
  it('renders without crashing', () => {
    const { getByTestId } = render(<InvisibleBoard boardId={{boardId: {boardId: 1}}} />);
    expect(getByTestId('invisible-board')).toBeInTheDocument();
  });

  // Add more tests here
});
