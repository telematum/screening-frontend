import { render, screen, waitFor } from '@testing-library/react';
import App from './App';
import React from 'react';
import { store } from './api/store';
import { Provider } from 'react-redux';
import fetchMock from 'jest-fetch-mock';
import { AppointmentMock } from './mocks/appointmentMock';

const apiUrl =
  'https://gist.githubusercontent.com/telematum/7751eec667033ac8acd244542e464e18/raw/d4710c6fb54224a0bd316ecdc5246633aceefce5/todays.json';

describe('renders learn react link', () => {
  const Wrapper = () => (
    <Provider store={store}>
      <App />
    </Provider>
  );

  test('should show a loader when laoding data', () => {
    render(Wrapper());
    fetchMock.mockOnceIf(apiUrl, () => ({
      status: 200,
      body: JSON.stringify(AppointmentMock),
    }));
    screen.getByRole('status');
  });
  test('should show error message when erquest fails', async () => {
    render(Wrapper());
    fetchMock.mockOnceIf(apiUrl, () =>
      Promise.resolve({
        status: 502,
      })
    );
    await waitFor(() => screen.getByText('Something went wrong, Please try later.'));
  });
  test('should show appointment table and header message when success request', async () => {
    render(Wrapper());
    fetchMock.mockOnceIf(apiUrl, () =>
      Promise.resolve({
        status: 200,
        body: JSON.stringify(AppointmentMock),
      })
    );
    await waitFor(() => screen.getByRole('table'));
  });
});
