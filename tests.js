const cart0 = []

if(orderTotal(cart0) !== 0){
    console.error('Can\'t calculate total of empty cart')
}

const cart1 = [
    {
        name: 'Laptop',
        price: 1000
    }
]

if(orderTotal(cart1) !== 1000){
    console.error('Can\'t calculate total of 1 product in cart')
}


const cart2 = [
    {
        name: 'Laptop',
        price: 1000,
        quantity: 2,
    }
]

if(orderTotal(cart1) !== 2000){
    console.error('Can\'t calculate total of 1 product with 2 quantity in cart')
}

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

if(orderTotal(cart3) !== 2500){
    console.error('Can\'t calculate total of 2 products with quantity in cart')
}

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

if(orderTotal(cart4) !== 2000){
    console.error('Can\'t calculate total of 2 products with 0 quantity in cart')
}