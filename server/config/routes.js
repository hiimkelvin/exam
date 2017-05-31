let controller = require('../controllers/controller');

module.exports = app => {
    app.post('/api/login', controller.loginReg);
    app.get('/api/current', controller.current);
	app.get('/logout', controller.logout);
    app.get('/api/polls', controller.getPolls);
    app.post('/api/addpoll', controller.addPoll);
    app.get('/api/poll/show/:id', controller.getCurrentPoll);
    app.delete('/api/poll/destroy/:id', controller.deletePoll);
    app.get('/api/current', controller.current);
    
};