const express = require('express')

const passport = require ('passport')
const requireToken = passport.authenticate( 'bearer', { session: false})

const { handle404, requireOwnership} = require('../../lib/custom_errors')
const removeBlanks = require('../../lib/remove_blank_fields')

const Post = require('./../models/post')

const router = express.Router()

router.post('/posts', requireToken, (req, res, next) => {
  // require token with middleware
  console.log("The user OBJ:", req.user)
  console.log("the incoming event data is", req.body)

  const postData = req.body.post

  postData.owner = req.user._id

  Post.create(postData)
    .then(post => res.status(201).json(post))
    .catch(next)
})

  // / index
router.get('/posts/', requireToken, (req, res, next) => {
  console.log(req.user._id)
  const userId = req.user._id

  Post.find({owner: userId})
    .then(posts => res.json(posts))
    .catch(next)

} )
// delte
router.delete('/posts/:id', requireToken, (req, res, next) => {
  Post.findById(req.params.id)
     .then(handle404)
     .then(post => {
       requireOwnership(req, post)
       post.deleteOne()
      })
     .then(post => res.sendStatus(204))
     .catch(next)
})
// update
router.patch('/posts/:id', requireToken, removeBlanks, (req, res, next) => {

  delete req.body.post.owner

  Post.findById(req.params.id)

    .then(handle404)

    .then(post => {
      requireOwnership(req, post)
      return post.updateOne(req.body.post)
    })

    // .then(post => post.updateOne(req.body.post))

    .then(() => res.sendStatus(204))

    .catch(next)
})






module.exports = router
