// 文件路径
const cusLoder = require('path').join(__dirname, './src/loader')

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
            }
        ]
    }
}