/**
 * @author monkeywang
 * Date: 17/10/31
 */
import setting from '../common/setting';
import progressApi from './progress-api';

let VueProgress = (Vue) => {
    let LoadingBarConstructor = Vue.component('my-component', {
        template: setting.template,
        data () {
            return {
                speed: setting.speed,
                percentNum: setting.percentNum,
                totalProgress: setting.totalProgress,
                color: setting.defaultColor,
                easing: setting.easing,
                showSpinner: setting.showSpinner
            };
        },
        created () {
            if (this.showSpinner) {
                let styNd = document.createElement('style');
                document.getElementsByTagName('head')[0].appendChild(styNd);
                styNd.innerHTML = `@keyframes nprogress-spinner {
                                      0%   { transform: rotate(0deg); }
                                      100% { transform: rotate(360deg); }
                                   }`;
            }
        }
    });

    let timer = null;
    let instance = null;
    let api = progressApi(timer);

    LoadingBarConstructor.prototype.start = api.start;

    LoadingBarConstructor.prototype.done = api.done;

    LoadingBarConstructor.prototype.set = api.set;

    return (options) => {
        if (instance) {
            clearInterval(timer);
            document.body.removeChild(instance.$el);
        }
        instance = new LoadingBarConstructor({
            data: options || {}
        });
        instance.vm = instance.$mount();
        document.body.appendChild(instance.vm.$el);
        return instance;
    };
};

export default VueProgress;