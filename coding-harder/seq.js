/// solution

async function seq(funcs) {
    let res;
    for (let f of funcs) {
        res = await f(res);
    }
    return res;
}

/// tests

import { test } from 'ava'

test(async t => {
    let a = async () => ['a']
    let b = async (accum) => accum.concat(['b'])
    let c = async (accum) => accum.concat(['c'])

    t.deepEqual(await seq([a, b, c]), ['a', 'b', 'c'])
    t.deepEqual(await seq([a, c, b]), ['a', 'c', 'b'])
})
