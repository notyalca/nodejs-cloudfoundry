var Hapi = require('hapi');

var server = new Hapi.Server('localhost',process.env.VCAP_APP_PORT || 3000);

server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        reply('Hello, from NodeJS inside Cloud Foundry!');
    }
});

server.route({
    method: 'GET',
    path: '/health',
    handler: function (request, reply) {
        reply({"status":"healthy"});
    }
});


server.start(function () {
    console.log('Server running at: ', server.info.uri);
});
