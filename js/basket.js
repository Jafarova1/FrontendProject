// // const addToCartButtons = document.querySelectorAll('.add-to-cart');
// // const cartItemsList = document.getElementById('cart-items');
// // const cartTotal = document.getElementById('cart-total');
// // let totalAmount = 0;

// // // Function to add an item to the cart
// // function addToCart(event) {
// //     const button = event.target;
// //     const product = button.parentNode;
// //     const productTitle = product.querySelector('h2').textContent;
// //     const productPrice = parseFloat(product.querySelector('p').textContent.slice(1));

// //     const cartItem = document.createElement('li');
// //     cartItem.textContent = `${productTitle} - $${productPrice.toFixed(2)}`;
// //     cartItemsList.appendChild(cartItem);

// //     totalAmount += productPrice;
// //     cartTotal.textContent = totalAmount.toFixed(2);
// // }

// // // Attach click event listeners to the "Add to Cart" buttons
// // addToCartButtons.forEach(button => {
// //     button.addEventListener('click', addToCart);
// // });



// // $(document).ready(function() {  
// //     $('#cartModal').modal('show');
// //   });


// // function openModal() {
// //     var modal = document.getElementById("productModal");
// //     modal.style.display = "block";
// //   }
  
// //   // Function to close the modal
// //   function closeModal() {
// //     var modal = document.getElementById("productModal");
// //     modal.style.display = "none";
// //   }
  
// //   // Function to handle "Add to Cart" button click
// //   function addToCart() {
// //     // Get the quantity input value
// //     var quantity = parseInt(document.getElementById("quantity").value);
  
// //     // TODO: Add the product to the shopping cart (You can use your preferred method here)
  
// //     // Close the modal after adding to cart
// //     closeModal();
// //   }
  
// //   // Attach event listeners
// //   document.getElementById("addToCartBtn").addEventListener("click", addToCart);
  
// //   // You may also have a button or link on your main website content that triggers the modal
// //   document.getElementById("openModalBtn").addEventListener("click", openModal);


// // Function to open the modal
// function openModal() {
//   var modal = document.getElementById("basketModal");
//   modal.style.display = "block";
// }

// // Function to close the modal
// function closeModal() {
//   var modal = document.getElementById("basketModal");
//   modal.style.display = "none";
// }

// // Function to handle "Add to Cart" button click
// function addToCart(event) {
//   var productName = event.target.dataset.product;

//   // Create a new list item with the product name
//   var listItem = document.createElement("li");
//   listItem.textContent = productName;

//   // Append the new item to the basket
//   var basket = document.getElementById("basketItems");
//   basket.appendChild(listItem);
// }

// // Attach event listeners to all "Add to Cart" buttons
// var addToCartButtons = document.getElementsByClassName("add-to-cart-btn");
// for (var i = 0; i < addToCartButtons.length; i++) {
//   addToCartButtons[i].addEventListener("click", addToCart);
// }

// // Attach event listener to the "Close" button in the modal
// document.getElementById("closeModalBtn").addEventListener("click", closeModal);
