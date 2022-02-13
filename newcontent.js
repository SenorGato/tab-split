//This is the content script

//async function getCurrent() {
//    const ctab = await browser.tabs.getCurrent().catch(e => {
//        console.log(e);
//    })
//    return ctab;
//}




// content-script.js

function handleResponse(message) {
  console.log(`Message from the background script:  ${message.response}`);
}

function handleError(error) {
  console.log(`Error: ${error}`);
}

function notifyBackgroundPage(e) {
  var sending = browser.runtime.sendMessage({
    greeting: "Greeting from the content script"
  });
  sending.then(handleResponse, handleError);
}

