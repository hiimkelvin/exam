let mongoose = require('mongoose');

let User = mongoose.model('User');
let Poll = mongoose.model('Poll');
let Option = mongoose.model('Option');


module.exports = {

    loginReg: (req, res) => {
        User.findOne({name: req.body.name}, (err, user) => {
            if(user == null){
                let newUser = new User(req.body);
                newUser.save( (err, savedUser) => {
                    if(err){
                        console.log(err);
                        return res.sendStatus(500);
                    } else {
                        req.session.user = savedUser;
                        // console.log(req.session);
                        return res.json(savedUser);
                    }
                })
            } else {
                req.session.user = user;
                // console.log(req.session);
                return res.json(user);
            }
        })
    },

    current: (req, res) => {
        if(!req.session.user){
            return res.status(401);
        } else {
            return res.json(req.session.user);
        }
    },

	logout: (req, res)=> {
		req.session.destroy();
		res.redirect('/')
	},

    addPoll: (req, res) => {
        console.log(req.body.option1);
        if(!req.session.user){
            return res.sendStatus(401);
        } else {
            let poll = new Poll (req.body);
            poll._user = req.session.user._id;
            poll.vote = 0;
            console.log(poll);
            poll.save( (err, newPoll) => {
                if(err){
                    // console.log(err);
                    return res.status(500).send('Question (atleast 8 characters) and Options (atleast 3 characters) required.')
                } else {
                    res.json(newPoll)
                }
            })
        }
    },

    getPolls: (req,res) => {
        Poll.find({}).populate('_user').exec( (err, polls)=> {
            if(err){
                console.log(err)
                return res.sendStatus(500);
            } else {
                // console.log(questions);
                return res.json(polls);
            }
        })
    },

    getCurrentPoll: (req, res) => {
        Poll.findOne({_id: req.params.id}).populate('_user').exec( (err, current_poll) => {
            if(err){
                console.log(err);
                return res.sendStatus(500);
            } else {
                // console.log(current_user);
                return res.json(current_poll);
            }
        })
    },

    deletePoll: (req, res) => {
        Poll.remove({_id: req.params.id}, (err, poll) => {
            if(err){
                console.log(err)
                return res.sendStatus(500);
            } else {
                return res.json(poll);
            }
        })
    },

    current: (req, res) => {
        if(!req.session.user){
            return res.status(401);
        } else {
            return res.json(req.session.user);
        }
    },



};

