const { rooms } = require('../../config/database');

// 使用路由
function useRouter(app) {
  app.get('/checkUsername', (req, res) => {
    const { username, roomname } = req.query;
    const room = rooms[roomname];
    if (!room) {
      res.status(200).json({ success: true, isRepeat: false });
      return
    }
    const isRepeat = Object.keys(room).some(id => {
      return room[id].username === username
    })
    res.status(200).json({ success: true, isRepeat });
  })
}

function health(app) {
  app.get('/health', (req, res) => {
    res.status(200).json({ status: 'up' });
  })
}

module.exports = {
  useRouter,
  health
};