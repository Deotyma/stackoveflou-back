const mongoose = require("mongoose");
const {Schema} = mongoose;

const topicSchema = new Schema ({
    title: String,
    deccription:String,
    user_id:{ type: mongoose.Schema.Types.ObjectId, ref: "users" },
    creationDate: Date
})

const topicModel = mongoose.model("topics", topicSchema)
module.exports = topicModel;