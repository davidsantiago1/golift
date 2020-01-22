const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  target: {
    muscle: [String]
  },
  kind: {
    type: String,
    required: true
  },
  exercise: [
    {
      lift: {
        type: Schema.Types.ObjectId,
        ref: 'lifts'
      },
      reps: [
        {
          count: {
            type: Number,
            required: true
          },
          weight: {
            type: Number,
            required: true
          }
        }
      ]
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
});
