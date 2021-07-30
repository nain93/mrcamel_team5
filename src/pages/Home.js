import React, { Component } from "react";
import { getProducts } from "utils/api";

export default class Home extends Component {
  constructor() {
    super();
    this.state({
      products: [],
    });
  }
  componentDidMount() {
    getProducts().then((data) => {
      this.setState({
        products: data,
      });
    });
  }
  render() {
    return <div>Home</div>;
  }
}
