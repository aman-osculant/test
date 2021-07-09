var jwt = require("jsonwebtoken");
// import config from '../config';
const { promisify } = require("util");
const JWT_SECRET_KEY = "You are being watched.";
const jwt_sign = promisify(jwt.sign);
const jwt_decode = promisify(jwt.decode);
const jwt_verify = promisify(jwt.verify);

class jwtService {
  generateToken(data) {
    return jwt_sign(JSON.stringify(data), JWT_SECRET_KEY);
  }

  verifyToken(token) {
    return jwt_verify(token, JWT_SECRET_KEY);
  }

  decodeToken(token) {
    // dont use it unless the source is trusted
    return jwt_decode(token);
  }
}

module.exports = jwtService;
