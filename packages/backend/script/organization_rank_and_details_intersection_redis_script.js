function getScript(offset,limit) { 
    return `
        local order = redis.call('zrevrange',KEYS[1],${offset},${offset + limit});
        return redis.call("hmget",KEYS[2],unpack(order)) 
    `
}

module.exports = {
    getScript
}