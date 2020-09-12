import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import CalendarContainer from './CalendarContainer';

describe('View mode:', () => {
  test('should be in the "week" view by default', () => {
    const { getByLabelText } = render(<CalendarContainer />);
    expect(getByLabelText('changeView')).toHaveTextContent('week');
    expect(getByLabelText('week-calendar')).toBeInTheDocument();
  });

  test('toggling once should show the "day" view', () => {
    const { getByLabelText } = render(<CalendarContainer />);
    fireEvent.click(getByLabelText('changeView'));
    expect(getByLabelText('changeView')).toHaveTextContent('day');
    expect(getByLabelText('day-calendar')).toBeInTheDocument();
  });

  test('toggling twice should show the "month" view', () => {
    const { getByLabelText } = render(<CalendarContainer />);
    fireEvent.click(getByLabelText('changeView'));
    fireEvent.click(getByLabelText('changeView'));
    expect(getByLabelText('changeView')).toHaveTextContent('month');
    expect(getByLabelText('month-calendar')).toBeInTheDocument();
  });

  test('toggling three times should show the "week" view', () => {
    const { getByLabelText } = render(<CalendarContainer />);
    fireEvent.click(getByLabelText('changeView'));
    fireEvent.click(getByLabelText('changeView'));
    fireEvent.click(getByLabelText('changeView'));
    expect(getByLabelText('changeView')).toHaveTextContent('week');
    expect(getByLabelText('week-calendar')).toBeInTheDocument();
  });

  test('if a view is not selected it will not be displayed', () => {
    const { queryByLabelText } = render(<CalendarContainer />);
    expect(queryByLabelText('month-calendar')).not.toBeInTheDocument();
  });
});

describe('Week view', () => {

});

test('something', () => {
  const { getByText } = render(<CalendarContainer />);
  expect(getByText('Schedule')).toBeInTheDocument();
});
