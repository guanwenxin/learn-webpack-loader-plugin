const { SyncBailHook } = require('tapable')

const emit = new SyncBailHook([/** 个数声明*/'arg1', 'arg2', 'arg3']);

const hooks = {
    emit
}
// on
hooks.emit.tap('mounted', (a1, a2, a3) => {
    // 非undefined
    console.log('狗子1')
    // return true;
})

hooks.emit.tap('created', (a1, a2, a3) => {
    console.log('test2', a1, a2, a3)
})

// webpack内部
hooks.emit.call(1, 2, 3)