// Classe Product pour stocker les informations du produit (id, nom, prix)
class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

// Classe ShoppingCartItem pour stocker un produit et sa quantité dans le panier
class ShoppingCartItem {
    constructor(product, quantity) {
        this.product = product; // Instance de Product
        this.quantity = quantity; // Quantité de ce produit dans le panier
    }

    // Méthode pour calculer le prix total de cet élément du panier
    getTotalPrice() {
        return this.product.price * this.quantity;
    }
}

// Classe ShoppingCart pour gérer le panier d'achat
class ShoppingCart {
    constructor() {
        this.items = []; // Tableau des éléments du panier
    }

    // Méthode pour ajouter un élément dans le panier
    addItem(product, quantity) {
        // Vérifier si le produit est déjà dans le panier
        const existingItem = this.items.find(item => item.product.id === product.id);

        if (existingItem) {
            // Si le produit existe déjà, on ajoute la quantité
            existingItem.quantity += quantity;
        } else {
            // Sinon, on ajoute un nouvel élément au panier
            const newItem = new ShoppingCartItem(product, quantity);
            this.items.push(newItem);
        }
    }

    // Méthode pour supprimer un élément du panier
    removeItem(productId) {
        this.items = this.items.filter(item => item.product.id !== productId);
    }

    // Méthode pour obtenir le total des éléments dans le panier
    getTotal() {
        let total = 0;
        this.items.forEach(item => {
            total += item.getTotalPrice();
        });
        return total;
    }

    // Méthode pour afficher les éléments du panier
    displayItems() {
        this.items.forEach(item => {
            console.log(`${item.product.name} : ${item.quantity} x ${item.product.price}Dt = ${item.getTotalPrice()} Dt`);
        });
    }
}

// Création de quelques produits
const product1 = new Product(1, "Produit1", 10);
const product2 = new Product(2, "Produit2", 20);
const product3 = new Product(3, "Produit3", 15);

// Création d'un panier d'achat
const cart = new ShoppingCart();

// Ajouter des éléments au panier
cart.addItem(product1, 2); // Ajouter 2 unités du produit 1
cart.addItem(product2, 1); // Ajouter 1 unité du produit 2
cart.addItem(product3, 3); // Ajouter 3 unités du produit 3

// Afficher les éléments du panier
cart.displayItems(); // Affiche les produits dans le panier

// Afficher le total du panier
console.log("Total du panier : " + cart.getTotal() + " Dt"); // Affiche le total du panier

// Supprimer un élément du panier
cart.removeItem(2); // Supprimer le produit avec l'id 2 (Produit 2)

// Afficher les éléments du panier après la suppression
cart.displayItems();

// Afficher le total du panier après la suppression
console.log("Total du panier après suppression : " + cart.getTotal() + " Dt");
