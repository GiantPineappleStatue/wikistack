const router = require("express").Router();
const {userList, userPages} = require("../views")
const { Page, User } = require("../models");

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.send(userList(users))
  } catch (err) {
    res.send(err)
  }
})

router.get('/:id', async (req, res, next) => {
  console.log(req.params.id)
  try {
    const user = await User.findOne({
      where: {
        id: req.params.id
      }
    });

  const allPages = await Page.findAll({
    where:{
      authorId: req.params.id
    }
  })

    res.send(userPages(user, allPages))
  } catch(error) {
    next(error)
  }
});






module.exports = router;
