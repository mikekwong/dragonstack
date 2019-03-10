const pool = require('../../databasePool')

class GenerationTable {
  // static enables the method to be used without making a new instance
  static storeGeneration (generation) {
    return new Promise((resolve, reject) => {
      // for string interpolation by node-postgres, we can call the first item in the array using $1 to signify first element. This helps protect from sequel injection
      pool.query(
        'INSERT INTO generation(expiration) VALUES($1) RETURNING id',
        [generation.expiration],
        // callback with error and response
        (error, response) => {
          if (error) return reject(error)

          const generationId = response.rows[0].id

          resolve({ generationId })

          return generationId
        }
      )
    })
  }
}

module.exports = GenerationTable
