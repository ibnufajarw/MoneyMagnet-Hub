/** @format */

const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const path = require("path");
const routes = require("./routes");
const formatCurrency = require("./helpers/currencyFormatter");

const app = express();

app.use(
	session({
		secret: "secret-key",
		resave: false,
		saveUninitialized: true,
		cookie: { secure: false, sameSite: true },
	})
);
app.locals.formatCurrency = formatCurrency;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
