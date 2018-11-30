'use strict';

module.exports = function(server) {
  // Install a `/` route that returns server status
  var router = server.loopback.Router();
  router.get('/', server.loopback.status());

  router.post('/nuevaAppMongo', (req,res) => {
    console.log(req.body);
    return res.status(200).send(req.body)
  });






  server.use(router);

};
