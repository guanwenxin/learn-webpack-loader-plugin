// 大驼峰
const pluginName = 'MyFirstPlugin'

// 给一个类
// 两个对象
// compiler
// compilation
class ConsoleSomeInfo {
    // 给apply方法
    apply(compiler) {
        compiler.hooks.emit.tapAsync('MyExampleWebpackPlugin', this.handle)
    }

    handle(compilation, callback) {
        console.log('这是第一个钩子')
        console.log(compilation)
        callback()
    }
}

// 导出
module.exports = ConsoleSomeInfo


//
fn = [()=> {}, () => {}]
let tmp = null
for(let i = 0; i < fn.length; i++) {
    tmp = fn[i](tmp)
    if(!tmp) {
        break;
    }
}