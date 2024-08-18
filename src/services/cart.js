function addItem(userCart, item) {
  if (!userCart || !item) {
    throw new Error("Invalid parameters");
  }
  userCart.push(item);
}

function removeItem(userCart, name) {
  const index = userCart.findIndex((item) => item.name === name);
  if (index !== -1) {
    userCart.splice(index, 1);
  }
}

function decreaseItemQuantity(userCart, item) {
  const indexFound = userCart.findIndex((p) => p.name === item.name);

  if (indexFound === -1) {
    return "Item não encontrado";
  }

  if (userCart[indexFound].quantity > 1) {
    userCart[indexFound].quantity -= 1;
  } else {
    userCart.splice(indexFound, 1);
  }
}

function displayCart(userCart) {
  if (!userCart) {
    throw new Error("Invalid parameter");
  }
  return userCart.map((item, index) => {
    return `${index + 1} - ${item.name} - ${item.price} - ${
      item.quantity
    } | Subtotal: ${item.subtotal()}`;
  });
}

function calculateTotal(userCart) {
  if (!userCart) {
    throw new Error("Invalid parameter");
  }
  const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
  return result;
}

export {
  addItem,
  calculateTotal,
  removeItem,
  decreaseItemQuantity,
  displayCart,
};
