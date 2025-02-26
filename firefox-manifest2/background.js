
console.log("auth. proxy: background script has been loaded");
var authCredentials = null;
browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === "auth_credentials") {
        authCredentials = message.authCredentials;
        console.log("auth. proxy: credentials received from web page:", message);
        sendResponse({ status: "Success", data: "auth. credentials received!" });
    }
});
browser.webRequest.onAuthRequired.addListener(
    function (details) {
        console.log("auth. proxy: onAuthRequired!", details);
        return {
            authCredentials: authCredentials
        };
    },
    {urls: ["<all_urls>"]},
    ['blocking']
);
