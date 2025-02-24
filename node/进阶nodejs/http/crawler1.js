var http = require('http')
var cheerio = require('cheerio')
var url = 'http://www.imooc.com/learn/348'

function filterChapters(html){
	var $ = cheerio.load(html)
	var chapters = $('.chapter')

	// [{
	// 	chapterTitle: ""
	// 	videos: [
	// 		title: "",
	// 		id: ""
	// 	]
	// }]

	var courseData = []           //一个大数组

	chapters.each(function (item) {
		var chapter = $(this)
		var chapterTitle = chapter.find('strong').text()
		var videos = chapter.find('.video').children('li')
		var chapterData= {
			chapterTitle: chapterTitle,
			videos: []
		}
		videos.each(function(item){
			var video = $(this).find('.J-media-item')
			var videoTitle = video.text()
			var id = video.attr('href').split('video/')[1] //找  href="/video/6687"中的6687

			chapterData.videos.push({
				title: videoTitle,
				id: id
			})
		})

		courseData.push(chapterData)

	})
	return courseData

}

function printCourseInfo(courseData) {
	courseData.forEach(function(item){
		var chapterTitle = item.chapterTitle

		console.log(chapterTitle + "\n")

		item.videos.forEach(function (video) {
			console.log('【'  + video.id + '】'+ video.title + '\n')
		})
	})
}

http.get(url, function(res){
	var html=''

	res.on('data', function(data){
		html += data
	})
	res.on('end', function(){
		var courseData= filterChapters(html)      //爬出数据 
		printCourseInfo(courseData)        //打印出数据
	}).on('error', function () {
		console.log('获取课程出错！')
	})
})
