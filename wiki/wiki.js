//Router
const router = require("express").Router();
//Page templates
const {addPage} = require("../views");
const {wikiPage} = require("../views")
const {main} = require("../views")
//Models
const { Page, User } = require("../models");
//DB

//Homepage
router.get('/', async (req, res) => {
  let allPages = await Page.findAll();
  res.send(main(allPages))
})


//Post
router.post('/', async (req, res, next) => {
  const title = req.body.title;
  const content = req.body.content;
  const email = req.body.email;
  const name = req.body.author;
  const pageStatus = req.body.status;
console.log(req.body.author)

  try {
    const [row, created] = await User.findOrCreate({
      where:{
        'name': name,
        'email': email
      },
      defaults: {
        'name': name,
        'email': email
      }
    })

    const page = await Page.create({
      title,
      content,
      name,
      email,
      pageStatus
    });

    await page.setAuthor(row);

    res.redirect(`/wiki/${page.slug}`);
  } catch (error) { next(error) }
})


//Add page
router.get('/add', (req, res) => {
  res.send(addPage())
})

//Article pages
router.get('/:slug', async (req, res, next) => {
  try {
    const page = await Page.findOne({
      where: {
        slug: req.params.slug
      }
    });
    // console.log(page.authorId)
  const authorName = await User.findOne({
    attributes: ['name'],
    where:{
      id: page.authorId
    }
  })

    res.send(wikiPage(page, authorName.dataValues.name))
  } catch(error) {
    next(error)
  }
});



module.exports = router;
