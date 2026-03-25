import { DiagnosisResponse } from "../types";

const OPENROUTER_API_KEY = import.meta.env.VITE_OPENROUTER_API_KEY;
const OPENROUTER_MODEL = import.meta.env.VITE_OPENROUTER_MODEL || "qwen/qwen3-4b:free";
const OPENROUTER_API_URL = "https://openrouter.ai/api/v1/chat/completions";

export async function getVeteranDiagnosis(prompt: string): Promise<DiagnosisResponse> {
  if (!OPENROUTER_API_KEY) {
    throw new Error(
      "API Key não configurada. Adicione VITE_OPENROUTER_API_KEY ao arquivo .env.local"
    );
  }

  const systemInstruction = `
    Você é um Engenheiro de Software Sênior (Persona "Veteran IT").
    Sua análise deve ser técnica, direta, sem rodeios e focada em fundamentos.
    Retorne a resposta exclusivamente no formato JSON solicitado.
    
    Certifique-se de retornar um JSON válido com as seguintes propriedades:
    - analysis: string (análise técnica profunda)
    - recommendations: array de strings (3-5 ações corretivas)
    - principles: string (uma máxima de engenharia)
  `;

  try {
    let response = await fetch(OPENROUTER_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${OPENROUTER_API_KEY}`,
        "HTTP-Referer": window.location.origin,
        "X-Title": "Veteran IT Diagnostic",
      },
      body: JSON.stringify({
        model: OPENROUTER_MODEL,
        messages: [
          {
            role: "user",
            content: `${systemInstruction}\n\nPedido do usuário:\n${prompt}`,
          },
        ],
        temperature: 0.7,
        max_tokens: 1024,
      }),
    });

    if (!response.ok) {
      console.warn(`Modelo principal falhou (status ${response.status}). Tentando modelo de fallback...`);
      response = await fetch(OPENROUTER_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${OPENROUTER_API_KEY}`,
          "HTTP-Referer": window.location.origin,
          "X-Title": "Veteran IT Diagnostic",
        },
        body: JSON.stringify({
          model: "nvidia/nemotron-3-super-120b-a12b:free",
          messages: [
            {
              role: "user",
              content: `${systemInstruction}\n\nPedido do usuário:\n${prompt}`,
            },
          ],
          temperature: 0.7,
          max_tokens: 1024,
        }),
      });
    }

    if (!response.ok) {
      const error = await response.json();
      throw new Error(
        `Erro da API OpenRouter: ${response.status} - ${error.error?.message || JSON.stringify(error)}`
      );
    }

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content;

    if (!content) {
      throw new Error("A resposta da API está vazia.");
    }

    // Parse JSON from response (suporta resposta em markdown ou texto com JSON embutido)
    let jsonStr = content.trim();
    const jsonFenceMatch = content.match(/```json\s*([\s\S]*?)\s*```/i);
    if (jsonFenceMatch?.[1]) {
      jsonStr = jsonFenceMatch[1].trim();
    } else {
      const firstBrace = content.indexOf("{");
      const lastBrace = content.lastIndexOf("}");
      if (firstBrace !== -1 && lastBrace !== -1 && lastBrace > firstBrace) {
        jsonStr = content.slice(firstBrace, lastBrace + 1).trim();
      }
    }

    const parsedResponse = JSON.parse(jsonStr) as DiagnosisResponse;
    
    // Validar que temos os campos obrigatórios
    if (!parsedResponse.analysis || !parsedResponse.recommendations || !parsedResponse.principles) {
      throw new Error("Resposta incompleta da API. Faltam campos obrigatórios.");
    }

    return parsedResponse;
  } catch (error) {
    console.error("Erro no diagnóstico:", error);
    throw error;
  }
}
