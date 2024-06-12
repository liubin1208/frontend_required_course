export default {
  install(Vue, options) {
    String.prototype.abc = 'asdfasdf';
  },
  // install(app) {
  //   app.config.globalProperties.$myMethod = function () {
  //     console.log('myMethod');
  //   };
  // },
};
