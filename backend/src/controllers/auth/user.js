const { encryptPassword, decryptPassword } = require("../../helpers/password");
const { generateToken } = require("../../helpers/token");
const db = require("../../../database");
const { response } = require("express");
const userAuth = {};

userAuth.login = async (req, res) => {
	const { username, password } = req.body;

	const dataUser = await db.query("SELECT * FROM users WHERE username = ?", [
		username,
	]);
	try {
		if (dataUser.length > 0) {
			const verifyPassword = await decryptPassword(
				password,
				dataUser[0].password
			);
			/* if (verifyPassword) {
				const userToken = {
					name: dataUser.name,
					lastname: dataUser.lastname,
					username: dataUser.username,
					email: dataUser.email,
				} }*/
			if (!verifyPassword) {
				return res.status(400).json({
					ok: false,
					msg: "password incorrecto",
				});
			}

			const token = await generateToken(username);
			res.status(200).json({
				ok: true,
				username,
				token,
			});
		}
	} catch (error) {
		console.log(error);
		res.status(401).json({
			ok: false,
			message: "Wrong username or password",
		});
	}
};

userAuth.createUser = async (req, res) => {
	let { name, lastname, email, username, password } = req.body;
	const verifyEmail = await db.query("SELECT * FROM users WHERE email = ?", [
		email,
	]);
	const verifyUsername = await db.query(
		"SELECT * FROM users WHERE username = ?",
		[username]
	);
	try {
		if (verifyEmail.length < 1 && verifyUsername.length < 1) {
			password = await encryptPassword(password);
			let newUser = {
				name,
				lastname,
				email,
				username,
				password,
			};
			await db.query("INSERT INTO users set ?", [newUser]);
			const userToken = {
				name,
				lastname,
				email,
				username,
			};
			const token = await generateToken(newUser.username);

			res.status(200).json({
				ok: true,
				token,
				user: userToken,
			});
		}
	} catch (error) {
		console.log(error);
		res.status(401).json({
			ok: false,
			message: "email or username already exist",
		});
	}
};

userAuth.revalidationToken = async (req, res = response) => {
	/* const userToken = {
		name: req.name,
		lastname: req.lastname,
		username: req.username,
		email: req.email,
	}; */
	const username = req.username;

	const token = await generateToken(username);
	res.status(200).json({ ok: true, username, token });
};

module.exports = userAuth;
