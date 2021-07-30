const BASE_URL = "data/products.json";

export const getProducts = async () => {
  try {
    const response = await fetch(BASE_URL);
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
    return false;
  }
};
