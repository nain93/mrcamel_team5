import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  width: fit-content;
  overflow: hidden; //각을 없앴을 때 내부 영역이 튀어나오는걸 방지
  background-color: #4e4e4e; //배경색
  //팝업이 허공에 떠있는 듯한 느낌을 주기 위한 그림자 효과.
  box-shadow: 2px 3px 3px 0px rgb(0 0 0 / 0.3);
`;

const SortSelector = styled.div`
  color: white;
  padding: 10px 7px 10px 7px;
  &: hover{
    background-color: white;
    color: #4e4e4e;
  }
`;

export default class Popup extends Component {
  constructor(props) {
    super(props);
    this.wrapper = React.createRef();
  }
  selectSort = (e) => {
    console.log(e.target.id);
    if (e.target.id === 'newest') {
      this.props.setSortoptions('NEWST');
    } else {
      this.props.setSortoptions('LOWPRICE');
    }
  };
  componentDidMount() {
    document.addEventListener('click', this.handleClickOutside, true);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickOutside, true);
  }

  handleClickOutside = (event) => {
    console.log(event.target);
    console.log(this.wrapper);
    if (this.wrapper && !this.wrapper.current.contains(event.target)) {
      this.props.closePopup();
    }
  };
  render() {
    return (
      <Container ref={this.wrapper}>
        <SortSelector id='newest' onClick={this.selectSort}>
          최근 본 상품
        </SortSelector>
        <SortSelector id='lowprice' onClick={this.selectSort}>
          낮은 가격 순
        </SortSelector>
      </Container>
    );
  }
}
