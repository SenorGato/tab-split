function handleError(error) {
  console.log(`Error: ${error}`);
}

function handleResponse(error){
    console.log(`Message from the background script: ${message.response}`);
}

function notifyBackgroundPage() {
  var sending = browser.runtime.sendMessage({
    greeting: "Greeting from the content script"
  });
    sending.then(handleResponse, handleError);
}

//async function getCurrent(){
//    console.log("Head of getCurrent");
//    const res = browser.runtime.sendMessage({tabs: "currentTab"});  
//    res.then(result => {return result;})
//    }

console.log("Content script is alive!")

notifyBackgroundPage(e);

//const itWorked = getCurrent();
//itWorked.then(() => {
//    console.log(itWorked);
//})
