var express = require('express')

var app = express ()

app.get ('/' , function (req,res){
  res.send('<img src = "http://nme.assets.ipccdn.co.uk/images/081022_114642_TheCure03.article_x4.jpg">')
  res.send('<img src ="http://rocksubculture.com/wp-content/uploads/2016/05/The-Cure-2016-Tour-Concert-Review-Shoreline-Amphitheatre-Live-Photos-FI-1.jpg">')
})

var PORT = process.env.PORT || 3000

app.listen(PORT, function(){
 console.log('Whatever!', PORT)

})
