require('./config');
const mongoose = require('mongoose');
const Comment = require('../models/comment');

let comments = [
  {
    message: 'test',
    user: 'user1'
  },
  {
    message: 'whatever put some cyberfools quotes in later or something',
    user: 'user2'
  },
  {
    message: 'vampire video',
    user: 'venice'
  }
];

Comment.remove({}, err => {
  if (err) console.log(err);

  Comment.create(comments, (err, comments) => {
    if (err) console.log(err);

    console.log(comments);
    console.log(`db seeded with ${comments.length} comments`);
    process.exit();
  });
});
