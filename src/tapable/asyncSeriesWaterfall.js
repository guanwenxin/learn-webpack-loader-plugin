const { AsyncSeriesWaterfallHook } = require('tapable')

const emit = new AsyncSeriesWaterfallHook([/** 个数声明*/'arg1', 'arg2', 'arg3']);

const hooks = {
    emit
}

hooks.emit.tapAsync('test', (a1, a2, a3, callback) => {
    // 非undefined
    console.log('狗子1')
    setTimeout(() => {
        callback()
    }, 3000) 
    // return true;
})
// on
hooks.emit.tapPromise('mounted', (a1, a2, a3) => {
    // 非undefined
    console.log(a1, a2, a3)
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('狗子1')
        }, 3000)
    })
})

hooks.emit.tapAsync('created', (a1, a2, a3) => {
    console.log('test2', a1, a2, a3)
})

// webpack内部
hooks.emit.callAsync(1, 2, 3)