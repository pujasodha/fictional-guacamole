var hello = require('./app');

describe('print string', () => {
    test('works', () => {
        expect(hello('Hello World')).toMatch('Hello World');
    });
});
