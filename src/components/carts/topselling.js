import allProducts from "../data/productsd";
const topSelling = allProducts.filter((p) => p.category === "top-selling");

export default topSelling;