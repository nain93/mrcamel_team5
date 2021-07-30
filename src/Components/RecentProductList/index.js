import React, { Component } from 'react';
import styled from 'styled-components';
import RecentProduct from './RecentProduct';
import RecentProductFilter from './RecentProductFilter';

const ProductListContainer = styled.div``;
const Container = styled.div``;

export default class index extends Component {
  constructor(props) {
    super(props);
    const { productList, ignoreList, brandList } = this.props;
    this.state = {
      productList: productList,
      ignoreList: ignoreList,
      brandList: brandList,
    };
  }

  render() {
    const { productList, ignoreList, brandList } = this.state;
    return (
      <Container>
        <ProductListContainer>{productList.map((item) => {
          return <RecentProduct item = {item}/>

        })}</ProductListContainer>
      </Container>
    );
  }
}
