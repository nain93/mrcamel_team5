import React, { Component } from "react";
import styled from "styled-components";
import CheckBoxFilter from "./CheckBoxFilter";
import SortFilter from "./SortFilter";

const Container = styled.div``;

export default class index extends Component {
  handleCheckbox = (option) => {
    const { handleFilter, filter } = this.props;
    let changedFilter = filter;
    changedFilter.brands = option;

    handleFilter(changedFilter);
  };
  render() {
    return (
      <Container>
        <CheckBoxFilter
          handleCheckbox={this.handleCheckbox}
          brandList={this.props.brandList}
          productList={this.props.productList}
          toggleNoInterest={this.props.toggleNoInterest}
          toggleBrandCheck={this.props.toggleBrandCheck}
        />
        <SortFilter />
      </Container>
    );
  }
}
