function slice(array: Array<any>, start: number, end: number): Array<any> {
    if (!array) return [];

    if (start < 0) {
        start = 0;
    }
    if (end > array.length) {
        end = array.length;
    }

    return array.slice(start, end);
}

export default slice;
