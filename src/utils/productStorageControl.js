export const NO_INTERRESTED = 'no_Interested';
export const WATCH = 'watch';

/*
 - setLocalStorageProducts
 watch 는 위에 상수로 제공되는 WATCH , NO_INTERRESTED 를 인자로 넘겨주시면 됩니다.
 product 는 객체로 보내주시면 되고 id는 필수로 보내주셔야 합니다.
 ex) setLocalStorageProducts(WATCH , {  id: 0 ,title: "중고 나이키 테아 흰검 245 30000원", brand: "나이키", price: 30000});
*/
export const setLocalStorageProducts = (watch, product) => {};

/*
 - getLocalStorageProducts
 watch 는 위에 상수로 제공되는 WATCH , NO_INTERRESTED 를 인자로 넘겨주시면 됩니다.
 ex) getLocalStorageProducts(WATCH);
 
 리턴되는 값은 [] 배열 형태로 리턴됩니다.

 return [
      {
        title: '중고 나이키 테아 흰검 245 30000원',
        brand: '나이키',
        price: 30000,
        id: 0,
        date: '20210730202942',
      },
      {
        title: '스톤아일랜드',
        brand: '스톤아일랜드',
        price: 550000,
        id: 19,
        date: '20210730202942',
      },
    ];
*/
export const getLocalStorageProducts = watch => {
  const initStorage = JSON.parse(localStorage[watch] || '[]');
  return Array.isArray(initStorage) ? initStorage : [];
};

/*
 - getLocalStorageInterestedProducts
 products 는 전체 상품 리스트를 넣어주시면 됩니다.
 product는 현재 보고있는 상품 페이지의 상품 정보를 넣어주세요.
 
 배열형태로 반환하고 현재 상품 정보와 관심없는 상품 정보를 걸러서 반환됩니다.

 return [] 
*/
export const getLocalStorageInterestedProducts= (products, product) =>{
  const noInterestedItems = getLocalStorageProducts(NO_INTERRESTED);
  if (product) noInterestedItems.push(product);
  return products
}