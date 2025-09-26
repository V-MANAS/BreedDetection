import express from "express";
import cors from "cors";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "10mb" })); 


app.post("/analyze", async (req, res) => {
  try {
    const { image } = req.body;

    const response = await axios.post(
      `https://serverless.roboflow.com/cattle-breed-9rfl6/14?api_key=${process.env.ROBOFLOW_API_KEY}`,
      image,
      { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
    );

    res.json(response.data);
  } catch (err) {
    console.error("Proxy error:", err.message);
    res.status(500).json({ error: "Failed to analyze image" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
