//*************** dynamic import **************

// my-module.js
export function then(resolve) {
  console.log("then() called");
  resolve(1);
}

// Use cases 1
function loadPolyfillIfNeeded() {
  // Check if the browser supports a particular feature that the polyfill is for
  if (!supportsES6Features()) {
    // If the browser doesn't support ES6 features, load the polyfill
    import("./path/to/polyfill.js")
      .then((polyfill) => {
        console.log("Polyfill loaded successfully");
        // Optionally, initialize the polyfill or perform any necessary setup
        polyfill.init();
      })
      .catch((error) => {
        console.error("Error loading polyfill:", error);
      });
  }
}

function supportsES6Features() {
  // Check if the browser supports ES6 features by testing for specific features
  // For demonstration purposes, we're checking for the presence of the `Promise` object
  return window.Promise !== undefined;
}

// Load the polyfill if needed when the script is executed
loadPolyfillIfNeeded();

// Usecase 2
function determineModuleName() {
  // Example: Determine module name based on user's language preference
  const userLanguage = getUserLanguage(); // Assume this function retrieves user's preferred language
  let moduleName;

  switch (userLanguage) {
    case "en":
      moduleName = "./locales/en.js";
      break;
    case "fr":
      moduleName = "./locales/fr.js";
      break;
    default:
      moduleName = "./locales/default.js";
  }

  return moduleName;
}

function getUserLanguage() {
  // Example: Retrieve user's preferred language from browser settings or user profile
  // For demonstration purposes, return a hardcoded language
  return "en"; // English language is used as default
}
