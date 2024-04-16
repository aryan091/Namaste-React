import Cart from "../src/components/Cart"
import RestaurantMenu from "../src/components/RestaurantMenu"
import { fireEvent, render , screen } from "@testing-library/react"
import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/mockResMenu.json"
import { act } from 'react-dom/test-utils';
import {  BrowserRouter } from "react-router-dom"
import Header from "../src/components/Header"
import { Provider } from "react-redux";
import appStore from "../store/appStore";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);



test('Should load Restaurant Menu Component', async () => { 

    await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordionHeader = screen.getByText("Honest Bowls (16)");
  fireEvent.click(accordionHeader);

  fireEvent.click(accordionHeader);

  expect(screen.getAllByTestId("foodItems").length).toBe(16);

  expect(screen.getByText("Cart ( 0 items)")).toBeInTheDocument();

  const addBtns = screen.getAllByRole("button", { name: "ADD" });
  fireEvent.click(addBtns[0]);

  expect(screen.getByText("Cart ( 1 items)")).toBeInTheDocument();

  fireEvent.click(addBtns[1]);

  expect(screen.getByText("Cart ( 2 items)")).toBeInTheDocument();

  // Because that two Items is card have same data id as accordionHeader
  expect(screen.getAllByTestId("foodItems").length).toBe(18);

  fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));

  expect(screen.getAllByTestId("foodItems").length).toBe(16);

  expect(
    screen.getByText("Cart is empty. Add Items to the cart!")
  ).toBeInTheDocument();

})