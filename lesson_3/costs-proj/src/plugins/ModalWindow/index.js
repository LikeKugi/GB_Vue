export default {
  install(app) {
    if (this.installed) {
      return;
    }
    this.installed = true;
    app.config.globalProperties.$modal = {
      show() {
        console.log("show");
      },
      hide() {
        console.log("hide");
      },
    };
  },
};
