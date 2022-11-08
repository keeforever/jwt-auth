const jwt = require("jsonwebtoken");
const { BadRequest, UnauthorizedRequest } = require("../error");

const authentication = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new BadRequest("Token must be provided !");
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    throw new UnauthorizedRequest("Unauthorized Request !!!");
  }
};

module.exports = authentication;
