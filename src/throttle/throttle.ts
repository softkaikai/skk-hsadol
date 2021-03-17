interface Throttled<T extends (...args: any[]) => any> {
    (...params: Parameters<T>): void;
    cancel(): void;
}

function throttle<T extends (...args: any[]) => any>(fn: T, time: number): Throttled<T> {
    let last = 0;

    function throttled(...params: any[]) {
        const curr = +new Date();
        if (curr - last >= time) {
            last = curr;
            fn.apply(this, params);
        }
    }

    throttled.cancel = function() {
        console.log('2143');
    }

    return throttled;
}

export default throttle;
