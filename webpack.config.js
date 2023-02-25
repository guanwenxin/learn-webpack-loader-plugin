// 文件路径
const path = require('path')
const cusLoder = path.join(__dirname, './src/loader.js')
const yamlLoader = path.join(__dirname, './src/yaml-loader.js')
const MyFirstPlugin = require('./src/first-plugin')

module.exports = {
    entry: './test/index.js',
    output: {
        filename: 'bundle.js'
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.txt$/,
                use: [
                    {
                        loader: cusLoder
                    }
                ]
            },
            {
                test: /\.yaml$/,
                use: [
                    {
                        loader: yamlLoader
                    }
                ]
            }
        ]
    },
    plugins: [new MyFirstPlugin()]
}