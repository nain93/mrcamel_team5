import React, { Component } from "react";
import ResentList from 'Components/ResentList'
import styled from "styled-components";

const Container = styled.div`
  height: calc(100vh - 57px);
`;

export default class RecentList extends Component {
  render() {
    return <Container><ResentList/></Container>;
  }
}
