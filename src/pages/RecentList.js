import React, { Component } from 'react';
import RecentProductList from 'Components/RecentProductList';
import { getLocalStorge } from 'utils/common';
import styled from 'styled-components';

const Container = styled.div`
  height: calc(100vh - 57px);
`;


const mockList = [
  { title: '나이키 x 스투시 빅로고 커스텀 스우시 에센셜 후디 후드티 올드스쿨', brand: '나이키', price: 45000, id: 83 },
  { title: '스톤아일랜드 와펜패치 라미플록포켓 맨투맨 블랙!', brand: '스톤아일랜드', price: 310000, id: 84 },
  { title: '나이키 바람막이', brand: '나이키', price: 81000, id: 85 },
  { title: '나이키 대한민국 농구 국가대표팀 숏슬리브 반팔 티셔츠 드라이핏', brand: '나이키', price: 50000, id: 86 },
  { title: '나이키 드라이핏 라운드넥 긴팔 티셔츠 러닝 런닝 헬스 운동', brand: '나이키', price: 45000, id: 87 },
  { title: '스톤아일랜드 패딩조끼(상태 최상)네이비', brand: '스톤아일랜드', price: 400000, id: 89 },
  { title: '(정품) 구찌 마몬트 카드지갑', brand: '구찌', price: 270000, id: 90 },
  { title: '루이비통 반바지 판매합니다', brand: '루이비통', price: 700000, id: 91 },
];

export default class RecentList extends Component {
  constructor() {
    super();
    this.state = {
      // resentList: getLocalStorge('resentList'),
      // ignoreList: getLocalStorage('ignoreList'),
      resentList: mockList,
      ignoreList: mockList.slice(0, 3),
    };
  }
  componentDidMount(){
    console.log(this.state.resentList);
    console.log(this.state.ignoreList);
  }
  render() {
    return (
      <Container>
        <RecentProductList />
      </Container>
    );
  }
}
