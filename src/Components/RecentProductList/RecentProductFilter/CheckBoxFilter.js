import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div``;

const CheckBoxContainer = styled.div``;

const CheckBoxInputForm = styled.input``;

export default class CheckBoxFilter extends Component {
  constructor(props) {
    super(props);
    let customList = []
    props.brandList.forEach((item) => {
      customList.push({
        ischecked: false,
        name: item,
      });
    });
    console.log(props.brandList);
    this.state = {
      checkList: customList,
      allCheck: false,
    };
  }
  toggleAllCheck(e) {
  }
  toggleCheck(target) {
  }
  componentDidMount() {
  }
  render() {
    const { checkList, allCheck } = this.state;
    return (
      <Container>
        <CheckBoxContainer>
          <p>all</p>
          <CheckBoxInputForm type='checkbox' value={allCheck} onChange={this.toggleAllCheck}/>
        </CheckBoxContainer>
        {checkList.map((item, idx) => {
          return (
            <CheckBoxContainer key={idx}>
              <p>{item.name}</p>
              <CheckBoxInputForm type='checkbox' value={item.ischecked} />
            </CheckBoxContainer>
          );
        })}
      </Container>
    );
  }
}
