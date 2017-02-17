require('./world.js')       //   ./必须加，要不然报错
require('./style.css')            //style-loader!css-loader!

function hello(str) {
	alert(str);
}
hello('hello World!!!!!!!!!!!!大家好          ')