import React, { Component } from "react";
import "./App.css";
import Component1 from "./Component1.js";
import Component2 from "./Component2.js";
import Component3 from "./Component3.js";
import Component4 from "./Component4.js";
import { Helmet } from "react-helmet";
import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";

class App extends Component {
  constructor() {
    super();

    this.routeFocus = this.focusTop.bind(this);
  }

  focusTop() {
    var top = document.getElementById("top");
		top.focus() 
  }

  render() {
    return (
      <div className="App">
        <Helmet>
          <html lang="en" />
          <meta charSet="utf-8" />
          <title>
            React Routing When Components Load - Moving Focus to Top
          </title>
        </Helmet>

        <div
			    id="top"
          tabIndex="-1"
          ref={top => {
            this.topElementRef = top;
          }}
        >
          Top Element
        </div>

        <h1>React Routing When Components Load - Moving Focus to Top</h1>

        <div>
          <a href="https://github.com/clane/React-routing-focus-top">
            https://github.com/clane/React-routing-focus-top
          </a>
        </div>

        <BrowserRouter>
          <div>

            <ul role="navigation">
              <li><Link to="Component1">Component 1</Link></li>
              <li><Link to="Component2">Component 2</Link></li>
              <li><Link to="Component3">Component 3</Link></li>
              <li><Link to="Component4">Component 4</Link></li>
            </ul>

            <Switch>
              <Route
                path="/Component1"
                render={props => (
                  <Component1 {...props} focusTopMethod={this.routeFocus} />
                )}
              />

              <Route
                path="/Component2"
                render={props => (
                  <Component2 {...props} focusTopMethod={this.routeFocus} />
                )}
              />

              <Route
                path="/Component3"
                render={props => (
                  <Component3 {...props} focusTopMethod={this.routeFocus} />
                )}
              />
              <Route
                path="/Component4"
                render={props => (
                  <Component4 {...props} focusTopMethod={this.routeFocus} />
                )}
              />

              <Redirect from="/" to="/Component1" />
            </Switch>
          </div>
        </BrowserRouter>

      </div>
    );
  }
}

export default App;
