const express = require('express');
const app = express()
const path = require('path');
const port = process.env.PORT || 8080;

app.use(express.json())
/* ---------- API ---------- */
app.get('/api/',(req,res) => {
    console.log(req)
    res.send("Your API here")
})
/* ------------------------ */


/* ---------- STATIC DIRS ---------- */
app.use('/', express.static(__dirname + '/public'));
app.use('/css', express.static(__dirname + '/css'));
app.use('public/js', express.static(path.resolve(__dirname+"public","js")));
/* --------------------------------- */


/* ---------- SPA Request ---------- */
app.get('/*', (req,res) => {
    res.sendFile(path.resolve("public","Index.html"))
})
/* -------------------------------- */

app.listen(port, () => console.log(`Server running on http://127.0.0.1:${port}`))