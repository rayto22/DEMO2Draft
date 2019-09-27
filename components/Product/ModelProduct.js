class ModelProduct{
  constructor(contr) {
    this.controller = contr;
  }

  getAllProducts() {
    return fetch('/DEMO2Draft/data/products.json').then((d) => d.json());
  }


}

export { ModelProduct };