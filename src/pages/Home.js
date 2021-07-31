import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
`;

const ItemList = styled.section`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
`;

const Item = styled(Link)`
  border-top: 1px solid black;
  padding: 5px 0;
  text-align: center;
  > div:first-child {
    font-weight: 700;
    font-size: 15px;
  }
  > div {
    margin: 10px 0;
  }
`;

export default class Home extends Component {
  render() {
    const { products } = this.props;

    return (
      <Container>
        <ItemList>
          {products.map((item) => (
            <Item
              key={item.id}
              to={{
                pathname: `/product`,
                state: {
                  id: item.id,
                  title: item.title,
                  brand: item.brand,
                  price: item.price,
                },
              }}
            >
              <div>{item.title}</div>
              <div>브랜드: {item.brand}</div>
              <div>가격: {item.price}</div>
            </Item>
          ))}
        </ItemList>
      </Container>
    );
  }
}
