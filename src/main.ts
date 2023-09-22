import { createApp } from "vue";
import App from "./App.vue";
import STable, { setLicenseKey } from "@surely-vue/table";
import "@surely-vue/table/dist/index.less";
setLicenseKey(
  `eadb17a903dec60f4b60f88a042dcd4fT1JERVI6MTAwMDIwLEVYUElSWT0xNjg4NDI4ODAwMDAwLERPTUFJTj1zdXJlbHkuY29vbCxVTFRJTUFURT0xLEtFWVZFUlNJT049MQ==`
);
console.log(STable.version);
const app = createApp(App);
app.use(STable);
app.mount("#app");
