//build routes user Router()
const { Router } = require('express');
// const FMessage = require('../models/FMessage');
//import service file for sending a message

module.exports = Router()
  .post('/api/v1/orders', async (req, res, next) => {
    try {
      const createMessage = await 'SERVICE'.insertMessenger(req.body);
      res.send(createMessage);
    } catch (err) {
      next(err);
    }
  })
  .get('/', async (req, res, next) => {
    try {
      const createMessage = await 'SERVICE'.getAllMessage();
      res.send(createMessage);
    } catch (err) {
      next(err);
    }
  })
  .get('/:id', async (req, res, next) => {
    try {
      const id = req.params.id;
      const createMessage = await 'SERVICE'.getMessagebyId(id);
      res.send(createMessage);
    } catch (err) {
      next(err);
    }
  })
  .put('/:id', async (req, res, next) => {
    try {
      const id = req.params.id;
      const messenger = req.body.messenger;
      const funny = req.body.funny;
      const createMessage = await 'SERVICE'.updateMessagebyId(
        id,
        messenger,
        funny
      );
      res.send(createMessage);
    } catch (err) {
      next(err);
    }
  })
  .delete('/:id', async (req, res, next) => {
    try {
      const id = req.params.id;
      const createMessage = await 'SERVICE'.deleteMessagebyId(id);
      res.send(createMessage);
    } catch (err) {
      next(err);
    }
  });
