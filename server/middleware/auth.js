const jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
    // Get token from header
    const token = req.header('x-auth-token')
    // console.log('token', token);
    // console.log('Jwt secret', process.env.JWT_SECRET);


    // Check if no token
    if (!token) {
        return res.status(401).json({msg: 'No token, authorization denied'});
    }

    // Verify token
    try {
        // console.log('JWT_SECRET:', process.env.JWT_SECRET);
        // console.log('Attempting to decode:', token);
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        // console.log('Decoded:', decoded);
        req.user = decoded.user;
        next();
    } catch (error) {
        // console.error('JWT verification error:', error.message);
        res.status(401).json({ msg: 'Token is not valid', error: error.message });
    }
};