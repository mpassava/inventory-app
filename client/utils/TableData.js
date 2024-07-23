import getHeaders from "./getHeaders.js";
import getProducts from "./getProducts.js";

export default class TableData {
  constructor() {
    this.headers = [];
    this.products = [];
  }
  
  async fetch() {
    this.headers = await getHeaders();
    this.products = await getProducts();
  };
}
