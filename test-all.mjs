
const OPENROUTER_API_KEY = "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";
const modelsToTest = [
  "openrouter/free",
  "qwen/qwen3-coder:free",
  "qwen/qwen3-next-80b-a3b-instruct:free",
  "nvidia/nemotron-3-super-120b-a12b:free"
];

async function testModels() {
  console.log("Testing API Key:", OPENROUTER_API_KEY.substring(0, 10) + "...");
  
  for (const model of modelsToTest) {
    console.log(`\nTesting model: ${model}`);
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
          model: model,
          messages: [{role: "user", content: "Diga 'Olá, o modelo está ativo e funcionando'."}]
        })
      });
      
      if (!res.ok) {
         const error = await res.json();
         console.error(`❌ FAILED (${res.status}):`, error?.error?.message || "Unknown error");
      } else {
         const data = await res.json();
         console.log(`✅ SUCCESS: ${data.choices[0].message.content}`);
      }
    } catch(e) {
      console.error("❌ Fetch failed:", e.message);
    }
  }
}

testModels();
