require("dotenv").config();
const express = require("express");
const jwt = require("jsonwebtoken");
const { authenticateToken } = require("../Authentication");
const { User } = require("../schemas/schemas");
const { allowCorsToRoutes } = require("../Shared/corsHeader");

const { validateUsername } = require("../validators/user.validator");
const router = express.Router();

router.get("/loginUserToPOS", async (req, res) => {
    allowCorsToRoutes(res);

    const { username, password } = req.query;
    if (!validateUsername(username))
        res.status(400).send("Invalid username");
    const USER = await User.findOne({ username: req.query.username, password: req.query.password });
    console.log({ username: req.query.username, password: req.query.password});
    if (!USER)
        res.status(404).send("User does not exist");
    else {
        const accessToken = generateAccessToken({ username, password });
        const refreshToken = jwt.sign({ username, password }, process.env.REFRESH_TOKEN_SECRET);
        res.status(200).send({ accessToken: accessToken, refreshToken: refreshToken });
    }
});

router.get("/", authenticateToken, (req, res) => {
    console.log(1);
});

/* TOKEN AUthentication */

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

module.exports = router;