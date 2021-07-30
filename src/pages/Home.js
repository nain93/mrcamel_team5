import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { getProducts } from "utils/api";

const Container = styled.div`
  width: 100%;
`;

const ItemList = styled.section`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
`;

const Item = styled(Link)`
  border: 1px solid white;
  text-align: center;
`;

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
  }
  componentDidMount() {
    getProducts().then((data) => {
      data.forEach((o, i) => (o.id = i + 1));
      this.setState({
        products: data,
      });
    });
  }
  render() {
    return (
      <Container>
        <ItemList>
          {this.state.products.map((item) => (
            <Item
              key={item.id}
              to={{
                pathname: `/product`,
                state: {
                  title: item.title,
                  brand: item.brand,
                  price: item.price,
                },
              }}
            >
              <div>{item.title}</div>
              <div>{item.brand}</div>
              <div>{item.price}</div>
            </Item>
          ))}
        </ItemList>
      </Container>
    );
  }
}
