import { ModelProduct } from '../Product/ModelProduct.js';
import { ViewProduct } from '../Product/ViewProduct.js';

class ControllerProduct{
  constructor(storage) {
    this.storage = storage;
    this.model = new ModelProduct(this);
    this.view = new ViewProduct(this);
    

    this.buildAllProducts();
  }

  buildAllProducts() {
    this.model.getAllProducts().then((dd) => {
      this.storage.arrAllProds = dd;
      this.buildProductList(dd);
    });
  }

  buildProductList(prodArr) {
    this.view.buildProductList(prodArr);
  }

}

export { ControllerProduct }