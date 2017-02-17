var pet={
	words : '...',
	speaks : function(say){
		console.log(say +'  '+this .words)
	}
}

//pet.speaks('speak')

var dog = {
	words: 'Wang'
}

pet.speaks.call(dog, 'Speak')
pet.speaks.apply(dog, ['Speak'])