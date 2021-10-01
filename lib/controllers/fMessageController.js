//build routes user Router()
const { Router } = require('express');
const FmessageService = require('../services/FMessageService');
// const FMessage = require('../models/FMessage');
//import service file for sending a message

module.exports = Router()
  .post('/', async (req, res, next) => {
    try {
      const createMessage = await FmessageService.createFMessage(req.body);
      res.send(createMessage);
    } catch (err) {
      next(err);
    }
  })
  .get('/', async (req, res, next) => {
    try {
      const createMessage = await FmessageService.getAllMessage();
      res.send(createMessage);
    } catch (err) {
      next(err);
    }
  })
  .get('/:id', async (req, res, next) => {
    try {
      const id = req.params.id;
      const createMessage = await FmessageService.getMessagebyId(id);
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
      const createMessage = await FmessageService.updateMessagebyId(
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
      const createMessage = await FmessageService.deleteMessageById(id);
      res.send(createMessage);
    } catch (err) {
      next(err);
    }
  });
