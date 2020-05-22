import "@babel/polyfill";
import "@/style/sass/main.scss";
import { accordion } from "@/components/accordion/accordion";
import "@/components/HTMLComponents/SearchBoxComponent/SearchBoxComponent";

document.addEventListener("DOMContentLoaded", () => {
  console.log("Loading global module!");
  accordion.init();
});
