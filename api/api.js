module.exports = {
  defineApi: function(app){
    app.get('/api/v1/hello', function (req, res) {
      res.send('Hello');
    });

    app.get('/api/v1/world', function (req, res) {
      res.send('World');
    });
  }
}