const upper = require('./1ex.js');

const callback = jest.fn();

test('Será função?', async () => {
    expect(typeof (upper)).toEqual('function');
    expect(callback).toHaveBeenCalled;
})