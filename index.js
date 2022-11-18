const axios = require("axios");
const cheerio = require("cheerio");
const express = require("express");

const app = new express();
const PORT = 5000;
let html;

app.get('/', (req, res) => {
    // res.send("<h1>Hello! உலக </h1>");
    res.send(html);
})

const url = 'https://www.theguardian.com/uk'
const turl = "https://www.dailythanthi.com/";

axios(turl)
    .then(res => {
        html = res.data
        const $ = cheerio.load(html)
        
        // console.log(html)
})

app.listen(PORT, () => console.log(`Server on port:${PORT}`));





