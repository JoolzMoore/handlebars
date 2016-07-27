var express = require('express')

var app = express ()

app.get ('/' , function (res,req){
  res.send('<img src = "http://nme.assets.ipccdn.co.uk/images/081022_114642_TheCure03.article_x4.jpg">')
})

var PORT = process.env.PORT || 3000

app.listen(PORT, function(){
 console.log('Whatever!', PORT)

})
