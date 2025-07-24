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


