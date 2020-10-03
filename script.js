const orderTotal = (cart) => {
    return cart.reduce(
        (r, { price }) => r + price,
        0
    )
}