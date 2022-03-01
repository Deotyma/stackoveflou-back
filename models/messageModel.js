const mongoose = require("mongoose");
const {Schema} = mongoose;

const messageSchema = new Schema ({
    content: String,
    user_id:{ type: mongoose.Schema.Types.ObjectId, ref: "users" },
    topic_id:{ type: mongoose.Schema.Types.ObjectId, ref: "topic" },
    creationDate: Date
})

const messageModel = mongoose.model("messages", messageSchema)
module.exports = messageModel;