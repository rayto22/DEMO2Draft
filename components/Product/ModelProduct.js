class ModelProduct{
  constructor(contr) {
    this.controller = contr;
  }

  getAllProducts() {
    return fetch('..demo2draft/data/products.json').then((d) => d.json());
  }


}

export { ModelProduct };