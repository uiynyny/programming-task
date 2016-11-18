var user = require('./user');

module.exports = {
  configure: function(app) {
    app.get('/',function (req,res) {
      res.json({"Message": "navigate /user/ to view all entries",
                "Usage": "use GET,POST,PUT,DELETE on /user/ or /user/:username"});
    });

    app.get('/user/', function(req, res) {
      user.get(res);
    });

    app.post('/user/', function(req, res) {
      user.add(req.body, res);
    });

    app.put('/user/', function(req, res) {
      user.update(req.body, res);
    });

    app.get('/user/:name/',function (req,res) {
      user.getByName(req.params.name,res);
    });

    app.delete('/user/:name/', function(req, res) {
      user.delete(req.params.name, res);
    });
  }
};
