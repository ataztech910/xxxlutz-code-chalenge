import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import store from "./redux/store";
import { Provider } from "react-redux";

test('renders App with filter', () => {
  render(
      <Provider store={ store }>
        <App />
      </Provider>
  );
  const count = screen.getByRole("count");
  expect(count).toBeInTheDocument();

  const filter = screen.getByRole("filter");
  expect(filter).toBeInTheDocument();

  const sort = screen.getByRole("sort");
  expect(sort).toBeInTheDocument();

  const card = screen.getByRole("card");
  expect(card).toBeInTheDocument();
});
