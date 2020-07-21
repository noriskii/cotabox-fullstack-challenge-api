const { Schema, model } = require('mongoose')

const ContributorSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    contribution: {
      type: Number,
      required: true
    },
  }
)

module.exports = model('Contributor', ContributorSchema)