const {ContactOfficeInfo, ContactReviews, ContactMore} = require("../models/ContactModel");


let date = new Date()
date = `${date.getDate() < 10 ? "0"+date.getDate() : date.getDate()}.${date.getMonth() < 10 ? "0"+(date.getMonth()+1) : date.getMonth()+1}.${date.getFullYear()}`

class ContactController {
    async AddOfficeInfo (req, res) {
        try{
            const data = req.body

            const addingObj = {
                name: data.name,
                openClock: data.openClock,
                closeClock: data.closeClock,
                phones: data.phones,
                email: data.email,
                address: data.address,
            }

            if (data.social){
                addingObj.social = data.social
            }

            await new ContactOfficeInfo(addingObj).save()

            const getAll = await ContactOfficeInfo.find({})

            res.send(getAll)
        }catch (e) {
            res.send({error: e})
        }
    }

    async GetAllOfficeInfo (req, res) {
        try{
            const getAll = await ContactOfficeInfo.find({})

            res.send(getAll)
        }catch (e) {
            res.send({error: e})
        }
    }

    async EditOfficeInfo (req, res) {
        try{
            const data = req.body

            const addingObj = {
                name: data.name,
                openClock: data.openClock,
                closeClock: data.closeClock,
                phones: data.phones,
                email: data.email,
                address: data.address,
            }

            if (data.social){
                addingObj.social = data.social
            }

            await ContactOfficeInfo.findByIdAndUpdate(data.id, addingObj)

            const getAll = await ContactOfficeInfo.find({})

            res.send(getAll)
        }catch (e) {
            res.send({error: e})
        }
    }

    async DeleteOfficeInfo (req, res) {
        try{
            const data = req.body

            await ContactOfficeInfo.findByIdAndDelete(data.id)

            const getAll = await ContactOfficeInfo.find({})

            res.send(getAll)
        }catch (e) {
            res.send({error: e})
        }
    }

    async CreateReview (req, res) {
        try{
            const data = req.body

            await new ContactReviews(
                {
                    name: data.name,
                    phone: data.phone,
                    email: data.email,
                    subject: data.subject,
                    text: data.text,
                    date: date,
                }
            ).save()

            const getAll = await ContactReviews.find({})

            res.send(getAll)
        }catch (e) {
            res.send({error: e})
        }
    }

    async GetAllReviews (req, res) {
        try{
            const getAll = await ContactReviews.find({})

            res.send(getAll)
        }catch (e) {
            res.send({error: e})
        }
    }

    async UpdateMap (req, res) {
        try{
            await ContactMore.findOneAndUpdate({type: "map"}, {
                content: req.body
            })

            const getMap = await ContactMore.findOne({type: "map"})

            res.send(getMap)
        }catch (e) {
            res.send({error: e})
        }
    }
    async GetMap (req, res) {
        try{
            const get = await ContactMore.findOne({type: "map"})

            res.send(get)
        }catch (e) {
            res.send({error: e})
        }
    }

    async UpdateBanner (req, res) {
        try{
            await ContactMore.findOneAndUpdate({type: "banner"}, {
                content: req.body
            })

            const getMap = await ContactMore.findOne({type: "banner"})

            res.send(getMap)
        }catch (e) {
            res.send({error: e})
        }
    }
    async GetBanner (req, res) {
        try{
            const get = await ContactMore.findOne({type: "banner"})

            res.send(get)
        }catch (e) {
            res.send({error: e})
        }
    }
}

module.exports = new ContactController()