
const express = require('express')

const app = express();
const target = process.env.TARGET;
const port = process.env.PORT || 3000;

app.get('/*', function (req, res) {
    res.redirect(target);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})