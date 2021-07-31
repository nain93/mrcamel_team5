import React, { Component } from "react";
import styled from "styled-components";
import CheckBoxFilter from "./CheckBoxFilter";
import SortFilter from "./SortFilter";

const Container = styled.div``;

export default class index extends Component {
  handleCheckbox = (option) => {
    const { handleFilter, filterOptions } = this.props;
    let changedFilter = filterOptions;
    changedFilter.brands = option;
    handleFilter(changedFilter);
  };

  handleSort = (option) => {
    const {handleFilter, filterOptions}= this.props;
    console.log(option, 'handleSort');
    handleFilter({
      ...filterOptions,
      sort: option
    })
  }
  render() {
    return (
      <Container>
        <CheckBoxFilter
          handleCheckbox={this.handleCheckbox}
          brandList={this.props.brandList}
          productList={this.props.productList}
          handleFilter={this.props.handleFilter}
          noInterestedFilter={this.props.noInterestedFilter}
        />
        <SortFilter handleSort={this.handleSort}/>
      </Container>
    );
  }
}
