interface DebouncedFun<T extends (...args: any[]) => any> {
    (...params: Parameters<T>): ReturnType<T> | undefined;
    cancel(): void;
}


function debounce<T extends (...args: any[]) => any>(fn: T, wait: number): DebouncedFun<T> {
    let timer = null;

    function debounced(...params: any[]) {
        if (timer) {
            clearTimeout(timer);
            timer = null;
        }

        timer = setTimeout(() => {
            console.log('this', this);
            fn.apply(this, params);
        }, wait);

        if (!wait) {
            return fn.apply(this, params);
        }
    }

    debounced.cancel = function() {
        console.log('this is cancel');
    }

    return debounced;
}

export default debounce;
