// import all routes
const test1Router = require('./test1')
const test2Router = require('./test2')


// all routers group
// import and add to this array to register routes
const routers = [
    {
        group: test2Router,
        prefix: '/test2'
    },
    {
        group: test1Router,
        prefix: '/'
    }
];


// register all route to app
function registerRouters(app){
    for(let route of routers){
        app.use(route.prefix, route.group)
    }
}

module.exports = registerRouters