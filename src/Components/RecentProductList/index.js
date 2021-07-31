import React, { Component } from "react";
import styled from "styled-components";
import RecentProduct from "./RecentProduct";
import RecentProductFilter from "./RecentProductFilter";

const ProductListContainer = styled.div``;
const Container = styled.div``;

export default class index extends Component {
  constructor(props) {
    super(props);
    const { productList, noInterestedList, brandList } = this.props;
    this.state = {
      productList: productList,
      noInterestedList: noInterestedList,
      brandList: brandList, //상품 브랜드 리스트
      filterOptions: {
        sort: "LOWPRICE", // or LOWPRICE
        noInterestedFilter: false, //  true 설정시 관심없음 상품 filter
        brands: ["나이키"], // 해당 state에 있는 브랜드 상품만 노출
      },
    };
  }

  handleFilter = (option) => {
    this.setState({
      filterOptions: option,
    });

    console.log(this.state);
  };

  render() {
    const { productList, noInterestedList, brandList, filterOptions } =
      this.state;
    const noInterestedIdList = noInterestedList.map((item) => item.id);
    return (
      <Container>
        <RecentProductFilter
          handleFilter={this.handleFilter}
          brandList={brandList}
          filterOptions={filterOptions}
        />
        <ProductListContainer>
          {productList
            .filter((item) => {
              if (filterOptions.noInterestedFilter) {
                return !noInterestedIdList.includes(item.id);
              }
              return true;
            })
            .filter((item) => {
              if (filterOptions.brands.length) {
                return filterOptions.brands.includes(item.brand);
              }
              return true;
            })
            .sort((a, b) => {
              return filterOptions.sort === "NEWEST"
                ? new Date(b.date) - new Date(a.date)
                : b.price - a.price;
            })
            .map((item) => {
              return <RecentProduct item={item} key={item.id} />;
            })}
        </ProductListContainer>
      </Container>
    );
  }
}
