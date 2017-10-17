(function() {
  var _dmLoading = {
    _loadingElement: null,
    _loadingMark: false,
    init: function() {
      var template = '<div style="position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(255,255,255,.6)">\
                        <img src="./loading.gif" alt="loading" style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width: 60px">\
                      </div>\
                      ';
      
      var loadingElement = document.createElement('div');
      loadingElement.innerHTML = template;
      _dmLoading._loadingElement =loadingElement;
    },
    show: function() {
      if (_dmLoading._loadingElement === null){
        _dmLoading.init();
      }
      document.body.appendChild(_dmLoading._loadingElement);
      _dmLoading._loadingMark = true;
    },
    hide: function() {
      if (_dmLoading._loadingMark) {
        document.body.removeChild(_dmLoading._loadingElement);
        _dmLoading._loadingMark = false;
      }
    }
  }
  window.dmLoading = {
    show: _dmLoading.show,
    hide: _dmLoading.hide
  }
})();