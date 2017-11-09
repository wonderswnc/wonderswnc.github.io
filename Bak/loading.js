(function() {
  var _loading = {
    _element: null,
    _loadingContent: null,
    _loadingMark: false,
    init: function() {
      var template = '<div style="position:fixed;top:0;left:0;right:0;bottom:0;background-color:rgba(0,0,0,.6)" id="loading-content">\
                        <div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:60px;text-align:center;font-size:10px;color:#888">\
                          <img src="./loading.gif" alt="loading" style="width: 60%;height: 60%;">\
                          <p>努力加载中</p>\
                        </div>\
                      </div>\
                      ';
      
      var loadingElement = document.createElement('div');
      loadingElement.innerHTML = template;
      _loading._element =loadingElement;
    },
    show: function() {
      if (_loading._element === null){
        _loading.init();
      }
      document.body.appendChild(_loading._element);
      // _loading.animation();
      _loading._loadingMark = true;
    },
    hide: function() {
      if (_loading._loadingMark) {
        document.body.removeChild(_loading._element);
        // _loading.animation();
        _loading._loadingMark = false;
      }
    },
    animation: function() {
      var content = document.getElementById('loading-content');
      var opacity = +content.style.backgroundColor.match(/(\d|\.)+/g)[3];
      function runStart() {
        opacity += 0.1;
        content.style.backgroundColor = `rgba(255,255,255,${opacity})`;
        if (opacity < 0.6) requestAnimationFrame(runStart);
      }
      function runEnd() {
        opacity -= 0.1;
        content.style.backgroundColor = `rgba(255,255,255,${opacity})`;
        opacity > 0  ? requestAnimationFrame(runEnd) : document.body.removeChild(_loading._element);
      }
      opacity === 0 ? runStart() : runEnd();
    }
  }
  window.dmLoading = {
    show: _loading.show,
    hide: _loading.hide
  }
})();