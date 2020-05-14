import "@babel/polyfill";
import { accordion } from "@/components/accordion/accordion";

import "@/style/sass/main.scss";

document.addEventListener("DOMContentLoaded", () => {
  console.log("Global loaded!", accordion);
});
