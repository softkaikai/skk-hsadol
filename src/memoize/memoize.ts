interface Memoized<T extends (...args: any[]) => any> {
    (...args: Parameters<T>): ReturnType<T>;
    cache: Map<any, any>
}

function memoize<T extends (...args: any[]) => any>(fn: T): Memoized<T> {
    function memoized(...args: any[]) {
        const key = args[0];
        const cache = memoized.cache;

        const result = cache.get(key) || fn.apply(this, args);

        cache.set(key, result);

        return result;
    }

    memoized.cache = new Map();

    return memoized;
}

export default memoize;
