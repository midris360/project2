const {model, Schema} = require("../db/connection");

const Track = new Schema({
    text: String
})

const UserSchema = new Schema({
    username: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    tracks: [Track]
}, {timestamps: true})

const User = model("User", UserSchema)

module.exports = User