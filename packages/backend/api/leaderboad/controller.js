//const Community = require('./model');
const asyncHandler = require('../../middleware/async');
const moongosePaginate =  require('mongoose-paginate-v2');
const luaScript = require('../../script/organization_rank_and_details_intersection_redis_script')
const db = require('../../config/db');
const { resolve } = require('bluebird');
const redisClient = db.getClient();

const getPagination = (page, size) => {
    const limit = size  ? + size - 1 : 10;
    const offset = page ? page*limit : 0;

    return { limit, offset };
};

const getRanking = asyncHandler(async (req, res) => {
    const { page, size } = req.query;
    const { limit, offset } = getPagination(page, size);

    const script = luaScript.getScript(offset,limit);

    redisClient.defineCommand("ranking", {
        numberOfKeys: 2,
        lua: `${script}`
    });


    redisClient.ranking("leaderboard:org:score", "leaderboard:org", (err, result) => {
        if(err) {
            res.sendStatus(500).send({
                message: err.message || "Some error occured while retriving rankings"
            })
        }else {
            var parsedResult=[];
            for(var i=0; i<result.length; i++){
                parsedResult[i] = JSON.parse(result[i]);
            }
            res.send({
                data: parsedResult
            })
        }
    })


});

module.exports = {
    getRanking
}