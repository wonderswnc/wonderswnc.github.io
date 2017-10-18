(function() {
  var _loading = {
    _element: null,
    _loadingMark: false,
    init: function() {
      var template = '<div style="position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(255,255,255,.6)">\
                        <div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:60px;text-align:center;font-size:10px;color:#888">\
                          <img src="./loading.gif" alt="loading" style="width: 60%;">\
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
      _loading._loadingMark = true;
    },
    hide: function() {
      if (_loading._loadingMark) {
        document.body.removeChild(_loading._element);
        _loading._loadingMark = false;
      }
    }
  }
  window.dmLoading = {
    show: _loading.show,
    hide: _loading.hide
  }
})();