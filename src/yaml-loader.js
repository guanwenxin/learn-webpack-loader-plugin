const { parse } = require('yaml')

module.exports = function (content) {
    console.log(content)
    // pareser ?
    const jsObj = parse(content)
    console.log(jsObj)
    return `export default ${JSON.stringify(jsObj)}`
}