import Body from "../src/components/Body"
import { fireEvent, render , screen } from "@testing-library/react"
import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/mockResListData.json"
import { act } from 'react-dom/test-utils';
import {  BrowserRouter } from "react-router-dom"



global.fetch = jest.fn(() => {
    return Promise.resolve({
      json: () => {
        return Promise.resolve(MOCK_DATA);
      },
    });
  });

test('Should Search Res List for pizza text input', async () => { 

    await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardsBeforeSearch = screen.getAllByTestId("resCard");

  expect(cardsBeforeSearch.length).toBe(9);

    const searchBtn = screen.getByRole("button", { name: /search/i });

     const searchInput = screen.getByTestId("search-input");

     fireEvent.change(searchInput, { target: { value: "pizza" } });

     fireEvent.click(searchBtn);

     const cardsAfterSearch = screen.getAllByTestId("resCard");

     expect(cardsAfterSearch.length).toBe(1)
})

test("Should filter Top Rated Restaurant", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      )
    );
  
    const cardsBeforeFilter = screen.getAllByTestId("resCard");
  
    expect(cardsBeforeFilter.length).toBe(9);
  
    const topRatedBtn = screen.getByRole("button", {
      name: "Top Rated Restaurants",
    });
    fireEvent.click(topRatedBtn);
  
    const cardsAfterFilter = screen.getAllByTestId("resCard");
    expect(cardsAfterFilter.length).toBe(7);
  });