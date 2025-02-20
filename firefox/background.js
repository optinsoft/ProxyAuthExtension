
console.log("auth. proxy: background script has been loaded");
var authCredentials = null;
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === "auth_credentials") {
        authCredentials = message.authCredentials;
        console.log("auth. proxy: credentials received from web page:", message);
        sendResponse({ status: "Success", data: "auth. credentials received!" });
    }
});
chrome.webRequest.onAuthRequired.addListener(
    function(details) {
        return new Promise((resolve, reject) => {
            console.log("auth. proxy: onAuthRequired!", details);
            resolve({
                authCredentials: authCredentials
            });
        });
    },
    { urls: ["<all_urls>"] },
    ['blocking']
);
