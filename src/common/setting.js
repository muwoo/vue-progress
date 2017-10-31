/**
 * @author monkeywang
 * Date: 17/10/31
 */
import {BAR_STY, PEG_STY, SPINNER_STY, SPINNER_ICON} from './css';

export default {
    speed: 5,
    easing: 'linear',
    defaultColor: 'blue',
    percentNum: 0,
    totalProgress: 0,
    showSpinner: true,
    template: `<div class="vue-progress">
        <div 
            class="bar" 
            role="bar" 
            style="${BAR_STY}" 
            :style="{transform: 'translate3d(-'+(100-totalProgress)+'%, 0, 0)', background: color}">
            <div 
                class="peg" 
                style="${PEG_STY}" 
                :style="'box-shadow: 0 0 10px '+color+', 0 0 5px '+color">    
            </div>
        </div>
        <div class="spinner" role="spinner" style="${SPINNER_STY}" v-if="showSpinner">
            <div class="spinner-icon" style="${SPINNER_ICON}" :style="{
            'border-top-color': color, 
            'border-left-color': color,
            'animation': 'nprogress-spinner 400ms '+easing+' infinite'
            }">
            </div>
        </div>
    </div>`
};