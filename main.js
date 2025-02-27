const { app, BrowserWindow } = require('electron');
const path = require('path');

let mainWindow;

app.whenReady().then(() => {
  mainWindow = new BrowserWindow({
    width: 400,
    height: 200,
    show: true,
    center: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'), // Optional — only if you’re using preload
    },
  });

  mainWindow.loadFile('index.html'); 
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
