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

expectToThrow(
    'Did not throw error when called without arguments',
    orderTotal,
    'First argument must be an array!'
)

expectToThrow(
    'Did not throw error when called with wrong arguments (number)',
    () => orderTotal(123),
    'First argument must be an array!'
)

expectToThrow(
    'Did not throw error when called with wrong arguments (object)',
    () => orderTotal({
        reduce: () => 0,
    }),
    'First argument must be an array!'
)

const cart5 = [
    {
        name: 'Laptop',
        price: 1000,
        quantity: 2,
    },
    {
        name: 'Smartphone',
        price: 500,
        quantity: 2,
    },
    {
        name: 'Shipping',
        isShipping: true,
        price: 50,
    },
]

expectToBe('Shipping is not free above price 200', orderTotal(cart5), 3000)

const cart6 = [
    {
        name: 'CD',
        price: 2,
        quantity: 10,
    },
    {
        name: 'Shipping',
        isShipping: true,
        price: 50,
    },
]

expectToBe('Shipping is not added below price 200', orderTotal(cart6), 70)

const cart7 = [
    {
        name: 'CD',
        price: 2,
        quantity: 100,
    },
    {
        name: 'Shipping',
        isShipping: true,
        price: 50,
    },
]

expectToBe('Shipping is not added when price is equal 200', orderTotal(cart7), 250)

const cart8 = [
    {
        name: 'CD',
        price: 2,
        quantity: 100,
    },
    {
        name: 'Shipping',
        isShipping: true,
        price: 50,
        quantity: 2,
    },
]

expectToBe('Shipping is not added below price 200 only once', orderTotal(cart8), 250)
