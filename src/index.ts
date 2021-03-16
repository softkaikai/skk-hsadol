import slice from './slice/slice';
import drop from './drop/drop';
import ary from './ary/ary';
import curry from './curry/curry'

function temp(a: number): number {
    return a
}

console.log(curry(temp, 1)(3)(2));


interface Person {
    name: string;
    age?: number;
}

type Part<T> = {
    [B in keyof T]?: T[B]
}

type Required<T> = {
    [B in keyof T]-?: T[B]
}

type Pick<T, K extends keyof T> = {
    [P in K]: T[P]
}

type Record<K extends keyof any, T> = {
    [P in K]: T
}

type Exclude<T, K> = T extends K ? never : T;

type abc = Exclude<'a' | 'b', 'a'>

type ReturnA<T> = T extends (...args: any) => infer R ? R : any;
type ParamType<T> = T extends (params: infer R) => any ? R : any;

type a = ParamType<typeof temp>

const kaikai: Record<'name', string> = {
    name: 'kaikai',
}



