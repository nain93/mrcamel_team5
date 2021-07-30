import React, { Component } from "react";
import { getProducts } from "utils/api";

export default class Home extends Component {
  constructor() {
    super();
    this.state = ({
      products: [],
    });
  }
  componentDidMount() {
    getProducts().then((data) => {
      data.forEach((o, i )=> o.id = i+ 1);
      this.setState({
        products: data,
      });
    });
  }
  render() {
    return <div>Home</div>;
  }
}
