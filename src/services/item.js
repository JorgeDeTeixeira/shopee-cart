async function createItem(name, price, quantity) {
  if (
    typeof name !== "string" ||
    typeof price !== "number" ||
    typeof quantity !== "number"
  ) {
    throw new Error(
      "Invalid parameters. Ensure name is a string, price and quantity are numbers."
    );
  }

  if (price <= 0 || quantity <= 0) {
    throw new Error("Price and quantity must be greater than zero.");
  }

  return {
    name,
    price,
    quantity,
    subtotal() {
      return this.price * this.quantity;
    },
  };
}

export default createItem;
