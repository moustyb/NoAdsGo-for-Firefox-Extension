# NoAdsGo for Firefox extensiton

Simple, privacy-focused ad blocker for Firefox.

## Installation

1. Open Firefox
2. Type `about:debugging` in the address bar
3. Click "This Firefox" in the left sidebar
4. Click "Load Temporary Add-on..."
5. Navigate to this folder and select `manifest.json`

## What It Blocks

- Google DoubleClick
- Google AdServices
- Google Analytics
- Facebook tracking pixels
- Common ad syndication networks

## Customization

To block more domains, edit `background.js` and add URLs to the `blockedDomains` array:

```javascript
const blockedDomains = [
  "*://*.your-domain-here.com/*"
];
```

## Permanent Installation

The extension will disappear when Firefox restarts. To make it permanent:

1. Zip all files in this folder
2. Rename the `.zip` to `.xpi`
3. Drag and drop into Firefox
4. Or publish to addons.mozilla.org for public distribution

## Files

- `manifest.json` - Extension configuration
- `background.js` - Blocking logic
- `icon.png` - Extension icon
- `README.md` - This file
