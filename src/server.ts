import express from 'express';
import path from "path";
import {existsSync} from "fs";

const app = express();

app.get('/static/*', (req, res) => {
    if (existsSync(__dirname.replace("src", "build") + req.path) && req.path != "/static/") {
        res.sendFile(__dirname.replace("src", "build") + req.path)
    } else {
        res.redirect("/")
    }
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname.replace("src", "build") + '/index.html'));
});

const port = process.env.PORT || 5555;

app.listen(port);