const { ServiceLeaveModel } = require("../../models/ServiceModel")

class ServiceLeave {
    static GeatAllData = async (req, res, next) => {
        try {
            const data = await ServiceLeaveModel.find()
            return res.json({ data })
        }
        catch (err) {
            return res.json({ err })
        }
    }
}

module.exports=ServiceLeave