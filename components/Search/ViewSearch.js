class ViewSearch{
  constructor(contr) {
    this.controller = contr;
    this.storage = this.controller.storage; 

    this.serchInputDOM = document.querySelector('.search_input');
    this.serchInputDOM.addEventListener('keyup', () => this.checkSearchInput());
  }

  checkSearchInput() {
    this.storage.searchByNameStatus = this.serchInputDOM.value !== "" ? true : false;
    
    this.controller.beginFilterProcess();
  }

  getSearchValue() {
    return this.serchInputDOM.value;
  }

}

export { ViewSearch };