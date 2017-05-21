var htmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');//搞绝对路径

module.exports = {
	entry: './src/app.js',
	// ['./src/script/main.js','./src/script/a.js',],
	output: {
		path: './dist',
		// filename: '[name]-[hash].js' js/[name]-[chunkhash].js
		filename: 'js/[name].bundle.js',
		publicPath: 'http://huangchongqing.com/'  //上线
	},
	module: {
		loaders:[
			{ 
				test: /\.js$/,    //匹配的条件
				loader: 'babel',  //es6的处理
				// exclude: './node_modules/',//减少打包时间
				exclude: path.resolve(_dirname,'node_modules')
				include：path.resolve(_dirname,'src'),  //减少打包时间
				query: {
					preset: ['lastest']
				}

			},
			{
				test： /\.css$/, //css处理
				loader: 'style-loader!css-loader', //将css插入到js，style插入到html
			}
		],
	},
	plugins: [
		new htmlWebpackPlugin({
			filename: 'index.html',
			template: 'index.html',   //默认在根目录下 插件的输出指向output中的pash
			//inject: 'head',
			inject: 'body',
			title: 'webpack 处理项目中的资源文件',
			// data: new Date(),
			// minify: {
			// 	removeComments: true,
			// 	collapseWhitespace: true
			// }
			


		}),  // 插件的输出指向output中的path
		
	],





	node: {             //出错之后的解救之法
	  fs: "empty"
	}


}