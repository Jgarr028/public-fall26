// console.log("Testing app");

import express from 'express';
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

app.get('/', (req, res) => {
    res.json({
        "status": 200,
        "message": "Response by get api"
    })
})


export default app;