var student = require("student.js")
var teacher = require("teacher.js")

function add(teacherName ,students){
	teacher.add(teacherName);

	students.forEach(function(item, index){  //students为一个数组
		student.add(item)
	})

}


exports.add=add

//module.exports=add;和exports.add = add 类似