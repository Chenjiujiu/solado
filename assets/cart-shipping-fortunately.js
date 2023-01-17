/**
 * 处理阶梯折扣的进度条
 *
 * @param    {Boolean}  container  寻找circles的范围
 * @returns  void
 *
 */
function initCartProgress(container) {
    $("body").addClass("loading");
    let circles = document.querySelectorAll(`${container} .progress-ring__circle`);
    Array.from(circles).map((item, index) => {
        let percent = item.getAttribute('data-percent') * 1
        let radius = item.r.baseVal.value;
        let circumference = radius * 2 * Math.PI;
        item.style.strokeDasharray = `${circumference} ${circumference}`;
        item.style.strokeDashoffset = `${circumference}`;
        if (percent) {
            let offset = circumference - percent / 100 * circumference;
            item.style.strokeDashoffset = offset;
        } else {
            item.style.strokeDashoffset = `${circumference}`;
        }

    })
    $('body').removeClass('loading hideOverly');
}