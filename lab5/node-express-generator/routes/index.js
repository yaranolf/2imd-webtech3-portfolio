var express = require('express');
var router = express.Router();
var messageController = require('../controllers/message');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/messages', messageController.get);

//router.post('/messages', messageController.post);

router.post('/messages', (req, res, next)=>{
  let text = req.body.text;
  let user = req.body.user;

  let m = new Message();
  m.text = text;
  m.user = user;
  m.save();

  res.json({
    "status" : "success",
    "data": {
      "message" : m
    },
  });
});

module.exports = router;
