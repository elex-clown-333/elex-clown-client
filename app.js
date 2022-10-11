const {
    app,
    BrowserWindow,
    crashReporter,
    inAppPurchase,
    Menu,
    screen,
    Notification
} = require('electron')

app.on('ready',async function(){
    try {
        let mainWindow = new BrowserWindow({
            width:700,
            height:800,
            minWidth:567,
            minHeight:572
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
