const db = require("../models/index");

exports.createUser = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const user = await db.User.create({
    firstName,
    lastName,
    email,
    password,
  });
  res.status(200).json({ user, status: 200 });
};

exports.createUsedToken = async (req, res) => {
  const { email, token } = req.body;
  db['User'].findOne({ where: { email: email } }).then(async (user) => {
    db['UsedTokens'].create({
      id_client: user.id,
      token: token
    });
    res.status(200).json({ status: 200 });
  });
}

exports.getUserByEmail = async (req, res) => {
  try {
    db['User'].findOne({ where: { email: req.params.email } }).then((user) => {
      res.status(200).json({ user });
    });
  } catch (error) {
    res.status(500).json({ error });
  }
};

exports.getTokenByEmail = async (req, res) => {
  try {
    db['User'].findOne({ where: { email: req.query.cliente } }).then((user) => {
      res.status(200).json( {token: user.token, remainingTime: getTimeDifference(user.updatedAt)} );
    });
  } catch (error) {
    res.status(500).json({ error });
  }
};

exports.getUserByToken = async (req, res) => {
  try {
    db['User'].findOne({ where: { email: req.query.cliente, token: req.query.token } }).then((user) => {
      if (user) {
        db['UsedTokens'].create({
          id_client: user.id,
          token: user.token
        })
        res.status(200).json( {nombre: user.firstName, email: user.email, token: user.token, remainingTime: getTimeDifference(user.updatedAt)} );
      } else {
        res.status(404).json( {error: 'No coinciden los datos'} )
      }
    });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const getTimeDifference = (time) => {
  console.log(time);
  const now = new Date();
  const difference = now.getTime() - time.getTime();
  const seconds = Math.floor(difference / 1000);

  return 60 - seconds;
}
