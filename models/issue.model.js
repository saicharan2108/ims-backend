const mongoose = require('mongoose');

const issueSchema = new mongoose.Schema({
  itemName: {
    type: String,
    required: true
  },
  departmentName: {
    type: String,
    required: true
  },
  room: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    required: true
  }
});

const Issue = mongoose.model('Issue', issueSchema);

module.exports = Issue;
