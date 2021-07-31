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
  border-bottom: 1px solid black;
  margin: 5px 0;
`;

class RecentProduct extends Component {
  handleMoved = () => {
    const recentItem = this.props.item;
    const noInterestedProducts = getFilterLocalStroage(NO_INTERRESTED, "id");

    if (noInterestedProducts.includes(recentItem.id)) {
      alert("관심없는 상품입니다.");
      return;
    }

    this.props.history.push({
      pathname: "/product",
      state: recentItem,
    });
  };

  render() {
    const recentItem = this.props.item;
    if (!recentItem) {
      return <div>loading...</div>;
    }
    return (
      <ItemList key={recentItem.id} onClick={this.handleMoved}>
        <div>{recentItem.title}</div>
        <div>{recentItem.brand}</div>
        <div>{recentItem.price}</div>
        <div>{recentItem.date}</div>
      </ItemList>
    );
  }
}
export default withRouter(RecentProduct);
