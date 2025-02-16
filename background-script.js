function notify(message) {
    console.log("background script received message");
    let title = browser.i18n.getMessage("notificationTitle");
    let content = browser.i18n.getMessage("notificationContent", message.url);
    browser.notifications.create({
      "type": "basic",
      "iconUrl": browser.extension.getURL("icons/link-48.png"),
      "title": title,
      "message": content
    });
  }
  
  /*
  Assign `notify()` as a listener to messages from the content script.
  */
  browser.runtime.onMessage.addListener(notify);