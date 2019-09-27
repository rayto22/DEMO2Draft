class ModelProduct{
  constructor(contr) {
    this.controller = contr;
  }

  getAllProducts() {
    return fetch('/data/products.json').then((d) => d.json());
  }


}

export { ModelProduct };