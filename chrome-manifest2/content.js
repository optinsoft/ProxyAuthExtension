
console.log("auth. proxy: content script has been loaded");
window.addEventListener("message", (event) => {
    if (event.source !== window) return;  
    if (event.data && event.data.type === "auth_credentials") {    
        console.log("auth. proxy: received credentials from web page: ", event.data);        
        chrome.runtime.sendMessage(event.data, (response) => {
            console.log("auth. proxy: received response from background script:", response);
        });
    }
});
