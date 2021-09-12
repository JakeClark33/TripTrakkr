const routes = require('./controllers/index');
const sequelize = require('./connection/connections');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;


const handlebars = require('express-handlebars');
const hbs = handlebars.create({});
app.set('view engine', 'handlebars');

app.engine('hbs', handlebars({
  layoutsDir: `${__dirname}/views/layouts`,
  extname: 'hbs'
}));

app.use(express.static('public'));

app.get('/', (req, res) =>{
  res.render('main', {layout: 'index'});
})

app.use('/', routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
  });
  
