const electron = require("electron");
const url = require("url");
const path = require("path");

const {app, BrowserWindow, Menu} = electron;

const createMainWindow = () => {

  // window
  const mainWindow = new BrowserWindow({
    title: "Electron",
    width: 1300,
    height: 800,
    webPreferences: {
      nodeIntegration: true // veya contextIsolation: false, gerekli ayara göre seçim yapın
    }
  });

  // mainWindow.webContents.openDevTools();

  // URL
  const startURL =  url.format({
    // pathname: path.join(__dirname, 'index.html'),
    pathname: path.join(__dirname, './app/build/index.html'),
    protocol: 'file',
    slashes: true
  })

  mainWindow.loadURL(startURL)
  // mainWindow.loadURL('http://localhost:3000') 

  // Menu
  console.log("--->", process.platform); //win32

  const mainMenu = Menu.buildFromTemplate()
  Menu.setApplicationMenu(mainMenu)

}

app.whenReady().then(createMainWindow);


const mainMenuTemplate = [

]

if(process.platform === "win32"){
  mainMenuTemplate.unshift({
    label: app.getName(),
    role: "TODO"
  })
}

if(process.env.NODE_ENV !== "production"){
   mainMenuTemplate.push(
    {
      label: "Dev Tools",
      submenu : [
        {
          label:"Open Dev Tools",
          click(item, focusedWindow){
            focusedWindow.toggleDevTools()
          }
        }
      ]
    }
   )
}