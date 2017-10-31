/**
 * @author monkeywang
 * Date: 17/10/31
 */
export const PEG_STY = `display: block;
                        position: absolute;
                        right: 0;
                        width: 100px;
                        height: 100%;
                        box-shadow: 0 0 10px #ffdc00, 0 0 5px #ffdc00;
                        opacity: 1.0;
                        transform: rotate(3deg) translate(0px,-4px);`;
export const BAR_STY = `position: fixed;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 2px;
                        z-index: 9999;
                        transition: all 200ms ease;
                        transform: translate3d(-100%, 0, 0);`;
export const SPINNER_STY = `display: block;
                            position: fixed;
                            z-index: 1031;
                            top: 15px;
                            right: 15px;`;

export const SPINNER_ICON = `width: 18px;
                             height: 18px;
                             box-sizing: border-box;
                             border: solid 2px transparent;
                             border-radius: 50%;`;