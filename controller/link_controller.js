const Link = require('../model/linkdb');
const User = require('../model/user');
module.exports.linkviewer = function (req, res) {

    const name = req.query.name;
    Link.find({ user: req.user._id }, function (error, link) {

        if (error) {
            console.log("error during fectching data from database");
        }
        return res.render('link_viewer', { username: name, link_list: link });


    });
}

module.exports.create = function (req, res) {
    // console.log(req.body);
    Link.create({ Title: req.body.title, Link: req.body.link, user: req.user._id }, function (error, link) {
        if (error) {
            console.log("there is and during Entering value in link schema ");
        }
        return res.redirect('back');


    });
}
module.exports.delete = function (req, res) {
    // console.log(req.body);
    const id = req.query.id;
    // this is function will find out and delete our contact 

    Link.findByIdAndDelete(id, function (error) {

        if (error) {
            console.log("error during deleting notes");
            return;
        }
        return res.redirect('back');


    });
}