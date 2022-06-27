import express from 'express'
import path from 'path'
import fs from "fs";
import pgp from "pg-promise"

const __dirname = path.resolve()
const app = express()
const PORT = process.env.PORT ?? 3000

const test = pgp(/*options*/)
const db = test("postgres://irina:topsecret@localhost:5432/testdb")

db.one("SELECT $1 AS value", 123)
    .then(function (data) {
        console.log("DATA:", data.value);
    })
    .catch(function (error) {
        console.log("ERROR:", error);
    });


app.use(express.static(path.join(__dirname, "static")));

app.get("/", function (req, res) {
    res.sendFile(path.resolve(__dirname, 'static', 'index.html'))
});


app.listen(PORT, () => {
    console.log(`Server has been started on port ${PORT}`)
})
