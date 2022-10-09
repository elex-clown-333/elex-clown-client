const {
    app,
    BrowserWindow
} = require('electron')

app.on('ready',function(){
    let mainWindow = new BrowserWindow({})
    mainWindow.loadFile('./public/index.html')
})
