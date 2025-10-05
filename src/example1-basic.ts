import { googleAI } from '@genkit-ai/google-genai';
import { genkit } from 'genkit';
import 'dotenv/config';

// Initialize Genkit with Google AI
const ai = genkit({
  plugins: [googleAI()],
});

async function basicGeneration() {
  try {
    // Example 1: Generate a welcome message
    console.log('=== Welcome Message ===');
    const welcomeResponse = await ai.generate({
      prompt: 'Write a short welcome message for a new team member joining our development team.',
    });
    console.log(welcomeResponse.text.trim());

    // Example 2: Create a simple task list
    console.log('\n=== Task List ===');
    const taskResponse = await ai.generate({
      prompt: 'Create a simple 3-item todo list for setting up a new development environment.',
    });
    console.log(taskResponse.text.trim());

    // Example 3: Write a brief explanation
    console.log('\n=== Explanation ===');
    const explanationResponse = await ai.generate({
      prompt: 'Explain what TypeScript is in 2-3 simple sentences.',
    });
    console.log(explanationResponse.text.trim());
  } catch (error) {
    console.error('Error generating content:', error);
  }
}

// Run the example
basicGeneration();