import store from "../redux/store"
import AppType from "../types/app.type"

export default class App {

  private app: AppType

  constructor() {
    this.app = store.getState().app
  }

  toggleSidebar() {
    store.dispatch({ type: "app/toggleSidebar" })
  }

  getSidebarVisibility() {
    return this.app.isSidebarVisible
  }
  
}