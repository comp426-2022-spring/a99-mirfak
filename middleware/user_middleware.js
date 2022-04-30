// Did not reference this file, do not think it is needed.

const db = require('../database/userlog_db')

// Update with user details instead of access details
const log = (req, res, next) => {
    let userdata = {
    email: req.email,
    password: req.password,
    time: Date.now()
    }
    const stmt = db.prepare('INSERT INTO userlog (email, password, time) VALUES (?, ?, ?)')
    const info = stmt.run(userdata.email, userdata.password, userdata.time)

    next();
};

  module.exports = log