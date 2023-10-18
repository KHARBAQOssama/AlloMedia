const fs = require('fs');
const crypto = require('crypto');

let envFile = fs.readFileSync('.env', 'utf-8');

const secretKeyRegex = new RegExp('JWT_SECRET=([^\\s]+)', 'g');

const secretKeyMatches = envFile.match(secretKeyRegex);

if (secretKeyMatches && secretKeyMatches.length > 0) {
  console.log('The secret key already exists in the .env file.');
} else {
    const secretKey = crypto.randomBytes(32).toString('hex');
    envFile += `\nJWT_SECRET=${secretKey}`;
    fs.writeFileSync('.env', envFile);
}