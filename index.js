const name = "rahul";
const Parent = React.createElement(
  "div",
  { id: "parent" },

  React.createElement(
    "div",
    { id: "child" },

    React.createElement("h1", {}, "hello react world")
  )
);

const parent2 = React.createElement(
  "div",
  { id: "parent2" },

  React.createElement(
    "div",
    { id: "child2" },

    [
      React.createElement(
        "h1",
        { className: "child12", key: "12" },
        "hello react2 world"
      ),
      React.createElement("h1", {}, "hello react2 world"),
    ]
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(Parent);
console.log(parent2);
const root1 = ReactDOM.createRoot(document.getElementById("root1"));
root1.render(parent2);

// const heading= document.createElement("h1");
// heading.innerHTML="hello"
// const root=document.body.appendChild(heading);
// console.log(heading);
