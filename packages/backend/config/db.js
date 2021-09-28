const mongoose = require("mongoose");
const Redis = require("ioredis");
const bluebird = require('bluebird');
var redisClient;


const mongoClientConfig = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
}

const redisClientConfig = {
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
  password:  process.env.REDIS_PASSWORD
}

bluebird.promisifyAll(Redis);

const connectDB = new Promise(async (status) => {
  await mongoose.connect(process.env.MONGO_URI, mongoClientConfig )
  .then((res) =>  {
    console.log(`MongoDB Connected: ${res.connection.host}`)
    status(true);
  })
  .catch((err) => {
    console.log("Connection error: " + err);
  });
  
  mongoose.connection.on('connected',(res) =>  {
      console.log('Child - MongoDB Connected')
      status(true);
  })

  mongoose.connection.on('error',(err) => {
      console.log("Child - Connection error: " + err);
      mongoose.connect(process.env.MONGO_URI, mongoClientConfig );
  })

  mongoose.connection.on('disconnect',() => {
      mongoose.connect(process.env.MONGO_URI, mongoClientConfig )
  })

});



const connectRedis = new Promise( (resolve,reject) => {
  
  redisClient = new Redis(redisClientConfig);

  redisClient.on('error', (err) => {
    console.log('Redis Client Error', err);
    reject(err);
  });
  redisClient.on('ready', () => {
    console.log('Redis Connnected: Redis client is ready!');
    resolve(true);
  });
  redisClient.on('end', () => console.log('Redis connection has closed.'));
  redisClient.on('reconnecting', () => {console.log('Redis client is reconnecting!');});
});


function getClient() {
  return redisClient;
}


module.exports = {
   /**
  * Get the application's connected Mongodb client instance.
  *
  * @returns {Object} - a connected mongodb client instance.
  */
  connectDB,

  /**
  * Get the application's connected Redis client instance.
  *
  * @returns {Object} - a connected node_redis client instance.
  */
  connectRedis,
  getClient
};
