const { AsyncParallelHook, AsyncSeriesHook } = require('tapable')

const emit = new AsyncSeriesHook([/** 个数声明*/'arg1', 'arg2', 'arg3']);

const hooks = {
    emit
}
// on
hooks.emit.tapAsync('mounted', (a1, a2, a3, callback) => {
    setTimeout(() => {
        console.log('第一次')
        callback()
    }, 3000) 
    // return true;
})

hooks.emit.tapPromise('created', (a1, a2, a3) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => console.log('第二次'), 3000)
    });
})

// webpack内部
hooks.emit.callAsync(1, 2, 3)