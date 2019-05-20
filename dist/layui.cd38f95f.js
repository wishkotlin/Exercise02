// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"node_modules/layui-src/dist/layui.js":[function(require,module,exports) {
/** layui-v2.4.5 MIT License By https://www.layui.com */
 ;!function(e){"use strict";var t=document,o={modules:{},status:{},timeout:10,event:{}},n=function(){this.v="2.4.5"},r=function(){var e=t.currentScript?t.currentScript.src:function(){for(var e,o=t.scripts,n=o.length-1,r=n;r>0;r--)if("interactive"===o[r].readyState){e=o[r].src;break}return e||o[n].src}();return e.substring(0,e.lastIndexOf("/")+1)}(),i=function(t){e.console&&console.error&&console.error("Layui hint: "+t)},a="undefined"!=typeof opera&&"[object Opera]"===opera.toString(),u={layer:"modules/layer",laydate:"modules/laydate",laypage:"modules/laypage",laytpl:"modules/laytpl",layim:"modules/layim",layedit:"modules/layedit",form:"modules/form",upload:"modules/upload",tree:"modules/tree",table:"modules/table",element:"modules/element",rate:"modules/rate",colorpicker:"modules/colorpicker",slider:"modules/slider",carousel:"modules/carousel",flow:"modules/flow",util:"modules/util",code:"modules/code",jquery:"modules/jquery",mobile:"modules/mobile","layui.all":"../layui.all"};n.prototype.cache=o,n.prototype.define=function(e,t){var n=this,r="function"==typeof e,i=function(){var e=function(e,t){layui[e]=t,o.status[e]=!0};return"function"==typeof t&&t(function(n,r){e(n,r),o.callback[n]=function(){t(e)}}),this};return r&&(t=e,e=[]),layui["layui.all"]||!layui["layui.all"]&&layui["layui.mobile"]?i.call(n):(n.use(e,i),n)},n.prototype.use=function(e,n,l){function s(e,t){var n="PLaySTATION 3"===navigator.platform?/^complete$/:/^(complete|loaded)$/;("load"===e.type||n.test((e.currentTarget||e.srcElement).readyState))&&(o.modules[f]=t,d.removeChild(v),function r(){return++m>1e3*o.timeout/4?i(f+" is not a valid module"):void(o.status[f]?c():setTimeout(r,4))}())}function c(){l.push(layui[f]),e.length>1?y.use(e.slice(1),n,l):"function"==typeof n&&n.apply(layui,l)}var y=this,p=o.dir=o.dir?o.dir:r,d=t.getElementsByTagName("head")[0];e="string"==typeof e?[e]:e,window.jQuery&&jQuery.fn.on&&(y.each(e,function(t,o){"jquery"===o&&e.splice(t,1)}),layui.jquery=layui.$=jQuery);var f=e[0],m=0;if(l=l||[],o.host=o.host||(p.match(/\/\/([\s\S]+?)\//)||["//"+location.host+"/"])[0],0===e.length||layui["layui.all"]&&u[f]||!layui["layui.all"]&&layui["layui.mobile"]&&u[f])return c(),y;if(o.modules[f])!function g(){return++m>1e3*o.timeout/4?i(f+" is not a valid module"):void("string"==typeof o.modules[f]&&o.status[f]?c():setTimeout(g,4))}();else{var v=t.createElement("script"),h=(u[f]?p+"lay/":/^\{\/\}/.test(y.modules[f])?"":o.base||"")+(y.modules[f]||f)+".js";h=h.replace(/^\{\/\}/,""),v.async=!0,v.charset="utf-8",v.src=h+function(){var e=o.version===!0?o.v||(new Date).getTime():o.version||"";return e?"?v="+e:""}(),d.appendChild(v),!v.attachEvent||v.attachEvent.toString&&v.attachEvent.toString().indexOf("[native code")<0||a?v.addEventListener("load",function(e){s(e,h)},!1):v.attachEvent("onreadystatechange",function(e){s(e,h)}),o.modules[f]=h}return y},n.prototype.getStyle=function(t,o){var n=t.currentStyle?t.currentStyle:e.getComputedStyle(t,null);return n[n.getPropertyValue?"getPropertyValue":"getAttribute"](o)},n.prototype.link=function(e,n,r){var a=this,u=t.createElement("link"),l=t.getElementsByTagName("head")[0];"string"==typeof n&&(r=n);var s=(r||e).replace(/\.|\//g,""),c=u.id="layuicss-"+s,y=0;return u.rel="stylesheet",u.href=e+(o.debug?"?v="+(new Date).getTime():""),u.media="all",t.getElementById(c)||l.appendChild(u),"function"!=typeof n?a:(function p(){return++y>1e3*o.timeout/100?i(e+" timeout"):void(1989===parseInt(a.getStyle(t.getElementById(c),"width"))?function(){n()}():setTimeout(p,100))}(),a)},o.callback={},n.prototype.factory=function(e){if(layui[e])return"function"==typeof o.callback[e]?o.callback[e]:null},n.prototype.addcss=function(e,t,n){return layui.link(o.dir+"css/"+e,t,n)},n.prototype.img=function(e,t,o){var n=new Image;return n.src=e,n.complete?t(n):(n.onload=function(){n.onload=null,"function"==typeof t&&t(n)},void(n.onerror=function(e){n.onerror=null,"function"==typeof o&&o(e)}))},n.prototype.config=function(e){e=e||{};for(var t in e)o[t]=e[t];return this},n.prototype.modules=function(){var e={};for(var t in u)e[t]=u[t];return e}(),n.prototype.extend=function(e){var t=this;e=e||{};for(var o in e)t[o]||t.modules[o]?i("模块名 "+o+" 已被占用"):t.modules[o]=e[o];return t},n.prototype.router=function(e){var t=this,e=e||location.hash,o={path:[],search:{},hash:(e.match(/[^#](#.*$)/)||[])[1]||""};return/^#\//.test(e)?(e=e.replace(/^#\//,""),o.href="/"+e,e=e.replace(/([^#])(#.*$)/,"$1").split("/")||[],t.each(e,function(e,t){/^\w+=/.test(t)?function(){t=t.split("="),o.search[t[0]]=t[1]}():o.path.push(t)}),o):o},n.prototype.data=function(t,o,n){if(t=t||"layui",n=n||localStorage,e.JSON&&e.JSON.parse){if(null===o)return delete n[t];o="object"==typeof o?o:{key:o};try{var r=JSON.parse(n[t])}catch(i){var r={}}return"value"in o&&(r[o.key]=o.value),o.remove&&delete r[o.key],n[t]=JSON.stringify(r),o.key?r[o.key]:r}},n.prototype.sessionData=function(e,t){return this.data(e,t,sessionStorage)},n.prototype.device=function(t){var o=navigator.userAgent.toLowerCase(),n=function(e){var t=new RegExp(e+"/([^\\s\\_\\-]+)");return e=(o.match(t)||[])[1],e||!1},r={os:function(){return/windows/.test(o)?"windows":/linux/.test(o)?"linux":/iphone|ipod|ipad|ios/.test(o)?"ios":/mac/.test(o)?"mac":void 0}(),ie:function(){return!!(e.ActiveXObject||"ActiveXObject"in e)&&((o.match(/msie\s(\d+)/)||[])[1]||"11")}(),weixin:n("micromessenger")};return t&&!r[t]&&(r[t]=n(t)),r.android=/android/.test(o),r.ios="ios"===r.os,r},n.prototype.hint=function(){return{error:i}},n.prototype.each=function(e,t){var o,n=this;if("function"!=typeof t)return n;if(e=e||[],e.constructor===Object){for(o in e)if(t.call(e[o],o,e[o]))break}else for(o=0;o<e.length&&!t.call(e[o],o,e[o]);o++);return n},n.prototype.sort=function(e,t,o){var n=JSON.parse(JSON.stringify(e||[]));return t?(n.sort(function(e,o){var n=/^-?\d+$/,r=e[t],i=o[t];return n.test(r)&&(r=parseFloat(r)),n.test(i)&&(i=parseFloat(i)),r&&!i?1:!r&&i?-1:r>i?1:r<i?-1:0}),o&&n.reverse(),n):n},n.prototype.stope=function(t){t=t||e.event;try{t.stopPropagation()}catch(o){t.cancelBubble=!0}},n.prototype.onevent=function(e,t,o){return"string"!=typeof e||"function"!=typeof o?this:n.event(e,t,null,o)},n.prototype.event=n.event=function(e,t,n,r){var i=this,a=null,u=t.match(/\((.*)\)$/)||[],l=(e+"."+t).replace(u[0],""),s=u[1]||"",c=function(e,t){var o=t&&t.call(i,n);o===!1&&null===a&&(a=!1)};return r?(o.event[l]=o.event[l]||{},o.event[l][s]=[r],this):(layui.each(o.event[l],function(e,t){return"{*}"===s?void layui.each(t,c):(""===e&&layui.each(t,c),void(s&&e===s&&layui.each(t,c)))}),a)},e.layui=new n}(window);
},{}],"node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "65206" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel/src/builtins/hmr-runtime.js","node_modules/layui-src/dist/layui.js"], null)
//# sourceMappingURL=/layui.cd38f95f.js.map