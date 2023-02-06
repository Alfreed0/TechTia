const db = require("../models/index");

function refreshToken() {
    console.log("Refreshing token...");
    db.User.findAll().then(users => {
        users.forEach(user => {
            const token = generateToken();
            const updatedTime = new Date();
            db.User.update({ token, updatedTime }, { where: { email: user.email } });
        });
    });
}

function generateToken() {
    return Math.floor(100000 + Math.random() * 900000).toString();
}

refreshToken();
setInterval(refreshToken, 1000 * 60);

