# Open-In-Brave
Ms Edge add-on that will allow the user to open links in Brave Browser.

## Planned Features for "Open in Brave" Extension

Feature	How it will be implemented  
✅ Send current page to Brave via action button	Already implemented via browserAction.onClicked  
✅ Send link from right-click context menu	Use chrome.contextMenus to add a right-click menu item  
✅ Send links matching keywords, URLs, or hostnames	Use a configurable filter + tab change listener  
✅ Optionally close the Edge tab after sending	Add a user setting to close tab after native message is sent  
✅ Optionally open link in both Edge and Brave	Conditional logic — don't close tab if setting is off  
✅ Redirect top-level navigation	Use chrome.webRequest to intercept and redirect to Brave  
✅ Native client auto-prompt on first use	Detect failure and prompt user to install it via a message box or tab  
✅ Managed storage support	Use chrome.storage.managed with fallback to chrome.storage.local  
✅ Send on meta-click or left-click	Use chrome.webNavigation and content scripts to detect modifier keys  

## File Layout

open-in-brave-extension/  
├── manifest.json  
├── background.js  
├── content.js              ← for meta-key detection  
├── options.html            ← UI to configure behaviors  
├── options.js              ← JS for config storage  
├── icon.png  

