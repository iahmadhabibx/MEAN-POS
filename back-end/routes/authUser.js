require("dotenv").config();

const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();

router.post('/token', (req, res) => {
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

router.delete('/logout', (req, res)=>{
    // DELETE TOKEN FROM DATABASE
});

router.post("/login-user", (req, res) => {

    // After successful login attempt
    const { loginUserObject, passedJwt } = req.body;
    const accessToken = generateAccessToken(loginUserObject);
    const refreshToken = jwt.sign(loginUserObject, process.env.REFRESH_TOKEN_SECRET);
    res.json({ accessToken: accessToken, refreshToken: refreshToken });
});

const generateAccessToken = (user) => {
    return jwt.sign(loginUserObject, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '30m' });
};

module.exports = router;