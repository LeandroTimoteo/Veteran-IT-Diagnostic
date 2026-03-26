// test-api.js
import fetch from "node-fetch";

const apiKey = process.env.VITE_OPENROUTER_API_KEY;
const model = process.env.VITE_OPENROUTER_MODEL || "openrouter/free";

async function run() {
    const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${apiKey}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            model,
            messages: [{ role: "user", content: "Teste de diagnóstico via terminal" }]
        })
    });

    const data = await res.json();
    console.log(JSON.stringify(data, null, 2));
}

run().catch(err => console.error("Erro:", err));
