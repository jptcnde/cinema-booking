import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Seat from './Seat';
import { STATUSES } from './constants';
import ThemeProvider from '../../components/Theme';

const SEAT_ID = 'domain-cmp-seat';

describe('Seat Domain Component', () => {
  const defaultProps = {
    onSelect: () => {},
    value: '0:0',
    status: STATUSES.available,
    desc: 'A:01'
  };

  test('it should render the Seat', () => {
    // eslint-disable-next-line react/jsx-props-no-spreading
    const { getByTestId } = render(<Seat {...defaultProps} />, {
      wrapper: ThemeProvider
    });
    expect(getByTestId(SEAT_ID)).toBeInTheDocument();
  });

  test('it should display description', () => {
    const expectedDesc = 'B1:2';

    // eslint-disable-next-line react/jsx-props-no-spreading
    const { getByText } = render(
      <Seat {...defaultProps} desc={expectedDesc} />,
      {
        wrapper: ThemeProvider
      }
    );

    expect(getByText(expectedDesc)).toBeDefined();
  });

  test('it should select the Seat', () => {
    const handleSelect = jest.fn();
    // eslint-disable-next-line react/jsx-props-no-spreading
    const { getByTestId } = render(
      <Seat {...defaultProps} onSelect={handleSelect} />,
      {
        wrapper: ThemeProvider
      }
    );
    const element = getByTestId(SEAT_ID);

    fireEvent.click(element);

    expect(handleSelect).toHaveBeenCalled();
  });

  test('it should be disabled with "booked" status', () => {
    const { getByTestId } = render(
      // eslint-disable-next-line react/jsx-props-no-spreading
      <Seat {...defaultProps} status={STATUSES.booked} />,
      {
        wrapper: ThemeProvider
      }
    );
    const element = getByTestId(SEAT_ID);
    const expected = true;
    const actual = element.getAttribute('aria-disabled') === 'true';
    expect(expected).toBe(actual);
  });

  test('it should be disabled with "unavailable" status', () => {
    const { getByTestId } = render(
      // eslint-disable-next-line react/jsx-props-no-spreading
      <Seat {...defaultProps} status={STATUSES.unavailable} />,
      {
        wrapper: ThemeProvider
      }
    );
    const element = getByTestId(SEAT_ID);
    const expected = true;
    const actual = element.getAttribute('aria-disabled') === 'true';
    expect(expected).toBe(actual);
  });

  test('it should proper Seat color by status', () => {
    const expected = 'rgb(186, 104, 200)';
    // eslint-disable-next-line react/jsx-props-no-spreading
    const { getByTestId } = render(
      <Seat {...defaultProps} status={STATUSES.available} />,
      {
        wrapper: ThemeProvider
      }
    );

    const element = getByTestId(SEAT_ID);

    const actual = window.getComputedStyle(element).backgroundColor;

    expect(expected).toBe(actual);
  });
});
