const express = require('express');
const port = '3200';
const cors = require('cors')
const app = express()
 
app.use(cors())

app.get('/test', (req, res, next) => {
    res.send({ data: 'hello server' })
})
app.listen(port, () => console.log('listen on port ' + port))