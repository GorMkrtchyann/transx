const {CalculatorRequests} = require("../models/CalculatorModel");


let date = new Date()
date = `${date.getDate() < 10 ? "0"+date.getDate() : date.getDate()}.${date.getMonth() < 10 ? "0"+(date.getMonth()+1) : date.getMonth()+1}.${date.getFullYear()}`

class CalculatorController {
    async CreateRequest (req, res) {
        try{
            const data = req.body

            await new CalculatorRequests(
                {
                    name: data.name,
                    phone: data.phone,
                    email: data.email,
                    requests: data.requests,
                    date: date,
                }
            ).save()

            const getAll = await CalculatorRequests.find({})

            res.send(getAll)
        }catch (e) {
            res.send({error: e})
        }
    }

    async GetAllRequests (req, res) {
        try{
            const getAll = await CalculatorRequests.find({})

            res.send(getAll)
        }catch (e) {
            res.send({error: e})
        }
    }

}

module.exports = new CalculatorController