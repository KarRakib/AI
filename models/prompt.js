const { Schema, default: mongoose } = require("mongoose");

const PromptSchema = new Schema({
   cretor:{
    type: Schema.Types.ObjectId,
    ref: "User",
   },
   prompt:{
    type: String,
    required:[ true, "prompt is required"]
   },
   tag:{
    type: String,
    required:[ true, "tag is required"]
   }
   
   
    // userId: Number,
    // prompt: String,
    // tag: String
},
{
    timestamps: true
}
)
const Prompt = mongoose.models.Prompt || mongoose.model("Prompt", PromptSchema)
export default Prompt;