function createScript(filePath) {
  let newScript = document.createElement("script");
  newScript.setAttribute("src", filePath);
  document.body.appendChild(newScript);
  return newScript;
}

let jQueryScript = createScript("/js/core.min.js");

jQueryScript.addEventListener("load", onJQueryLoaded, false);

function onJQueryLoaded() {
  createScript("/js/popper.min.js");
  createScript("/js/bootstrap.min.js");
  let pluginsScript = createScript("/js/plugins.min.js");
  createScript("/js/typed.js");

  pluginsScript.addEventListener("load", onPluginLoaded, false);
}

function removePreloader() {
  let preloader = document.getElementById("preloader");
  preloader.style.display = 'none';
  let gatsby = document.getElementById("___gatsby");
  gatsby.style.display = 'block';
}

function onPluginLoaded() {
  createScript("/js/scripts.js");
  removePreloader();
}