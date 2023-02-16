import mongoose from "mongoose";
// var Schema = mongoose.Schema;
const PostSchema = new mongoose.Schema(
  {
    langualge: {
      type: String,
      required: true,
      // unique: true,
    },
    // langualge: [{ type: Schema.Types.ObjectId, ref: "Language" }],
    module: {
      type: String,
      required: true,
      // unique: true,
    },
    sub_module: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      // required:true,
    },

    filename: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Post", PostSchema);
