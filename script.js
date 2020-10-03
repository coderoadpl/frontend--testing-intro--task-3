const FREE_SHIPPING_MIN_TOTAL = 200

const orderTotal = (cart) => {
    if (!Array.isArray(cart)) throw new Error('First argument must be an array!')

    const total = cart.reduce(
        (subTotal, { price, quantity }) => {
            const realQuantity = quantity ?? 1
            return subTotal + (price * realQuantity)
        },
        0
    )

    const shipping = cart.find((product) => product.isShipping)
    
    if (shipping) {
        const totalWithoutShipping = total - (shipping.price * (shipping.quantity ?? 1))

        if (totalWithoutShipping > FREE_SHIPPING_MIN_TOTAL) {
            return totalWithoutShipping
        }

        return totalWithoutShipping + shipping.price
    }

    return total
}