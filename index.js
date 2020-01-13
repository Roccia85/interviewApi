const express = require('express');
const Router = require('express').Router;
const cors = require('cors')
const path = require('path');

const chartCrypto = require('./chartCrypto.js').default
const chartUniversities = require('./chartUniversities.js').default
const app = express();
app.use(cors())
const router = new Router();

router.use('/ui', express.static(path.join(__dirname, './html')));
router.get('/chartCrypto', chartCrypto)
router.get('/chartUniversities', chartUniversities)
app.use(router);

const server = app.listen(8081, function () {
    const host = server.address().address
    const port = server.address().port

    console.log("App listening at http://%s:%s", host, port)
})