const community = require('../community/model')
const db = require('../../config/db')

Object.size = function(obj) {
    var size = 0,key;
    for (key in obj)
        if (obj.hasOwnProperty(key)) size++;
    return size;
};

const fetchScoreFromDB = async () => {
    db.connectDB.then((status,connection) =>{
        if(status){
            community
                .find({},{org_id:1,name:1,logo:1,size:1})
                    .then((result) => {
                        console.log('Fetched scores from mongoDB!!');
                        console.log(result[0]);
                        batchUpload(result); 
                    }).catch((err) => {
                        console.log(err);
                    });
        }
    })
    
}

async function  batchUpload(data) {

    const redisClient =  db.getClient();
    const pipeline = redisClient.pipeline();
    var size = Object.size(data);
    console.log(size);

    for(var i=0; i<size; ++i) {
        console.log('Map ' + i + " = " + data[i].name);
        pipeline.hset('leaderboard:org', data[i].org_id, JSON.stringify(data[i]));
    }

    pipeline.exec((err, results) => {
        if(err != null || err != undefined) 
            console.log(err);
        else 
            console.log(results);
    });

    for(var i=0; i<size; ++i) {
        console.log(i + " = " + data[i].size + "=>" + data[i].org_id);
        pipeline.zadd('leaderboard:org:score',data[i].size, data[i].org_id);
    }

    pipeline.exec((err, results) => {
        if(err != null || err != undefined) 
            console.log(err);
        else 
            console.log(results);
    });

}

process.on('message', (msg) =>{
    fetchScoreFromDB()
})