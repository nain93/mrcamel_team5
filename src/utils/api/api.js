import axios from "axios";

const BASE_URL = "data/products.json";

export const getProducts = async () => {
  try {
    const data = await axios(BASE_URL);
    return data.data.map((el, index) => ({ ...el, id: index }));
  } catch (err) {
    console.error(err);
    return false;
  }
};
