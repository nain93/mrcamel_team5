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
      ischecked: false,
    };
  }

  render() {
    const { checkList, allCheck, ischecked } = this.state;

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
      const newCheckList = prevCheckList.map((item) => {
        if (item.name === target.name) {
          item.value = target.value;
        }
        return item;
      });
      this.setState({
        checkList: newCheckList,
      });

      if (target.value) {
        this.props.handleFilter({
          brands: [target.name],
        });
        return;
      }
      this.props.handleFilter({
        brands: [""],
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
                value={ischecked}
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
