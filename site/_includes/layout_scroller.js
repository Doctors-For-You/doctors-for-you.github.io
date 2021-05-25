;(function() {
  var lastTime = 0;
  var vendors = ['ms', 'moz', 'webkit', 'o'];
  for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
    window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
    window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame']
                               || window[vendors[x]+'CancelRequestAnimationFrame'];
  }

  if (!window.requestAnimationFrame)
    window.requestAnimationFrame = function(callback, element) {
      var currTime = new Date().getTime();
      var timeToCall = Math.max(0, 16 - (currTime - lastTime));
      var id = window.setTimeout(function() { callback(currTime + timeToCall); },
        timeToCall);
      lastTime = currTime + timeToCall;
      return id;
    };

  if (!window.cancelAnimationFrame)
    window.cancelAnimationFrame = function(id) {
      clearTimeout(id);
    };
}());


var feature_raf_request = null;
var lastScrollTop = 0;

function scrollHandler() {

  var scrollTop = $('#scroll_content').scrollTop();
  if ( scrollTop === lastScrollTop ) {
    return;
  }

  var header = $('#layout_header');
  var lower = 4, upper = 150;

  if (scrollTop < lower) {
    header.css({
      "background-color": "rgba(255,255,255,0)",
      "box-shadow": "0 0 0 rgba(18, 20, 29, 0.075)",
    });
  }
  else if (scrollTop >= lower && scrollTop < upper ){
    var opacity = (scrollTop - lower) / (upper - lower);
    var by = (scrollTop - lower) / (upper - lower) * 0.075;
    var bs = (scrollTop - lower) / (upper - lower);
    header.css({
      "background-color": "rgba(255,255,255, " + opacity + ")",
      "box-shadow": "0 "+ by +"rem "+bs+"rem rgba(18, 20, 29, 0.075)",
    });
  }
  else {
    if (lastScrollTop <= upper) {
      header.css({
        "background-color": "rgba(255,255,255, 1)",
        "box-shadow": "0 0.075rem 1rem rgba(18, 20, 29, 0.075)",
      });
    }
    else {
      // console.log('safe zone');
    }
  }

  lastScrollTop = scrollTop;
}

function scrollHandlerWrapper() {
  scrollHandler();
  feature_raf_request = null;
}

$(function() {
  console.log('hello');
  $("#scroll_content").on('scroll', function(ev) {
    if (feature_raf_request) {
      window.cancelAnimationFrame(feature_raf_request);
    }
    feature_raf_request = window.requestAnimationFrame(scrollHandlerWrapper);
  });
  scrollHandlerWrapper();
});
