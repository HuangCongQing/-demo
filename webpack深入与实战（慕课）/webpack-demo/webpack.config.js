var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		main : './src/script/main.js',
		a :   './src/script/a.js',
		b :   './src/script/b.js',
		c :   './src/script/c.js',

	},
	// ['./src/script/main.js','./src/script/a.js',],
	output: {
		path: './dist',
		// filename: '[name]-[hash].js' js/[name]-[chunkhash].js
		filename: 'js/[name].js',
		publicPath: 'http://huangchongqing.com/'  //上线
	},
	plugins: [
		new htmlWebpackPlugin({
			filename: 'a.html',
			template: 'index.html',   //默认在根目录下 插件的输出指向output中的pash
			//inject: 'head',
			inject: 'head',
			title: 'webpack is a',
			data: new Date(),
			// minify: {
			// 	removeComments: true,
			// 	collapseWhitespace: true
			// }
			chunks:['main','a']


		}),  // 插件的输出指向output中的path
		new htmlWebpackPlugin({
			filename: 'b.html',
			template: 'index.html',   //默认在根目录下 插件的输出指向output中的pash
			//inject: 'head',
			inject: 'head',
			title: 'webpack is b',
			data: new Date(),
			// minify: {
			// 	removeComments: true,
			// 	collapseWhitespace: true
			// }
			//chunks:['b'] //指定所选模块
			excludeChunks: ['a']  //除a的所有模块


		}),  // 插件的输出指向output中的path
		new htmlWebpackPlugin({
			filename: 'c.html',
			template: 'index.html',   //默认在根目录下 插件的输出指向output中的pash
			//inject: 'head',
			inject: 'head',
			title: 'webpack is c',
			data: new Date(),
			// minify: {
			// 	removeComments: true,
			// 	collapseWhitespace: true
			// }
			chunks: ['c']


		})  // 插件的输出指向output中的path
	],











	node: {             //出错之后的解救之法
	  fs: "empty"
	}


}