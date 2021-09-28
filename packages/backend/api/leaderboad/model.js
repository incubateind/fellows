const {Schema, model} = require('mongoose');
//const mongoosePaginate = require('mongoose-paginate-v2');

const rankSchema = Schema({
        
    org_id: { type: String, required: true },
    name: { type: String, required: false },
    size: { type: Number, required: true },
    email: { type: String, required: false },
    website: { type: String, required: false },
    logo: { type: String, required: true },
    community_type: { type: String, required: false },
    stack_involved: { type: Array, required: false },
    members: { type: Array },
    speakers: { type: Array },
    
});

//communitySchema.plugin(mongoosePaginate)

module.exports =  model('communitiesScore', rankSchema);
