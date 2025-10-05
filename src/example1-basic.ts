import { googleAI } from '@genkit-ai/google-genai';
import { genkit } from 'genkit';
import 'dotenv/config';

// Initialize Genkit with Google AI
const ai = genkit({
  plugins: [googleAI()],
});

async function basicGeneration() {
  try {
    console.log('=== Welcome Message ===');
    const welcomeResponse = await ai.generate({
      model: 'googleai/gemini-1.5-flash', // ✅ specify model
      prompt: 'Write a short welcome message for a new team member joining our development team.',
    });
    console.log(welcomeResponse.text());

    console.log('\n=== Task List ===');
    const taskResponse = await ai.generate({
      model: 'googleai/gemini-1.5-flash', // ✅ specify model
      prompt: 'Create a simple 3-item todo list for setting up a new development environment.',
    });
    console.log(taskResponse.text());

    console.log('\n=== Explanation ===');
    const explanationResponse = await ai.generate({
      model: 'googleai/gemini-1.5-flash', // ✅ specify model
      prompt: 'Explain what TypeScript is in 2-3 simple sentences.',
    });
    console.log(explanationResponse.text());
  } catch (error) {
    console.error('Error generating content:', error);
  }
}

basicGeneration();
