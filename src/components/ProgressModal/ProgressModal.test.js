import React from 'react';
import { render } from '@testing-library/react';
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
});
