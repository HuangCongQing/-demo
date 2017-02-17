var EventEmitter = require('events').EventEmitter

var life = new EventEmitter()
life.setMaxListeners(11)   //设置监听最大事件

function water(){
	console.log('给 ' + who +' 倒水')
	
}


//on等价于addEventListener
life.on('情人节',water)  //移除
life.on('情人节',function (who) {
	console.log('给 ' + who +' 倒水2')
})

life.on('情人节',function (who) {
	console.log('给 ' + who +' 倒水3')
})
life.on('情人节',function (who) {
	console.log('给 ' + who +' 倒水4')
})
life.on('情人节',function (who) {
	console.log('给 ' + who +' 倒水5')
})
life.on('情人节',function (who) {
	console.log('给 ' + who +' 倒水6')
})

life.on('情人节',function (who) {
	console.log('给 ' + who +' 倒水7')
})
life.on('情人节',function (who) {
	console.log('给 ' + who +' 倒水8')
})
life.on('情人节',function (who) {
	console.log('给 ' + who +' 倒水9')
})
life.on('情人节',function (who) {
	console.log('给 ' + who +' 倒水10')
})

life.on('情人节',function (who) {
	console.log('给 ' + who +'受不了了11')
})


life.on('单身狗',function (who) {
	console.log('给 ' + who +' 悲催')
})
life.on('单身狗',function (who) {
	console.log('给 ' + who +' 悲催')
})
// life.emit('单身狗', '男神')

life.removeListener('情人节', water)  //必须不是匿名函数，要有函数名
life.removeAllListeners()


//life.emit('情人节', '女生')  //触发

var hasConfortListener = life.emit('情人节', '女生')    
var hasLovedListener = life.emit('单身狗', '男生')   //返回true or false

console.log(life.listeners('情人节').length)
console.log(life.listeners('单身狗').length)
//console.log(EventEmitter.listenerCount('life', '情人节'))
//var hasConfortListener = life.emit('单身节', '对子')

// console.log(hasConfortListener)
// console.log(hasLovedListener)
// console.log(hasConfortListener)

