import SymptomAnalysis from "../Models/symptomsModal.js";

// AI Symptoms Analysis Controller
export const aiSymptoms = async (req, res) => {
  try {
    const { userId, symptoms } = req.body;

    if (!symptoms || symptoms.length === 0) {
      return res.status(400).json({ error: "Symptoms are required" });
    }

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `The user reports the following symptoms: ${symptoms}. 
                   Provide possible causes and general advice in a professional, 
                   non-diagnostic healthcare assistant style.`,
                },
              ],
            },
          ],
        }),
      }
    );

    const data = await response.json();

    const aiResponse =
      data?.candidates?.[0]?.content?.parts?.[0]?.text || "No response";

    const newAnalysis = new SymptomAnalysis({
      userId,
      symptoms,
      aiResponse,
      timestamp: new Date(),
    });

    await newAnalysis.save();

    res.status(200).json({ success: true, aiResponse });
  } catch (error) {
    console.error("❌ Error analyzing symptoms:", error);
    res.status(500).json({ error: "Something went wrong" });
  }
};

export const symptomsHistory = async (req, res) => {
  try {
    const { userId } = req.query;

    if (!userId) {
      return res.status(400).json({ error: "UserId is required" });
    }

    // Get latest first using createdAt
    const history = await SymptomAnalysis.find({ userId }).sort({
      createdAt: -1,
    });

    if (!history || history.length === 0) {
      return res
        .status(404)
        .json({ message: "No history found for this user" });
    }

    res.status(200).json(history);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};
