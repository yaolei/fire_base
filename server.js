const express = require('express');
const compression = require('compression');
const { parse } = require('url');
const next = require('next');
const bodyParser = require('body-parser')

const dev = process.env.NODE_ENV !== 'production';
const PORT = process.env.PORT || (dev ? 80 : 80);
const app = next({ dev });
const handle = app.getRequestHandler();
const db = require('./lib/db')

app.prepare().then(() => {
    const server = express();

    server.use(compression());
    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({ extended: true }));

    server.get('/post/:slug', (req, res) => {
        console.log(req.params.slug)
        return app.render(req, res, '/post', { slug: req.params.slug })
    })
    server.get('/send', (req, res) => {
        const sql = 'SELECT * FROM User';
        let response = {};
        db.query(sql, (err, result)=> {
            if (err) {
                res.send(err)
            }
            let datas = [...result]
            response = {
                data: datas,
                message: 'It work success '
            }
            res.send(response)
        })
        db.end()
    })

    

    server.all('*', (req, res) => {
        const parsedUrl = parse(req.url, true);

        handle(req, res, parsedUrl);
    }).listen(PORT, err => {
        if (err) throw err;
        //eslint-disable-next-line
        console.log(`> Ready on http://localhost:${PORT}`);
    });

    // server.get('*', (req, res) => {
    //     const parsedUrl = parse(req.url, true);

    //     handle(req, res, parsedUrl);
    // }).listen(PORT, err => {
    //     if (err) throw err;
    //     //eslint-disable-next-line
    //     console.log(`> Ready on http://localhost:${PORT}`);
    // });
});