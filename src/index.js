import createItem from "./services/item.js";
import {
  addItem,
  calculateTotal,
  removeItem,
  decreaseItemQuantity,
  displayCart,
} from "./services/cart.js";

async function main() {
  try {
    // Criação dos itens usando createItem
    const item1 = await createItem("Notebook", 2500, 1);
    const item2 = await createItem("Mouse", 150, 2);
    const item3 = await createItem("Teclado", 300, 2);

    // Carrinho do usuário (inicialmente vazio)
    let userCart = [];

    // Adicionando itens ao carrinho
    addItem(userCart, item1);
    addItem(userCart, item2);
    addItem(userCart, item3);

    // Exibindo o carrinho após adicionar os itens
    console.log("Carrinho após adicionar itens:");
    console.log(displayCart(userCart));

    // Removendo um item específico do carrinho (por nome)
    removeItem(userCart, "Mouse");

    // Exibindo o carrinho após remover o item
    console.log("\nCarrinho após remover o item 'Mouse':");
    console.log(displayCart(userCart));

    // Diminuindo a quantidade de um item (diminuindo a quantidade de 'Teclado')
    decreaseItemQuantity(userCart, item3);

    // Exibindo o carrinho após diminuir a quantidade
    console.log("\nCarrinho após diminuir a quantidade de 'Teclado':");
    console.log(displayCart(userCart));

    // Calculando o total do carrinho
    const total = calculateTotal(userCart);
    console.log("\nTotal do carrinho:");
    console.log(total);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

// Executando a função principal
main();
