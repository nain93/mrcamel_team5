import React, { Component } from "react";
import styled from "styled-components";

const ItemList = styled.section`
  text-align: center;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  margin: 5px 0;
`;

export default class RecentProduct extends Component {
  render() {
    const recentItem = this.props.item;
    if (!recentItem) {
      return <div>loading...</div>;
    }
    return (
      <ItemList key={recentItem.id}>
        <div>{recentItem.title}</div>
        <div>{recentItem.brand}</div>
        <div>{recentItem.price}</div>
        <div>{recentItem.date}</div>
      </ItemList>
    );
  }
}
