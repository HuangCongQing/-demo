
//就按顺序执行
// var c=0

// function print() {
// 	console.log(c)
// }

// function plus() {
// 	c+=1
// }

// plus()
// print()  //1



//setTimeout 和setInterval  是异步的

/*var c=0

function print() {
	console.log(c)
}

function plus() {
	setTimeout(function(){
	 c+=1
	}, 1000)
}

plus()
print()*/

var c=0

function print() {
	console.log(c)
}

function plus(callback) {
	setTimeout(function(){
	 c+=1
	 callback()
	}, 1000)
}

plus(print)
