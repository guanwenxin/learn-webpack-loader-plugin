const { AsyncSeriesHook } = require('tapable')

const emit = new AsyncSeriesHook([/** 个数声明*/'arg1', 'arg2', 'arg3']);

const hooks = {
    emit
}
// on
hooks.emit.tapAsync('mounted', (a1, a2, a3, callback) => {
    // 非undefined
    console.log('狗子1')
    setTimeout(() => {
        callback()
    }, 3000) 
    // return true;
})

hooks.emit.tapPromise('created', (a1, a2, a3) => {
    console.log('test2', a1, a2, a3)
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(), 3000)
    });
})

hooks.emit.tapAsync('created', (a1, a2, a3) => {
    console.log('test2', a1, a2, a3)
})

// webpack内部
hooks.emit.callAsync(1, 2, 3)