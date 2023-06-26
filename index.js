const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
const repository = require('./repository')

app.use(cors())

app.use(express.json());

app.get('/', (request, response) => {
    response.json({ aplicacao: 'CRUD PASSEIOS' })
  })

app.get('/passeios', repository.getPasseios)
app.get('/passeios/:id', repository.getPasseioById)
app.post('/passeios', repository.createPasseio)
app.put('/passeios/:id', repository.updatePasseio)
app.delete('/passeios/:id', repository.deletePasseio)

app.use((request, response) => {
  response.status(404).json({error: "not found"})
})

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
