const cart0 = []

expectToBe('Can\'t calculate total of empty cart', orderTotal(cart0), 0)

const cart1 = [
    {
        name: 'Laptop',
        price: 1000
    }
]

expectToBe('Can\'t calculate total of 1 product in cart', orderTotal(cart1), 1000)

const cart2 = [
    {
        name: 'Laptop',
        price: 1000,
        quantity: 2,
    }
]

expectToBe(
    'Can\'t calculate total of 1 product with 2 quantity in cart',
    orderTotal(cart2),
    2000
)

const cart3 = [
    {
        name: 'Laptop',
        price: 1000,
        quantity: 2,
    },
    {
        name: 'Smartphone',
        price: 500,
        quantity: 1,
    }
]

expectToBe(
    'Can\'t calculate total of 2 products with quantity in cart',
    orderTotal(cart3),
    2500
)

const cart4 = [
    {
        name: 'Laptop',
        price: 1000,
        quantity: 2,
    },
    {
        name: 'Smartphone',
        price: 500,
        quantity: 0,
    }
]

expectToBe(
    'Can\'t calculate total of 2 products with 0 quantity in cart',
    orderTotal(cart4),
    2000
)
