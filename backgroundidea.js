//This is the background script

console.log("Hack the planet!");

window.addEventListener ("load", main, false);

async function getTabs() {
    const res = await browser.tabs.query({}).catch(e => {
        console.log(e);
    })
    return res;
}

function handleMessage(request, sender) {
  console.log(`content script sent a message: ${request.greeting}`);
}

async function main() {

    browser.runtime.onMessage.addListener(handleMessage);
    const tabs = await getTabs();
    console.log(tabs);


}


