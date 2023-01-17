const {
    app,
    BrowserWindow,
    dialog,
    clipboard,
    crashReporter,
    nativeImage,
    inAppPurchase,
    Menu,
    Tray,
    screen,
    Notification,
    contextBridge
} = require('electron')
let {exec} = require('child_process')
exec('node elex-hrin/dist/main.js')
app.on('ready', async function () {
    try {
            let mainWindow = new BrowserWindow({
                width: 1100,
                height: 750,
                minWidth: 760,
                minHeight: 572,
                // icon: 'med-logo.ico'
            })
            app.setName('Elex')
            // let appIcon = nativeImage.createFromPath(__dirname + '/' + 'med_logo.png')
            // mainWindow.setIcon(appIcon)
            // Menu.setApplicationMenu(Menu.buildFromTemplate([
            //     {
            //         label: 'View',
            //         submenu: [
            //             {
            //                 label: 'Reload',
            //                 accelerator: 'Cmd + R or Ctrl + R',
            //                 click(_, window) {
            //                     try {
            //                         window.reload()
            //                     } catch (e) {
            //
            //                     }
            //                 }
            //             },
            //             {
            //                 label: 'Copy',
            //                 accelerator: 'CmdOrCtrl + C',
            //                 selector: 'copy'
            //             },
            //             {
            //                 label: 'Select all',
            //                 accelerator: 'CmdOrCtrl + A',
            //                 selector: 'selectAll'
            //             }
            //         ]
            //     }
            // ]))
            // mainWindow.setOverlayIcon('./src/assets/med_logo.jpeg')
        mainWindow.loadFile('animation/index.html')
            setTimeout(() => {
                mainWindow.loadFile('./public/index.html')
            }, 5000)

            // crashReporter.start({
            //     submitURL: 'https://www.youtube.com'
            // })
            // new Notification({
            //     title:'Title',
            //     subtitle:'Subtitle',
            //     body:'Body',
            //
            // }).show()
        } catch (e) {
            console.log(e.message)
        }
        // mainWindow.webContents.on('blur',()=>{
        //     console.log('blurred')
        // })
    })
