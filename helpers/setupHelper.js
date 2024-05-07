const dotenv = require('dotenv');

function initializeEnvironment(filePath = './.env') {
    const result = dotenv.config({ path: filePath });
    if (result.error) {
        throw new Error(`Failed to load environment variables from ${filePath}: ${result.error}`);
    }
    console.log(`Environment variables loaded from ${filePath}`);
}

module.exports = {
  initializeEnvironment
};