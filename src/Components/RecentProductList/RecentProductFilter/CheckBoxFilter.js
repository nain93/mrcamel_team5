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
    };
  }
  componentDidMount() {}
  render() {
    const toggleAllCheck = ({ target }) => {
      this.setState({
        allCheck: !this.state.allCheck,
      });
    };

    const { checkList, allCheck } = this.state;
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
                onChange={(target) => this.props.toggleBrandCheck(target)}
                onClick={(e) => console.log(e, "onClick")}
              />
              <p>{item.name}</p>
            </CheckBoxContainer>
          );
        })}
        <CheckBoxContainer>
          <input
            type="checkbox"
            onChange={(target) => this.props.toggleNoInterest(target)}
          />
          <p>관심 없는 상품 숨기기</p>
        </CheckBoxContainer>
      </Container>
    );
  }
}
