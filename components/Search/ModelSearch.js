class ModelSearch{
  constructor(contr) {
    this.controller = contr;
    this.storage = this.controller.storage;
  }

  beginFilterProcess(){
    let prodArr = this.storage.arrAllProds.slice();

    if(this.storage.searchByNameStatus === true){
      prodArr = this.startFilterByName(prodArr);
    }
    this.controller.buildProductList(prodArr);
  }

  startFilterByName(prodArr){
    const name = this.controller.getSearchValue();
    return prodArr.filter((prodObj) => {
      return prodObj.name.toLowerCase().indexOf(name) !== -1
    })
  }
}

export { ModelSearch };