import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  padding: 20px;
  width: 100%;
  justify-content: space-around;
`;

const CheckBoxContainer = styled.div`
  display: flex;
`;

export default class CheckBoxFilter extends Component {
  constructor(props) {
    super(props);
    let customList = [];
    props.brandList.forEach((item) => {
      customList.push({
        ischecked: false,
        name: item,
      });
    });
    this.state = {
      checkList: customList,
    };
  }

  toggleAllCheckedBrand = () => {
    const totalBrands = this.props.brandList;
    this.props.handleFilter("brands", this.allCheckBrand() ? [] : totalBrands);
  };

  toggleCheckedBrand = (e) => {
    const { name } = e.target;
    const brands = this.props.filterOptions.brands;
    const resultBrands = this.checkedBrand(name)
      ? brands.filter((el) => el !== name)
      : brands.concat(name);
    this.props.handleFilter("brands", resultBrands);
  };

  toggleNoInterest = (e) => {
    const { name } = e.target;
    const value = !this.props.filterOptions.noInterestedFilter;
    this.props.handleFilter(name, value);
  };

  allCheckBrand = () => {
    const totalBrands = this.props.brandList.length;
    const brands = this.props.filterOptions.brands.length;
    return totalBrands === brands;
  };

  checkedBrand = (name) => {
    return this.props.filterOptions.brands.includes(name);
  };

  render() {
    const { checkList } = this.state;

    return (
      <Container>
        <CheckBoxContainer>
          <input
            type="checkbox"
            checked={this.allCheckBrand()}
            onChange={this.toggleAllCheckedBrand}
          />
          <p>all</p>
        </CheckBoxContainer>
        {checkList.map((item, idx) => {
          return (
            <CheckBoxContainer key={idx}>
              <input
                type="checkbox"
                checked={this.checkedBrand(item.name)}
                name={item.name}
                onChange={this.toggleCheckedBrand}
              />
              <p>{item.name}</p>
            </CheckBoxContainer>
          );
        })}
        <CheckBoxContainer>
          <input
            type="checkbox"
            name="noInterestedFilter"
            checked={this.props.filterOptions.noInterestedFilter}
            onChange={this.toggleNoInterest}
          />
          <p>관심 없는 상품 숨기기</p>
        </CheckBoxContainer>
      </Container>
    );
  }
}
