const { ServiceBannerModel } = require("../../models/ServiceModel")

class ServiceBanner {
    static GetAllData = async (req, res, next) => {
        try {
            const data = await ServiceBannerModel.find()
            return res.json({ data })
        } catch (err) {
            return res.json({ err })
        }
    }
    static EditImages = async (req, res, next) => {
        try {
            const { images } = req.body
            const newData = await ServiceBannerModel.findOneAndUpdate({}, { images }, { new: true })
            return res.json({ data: newData })
        } catch (err) {
            return req.json({ err })
        }

    }
}

module.exports = ServiceBanner