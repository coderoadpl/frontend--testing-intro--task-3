const expectToBe = (message, result, expectation) => {
    if (result === expectation) return

    console.groupCollapsed(`%c${message}`, 'color: red')
    console.log('Expectation:', expectation)
    console.log('Result:', result)
    console.groupEnd()
}