const orderTotal = (cart) => {
    if(!Array.isArray(cart)) throw new Error('First argument must be an array!')
    
    return cart.reduce(
        (total, { price, quantity }) => {
            const realQuantity = quantity ?? 1
            return total + (price * realQuantity)
        },
        0
    )
}