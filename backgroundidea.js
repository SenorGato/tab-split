//This is the background script

console.log("Hack the planet!");

//document.onload = main();
window.addEventListener ("load", main, false);

async function getTabs() {
    const res = await browser.tabs.query({}).catch(e => {
        console.log(e);
    })
    return res;
}

function handleMessage(request, sender, sendResponse) {
    console.log("message from the content script: " + request.greeting);
    sendresponse({response: "response from background script"});
}

browser.runtime.onMessage.addListener(handleMessage);
async function main() {

    const tabs = await getTabs();
    console.log(tabs);
    //const currentTab = await getCurrent();
    //console.log(currentTab);
}


