const exphbs = require('express-handlebars');
const routes = require('./controllers/index');
const hbs = exphbs.create({});
const sequelize = require('./connection/connections');



const app = require('express')();
const PORT = process.env.PORT || 3001;


app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
// app.set('routes', './controllers');

// app.Router().use('/', routes);
app.use('/', routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
  });
  