# Timer App

A minimal desktop timer app built with ElectronJS for Ubuntu, featuring a live digital clock with date display.

## Features
- Displays current time with live second updates
- Shows day and date in smaller, grey text
- Simple and clean black-and-white interface
- Packaged as a desktop app for Ubuntu

## Setup & Installation

1. **Clone the repository:**
```bash
git clone https://github.com/ak-1344/timer-app.git
cd timer-app
```

2. **Install dependencies:**
```bash
npm install
```

3. **Run the app:**
```bash
npm start
```

## Package as Ubuntu App

1. Install Electron Packager (if not already):
```bash
npm install -g electron-packager
```

2. Package the app:
```bash
electron-packager . Timer --platform=linux --arch=x64 --overwrite --icon=icon.png
```

3. (Optional) Add to Ubuntu applications menu:
Create a `.desktop` file in `~/.local/share/applications/`:
```ini
[Desktop Entry]
Version=1.0
Type=Application
Name=Timer
Exec=/path/to/Timer-linux-x64/Timer
Icon=/path/to/icon.png
Terminal=false
StartupWMClass=Timer
```

## File Structure
```
.
├── index.html          # Frontend UI
├── main.js             # Electron main process
├── package.json        # Node.js dependencies
├── icon.png            # Optional app icon
├── Timer-linux-x64/    # Packaged app (after build)
```

## License
This project is for personal use and learning. Feel free to modify and experiment!

---

🚀 Happy Timing!

