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

let db = new sqlite3.Database('./gimno.db',(err) => {
    if(err){
        return console.error(err.message);
    }
    console.log('Connected to the in-memory SQlite database.');
});
// db.run('DELETE FROM patients')
db.run('CREATE TABLE IF NOT EXISTS patients(id INTEGER PRIMARY KEY, firstName text, middleName text, lastName text, dateOfBirth text, creationDate text,residence text, protocol text)', [], (err) => {
    if(err){
        return console.error(err.message);
    }
    console.log('Created table');
});

eApp.use(bodyParser.json())

eApp.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send({error: 'Something broke!!!!'});
});

eApp.get('/', async (req, res) => {
    let patients = await new Promise((resolve, reject)=>{
        db.serialize(()=>{
            db.all("SELECT * FROM patients",(err, rows)=>{
                resolve(rows)
            });
        })
    });

    console.log(patients)

    res.send({patients:patients,size:patients.length})
})

eApp.get('/:id', async (req, res) => {
    let id = req.params.id;
    let patient = await new Promise((resolve, reject)=>{
        db.get("SELECT * FROM patients WHERE id = ?", [id], function(err, row) {
            resolve(row)
        });
    });
    console.log(patient.residence)
    res.send({patient})
})

eApp.post('/', async (req, res) => {
    const {firstName, middleName, lastName, dateOfBirth,residence} = req.body

    let sql = 'INSERT INTO patients(firstName, middleName, lastName, dateOfBirth, creationDate,residence, protocol) VALUES (?, ?, ?, ?, ?, ?, ?)';

    let id = await new Promise((resolve, reject) => {
        db.run(sql, [
            firstName, middleName, lastName, dateOfBirth,
            new Date().toLocaleDateString("uk-UA", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }),
            residence, ''
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

eApp.put('/:id', (req, res) => {
    let id = req.params.id;
    const {firstName, middleName, lastName, dateOfBirth, residence, protocol} = req.body
    db.run(
        'UPDATE patients SET firstName = ?,middleName = ?,lastName = ?,dateOfBirth = ?, residence = ?, protocol = ? WHERE id = ?',
        [
            firstName, middleName, lastName, dateOfBirth, residence, protocol, id
        ]
    )
    return res.json({...req.body,id})
})

eApp.listen(port,()=>{
    console.log(`Example app listening on port ${port}`)
})
// eApp.listen(port,()=>[])

app.on('ready',async function(){
    try {
        let mainWindow = new BrowserWindow({
            width:1100,
            height:750,
            minWidth:760,
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
