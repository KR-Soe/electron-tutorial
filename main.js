const { app, BrowserWindow } = require('electron');

const createWindow = (width, height) => {
  const win = new BrowserWindow({
    width,
    height
  });

  win.loadFile('src/views/index.html');
};

app.whenReady().then(() => {
  createWindow(800, 600);

  app.on('activate', () => {
    if(BrowserWindow.getAllWindows().length === 0) {
      createWindow(800, 600);
    }
  });
});

app.on('window-all-closed', () => {
  if(process.platform !== 'darwin') {
    app.quit();
  }
});