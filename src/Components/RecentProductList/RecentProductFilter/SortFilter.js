import React, { Component } from 'react';
import styled from 'styled-components';
import Popup from './Popup';

const Container = styled.div``;
const Button = styled.button`
  svg{
    width: 25px;
    height: 25px;
  }
`;

export default class SortFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: props.seleted,
      isOpenPopup: false,
    };
  }
  togglePopup = () => {
    this.setState({
      isOpenPopup: !this.state.isOpenPopup,
    });
    console.log(this.state.isOpenPopup);
  };
  setSortoptions =(value)=>{
    console.log(value);
  }
  render() {
    const { isOpenPopup, selected } = this.state;
    return (
      <Container>
        <Button onClick={this.togglePopup}>
          <svg xmlns='http://www.w3.org/2000/svg' height='48' viewBox='0 0 48 48' width='48'>
            <path d='M6 36h12v-4h-12v4zm0-24v4h36v-4h-36zm0 14h24v-4h-24v4z' />
            <path d='M0 0h48v48h-48z' fill='none' />
          </svg>
        </Button>
        {isOpenPopup && <Popup setSortoptions={this.setSortoptions} togglePopup={this.togglePopup}/>}
      </Container>
    );
  }
}
