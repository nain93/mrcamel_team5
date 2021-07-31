export const NO_INTERRESTED = "no_Interested";
export const WATCH = "watch";
export const RESET_DATE = new Date();
/*
 - setLocalStorageProducts
 watch 는 위에 상수로 제공되는 WATCH , NO_INTERRESTED 를 인자로 넘겨주시면 됩니다.
 product 는 객체로 보내주시면 되고 id는 필수로 보내주셔야 합니다.
 ex) setLocalStorageProducts(WATCH , {  id: 0 ,title: "중고 나이키 테아 흰검 245 30000원", brand: "나이키", price: 30000});
*/
export const setLocalStorageProducts = (watch, product) => {
  const initStorage = JSON.parse(localStorage[watch] || "[]");
  const storage = Array.isArray(initStorage) ? initStorage : [];
  const findProduct = storage.some((el) => el.id === product.id);

  const date = getFormatDate(RESET_DATE, "YYYYMMDDHHMISS");
  const data = { ...product, date };

  const items = storage.map((el) => (el.id === product.id ? data : el));

  if (!findProduct) items.push(data);

  localStorage[watch] = JSON.stringify(items);
};

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
export const getLocalStorageProducts = (watch) => {
  resetLocalStorageProducts(watch, getFormatDate(RESET_DATE, "YYYYMMDDHHMISS"));

  const initStorage = JSON.parse(localStorage[watch] || "[]");
  return Array.isArray(initStorage) ? initStorage : [];
};

/*
 - getFilterLocalStorageInterestedProducts
 products 는 전체 상품 리스트를 넣어주시면 됩니다.
 product 는 현재 보고있는 상품 페이지의 상품 정보를 넣어주세요.
 
 배열형태로 반환하고 현재 상품 정보와 관심없는 상품 정보를 걸러서 반환됩니다.
 return [] 
*/
export const getFilterLocalStorageInterestedProducts = (products, product) => {
  const noInterestedProducts = getLocalStorageProducts(NO_INTERRESTED);
  if (product) noInterestedProducts.push(product);

  const noInterestedProductIdArrary = noInterestedProducts.map((el) => el.id);

  return products.filter((el) => !noInterestedProductIdArrary.includes(el.id));
};

export const getFilterLocalStroage = (watch, item) => {
  const watchArr = getLocalStorageProducts(watch).map((el) => el[item]);
  const result = new Set(watchArr);
  return [...result];
};

export const resetLocalStorageProducts = (watch, date) => {
  const initStorage = JSON.parse(localStorage[watch] || "[]");
  const storage = Array.isArray(initStorage) ? initStorage : [];
  const products = storage.filter(
    (el) => el.date.slice(0, 8) === date.slice(0, 8)
  );
  localStorage[watch] = JSON.stringify(products);
};

export const getFormatDate = (date, format) => {
  const yy = date.getFullYear();
  const mm = formatdigit(date.getMonth() + 1, 2);
  const dd = formatdigit(date.getDate(), 2);
  const hh = formatdigit(date.getHours(), 2);
  const mi = formatdigit(date.getMinutes(), 2);
  const ss = formatdigit(date.getSeconds(), 2);
  const miss = formatdigit(date.getMilliseconds(), 3);

  if (format.toUpperCase() === "YYYY-MM-DD") {
    return `${yy}-${mm}-${dd}`;
  }
  if (format.toUpperCase() === "YYYYMMDDHHMISS") {
    return `${yy}${mm}${dd}${hh}${mi}${ss}${miss}`;
  }
};

export const formatdigit = (number, len) => {
  const str = number.toString();
  return str.length >= len
    ? str
    : new Array(len - str.length + 1).join("0") + str;
};
