(function (handleload) {
            var xhr = new XMLHttpRequest;
          
            xhr.addEventListener('load', handleload, false);
            xhr.open('GET', 'json/infomation.json', true);
            xhr.send(null);
          }(function handleLoad (event) {
            var xhr = event.target,
                obj = JSON.parse(xhr.responseText);
                console.log(obj.shop);
                initVue(obj);
          }));
          function initVue(info){
    new Vue({
        el: '#pc',
        data: {
            infos: info["rabbit"]
        }
    });
}