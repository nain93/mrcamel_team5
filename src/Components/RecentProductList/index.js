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
      filterOptions: {
        sort: 'NEWEST', // or LOWPRICE
        ignore: true,
        brands: ['나이키'],
      },
    };
  }

  render() {
    const { productList, ignoreList, brandList, filterOptions } = this.state;
    const ignoreIdList = ignoreList.map((item) => item.id);
    return (
      <Container>
        <RecentProductFilter brandList={brandList} filter={filterOptions} />
        <ProductListContainer>
          {productList
            .filter((item) => {
              if (filterOptions.ignore) {
                return !ignoreIdList.includes(item.id);
              }
              return true;
            })
            .filter((item)=>{
              if(filterOptions.brands.length){
                return !filterOptions.brands.includes(item.brand);
              }
              return true;
            })
            .sort((a, b) => {
              return filterOptions.sort === 'NEWEST' ? new Date(b.date) - new Date(a.date) : b.price - a.price;
            })
            .map((item) => {
              return <RecentProduct item={item} key={item.id} />;
            })}
        </ProductListContainer>
      </Container>
    );
  }
}
