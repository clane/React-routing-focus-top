import React, { Component } from "react";
import { Helmet } from "react-helmet";
import cat1 from "./catImages/293931.svg";

class Component1 extends Component {
  componentDidMount() {
    this.topHeading.focus();
  }

  render() {
    return (
      <div className="child1">
        <Helmet>
          <html lang="en" />
          <meta charSet="utf-8" />
          <title>Component 1</title>
        </Helmet>

        <h2
          tabIndex="-1"
          ref={componentH2 => {
            this.topHeading = componentH2;
          }}
        >
          Component 1
        </h2>

        <img className="cat" src={cat1} alt="" />

      </div>
    );
  }
}

export default Component1;
