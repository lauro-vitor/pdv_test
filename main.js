const { app, BrowserWindow } = require('electron');
const {ipcMain} = require('./src/data/services/');
ipcMain;
function createWindow(){
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
        }
    });
    win.loadFile('index.html');
    win.webContents.openDevTools()
}

app.whenReady().then(createWindow);