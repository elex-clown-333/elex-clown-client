const {
    app,
    BrowserWindow,
    crashReporter,
    inAppPurchase,
    Menu,
    screen,
    Notification,
    contextBridge
} = require('electron')
const {logPlugin} = require("@babel/preset-env/lib/debug");
const {resolve} = require("path");
const bodyParser = require('body-parser')

const express = require('express')
const sqlite3 = require('sqlite3').verbose()
const eApp = express()
const port = 3000

let db = new sqlite3.Database('./gimno.db', (err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Connected to the in-memory SQlite database.');
});

db.run('CREATE TABLE IF NOT EXISTS patients(id INTEGER PRIMARY KEY, firstName text, middleName text, lastName text, dateOfBirth text, creationDate text)', [], (err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Created table');
});

eApp.use(bodyParser.json())

eApp.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send({error: 'Something broke!'});
});

eApp.get('/', async (req, res) => {
    let patients = await new Promise((resolve, reject) => {
        db.serialize(() => {
            db.all("SELECT * FROM patients", (err, rows) => {
                resolve(rows)
            });
        })
    });

    console.log(patients)

    res.send({patients: patients, size: patients.length})
})

eApp.get('/:id', async (req, res) => {
    let id = req.params.id;
    let patient = await new Promise((resolve, reject) => {
        db.get("SELECT * FROM patients WHERE id = ?", [id], function(err, row) {
            resolve(row)
        });
    });

    res.send({patient})
})

eApp.post('/', async (req, res) => {
    const {firstName, middleName, lastName, dateOfBirth} = req.body

    let sql = 'INSERT INTO patients(firstName, middleName, lastName, dateOfBirth, creationDate) VALUES (?, ?, ?, ?, ?)';


    let id = await new Promise((resolve, reject) => {
        db.run(sql, [
            firstName, middleName, lastName, dateOfBirth,
            new Date().toLocaleDateString("uk-UA", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
        ], function(err) {
            if (err) {
                return console.error(err.message);
            }
            resolve(this.lastID)
            console.log(`Rows inserted ${this.changes}`);
        });
    });

    res.send({patient: {id, ...req.body}})
})

eApp.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

app.on('ready',async function(){
    try {
        let mainWindow = new BrowserWindow({
            width:700,
            height:800,
            minWidth:567,
            minHeight:572,
        })
        await mainWindow.loadFile('./public/index.html')

        // crashReporter.start({
        //     submitURL: 'https://www.youtube.com'
        // })
        // new Notification({
        //     title:'Title',
        //     subtitle:'Subtitle',
        //     body:'Body',
        //
        // }).show()
    } catch (e){
        console.log(e.message)
    }
    // mainWindow.webContents.on('blur',()=>{
    //     console.log('blurred')
    // })
})
