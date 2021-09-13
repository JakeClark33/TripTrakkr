const express = require('express');
const app = express();
const port = process.env.PORT || 3001;


const handlebars = require('express-handlebars');

app.set('view engine', 'hbs');

app.engine('hbs', handlebars({
  layoutsDir: `${__dirname}/views/layouts`,
  extname: 'hbs',
  defaultLayout: 'index',
  partialsDir: `${__dirname}/views/partials`
}));

app.use(express.static('../images'));

app.get('/', (req, res) =>{
  res.render('main');
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
