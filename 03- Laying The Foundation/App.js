import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", {id:"heading"}, "Namaste React 🚀");
//                                   tag    attribute       Children

//JSX
// Creating React Element Using JSX
const author = 
(
<h1 id="heading">
    Aryan Daftari
    </h1>
)

// React Component 
const Title = () => 
(
<h1 id="jsxHeading">
    Namaste React 🚀 by JSX
    </h1>
)

const root = ReactDOM.createRoot(document.getElementById("root"));
//                                 Reference to that HTML Element


console.log(heading); // Both are same
//console.log(jsxHeading); // Both are same

// Component Composition 
const HeadingComponent = () => {
    return (
        <div className="container">
            <Title /> 
        <h1 id="heading">
            Namaste React Component 🚀
        </h1>
        {author}
        </div>
    )
}

// root.render(jsxHeading) -> For rendering React Element
root.render(<HeadingComponent />); // -> For rendering React Component 
// Converting Object to HTMl . It will replace the div with h1


console.log(HeadingComponent());