// 大驼峰
const pluginName = 'MyConsolePlugin'
// const RawSource = require("webpack-sources/lib/RawSource")

// 给一个类
// 两个对象
// compiler
// compilation
class ConsoleSomeInfo {
    // 给apply方法
    apply(compiler) {
        compiler.hooks.emit.tapAsync(pluginName, this.handle)
    }

    handle(compilation, callback) {
        const { assets } = compilation
        // const aim = compilation.assets['bundle.js'].source().replace(/console.log\(.*\)/g, '');
        // console.log(aim)
        // compilation.assets['bundle.js'] = new RawSource(aim)
        Object.keys(assets)
            .filter(key => key.split('.')[1] === 'js')
            .forEach(key => {
                // 读到了打包之后每一个.js文件的内容
                // TODO:正则
                const reg = /console.log\(\)/g
                const result = assets[key].source().replace(reg, '')
                console.log(result)
                const { webpack } = compilation.compiler
                const { RawSource } = webpack.sources
                assets[key] = new RawSource(result)
            })
        compilation.chunks.forEach(chunk => {
            console.log(chunk)
        });
        callback()
    }
}

// 导出
module.exports = ConsoleSomeInfo


// //
// fn = [()=> {}, () => {}]
// let tmp = null
// for(let i = 0; i < fn.length; i++) {
//     tmp = fn[i](tmp)
//     if(!tmp) {
//         break;
//     }
// }