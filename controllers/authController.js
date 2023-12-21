/** @format */

const { User } = require(`../models/index`);
const bcrypt = require(`bcryptjs`);

class UserController {
	static async getRegister(req, res) {
		try {
			res.render("register", { error: null });
		} catch (error) {
			console.error(error);
			res.status(500).send("Internal Server Error");
		}
	}

	static async postRegister(req, res) {
		try {
			const { name, password, email } = req.body;
			await User.create({ name, password, email });
			res.redirect(`/login`);
		} catch (error) {
			console.error(error);
			res.status(500).send("Internal Server Error");
		}
	}

	static async getLogin(req, res) {
		try {
			const { error } = req.query;
			res.render(`login`, { error: error || null });
		} catch (error) {
			console.error(error);
			res.status(500).send("Internal Server Error");
		}
	}

	static async postLogin(req, res) {
		try {
			const { name, password } = req.body;
			const user = await User.findOne({ where: { name } });

			if (user) {
				const isValidPassword = bcrypt.compareSync(password, user.password);
				if (isValidPassword) {
					req.session.userId = user.id;

					res.redirect(`/`);
				} else {
					res.redirect(`/login`);
				}
			} else {
				res.redirect(`/login`);
			}
		} catch (error) {
			console.error(error);
			res.status(500).send("Internal Server Error");
		}
	}

	static async getLogout(req, res) {
		try {
			req.session.destroy((err) => {
				if (err) {
					console.error(err);
				}
				res.redirect(`/login`);
			});
		} catch (error) {
			console.error(error);
			res.status(500).send("Internal Server Error");
		}
	}
}

module.exports = UserController;
