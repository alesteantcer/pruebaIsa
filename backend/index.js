const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const session = require("express-session");
const MySQLStore = require("express-mysql-session")(session);
const { database } = require("./keys");
const BodyParser = require("body-parser");

const animal = require("./src/routes/register/animal");
const user = require("./src/routes/register/user");
const userAuth = require("./src/routes/auth/user");
const types_specie = require("./src/routes/Catalogue/types_specie");

//INITALIZATIONS
const app = express();

//settings
app.set("port", process.env.PORT || 6060);

//MIDDLEWARES
app.use(
	session({
		secret: "secret",
		resave: false,
		saveUninitialized: false,
		store: new MySQLStore(database),
	})
);

app.use(express.static("public"));

app.use(
	cors({
		origin: "http://localhost:3000", // <-- location of the react app were connecting to
		credentials: true,
	})
);

app.use(express.json());

/* app.use(BodyParser.json({ limit: "15mb" })); */
app.use(
	BodyParser.urlencoded({
		limit: "15mb",
		extended: true,
	})
);
app.use(morgan("dev"));

//GLOBAL VARIABLES

//ROUTES
app.use("/i/users", user);
app.use("/i/users/auth", userAuth);
app.use("/i/register-animal", animal);
app.use("/i/ctlg/types-specie", types_specie);

//STARTING THE SERVER
async function main() {
	await app.listen(app.get("port"));
	console.log("ON PORT " + app.get("port"));
}

main();
