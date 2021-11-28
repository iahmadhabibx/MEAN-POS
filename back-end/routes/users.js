require("dotenv").config();
const express = require("express");
const jwt = require("jsonwebtoken");
const { User } = require("../schemas/schemas");

const { validateUsername } = require("../validators/user.validator");
const router = express.Router();

router.get("/loginUserToPOS", async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization');

    const { username, password } = req.query;
    if (!validateUsername(username))
        res.status(400).send("Invalid username");

    const USER = await User.find({ username, password });
    if (!USER)
        res.status(404).send("User does not exist");
    else {
        const accessToken = generateAccessToken({ username, password });
        const refreshToken = jwt.sign({ username, password }, process.env.REFRESH_TOKEN_SECRET);
        res.status(200).send({ accessToken: accessToken, refreshToken: refreshToken });
    }
});

router.post('/token', async (req, res) => {
    const refreshToken = req.body.token;
    if (!refreshToken) return res.sendStatus(401);

    // GET ALL REFRESH TOKENS FROM DATABASE AND CHECK IF CURRENT ONE IS THERE 
    const refreshtokensdbarray = [];
    if (!refreshtokensdbarray.includes(refreshToken)) return res.sendStatus(403);

    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);
        const accessToken = generateAccessToken({ username: user.username });
        return res.json({ accessToken: accessToken });
    });
});

router.post("/login-user", (req, res) => {

    // After successful login attempt
    const { loginUserObject, passedJwt } = req.body;
    const accessToken = generateAccessToken(loginUserObject);
    const refreshToken = jwt.sign(loginUserObject, process.env.REFRESH_TOKEN_SECRET);
    res.json({ accessToken: accessToken, refreshToken: refreshToken });
});

const generateAccessToken = (user) => {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' });
};


router.delete('/logout', (req, res) => {
    // DELETE TOKEN FROM DATABASE
});

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) return res.sendStatus(401);

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    })
};

module.exports = router;