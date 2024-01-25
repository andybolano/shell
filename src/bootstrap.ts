import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import "./remotes-config/shared-library/style"
import { globalComponents } from "./globalComponents"
import filters from "./remotes-config/shared-library/filters"
import useI18n from "./remotes-config/trip-management/i18n"

const app = createApp(App)
app.use(router)
app.use(globalComponents)
app.use(useI18n)
app.mount("#app")

app.config.globalProperties.$filters = filters
