const orderTotal = (cart) => {
    let sum = 0
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i]
        sum = sum + product.price
    }
    return sum
}