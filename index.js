var Hapi = require('hapi');

var server = new Hapi.Server('localhost',3000);

server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        reply('Hello, from NodeJS inside Cloud Foundry!');
    }
});

server.start(function () {
    console.log('Server running at: ', server.info.uri);
});
