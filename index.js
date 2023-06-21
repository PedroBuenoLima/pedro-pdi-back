const express = require('express');
const app = express();
const port = 3000;

app.get('/', (request, response) => {
    response.json({ aplicacao: 'CRUD PASSEIOS' })
  })

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
