const {model, Schema} = require("../db/connection");


const SongSchema = new Schema({
    text: String,
    user: {type: Schema.Types.ObjectId, ref: "User"}
}, {timestamps: true})

const Song = model("Song", SongSchema)

module.exports = Song