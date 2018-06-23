(function(handleload) {
    var xhr = new XMLHttpRequest();

    xhr.addEventListener("load", handleload, false);
    xhr.open("GET", "json/infomation.json", true);
    xhr.send(null);
})(function handleLoad(event) {
    var xhr = event.target,
    obj = JSON.parse(xhr.responseText);
    initVue(obj);
});

function initVue(info) {
    new Vue({
        el: "#main",
        data: {
            infos: info["rabbit"]
        }
    });
    new Vue({
        el: "#server",
        data: {
            infos: info["server"]
        }
    });
}
