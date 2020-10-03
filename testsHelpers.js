const expectToBe = (message, result, expectation) => {
    if (result === expectation) return

    console.groupCollapsed(`%c${message}`, 'color: red')
    console.log('Expectation:', expectation)
    console.log('Result:', result)
    console.groupEnd()
}

const expectToThrow = (message, fn, expectedErrorMessage) => {
    try {
        fn()
        console.groupCollapsed(`%c${message}`, 'color: red')
        console.log('Expectation:', 'to throw error')
        console.log('Result:', 'function do not throw at all')
        console.groupEnd()
    } catch (error) {
        if (error.message !== expectedErrorMessage) {
            console.groupCollapsed(`%c${message}`, 'color: red')
            console.log('Expected error message:', expectedErrorMessage)
            console.log('Received error message:', error.message)
            console.groupEnd()
        }
    }

}