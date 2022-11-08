const { BadRequest } = require("../error");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  const { username, password } = req.body;

  if (!username | !password) {
    throw new BadRequest("Bad request");
  }

  const token = jwt.sign({ id: 123, username }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
  res.status(200).json({ msg: "user created", token });
};

const dashboard = async (req, res) => {
  const { user } = req;
  const random = Math.floor(Math.random() * 100);
  res.status(200).json({
    msg: "welcome " + user.username,
    secret: "Your lucky number " + random,
  });
};

module.exports = { login, dashboard };
