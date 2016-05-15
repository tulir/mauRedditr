require("sdk/page-mod").PageMod({
  contentScriptWhen: 'start',
  include: ['file:///r/*'],
  onAttach: function(worker) {
    worker.tab.url = "https://reddit.com" + worker.tab.url.substring("file://".length);
  }
});
