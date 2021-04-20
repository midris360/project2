const {model, Schema} = require("../db/connection");

const Artist = new Schema({
    text: String
})

const UserSchema = new Schema({
    username: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    artists: [Artist]
}, {timestamps: true})

const User = model("User", UserSchema)

module.exports = User