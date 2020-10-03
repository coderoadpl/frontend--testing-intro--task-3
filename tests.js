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