import allProducts from "../data/productsd";

const products = allProducts.filter((p) => p.category === "new-arrivals");

export default products;