let cart = [];
let cartTotal = 0;

function addToCart(price, name) {
  cart.push({ name, price });
  cartTotal += price;
  updateCartDisplay();
  alert(`"${name}" ha sido agregado al carrito.`);
}

function updateCartDisplay() {
  document.getElementById('cartTotal').textContent = cartTotal;

  const cartList = document.getElementById('cartList');
  cartList.innerHTML = '';
  cart.forEach((item, index) => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - $${item.price}`;
    cartList.appendChild(li);
  });
}

function buyNow(price, name) {
  alert(`Gracias por comprar "${name}" por $${price}. Te contactaremos pronto.`);
}

function clearCart() {
  cart = [];
  cartTotal = 0;
  updateCartDisplay();
  alert('El carrito ha sido vaciado.');
}