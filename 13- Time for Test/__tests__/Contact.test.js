import Contact from "../src/components/Contact";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";


describe("Contact Component", () => {
    
    test("Should render contact us component", () => {
        render(<Contact />);
        
        const heading = screen.getByText("Get in Touch");
        // We are getting JSX - React Element
        
        expect(heading).toBeInTheDocument();
    })
    
    test("Should load 3 input boxes on the Contact component", () => {
        render(<Contact />);
    
        // Querying
        const inputBoxes = screen.getAllByRole("textbox");
    
        //console.log(inputBoxes.length);
    
        // Assertion
    
        expect(inputBoxes.length).toBe(3);
      });

})

