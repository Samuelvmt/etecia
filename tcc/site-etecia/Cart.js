if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready)
} else {
  ready()
}

function ready() {
  const removeProductsButtons = document.getElementsByClassName("remove-product-button")
  for (var i = 0; i < removeProductsButtons.length; i++) {
    removeProductsButtons[i].addEventListener("click", removeProduct)
  }

  const cartButtons = document.getElementsByClassName("button-cart")
  for (var i = 0; i < cartButtons.length; i++) {
    cartButtons[i].addEventListener("click", addProductToCart)
  }
}


function addProductToCart(event) {
  const button = event.target
  const productInfos = button.parentElement.parentElement.parentElement
  const productImage = productInfos.getElementsByClassName("product-image")[0].src
  const productName = productInfos.getElementsByClassName("product-name")[0].innerText
  const productPrice = productInfos.getElementsByClassName("product-price")[0].innerText


  const newProduct = document.createElement("tr")
  newProduct.classList.add("cart-product")

  newProduct.innerHTML = 
  `
    < tr class="product-id" >
  <td class="product-infos">
    <img src="${productImage}" alt="${productName}" class="product-image">
    <strong class="product-name">${productName}</strong>
  </td>
  <td>
    <span class="product-price">${productPrice}</span>
  </td>
  <td>
  <li><button class="button-cart"> <img src="images/cart.jpg" style="width:35px;height:35px;">
  </td>
</tr>
`


const tableBody = document.querySelector(".cart-table tbody")
tableBody.append(newProduct)


 }


      function removeProduct(event) {
        event.target.parentElement.parentElement.remove()
  totalCart()
}


      function totalCart() {
        let totalAmount = 0
      const cartProducts = document.getElementsByClassName("cart-product")
      for (var i = 0; i < cartProducts.length; i++) {
  //console.log(cartProducts[i])
  const productPrice = cartProducts[i].getElementsByClassName("product-price")[0].innerText.replace("R$","").replace(",",".")


      totalAmount += productPrice * 1
}
      totalAmount = totalAmount.toFixed(2)
      totalAmount = totalAmount.replace(".",",")
      document.querySelector(".cart-total span").innerText = "R$" + totalAmount
}