@EnableAutoConfiguration( exclude = { ErrorMvcAutoConfiguration.class })

var linebot = require('linebot');
var express = require('express');

var bot = linebot({
  channelId: 	1535995664,
  channelSecret: 5c695988381c9c310775510c73951946,
  channelAccessToken: nPDe+2zQMdWtVNqN3zav2KU+gvGYsO5mKIAzn1H/hvUVVg+49ANlSXz5xsd3yb11/ojYV884AJ5agsNHvVAFjaII8mArxUYT2Du/WlqE4IV3YEvbOUPoXnpPJ+6BdrOJuDPVdesI4teE81gfAzv8vwdB04t89/1O/w1cDnyilFU=
});
bot.on('message', function(event) {
  console.log(event+"cool"); //把收到訊息的 event 印出來看看
});

const app = express();
const linebotParser = bot.parser();
app.post('/', linebotParser);

//因為 express 預設走 port 3000，而 heroku 上預設卻不是，要透過下列程式轉換
var server = app.listen(process.env.PORT || 8080, function() {
  var port = server.address().port;
  console.log("App now running on port", port);
});

spring.mvc.view.prefix=/WEB-INF/jsp/
spring.mvc.view.suffix=.jsp
