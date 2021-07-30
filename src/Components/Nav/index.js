import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.nav`
  width: 768px;
  height: 50px;
  margin: 0 auto;
  position: fixed;
  top: 0;
  background-color: black;
  padding: 0 20px;
  display: flex;
  align-items: center;
  color: white;
`;

const NavList = styled(Link)`
  margin: 0 10px;
`;

class Nav extends React.Component {
  render() {
    return (
      <Container>
        <NavList to="/">Home</NavList>
        <NavList to="/recentList">RecentList</NavList>
      </Container>
    );
  }
}

export default Nav;
