// Simple working chatbot API
export default async function handler(req, res) {
  // Add CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight OPTIONS request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }

  try {
    console.log('Received message:', message);
    
    // Call your OpenRouter API directly from here
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "openai/gpt-oss-20b:free",
        messages: [
          { role: "system", content: "You are Jake Makaling's AI assistant. Help visitors learn about Jake's skills, experience, and projects. Keep responses helpful and professional." },
          { role: "user", content: message }
        ],
      }),
    });

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content || "Sorry, I couldn't generate a response.";

    res.status(200).json({ reply });
  } catch (error) {
    console.error('Chat API error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
