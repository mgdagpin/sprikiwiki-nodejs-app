// const express = require('express');
// const app = express();
// const PORT = 8000;

// app.use(express.json());

// app.get('/hi', (req, res) => {
//     res.status(200).send({
//         say: 'Hey man!'
//     })
// })

// app.post('/agecalc/', (req, res) => {
//     const { year } = req.body;
//     const currentYear = new Date().getFullYear();

//     if(!year) {
//         res.status(418).send({ message: 'Nan' })
//     }

//     res.send({
//         your_age: currentYear - year
//     })

// })

// app.listen(PORT, () => {
//     console.log('It work go to http://localhost:'+PORT)
// })
