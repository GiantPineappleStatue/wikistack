const express = require("express");
const morgan = require("morgan");

//db
const app = express();
const { db, _Page, _User } = require('./models');

//views
const layoutFunc = require("./views/layout");

//middlewware
app.use(morgan('dev'));
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));

//Routing
const wikiRouter = require('./wiki/wiki');
const userRouter = require('./wiki/users');
app.use('/wiki', wikiRouter);
app.use('/users', userRouter);

//db connection confirmation console.log
db.authenticate()
  .then(() => {
    console.log('connected to the database');
  })

//Get
app.get('/', (req, res) => {
  res.redirect('/wiki')
})




//Port
const PORT = 3000;
//Sync
const init = async () => {
  await db.sync({ force: false });
  app.listen(PORT, () => {
    console.log(`Server is listning on port ${PORT}!`)
  })
}

init();
