const mongoose = require('mongoose');

const LiftSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  muscle: {
    type: [String],
    required: true
  }
});
