const {HomeSlideModel, HomeServicesModel, HomeFeaturesModel} = require("../models/HomeModel");


class HomePageController {
    async slide (req, res) {
        try {
            const slideData = req.body;
            await HomeSlideModel(slideData).save();

            const allData = await HomeSlideModel.find();
            return res.json(allData);
        } catch (err) {
            res.json({error: err});
        }
    }

    async sendAllSlides (req, res)  {
        try {
            const data = await HomeSlideModel.find();
            res.json(data);
        } catch (err) {
            res.json({error: err});
        }
    }

    async deleteSlide (req, res)  {
        try {
            const {id} = req.params;

            const deletedSlide = await HomeSlideModel.findByIdAndDelete(id);

            if (!deletedSlide) {
                return res.status(404).json({ message: 'Slide not found' });
            }

            const allData = await HomeSlideModel.find();
            return res.json(allData);
        } catch (err) {
            res.json({error: err});
        }
    }

    async editSlide (req, res)  {
        try {
            const {_id} = req.body;

            const editedSlide = await HomeSlideModel.findByIdAndUpdate(_id, req.body);

            if (!editedSlide) {
                return res.status(404).json({ message: 'Slide not found' });
            }

            const allData = await HomeSlideModel.find();
            return res.json(allData);
        } catch (err) {
            res.json({error: err});
        }
    }

    async updateServicesData (req, res) {
        try {
            const data = await HomeServicesModel.findOne({});
            const id = data._id;
            const updatedData = await  HomeServicesModel.findByIdAndUpdate(id, req.body, {new: true});

            if (!updatedData) {
                return res.status(404).json({ message: 'Model not found' });
            }

            res.json(updatedData);
        } catch (err) {
            res.json({error: err});
        }
    }

    async getServicesData (req, res) {
        try {
            const data = await HomeServicesModel.findOne({});

            if(!data) {
                return res.status(404).json({message: 'Data not found'});
            }

            res.json(data);
        } catch (err) {
            res.json({error: err})
        }
    }

    async updateFeaturesData (req, res) {
        try {
            const id = req.body.id;
            const updating = await HomeFeaturesModel.findByIdAndUpdate(id, req.body, { new: true });

            if (!updating) {
                return res.status(404).json({ message: 'Model not found' });
            }

            res.json(updating)
        } catch (err) {
            res.json({error: err});
        }
    }

    async getFeaturesData (req, res) {
        try {
            const data = await HomeFeaturesModel.findOne({});
            res.json(data);
        } catch (err) {
            res.json({error: err});
        }
    }
}

module.exports = new HomePageController();