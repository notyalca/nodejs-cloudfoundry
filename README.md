# nodejs-cloudfoundry
Using a basic Node.js [hapi](http://hapijs.com/) server to test how easily Node.js applications can be installed on Pivotal's Cloud Foundry (Pivotal Web Services).

## Available Routes
/

/{name}

## Pivotal-specific code
index.js line 3 shows how to get the host and port from Pivotal's environment variables.

 See [Cloud Foundry Environment Variables | Pivotal Docs](http://docs.run.pivotal.io/devguide/deploy-apps/environment-variable.html)

## Install sequence
* Sign up for an account on [Pivotal Web Services](https://run.pivotal.io/)
* Download and install the CLI
* Login through the CLI: `cf login -a https://api.run.pivotal.io`
* Clone this repo `git clone https://github.com/notyalca/nodejs-cloudfoundry.git
`
* Deploy using the CLI, passing the start command with the -c flag: `cf push nodejs-cloudfoundry -c "node index.js"` 

## Further Reading:
* [Tips for Node.js Applications | Cloud Foundry Docs](http://docs.cloudfoundry.org/buildpacks/node/node-tips.html)
* [Deploy an Application | Pivotal Docs](http://docs.run.pivotal.io/devguide/deploy-apps/deploy-app.html)
