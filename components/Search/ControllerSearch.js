import { ModelSearch } from '../Search/ModelSearch.js';
import { ViewSearch } from '../Search/ViewSearch.js';


class ControllerSearch{
  constructor(storage) {
    this.storage = storage;
    this.model = new ModelSearch(this);
    this.view = new ViewSearch(this);
    
    console.log(this.storage);
  }

  beginFilterProcess() {
    this.model.beginFilterProcess();
  }

  buildProductList(prodArr) {
    this.storage.product.buildProductList(prodArr);
  }

  getSearchValue(){
    return this.view.getSearchValue();
  }

}

export { ControllerSearch }