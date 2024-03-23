import * as mod from "./my-module.js";

import("./my-module.js").then((mod) => {
  console.log(mod);
});
