const mongoose = require('mongoose');

const issueSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true
  },
  itemName: {
    type: String,
    required: true
  },
  departmentName: {
    type: String,
    required: true
  },
  labName: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  monthName: {
    type: String,
    required: true
  }
});

const Issue = mongoose.model('Issue', issueSchema);

module.exports = Issue;
