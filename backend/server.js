const express = require('express');
const app = express();

const PORT = process.env.PORT || 4000;

app.get('/', (req, res)=>{
    res.status(200).send("Working");
});

app.listen(PORT, ()=>console.log(`Listening on port ${PORT}...`));