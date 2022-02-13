function handleError(error) {
  console.log(`Error: ${error}`);
}

function notifyBackgroundPage(e) {
  var sending = browser.runtime.sendMessage({
    greeting: "Greeting from the content script"
  });
}

function getCurrent(e){
    const currentTab = browser.tabs.getCurrent();
    browser.runtime.sendMessage({
        tabs: currentTab
    });
}

getCurrent(e);
