import slice from '../slice/slice';

function drop(array: Array<any>, n: number): Array<any> {
    if (!array) return [];

    return slice(array, 0, n);
}

export default drop;
