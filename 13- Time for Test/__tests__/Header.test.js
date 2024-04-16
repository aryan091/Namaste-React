import Header from "../src/components/Header"
import { render , screen } from "@testing-library/react"
import { Provider } from "react-redux";
import {  BrowserRouter } from "react-router-dom"
import appStore from "../store/appStore"
import "@testing-library/jest-dom";

test('Should load Header Component', () => { 

    render(
        <BrowserRouter>
          <Provider store={appStore}>
            <Header />
          </Provider>
        </BrowserRouter>
      );


      const heading = screen.getByText("Home");
        // We are getting JSX - React Element
        
        expect(heading).toBeInTheDocument();
 })

test("Should render Header Component with a Cart items 0 ", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
  
    const cartItems = screen.getByText("Cart ( 0 items)");
  
    expect(cartItems).toBeInTheDocument();
  });

  // USING

  test("Should render Header Component with a Cart item ", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
  
    const cartItems = screen.getByText(/Cart/);
  
    expect(cartItems).toBeInTheDocument();
  });