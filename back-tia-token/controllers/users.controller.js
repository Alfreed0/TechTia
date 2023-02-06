const db = require("../models/index");

exports.createUser = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const user = await db.User.create({
    firstName,
    lastName,
    email,
    password,
  });
  res.status(201).json({ user });
};

exports.getUserByEmail = async (req, res) => {
  try {
    db['User'].findOne({ where: { email: req.params.email } }).then((user) => {
      res.status(200).json({ user });
    });
  } catch (error) {
    res.status(500).json({ error });
  }
};
