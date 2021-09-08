const exphbs = require('express-handlebars');
const routes = require('./controllers/index');
const hbs = exphbs.create({});
const sequelize = require('./connection/connections');



const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.use('/assets', express.static('assets'));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use('/', routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
  });
  