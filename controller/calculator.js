const CalculatorModel = require("../models/PagesModel");

class Calculator {
    static img = async (req, res, next) => {

        try {
            const updatedDocument = await CalculatorModel.findByIdAndUpdate(
                req.body.id,
                { images: req.body.images },
                { new: true }
            ).select('images');
            return res.json({ data: updatedDocument });
        } catch (err) {
            console.log(err);
            next(err);
        }
    };

    static getImg = async (req, res, next) => {
        try {
            const data = await CalculatorModel.find().select("images").select('images');
            res.json({ data });
        } catch (err) {
            console.log(err);
            next(err);
        }
    };
    static select = async (req, res, next) => {
        try {
            console.log(req.body.value);
            const { id, value, name } = req.body;
            const updatedDocument = await CalculatorModel.findByIdAndUpdate(
                id,
                { $push: { [`select.${name}`]: { value } } },
                { new: true }
            );
            return res.json({ data: updatedDocument });
        } catch (err) {
            console.log(err);
            next(err);
        }
    };
    static getSelect = async (req, res, next) => {
        try {
            const data = await CalculatorModel.find().select("select");
            res.json({ data });
        } catch (err) {
            console.log(err);
            next(err);
        }
    };
    static delete = async (req, res, next) => {
        const { id, name, delets } = req.query;
        try {
            const updatedDocument = await CalculatorModel.findByIdAndUpdate(
                id,
                { $pull: { [`select.${name}`]: { _id: delets } } },
                { new: true }
            ).select('select');
            return res.json({ data: updatedDocument });
        } catch (err) {
            next(err);
        }
    };
}
module.exports = Calculator;
