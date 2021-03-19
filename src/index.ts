import slice from './slice/slice';
import drop from './drop/drop';
import ary from './ary/ary';
import curry from './curry/curry';
import debounce from "./debounce/debounce";
import throttle from "./throttle/throttle";
import flat from './flat/flat';
import memoize from "./memoize/memoize";

function sum(arr: any[]) {
    return arr.reduce((pre, cur) => {
        return pre + cur;
    }, 0)
}
const obj = [1, 2];
const fn = memoize(sum);
console.log(fn(obj));
obj.push(22);
console.log(fn(obj));
console.log(fn([1, 2, 3]));
console.log(fn([1, 2, 3, 4]));

