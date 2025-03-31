let cart = [];

doc updateCart(); });

function addToCart(pro () => { updateCart(); });

function addToCart(productName, price) { cart.push({ name: productName, price: price }); updateCart(); showNotification(${productName} به سبد خرید اضافه شد!); }

function updateCart() { let cartList = document.getElementById("cart-items"); let totalPrLie = document.getElementById("total-price"); cartList.innerHTML = ""; let total = 0;

cart.forEach((item, i");
                  li.textCont   let removeBtn = document.createElement("button");
      removeBtn = document.createElement("button");
                           removeBtn = document.createElement("button");
    removeBtn"remove-btn");
                           remov  removeBtn.classList.add("remove-btn");
                           removeBtn.oappendChild(removeBtn);
                           cartLisotalPrice.textContent = `مجموع: ${total} تومان`

totalPrice.textContent = `مجموع: ${total} تومان`

totalPrice.textContent = `مجموع: ${total} تومان`;

                      }

function removeFromCart(index) { cart.splice(index, 1); updateCart(); }

function showNotification(message) { let notification = document.createEleion"); notification.textContessList.add("notification"); notification.textContent = mestTimeout(() => {
      notification.classList.add("fade-out");
                                        setTimeout(() => notification.remove(), 500);
                                   }, 20etTimeout(() => notification.remove(), 500);
}, 2000);

}

