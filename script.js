const add = (a, b) => {
    if(typeof a !== 'number') throw new Error('First arg must be a number')
    if(typeof b !== 'number') throw new Error('Second arg must be a number')
    
    return a + b
}