(function () {

  function setTitle(title, tabs) {
    console.log("setTitle")
    document.title = title

  }

  browser.runtime.onMessage.addListener((message) => {
    if (message.command === "setTitle") {
      setTitle(message.value);

    }
  });

})();
