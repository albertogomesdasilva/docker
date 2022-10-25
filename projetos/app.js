const express = require('express')
const app = express()
const port = 8000

app.get('/', (req, res) => {
    res.send('Aplicação gerada e rodando...')
})

app.listen(port, () => {
    console.log('Executando na Porta v. 2 : ${port}')
})