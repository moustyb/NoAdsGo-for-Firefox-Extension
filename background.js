// Block common ad domains
const blockedDomains = [
  "*://*.doubleclick.net/*",
  "*://*.googleadservices.com/*",
  "*://*.googlesyndication.com/*",
  "*://*.google-analytics.com/*",
  "*://*.facebook.com/tr/*",
  "*://*.facebook.net/*/fbevents.js"
];

browser.webRequest.onBeforeRequest.addListener(
  function(details) {
    console.log("Blocked:", details.url);
    return { cancel: true };
  },
  { urls: blockedDomains },
  ["blocking"]
);

console.log("Cube Firefox AdBlock loaded");
