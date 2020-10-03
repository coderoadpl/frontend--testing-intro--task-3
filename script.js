const orderTotal = (cart) => {    
    return cart.reduce(
        (total, { price, quantity }) => {
            const realQuantity = quantity ?? 1
            return total + (price * realQuantity)
        },
        0
    )
}