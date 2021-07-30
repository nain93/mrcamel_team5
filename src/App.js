import Nav from "Components/Nav";
import Home from "pages/Home";
import Product from "pages/Product";
import RecentList from "pages/RecentList";
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";

const GlobalContainer = styled.div`
  max-width: 768px;
  margin: 0 auto;
  background-color: rgba(0, 0, 0, 0.1);
  border: 3px solid black;
  padding-top: 50px;
`;

export default class App extends Component {
  render() {
    return (
      <GlobalContainer>
        <Router>
          <GlobalStyles />
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/product" component={Product} />
            <Route path="/recentlist" component={RecentList} />
          </Switch>
        </Router>
      </GlobalContainer>
    );
  }
}
