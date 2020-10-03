const orderTotal = (cart) => {
    return cart.reduce(
        (r, product) => r + product.price,
        0
    )
}