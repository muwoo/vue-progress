/**
 * @author monkeywang
 * Date: 17/10/30
 */

import VueProgress from './component/vue-progress';


VueProgress.install = function (Vue) {
    Vue.prototype.$vueProgress = VueProgress(Vue);
};

export default VueProgress;
