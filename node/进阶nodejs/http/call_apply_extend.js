function Pet(words){
	this.words=words
	this.speak=function(){
		console.log(this.words)
	}
}

function Dog(word){
	Pet.call(this, word) //继承Pet的属性和方法
	console.log(this)
}

var dog=new Dog('Wang')
dog.speak()