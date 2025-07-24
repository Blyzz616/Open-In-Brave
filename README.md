# Open-In-Brave
Ms Edge add-on that will allow the user to open links in Brave Browser.

## Planned Features for "Open in Brave" Extension

| Feature | Description |
| ------- | ----------- |
| Open current tab in Brave | Click the action button to open the current page in Brave. |
| Right-click to send links | Adds a context menu entry to send individual links to Brave. |
| Filter URLs, hostnames, or keywords | Only send links that match predefined patterns. |
| Optional auto-close of Edge tab | User setting to close tab after sending it to Brave. |
| Open in both Edge and Brave | Optionally keep the Edge tab open. |
| Redirect top-level navigation | Optionally intercept navigation and redirect it to Brave automatically. |
| Native client integration | Uses a lightweight Python script to launch Brave from Edge. |
| First-use prompt for native client | Prompts the user to install native messaging host if not detected. |
| Managed storage support | Admins can configure settings via group policy. |
| Meta-click and modifier detection | Detects control/meta/alt key presses on links to trigger Brave redirection. |

## File Layout

open-in-brave-extension/  
├── manifest.json          ← Extension manifest  
├── background.js          ← Handles extension events & messaging  
├── content.js             ← Injected into tabs for meta-click detection  
├── options.html           ← Settings UI for the extension  
├── options.js             ← Saves & retrieves user options  
├── open-in-brave.json     ← Native messaging host registration file  
├── open-in-brave.py       ← Native Python script to launch Brave with a URL  
└── icon.png               ← Extension icon  

## Installation Instructions

### 1. Install the Extension in Edge (Developer Mode)  

Open edge://extensions/ in Microsoft Edge.  

Enable Developer mode.

Click Load unpacked and select the `open-in-brave-extension` folder.

### 2. Install the Native Messaging Host

This extension requires a small native client to launch Brave:

Ensure Python 3.x is installed and added to PATH.

Run this command to register the native messaging host:
```
python open-in-brave.py --register
```
(Optionally, you can automate this via a .bat or .ps1 installer for ease of use.)

## Admin / Managed Configuration

Supports managed storage via Chrome's group policy mechanism. Admins can predefine allowed URLs, enable/disable features, or lock options.

## Requirements

- Microsoft Edge (Chromium-based)
- Brave browser
- Python 3.x (for native client)

## TODOs / Future Features

- [ ] Auto-detect Brave install path
- [ ] Add keyboard shortcuts support
- [ ] Support macOS/Linux native hosts
- [ ] Export/import user config
