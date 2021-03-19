function flat(arr: any[], depth: number): any[] {
    return arr.reduce((pre, cur) => {
        if (Array.isArray(cur) && depth > 1) {
            pre = pre.concat(flat(cur, depth - 1))
        } else {
            pre.push(cur);
        }

        return pre;
    }, []);
}

function flat1(arr: any[], depth: number): any[] {
    while(arr.some(i => Array.isArray(i)) && depth > 1) {
        arr = [].concat(...arr);
        depth--;
    }

    return arr;
}

export default flat1;
