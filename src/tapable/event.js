const { EventEmitter } = require('events')
const event = new EventEmitter()

event.on('m', (data1, data2, data3) => {

})

event.emit('m', '1', '2', '3');
event.emit('m2', '1', '2', '3');