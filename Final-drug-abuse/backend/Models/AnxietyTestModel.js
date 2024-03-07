const mongoose = require('mongoose');

const responseSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
      },
    responses: [{ question: String, answer: Number }],
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Response', responseSchema);
