const { SyncLoopHook } = require('tapable')

const emit = new SyncLoopHook([/** 个数声明*/'arg1', 'arg2', 'arg3']);

const hooks = {
    emit
}
// on
const aim = 3
let count = 0;
hooks.emit.tap('mounted', (a1, a2, a3) => {
    console.log(a1, a2, a3)
    count++;
    if (count === aim) {
        return;
    }
    return '字符串'
})

hooks.emit.tap('created', (a1, a2, a3) => {
    console.log('test2', a1, a2, a3)
})

// webpack内部
hooks.emit.call(1, 2, 3)