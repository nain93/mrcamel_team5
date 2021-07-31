import React, { Component } from "react";
import styled from "styled-components";
import RecentProduct from "./RecentProduct";
import RecentProductFilter from "./RecentProductFilter";
import { getFilterLocalStorageInterestedProducts } from "utils/productStorageControl";

const Container = styled.div``;

export default class index extends Component {
  constructor(props) {
    super(props);
    const { productList, brandList } = this.props;
    this.state = {
      productList: productList,
      brandList: brandList, //상품 브랜드 리스트
      filterOptions: {
        sort: "NEWEST", // or LOWPRICE
        noInterestedFilter: false, //  true 설정시 관심없음 상품 filter
        brands: brandList, // 해당 state에 있는 브랜드 상품만 노출
      },
    };
  }

  handleFilter = (name, option) => {
    const { filterOptions } = this.state;

    this.setState({
      filterOptions: {
        ...filterOptions,
        [name]: option,
      },
    });
  };

  render() {
    const { productList, brandList, filterOptions } = this.state;

    const afterInterestedList = filterOptions.noInterestedFilter
      ? getFilterLocalStorageInterestedProducts(productList)
      : productList;

    console.log("render", afterInterestedList, filterOptions);

    return (
      <Container>
        <RecentProductFilter
          handleFilter={this.handleFilter}
          brandList={brandList}
          filterOptions={filterOptions}
        />
        <div>
          {afterInterestedList
            .filter((item) => filterOptions.brands.includes(item.brand))
            .sort((a, b) => {
              return filterOptions.sort === "NEWEST"
                ? b.date - a.date
                : a.price - b.price;
            })
            .map((item) => {
              return <RecentProduct item={item} key={item.id} />;
            })}
        </div>
      </Container>
    );
  }
}
