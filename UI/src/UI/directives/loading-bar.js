function showLoading(el, {value, oldValue}) {
    if (value !== oldValue) {
        if (value) {
            let computedStyle = window.getComputedStyle(el);
            el._dispaly = computedStyle.display || "block";
            el.style.display = "none";
            let htmlElement = document.createElement("div");
            htmlElement.className = "ivu-loading-bar";
            htmlElement.innerHTML = "<i class='ivu-loading-bar-spin ivu-icon ivu-icon-ios-loading' ></i>";
            let parentNode = el.parentNode;
            parentNode.appendChild(htmlElement);
            el._loadingNode = htmlElement;
        } else {
            el.style.display = el._dispaly;
            let parentNode = el.parentNode;
            if (el._loadingNode) {
                parentNode.removeChild(el._loadingNode);
            }
        }
    }
}

const directive = {
    inserted(el, binding) {
        showLoading(el, binding)
    },
    componentUpdated(el, binding) {
        showLoading(el, binding)
    },
    unbind(el, binding, vnode, oldVnode) {
    }
};

export default (Vue) => {
    Vue.directive("loading", directive)
}