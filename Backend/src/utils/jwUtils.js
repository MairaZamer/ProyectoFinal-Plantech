const jwt = require("jsonwebtoken");
const { secretKey } = require("../configuration/jwConfig");

function generateToken(user) {
    const payload = {
        id: user._id,
        email: user.email,
        role: user.role
    }
    return jwt.sign(payload, secretKey, { expireIn: "1h" })
};

module.exports = {
    generateToken
}