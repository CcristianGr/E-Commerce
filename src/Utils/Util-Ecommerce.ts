interface Product {
    price: number;
}

/**
 * This function calculates the total price of products in the cart
 * @param products - Array of product objects
 * @returns Total price
 */
export const totalPrice = (products: Product[]): number => {
    return products.reduce((sum, product) => sum + product.price, 0);
};
