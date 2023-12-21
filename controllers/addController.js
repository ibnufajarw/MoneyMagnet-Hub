const { Stock } = require("../models");

class addController{
    static async getAdd (req, res) {
        const stock = await Stock.findAll()
        try {
            res.render('getNewStock', { stock })
        } catch (error) {
            console.log(error)
            res.send(error)
        }
    }
    static async postAdd (req, res) {
        try {
            await Stock.create(req.body)
            res.redirect('/')
        } catch (error) {
            console.log(error)
            res.send(error)
        }
    }
}

module.exports = addController