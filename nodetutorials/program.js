var filterFun = require("./module.js")
var dir = process.argv[2]
var extstr = process.argv[3]


filterFun(dir,extstr,function(err,list){
	
	if(err)
		return console.log("There was an error:",err)
	
	list.forEach(function(file){
		
		console.log(file)
	
	})
})