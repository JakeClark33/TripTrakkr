const createError = require('http-errors');
const express = require('express');
const db = require('./db/connection');


// routes.get('/routes/api-routes/landmarks-routes', (req, res) => {
//     const sql = `SELECT * FROM landmarks`;

//     db.query(sql, (err, rows) => {
//         if(err) {
//             res.status(500).json({error: err.message });
//             return;
//         }
//         res.json({
//             message: 'success',
//             data: rows
//         });
//     });
// });

// routes.get('/routes/api-routes/landmarks-routes/:id', (req, res) => {
//     const sql = `SELECT * FROM landmarks WHERE id = ?`;
//     const params = [req.params.id];

//     db.query(sql, params, (err, row) => {
//         if (err){
//             res.status(400).json({ error: err.message });
//             return;
//         }
//         res.json({
//             message: 'success',
//             data: row
//         });
//     });
// });
const app = express();
const PORT = process.env.PORT || 3001;
const cookieParser = require('cookie-parser');
const path = require('path');
// const indexRouter = require('./routes/api-routes/favorites-routes')
// const homeRoutes = require('./routes/api-routes/landmarks-routes')
const handlebars = require('express-handlebars');


// app.use('/', indexRouter);
// app.use('/', homeRoutes)

app.set('view engine', 'hbs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.engine('hbs', handlebars({
  layoutsDir: `${__dirname}/views/layouts`,
  extname: 'hbs',
  defaultLayout: 'index',
  partialsDir: `${__dirname}/views/partials`
}));

app.use(express.static('views'));
app.use(cookieParser());

// app.use(function(req, res, next) {
//   next(createError(404));
// });

app.get('/', (req, res) =>{
  res.render('main');
})

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};
//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

module.exports = app;
