const Community = require('./model');
const asyncHandler = require('../../middleware/async');
const moongosePaginate =  require('mongoose-paginate-v2');

//const Community = db.community;

const getPagination = (page, size) => {
    const limit = size  ? + size : 3;
    const offset = page ? page*limit : 0;

    return { limit, offset };
};

const getAllCommunity = asyncHandler(async (req, res) => {
    const { page, size } = req.query;
    const { limit, offset } = getPagination(page, size);

    Community.paginate( {}, {offset, limit})
        .then((data) => {
            res.send({
                data: data
            });
        })
        .catch((err) => {
            res.sendStatus(500).send({
                message:
                    err.message || "Some error occured while retrieving communities."
            });
        });

});

module.exports = {
    getAllCommunity
}