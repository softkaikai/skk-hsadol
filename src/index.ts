import slice from './slice/slice';
import drop from './drop/drop';
import ary from './ary/ary';
import curry from './curry/curry';
import debounce from "./debounce/debounce";
import throttle from "./throttle/throttle";

function temp(a: number): number {
    console.log(a);
    return a
}
const throttled = throttle(temp, 1000)
setInterval(() => {
    throttled(2)
}, 334);

