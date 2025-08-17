import mongoose from "mongoose";

const symptomAnalysisSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId, // Stores the _id of the user
      ref: "User", // References the User model
      required: true,
    },
    symptoms: {
      type: [String], // Array of symptom names or descriptions
      required: true,
    },
    aiResponse: {
      type: String, // Could be long text (AI suggestion/result)
      required: true,
    },
  },
  { timestamps: true } // Automatically adds createdAt & updatedAt
);

export default mongoose.model("SymptomAnalysis", symptomAnalysisSchema);
