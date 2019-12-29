import React from 'react';
import { render, waitForElementToBeRemoved } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ProgressModal from './ProgressModal';

describe('Progress Modal Component', () => {
  test('it should render Progress modal', () => {
    const { getByTestId } = render(<ProgressModal open />);
    expect(getByTestId('progress-modal')).toBeInTheDocument();
  });

  test('it should have progress indicator', () => {
    const { getByTestId } = render(<ProgressModal open />);

    expect(getByTestId('progress-indicator')).toBeInTheDocument();
  });

  test('it should have disappear after some progress', async () => {
    const { getByTestId, rerender } = render(<ProgressModal open />);

    window.setTimeout(() => {
      rerender(<ProgressModal open={false} />);
    }, 500);

    const expected = true;

    // is hidden
    const actual = await waitForElementToBeRemoved(() =>
      expect(getByTestId('progress-modal'))
    );

    expect(actual).toBe(expected);
  });
});
