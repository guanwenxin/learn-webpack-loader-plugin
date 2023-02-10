module.exports = function (content) {
    console.log(content)
    return `export default function() {return '${content}'}`
}