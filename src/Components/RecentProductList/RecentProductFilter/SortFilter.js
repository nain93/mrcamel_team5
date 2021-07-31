import React, { Component } from "react";
import styled from "styled-components";
import Popup from "./Popup";

const Container = styled.div``;
const Button = styled.button`
  background-color: inherit;
  border: none;
  svg {
    width: 25px;
    height: 25px;
  }
`;

export default class SortFilter extends Component {
  constructor(props) {
    super(props);
    this.wrapper = React.createRef();
    this.state = {
      selected: props.seleted,
      isOpenPopup: true,
    };
  }
  togglePopup = (isOpen) => {
    if (isOpen) {
      console.log("!!");
    }
    this.setState((state) => ({
      ...state,
      isOpenPopup: !state.isOpenPopup,
    }));
  };
  closePopup = () => {
    this.setState({
      isOpenPopup: false,
    });
  };
  setSortoptions = (value) => {
    this.props.handleFilter(value);
  };
  componentDidMount() {
    document.addEventListener("click", this.handleClickOutside, true);
  }
  componentWillUnmount() {
    document.removeEventListener("click", this.handleClickOutside, true);
  }

  handleClickOutside = (event) => {
    if (this.wrapper && !this.wrapper.current.contains(event.target)) {
      this.closePopup();
    }
  };
  render() {
    const { isOpenPopup } = this.state;
    return (
      <Container ref={this.wrapper}>
        <Button
          onClick={() => {
            this.togglePopup(isOpenPopup);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="48"
            viewBox="0 0 48 48"
            width="48"
          >
            <path d="M6 36h12v-4h-12v4zm0-24v4h36v-4h-36zm0 14h24v-4h-24v4z" />
            <path d="M0 0h48v48h-48z" fill="none" />
          </svg>
        </Button>
        {isOpenPopup && <Popup handleFilter={this.props.handleFilter} />}
      </Container>
    );
  }
}
