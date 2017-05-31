let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let PollSchema = new Schema({
    _user: {type: Schema.Types.ObjectId, ref: 'User'},
    question: {type: String, required: true, minlength: 8},
    option1: {type: String, required: true, minlength: 3},
    option2: {type: String, required: true, minlength: 3},
    option3: {type: String, required: true, minlength: 3},
    option4: {type: String, required: true, minlength: 3},
    // options: [{type: Schema.Types.ObjectId, ref: 'Options'}],


    
    
}, {timestamps: true});

mongoose.model('Poll', PollSchema);
