const schedule = require('node-schedule');
const { fork } = require('child_process');

const cronJob = () =>{
    const child = fork('D:/Github Extenship/IncubateIND/Fellows Project/The-anton/fellows/packages/backend/api/leaderboad/loadData.js');

    schedule.scheduleJob(process.env.LEADERBOARD_CRON_INTERVAL_EXPERSSION, function(){
        console.log("Next schedule started........");
        child.send('start');
        child.on('message', (res) => {
            console.log(res);
        })
    });

    
}


module.exports = {
    cronJob
};