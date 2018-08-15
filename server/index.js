const express       = require('express'),
      bodyParser    = require('body-parser'),
      messagesController = require('./controllers/messages_controller'),
      baseUrl = '/api/messages',
      app           = express(),
      port          = 3000;

//Body Parser Config
 app.use( bodyParser.json() );
 app.use(express.static( __dirname + '/../public/build'));

//GET
app.get(baseUrl, messagesController.read);
//POST
app.post(baseUrl, messagesController.create);
//UPDATE
app.put(`${baseUrl}/:id`, messagesController.update)
//DELETE
app.delete(`${baseUrl}/:id`, messagesController.delete);



//Server Listen Config
app.listen(port, () => {
    console.log(`Server running on port ${port}!`);
});