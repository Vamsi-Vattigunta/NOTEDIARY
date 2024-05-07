const jwt = require("jsonwebtoken");
const JWT_SECRET = "vamsivattigunta96";

const generateToken = (id) => {
  return jwt.sign({ id }, JWT_SECRET, {
    expiresIn: "30d",
  });
};

module.exports = generateToken;
