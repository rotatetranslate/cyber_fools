const express = require('express');
const router = express.Router();
const Comment = require('../models/comment');

router.get('/', (req, res) => {
  Comment.find({}).then(comments => {
    res.json(comments);
  });
});

router.post('/', (req, res) => {
  let {user, message} = req.body;
  if (!user || !message) {
    res.json({error: 'please include name and comment'});
  }
  user = user.trim();
  message = message.trim();
  let comment = new Comment({user, message});
  comment.save((err, comment) => {
    if (err) console.log(err);
    console.log(comment);
    res.json('comment saved');
  });
});

module.exports = router;
