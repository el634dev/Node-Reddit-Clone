// models/post.js
const { Schema, model } = require('mongoose');

const postSchema = new Schema({
  _id: { type: String, required: true},
  title: { type: String, required: true },
  url: { type: String, required: true },
  summary: { type: String, required: true }
});

module.exports = model('Post', postSchema);
