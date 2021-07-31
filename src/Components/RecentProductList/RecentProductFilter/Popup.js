import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const Container = styled.div``;

const SortSelector = styled.div``;

export default class Popup extends Component {
  constructor(props) {
    super(props);
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
    const domNode = ReactDOM.findDOMNode(this);

    if (!domNode || !domNode.contains(event.target)) {
      this.props.togglePopup();
      
    }
  };
  render() {
    return (
      <Container>
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
