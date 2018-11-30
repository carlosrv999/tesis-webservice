'use strict';

module.exports = function(server) {
  // Install a `/` route that returns server status
  var router = server.loopback.Router();
  router.get('/', server.loopback.status());

  router.post('/nuevaAppMongo', (req,res) => {

    return res.status(200).send(req.body)
  });






  server.use(router);

};
