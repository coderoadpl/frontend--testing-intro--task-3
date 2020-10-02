const expectation1 = add(1, 2) === 3

if(!expectation1){
    console.error('Can\'t add 1 + 2 === 3')
}

const expectation2 = add(-2, 2) === 0

if(!expectation2){
    console.error('Can\'t add -2 + 2 === 0')
}

try {
    add()
    console.error('Does not throws error when called without params')
} catch (error) {}
