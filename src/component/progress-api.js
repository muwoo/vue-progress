/**
 * @author monkeywang
 * Date: 17/10/31
 */
function ProgressApi(timer) {
    return {
        start () {
            timer = setInterval(() => {
                if (this.totalProgress < 90) {
                    this.totalProgress += (this.percentNum || Math.random()) * this.speed;
                }
            }, 100);
        },
        done () {
            this.totalProgress = 100;
            setTimeout(() => {
                clearInterval(timer);
                try {
                    document.body.removeChild(this.$el);
                } catch (e) {
                    this.$el = null;
                }
            }, 300);
        },
        set (percent) {
            this.totalProgress = percent * 100;
        }
    }
}
export default ProgressApi;