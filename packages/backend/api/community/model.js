const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const communitySchema = new mongoose.Schema({
        
    org_id: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    region: { type: String, required: true },
    size: { type: Number, required: true },
    email: { type: String, required: true },
    website: { type: String, required: true },
    logo: { type: String, required: true },
    community_type: { type: String, required: true },
    stack_involved: { type: Array, required: true },
    members: { type: Array },
    speakers: { type: Array },
    
});

communitySchema.plugin(mongoosePaginate);

module.exports = mongoose.model('communities', communitySchema);
