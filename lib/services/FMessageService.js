const { sendMessage } = require('../utils/sendMessage');
const FMessage = require('../models/FMessage');

module.exports = class FmessageService {
  static async createFMessage({ messenger, funny }) {
    //send text
    await sendMessage(
      process.env.ORDER_HANDLER_NUMBER,
      `To: ${messenger}, you thought this was funny? ${funny}`
    );

    //store the order
    const createMessage = await FMessage.insertMessenger({ messenger, funny });
    return createMessage;
  }

  static async getAllMessage() {
    await sendMessage(process.env.ORDER_HANDLER_NUMBER, 'Got your messages!');
    const createMessage = await FMessage.getAllMessage();
    return createMessage;
  }

  static async getMessagebyId(id) {
    await sendMessage(
      process.env.ORDER_HANDLER_NUMBER,
      `Here's that one (${id}) particular message you wanted`
    );
    const createMessage = await FMessage.getMessagebyId(id);
    return createMessage;
  }

  static async updateMessagebyId(id, messenger, funny) {
    await sendMessage(
      process.env.ORDER_HANDLER_NUMBER,
      `Message number ${id} has been updated`
    );
    const createMessage = await FMessage.updateMessagebyId(
      id,
      messenger,
      funny
    );
    return createMessage;
  }

  static async deleteMessagebyId(id) {
    await sendMessage(
      process.env.ORDER_HANDLER_NUMBER,
      `Message number ${id} has been deleted. Aaw, was that one too mean? :(`
    );
    const createMessage = await FMessage.deleteMessagebyId(id);
    return createMessage;
  }
};
