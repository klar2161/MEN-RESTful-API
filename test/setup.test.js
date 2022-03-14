process.env.NODE_ENV = 'test';

const Cat = require('../models/cat');
const User = require('../models/user');



before((done) => {
    Cat.deleteMany({}, function(err) {});
    User.deleteMany({}, function(err) {});
    done();
});

after((done) => {
    Cat.deleteMany({}, function(err) {});
    User.deleteMany({}, function(err) {});
    done();
});
