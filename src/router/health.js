function health(app) {
    app.get('/health', (req, res) => {
      res.status(200).json({ status: 'up' });
    })
  }
  
  module.exports = {
    health
  };