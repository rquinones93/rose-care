const express = require('express');
const router = express.Router();

router.get('/', (request, response, next) => {
  response.render('chat',  { title : 'chat' }  );
});

router.get('/:roomid', (request, response, next) => {
  response.render('chat',  { title : 'chat',room:request.params.roomid }  );
});

router.post('/:roomid', (request, response, next) => {

  response.render('chat',  { title : 'chat',room: request.params.roomid}  );
});

module.exports = router;