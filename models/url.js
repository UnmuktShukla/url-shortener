// Import the required module
import mongoose from "mongoose";

// Define the URL schema
const urlSchema = new mongoose.Schema(
  {
    shortId: {
      type: String,
      required: true,
      unique: true,
    },
    redirectURL: {
      type: String,
      required: true,
    },
    visitHistory: [{ timestamp: { type: Number } }],
  },
  { timestamps: true }
);

// Create the Mongoose model
const URL = mongoose.model("url", urlSchema);

// Export the model
export default URL;
