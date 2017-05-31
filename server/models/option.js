let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let OptionSchema = new Schema({
    // _poll: {type: Schema.Types.ObjectId, ref: 'Poll'},
    option: { type: String, required: true, minlength: 3},
    // option2: {type: String, required: true, minlength: 3},
    // option3: {type: String, required: true, minlength: 3},
    // option4: {type: String, required: true, minlength: 3},
    vote: { type: Number },
    
}, {timestamps: true});


mongoose.model('Option', OptionSchema);

