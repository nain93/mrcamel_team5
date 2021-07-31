import React, { Component } from "react";
import RecentProductList from "Components/RecentProductList";
import {
  getFilterLocalStroage,
  getLocalStorageProducts,
  NO_INTERRESTED,
  WATCH,
} from "utils/productStorageControl";
import styled from "styled-components";

const Container = styled.div``;

export default class RecentList extends Component {
  render() {
    return (
      <Container>
        <RecentProductList
          productList={getLocalStorageProducts(WATCH)}
          noInterestedList={getLocalStorageProducts(NO_INTERRESTED)}
          brandList={getFilterLocalStroage(WATCH, "brand")}
        />
      </Container>
    );
  }
}
