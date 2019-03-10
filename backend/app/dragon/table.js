const pool = require('../../databasePool')

class DragonTable {
  static storeDragon (dragon) {
    const { birthdate, nickname, generationId } = dragon

    return new Promise((resolve, reject) => {
      // insert new values into schema
      // preserve camelcase for column name by using double quotes
      // guard against SQL injection by using number interpolation pulling from array indices 1-3
      pool.query(
        `INSERT INTO dragon(birthdate, nickname, "generationId") VALUES($1, $2, $3) RETURNING id`,
        [birthdate, nickname, generationId],
        (error, response) => {
          if (error) return reject(error)

          const dragonId = response.rows[0].id

          resolve({ dragonId })
        }
      )
    })
  }
}

module.exports = DragonTable
