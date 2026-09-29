// console.log("Testing app");

import express from 'express';
import user from './routes/user.js';
const app = express();
const port = 8080;

app.listen(port, () => {
    console.log(`Server is listening to ${port}`);
})

// console.log("Testing");
// console.log("Testing1");
// console.log("Testing2");
// console.log("Testing3");
// console.log("Testing4");
// console.log("Testing5");

app.use(express.json());
const requestTime = function (req, res, next) {
    req.requestTime = Date.now()
    next()
}

app.use(requestTime)
app.use('/user', user)





// app.get('/', (req, res) => {
//     res.json({
//         "status": 200,
//         "message": "Response by get api"
//     })
// })

// app.post('/user', (req, res) => {
//     res.json({
//         "status": 200,
//         "message": "Response by post api"
//     })
// })


// app.get('/:id', (req, res) => {
//     res.json({
//         "status": 200,
//         "message": `Response by get time api ${req.requestTime}`
//     })
// })

export default app;