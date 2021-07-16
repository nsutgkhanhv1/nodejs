const siteRouter = require('./site');
const courseRouter = require('./courses');
const userRouter = require('./user');
const accountRouter = require('./account');

function route(app){
    
    app.use('/user', userRouter)
    app.use('/courses', courseRouter);
    app.use('/account', accountRouter);
    app.use('/', siteRouter);


}

module.exports = route;