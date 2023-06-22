const express = require('express');
const app = express();
const port = 3000;
const repository = require('./repository')

app.use(express.json());

app.get('/', (request, response) => {
    response.json({ aplicacao: 'CRUD PASSEIOS' })
  })

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});

app.get('/passeios', repository.getPasseios)
app.get('/passeios/:id', repository.getPasseioById)
app.post('/passeios', repository.createPasseio)
app.put('/passeios/:id', repository.updatePasseio)
app.delete('/passeios/:id', repository.deletePasseio)
