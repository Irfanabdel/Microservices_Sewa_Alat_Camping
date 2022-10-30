import mongoose from 'mongoose'
import express from 'express'
import cors from 'cors'
import routes from './routes.js'

mongoose.connect('mongodb://localhost:27017/sewa_camping', {
    useNewUrlParser: true
})

const connection = mongoose.connection
connection.on('error', (e) => console.log(e))
connection.once('open', () => console.log("Berhasil Konek Database"))

const app = express()
app.use(cors())
app.use(express.json())

app.use('/', routes)

app.listen('2000', () => console.log("Server Berhasil di Jalankan Pada Port 2000"))