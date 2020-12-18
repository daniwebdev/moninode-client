const  { app,BrowserWindow } = require('electron')


function mainWindow() {
    let win = new BrowserWindow(
        {
            fullscreen: false,
            width: 400,
            height: 300,
            webPreferences: {
                nodeIntegration: false,
                preload: './preload.js'
            }
        }
    );

    win.loadURL('./app/index.html');
}

app.on('ready', function() {
    mainWindow();
});