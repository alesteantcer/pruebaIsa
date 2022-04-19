const { response } = require("express");
const jwt = require("jsonwebtoken");
const key = "iii1iiii1iiii1iii1";

const generateToken = (username) => {
	return new Promise((resolve, reject) => {
		const payload = { username };
		//console.log(username);
		jwt.sign(
			payload,
			key,
			{
				expiresIn: "2h",
			},
			(err, token) => {
				if (err) {
					console.log(err);
					reject("No se pudo generar el token");
				}

				resolve(token);
			}
		);
	});
};

const validationToken = (req, res = response, next) => {
	const token = req.header("x-token");
	if (!token) {
		return res.status(401).json({ ok: false, message: "no token" });
	}
	try {
		const { username } = jwt.verify(token, key);

		console.log(username);
		req.username = username;
	} catch (error) {
		return res
			.status(401)
			.json({ ok: false, message: "tokenless validation" });
	}
	next();
};

module.exports = { generateToken, validationToken };
