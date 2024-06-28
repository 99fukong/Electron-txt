const { app, BrowserWindow } = require('electron');

const remote = require("@electron/remote/main")
remote.initialize()

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      contextIsolation: false,
      nodeIntegration: true,
      // enableRemoteModule: true,//增加该配置，默认是false，新版本不能使用remote
    }
  });
  // win.webContents.openDevTools()

  win.loadFile('index.html');
  remote.enable(win.webContents)
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});