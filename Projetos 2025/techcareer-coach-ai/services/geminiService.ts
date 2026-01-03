import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

export async function generateCareerAdvice(
  prompt: string,
  type: string,
  language: string
): Promise<string> {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(prompt);
    return result.response.text();
  } catch (error: any) {
    console.error("Gemini API error:", error);
    throw new Error("Falha ao gerar conselho de carreira");
  }
}
