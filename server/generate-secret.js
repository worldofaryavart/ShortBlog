const crypto = require('crypto');

function generateJWTSecret() {
    return crypto.randomBytes(64).toString('hex');
}

const jwtSecret = generateJWTSecret();
console.log('Your new JWT secret is:');
console.log(jwtSecret);