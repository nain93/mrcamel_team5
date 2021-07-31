import React, { Component } from "react";
import styled from "styled-components";
import {
  WATCH,
  NO_INTERRESTED,
  setLocalStorageProducts,
  getFilterLocalStorageInterestedProducts,
} from "utils/productStorageControl";

const Container = styled.div`
  height: calc(100vh - 55px);
`;

const ProductWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Item = styled.div`
  margin-bottom: 40px;
  text-align: center;
  font-size: 18px;
  > div:first-child {
    font-weight: 700;
    font-size: 24px;
  }
  div {
    margin-bottom: 15px;
  }
`;

const ButtonWrap = styled.div`
  button {
    margin: 0 10px;
  }
`;

export default class Product extends Component {
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
    if (randomProducts.length) {
      randomProducts.sort(() => Math.random() - 0.5);
      return randomProducts[0];
    } else {
      return null;
    }
  };

  componentDidUpdate() {
    const { location } = this.props;
    setLocalStorageProducts(WATCH, location.state);
  }

  randomRedirect = () => {
    const nextProduct = this.getRandomItem();
    if (nextProduct) {
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
    } else {
      alert("모든 상품에 관심없음을 표시하였습니다.");
    }
  };

  render() {
    const { location } = this.props;
    return (
      <Container>
        <ProductWrap>
          <Item>
            <div>{location.state.title}</div>
            <div>브랜드: {location.state.brand}</div>
            <div>가격: {location.state.price}</div>
          </Item>
          <ButtonWrap>
            <button onClick={this.pushNoInterest}>관심없음</button>
            <button onClick={this.randomRedirect}>랜덤조회</button>
          </ButtonWrap>
        </ProductWrap>
      </Container>
    );
  }
}
