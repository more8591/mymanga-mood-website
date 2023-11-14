// NOTE: Might have to install CORS via npm i cors

const PORT = 8000
const axios = require('axios') //enables HTML
const open = require('open') // used to open in default browser
const cheerio = require('cheerio') //enables JQuery selectors
const express = require('express') //setups local server
const app = express()
const cors = require('cors') //bypass CORS policy in-browser
app.use(cors()) //init CORS

const url = 'https://manganato.com/'

app.get('/', function(req, res) {

    axios(url)
        .then(response => {
            const html = response.data
            const $ = cheerio.load(html)
            const manga = []

            // NOTE: Find a way to only get the whole list but fetch a few at a time.

            $('h3 > a.text-nowrap.a-h', html).each(function() { // cannot be a function expression
                const title = $(this).text()
                const url = $(this).attr('href')
                manga.push({
                    title,
                    url
                })
            })
            res.json(manga) // the manga array gets pushed into the localhost:8000/results
        }).catch(err => console.log(err))


})


app.listen(PORT, () => console.log(`server running on PORT http://localhost:${PORT}`));
open('manga-index.html');