import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  WATCH,
  NO_INTERRESTED,
  setLocalStorageProducts,
  getFilterLocalStorageInterestedProducts,
} from "utils/productStorageControl";

const Container = styled.div`
  height: calc(100vh - 57px);
`;

const Item = styled.div`
  text-align: center;
  padding: 40px 0 20px;
  font-size: 18px;
  div {
    padding-bottom: 8px;
  }
`;

const ButtonWrap = styled.div`
  text-align: center;
  button {
    margin: 0 10px;
  }
`;

export default class Product extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
    setLocalStorageProducts(WATCH, location.state);
  }

  pushNoInterest = () => {
    const { location } = this.props;
    setLocalStorageProducts(NO_INTERRESTED, location.state);
    this.randomRedirect();
  };

  getRandomItem = () => {
    const { location, products } = this.props;
    let randomProducts = getFilterLocalStorageInterestedProducts(
      products,
      location.state
    );
    randomProducts.sort(() => Math.random() - 0.5);
    return randomProducts[0];
  };

  randomRedirect = () => {
    const nextProduct = this.getRandomItem();
    const { history } = this.props;
    history.push({
      pathname: "/product",
      state: {
        id: nextProduct.id,
        title: nextProduct.title,
        brand: nextProduct.brand,
        price: nextProduct.price,
      },
    });
  };

  render() {
    const { location } = this.props;
    return (
      <Container>
        <Item>
          <div>{location.state.title}</div>
          <div>{location.state.brand}</div>
          <div>{location.state.price}</div>
        </Item>
        <ButtonWrap>
          <button onClick={this.pushNoInterest}>관심없음</button>
          <button onClick={this.randomRedirect}>랜덤조회</button>
        </ButtonWrap>
      </Container>
    );
  }
}
