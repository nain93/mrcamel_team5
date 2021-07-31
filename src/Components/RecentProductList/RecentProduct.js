import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import {
  NO_INTERRESTED,
  getFilterLocalStroage,
} from "utils/productStorageControl";

const ItemList = styled.section`
  text-align: center;
  border-top: 1px solid black;
  padding: 5px 0;
  cursor: pointer;
  > div:first-child {
    font-weight: 700;
    font-size: 15px;
  }
  > div {
    margin: 10px 0;
  }
`;

class RecentProduct extends Component {
  constructor() {
    super();
    this.state = {
      notification: "",
    };
  }

  render() {
    const noInterestedProducts = getFilterLocalStroage(NO_INTERRESTED, "id");
    const handleMoved = () => {
      const recentItem = this.props.item;

      if (noInterestedProducts.includes(recentItem.id)) {
        alert("관심없는 상품입니다.");
        this.setState({
          notification: noInterestedProducts.includes(recentItem.id),
        });
        return;
      }

      this.props.history.push({
        pathname: "/product",
        state: recentItem,
      });
    };
    const recentItem = this.props.item;
    if (!recentItem) {
      return <div>loading...</div>;
    }
    return (
      <ItemList key={recentItem.id} onClick={handleMoved}>
        <div>{recentItem.title}</div>
        <div>브랜드: {recentItem.brand}</div>
        <div>가격: {recentItem.price}</div>
        <div>조회 날짜: {recentItem.date}</div>
        {noInterestedProducts.includes(recentItem.id) && (
          <div style={{ color: "red" }}>관심없는 상품</div>
        )}
      </ItemList>
    );
  }
}
export default withRouter(RecentProduct);
