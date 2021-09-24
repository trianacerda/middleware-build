//data to build our tables
const pool = require('../utils/pool');

module.exports = class FMessage {
  id;
  messenger;
  funny;

  constructor(row) {
    this.id = row.id;
    this.messenger = row.messenger;
    this.funny = row.funny;
  }

  static async insertMessenger({ messenger, funny }) {
    const { rows } = await pool.query(
      `INSERT INTO FmessageTable (messenger, funny)
      VALUES($2, $3) WHERE id = $1 RETURNING *`,
      [messenger, funny]
    );
    return new FMessage(rows[0]);
  }

  static async getAllMessage() {
    const { rows } = await pool.query('SELECT * FROM FmessageTable');

    return rows.map((row) => new FMessage(row));
  }

  static async getMessagebyId(id) {
    const { rows } = await pool.query(
      'SELECT * FROM FmessageTable WHERE id = $1',
      [id]
    );

    return new FMessage(rows[0]);
  }

  static async updateMessagebyId(id, messenger, funny) {
    const { rows } = await pool.query(
      `UPDATE FmessageTable (messenger, funny)
      VALUES($2, $3) WHERE id = $1 RETURNING *;`,
      [id, quantity]
    );

    return new FMessage(rows[0]);
  }

  static async deleteMessageById(id) {
    const { rows } = await pool.query(
      'DELETE FROM FmessageTable WHERE id = $1 RETURNING *',
      [id]
    );

    return new FMessage(rows);
  }
};
