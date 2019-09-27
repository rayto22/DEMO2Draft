class ViewProduct{
  constructor(contr) {
    this.controller = contr;
    this.storage = this.controller.storage;

    this.productListDOM = document.querySelector('.productList');
  }

  buildProductList(prodArr) {
    this.productListDOM.innerHTML = "";

    prodArr.forEach(prod => {
      this.productListDOM.innerHTML += `
      <div class="product_div">
        <div class="prod_image border d-flex justify-content-center">
          <div class="align-self-center text-center">Image</div>
        </div>
        <div class="text-center prod_name_div">${prod.type} ${prod.name} ${prod.color.join('/')}</div>
        <div class="text-right">${prod.price} $</div>
      </div>`
    });
  }
}

export { ViewProduct };