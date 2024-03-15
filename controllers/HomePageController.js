const {HomeSlideModel} = require("../models/PagesModel");


class HomePageController {
    static slide = async (req, res, next) => {
        try {
            const slideData = req.body;
            await HomeSlideModel(slideData).save();

            const allData = await HomeSlideModel.find();
            return res.json(allData);
        } catch (e) {
            next(e);
        }
    }

    static sendAllSlides = async (req, res, next) => {
        try {
            const data = await HomeSlideModel.find();
            res.json(data);
        } catch (e) {
            next(e)
        }
    }

    static deleteSlide = async (req, res, next) => {
        try {
            const {id} = req.params;

            const deletedSlide = await HomeSlideModel.findByIdAndDelete(id);

            if (!deletedSlide) {
                return res.status(404).json({ message: 'Slide not found' });
            }

            const allData = await HomeSlideModel.find();
            return res.json(allData);
        } catch (e) {
            next(e)
        }
    }

    static editSlide = async (req, res, next) => {
        try {
            const {_id} = req.body;

            const editedSlide = await HomeSlideModel.findByIdAndUpdate(_id, req.body);

            if (!editedSlide) {
                return res.status(404).json({ message: 'Slide not found' });
            }

            const allData = await HomeSlideModel.find();
            return res.json(allData);
        } catch (e) {
            next(e)
        }
    }
}

module.exports = HomePageController