import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import "sharedLibrary/mainStyle"
import useI18n from "tripManagement/i18nModule"
import globalComponents from "./globalComponents"
import filters from "sharedLibrary/filters"

const app = createApp(App)
app.use(router)
app.use(globalComponents)
app.use(useI18n)
app.mount("#app")

app.config.globalProperties.$filters = filters
