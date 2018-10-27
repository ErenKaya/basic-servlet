"use strict";

var app = {
  title: "Indecision App",
  subtitle: "This is subtitle",
  options: ["One", "Two"]
};

var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    app.title
  ),
  app.subtitle && React.createElement(
    "p",
    null,
    app.subtitle
  ),
  React.createElement(
    "p",
    null,
    app.options.length > 0 ? "Here is your options" : "No Options"
  ),
  React.createElement(
    "ol",
    null,
    React.createElement(
      "li",
      null,
      "Item Onee"
    ),
    React.createElement(
      "li",
      null,
      "Item Two"
    )
  )
);

var user = {
  name: "",
  age: 26,
  location: ""
};

user.name = "New Eren";
user.age = 21;
user.location = "New York";

function getLocation(location) {
  if (location) {
    return React.createElement(
      "p",
      null,
      "Location: ",
      location
    );
  } else {
    return "Unknown";
  }
}

var userName = "Eren";
var userAge = 19;
var userLocation = "New Zeland";

var templateTwo = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    user.name
  ),
  React.createElement(
    "p",
    null,
    "Age: ",
    user.age
  ),
  getLocation(user.location)
);

var appRoot = document.getElementById("app");
ReactDOM.render(template, appRoot);
