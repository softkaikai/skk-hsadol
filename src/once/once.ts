function once<T extends (...args: any[]) => any>(fn: T, n: number): (...args: any[]) => ReturnType<T> {
    let result = null;

    return function(...args) {
        if (n >= 1) {
            result = fn.apply(this, args)
        }
        n--;

        return result;
    }
}

export default once;
