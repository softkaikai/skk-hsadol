function curry(fn: (...args: any[]) => any, ...param1: any[]): any {
    if (param1.length >= fn.length) {
        return fn(...param1)
    }
    return function (...param2: any[]) {
        const param = [...param1, ...param2];
        if (param.length >= fn.length) {
            return fn(...param)
        } else {
            return curry(fn, ...param);
        }
    }
}

export default curry;
