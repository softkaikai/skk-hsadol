import slice from './slice/slice';
import drop from './drop/drop';
import ary from './ary/ary';
import curry from './curry/curry';
import debounce from "./debounce/debounce";
import throttle from "./throttle/throttle";
import flat from './flat/flat';
import memoize from "./memoize/memoize";
import once from "./once/once"

function test(num) {
    console.log(num);
}

const fn = once(test, 2);

fn(1)
fn(2)
fn(3)
fn(4)
