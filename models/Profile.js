const mongose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  birthday: {
    type: Date
  },
  height: {
    type: Number
  },
  weight: {
    amount: {
      type: Number
    },
    date: {
      type: Date,
      default: Date.now
    }
  },
  lifts: {
    bench: {
      max: {
        type: Number,
        required: true
      },
      date: {
        type: Date,
        default: Date.now
      }
    },
    barbellrow: {
      max: {
        type: Number,
        required: true
      },
      date: {
        type: Date,
        default: Date.now
      }
    },
    squat: {
      max: {
        type: Number,
        required: true
      },
      date: {
        type: Date,
        default: Date.now
      }
    },
    deadlift: {
      max: {
        type: Number,
        required: true
      },
      date: {
        type: Date,
        default: Date.now
      }
    }
  }
});
