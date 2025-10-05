import 'dotenv/config';
import { GoogleGenerativeAI } from "@google/generative-ai";

async function main() {
  try {
    const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY!);

    console.log("✅ Connection successful!");
    console.log("Testing a quick Gemini generation...");

    // Try this exact model name
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-latest" });

    const result = await model.generateContent("Say hello from Gemini!");
    console.log("\n🤖 Gemini says:", result.response.text());
  } catch (error) {
    console.error("❌ Error:", error);
  }
}

main();
