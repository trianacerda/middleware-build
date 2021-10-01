//data to build our tables
const pool = require('../utils/pool');

module.exports = class FMessage {
  // id;
  // messenger;
  // funny;

  constructor(row) {
    this.id = row.id;
    this.messenger = row.messenger;
    this.funny = row.funny;
  }

  static async insertMessenger({ messenger, funny }) {
    const { rows } = await pool.query(
      `INSERT INTO fmessagetable (messenger, funny)
      VALUES ($1, $2) RETURNING *`,
      [messenger, funny]
    );
    return new FMessage(rows[0]);
  }

  static async getAllMessage() {
    const { rows } = await pool.query('SELECT * FROM fmessagetable');

    return rows.map((row) => new FMessage(row));
  }

  static async getMessagebyId(id) {
    const { rows } = await pool.query(
      'SELECT * FROM fmessagetable WHERE id = $1',
      [id]
    );

    return new FMessage(rows[0]);
  }

  static async updateMessagebyId(id, messenger, funny) {
    const { rows } = await pool.query(
      `UPDATE fmessagetable 
      SET 
      messenger = $2, 
      funny = $3
      WHERE id = $1 RETURNING *
      `,
      [id, messenger, funny]
    );

    return new FMessage(rows[0]);
  }

  static async deleteMessageById(id) {
    const { rows } = await pool.query(
      'DELETE FROM fmessagetable WHERE id = $1 RETURNING *',
      [id]
    );

    return new FMessage(rows);
  }
};
