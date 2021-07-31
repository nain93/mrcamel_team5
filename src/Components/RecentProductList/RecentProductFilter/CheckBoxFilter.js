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
      allCheck: false,
      pickName: [],
    };
  }

  render() {
    const { checkList, allCheck, pickName } = this.state;

    const toggleAllCheck = () => {
      this.setState({
        allCheck: !allCheck,
      });
    };

    const toggleNoInterest = () => {
      this.props.handleFilter({
        noInterestedFilter: !this.props.noInterestedFilter,
      });
    };

    const toggleBrandCheck = ({ target }) => {
      const prevCheckList = checkList;
      let newCheckList;
      if (target.value) {
        newCheckList = prevCheckList.map((item) => {
          if (item.name === target.name) {
            item.ischecked = !item.ischecked;
            pickName.push(item.name);
            this.props.handleFilter({
              ...this.props.filterOptions,
              brands: [...pickName, target.name],
            });
          }
          return item;
        });
      } else if (!target.value) {
        this.props.handleFilter({ ...this.props.filterOptions, brands: [] });
      }

      this.setState({
        checkList: [...newCheckList],
      });
    };

    return (
      <Container>
        <CheckBoxContainer>
          <input
            type="checkbox"
            value={allCheck}
            onChange={(target) => toggleAllCheck(target)}
          />
          <p>all</p>
        </CheckBoxContainer>
        {checkList.map((item, idx) => {
          return (
            <CheckBoxContainer key={idx}>
              <input
                type="checkbox"
                value={item.ischecked}
                name={item.name}
                onChange={(e) => {
                  toggleBrandCheck(e);
                }}
              />
              <p>{item.name}</p>
            </CheckBoxContainer>
          );
        })}
        <CheckBoxContainer>
          {console.log(checkList, "newCheckList")}
          <input
            type="checkbox"
            value={this.props.noInterestedFilter}
            onChange={toggleNoInterest}
          />
          <p>관심 없는 상품 숨기기</p>
        </CheckBoxContainer>
      </Container>
    );
  }
}
