import axios from "axios";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { image } = req.body;

    const response = await axios.post(
      `https://serverless.roboflow.com/cattle-breed-9rfl6/14?api_key=${process.env.ROBOFLOW_API_KEY}`,
      image,
      {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      }
    );

    return res.status(200).json(response.data);
  } catch (error) {
    console.error("Proxy error:", error.message);
    return res.status(500).json({ error: "Failed to analyze image" });
  }
}
