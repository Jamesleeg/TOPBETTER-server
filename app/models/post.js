const mongoose = require('mongoose')
 //  i want my post to have a sport
 //  title / body \
 //  owner
const postSchema = new mongoose.Schema({
  sport: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    red: 'User',
    required: true
  }
}, {
    timestamps: true
})

module.exports = mongoose.model('Post', postSchema)
