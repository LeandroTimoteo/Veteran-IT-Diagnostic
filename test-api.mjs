const OPENROUTER_API_KEY = "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";
const OPENROUTER_MODEL = "qwen/qwen3-4b:free";

async function testApi() {
  console.log("Testing OpenRouter API with key: " + OPENROUTER_API_KEY.substring(0, 10) + "...");
  console.log("Using model: " + OPENROUTER_MODEL);
  try {
    const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${OPENROUTER_API_KEY}`,
        "HTTP-Referer": "http://localhost:3000",
        "X-Title": "Test Script"
      },
      body: JSON.stringify({
        model: OPENROUTER_MODEL,
        messages: [{role: "user", content: "Diga apenas: 'A CHAVE E O MODELO ESTÃO FUNCIONANDO PERFEITAMENTE'."}]
      })
    });
    
    if (!res.ok) {
       const error = await res.json();
       console.error("API Error Response: ", res.status, error);
    } else {
       const data = await res.json();
       console.log("--------------\nSUCCESS\n--------------");
       console.log("Model Response:");
       console.log(data.choices[0].message.content);
    }
  } catch(e) {
    console.error("Fetch failed:", e);
  }
}

testApi();
