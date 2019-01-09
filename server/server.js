require ('./config/config')
const express = require('express')

const app = express()

const bodyParser = require('body-parser')

// bodyParser es un middleware
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.get('/usuario', function (req, res) {
    res.json('get Usuario')
})

app.post('/usuario', function (req, res) {

    let body = req.body

    if (body.nombre === undefined) {

        res.status(400).json({
            ok: false,
            mensaje: 'El nombre es necesario'
        })
    }
    else {
        res.json({
            usuario: body
        })
    }
})

app.put('/usuario/:id', function (req, res) {
    let identificacion = req.params.id
    res.json({
        identificacion
    })
})

app.delete('/usuario', function (req, res) {
    res.json('delete Usuario')
})

app.listen(process.env.PORT, () => {
    console.log('Escuachando por el puerto:',process.env.PORT);

})