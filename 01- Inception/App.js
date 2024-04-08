const parent = React.createElement(
    "div", {id:"parent"}, 
    React.createElement
    (
        "div", {id:"child"},

        [
        React.createElement("h1", {}, "I am in H1 tag"),
        React.createElement("h2", {}, "I am in H2 tag")
        ]
    )
);


const heading = React.createElement("h1", {id:"heading"}, "Namaste React from React CDN");
// {} where you will give attribute the tags
// Third Attribute is the children
const root = ReactDOM.createRoot(document.getElementById("root"));

// console.log(heading);
// console.log(root);

console.log(parent);

//root.render(heading);

root.render(parent);


// The most costly operation in the Web Page is the DOM Manipulation.

{/* <div id="parent">
    <div id="child">
        <h1>I am in H1 tag</h1>
        <h2>I am in H2 tag</h2>
    </div>
</div> */}


// Render method is converting this heading object into HTML element
// ReactElement(Object) => HTML(Browser Undreadable)

// <!-- Everything inside the root get replaced by render method -->

// We can use React only a small portion of Web Page