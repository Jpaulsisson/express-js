const express = require('express');
const app = express();

//note: declaring a function with a const variable makes it inaccessable to things before it's initialization * see other note near bottom for more
const authorize = (req, res, next) => {
  console.log(`${req.originalUrl} is AUTHORIZED.`);     
  next();
}

app.use(authorize, betterWay)
app.set('view engine', 'ejs');

app.get('/', authorize, (req, res) => {
  res.render('index', {doesNotMatter: 'pardner'})
})

const userRouter = require('./routes/users')
app.use('/users', userRouter);

//other note: declaring a function in this way makes it accessable to all things above and below it
function betterWay(req, res, next) {
  console.log('This is the way')
  next();
}

app.listen(3000);