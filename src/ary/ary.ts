function ary<T>(fn: (...params: any[]) => T, paramLength: number): (...datas: any[]) => T {
    return function(...values: any[]) {
        const newParams = values.slice(0, paramLength);
        return fn(...newParams);
    }
}

export default ary;
