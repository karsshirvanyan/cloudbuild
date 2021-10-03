const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/api', (req, res) => {
    return res.json({
        message: "hello"
    });
});
app.listen(3000, () => console.log('Server ready'))