import displayMessage from '../../0-console'

describe("0-console.js", () => {
    test('display the para message', () => {
        expect(displayMessage("this is my message"));
    })
})