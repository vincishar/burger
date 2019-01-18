const express = require('express');
const exphbs = require('express-handlebars')
const burgerRoutes = require('./controllers/burgers_controller');

const PORT = process.env.PORT || 3000;
const app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use('/', burgerRoutes);
app.use(express.static(__dirname + '/public'));

app.listen(PORT, () => console.log(`Server Started on ${PORT}`));