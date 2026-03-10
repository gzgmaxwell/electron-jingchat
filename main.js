const { app, BrowserWindow } = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    width: 430,
    height: 932,
    webPreferences: {
      nodeIntegration: false, // Security best practice for loading remote content
      contextIsolation: true  // Security best practice
    }
  });

  win.webContents.setUserAgent('Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1');
  win.loadURL('https://web.jingchat.cn/#/Login');
  win.webContents.on('dom-ready', () => {
    win.webContents.insertCSS('* { cursor: auto !important; }');
  });

  // Remove the default menu bar
  win.setMenu(null); 
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
