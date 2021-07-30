import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  height: calc(100vh - 57px);
`;

export default class Product extends Component {
  render() {
    return <Container>Product</Container>;
  }
}
