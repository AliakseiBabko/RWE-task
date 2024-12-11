import { defineConfig } from 'cypress';
import * as dotenv from 'dotenv';
import * as path from 'path';

// Load environment variables from .env file
dotenv.config({ path: path.resolve(__dirname, '.env') });

export default defineConfig({
  e2e: {
    supportFile: 'cypress/support/e2e.ts',
    setupNodeEvents(on, config) {
      return config;
    },
    env: {
      githubUserEmail: process.env.GITHUB_USER_EMAIL,
      githubUserPassword: process.env.GITHUB_USER_PASSWORD,
      userName: process.env.USER_NAME,
    },
  },
});
