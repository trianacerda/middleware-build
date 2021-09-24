//createFMessage
//take in 2 input req.body-- CALL API
//record who inputted in database
//.send(data) display Fmessage to user

const Fmessage = require('../models/FMessage');

module.exports = class FmessageService {
//   static async createFMessage({ messenger, funny }) {
//     //send text
//     await sendSms(
//       process.env.ORDER_HANDLER_NUMBER,
//       `New Order received for ${quantity}`
//     );

//     //store the order
//     const order = await Order.insert({ quantity });

//     return order;
//   }
// };
