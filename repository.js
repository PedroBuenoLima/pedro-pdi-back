const Pool = require('pg').Pool;
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'sistema_passeios',
  password: '147159',
  port: 5432,
});

const getPasseios = (request, response) => {
  pool.query('SELECT * FROM passeios ORDER BY id DESC', (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const getPasseioById = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query('SELECT * FROM passeios WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const createPasseio = (request, response) => {
  const { name, price, content, quantity, imageUrl } = request.body;

  pool.query(
    'INSERT INTO passeios (name, price, content, quantity, image_url) VALUES ($1, $2, $3, $4, $5)',
    [name, price, content, quantity, imageUrl],
    (error, result) => {
      if (error) {
        throw error;
      }
      response.status(201).send(`Passeio criado com sucesso.`);
    }
  );
};

const updatePasseio = (request, response) => {
  const id = parseInt(request.params.id);
  const { name, price, content, quantity, imageUrl } = request.body;

  pool.query(
    'UPDATE passeios SET name = $1, price = $2, content = $3, quantity = $4, image_url = $5 WHERE id = $6',
    [name, price, content, quantity, imageUrl, id],
    (error, result) => {
      if (error) {
        throw error;
      }
      response.status(200).send(`Passeio ${id} atualizado com sucesso.`);
    }
  );
};

const deletePasseio = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query('DELETE FROM passeios WHERE id = $1', [id], (error, result) => {
    if (error) {
      throw error;
    }
    response.status(200).send(`Passeio removido com sucesso com o identificador: ${id}`);
  });
};

module.exports = {
  getPasseios,
  getPasseioById,
  createPasseio,
  updatePasseio,
  deletePasseio,
};
