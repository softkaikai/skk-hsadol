import curry from './curry';

function test(a, b) {
    return a + b;
}

describe('curry', () => {
    it('curry case1', () => {
        expect(curry(test, 1, 2)).toEqual(3);
    })
})
