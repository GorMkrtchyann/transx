const {Schema} = require('mongoose')
const {adminDB, pagesDB} = require('../conecters/AllConnects')
const {home} = require("nodemon/lib/utils");

const ContactOfficeInfo = new Schema({

})

const HomePageSlideSchema = new Schema ({
    img: {type: String, required: true},
    title: {type: Object, required: true},
    description: {type: Object, required: true},
    link: {type: String, required: true}
})

const HomeSlideModel = pagesDB.model('HomeSlide', HomePageSlideSchema)

module.exports = {HomeSlideModel}