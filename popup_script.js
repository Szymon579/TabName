
function listenForClicks() {
  document.addEventListener("click", (e) => {

    function changeTitle(tabs) {
      console.log("changeTitle function")

      var new_title = document.getElementById('title_input').value;
      //sessionStorage.setItem("new_tab_title", JSON.stringify(new_title));

      browser.tabs.sendMessage(tabs[0].id, {
        command: "setTitle",
        value: new_title
      });
    }

    if (e.target.type === "button") {
      browser.tabs.query({ active: true, currentWindow: true })
        .then(changeTitle)
    }

  }

  );
}

browser.tabs.executeScript({ file: "rename_script.js" }).then(listenForClicks)

