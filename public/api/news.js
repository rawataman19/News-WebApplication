// pages/api/news.js

export default async function handler(req, res) {
  const query = req.query.q || "technology";
  const apiKey = "0ea2bdb2e0714ed0a010339f866ae4b0";
  const apiUrl = `https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    console.error("API Fetch Error:", err);
    res.status(500).json({ error: "Failed to fetch news" });
  }
}
