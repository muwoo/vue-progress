/**
 * vue-meta-info v1.0.0
 * (c) 2017 monkeyWang
 * @license MIT
 */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.VueProgress = factory());
}(this, (function () { 'use strict';

/**
 * @author monkeywang
 * Date: 17/10/31
 */
var PEG_STY = "display: block;\n                        position: absolute;\n                        right: 0;\n                        width: 100px;\n                        height: 100%;\n                        box-shadow: 0 0 10px #ffdc00, 0 0 5px #ffdc00;\n                        opacity: 1.0;\n                        transform: rotate(3deg) translate(0px,-4px);";
var BAR_STY = "position: fixed;\n                        top: 0;\n                        left: 0;\n                        width: 100%;\n                        height: 2px;\n                        z-index: 9999;\n                        transition: all 200ms ease;\n                        transform: translate3d(-100%, 0, 0);";
var SPINNER_STY = "display: block;\n                            position: fixed;\n                            z-index: 1031;\n                            top: 15px;\n                            right: 15px;";

var SPINNER_ICON = "width: 18px;\n                             height: 18px;\n                             box-sizing: border-box;\n                             border: solid 2px transparent;\n                             border-radius: 50%;";

/**
 * @author monkeywang
 * Date: 17/10/31
 */
var setting = {
    speed: 5,
    easing: 'linear',
    defaultColor: 'blue',
    percentNum: 0,
    totalProgress: 0,
    showSpinner: true,
    template: ("<div class=\"vue-progress\">\n        <div \n            class=\"bar\" \n            role=\"bar\" \n            style=\"" + BAR_STY + "\" \n            :style=\"{transform: 'translate3d(-'+(100-totalProgress)+'%, 0, 0)', background: color}\">\n            <div \n                class=\"peg\" \n                style=\"" + PEG_STY + "\" \n                :style=\"'box-shadow: 0 0 10px '+color+', 0 0 5px '+color\">    \n            </div>\n        </div>\n        <div class=\"spinner\" role=\"spinner\" style=\"" + SPINNER_STY + "\" v-if=\"showSpinner\">\n            <div class=\"spinner-icon\" style=\"" + SPINNER_ICON + "\" :style=\"{\n            'border-top-color': color, \n            'border-left-color': color,\n            'animation': 'nprogress-spinner 400ms '+easing+' infinite'\n            }\">\n            </div>\n        </div>\n    </div>")
};

/**
 * @author monkeywang
 * Date: 17/10/31
 */
function ProgressApi$1(timer) {
    return {
        start: function start () {
            var this$1 = this;

            timer = setInterval(function () {
                if (this$1.totalProgress < 90) {
                    this$1.totalProgress += (this$1.percentNum || Math.random()) * this$1.speed;
                }
            }, 100);
        },
        done: function done () {
            var this$1 = this;

            this.totalProgress = 100;
            setTimeout(function () {
                clearInterval(timer);
                try {
                    document.body.removeChild(this$1.$el);
                } catch (e) {
                    this$1.$el = null;
                }
            }, 300);
        },
        set: function set (percent) {
            this.totalProgress = percent * 100;
        }
    }
}

/**
 * @author monkeywang
 * Date: 17/10/31
 */
var VueProgress$1 = function (Vue) {
    var LoadingBarConstructor = Vue.component('my-component', {
        template: setting.template,
        data: function data () {
            return {
                speed: setting.speed,
                percentNum: setting.percentNum,
                totalProgress: setting.totalProgress,
                color: setting.defaultColor,
                easing: setting.easing,
                showSpinner: setting.showSpinner
            };
        },
        created: function created () {
            if (this.showSpinner) {
                var styNd = document.createElement('style');
                document.getElementsByTagName('head')[0].appendChild(styNd);
                styNd.innerHTML = "@keyframes nprogress-spinner {\n                                      0%   { transform: rotate(0deg); }\n                                      100% { transform: rotate(360deg); }\n                                   }";
            }
        }
    });

    var timer = null;
    var instance = null;
    var api = ProgressApi$1(timer);

    LoadingBarConstructor.prototype.start = api.start;

    LoadingBarConstructor.prototype.done = api.done;

    LoadingBarConstructor.prototype.set = api.set;

    return function (options) {
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

/**
 * @author monkeywang
 * Date: 17/10/30
 */

VueProgress$1.install = function (Vue) {
    Vue.prototype.$vueProgress = VueProgress$1(Vue);
};

return VueProgress$1;

})));
