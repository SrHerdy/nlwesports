

// Importando modulos
import express from 'express'

// criando app
const app = express ()

//rotas
 app.get('/ads', (req, res) => {
    res.json([
        { id: 1, name: 'anuncio 1' },
        { id: 2, name: 'anuncio 2' },
        { id: 3, name: 'anuncio 3' },
        { id: 4, name: 'anuncio 4' },
    ])
 })


 app.listen(8888)
 console.log('servidor iniciado');