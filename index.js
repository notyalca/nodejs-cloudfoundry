var Hapi = require('hapi');

var server = new Hapi.Server(process.env.VCAP_APP_HOST || 'localhost', process.env.VCAP_APP_PORT || 3000);

server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        reply('Hello, from NodeJS inside Cloud Foundry!');
    }
});

server.route({
    method: 'GET',
    path: '/{name}',
    handler: function (request, reply) {
        reply('Greetings and Salutations, ' + encodeURIComponent(request.params.name) + '!');
    }
});


server.start(function () {
    console.log('Server running at: ', server.info.uri);
});
