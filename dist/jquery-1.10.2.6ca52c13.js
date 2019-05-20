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
})({"js/jquery-1.10.2.js":[function(require,module,exports) {
var define;
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * jQuery JavaScript Library v1.10.2
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2013 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2013-07-03T13:48Z
 */
(function (eI, cG) {
  var cN,
      dD,
      dM = _typeof(cG),
      ex = eI.location,
      dO = eI.document,
      eG = dO.documentElement,
      cV = eI.jQuery,
      cp = eI.$,
      b3 = {},
      ch = [],
      ek = "1.10.2",
      cm = ch.concat,
      e = ch.push,
      dr = ch.slice,
      cx = ch.indexOf,
      dm = b3.toString,
      ey = b3.hasOwnProperty,
      ca = ek.trim,
      eq = function eq(b, a) {
    return new eq.fn.init(b, a, dD);
  },
      cJ = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      dW = /\S+/g,
      dc = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      er = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
      eu = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
      ej = /^[\],:{}\s]*$/,
      da = /(?:^|:|,)(?:\s*\[)+/g,
      cQ = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
      dY = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
      c0 = /^-ms-/,
      c7 = /-([\da-z])/gi,
      ce = function ce(b, a) {
    return a.toUpperCase();
  },
      cP = function cP(a) {
    if (dO.addEventListener || a.type === "load" || dO.readyState === "complete") {
      df();
      eq.ready();
    }
  },
      df = function df() {
    if (dO.addEventListener) {
      dO.removeEventListener("DOMContentLoaded", cP, false);
      eI.removeEventListener("load", cP, false);
    } else {
      dO.detachEvent("onreadystatechange", cP);
      eI.detachEvent("onload", cP);
    }
  };

  eq.fn = eq.prototype = {
    jquery: ek,
    constructor: eq,
    init: function init(f, b, c) {
      var d, a;

      if (!f) {
        return this;
      }

      if (typeof f === "string") {
        if (f.charAt(0) === "<" && f.charAt(f.length - 1) === ">" && f.length >= 3) {
          d = [null, f, null];
        } else {
          d = er.exec(f);
        }

        if (d && (d[1] || !b)) {
          if (d[1]) {
            b = b instanceof eq ? b[0] : b;
            eq.merge(this, eq.parseHTML(d[1], b && b.nodeType ? b.ownerDocument || b : dO, true));

            if (eu.test(d[1]) && eq.isPlainObject(b)) {
              for (d in b) {
                if (eq.isFunction(this[d])) {
                  this[d](b[d]);
                } else {
                  this.attr(d, b[d]);
                }
              }
            }

            return this;
          } else {
            a = dO.getElementById(d[2]);

            if (a && a.parentNode) {
              if (a.id !== d[2]) {
                return c.find(f);
              }

              this.length = 1;
              this[0] = a;
            }

            this.context = dO;
            this.selector = f;
            return this;
          }
        } else {
          if (!b || b.jquery) {
            return (b || c).find(f);
          } else {
            return this.constructor(b).find(f);
          }
        }
      } else {
        if (f.nodeType) {
          this.context = this[0] = f;
          this.length = 1;
          return this;
        } else {
          if (eq.isFunction(f)) {
            return c.ready(f);
          }
        }
      }

      if (f.selector !== cG) {
        this.selector = f.selector;
        this.context = f.context;
      }

      return eq.makeArray(f, this);
    },
    selector: "",
    length: 0,
    toArray: function toArray() {
      return dr.call(this);
    },
    get: function get(a) {
      return a == null ? this.toArray() : a < 0 ? this[this.length + a] : this[a];
    },
    pushStack: function pushStack(b) {
      var a = eq.merge(this.constructor(), b);
      a.prevObject = this;
      a.context = this.context;
      return a;
    },
    each: function each(a, b) {
      return eq.each(this, a, b);
    },
    ready: function ready(a) {
      eq.ready.promise().done(a);
      return this;
    },
    slice: function slice() {
      return this.pushStack(dr.apply(this, arguments));
    },
    first: function first() {
      return this.eq(0);
    },
    last: function last() {
      return this.eq(-1);
    },
    eq: function eq(b) {
      var a = this.length,
          c = +b + (b < 0 ? a : 0);
      return this.pushStack(c >= 0 && c < a ? [this[c]] : []);
    },
    map: function map(a) {
      return this.pushStack(eq.map(this, function (c, b) {
        return a.call(c, b, c);
      }));
    },
    end: function end() {
      return this.prevObject || this.constructor(null);
    },
    push: e,
    sort: [].sort,
    splice: [].splice
  };
  eq.fn.init.prototype = eq.fn;

  eq.extend = eq.fn.extend = function () {
    var j,
        d,
        i,
        k,
        a,
        c,
        f = arguments[0] || {},
        g = 1,
        h = arguments.length,
        b = false;

    if (typeof f === "boolean") {
      b = f;
      f = arguments[1] || {};
      g = 2;
    }

    if (_typeof(f) !== "object" && !eq.isFunction(f)) {
      f = {};
    }

    if (h === g) {
      f = this;
      --g;
    }

    for (; g < h; g++) {
      if ((a = arguments[g]) != null) {
        for (k in a) {
          j = f[k];
          i = a[k];

          if (f === i) {
            continue;
          }

          if (b && i && (eq.isPlainObject(i) || (d = eq.isArray(i)))) {
            if (d) {
              d = false;
              c = j && eq.isArray(j) ? j : [];
            } else {
              c = j && eq.isPlainObject(j) ? j : {};
            }

            f[k] = eq.extend(b, c, i);
          } else {
            if (i !== cG) {
              f[k] = i;
            }
          }
        }
      }
    }

    return f;
  };

  eq.extend({
    expando: "jQuery" + (ek + Math.random()).replace(/\D/g, ""),
    noConflict: function noConflict(a) {
      if (eI.$ === eq) {
        eI.$ = cp;
      }

      if (a && eI.jQuery === eq) {
        eI.jQuery = cV;
      }

      return eq;
    },
    isReady: false,
    readyWait: 1,
    holdReady: function holdReady(a) {
      if (a) {
        eq.readyWait++;
      } else {
        eq.ready(true);
      }
    },
    ready: function ready(a) {
      if (a === true ? --eq.readyWait : eq.isReady) {
        return;
      }

      if (!dO.body) {
        return setTimeout(eq.ready);
      }

      eq.isReady = true;

      if (a !== true && --eq.readyWait > 0) {
        return;
      }

      cN.resolveWith(dO, [eq]);

      if (eq.fn.trigger) {
        eq(dO).trigger("ready").off("ready");
      }
    },
    isFunction: function isFunction(a) {
      return eq.type(a) === "function";
    },
    isArray: Array.isArray || function (a) {
      return eq.type(a) === "array";
    },
    isWindow: function isWindow(a) {
      return a != null && a == a.window;
    },
    isNumeric: function isNumeric(a) {
      return !isNaN(parseFloat(a)) && isFinite(a);
    },
    type: function type(a) {
      if (a == null) {
        return String(a);
      }

      return _typeof(a) === "object" || typeof a === "function" ? b3[dm.call(a)] || "object" : _typeof(a);
    },
    isPlainObject: function isPlainObject(a) {
      var c;

      if (!a || eq.type(a) !== "object" || a.nodeType || eq.isWindow(a)) {
        return false;
      }

      try {
        if (a.constructor && !ey.call(a, "constructor") && !ey.call(a.constructor.prototype, "isPrototypeOf")) {
          return false;
        }
      } catch (b) {
        return false;
      }

      if (eq.support.ownLast) {
        for (c in a) {
          return ey.call(a, c);
        }
      }

      for (c in a) {}

      return c === cG || ey.call(a, c);
    },
    isEmptyObject: function isEmptyObject(a) {
      var b;

      for (b in a) {
        return false;
      }

      return true;
    },
    error: function error(a) {
      throw new Error(a);
    },
    parseHTML: function parseHTML(a, c, b) {
      if (!a || typeof a !== "string") {
        return null;
      }

      if (typeof c === "boolean") {
        b = c;
        c = false;
      }

      c = c || dO;
      var d = eu.exec(a),
          f = !b && [];

      if (d) {
        return [c.createElement(d[1])];
      }

      d = eq.buildFragment([a], c, f);

      if (f) {
        eq(f).remove();
      }

      return eq.merge([], d.childNodes);
    },
    parseJSON: function parseJSON(a) {
      if (eI.JSON && eI.JSON.parse) {
        return eI.JSON.parse(a);
      }

      if (a === null) {
        return a;
      }

      if (typeof a === "string") {
        a = eq.trim(a);

        if (a) {
          if (ej.test(a.replace(cQ, "@").replace(dY, "]").replace(da, ""))) {
            return new Function("return " + a)();
          }
        }
      }

      eq.error("Invalid JSON: " + a);
    },
    parseXML: function parseXML(c) {
      var a, d;

      if (!c || typeof c !== "string") {
        return null;
      }

      try {
        if (eI.DOMParser) {
          d = new DOMParser();
          a = d.parseFromString(c, "text/xml");
        } else {
          a = new ActiveXObject("Microsoft.XMLDOM");
          a.async = "false";
          a.loadXML(c);
        }
      } catch (b) {
        a = cG;
      }

      if (!a || !a.documentElement || a.getElementsByTagName("parsererror").length) {
        eq.error("Invalid XML: " + c);
      }

      return a;
    },
    noop: function noop() {},
    globalEval: function globalEval(a) {
      if (a && eq.trim(a)) {
        (eI.execScript || function (b) {
          eI["eval"].call(eI, b);
        })(a);
      }
    },
    camelCase: function camelCase(a) {
      return a.replace(c0, "ms-").replace(c7, ce);
    },
    nodeName: function nodeName(a, b) {
      return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
    },
    each: function each(h, c, g) {
      var a,
          f = 0,
          b = h.length,
          d = cE(h);

      if (g) {
        if (d) {
          for (; f < b; f++) {
            a = c.apply(h[f], g);

            if (a === false) {
              break;
            }
          }
        } else {
          for (f in h) {
            a = c.apply(h[f], g);

            if (a === false) {
              break;
            }
          }
        }
      } else {
        if (d) {
          for (; f < b; f++) {
            a = c.call(h[f], f, h[f]);

            if (a === false) {
              break;
            }
          }
        } else {
          for (f in h) {
            a = c.call(h[f], f, h[f]);

            if (a === false) {
              break;
            }
          }
        }
      }

      return h;
    },
    trim: ca && !ca.call("\uFEFF\xA0") ? function (a) {
      return a == null ? "" : ca.call(a);
    } : function (a) {
      return a == null ? "" : (a + "").replace(dc, "");
    },
    makeArray: function makeArray(a, b) {
      var c = b || [];

      if (a != null) {
        if (cE(Object(a))) {
          eq.merge(c, typeof a === "string" ? [a] : a);
        } else {
          e.call(c, a);
        }
      }

      return c;
    },
    inArray: function inArray(c, a, d) {
      var b;

      if (a) {
        if (cx) {
          return cx.call(a, c, d);
        }

        b = a.length;
        d = d ? d < 0 ? Math.max(0, b + d) : d : 0;

        for (; d < b; d++) {
          if (d in a && a[d] === c) {
            return d;
          }
        }
      }

      return -1;
    },
    merge: function merge(a, c) {
      var f = c.length,
          b = a.length,
          d = 0;

      if (typeof f === "number") {
        for (; d < f; d++) {
          a[b++] = c[d];
        }
      } else {
        while (c[d] !== cG) {
          a[b++] = c[d++];
        }
      }

      a.length = b;
      return a;
    },
    grep: function grep(g, c, h) {
      var f,
          b = [],
          a = 0,
          d = g.length;
      h = !!h;

      for (; a < d; a++) {
        f = !!c(g[a], a);

        if (h !== f) {
          b.push(g[a]);
        }
      }

      return b;
    },
    map: function map(g, c, i) {
      var d,
          a = 0,
          h = g.length,
          b = cE(g),
          f = [];

      if (b) {
        for (; a < h; a++) {
          d = c(g[a], a, i);

          if (d != null) {
            f[f.length] = d;
          }
        }
      } else {
        for (a in g) {
          d = c(g[a], a, i);

          if (d != null) {
            f[f.length] = d;
          }
        }
      }

      return cm.apply([], f);
    },
    guid: 1,
    proxy: function proxy(a, b) {
      var f, c, d;

      if (typeof b === "string") {
        d = a[b];
        b = a;
        a = d;
      }

      if (!eq.isFunction(a)) {
        return cG;
      }

      f = dr.call(arguments, 2);

      c = function c() {
        return a.apply(b || this, f.concat(dr.call(arguments)));
      };

      c.guid = a.guid = a.guid || eq.guid++;
      return c;
    },
    access: function access(j, f, c, d, i, a, b) {
      var k = 0,
          h = j.length,
          g = c == null;

      if (eq.type(c) === "object") {
        i = true;

        for (k in c) {
          eq.access(j, f, k, c[k], true, a, b);
        }
      } else {
        if (d !== cG) {
          i = true;

          if (!eq.isFunction(d)) {
            b = true;
          }

          if (g) {
            if (b) {
              f.call(j, d);
              f = null;
            } else {
              g = f;

              f = function f(n, l, m) {
                return g.call(eq(n), m);
              };
            }
          }

          if (f) {
            for (; k < h; k++) {
              f(j[k], c, b ? d : d.call(j[k], k, f(j[k], c)));
            }
          }
        }
      }

      return i ? j : g ? f.call(j) : h ? f(j[0], c) : a;
    },
    now: function now() {
      return new Date().getTime();
    },
    swap: function swap(h, a, c, b) {
      var f,
          g,
          d = {};

      for (g in a) {
        d[g] = h.style[g];
        h.style[g] = a[g];
      }

      f = c.apply(h, b || []);

      for (g in a) {
        h.style[g] = d[g];
      }

      return f;
    }
  });

  eq.ready.promise = function (b) {
    if (!cN) {
      cN = eq.Deferred();

      if (dO.readyState === "complete") {
        setTimeout(eq.ready);
      } else {
        if (dO.addEventListener) {
          dO.addEventListener("DOMContentLoaded", cP, false);
          eI.addEventListener("load", cP, false);
        } else {
          dO.attachEvent("onreadystatechange", cP);
          eI.attachEvent("onload", cP);
          var c = false;

          try {
            c = eI.frameElement == null && dO.documentElement;
          } catch (d) {}

          if (c && c.doScroll) {
            (function a() {
              if (!eq.isReady) {
                try {
                  c.doScroll("left");
                } catch (f) {
                  return setTimeout(a, 50);
                }

                df();
                eq.ready();
              }
            })();
          }
        }
      }
    }

    return cN.promise(b);
  };

  eq.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (a, b) {
    b3["[object " + b + "]"] = b.toLowerCase();
  });

  function cE(b) {
    var c = b.length,
        a = eq.type(b);

    if (eq.isWindow(b)) {
      return false;
    }

    if (b.nodeType === 1 && c) {
      return true;
    }

    return a === "array" || a !== "function" && (c === 0 || typeof c === "number" && c > 0 && c - 1 in b);
  }

  dD = eq(dO);
  /*!
   * Sizzle CSS Selector Engine v1.10.2
   * http://sizzlejs.com/
   *
   * Copyright 2013 jQuery Foundation, Inc. and other contributors
   * Released under the MIT license
   * http://jquery.org/license
   *
   * Date: 2013-07-03
   */

  (function (ai, Q) {
    var z,
        s,
        az,
        x,
        P,
        ab,
        T,
        f,
        L,
        au,
        n,
        aw,
        F,
        W,
        af,
        ar,
        O,
        k = "sizzle" + -new Date(),
        K = ai.document,
        q = 0,
        av = 0,
        ay = H(),
        ap = H(),
        N = H(),
        U = false,
        R = function R(aD, aE) {
      if (aD === aE) {
        U = true;
        return 0;
      }

      return 0;
    },
        aj = _typeof(Q),
        o = 1 << 31,
        ag = {}.hasOwnProperty,
        ah = [],
        m = ah.pop,
        X = ah.push,
        V = ah.push,
        i = ah.slice,
        B = ah.indexOf || function (aD) {
      var aE = 0,
          aF = this.length;

      for (; aE < aF; aE++) {
        if (this[aE] === aD) {
          return aE;
        }
      }

      return -1;
    },
        ac = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        I = "[\\x20\\t\\r\\n\\f]",
        aB = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        Z = aB.replace("w", "w#"),
        an = "\\[" + I + "*(" + aB + ")" + I + "*(?:([*^$|!~]?=)" + I + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + Z + ")|)|)" + I + "*\\]",
        ao = ":(" + aB + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + an.replace(3, 8) + ")*)|.*)\\)|)",
        G = new RegExp("^" + I + "+|((?:^|[^\\\\])(?:\\\\.)*)" + I + "+$", "g"),
        al = new RegExp("^" + I + "*," + I + "*"),
        D = new RegExp("^" + I + "*([>+~]|" + I + ")" + I + "*"),
        A = new RegExp(I + "*[+~]"),
        J = new RegExp("=" + I + "*([^\\]'\"]*)" + I + "*\\]", "g"),
        d = new RegExp(ao),
        p = new RegExp("^" + Z + "$"),
        at = {
      ID: new RegExp("^#(" + aB + ")"),
      CLASS: new RegExp("^\\.(" + aB + ")"),
      TAG: new RegExp("^(" + aB.replace("w", "w*") + ")"),
      ATTR: new RegExp("^" + an),
      PSEUDO: new RegExp("^" + ao),
      CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + I + "*(even|odd|(([+-]|)(\\d*)n|)" + I + "*(?:([+-]|)" + I + "*(\\d+)|))" + I + "*\\)|)", "i"),
      bool: new RegExp("^(?:" + ac + ")$", "i"),
      needsContext: new RegExp("^" + I + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + I + "*((?:-\\d)?\\d*)" + I + "*\\)|)(?=[^-]|$)", "i")
    },
        c = /^[^{]+\{\s*\[native \w/,
        h = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        ad = /^(?:input|select|textarea|button)$/i,
        j = /^h\d$/i,
        r = /'|\\/g,
        y = new RegExp("\\\\([\\da-f]{1,6}" + I + "?|(" + I + ")|.)", "ig"),
        C = function C(aG, aD, aF) {
      var aE = "0x" + aD - 65536;
      return aE !== aE || aF ? aD : aE < 0 ? String.fromCharCode(aE + 65536) : String.fromCharCode(aE >> 10 | 55296, aE & 1023 | 56320);
    };

    try {
      V.apply(ah = i.call(K.childNodes), K.childNodes);
      ah[K.childNodes.length].nodeType;
    } catch (ak) {
      V = {
        apply: ah.length ? function (aD, aE) {
          X.apply(aD, i.call(aE));
        } : function (aD, aE) {
          var aG = aD.length,
              aF = 0;

          while (aD[aG++] = aE[aF++]) {}

          aD.length = aG - 1;
        }
      };
    }

    function u(aE, aL, aP, aN) {
      var aO, aH, aG, aR, aQ, aI, aJ, aM, aK, aD;

      if ((aL ? aL.ownerDocument || aL : K) !== n) {
        au(aL);
      }

      aL = aL || n;
      aP = aP || [];

      if (!aE || typeof aE !== "string") {
        return aP;
      }

      if ((aR = aL.nodeType) !== 1 && aR !== 9) {
        return [];
      }

      if (F && !aN) {
        if (aO = h.exec(aE)) {
          if (aG = aO[1]) {
            if (aR === 9) {
              aH = aL.getElementById(aG);

              if (aH && aH.parentNode) {
                if (aH.id === aG) {
                  aP.push(aH);
                  return aP;
                }
              } else {
                return aP;
              }
            } else {
              if (aL.ownerDocument && (aH = aL.ownerDocument.getElementById(aG)) && O(aL, aH) && aH.id === aG) {
                aP.push(aH);
                return aP;
              }
            }
          } else {
            if (aO[2]) {
              V.apply(aP, aL.getElementsByTagName(aE));
              return aP;
            } else {
              if ((aG = aO[3]) && s.getElementsByClassName && aL.getElementsByClassName) {
                V.apply(aP, aL.getElementsByClassName(aG));
                return aP;
              }
            }
          }
        }

        if (s.qsa && (!W || !W.test(aE))) {
          aM = aJ = k;
          aK = aL;
          aD = aR === 9 && aE;

          if (aR === 1 && aL.nodeName.toLowerCase() !== "object") {
            aI = aA(aE);

            if (aJ = aL.getAttribute("id")) {
              aM = aJ.replace(r, "\\$&");
            } else {
              aL.setAttribute("id", aM);
            }

            aM = "[id='" + aM + "'] ";
            aQ = aI.length;

            while (aQ--) {
              aI[aQ] = aM + aa(aI[aQ]);
            }

            aK = A.test(aE) && aL.parentNode || aL;
            aD = aI.join(",");
          }

          if (aD) {
            try {
              V.apply(aP, aK.querySelectorAll(aD));
              return aP;
            } catch (aF) {} finally {
              if (!aJ) {
                aL.removeAttribute("id");
              }
            }
          }
        }
      }

      return g(aE.replace(G, "$1"), aL, aP, aN);
    }

    function H() {
      var aD = [];

      function aE(aG, aF) {
        if (aD.push(aG += " ") > x.cacheLength) {
          delete aE[aD.shift()];
        }

        return aE[aG] = aF;
      }

      return aE;
    }

    function E(aD) {
      aD[k] = true;
      return aD;
    }

    function ax(aF) {
      var aD = n.createElement("div");

      try {
        return !!aF(aD);
      } catch (aE) {
        return false;
      } finally {
        if (aD.parentNode) {
          aD.parentNode.removeChild(aD);
        }

        aD = null;
      }
    }

    function b(aF, aD) {
      var aG = aF.split("|"),
          aE = aF.length;

      while (aE--) {
        x.attrHandle[aG[aE]] = aD;
      }
    }

    function Y(aF, aG) {
      var aD = aG && aF,
          aE = aD && aF.nodeType === 1 && aG.nodeType === 1 && (~aG.sourceIndex || o) - (~aF.sourceIndex || o);

      if (aE) {
        return aE;
      }

      if (aD) {
        while (aD = aD.nextSibling) {
          if (aD === aG) {
            return -1;
          }
        }
      }

      return aF ? 1 : -1;
    }

    function t(aD) {
      return function (aE) {
        var aF = aE.nodeName.toLowerCase();
        return aF === "input" && aE.type === aD;
      };
    }

    function aC(aD) {
      return function (aE) {
        var aF = aE.nodeName.toLowerCase();
        return (aF === "input" || aF === "button") && aE.type === aD;
      };
    }

    function am(aD) {
      return E(function (aE) {
        aE = +aE;
        return E(function (aH, aI) {
          var aF,
              aG = aD([], aH.length, aE),
              aJ = aG.length;

          while (aJ--) {
            if (aH[aF = aG[aJ]]) {
              aH[aF] = !(aI[aF] = aH[aF]);
            }
          }
        });
      });
    }

    ab = u.isXML = function (aE) {
      var aD = aE && (aE.ownerDocument || aE).documentElement;
      return aD ? aD.nodeName !== "HTML" : false;
    };

    s = u.support = {};

    au = u.setDocument = function (aE) {
      var aD = aE ? aE.ownerDocument || aE : K,
          aF = aD.defaultView;

      if (aD === n || aD.nodeType !== 9 || !aD.documentElement) {
        return n;
      }

      n = aD;
      aw = aD.documentElement;
      F = !ab(aD);

      if (aF && aF.attachEvent && aF !== aF.top) {
        aF.attachEvent("onbeforeunload", function () {
          au();
        });
      }

      s.attributes = ax(function (aG) {
        aG.className = "i";
        return !aG.getAttribute("className");
      });
      s.getElementsByTagName = ax(function (aG) {
        aG.appendChild(aD.createComment(""));
        return !aG.getElementsByTagName("*").length;
      });
      s.getElementsByClassName = ax(function (aG) {
        aG.innerHTML = "<div class='a'></div><div class='a i'></div>";
        aG.firstChild.className = "i";
        return aG.getElementsByClassName("i").length === 2;
      });
      s.getById = ax(function (aG) {
        aw.appendChild(aG).id = k;
        return !aD.getElementsByName || !aD.getElementsByName(k).length;
      });

      if (s.getById) {
        x.find.ID = function (aI, aG) {
          if (_typeof(aG.getElementById) !== aj && F) {
            var aH = aG.getElementById(aI);
            return aH && aH.parentNode ? [aH] : [];
          }
        };

        x.filter.ID = function (aG) {
          var aH = aG.replace(y, C);
          return function (aI) {
            return aI.getAttribute("id") === aH;
          };
        };
      } else {
        delete x.find.ID;

        x.filter.ID = function (aG) {
          var aH = aG.replace(y, C);
          return function (aI) {
            var aJ = _typeof(aI.getAttributeNode) !== aj && aI.getAttributeNode("id");
            return aJ && aJ.value === aH;
          };
        };
      }

      x.find.TAG = s.getElementsByTagName ? function (aH, aG) {
        if (_typeof(aG.getElementsByTagName) !== aj) {
          return aG.getElementsByTagName(aH);
        }
      } : function (aH, aJ) {
        var aI,
            aK = [],
            aL = 0,
            aG = aJ.getElementsByTagName(aH);

        if (aH === "*") {
          while (aI = aG[aL++]) {
            if (aI.nodeType === 1) {
              aK.push(aI);
            }
          }

          return aK;
        }

        return aG;
      };

      x.find.CLASS = s.getElementsByClassName && function (aG, aH) {
        if (_typeof(aH.getElementsByClassName) !== aj && F) {
          return aH.getElementsByClassName(aG);
        }
      };

      af = [];
      W = [];

      if (s.qsa = c.test(aD.querySelectorAll)) {
        ax(function (aG) {
          aG.innerHTML = "<select><option selected=''></option></select>";

          if (!aG.querySelectorAll("[selected]").length) {
            W.push("\\[" + I + "*(?:value|" + ac + ")");
          }

          if (!aG.querySelectorAll(":checked").length) {
            W.push(":checked");
          }
        });
        ax(function (aG) {
          var aH = aD.createElement("input");
          aH.setAttribute("type", "hidden");
          aG.appendChild(aH).setAttribute("t", "");

          if (aG.querySelectorAll("[t^='']").length) {
            W.push("[*^$]=" + I + "*(?:''|\"\")");
          }

          if (!aG.querySelectorAll(":enabled").length) {
            W.push(":enabled", ":disabled");
          }

          aG.querySelectorAll("*,:x");
          W.push(",.*:");
        });
      }

      if (s.matchesSelector = c.test(ar = aw.webkitMatchesSelector || aw.mozMatchesSelector || aw.oMatchesSelector || aw.msMatchesSelector)) {
        ax(function (aG) {
          s.disconnectedMatch = ar.call(aG, "div");
          ar.call(aG, "[s!='']:x");
          af.push("!=", ao);
        });
      }

      W = W.length && new RegExp(W.join("|"));
      af = af.length && new RegExp(af.join("|"));
      O = c.test(aw.contains) || aw.compareDocumentPosition ? function (aG, aH) {
        var aI = aG.nodeType === 9 ? aG.documentElement : aG,
            aJ = aH && aH.parentNode;
        return aG === aJ || !!(aJ && aJ.nodeType === 1 && (aI.contains ? aI.contains(aJ) : aG.compareDocumentPosition && aG.compareDocumentPosition(aJ) & 16));
      } : function (aG, aH) {
        if (aH) {
          while (aH = aH.parentNode) {
            if (aH === aG) {
              return true;
            }
          }
        }

        return false;
      };
      R = aw.compareDocumentPosition ? function (aG, aH) {
        if (aG === aH) {
          U = true;
          return 0;
        }

        var aI = aH.compareDocumentPosition && aG.compareDocumentPosition && aG.compareDocumentPosition(aH);

        if (aI) {
          if (aI & 1 || !s.sortDetached && aH.compareDocumentPosition(aG) === aI) {
            if (aG === aD || O(K, aG)) {
              return -1;
            }

            if (aH === aD || O(K, aH)) {
              return 1;
            }

            return L ? B.call(L, aG) - B.call(L, aH) : 0;
          }

          return aI & 4 ? -1 : 1;
        }

        return aG.compareDocumentPosition ? -1 : 1;
      } : function (aG, aH) {
        var aI,
            aL = 0,
            aJ = aG.parentNode,
            aM = aH.parentNode,
            aN = [aG],
            aK = [aH];

        if (aG === aH) {
          U = true;
          return 0;
        } else {
          if (!aJ || !aM) {
            return aG === aD ? -1 : aH === aD ? 1 : aJ ? -1 : aM ? 1 : L ? B.call(L, aG) - B.call(L, aH) : 0;
          } else {
            if (aJ === aM) {
              return Y(aG, aH);
            }
          }
        }

        aI = aG;

        while (aI = aI.parentNode) {
          aN.unshift(aI);
        }

        aI = aH;

        while (aI = aI.parentNode) {
          aK.unshift(aI);
        }

        while (aN[aL] === aK[aL]) {
          aL++;
        }

        return aL ? Y(aN[aL], aK[aL]) : aN[aL] === K ? -1 : aK[aL] === K ? 1 : 0;
      };
      return aD;
    };

    u.matches = function (aD, aE) {
      return u(aD, null, null, aE);
    };

    u.matchesSelector = function (aF, aD) {
      if ((aF.ownerDocument || aF) !== n) {
        au(aF);
      }

      aD = aD.replace(J, "='$1']");

      if (s.matchesSelector && F && (!af || !af.test(aD)) && (!W || !W.test(aD))) {
        try {
          var aG = ar.call(aF, aD);

          if (aG || s.disconnectedMatch || aF.document && aF.document.nodeType !== 11) {
            return aG;
          }
        } catch (aE) {}
      }

      return u(aD, n, null, [aF]).length > 0;
    };

    u.contains = function (aE, aD) {
      if ((aE.ownerDocument || aE) !== n) {
        au(aE);
      }

      return O(aE, aD);
    };

    u.attr = function (aE, aG) {
      if ((aE.ownerDocument || aE) !== n) {
        au(aE);
      }

      var aF = x.attrHandle[aG.toLowerCase()],
          aD = aF && ag.call(x.attrHandle, aG.toLowerCase()) ? aF(aE, aG, !F) : Q;
      return aD === Q ? s.attributes || !F ? aE.getAttribute(aG) : (aD = aE.getAttributeNode(aG)) && aD.specified ? aD.value : null : aD;
    };

    u.error = function (aD) {
      throw new Error("Syntax error, unrecognized expression: " + aD);
    };

    u.uniqueSort = function (aF) {
      var aE,
          aD = [],
          aH = 0,
          aG = 0;
      U = !s.detectDuplicates;
      L = !s.sortStable && aF.slice(0);
      aF.sort(R);

      if (U) {
        while (aE = aF[aG++]) {
          if (aE === aF[aG]) {
            aH = aD.push(aG);
          }
        }

        while (aH--) {
          aF.splice(aD[aH], 1);
        }
      }

      return aF;
    };

    P = u.getText = function (aD) {
      var aE,
          aG = "",
          aF = 0,
          aH = aD.nodeType;

      if (!aH) {
        for (; aE = aD[aF]; aF++) {
          aG += P(aE);
        }
      } else {
        if (aH === 1 || aH === 9 || aH === 11) {
          if (typeof aD.textContent === "string") {
            return aD.textContent;
          } else {
            for (aD = aD.firstChild; aD; aD = aD.nextSibling) {
              aG += P(aD);
            }
          }
        } else {
          if (aH === 3 || aH === 4) {
            return aD.nodeValue;
          }
        }
      }

      return aG;
    };

    x = u.selectors = {
      cacheLength: 50,
      createPseudo: E,
      match: at,
      attrHandle: {},
      find: {},
      relative: {
        ">": {
          dir: "parentNode",
          first: true
        },
        " ": {
          dir: "parentNode"
        },
        "+": {
          dir: "previousSibling",
          first: true
        },
        "~": {
          dir: "previousSibling"
        }
      },
      preFilter: {
        ATTR: function ATTR(aD) {
          aD[1] = aD[1].replace(y, C);
          aD[3] = (aD[4] || aD[5] || "").replace(y, C);

          if (aD[2] === "~=") {
            aD[3] = " " + aD[3] + " ";
          }

          return aD.slice(0, 4);
        },
        CHILD: function CHILD(aD) {
          aD[1] = aD[1].toLowerCase();

          if (aD[1].slice(0, 3) === "nth") {
            if (!aD[3]) {
              u.error(aD[0]);
            }

            aD[4] = +(aD[4] ? aD[5] + (aD[6] || 1) : 2 * (aD[3] === "even" || aD[3] === "odd"));
            aD[5] = +(aD[7] + aD[8] || aD[3] === "odd");
          } else {
            if (aD[3]) {
              u.error(aD[0]);
            }
          }

          return aD;
        },
        PSEUDO: function PSEUDO(aE) {
          var aF,
              aD = !aE[5] && aE[2];

          if (at.CHILD.test(aE[0])) {
            return null;
          }

          if (aE[3] && aE[4] !== Q) {
            aE[2] = aE[4];
          } else {
            if (aD && d.test(aD) && (aF = aA(aD, true)) && (aF = aD.indexOf(")", aD.length - aF) - aD.length)) {
              aE[0] = aE[0].slice(0, aF);
              aE[2] = aD.slice(0, aF);
            }
          }

          return aE.slice(0, 3);
        }
      },
      filter: {
        TAG: function TAG(aD) {
          var aE = aD.replace(y, C).toLowerCase();
          return aD === "*" ? function () {
            return true;
          } : function (aF) {
            return aF.nodeName && aF.nodeName.toLowerCase() === aE;
          };
        },
        CLASS: function CLASS(aE) {
          var aD = ay[aE + " "];
          return aD || (aD = new RegExp("(^|" + I + ")" + aE + "(" + I + "|$)")) && ay(aE, function (aF) {
            return aD.test(typeof aF.className === "string" && aF.className || _typeof(aF.getAttribute) !== aj && aF.getAttribute("class") || "");
          });
        },
        ATTR: function ATTR(aD, aE, aF) {
          return function (aG) {
            var aH = u.attr(aG, aD);

            if (aH == null) {
              return aE === "!=";
            }

            if (!aE) {
              return true;
            }

            aH += "";
            return aE === "=" ? aH === aF : aE === "!=" ? aH !== aF : aE === "^=" ? aF && aH.indexOf(aF) === 0 : aE === "*=" ? aF && aH.indexOf(aF) > -1 : aE === "$=" ? aF && aH.slice(-aF.length) === aF : aE === "~=" ? (" " + aH + " ").indexOf(aF) > -1 : aE === "|=" ? aH === aF || aH.slice(0, aF.length + 1) === aF + "-" : false;
          };
        },
        CHILD: function CHILD(aG, aD, aE, aK, aF) {
          var aI = aG.slice(0, 3) !== "nth",
              aH = aG.slice(-4) !== "last",
              aJ = aD === "of-type";
          return aK === 1 && aF === 0 ? function (aL) {
            return !!aL.parentNode;
          } : function (aR, aV, aQ) {
            var aN,
                aL,
                aS,
                aM,
                aP,
                aU,
                aT = aI !== aH ? "nextSibling" : "previousSibling",
                aO = aR.parentNode,
                aX = aJ && aR.nodeName.toLowerCase(),
                aW = !aQ && !aJ;

            if (aO) {
              if (aI) {
                while (aT) {
                  aS = aR;

                  while (aS = aS[aT]) {
                    if (aJ ? aS.nodeName.toLowerCase() === aX : aS.nodeType === 1) {
                      return false;
                    }
                  }

                  aU = aT = aG === "only" && !aU && "nextSibling";
                }

                return true;
              }

              aU = [aH ? aO.firstChild : aO.lastChild];

              if (aH && aW) {
                aL = aO[k] || (aO[k] = {});
                aN = aL[aG] || [];
                aP = aN[0] === q && aN[1];
                aM = aN[0] === q && aN[2];
                aS = aP && aO.childNodes[aP];

                while (aS = ++aP && aS && aS[aT] || (aM = aP = 0) || aU.pop()) {
                  if (aS.nodeType === 1 && ++aM && aS === aR) {
                    aL[aG] = [q, aP, aM];
                    break;
                  }
                }
              } else {
                if (aW && (aN = (aR[k] || (aR[k] = {}))[aG]) && aN[0] === q) {
                  aM = aN[1];
                } else {
                  while (aS = ++aP && aS && aS[aT] || (aM = aP = 0) || aU.pop()) {
                    if ((aJ ? aS.nodeName.toLowerCase() === aX : aS.nodeType === 1) && ++aM) {
                      if (aW) {
                        (aS[k] || (aS[k] = {}))[aG] = [q, aM];
                      }

                      if (aS === aR) {
                        break;
                      }
                    }
                  }
                }
              }

              aM -= aF;
              return aM === aK || aM % aK === 0 && aM / aK >= 0;
            }
          };
        },
        PSEUDO: function PSEUDO(aD, aE) {
          var aG,
              aF = x.pseudos[aD] || x.setFilters[aD.toLowerCase()] || u.error("unsupported pseudo: " + aD);

          if (aF[k]) {
            return aF(aE);
          }

          if (aF.length > 1) {
            aG = [aD, aD, "", aE];
            return x.setFilters.hasOwnProperty(aD.toLowerCase()) ? E(function (aK, aI) {
              var aL,
                  aH = aF(aK, aE),
                  aJ = aH.length;

              while (aJ--) {
                aL = B.call(aK, aH[aJ]);
                aK[aL] = !(aI[aL] = aH[aJ]);
              }
            }) : function (aH) {
              return aF(aH, 0, aG);
            };
          }

          return aF;
        }
      },
      pseudos: {
        not: E(function (aG) {
          var aF = [],
              aE = [],
              aD = T(aG.replace(G, "$1"));
          return aD[k] ? E(function (aN, aI, aK, aM) {
            var aJ,
                aH = aD(aN, null, aM, []),
                aL = aN.length;

            while (aL--) {
              if (aJ = aH[aL]) {
                aN[aL] = !(aI[aL] = aJ);
              }
            }
          }) : function (aI, aJ, aH) {
            aF[0] = aI;
            aD(aF, null, aH, aE);
            return !aE.pop();
          };
        }),
        has: E(function (aD) {
          return function (aE) {
            return u(aD, aE).length > 0;
          };
        }),
        contains: E(function (aD) {
          return function (aE) {
            return (aE.textContent || aE.innerText || P(aE)).indexOf(aD) > -1;
          };
        }),
        lang: E(function (aD) {
          if (!p.test(aD || "")) {
            u.error("unsupported lang: " + aD);
          }

          aD = aD.replace(y, C).toLowerCase();
          return function (aE) {
            var aF;

            do {
              if (aF = F ? aE.lang : aE.getAttribute("xml:lang") || aE.getAttribute("lang")) {
                aF = aF.toLowerCase();
                return aF === aD || aF.indexOf(aD + "-") === 0;
              }
            } while ((aE = aE.parentNode) && aE.nodeType === 1);

            return false;
          };
        }),
        target: function target(aE) {
          var aD = ai.location && ai.location.hash;
          return aD && aD.slice(1) === aE.id;
        },
        root: function root(aD) {
          return aD === aw;
        },
        focus: function focus(aD) {
          return aD === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(aD.type || aD.href || ~aD.tabIndex);
        },
        enabled: function enabled(aD) {
          return aD.disabled === false;
        },
        disabled: function disabled(aD) {
          return aD.disabled === true;
        },
        checked: function checked(aE) {
          var aD = aE.nodeName.toLowerCase();
          return aD === "input" && !!aE.checked || aD === "option" && !!aE.selected;
        },
        selected: function selected(aD) {
          if (aD.parentNode) {
            aD.parentNode.selectedIndex;
          }

          return aD.selected === true;
        },
        empty: function empty(aD) {
          for (aD = aD.firstChild; aD; aD = aD.nextSibling) {
            if (aD.nodeName > "@" || aD.nodeType === 3 || aD.nodeType === 4) {
              return false;
            }
          }

          return true;
        },
        parent: function parent(aD) {
          return !x.pseudos.empty(aD);
        },
        header: function header(aD) {
          return j.test(aD.nodeName);
        },
        input: function input(aD) {
          return ad.test(aD.nodeName);
        },
        button: function button(aD) {
          var aE = aD.nodeName.toLowerCase();
          return aE === "input" && aD.type === "button" || aE === "button";
        },
        text: function text(aD) {
          var aE;
          return aD.nodeName.toLowerCase() === "input" && aD.type === "text" && ((aE = aD.getAttribute("type")) == null || aE.toLowerCase() === aD.type);
        },
        first: am(function () {
          return [0];
        }),
        last: am(function (aE, aD) {
          return [aD - 1];
        }),
        eq: am(function (aF, aD, aE) {
          return [aE < 0 ? aE + aD : aE];
        }),
        even: am(function (aF, aD) {
          var aE = 0;

          for (; aE < aD; aE += 2) {
            aF.push(aE);
          }

          return aF;
        }),
        odd: am(function (aF, aD) {
          var aE = 1;

          for (; aE < aD; aE += 2) {
            aF.push(aE);
          }

          return aF;
        }),
        lt: am(function (aG, aD, aE) {
          var aF = aE < 0 ? aE + aD : aE;

          for (; --aF >= 0;) {
            aG.push(aF);
          }

          return aG;
        }),
        gt: am(function (aG, aD, aE) {
          var aF = aE < 0 ? aE + aD : aE;

          for (; ++aF < aD;) {
            aG.push(aF);
          }

          return aG;
        })
      }
    };
    x.pseudos.nth = x.pseudos.eq;

    for (z in {
      radio: true,
      checkbox: true,
      file: true,
      password: true,
      image: true
    }) {
      x.pseudos[z] = t(z);
    }

    for (z in {
      submit: true,
      reset: true
    }) {
      x.pseudos[z] = aC(z);
    }

    function l() {}

    l.prototype = x.filters = x.pseudos;
    x.setFilters = new l();

    function aA(aJ, aE) {
      var aM,
          aI,
          aG,
          aF,
          aH,
          aL,
          aD,
          aK = ap[aJ + " "];

      if (aK) {
        return aE ? 0 : aK.slice(0);
      }

      aH = aJ;
      aL = [];
      aD = x.preFilter;

      while (aH) {
        if (!aM || (aI = al.exec(aH))) {
          if (aI) {
            aH = aH.slice(aI[0].length) || aH;
          }

          aL.push(aG = []);
        }

        aM = false;

        if (aI = D.exec(aH)) {
          aM = aI.shift();
          aG.push({
            value: aM,
            type: aI[0].replace(G, " ")
          });
          aH = aH.slice(aM.length);
        }

        for (aF in x.filter) {
          if ((aI = at[aF].exec(aH)) && (!aD[aF] || (aI = aD[aF](aI)))) {
            aM = aI.shift();
            aG.push({
              value: aM,
              type: aF,
              matches: aI
            });
            aH = aH.slice(aM.length);
          }
        }

        if (!aM) {
          break;
        }
      }

      return aE ? aH.length : aH ? u.error(aJ) : ap(aJ, aL).slice(0);
    }

    function aa(aD) {
      var aE = 0,
          aF = aD.length,
          aG = "";

      for (; aE < aF; aE++) {
        aG += aD[aE].value;
      }

      return aG;
    }

    function v(aD, aF, aE) {
      var aH = aF.dir,
          aI = aE && aH === "parentNode",
          aG = av++;
      return aF.first ? function (aJ, aK, aL) {
        while (aJ = aJ[aH]) {
          if (aJ.nodeType === 1 || aI) {
            return aD(aJ, aK, aL);
          }
        }
      } : function (aL, aN, aO) {
        var aJ,
            aP,
            aM,
            aK = q + " " + aG;

        if (aO) {
          while (aL = aL[aH]) {
            if (aL.nodeType === 1 || aI) {
              if (aD(aL, aN, aO)) {
                return true;
              }
            }
          }
        } else {
          while (aL = aL[aH]) {
            if (aL.nodeType === 1 || aI) {
              aM = aL[k] || (aL[k] = {});

              if ((aP = aM[aH]) && aP[0] === aK) {
                if ((aJ = aP[1]) === true || aJ === az) {
                  return aJ === true;
                }
              } else {
                aP = aM[aH] = [aK];
                aP[1] = aD(aL, aN, aO) || az;

                if (aP[1] === true) {
                  return true;
                }
              }
            }
          }
        }
      };
    }

    function a(aD) {
      return aD.length > 1 ? function (aE, aF, aH) {
        var aG = aD.length;

        while (aG--) {
          if (!aD[aG](aE, aF, aH)) {
            return false;
          }
        }

        return true;
      } : aD[0];
    }

    function aq(aD, aM, aL, aK, aH) {
      var aJ,
          aE = [],
          aI = 0,
          aG = aD.length,
          aF = aM != null;

      for (; aI < aG; aI++) {
        if (aJ = aD[aI]) {
          if (!aL || aL(aJ, aK, aH)) {
            aE.push(aJ);

            if (aF) {
              aM.push(aI);
            }
          }
        }
      }

      return aE;
    }

    function M(aF, aG, aD, aE, aI, aH) {
      if (aE && !aE[k]) {
        aE = M(aE);
      }

      if (aI && !aI[k]) {
        aI = M(aI, aH);
      }

      return E(function (aV, aL, aQ, aJ) {
        var aU,
            aK,
            aO,
            aP = [],
            aT = [],
            aR = aL.length,
            aS = aV || w(aG || "*", aQ.nodeType ? [aQ] : aQ, []),
            aN = aF && (aV || !aG) ? aq(aS, aP, aF, aQ, aJ) : aS,
            aM = aD ? aI || (aV ? aF : aR || aE) ? [] : aL : aN;

        if (aD) {
          aD(aN, aM, aQ, aJ);
        }

        if (aE) {
          aU = aq(aM, aT);
          aE(aU, [], aQ, aJ);
          aK = aU.length;

          while (aK--) {
            if (aO = aU[aK]) {
              aM[aT[aK]] = !(aN[aT[aK]] = aO);
            }
          }
        }

        if (aV) {
          if (aI || aF) {
            if (aI) {
              aU = [];
              aK = aM.length;

              while (aK--) {
                if (aO = aM[aK]) {
                  aU.push(aN[aK] = aO);
                }
              }

              aI(null, aM = [], aU, aJ);
            }

            aK = aM.length;

            while (aK--) {
              if ((aO = aM[aK]) && (aU = aI ? B.call(aV, aO) : aP[aK]) > -1) {
                aV[aU] = !(aL[aU] = aO);
              }
            }
          }
        } else {
          aM = aq(aM === aL ? aM.splice(aR, aM.length) : aM);

          if (aI) {
            aI(null, aL, aM, aJ);
          } else {
            V.apply(aL, aM);
          }
        }
      });
    }

    function ae(aN) {
      var aH,
          aE,
          aG,
          aD = aN.length,
          aK = x.relative[aN[0].type],
          aJ = aK || x.relative[" "],
          aF = aK ? 1 : 0,
          aM = v(function (aO) {
        return aO === aH;
      }, aJ, true),
          aL = v(function (aO) {
        return B.call(aH, aO) > -1;
      }, aJ, true),
          aI = [function (aO, aP, aQ) {
        return !aK && (aQ || aP !== f) || ((aH = aP).nodeType ? aM(aO, aP, aQ) : aL(aO, aP, aQ));
      }];

      for (; aF < aD; aF++) {
        if (aE = x.relative[aN[aF].type]) {
          aI = [v(a(aI), aE)];
        } else {
          aE = x.filter[aN[aF].type].apply(null, aN[aF].matches);

          if (aE[k]) {
            aG = ++aF;

            for (; aG < aD; aG++) {
              if (x.relative[aN[aG].type]) {
                break;
              }
            }

            return M(aF > 1 && a(aI), aF > 1 && aa(aN.slice(0, aF - 1).concat({
              value: aN[aF - 2].type === " " ? "*" : ""
            })).replace(G, "$1"), aE, aF < aG && ae(aN.slice(aF, aG)), aG < aD && ae(aN = aN.slice(aG)), aG < aD && aa(aN));
          }

          aI.push(aE);
        }
      }

      return a(aI);
    }

    function S(aE, aF) {
      var aI = 0,
          aH = aF.length > 0,
          aD = aE.length > 0,
          aG = function aG(aX, aR, aN, aV, aJ) {
        var aT,
            aP,
            aL,
            aS = [],
            aY = 0,
            aK = "0",
            aU = aX && [],
            aO = aJ != null,
            aM = f,
            aQ = aX || aD && x.find.TAG("*", aJ && aR.parentNode || aR),
            aW = q += aM == null ? 1 : Math.random() || 0.1;

        if (aO) {
          f = aR !== n && aR;
          az = aI;
        }

        for (; (aT = aQ[aK]) != null; aK++) {
          if (aD && aT) {
            aP = 0;

            while (aL = aE[aP++]) {
              if (aL(aT, aR, aN)) {
                aV.push(aT);
                break;
              }
            }

            if (aO) {
              q = aW;
              az = ++aI;
            }
          }

          if (aH) {
            if (aT = !aL && aT) {
              aY--;
            }

            if (aX) {
              aU.push(aT);
            }
          }
        }

        aY += aK;

        if (aH && aK !== aY) {
          aP = 0;

          while (aL = aF[aP++]) {
            aL(aU, aS, aR, aN);
          }

          if (aX) {
            if (aY > 0) {
              while (aK--) {
                if (!(aU[aK] || aS[aK])) {
                  aS[aK] = m.call(aV);
                }
              }
            }

            aS = aq(aS);
          }

          V.apply(aV, aS);

          if (aO && !aX && aS.length > 0 && aY + aF.length > 1) {
            u.uniqueSort(aV);
          }
        }

        if (aO) {
          q = aW;
          f = aM;
        }

        return aU;
      };

      return aH ? E(aG) : aG;
    }

    T = u.compile = function (aH, aI) {
      var aF,
          aG = [],
          aD = [],
          aE = N[aH + " "];

      if (!aE) {
        if (!aI) {
          aI = aA(aH);
        }

        aF = aI.length;

        while (aF--) {
          aE = ae(aI[aF]);

          if (aE[k]) {
            aG.push(aE);
          } else {
            aD.push(aE);
          }
        }

        aE = N(aH, S(aD, aG));
      }

      return aE;
    };

    function w(aG, aD, aE) {
      var aF = 0,
          aH = aD.length;

      for (; aF < aH; aF++) {
        u(aG, aD[aF], aE);
      }

      return aE;
    }

    function g(aL, aD, aK, aH) {
      var aJ,
          aF,
          aM,
          aE,
          aG,
          aI = aA(aL);

      if (!aH) {
        if (aI.length === 1) {
          aF = aI[0] = aI[0].slice(0);

          if (aF.length > 2 && (aM = aF[0]).type === "ID" && s.getById && aD.nodeType === 9 && F && x.relative[aF[1].type]) {
            aD = (x.find.ID(aM.matches[0].replace(y, C), aD) || [])[0];

            if (!aD) {
              return aK;
            }

            aL = aL.slice(aF.shift().value.length);
          }

          aJ = at.needsContext.test(aL) ? 0 : aF.length;

          while (aJ--) {
            aM = aF[aJ];

            if (x.relative[aE = aM.type]) {
              break;
            }

            if (aG = x.find[aE]) {
              if (aH = aG(aM.matches[0].replace(y, C), A.test(aF[0].type) && aD.parentNode || aD)) {
                aF.splice(aJ, 1);
                aL = aH.length && aa(aF);

                if (!aL) {
                  V.apply(aK, aH);
                  return aK;
                }

                break;
              }
            }
          }
        }
      }

      T(aL, aI)(aH, aD, !F, aK, A.test(aL));
      return aK;
    }

    s.sortStable = k.split("").sort(R).join("") === k;
    s.detectDuplicates = U;
    au();
    s.sortDetached = ax(function (aD) {
      return aD.compareDocumentPosition(n.createElement("div")) & 1;
    });

    if (!ax(function (aD) {
      aD.innerHTML = "<a href='#'></a>";
      return aD.firstChild.getAttribute("href") === "#";
    })) {
      b("type|href|height|width", function (aE, aF, aD) {
        if (!aD) {
          return aE.getAttribute(aF, aF.toLowerCase() === "type" ? 1 : 2);
        }
      });
    }

    if (!s.attributes || !ax(function (aD) {
      aD.innerHTML = "<input/>";
      aD.firstChild.setAttribute("value", "");
      return aD.firstChild.getAttribute("value") === "";
    })) {
      b("value", function (aE, aF, aD) {
        if (!aD && aE.nodeName.toLowerCase() === "input") {
          return aE.defaultValue;
        }
      });
    }

    if (!ax(function (aD) {
      return aD.getAttribute("disabled") == null;
    })) {
      b(ac, function (aF, aG, aD) {
        var aE;

        if (!aD) {
          return (aE = aF.getAttributeNode(aG)) && aE.specified ? aE.value : aF[aG] === true ? aG.toLowerCase() : null;
        }
      });
    }

    eq.find = u;
    eq.expr = u.selectors;
    eq.expr[":"] = eq.expr.pseudos;
    eq.unique = u.uniqueSort;
    eq.text = u.getText;
    eq.isXMLDoc = u.isXML;
    eq.contains = u.contains;
  })(eI);

  var dx = {};

  function dF(a) {
    var b = dx[a] = {};
    eq.each(a.match(dW) || [], function (c, d) {
      b[d] = true;
    });
    return b;
  }

  eq.Callbacks = function (a) {
    a = typeof a === "string" ? dx[a] || dF(a) : eq.extend({}, a);

    var h,
        j,
        k,
        g,
        f,
        l,
        d = [],
        c = !a.once && [],
        i = function i(m) {
      j = a.memory && m;
      k = true;
      f = l || 0;
      l = 0;
      g = d.length;
      h = true;

      for (; d && f < g; f++) {
        if (d[f].apply(m[0], m[1]) === false && a.stopOnFalse) {
          j = false;
          break;
        }
      }

      h = false;

      if (d) {
        if (c) {
          if (c.length) {
            i(c.shift());
          }
        } else {
          if (j) {
            d = [];
          } else {
            b.disable();
          }
        }
      }
    },
        b = {
      add: function add() {
        if (d) {
          var n = d.length;

          (function m(o) {
            eq.each(o, function (q, r) {
              var p = eq.type(r);

              if (p === "function") {
                if (!a.unique || !b.has(r)) {
                  d.push(r);
                }
              } else {
                if (r && r.length && p !== "string") {
                  m(r);
                }
              }
            });
          })(arguments);

          if (h) {
            g = d.length;
          } else {
            if (j) {
              l = n;
              i(j);
            }
          }
        }

        return this;
      },
      remove: function remove() {
        if (d) {
          eq.each(arguments, function (o, n) {
            var m;

            while ((m = eq.inArray(n, d, m)) > -1) {
              d.splice(m, 1);

              if (h) {
                if (m <= g) {
                  g--;
                }

                if (m <= f) {
                  f--;
                }
              }
            }
          });
        }

        return this;
      },
      has: function has(m) {
        return m ? eq.inArray(m, d) > -1 : !!(d && d.length);
      },
      empty: function empty() {
        d = [];
        g = 0;
        return this;
      },
      disable: function disable() {
        d = c = j = cG;
        return this;
      },
      disabled: function disabled() {
        return !d;
      },
      lock: function lock() {
        c = cG;

        if (!j) {
          b.disable();
        }

        return this;
      },
      locked: function locked() {
        return !c;
      },
      fireWith: function fireWith(n, m) {
        if (d && (!k || c)) {
          m = m || [];
          m = [n, m.slice ? m.slice() : m];

          if (h) {
            c.push(m);
          } else {
            i(m);
          }
        }

        return this;
      },
      fire: function fire() {
        b.fireWith(this, arguments);
        return this;
      },
      fired: function fired() {
        return !!k;
      }
    };

    return b;
  };

  eq.extend({
    Deferred: function Deferred(c) {
      var d = [["resolve", "done", eq.Callbacks("once memory"), "resolved"], ["reject", "fail", eq.Callbacks("once memory"), "rejected"], ["notify", "progress", eq.Callbacks("memory")]],
          b = "pending",
          a = {
        state: function state() {
          return b;
        },
        always: function always() {
          f.done(arguments).fail(arguments);
          return this;
        },
        then: function then() {
          var g = arguments;
          return eq.Deferred(function (h) {
            eq.each(d, function (k, l) {
              var i = l[0],
                  j = eq.isFunction(g[k]) && g[k];
              f[l[1]](function () {
                var m = j && j.apply(this, arguments);

                if (m && eq.isFunction(m.promise)) {
                  m.promise().done(h.resolve).fail(h.reject).progress(h.notify);
                } else {
                  h[i + "With"](this === a ? h.promise() : this, j ? [m] : arguments);
                }
              });
            });
            g = null;
          }).promise();
        },
        promise: function promise(g) {
          return g != null ? eq.extend(g, a) : a;
        }
      },
          f = {};
      a.pipe = a.then;
      eq.each(d, function (i, j) {
        var g = j[2],
            h = j[3];
        a[j[1]] = g.add;

        if (h) {
          g.add(function () {
            b = h;
          }, d[i ^ 1][2].disable, d[2][2].lock);
        }

        f[j[0]] = function () {
          f[j[0] + "With"](this === f ? a : this, arguments);
          return this;
        };

        f[j[0] + "With"] = g.fireWith;
      });
      a.promise(f);

      if (c) {
        c.call(f, f);
      }

      return f;
    },
    when: function when(g) {
      var k = 0,
          d = dr.call(arguments),
          j = d.length,
          i = j !== 1 || g && eq.isFunction(g.promise) ? j : 0,
          a = i === 1 ? g : eq.Deferred(),
          h = function h(n, m, l) {
        return function (o) {
          m[n] = this;
          l[n] = arguments.length > 1 ? dr.call(arguments) : o;

          if (l === b) {
            a.notifyWith(m, l);
          } else {
            if (! --i) {
              a.resolveWith(m, l);
            }
          }
        };
      },
          b,
          f,
          c;

      if (j > 1) {
        b = new Array(j);
        f = new Array(j);
        c = new Array(j);

        for (; k < j; k++) {
          if (d[k] && eq.isFunction(d[k].promise)) {
            d[k].promise().done(h(k, c, d)).fail(a.reject).progress(h(k, f, b));
          } else {
            --i;
          }
        }
      }

      if (!i) {
        a.resolveWith(c, d);
      }

      return a.promise();
    }
  });

  eq.support = function (a) {
    var b,
        d,
        f,
        c,
        g,
        l,
        i,
        m,
        k,
        j = dO.createElement("div");
    j.setAttribute("className", "t");
    j.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
    b = j.getElementsByTagName("*") || [];
    d = j.getElementsByTagName("a")[0];

    if (!d || !d.style || !b.length) {
      return a;
    }

    c = dO.createElement("select");
    l = c.appendChild(dO.createElement("option"));
    f = j.getElementsByTagName("input")[0];
    d.style.cssText = "top:1px;float:left;opacity:.5";
    a.getSetAttribute = j.className !== "t";
    a.leadingWhitespace = j.firstChild.nodeType === 3;
    a.tbody = !j.getElementsByTagName("tbody").length;
    a.htmlSerialize = !!j.getElementsByTagName("link").length;
    a.style = /top/.test(d.getAttribute("style"));
    a.hrefNormalized = d.getAttribute("href") === "/a";
    a.opacity = /^0.5/.test(d.style.opacity);
    a.cssFloat = !!d.style.cssFloat;
    a.checkOn = !!f.value;
    a.optSelected = l.selected;
    a.enctype = !!dO.createElement("form").enctype;
    a.html5Clone = dO.createElement("nav").cloneNode(true).outerHTML !== "<:nav></:nav>";
    a.inlineBlockNeedsLayout = false;
    a.shrinkWrapBlocks = false;
    a.pixelPosition = false;
    a.deleteExpando = true;
    a.noCloneEvent = true;
    a.reliableMarginRight = true;
    a.boxSizingReliable = true;
    f.checked = true;
    a.noCloneChecked = f.cloneNode(true).checked;
    c.disabled = true;
    a.optDisabled = !l.disabled;

    try {
      delete j.test;
    } catch (h) {
      a.deleteExpando = false;
    }

    f = dO.createElement("input");
    f.setAttribute("value", "");
    a.input = f.getAttribute("value") === "";
    f.value = "t";
    f.setAttribute("type", "radio");
    a.radioValue = f.value === "t";
    f.setAttribute("checked", "t");
    f.setAttribute("name", "t");
    g = dO.createDocumentFragment();
    g.appendChild(f);
    a.appendChecked = f.checked;
    a.checkClone = g.cloneNode(true).cloneNode(true).lastChild.checked;

    if (j.attachEvent) {
      j.attachEvent("onclick", function () {
        a.noCloneEvent = false;
      });
      j.cloneNode(true).click();
    }

    for (k in {
      submit: true,
      change: true,
      focusin: true
    }) {
      j.setAttribute(i = "on" + k, "t");
      a[k + "Bubbles"] = i in eI || j.attributes[i].expando === false;
    }

    j.style.backgroundClip = "content-box";
    j.cloneNode(true).style.backgroundClip = "";
    a.clearCloneStyle = j.style.backgroundClip === "content-box";

    for (k in eq(a)) {
      break;
    }

    a.ownLast = k !== "0";
    eq(function () {
      var q,
          n,
          o,
          p = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
          r = dO.getElementsByTagName("body")[0];

      if (!r) {
        return;
      }

      q = dO.createElement("div");
      q.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px";
      r.appendChild(q).appendChild(j);
      j.innerHTML = "<table><tr><td></td><td>t</td></tr></table>";
      o = j.getElementsByTagName("td");
      o[0].style.cssText = "padding:0;margin:0;border:0;display:none";
      m = o[0].offsetHeight === 0;
      o[0].style.display = "";
      o[1].style.display = "none";
      a.reliableHiddenOffsets = m && o[0].offsetHeight === 0;
      j.innerHTML = "";
      j.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;";
      eq.swap(r, r.style.zoom != null ? {
        zoom: 1
      } : {}, function () {
        a.boxSizing = j.offsetWidth === 4;
      });

      if (eI.getComputedStyle) {
        a.pixelPosition = (eI.getComputedStyle(j, null) || {}).top !== "1%";
        a.boxSizingReliable = (eI.getComputedStyle(j, null) || {
          width: "4px"
        }).width === "4px";
        n = j.appendChild(dO.createElement("div"));
        n.style.cssText = j.style.cssText = p;
        n.style.marginRight = n.style.width = "0";
        j.style.width = "1px";
        a.reliableMarginRight = !parseFloat((eI.getComputedStyle(n, null) || {}).marginRight);
      }

      if (_typeof(j.style.zoom) !== dM) {
        j.innerHTML = "";
        j.style.cssText = p + "width:1px;padding:1px;display:inline;zoom:1";
        a.inlineBlockNeedsLayout = j.offsetWidth === 3;
        j.style.display = "block";
        j.innerHTML = "<div></div>";
        j.firstChild.style.width = "5px";
        a.shrinkWrapBlocks = j.offsetWidth !== 3;

        if (a.inlineBlockNeedsLayout) {
          r.style.zoom = 1;
        }
      }

      r.removeChild(q);
      q = j = o = n = null;
    });
    b = c = g = l = d = f = null;
    return a;
  }({});

  var cT = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
      b5 = /([A-Z])/g;

  function b9(j, i, f, g) {
    if (!eq.acceptData(j)) {
      return;
    }

    var c,
        d,
        b = eq.expando,
        a = j.nodeType,
        k = a ? eq.cache : j,
        h = a ? j[b] : j[b] && b;

    if ((!h || !k[h] || !g && !k[h].data) && f === cG && typeof i === "string") {
      return;
    }

    if (!h) {
      if (a) {
        h = j[b] = ch.pop() || eq.guid++;
      } else {
        h = b;
      }
    }

    if (!k[h]) {
      k[h] = a ? {} : {
        toJSON: eq.noop
      };
    }

    if (_typeof(i) === "object" || typeof i === "function") {
      if (g) {
        k[h] = eq.extend(k[h], i);
      } else {
        k[h].data = eq.extend(k[h].data, i);
      }
    }

    d = k[h];

    if (!g) {
      if (!d.data) {
        d.data = {};
      }

      d = d.data;
    }

    if (f !== cG) {
      d[eq.camelCase(i)] = f;
    }

    if (typeof i === "string") {
      c = d[i];

      if (c == null) {
        c = d[eq.camelCase(i)];
      }
    } else {
      c = d;
    }

    return c;
  }

  function em(a, g, i) {
    if (!eq.acceptData(a)) {
      return;
    }

    var d,
        b,
        h = a.nodeType,
        f = h ? eq.cache : a,
        c = h ? a[eq.expando] : eq.expando;

    if (!f[c]) {
      return;
    }

    if (g) {
      d = i ? f[c] : f[c].data;

      if (d) {
        if (!eq.isArray(g)) {
          if (g in d) {
            g = [g];
          } else {
            g = eq.camelCase(g);

            if (g in d) {
              g = [g];
            } else {
              g = g.split(" ");
            }
          }
        } else {
          g = g.concat(eq.map(g, eq.camelCase));
        }

        b = g.length;

        while (b--) {
          delete d[g[b]];
        }

        if (i ? !dk(d) : !eq.isEmptyObject(d)) {
          return;
        }
      }
    }

    if (!i) {
      delete f[c].data;

      if (!dk(f[c])) {
        return;
      }
    }

    if (h) {
      eq.cleanData([a], true);
    } else {
      if (eq.support.deleteExpando || f != f.window) {
        delete f[c];
      } else {
        f[c] = null;
      }
    }
  }

  eq.extend({
    cache: {},
    noData: {
      applet: true,
      embed: true,
      object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
    },
    hasData: function hasData(a) {
      a = a.nodeType ? eq.cache[a[eq.expando]] : a[eq.expando];
      return !!a && !dk(a);
    },
    data: function data(c, a, b) {
      return b9(c, a, b);
    },
    removeData: function removeData(a, b) {
      return em(a, b);
    },
    _data: function _data(c, a, b) {
      return b9(c, a, b, true);
    },
    _removeData: function _removeData(a, b) {
      return em(a, b, true);
    },
    acceptData: function acceptData(a) {
      if (a.nodeType && a.nodeType !== 1 && a.nodeType !== 9) {
        return false;
      }

      var b = a.nodeName && eq.noData[a.nodeName.toLowerCase()];
      return !b || b !== true && a.getAttribute("classid") === b;
    }
  });
  eq.fn.extend({
    data: function data(b, c) {
      var g,
          h,
          f = null,
          a = 0,
          d = this[0];

      if (b === cG) {
        if (this.length) {
          f = eq.data(d);

          if (d.nodeType === 1 && !eq._data(d, "parsedAttrs")) {
            g = d.attributes;

            for (; a < g.length; a++) {
              h = g[a].name;

              if (h.indexOf("data-") === 0) {
                h = eq.camelCase(h.slice(5));
                ez(d, h, f[h]);
              }
            }

            eq._data(d, "parsedAttrs", true);
          }
        }

        return f;
      }

      if (_typeof(b) === "object") {
        return this.each(function () {
          eq.data(this, b);
        });
      }

      return arguments.length > 1 ? this.each(function () {
        eq.data(this, b, c);
      }) : d ? ez(d, b, eq.data(d, b)) : null;
    },
    removeData: function removeData(a) {
      return this.each(function () {
        eq.removeData(this, a);
      });
    }
  });

  function ez(b, c, a) {
    if (a === cG && b.nodeType === 1) {
      var d = "data-" + c.replace(b5, "-$1").toLowerCase();
      a = b.getAttribute(d);

      if (typeof a === "string") {
        try {
          a = a === "true" ? true : a === "false" ? false : a === "null" ? null : +a + "" === a ? +a : cT.test(a) ? eq.parseJSON(a) : a;
        } catch (f) {}

        eq.data(b, c, a);
      } else {
        a = cG;
      }
    }

    return a;
  }

  function dk(a) {
    var b;

    for (b in a) {
      if (b === "data" && eq.isEmptyObject(a[b])) {
        continue;
      }

      if (b !== "toJSON") {
        return false;
      }
    }

    return true;
  }

  eq.extend({
    queue: function queue(d, a, c) {
      var b;

      if (d) {
        a = (a || "fx") + "queue";
        b = eq._data(d, a);

        if (c) {
          if (!b || eq.isArray(c)) {
            b = eq._data(d, a, eq.makeArray(c));
          } else {
            b.push(c);
          }
        }

        return b || [];
      }
    },
    dequeue: function dequeue(h, a) {
      a = a || "fx";

      var g = eq.queue(h, a),
          c = g.length,
          b = g.shift(),
          f = eq._queueHooks(h, a),
          d = function d() {
        eq.dequeue(h, a);
      };

      if (b === "inprogress") {
        b = g.shift();
        c--;
      }

      if (b) {
        if (a === "fx") {
          g.unshift("inprogress");
        }

        delete f.stop;
        b.call(h, d, f);
      }

      if (!c && f) {
        f.empty.fire();
      }
    },
    _queueHooks: function _queueHooks(b, c) {
      var a = c + "queueHooks";
      return eq._data(b, a) || eq._data(b, a, {
        empty: eq.Callbacks("once memory").add(function () {
          eq._removeData(b, c + "queue");

          eq._removeData(b, a);
        })
      });
    }
  });
  eq.fn.extend({
    queue: function queue(a, c) {
      var b = 2;

      if (typeof a !== "string") {
        c = a;
        a = "fx";
        b--;
      }

      if (arguments.length < b) {
        return eq.queue(this[0], a);
      }

      return c === cG ? this : this.each(function () {
        var d = eq.queue(this, a, c);

        eq._queueHooks(this, a);

        if (a === "fx" && d[0] !== "inprogress") {
          eq.dequeue(this, a);
        }
      });
    },
    dequeue: function dequeue(a) {
      return this.each(function () {
        eq.dequeue(this, a);
      });
    },
    delay: function delay(a, b) {
      a = eq.fx ? eq.fx.speeds[a] || a : a;
      b = b || "fx";
      return this.queue(b, function (c, d) {
        var f = setTimeout(c, a);

        d.stop = function () {
          clearTimeout(f);
        };
      });
    },
    clearQueue: function clearQueue(a) {
      return this.queue(a || "fx", []);
    },
    promise: function promise(g, d) {
      var h,
          b = 1,
          c = eq.Deferred(),
          i = this,
          a = this.length,
          f = function f() {
        if (! --b) {
          c.resolveWith(i, [i]);
        }
      };

      if (typeof g !== "string") {
        d = g;
        g = cG;
      }

      g = g || "fx";

      while (a--) {
        h = eq._data(i[a], g + "queueHooks");

        if (h && h.empty) {
          b++;
          h.empty.add(f);
        }
      }

      f();
      return c.promise(d);
    }
  });
  var dE,
      d5,
      di = /[\t\r\n\f]/g,
      cU = /\r/g,
      ev = /^(?:input|select|textarea|button|object)$/i,
      cF = /^(?:a|area)$/i,
      c5 = /^(?:checked|selected)$/i,
      dp = eq.support.getSetAttribute,
      ep = eq.support.input;
  eq.fn.extend({
    attr: function attr(b, a) {
      return eq.access(this, eq.attr, b, a, arguments.length > 1);
    },
    removeAttr: function removeAttr(a) {
      return this.each(function () {
        eq.removeAttr(this, a);
      });
    },
    prop: function prop(b, a) {
      return eq.access(this, eq.prop, b, a, arguments.length > 1);
    },
    removeProp: function removeProp(a) {
      a = eq.propFix[a] || a;
      return this.each(function () {
        try {
          this[a] = cG;
          delete this[a];
        } catch (b) {}
      });
    },
    addClass: function addClass(b) {
      var h,
          i,
          a,
          f,
          j,
          g = 0,
          d = this.length,
          c = typeof b === "string" && b;

      if (eq.isFunction(b)) {
        return this.each(function (k) {
          eq(this).addClass(b.call(this, k, this.className));
        });
      }

      if (c) {
        h = (b || "").match(dW) || [];

        for (; g < d; g++) {
          i = this[g];
          a = i.nodeType === 1 && (i.className ? (" " + i.className + " ").replace(di, " ") : " ");

          if (a) {
            j = 0;

            while (f = h[j++]) {
              if (a.indexOf(" " + f + " ") < 0) {
                a += f + " ";
              }
            }

            i.className = eq.trim(a);
          }
        }
      }

      return this;
    },
    removeClass: function removeClass(b) {
      var h,
          i,
          a,
          f,
          j,
          g = 0,
          d = this.length,
          c = arguments.length === 0 || typeof b === "string" && b;

      if (eq.isFunction(b)) {
        return this.each(function (k) {
          eq(this).removeClass(b.call(this, k, this.className));
        });
      }

      if (c) {
        h = (b || "").match(dW) || [];

        for (; g < d; g++) {
          i = this[g];
          a = i.nodeType === 1 && (i.className ? (" " + i.className + " ").replace(di, " ") : "");

          if (a) {
            j = 0;

            while (f = h[j++]) {
              while (a.indexOf(" " + f + " ") >= 0) {
                a = a.replace(" " + f + " ", " ");
              }
            }

            i.className = b ? eq.trim(a) : "";
          }
        }
      }

      return this;
    },
    toggleClass: function toggleClass(b, a) {
      var c = _typeof(b);

      if (typeof a === "boolean" && c === "string") {
        return a ? this.addClass(b) : this.removeClass(b);
      }

      if (eq.isFunction(b)) {
        return this.each(function (d) {
          eq(this).toggleClass(b.call(this, d, this.className, a), a);
        });
      }

      return this.each(function () {
        if (c === "string") {
          var f,
              g = 0,
              h = eq(this),
              d = b.match(dW) || [];

          while (f = d[g++]) {
            if (h.hasClass(f)) {
              h.removeClass(f);
            } else {
              h.addClass(f);
            }
          }
        } else {
          if (c === dM || c === "boolean") {
            if (this.className) {
              eq._data(this, "__className__", this.className);
            }

            this.className = this.className || b === false ? "" : eq._data(this, "__className__") || "";
          }
        }
      });
    },
    hasClass: function hasClass(b) {
      var c = " " + b + " ",
          d = 0,
          a = this.length;

      for (; d < a; d++) {
        if (this[d].nodeType === 1 && (" " + this[d].className + " ").replace(di, " ").indexOf(c) >= 0) {
          return true;
        }
      }

      return false;
    },
    val: function val(b) {
      var d,
          f,
          a,
          c = this[0];

      if (!arguments.length) {
        if (c) {
          f = eq.valHooks[c.type] || eq.valHooks[c.nodeName.toLowerCase()];

          if (f && "get" in f && (d = f.get(c, "value")) !== cG) {
            return d;
          }

          d = c.value;
          return typeof d === "string" ? d.replace(cU, "") : d == null ? "" : d;
        }

        return;
      }

      a = eq.isFunction(b);
      return this.each(function (h) {
        var g;

        if (this.nodeType !== 1) {
          return;
        }

        if (a) {
          g = b.call(this, h, eq(this).val());
        } else {
          g = b;
        }

        if (g == null) {
          g = "";
        } else {
          if (typeof g === "number") {
            g += "";
          } else {
            if (eq.isArray(g)) {
              g = eq.map(g, function (i) {
                return i == null ? "" : i + "";
              });
            }
          }
        }

        f = eq.valHooks[this.type] || eq.valHooks[this.nodeName.toLowerCase()];

        if (!f || !("set" in f) || f.set(this, g, "value") === cG) {
          this.value = g;
        }
      });
    }
  });
  eq.extend({
    valHooks: {
      option: {
        get: function get(b) {
          var a = eq.find.attr(b, "value");
          return a != null ? a : b.text;
        }
      },
      select: {
        get: function get(i) {
          var c,
              j,
              a = i.options,
              f = i.selectedIndex,
              h = i.type === "select-one" || f < 0,
              b = h ? null : [],
              d = h ? f + 1 : a.length,
              g = f < 0 ? d : h ? f : 0;

          for (; g < d; g++) {
            j = a[g];

            if ((j.selected || g === f) && (eq.support.optDisabled ? !j.disabled : j.getAttribute("disabled") === null) && (!j.parentNode.disabled || !eq.nodeName(j.parentNode, "optgroup"))) {
              c = eq(j).val();

              if (h) {
                return c;
              }

              b.push(c);
            }
          }

          return b;
        },
        set: function set(a, h) {
          var c,
              b,
              g = a.options,
              f = eq.makeArray(h),
              d = g.length;

          while (d--) {
            b = g[d];

            if (b.selected = eq.inArray(eq(b).val(), f) >= 0) {
              c = true;
            }
          }

          if (!c) {
            a.selectedIndex = -1;
          }

          return f;
        }
      }
    },
    attr: function attr(a, b, g) {
      var f,
          d,
          c = a.nodeType;

      if (!a || c === 3 || c === 8 || c === 2) {
        return;
      }

      if (_typeof(a.getAttribute) === dM) {
        return eq.prop(a, b, g);
      }

      if (c !== 1 || !eq.isXMLDoc(a)) {
        b = b.toLowerCase();
        f = eq.attrHooks[b] || (eq.expr.match.bool.test(b) ? d5 : dE);
      }

      if (g !== cG) {
        if (g === null) {
          eq.removeAttr(a, b);
        } else {
          if (f && "set" in f && (d = f.set(a, g, b)) !== cG) {
            return d;
          } else {
            a.setAttribute(b, g + "");
            return g;
          }
        }
      } else {
        if (f && "get" in f && (d = f.get(a, b)) !== null) {
          return d;
        } else {
          d = eq.find.attr(a, b);
          return d == null ? cG : d;
        }
      }
    },
    removeAttr: function removeAttr(d, a) {
      var g,
          b,
          f = 0,
          c = a && a.match(dW);

      if (c && d.nodeType === 1) {
        while (g = c[f++]) {
          b = eq.propFix[g] || g;

          if (eq.expr.match.bool.test(g)) {
            if (ep && dp || !c5.test(g)) {
              d[b] = false;
            } else {
              d[eq.camelCase("default-" + g)] = d[b] = false;
            }
          } else {
            eq.attr(d, g, "");
          }

          d.removeAttribute(dp ? g : b);
        }
      }
    },
    attrHooks: {
      type: {
        set: function set(a, c) {
          if (!eq.support.radioValue && c === "radio" && eq.nodeName(a, "input")) {
            var b = a.value;
            a.setAttribute("type", c);

            if (b) {
              a.value = b;
            }

            return c;
          }
        }
      }
    },
    propFix: {
      "for": "htmlFor",
      "class": "className"
    },
    prop: function prop(h, b, c) {
      var f,
          g,
          a,
          d = h.nodeType;

      if (!h || d === 3 || d === 8 || d === 2) {
        return;
      }

      a = d !== 1 || !eq.isXMLDoc(h);

      if (a) {
        b = eq.propFix[b] || b;
        g = eq.propHooks[b];
      }

      if (c !== cG) {
        return g && "set" in g && (f = g.set(h, c, b)) !== cG ? f : h[b] = c;
      } else {
        return g && "get" in g && (f = g.get(h, b)) !== null ? f : h[b];
      }
    },
    propHooks: {
      tabIndex: {
        get: function get(a) {
          var b = eq.find.attr(a, "tabindex");
          return b ? parseInt(b, 10) : ev.test(a.nodeName) || cF.test(a.nodeName) && a.href ? 0 : -1;
        }
      }
    }
  });
  d5 = {
    set: function set(c, b, a) {
      if (b === false) {
        eq.removeAttr(c, a);
      } else {
        if (ep && dp || !c5.test(a)) {
          c.setAttribute(!dp && eq.propFix[a] || a, a);
        } else {
          c[eq.camelCase("default-" + a)] = c[a] = true;
        }
      }

      return a;
    }
  };
  eq.each(eq.expr.match.bool.source.match(/\w+/g), function (b, c) {
    var a = eq.expr.attrHandle[c] || eq.find.attr;
    eq.expr.attrHandle[c] = ep && dp || !c5.test(c) ? function (f, h, d) {
      var g = eq.expr.attrHandle[h],
          i = d ? cG : (eq.expr.attrHandle[h] = cG) != a(f, h, d) ? h.toLowerCase() : null;
      eq.expr.attrHandle[h] = g;
      return i;
    } : function (f, g, d) {
      return d ? cG : f[eq.camelCase("default-" + g)] ? g.toLowerCase() : null;
    };
  });

  if (!ep || !dp) {
    eq.attrHooks.value = {
      set: function set(c, b, a) {
        if (eq.nodeName(c, "input")) {
          c.defaultValue = b;
        } else {
          return dE && dE.set(c, b, a);
        }
      }
    };
  }

  if (!dp) {
    dE = {
      set: function set(d, c, a) {
        var b = d.getAttributeNode(a);

        if (!b) {
          d.setAttributeNode(b = d.ownerDocument.createAttribute(a));
        }

        b.value = c += "";
        return a === "value" || c === d.getAttribute(a) ? c : cG;
      }
    };

    eq.expr.attrHandle.id = eq.expr.attrHandle.name = eq.expr.attrHandle.coords = function (d, a, c) {
      var b;
      return c ? cG : (b = d.getAttributeNode(a)) && b.value !== "" ? b.value : null;
    };

    eq.valHooks.button = {
      get: function get(b, c) {
        var a = b.getAttributeNode(c);
        return a && a.specified ? a.value : cG;
      },
      set: dE.set
    };
    eq.attrHooks.contenteditable = {
      set: function set(c, b, a) {
        dE.set(c, b === "" ? false : b, a);
      }
    };
    eq.each(["width", "height"], function (a, b) {
      eq.attrHooks[b] = {
        set: function set(d, c) {
          if (c === "") {
            d.setAttribute(b, "auto");
            return c;
          }
        }
      };
    });
  }

  if (!eq.support.hrefNormalized) {
    eq.each(["href", "src"], function (a, b) {
      eq.propHooks[b] = {
        get: function get(c) {
          return c.getAttribute(b, 4);
        }
      };
    });
  }

  if (!eq.support.style) {
    eq.attrHooks.style = {
      get: function get(a) {
        return a.style.cssText || cG;
      },
      set: function set(b, a) {
        return b.style.cssText = a + "";
      }
    };
  }

  if (!eq.support.optSelected) {
    eq.propHooks.selected = {
      get: function get(a) {
        var b = a.parentNode;

        if (b) {
          b.selectedIndex;

          if (b.parentNode) {
            b.parentNode.selectedIndex;
          }
        }

        return null;
      }
    };
  }

  eq.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    eq.propFix[this.toLowerCase()] = this;
  });

  if (!eq.support.enctype) {
    eq.propFix.enctype = "encoding";
  }

  eq.each(["radio", "checkbox"], function () {
    eq.valHooks[this] = {
      set: function set(b, a) {
        if (eq.isArray(a)) {
          return b.checked = eq.inArray(eq(b).val(), a) >= 0;
        }
      }
    };

    if (!eq.support.checkOn) {
      eq.valHooks[this].get = function (a) {
        return a.getAttribute("value") === null ? "on" : a.value;
      };
    }
  });
  var dT = /^(?:input|select|textarea)$/i,
      b7 = /^key/,
      d0 = /^(?:mouse|contextmenu)|click/,
      d2 = /^(?:focusinfocus|focusoutblur)$/,
      eo = /^([^.]*)(?:\.(.+)|)$/;

  function dG() {
    return true;
  }

  function cW() {
    return false;
  }

  function ci() {
    try {
      return dO.activeElement;
    } catch (a) {}
  }

  eq.event = {
    global: {},
    add: function add(f, r, o, c, d) {
      var b,
          j,
          i,
          p,
          m,
          a,
          k,
          h,
          l,
          g,
          q,
          n = eq._data(f);

      if (!n) {
        return;
      }

      if (o.handler) {
        p = o;
        o = p.handler;
        d = p.selector;
      }

      if (!o.guid) {
        o.guid = eq.guid++;
      }

      if (!(j = n.events)) {
        j = n.events = {};
      }

      if (!(a = n.handle)) {
        a = n.handle = function (s) {
          return _typeof(eq) !== dM && (!s || eq.event.triggered !== s.type) ? eq.event.dispatch.apply(a.elem, arguments) : cG;
        };

        a.elem = f;
      }

      r = (r || "").match(dW) || [""];
      i = r.length;

      while (i--) {
        b = eo.exec(r[i]) || [];
        l = q = b[1];
        g = (b[2] || "").split(".").sort();

        if (!l) {
          continue;
        }

        m = eq.event.special[l] || {};
        l = (d ? m.delegateType : m.bindType) || l;
        m = eq.event.special[l] || {};
        k = eq.extend({
          type: l,
          origType: q,
          data: c,
          handler: o,
          guid: o.guid,
          selector: d,
          needsContext: d && eq.expr.match.needsContext.test(d),
          namespace: g.join(".")
        }, p);

        if (!(h = j[l])) {
          h = j[l] = [];
          h.delegateCount = 0;

          if (!m.setup || m.setup.call(f, c, g, a) === false) {
            if (f.addEventListener) {
              f.addEventListener(l, a, false);
            } else {
              if (f.attachEvent) {
                f.attachEvent("on" + l, a);
              }
            }
          }
        }

        if (m.add) {
          m.add.call(f, k);

          if (!k.handler.guid) {
            k.handler.guid = o.guid;
          }
        }

        if (d) {
          h.splice(h.delegateCount++, 0, k);
        } else {
          h.push(k);
        }

        eq.event.global[l] = true;
      }

      f = null;
    },
    remove: function remove(h, r, k, f, a) {
      var c,
          o,
          b,
          d,
          i,
          j,
          m,
          p,
          l,
          g,
          q,
          n = eq.hasData(h) && eq._data(h);

      if (!n || !(j = n.events)) {
        return;
      }

      r = (r || "").match(dW) || [""];
      i = r.length;

      while (i--) {
        b = eo.exec(r[i]) || [];
        l = q = b[1];
        g = (b[2] || "").split(".").sort();

        if (!l) {
          for (l in j) {
            eq.event.remove(h, l + r[i], k, f, true);
          }

          continue;
        }

        m = eq.event.special[l] || {};
        l = (f ? m.delegateType : m.bindType) || l;
        p = j[l] || [];
        b = b[2] && new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)");
        d = c = p.length;

        while (c--) {
          o = p[c];

          if ((a || q === o.origType) && (!k || k.guid === o.guid) && (!b || b.test(o.namespace)) && (!f || f === o.selector || f === "**" && o.selector)) {
            p.splice(c, 1);

            if (o.selector) {
              p.delegateCount--;
            }

            if (m.remove) {
              m.remove.call(h, o);
            }
          }
        }

        if (d && !p.length) {
          if (!m.teardown || m.teardown.call(h, g, n.handle) === false) {
            eq.removeEvent(h, l, n.handle);
          }

          delete j[l];
        }
      }

      if (eq.isEmptyObject(j)) {
        delete n.handle;

        eq._removeData(h, "events");
      }
    },
    trigger: function trigger(n, i, p, a) {
      var h,
          o,
          c,
          b,
          f,
          j,
          k,
          l = [p || dO],
          d = ey.call(n, "type") ? n.type : n,
          m = ey.call(n, "namespace") ? n.namespace.split(".") : [];
      c = j = p = p || dO;

      if (p.nodeType === 3 || p.nodeType === 8) {
        return;
      }

      if (d2.test(d + eq.event.triggered)) {
        return;
      }

      if (d.indexOf(".") >= 0) {
        m = d.split(".");
        d = m.shift();
        m.sort();
      }

      o = d.indexOf(":") < 0 && "on" + d;
      n = n[eq.expando] ? n : new eq.Event(d, _typeof(n) === "object" && n);
      n.isTrigger = a ? 2 : 3;
      n.namespace = m.join(".");
      n.namespace_re = n.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
      n.result = cG;

      if (!n.target) {
        n.target = p;
      }

      i = i == null ? [n] : eq.makeArray(i, [n]);
      f = eq.event.special[d] || {};

      if (!a && f.trigger && f.trigger.apply(p, i) === false) {
        return;
      }

      if (!a && !f.noBubble && !eq.isWindow(p)) {
        b = f.delegateType || d;

        if (!d2.test(b + d)) {
          c = c.parentNode;
        }

        for (; c; c = c.parentNode) {
          l.push(c);
          j = c;
        }

        if (j === (p.ownerDocument || dO)) {
          l.push(j.defaultView || j.parentWindow || eI);
        }
      }

      k = 0;

      while ((c = l[k++]) && !n.isPropagationStopped()) {
        n.type = k > 1 ? b : f.bindType || d;
        h = (eq._data(c, "events") || {})[n.type] && eq._data(c, "handle");

        if (h) {
          h.apply(c, i);
        }

        h = o && c[o];

        if (h && eq.acceptData(c) && h.apply && h.apply(c, i) === false) {
          n.preventDefault();
        }
      }

      n.type = d;

      if (!a && !n.isDefaultPrevented()) {
        if ((!f._default || f._default.apply(l.pop(), i) === false) && eq.acceptData(p)) {
          if (o && p[d] && !eq.isWindow(p)) {
            j = p[o];

            if (j) {
              p[o] = null;
            }

            eq.event.triggered = d;

            try {
              p[d]();
            } catch (g) {}

            eq.event.triggered = cG;

            if (j) {
              p[o] = j;
            }
          }
        }
      }

      return n.result;
    },
    dispatch: function dispatch(j) {
      j = eq.event.fix(j);
      var g,
          f,
          a,
          i,
          k,
          b = [],
          c = dr.call(arguments),
          h = (eq._data(this, "events") || {})[j.type] || [],
          d = eq.event.special[j.type] || {};
      c[0] = j;
      j.delegateTarget = this;

      if (d.preDispatch && d.preDispatch.call(this, j) === false) {
        return;
      }

      b = eq.event.handlers.call(this, j, h);
      g = 0;

      while ((i = b[g++]) && !j.isPropagationStopped()) {
        j.currentTarget = i.elem;
        k = 0;

        while ((a = i.handlers[k++]) && !j.isImmediatePropagationStopped()) {
          if (!j.namespace_re || j.namespace_re.test(a.namespace)) {
            j.handleObj = a;
            j.data = a.data;
            f = ((eq.event.special[a.origType] || {}).handle || a.handler).apply(i.elem, c);

            if (f !== cG) {
              if ((j.result = f) === false) {
                j.preventDefault();
                j.stopPropagation();
              }
            }
          }
        }
      }

      if (d.postDispatch) {
        d.postDispatch.call(this, j);
      }

      return j.result;
    },
    handlers: function handlers(i, j) {
      var h,
          b,
          d,
          f,
          c = [],
          g = j.delegateCount,
          a = i.target;

      if (g && a.nodeType && (!i.button || i.type !== "click")) {
        for (; a != this; a = a.parentNode || this) {
          if (a.nodeType === 1 && (a.disabled !== true || i.type !== "click")) {
            d = [];

            for (f = 0; f < g; f++) {
              b = j[f];
              h = b.selector + " ";

              if (d[h] === cG) {
                d[h] = b.needsContext ? eq(h, this).index(a) >= 0 : eq.find(h, this, null, [a]).length;
              }

              if (d[h]) {
                d.push(b);
              }
            }

            if (d.length) {
              c.push({
                elem: a,
                handlers: d
              });
            }
          }
        }
      }

      if (g < j.length) {
        c.push({
          elem: this,
          handlers: j.slice(g)
        });
      }

      return c;
    },
    fix: function fix(b) {
      if (b[eq.expando]) {
        return b;
      }

      var g,
          c,
          h,
          f = b.type,
          a = b,
          d = this.fixHooks[f];

      if (!d) {
        this.fixHooks[f] = d = d0.test(f) ? this.mouseHooks : b7.test(f) ? this.keyHooks : {};
      }

      h = d.props ? this.props.concat(d.props) : this.props;
      b = new eq.Event(a);
      g = h.length;

      while (g--) {
        c = h[g];
        b[c] = a[c];
      }

      if (!b.target) {
        b.target = a.srcElement || dO;
      }

      if (b.target.nodeType === 3) {
        b.target = b.target.parentNode;
      }

      b.metaKey = !!b.metaKey;
      return d.filter ? d.filter(b, a) : b;
    },
    props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function filter(a, b) {
        if (a.which == null) {
          a.which = b.charCode != null ? b.charCode : b.keyCode;
        }

        return a;
      }
    },
    mouseHooks: {
      props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
      filter: function filter(b, f) {
        var h,
            a,
            g,
            d = f.button,
            c = f.fromElement;

        if (b.pageX == null && f.clientX != null) {
          a = b.target.ownerDocument || dO;
          g = a.documentElement;
          h = a.body;
          b.pageX = f.clientX + (g && g.scrollLeft || h && h.scrollLeft || 0) - (g && g.clientLeft || h && h.clientLeft || 0);
          b.pageY = f.clientY + (g && g.scrollTop || h && h.scrollTop || 0) - (g && g.clientTop || h && h.clientTop || 0);
        }

        if (!b.relatedTarget && c) {
          b.relatedTarget = c === b.target ? f.toElement : c;
        }

        if (!b.which && d !== cG) {
          b.which = d & 1 ? 1 : d & 2 ? 3 : d & 4 ? 2 : 0;
        }

        return b;
      }
    },
    special: {
      load: {
        noBubble: true
      },
      focus: {
        trigger: function trigger() {
          if (this !== ci() && this.focus) {
            try {
              this.focus();
              return false;
            } catch (a) {}
          }
        },
        delegateType: "focusin"
      },
      blur: {
        trigger: function trigger() {
          if (this === ci() && this.blur) {
            this.blur();
            return false;
          }
        },
        delegateType: "focusout"
      },
      click: {
        trigger: function trigger() {
          if (eq.nodeName(this, "input") && this.type === "checkbox" && this.click) {
            this.click();
            return false;
          }
        },
        _default: function _default(a) {
          return eq.nodeName(a.target, "a");
        }
      },
      beforeunload: {
        postDispatch: function postDispatch(a) {
          if (a.result !== cG) {
            a.originalEvent.returnValue = a.result;
          }
        }
      }
    },
    simulate: function simulate(c, a, b, d) {
      var f = eq.extend(new eq.Event(), b, {
        type: c,
        isSimulated: true,
        originalEvent: {}
      });

      if (d) {
        eq.event.trigger(f, null, a);
      } else {
        eq.event.dispatch.call(a, f);
      }

      if (f.isDefaultPrevented()) {
        b.preventDefault();
      }
    }
  };
  eq.removeEvent = dO.removeEventListener ? function (c, a, b) {
    if (c.removeEventListener) {
      c.removeEventListener(a, b, false);
    }
  } : function (d, a, c) {
    var b = "on" + a;

    if (d.detachEvent) {
      if (_typeof(d[b]) === dM) {
        d[b] = null;
      }

      d.detachEvent(b, c);
    }
  };

  eq.Event = function (a, b) {
    if (!(this instanceof eq.Event)) {
      return new eq.Event(a, b);
    }

    if (a && a.type) {
      this.originalEvent = a;
      this.type = a.type;
      this.isDefaultPrevented = a.defaultPrevented || a.returnValue === false || a.getPreventDefault && a.getPreventDefault() ? dG : cW;
    } else {
      this.type = a;
    }

    if (b) {
      eq.extend(this, b);
    }

    this.timeStamp = a && a.timeStamp || eq.now();
    this[eq.expando] = true;
  };

  eq.Event.prototype = {
    isDefaultPrevented: cW,
    isPropagationStopped: cW,
    isImmediatePropagationStopped: cW,
    preventDefault: function preventDefault() {
      var a = this.originalEvent;
      this.isDefaultPrevented = dG;

      if (!a) {
        return;
      }

      if (a.preventDefault) {
        a.preventDefault();
      } else {
        a.returnValue = false;
      }
    },
    stopPropagation: function stopPropagation() {
      var a = this.originalEvent;
      this.isPropagationStopped = dG;

      if (!a) {
        return;
      }

      if (a.stopPropagation) {
        a.stopPropagation();
      }

      a.cancelBubble = true;
    },
    stopImmediatePropagation: function stopImmediatePropagation() {
      this.isImmediatePropagationStopped = dG;
      this.stopPropagation();
    }
  };
  eq.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout"
  }, function (a, b) {
    eq.event.special[a] = {
      delegateType: b,
      bindType: b,
      handle: function handle(c) {
        var f,
            g = this,
            h = c.relatedTarget,
            d = c.handleObj;

        if (!h || h !== g && !eq.contains(g, h)) {
          c.type = d.origType;
          f = d.handler.apply(this, arguments);
          c.type = b;
        }

        return f;
      }
    };
  });

  if (!eq.support.submitBubbles) {
    eq.event.special.submit = {
      setup: function setup() {
        if (eq.nodeName(this, "form")) {
          return false;
        }

        eq.event.add(this, "click._submit keypress._submit", function (a) {
          var b = a.target,
              c = eq.nodeName(b, "input") || eq.nodeName(b, "button") ? b.form : cG;

          if (c && !eq._data(c, "submitBubbles")) {
            eq.event.add(c, "submit._submit", function (d) {
              d._submit_bubble = true;
            });

            eq._data(c, "submitBubbles", true);
          }
        });
      },
      postDispatch: function postDispatch(a) {
        if (a._submit_bubble) {
          delete a._submit_bubble;

          if (this.parentNode && !a.isTrigger) {
            eq.event.simulate("submit", this.parentNode, a, true);
          }
        }
      },
      teardown: function teardown() {
        if (eq.nodeName(this, "form")) {
          return false;
        }

        eq.event.remove(this, "._submit");
      }
    };
  }

  if (!eq.support.changeBubbles) {
    eq.event.special.change = {
      setup: function setup() {
        if (dT.test(this.nodeName)) {
          if (this.type === "checkbox" || this.type === "radio") {
            eq.event.add(this, "propertychange._change", function (a) {
              if (a.originalEvent.propertyName === "checked") {
                this._just_changed = true;
              }
            });
            eq.event.add(this, "click._change", function (a) {
              if (this._just_changed && !a.isTrigger) {
                this._just_changed = false;
              }

              eq.event.simulate("change", this, a, true);
            });
          }

          return false;
        }

        eq.event.add(this, "beforeactivate._change", function (a) {
          var b = a.target;

          if (dT.test(b.nodeName) && !eq._data(b, "changeBubbles")) {
            eq.event.add(b, "change._change", function (c) {
              if (this.parentNode && !c.isSimulated && !c.isTrigger) {
                eq.event.simulate("change", this.parentNode, c, true);
              }
            });

            eq._data(b, "changeBubbles", true);
          }
        });
      },
      handle: function handle(a) {
        var b = a.target;

        if (this !== b || a.isSimulated || a.isTrigger || b.type !== "radio" && b.type !== "checkbox") {
          return a.handleObj.handler.apply(this, arguments);
        }
      },
      teardown: function teardown() {
        eq.event.remove(this, "._change");
        return !dT.test(this.nodeName);
      }
    };
  }

  if (!eq.support.focusinBubbles) {
    eq.each({
      focus: "focusin",
      blur: "focusout"
    }, function (c, b) {
      var a = 0,
          d = function d(f) {
        eq.event.simulate(b, f.target, eq.event.fix(f), true);
      };

      eq.event.special[b] = {
        setup: function setup() {
          if (a++ === 0) {
            dO.addEventListener(c, d, true);
          }
        },
        teardown: function teardown() {
          if (--a === 0) {
            dO.removeEventListener(c, d, true);
          }
        }
      };
    });
  }

  eq.fn.extend({
    on: function on(f, h, g, a, b) {
      var d, c;

      if (_typeof(f) === "object") {
        if (typeof h !== "string") {
          g = g || h;
          h = cG;
        }

        for (d in f) {
          this.on(d, h, g, f[d], b);
        }

        return this;
      }

      if (g == null && a == null) {
        a = h;
        g = h = cG;
      } else {
        if (a == null) {
          if (typeof h === "string") {
            a = g;
            g = cG;
          } else {
            a = g;
            g = h;
            h = cG;
          }
        }
      }

      if (a === false) {
        a = cW;
      } else {
        if (!a) {
          return this;
        }
      }

      if (b === 1) {
        c = a;

        a = function a(i) {
          eq().off(i);
          return c.apply(this, arguments);
        };

        a.guid = c.guid || (c.guid = eq.guid++);
      }

      return this.each(function () {
        eq.event.add(this, f, a, g, h);
      });
    },
    one: function one(a, b, c, d) {
      return this.on(a, b, c, d, 1);
    },
    off: function off(c, f, a) {
      var d, b;

      if (c && c.preventDefault && c.handleObj) {
        d = c.handleObj;
        eq(c.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler);
        return this;
      }

      if (_typeof(c) === "object") {
        for (b in c) {
          this.off(b, f, c[b]);
        }

        return this;
      }

      if (f === false || typeof f === "function") {
        a = f;
        f = cG;
      }

      if (a === false) {
        a = cW;
      }

      return this.each(function () {
        eq.event.remove(this, c, a, f);
      });
    },
    trigger: function trigger(b, a) {
      return this.each(function () {
        eq.event.trigger(b, a, this);
      });
    },
    triggerHandler: function triggerHandler(a, b) {
      var c = this[0];

      if (c) {
        return eq.event.trigger(a, b, c, true);
      }
    }
  });
  var co = /^.[^:#\[\.,]*$/,
      cv = /^(?:parents|prev(?:Until|All))/,
      cI = eq.expr.match.needsContext,
      dn = {
    children: true,
    contents: true,
    next: true,
    prev: true
  };
  eq.fn.extend({
    find: function find(d) {
      var a,
          b = [],
          c = this,
          f = c.length;

      if (typeof d !== "string") {
        return this.pushStack(eq(d).filter(function () {
          for (a = 0; a < f; a++) {
            if (eq.contains(c[a], this)) {
              return true;
            }
          }
        }));
      }

      for (a = 0; a < f; a++) {
        eq.find(d, c[a], b);
      }

      b = this.pushStack(f > 1 ? eq.unique(b) : b);
      b.selector = this.selector ? this.selector + " " + d : d;
      return b;
    },
    has: function has(c) {
      var d,
          a = eq(c, this),
          b = a.length;
      return this.filter(function () {
        for (d = 0; d < b; d++) {
          if (eq.contains(this, a[d])) {
            return true;
          }
        }
      });
    },
    not: function not(a) {
      return this.pushStack(dS(this, a || [], true));
    },
    filter: function filter(a) {
      return this.pushStack(dS(this, a || [], false));
    },
    is: function is(a) {
      return !!dS(this, typeof a === "string" && cI.test(a) ? eq(a) : a || [], false).length;
    },
    closest: function closest(a, b) {
      var h,
          f = 0,
          g = this.length,
          d = [],
          c = cI.test(a) || typeof a !== "string" ? eq(a, b || this.context) : 0;

      for (; f < g; f++) {
        for (h = this[f]; h && h !== b; h = h.parentNode) {
          if (h.nodeType < 11 && (c ? c.index(h) > -1 : h.nodeType === 1 && eq.find.matchesSelector(h, a))) {
            h = d.push(h);
            break;
          }
        }
      }

      return this.pushStack(d.length > 1 ? eq.unique(d) : d);
    },
    index: function index(a) {
      if (!a) {
        return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
      }

      if (typeof a === "string") {
        return eq.inArray(this[0], eq(a));
      }

      return eq.inArray(a.jquery ? a[0] : a, this);
    },
    add: function add(b, a) {
      var c = typeof b === "string" ? eq(b, a) : eq.makeArray(b && b.nodeType ? [b] : b),
          d = eq.merge(this.get(), c);
      return this.pushStack(eq.unique(d));
    },
    addBack: function addBack(a) {
      return this.add(a == null ? this.prevObject : this.prevObject.filter(a));
    }
  });

  function cr(a, b) {
    do {
      a = a[b];
    } while (a && a.nodeType !== 1);

    return a;
  }

  eq.each({
    parent: function parent(a) {
      var b = a.parentNode;
      return b && b.nodeType !== 11 ? b : null;
    },
    parents: function parents(a) {
      return eq.dir(a, "parentNode");
    },
    parentsUntil: function parentsUntil(c, a, b) {
      return eq.dir(c, "parentNode", b);
    },
    next: function next(a) {
      return cr(a, "nextSibling");
    },
    prev: function prev(a) {
      return cr(a, "previousSibling");
    },
    nextAll: function nextAll(a) {
      return eq.dir(a, "nextSibling");
    },
    prevAll: function prevAll(a) {
      return eq.dir(a, "previousSibling");
    },
    nextUntil: function nextUntil(c, a, b) {
      return eq.dir(c, "nextSibling", b);
    },
    prevUntil: function prevUntil(c, a, b) {
      return eq.dir(c, "previousSibling", b);
    },
    siblings: function siblings(a) {
      return eq.sibling((a.parentNode || {}).firstChild, a);
    },
    children: function children(a) {
      return eq.sibling(a.firstChild);
    },
    contents: function contents(a) {
      return eq.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : eq.merge([], a.childNodes);
    }
  }, function (b, a) {
    eq.fn[b] = function (f, d) {
      var c = eq.map(this, a, f);

      if (b.slice(-5) !== "Until") {
        d = f;
      }

      if (d && typeof d === "string") {
        c = eq.filter(d, c);
      }

      if (this.length > 1) {
        if (!dn[b]) {
          c = eq.unique(c);
        }

        if (cv.test(b)) {
          c = c.reverse();
        }
      }

      return this.pushStack(c);
    };
  });
  eq.extend({
    filter: function filter(c, b, d) {
      var a = b[0];

      if (d) {
        c = ":not(" + c + ")";
      }

      return b.length === 1 && a.nodeType === 1 ? eq.find.matchesSelector(a, c) ? [a] : [] : eq.find.matches(c, eq.grep(b, function (f) {
        return f.nodeType === 1;
      }));
    },
    dir: function dir(c, d, a) {
      var f = [],
          b = c[d];

      while (b && b.nodeType !== 9 && (a === cG || b.nodeType !== 1 || !eq(b).is(a))) {
        if (b.nodeType === 1) {
          f.push(b);
        }

        b = b[d];
      }

      return f;
    },
    sibling: function sibling(b, c) {
      var a = [];

      for (; b; b = b.nextSibling) {
        if (b.nodeType === 1 && b !== c) {
          a.push(b);
        }
      }

      return a;
    }
  });

  function dS(b, a, c) {
    if (eq.isFunction(a)) {
      return eq.grep(b, function (d, f) {
        return !!a.call(d, f, d) !== c;
      });
    }

    if (a.nodeType) {
      return eq.grep(b, function (d) {
        return d === a !== c;
      });
    }

    if (typeof a === "string") {
      if (co.test(a)) {
        return eq.filter(a, b, c);
      }

      a = eq.filter(a, b);
    }

    return eq.grep(b, function (d) {
      return eq.inArray(d, a) >= 0 !== c;
    });
  }

  function dK(a) {
    var b = c6.split("|"),
        c = a.createDocumentFragment();

    if (c.createElement) {
      while (b.length) {
        c.createElement(b.pop());
      }
    }

    return c;
  }

  var c6 = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
      d4 = / jQuery\d+="(?:null|\d+)"/g,
      dd = new RegExp("<(?:" + c6 + ")[\\s/>]", "i"),
      dB = /^\s+/,
      cj = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
      cl = /<([\w:]+)/,
      cz = /<tbody/i,
      eB = /<|&#?\w+;/,
      c2 = /<(?:script|style|link)/i,
      d3 = /^(?:checkbox|radio)$/i,
      eg = /checked\s*(?:[^=]|=\s*.checked.)/i,
      dz = /^$|\/(?:java|ecma)script/i,
      eb = /^true\/(.*)/,
      dC = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
      dj = {
    option: [1, "<select multiple='multiple'>", "</select>"],
    legend: [1, "<fieldset>", "</fieldset>"],
    area: [1, "<map>", "</map>"],
    param: [1, "<object>", "</object>"],
    thead: [1, "<table>", "</table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: eq.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
  },
      en = dK(dO),
      dL = en.appendChild(dO.createElement("div"));
  dj.optgroup = dj.option;
  dj.tbody = dj.tfoot = dj.colgroup = dj.caption = dj.thead;
  dj.th = dj.td;
  eq.fn.extend({
    text: function text(a) {
      return eq.access(this, function (b) {
        return b === cG ? eq.text(this) : this.empty().append((this[0] && this[0].ownerDocument || dO).createTextNode(b));
      }, null, a, arguments.length);
    },
    append: function append() {
      return this.domManip(arguments, function (b) {
        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
          var a = ec(this, b);
          a.appendChild(b);
        }
      });
    },
    prepend: function prepend() {
      return this.domManip(arguments, function (b) {
        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
          var a = ec(this, b);
          a.insertBefore(b, a.firstChild);
        }
      });
    },
    before: function before() {
      return this.domManip(arguments, function (a) {
        if (this.parentNode) {
          this.parentNode.insertBefore(a, this);
        }
      });
    },
    after: function after() {
      return this.domManip(arguments, function (a) {
        if (this.parentNode) {
          this.parentNode.insertBefore(a, this.nextSibling);
        }
      });
    },
    remove: function remove(f, a) {
      var b,
          d = f ? eq.filter(f, this) : this,
          c = 0;

      for (; (b = d[c]) != null; c++) {
        if (!a && b.nodeType === 1) {
          eq.cleanData(dH(b));
        }

        if (b.parentNode) {
          if (a && eq.contains(b.ownerDocument, b)) {
            cC(dH(b, "script"));
          }

          b.parentNode.removeChild(b);
        }
      }

      return this;
    },
    empty: function empty() {
      var a,
          b = 0;

      for (; (a = this[b]) != null; b++) {
        if (a.nodeType === 1) {
          eq.cleanData(dH(a, false));
        }

        while (a.firstChild) {
          a.removeChild(a.firstChild);
        }

        if (a.options && eq.nodeName(a, "select")) {
          a.options.length = 0;
        }
      }

      return this;
    },
    clone: function clone(a, b) {
      a = a == null ? false : a;
      b = b == null ? a : b;
      return this.map(function () {
        return eq.clone(this, a, b);
      });
    },
    html: function html(a) {
      return eq.access(this, function (b) {
        var c = this[0] || {},
            d = 0,
            f = this.length;

        if (b === cG) {
          return c.nodeType === 1 ? c.innerHTML.replace(d4, "") : cG;
        }

        if (typeof b === "string" && !c2.test(b) && (eq.support.htmlSerialize || !dd.test(b)) && (eq.support.leadingWhitespace || !dB.test(b)) && !dj[(cl.exec(b) || ["", ""])[1].toLowerCase()]) {
          b = b.replace(cj, "<$1></$2>");

          try {
            for (; d < f; d++) {
              c = this[d] || {};

              if (c.nodeType === 1) {
                eq.cleanData(dH(c, false));
                c.innerHTML = b;
              }
            }

            c = 0;
          } catch (g) {}
        }

        if (c) {
          this.empty().append(b);
        }
      }, null, a, arguments.length);
    },
    replaceWith: function replaceWith() {
      var b = eq.map(this, function (c) {
        return [c.nextSibling, c.parentNode];
      }),
          a = 0;
      this.domManip(arguments, function (f) {
        var c = b[a++],
            d = b[a++];

        if (d) {
          if (c && c.parentNode !== d) {
            c = this.nextSibling;
          }

          eq(this).remove();
          d.insertBefore(f, c);
        }
      }, true);
      return a ? this : this.remove();
    },
    detach: function detach(a) {
      return this.remove(a, true);
    },
    domManip: function domManip(g, a, p) {
      g = cm.apply([], g);
      var i,
          n,
          o,
          k,
          c,
          h,
          j = 0,
          l = this.length,
          d = this,
          b = l - 1,
          f = g[0],
          m = eq.isFunction(f);

      if (m || !(l <= 1 || typeof f !== "string" || eq.support.checkClone || !eg.test(f))) {
        return this.each(function (q) {
          var r = d.eq(q);

          if (m) {
            g[0] = f.call(this, q, r.html());
          }

          r.domManip(g, a, p);
        });
      }

      if (l) {
        h = eq.buildFragment(g, this[0].ownerDocument, false, !p && this);
        i = h.firstChild;

        if (h.childNodes.length === 1) {
          h = i;
        }

        if (i) {
          k = eq.map(dH(h, "script"), ei);
          o = k.length;

          for (; j < l; j++) {
            n = h;

            if (j !== b) {
              n = eq.clone(n, true, true);

              if (o) {
                eq.merge(k, dH(n, "script"));
              }
            }

            a.call(this[j], n, j);
          }

          if (o) {
            c = k[k.length - 1].ownerDocument;
            eq.map(k, cy);

            for (j = 0; j < o; j++) {
              n = k[j];

              if (dz.test(n.type || "") && !eq._data(n, "globalEval") && eq.contains(c, n)) {
                if (n.src) {
                  eq._evalUrl(n.src);
                } else {
                  eq.globalEval((n.text || n.textContent || n.innerHTML || "").replace(dC, ""));
                }
              }
            }
          }

          h = i = null;
        }
      }

      return this;
    }
  });

  function ec(a, b) {
    return eq.nodeName(a, "table") && eq.nodeName(b.nodeType === 1 ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a;
  }

  function ei(a) {
    a.type = (eq.find.attr(a, "type") !== null) + "/" + a.type;
    return a;
  }

  function cy(a) {
    var b = eb.exec(a.type);

    if (b) {
      a.type = b[1];
    } else {
      a.removeAttribute("type");
    }

    return a;
  }

  function cC(b, d) {
    var c,
        a = 0;

    for (; (c = b[a]) != null; a++) {
      eq._data(c, "globalEval", !d || eq._data(d[a], "globalEval"));
    }
  }

  function db(c, h) {
    if (h.nodeType !== 1 || !eq.hasData(c)) {
      return;
    }

    var a,
        b,
        i,
        d = eq._data(c),
        g = eq._data(h, d),
        f = d.events;

    if (f) {
      delete g.handle;
      g.events = {};

      for (a in f) {
        for (b = 0, i = f[a].length; b < i; b++) {
          eq.event.add(h, a, f[a][b]);
        }
      }
    }

    if (g.data) {
      g.data = eq.extend({}, g.data);
    }
  }

  function dI(a, d) {
    var f, b, c;

    if (d.nodeType !== 1) {
      return;
    }

    f = d.nodeName.toLowerCase();

    if (!eq.support.noCloneEvent && d[eq.expando]) {
      c = eq._data(d);

      for (b in c.events) {
        eq.removeEvent(d, b, c.handle);
      }

      d.removeAttribute(eq.expando);
    }

    if (f === "script" && d.text !== a.text) {
      ei(d).text = a.text;
      cy(d);
    } else {
      if (f === "object") {
        if (d.parentNode) {
          d.outerHTML = a.outerHTML;
        }

        if (eq.support.html5Clone && a.innerHTML && !eq.trim(d.innerHTML)) {
          d.innerHTML = a.innerHTML;
        }
      } else {
        if (f === "input" && d3.test(a.type)) {
          d.defaultChecked = d.checked = a.checked;

          if (d.value !== a.value) {
            d.value = a.value;
          }
        } else {
          if (f === "option") {
            d.defaultSelected = d.selected = a.defaultSelected;
          } else {
            if (f === "input" || f === "textarea") {
              d.defaultValue = a.defaultValue;
            }
          }
        }
      }
    }
  }

  eq.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function (b, a) {
    eq.fn[b] = function (d) {
      var c,
          h = 0,
          i = [],
          f = eq(d),
          g = f.length - 1;

      for (; h <= g; h++) {
        c = h === g ? this : this.clone(true);
        eq(f[h])[a](c);
        e.apply(i, c.get());
      }

      return this.pushStack(i);
    };
  });

  function dH(b, g) {
    var f,
        a,
        d = 0,
        c = _typeof(b.getElementsByTagName) !== dM ? b.getElementsByTagName(g || "*") : _typeof(b.querySelectorAll) !== dM ? b.querySelectorAll(g || "*") : cG;

    if (!c) {
      for (c = [], f = b.childNodes || b; (a = f[d]) != null; d++) {
        if (!g || eq.nodeName(a, g)) {
          c.push(a);
        } else {
          eq.merge(c, dH(a, g));
        }
      }
    }

    return g === cG || g && eq.nodeName(b, g) ? eq.merge([b], c) : c;
  }

  function d8(a) {
    if (d3.test(a.type)) {
      a.defaultChecked = a.checked;
    }
  }

  eq.extend({
    clone: function clone(h, g, i) {
      var d,
          j,
          a,
          f,
          c,
          b = eq.contains(h.ownerDocument, h);

      if (eq.support.html5Clone || eq.isXMLDoc(h) || !dd.test("<" + h.nodeName + ">")) {
        a = h.cloneNode(true);
      } else {
        dL.innerHTML = h.outerHTML;
        dL.removeChild(a = dL.firstChild);
      }

      if ((!eq.support.noCloneEvent || !eq.support.noCloneChecked) && (h.nodeType === 1 || h.nodeType === 11) && !eq.isXMLDoc(h)) {
        d = dH(a);
        c = dH(h);

        for (f = 0; (j = c[f]) != null; ++f) {
          if (d[f]) {
            dI(j, d[f]);
          }
        }
      }

      if (g) {
        if (i) {
          c = c || dH(h);
          d = d || dH(a);

          for (f = 0; (j = c[f]) != null; f++) {
            db(j, d[f]);
          }
        } else {
          db(h, a);
        }
      }

      d = dH(a, "script");

      if (d.length > 0) {
        cC(d, !b && dH(h, "script"));
      }

      d = c = j = null;
      return a;
    },
    buildFragment: function buildFragment(n, o, h, b) {
      var g,
          k,
          i,
          c,
          a,
          d,
          p,
          j = n.length,
          l = dK(o),
          m = [],
          f = 0;

      for (; f < j; f++) {
        k = n[f];

        if (k || k === 0) {
          if (eq.type(k) === "object") {
            eq.merge(m, k.nodeType ? [k] : k);
          } else {
            if (!eB.test(k)) {
              m.push(o.createTextNode(k));
            } else {
              c = c || l.appendChild(o.createElement("div"));
              a = (cl.exec(k) || ["", ""])[1].toLowerCase();
              p = dj[a] || dj._default;
              c.innerHTML = p[1] + k.replace(cj, "<$1></$2>") + p[2];
              g = p[0];

              while (g--) {
                c = c.lastChild;
              }

              if (!eq.support.leadingWhitespace && dB.test(k)) {
                m.push(o.createTextNode(dB.exec(k)[0]));
              }

              if (!eq.support.tbody) {
                k = a === "table" && !cz.test(k) ? c.firstChild : p[1] === "<table>" && !cz.test(k) ? c : 0;
                g = k && k.childNodes.length;

                while (g--) {
                  if (eq.nodeName(d = k.childNodes[g], "tbody") && !d.childNodes.length) {
                    k.removeChild(d);
                  }
                }
              }

              eq.merge(m, c.childNodes);
              c.textContent = "";

              while (c.firstChild) {
                c.removeChild(c.firstChild);
              }

              c = l.lastChild;
            }
          }
        }
      }

      if (c) {
        l.removeChild(c);
      }

      if (!eq.support.appendChecked) {
        eq.grep(dH(m, "input"), d8);
      }

      f = 0;

      while (k = m[f++]) {
        if (b && eq.inArray(k, b) !== -1) {
          continue;
        }

        i = eq.contains(k.ownerDocument, k);
        c = dH(l.appendChild(k), "script");

        if (i) {
          cC(c);
        }

        if (h) {
          g = 0;

          while (k = c[g++]) {
            if (dz.test(k.type || "")) {
              h.push(k);
            }
          }
        }
      }

      c = null;
      return l;
    },
    cleanData: function cleanData(j, b) {
      var k,
          c,
          l,
          h,
          g = 0,
          a = eq.expando,
          i = eq.cache,
          f = eq.support.deleteExpando,
          d = eq.event.special;

      for (; (k = j[g]) != null; g++) {
        if (b || eq.acceptData(k)) {
          l = k[a];
          h = l && i[l];

          if (h) {
            if (h.events) {
              for (c in h.events) {
                if (d[c]) {
                  eq.event.remove(k, c);
                } else {
                  eq.removeEvent(k, c, h.handle);
                }
              }
            }

            if (i[l]) {
              delete i[l];

              if (f) {
                delete k[a];
              } else {
                if (_typeof(k.removeAttribute) !== dM) {
                  k.removeAttribute(a);
                } else {
                  k[a] = null;
                }
              }

              ch.push(l);
            }
          }
        }
      }
    },
    _evalUrl: function _evalUrl(a) {
      return eq.ajax({
        url: a,
        type: "GET",
        dataType: "script",
        async: false,
        global: false,
        "throws": true
      });
    }
  });
  eq.fn.extend({
    wrapAll: function wrapAll(b) {
      if (eq.isFunction(b)) {
        return this.each(function (c) {
          eq(this).wrapAll(b.call(this, c));
        });
      }

      if (this[0]) {
        var a = eq(b, this[0].ownerDocument).eq(0).clone(true);

        if (this[0].parentNode) {
          a.insertBefore(this[0]);
        }

        a.map(function () {
          var c = this;

          while (c.firstChild && c.firstChild.nodeType === 1) {
            c = c.firstChild;
          }

          return c;
        }).append(this);
      }

      return this;
    },
    wrapInner: function wrapInner(a) {
      if (eq.isFunction(a)) {
        return this.each(function (b) {
          eq(this).wrapInner(a.call(this, b));
        });
      }

      return this.each(function () {
        var b = eq(this),
            c = b.contents();

        if (c.length) {
          c.wrapAll(a);
        } else {
          b.append(a);
        }
      });
    },
    wrap: function wrap(b) {
      var a = eq.isFunction(b);
      return this.each(function (c) {
        eq(this).wrapAll(a ? b.call(this, c) : b);
      });
    },
    unwrap: function unwrap() {
      return this.parent().each(function () {
        if (!eq.nodeName(this, "body")) {
          eq(this).replaceWith(this.childNodes);
        }
      }).end();
    }
  });
  var cw,
      cn,
      dR,
      b8 = /alpha\([^)]*\)/i,
      ew = /opacity\s*=\s*([^)]*)/,
      dw = /^(top|right|bottom|left)$/,
      dU = /^(none|table(?!-c[ea]).+)/,
      cg = /^margin/,
      eh = new RegExp("^(" + cJ + ")(.*)$", "i"),
      du = new RegExp("^(" + cJ + ")(?!px)[a-z%]+$", "i"),
      cd = new RegExp("^([+-])=(" + cJ + ")", "i"),
      cK = {
    BODY: "block"
  },
      eC = {
    position: "absolute",
    visibility: "hidden",
    display: "block"
  },
      c4 = {
    letterSpacing: 0,
    fontWeight: 400
  },
      cB = ["Top", "Right", "Bottom", "Left"],
      dl = ["Webkit", "O", "Moz", "ms"];

  function c8(b, d) {
    if (d in b) {
      return d;
    }

    var a = d.charAt(0).toUpperCase() + d.slice(1),
        f = d,
        c = dl.length;

    while (c--) {
      d = dl[c] + a;

      if (d in b) {
        return d;
      }
    }

    return f;
  }

  function dA(a, b) {
    a = b || a;
    return eq.css(a, "display") === "none" || !eq.contains(a.ownerDocument, a);
  }

  function dP(d, i) {
    var c,
        a,
        h,
        g = [],
        b = 0,
        f = d.length;

    for (; b < f; b++) {
      a = d[b];

      if (!a.style) {
        continue;
      }

      g[b] = eq._data(a, "olddisplay");
      c = a.style.display;

      if (i) {
        if (!g[b] && c === "none") {
          a.style.display = "";
        }

        if (a.style.display === "" && dA(a)) {
          g[b] = eq._data(a, "olddisplay", cH(a.nodeName));
        }
      } else {
        if (!g[b]) {
          h = dA(a);

          if (c && c !== "none" || !h) {
            eq._data(a, "olddisplay", h ? c : eq.css(a, "display"));
          }
        }
      }
    }

    for (b = 0; b < f; b++) {
      a = d[b];

      if (!a.style) {
        continue;
      }

      if (!i || a.style.display === "none" || a.style.display === "") {
        a.style.display = i ? g[b] || "" : "none";
      }
    }

    return d;
  }

  eq.fn.extend({
    css: function css(b, a) {
      return eq.access(this, function (g, j, f) {
        var c,
            h,
            d = {},
            i = 0;

        if (eq.isArray(j)) {
          h = cn(g);
          c = j.length;

          for (; i < c; i++) {
            d[j[i]] = eq.css(g, j[i], false, h);
          }

          return d;
        }

        return f !== cG ? eq.style(g, j, f) : eq.css(g, j);
      }, b, a, arguments.length > 1);
    },
    show: function show() {
      return dP(this, true);
    },
    hide: function hide() {
      return dP(this);
    },
    toggle: function toggle(a) {
      if (typeof a === "boolean") {
        return a ? this.show() : this.hide();
      }

      return this.each(function () {
        if (dA(this)) {
          eq(this).show();
        } else {
          eq(this).hide();
        }
      });
    }
  });
  eq.extend({
    cssHooks: {
      opacity: {
        get: function get(b, c) {
          if (c) {
            var a = dR(b, "opacity");
            return a === "" ? "1" : a;
          }
        }
      }
    },
    cssNumber: {
      columnCount: true,
      fillOpacity: true,
      fontWeight: true,
      lineHeight: true,
      opacity: true,
      order: true,
      orphans: true,
      widows: true,
      zIndex: true,
      zoom: true
    },
    cssProps: {
      "float": eq.support.cssFloat ? "cssFloat" : "styleFloat"
    },
    style: function style(j, k, b, i) {
      if (!j || j.nodeType === 3 || j.nodeType === 8 || !j.style) {
        return;
      }

      var d,
          c,
          a,
          g = eq.camelCase(k),
          h = j.style;
      k = eq.cssProps[g] || (eq.cssProps[g] = c8(h, g));
      a = eq.cssHooks[k] || eq.cssHooks[g];

      if (b !== cG) {
        c = _typeof(b);

        if (c === "string" && (d = cd.exec(b))) {
          b = (d[1] + 1) * d[2] + parseFloat(eq.css(j, k));
          c = "number";
        }

        if (b == null || c === "number" && isNaN(b)) {
          return;
        }

        if (c === "number" && !eq.cssNumber[g]) {
          b += "px";
        }

        if (!eq.support.clearCloneStyle && b === "" && k.indexOf("background") === 0) {
          h[k] = "inherit";
        }

        if (!a || !("set" in a) || (b = a.set(j, b, i)) !== cG) {
          try {
            h[k] = b;
          } catch (f) {}
        }
      } else {
        if (a && "get" in a && (d = a.get(j, false, i)) !== cG) {
          return d;
        }

        return h[k];
      }
    },
    css: function css(d, a, h, i) {
      var b,
          c,
          g,
          f = eq.camelCase(a);
      a = eq.cssProps[f] || (eq.cssProps[f] = c8(d.style, f));
      g = eq.cssHooks[a] || eq.cssHooks[f];

      if (g && "get" in g) {
        c = g.get(d, true, h);
      }

      if (c === cG) {
        c = dR(d, a, i);
      }

      if (c === "normal" && a in c4) {
        c = c4[a];
      }

      if (h === "" || h) {
        b = parseFloat(c);
        return h === true || eq.isNumeric(b) ? b || 0 : c;
      }

      return c;
    }
  });

  if (eI.getComputedStyle) {
    cn = function cn(a) {
      return eI.getComputedStyle(a, null);
    };

    dR = function dR(f, j, c) {
      var i,
          h,
          a,
          d = c || cn(f),
          b = d ? d.getPropertyValue(j) || d[j] : cG,
          g = f.style;

      if (d) {
        if (b === "" && !eq.contains(f.ownerDocument, f)) {
          b = eq.style(f, j);
        }

        if (du.test(b) && cg.test(j)) {
          i = g.width;
          h = g.minWidth;
          a = g.maxWidth;
          g.minWidth = g.maxWidth = g.width = b;
          b = d.width;
          g.width = i;
          g.minWidth = h;
          g.maxWidth = a;
        }
      }

      return b;
    };
  } else {
    if (dO.documentElement.currentStyle) {
      cn = function cn(a) {
        return a.currentStyle;
      };

      dR = function dR(i, h, c) {
        var j,
            d,
            b,
            f = c || cn(i),
            a = f ? f[h] : cG,
            g = i.style;

        if (a == null && g && g[h]) {
          a = g[h];
        }

        if (du.test(a) && !dw.test(h)) {
          j = g.left;
          d = i.runtimeStyle;
          b = d && d.left;

          if (b) {
            d.left = i.currentStyle.left;
          }

          g.left = h === "fontSize" ? "1em" : a;
          a = g.pixelLeft + "px";
          g.left = j;

          if (b) {
            d.left = b;
          }
        }

        return a === "" ? "auto" : a;
      };
    }
  }

  function cS(b, d, c) {
    var a = eh.exec(d);
    return a ? Math.max(0, a[1] - (c || 0)) + (a[2] || "px") : d;
  }

  function dN(a, g, h, c, b) {
    var f = h === (c ? "border" : "content") ? 4 : g === "width" ? 1 : 0,
        d = 0;

    for (; f < 4; f += 2) {
      if (h === "margin") {
        d += eq.css(a, h + cB[f], true, b);
      }

      if (c) {
        if (h === "content") {
          d -= eq.css(a, "padding" + cB[f], true, b);
        }

        if (h !== "margin") {
          d -= eq.css(a, "border" + cB[f] + "Width", true, b);
        }
      } else {
        d += eq.css(a, "padding" + cB[f], true, b);

        if (h !== "padding") {
          d += eq.css(a, "border" + cB[f] + "Width", true, b);
        }
      }
    }

    return d;
  }

  function cD(a, g, h) {
    var b = true,
        f = g === "width" ? a.offsetWidth : a.offsetHeight,
        d = cn(a),
        c = eq.support.boxSizing && eq.css(a, "boxSizing", false, d) === "border-box";

    if (f <= 0 || f == null) {
      f = dR(a, g, d);

      if (f < 0 || f == null) {
        f = a.style[g];
      }

      if (du.test(f)) {
        return f;
      }

      b = c && (eq.support.boxSizingReliable || f === a.style[g]);
      f = parseFloat(f) || 0;
    }

    return f + dN(a, g, h || (c ? "border" : "content"), b, d) + "px";
  }

  function cH(b) {
    var c = dO,
        a = cK[b];

    if (!a) {
      a = cO(b, c);

      if (a === "none" || !a) {
        cw = (cw || eq("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(c.documentElement);
        c = (cw[0].contentWindow || cw[0].contentDocument).document;
        c.write("<!doctype html><html><body>");
        c.close();
        a = cO(b, c);
        cw.detach();
      }

      cK[b] = a;
    }

    return a;
  }

  function cO(b, c) {
    var a = eq(c.createElement(b)).appendTo(c.body),
        d = eq.css(a[0], "display");
    a.remove();
    return d;
  }

  eq.each(["height", "width"], function (a, b) {
    eq.cssHooks[b] = {
      get: function get(f, c, d) {
        if (c) {
          return f.offsetWidth === 0 && dU.test(eq.css(f, "display")) ? eq.swap(f, eC, function () {
            return cD(f, b, d);
          }) : cD(f, b, d);
        }
      },
      set: function set(d, c, g) {
        var f = g && cn(d);
        return cS(d, c, g ? dN(d, b, g, eq.support.boxSizing && eq.css(d, "boxSizing", false, f) === "border-box", f) : 0);
      }
    };
  });

  if (!eq.support.opacity) {
    eq.cssHooks.opacity = {
      get: function get(a, b) {
        return ew.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? 0.01 * parseFloat(RegExp.$1) + "" : b ? "1" : "";
      },
      set: function set(a, g) {
        var b = a.style,
            f = a.currentStyle,
            d = eq.isNumeric(g) ? "alpha(opacity=" + g * 100 + ")" : "",
            c = f && f.filter || b.filter || "";
        b.zoom = 1;

        if ((g >= 1 || g === "") && eq.trim(c.replace(b8, "")) === "" && b.removeAttribute) {
          b.removeAttribute("filter");

          if (g === "" || f && !f.filter) {
            return;
          }
        }

        b.filter = b8.test(c) ? c.replace(b8, d) : c + " " + d;
      }
    };
  }

  eq(function () {
    if (!eq.support.reliableMarginRight) {
      eq.cssHooks.marginRight = {
        get: function get(a, b) {
          if (b) {
            return eq.swap(a, {
              display: "inline-block"
            }, dR, [a, "marginRight"]);
          }
        }
      };
    }

    if (!eq.support.pixelPosition && eq.fn.position) {
      eq.each(["top", "left"], function (b, a) {
        eq.cssHooks[a] = {
          get: function get(c, d) {
            if (d) {
              d = dR(c, a);
              return du.test(d) ? eq(c).position()[a] + "px" : d;
            }
          }
        };
      });
    }
  });

  if (eq.expr && eq.expr.filters) {
    eq.expr.filters.hidden = function (a) {
      return a.offsetWidth <= 0 && a.offsetHeight <= 0 || !eq.support.reliableHiddenOffsets && (a.style && a.style.display || eq.css(a, "display")) === "none";
    };

    eq.expr.filters.visible = function (a) {
      return !eq.expr.filters.hidden(a);
    };
  }

  eq.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function (b, a) {
    eq.cssHooks[b + a] = {
      expand: function expand(d) {
        var f = 0,
            g = {},
            c = typeof d === "string" ? d.split(" ") : [d];

        for (; f < 4; f++) {
          g[b + cB[f] + a] = c[f] || c[f - 2] || c[0];
        }

        return g;
      }
    };

    if (!cg.test(b)) {
      eq.cssHooks[b + a].set = cS;
    }
  });
  var d9 = /%20/g,
      de = /\[\]$/,
      ef = /\r?\n/g,
      ds = /^(?:submit|button|image|reset|file)$/i,
      cb = /^(?:input|select|textarea|keygen)/i;
  eq.fn.extend({
    serialize: function serialize() {
      return eq.param(this.serializeArray());
    },
    serializeArray: function serializeArray() {
      return this.map(function () {
        var a = eq.prop(this, "elements");
        return a ? eq.makeArray(a) : this;
      }).filter(function () {
        var a = this.type;
        return this.name && !eq(this).is(":disabled") && cb.test(this.nodeName) && !ds.test(a) && (this.checked || !d3.test(a));
      }).map(function (a, c) {
        var b = eq(this).val();
        return b == null ? null : eq.isArray(b) ? eq.map(b, function (d) {
          return {
            name: c.name,
            value: d.replace(ef, "\r\n")
          };
        }) : {
          name: c.name,
          value: b.replace(ef, "\r\n")
        };
      }).get();
    }
  });

  eq.param = function (f, c) {
    var b,
        d = [],
        a = function a(h, g) {
      g = eq.isFunction(g) ? g() : g == null ? "" : g;
      d[d.length] = encodeURIComponent(h) + "=" + encodeURIComponent(g);
    };

    if (c === cG) {
      c = eq.ajaxSettings && eq.ajaxSettings.traditional;
    }

    if (eq.isArray(f) || f.jquery && !eq.isPlainObject(f)) {
      eq.each(f, function () {
        a(this.name, this.value);
      });
    } else {
      for (b in f) {
        el(b, f[b], c, a);
      }
    }

    return d.join("&").replace(d9, "+");
  };

  function el(c, a, d, b) {
    var f;

    if (eq.isArray(a)) {
      eq.each(a, function (g, h) {
        if (d || de.test(c)) {
          b(c, h);
        } else {
          el(c + "[" + (_typeof(h) === "object" ? g : "") + "]", h, d, b);
        }
      });
    } else {
      if (!d && eq.type(a) === "object") {
        for (f in a) {
          el(c + "[" + f + "]", a[f], d, b);
        }
      } else {
        b(c, a);
      }
    }
  }

  eq.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
    eq.fn[b] = function (c, d) {
      return arguments.length > 0 ? this.on(b, null, c, d) : this.trigger(b);
    };
  });
  eq.fn.extend({
    hover: function hover(b, a) {
      return this.mouseenter(b).mouseleave(a || b);
    },
    bind: function bind(a, b, c) {
      return this.on(a, null, b, c);
    },
    unbind: function unbind(b, a) {
      return this.off(b, null, a);
    },
    delegate: function delegate(b, a, c, d) {
      return this.on(a, b, c, d);
    },
    undelegate: function undelegate(a, c, b) {
      return arguments.length === 1 ? this.off(a, "**") : this.off(c, a || "**", b);
    }
  });
  var eE,
      dX,
      cc = eq.now(),
      dV = /\?/,
      eA = /#.*$/,
      d1 = /([?&])_=[^&]*/,
      cM = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
      cZ = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      cu = /^(?:GET|HEAD)$/,
      dy = /^\/\//,
      dZ = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
      dJ = eq.fn.load,
      b4 = {},
      cf = {},
      cs = "*/".concat("*");

  try {
    dX = ex.href;
  } catch (b6) {
    dX = dO.createElement("a");
    dX.href = "";
    dX = dX.href;
  }

  eE = dZ.exec(dX.toLowerCase()) || [];

  function a8(a) {
    return function (b, g) {
      if (typeof b !== "string") {
        g = b;
        b = "*";
      }

      var f,
          d = 0,
          c = b.toLowerCase().match(dW) || [];

      if (eq.isFunction(g)) {
        while (f = c[d++]) {
          if (f[0] === "+") {
            f = f.slice(1) || "*";
            (a[f] = a[f] || []).unshift(g);
          } else {
            (a[f] = a[f] || []).push(g);
          }
        }
      }
    };
  }

  function ed(h, f, c, b) {
    var g = {},
        a = h === cf;

    function d(j) {
      var i;
      g[j] = true;
      eq.each(h[j] || [], function (k, l) {
        var m = l(f, c, b);

        if (typeof m === "string" && !a && !g[m]) {
          f.dataTypes.unshift(m);
          d(m);
          return false;
        } else {
          if (a) {
            return !(i = m);
          }
        }
      });
      return i;
    }

    return d(f.dataTypes[0]) || !g["*"] && d("*");
  }

  function dq(c, b) {
    var f,
        d,
        a = eq.ajaxSettings.flatOptions || {};

    for (d in b) {
      if (b[d] !== cG) {
        (a[d] ? c : f || (f = {}))[d] = b[d];
      }
    }

    if (f) {
      eq.extend(true, c, f);
    }

    return c;
  }

  eq.fn.load = function (b, d, c) {
    if (typeof b !== "string" && dJ) {
      return dJ.apply(this, arguments);
    }

    var i,
        g,
        a,
        h = this,
        f = b.indexOf(" ");

    if (f >= 0) {
      i = b.slice(f, b.length);
      b = b.slice(0, f);
    }

    if (eq.isFunction(d)) {
      c = d;
      d = cG;
    } else {
      if (d && _typeof(d) === "object") {
        a = "POST";
      }
    }

    if (h.length > 0) {
      eq.ajax({
        url: b,
        type: a,
        dataType: "html",
        data: d
      }).done(function (j) {
        g = arguments;
        h.html(i ? eq("<div>").append(eq.parseHTML(j)).find(i) : j);
      }).complete(c && function (j, k) {
        h.each(c, g || [j.responseText, k, j]);
      });
    }

    return this;
  };

  eq.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (b, a) {
    eq.fn[a] = function (c) {
      return this.on(a, c);
    };
  });
  eq.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: dX,
      type: "GET",
      isLocal: cZ.test(eE[1]),
      global: true,
      processData: true,
      async: true,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": cs,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /xml/,
        html: /html/,
        json: /json/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      converters: {
        "* text": String,
        "text html": true,
        "text json": eq.parseJSON,
        "text xml": eq.parseXML
      },
      flatOptions: {
        url: true,
        context: true
      }
    },
    ajaxSetup: function ajaxSetup(a, b) {
      return b ? dq(dq(a, eq.ajaxSettings), b) : dq(eq.ajaxSettings, a);
    },
    ajaxPrefilter: a8(b4),
    ajaxTransport: a8(cf),
    ajax: function ajax(i, l) {
      if (_typeof(i) === "object") {
        l = i;
        i = cG;
      }

      l = l || {};
      var w,
          u,
          h,
          p,
          d,
          m,
          t,
          k,
          f = eq.ajaxSetup({}, l),
          n = f.context || f,
          b = f.context && (n.nodeType || n.jquery) ? eq(n) : eq.event,
          o = eq.Deferred(),
          r = eq.Callbacks("once memory"),
          g = f.statusCode || {},
          a = {},
          q = {},
          j = 0,
          x = "canceled",
          v = {
        readyState: 0,
        getResponseHeader: function getResponseHeader(y) {
          var z;

          if (j === 2) {
            if (!k) {
              k = {};

              while (z = cM.exec(p)) {
                k[z[1].toLowerCase()] = z[2];
              }
            }

            z = k[y.toLowerCase()];
          }

          return z == null ? null : z;
        },
        getAllResponseHeaders: function getAllResponseHeaders() {
          return j === 2 ? p : null;
        },
        setRequestHeader: function setRequestHeader(z, y) {
          var A = z.toLowerCase();

          if (!j) {
            z = q[A] = q[A] || z;
            a[z] = y;
          }

          return this;
        },
        overrideMimeType: function overrideMimeType(y) {
          if (!j) {
            f.mimeType = y;
          }

          return this;
        },
        statusCode: function statusCode(y) {
          var z;

          if (y) {
            if (j < 2) {
              for (z in y) {
                g[z] = [g[z], y[z]];
              }
            } else {
              v.always(y[v.status]);
            }
          }

          return this;
        },
        abort: function abort(y) {
          var z = y || x;

          if (t) {
            t.abort(z);
          }

          c(0, z);
          return this;
        }
      };
      o.promise(v).complete = r.add;
      v.success = v.done;
      v.error = v.fail;
      f.url = ((i || f.url || dX) + "").replace(eA, "").replace(dy, eE[1] + "//");
      f.type = l.method || l.type || f.method || f.type;
      f.dataTypes = eq.trim(f.dataType || "*").toLowerCase().match(dW) || [""];

      if (f.crossDomain == null) {
        w = dZ.exec(f.url.toLowerCase());
        f.crossDomain = !!(w && (w[1] !== eE[1] || w[2] !== eE[2] || (w[3] || (w[1] === "http:" ? "80" : "443")) !== (eE[3] || (eE[1] === "http:" ? "80" : "443"))));
      }

      if (f.data && f.processData && typeof f.data !== "string") {
        f.data = eq.param(f.data, f.traditional);
      }

      ed(b4, f, l, v);

      if (j === 2) {
        return v;
      }

      m = f.global;

      if (m && eq.active++ === 0) {
        eq.event.trigger("ajaxStart");
      }

      f.type = f.type.toUpperCase();
      f.hasContent = !cu.test(f.type);
      h = f.url;

      if (!f.hasContent) {
        if (f.data) {
          h = f.url += (dV.test(h) ? "&" : "?") + f.data;
          delete f.data;
        }

        if (f.cache === false) {
          f.url = d1.test(h) ? h.replace(d1, "$1_=" + cc++) : h + (dV.test(h) ? "&" : "?") + "_=" + cc++;
        }
      }

      if (f.ifModified) {
        if (eq.lastModified[h]) {
          v.setRequestHeader("If-Modified-Since", eq.lastModified[h]);
        }

        if (eq.etag[h]) {
          v.setRequestHeader("If-None-Match", eq.etag[h]);
        }
      }

      if (f.data && f.hasContent && f.contentType !== false || l.contentType) {
        v.setRequestHeader("Content-Type", f.contentType);
      }

      v.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + (f.dataTypes[0] !== "*" ? ", " + cs + "; q=0.01" : "") : f.accepts["*"]);

      for (u in f.headers) {
        v.setRequestHeader(u, f.headers[u]);
      }

      if (f.beforeSend && (f.beforeSend.call(n, v, f) === false || j === 2)) {
        return v.abort();
      }

      x = "abort";

      for (u in {
        success: 1,
        error: 1,
        complete: 1
      }) {
        v[u](f[u]);
      }

      t = ed(cf, f, l, v);

      if (!t) {
        c(-1, "No Transport");
      } else {
        v.readyState = 1;

        if (m) {
          b.trigger("ajaxSend", [v, f]);
        }

        if (f.async && f.timeout > 0) {
          d = setTimeout(function () {
            v.abort("timeout");
          }, f.timeout);
        }

        try {
          j = 1;
          t.send(a, c);
        } catch (s) {
          if (j < 2) {
            c(-1, s);
          } else {
            throw s;
          }
        }
      }

      function c(A, F, z, C) {
        var E,
            G,
            y,
            B,
            H,
            D = F;

        if (j === 2) {
          return;
        }

        j = 2;

        if (d) {
          clearTimeout(d);
        }

        t = cG;
        p = C || "";
        v.readyState = A > 0 ? 4 : 0;
        E = A >= 200 && A < 300 || A === 304;

        if (z) {
          B = dg(f, v, z);
        }

        B = dv(f, B, v, E);

        if (E) {
          if (f.ifModified) {
            H = v.getResponseHeader("Last-Modified");

            if (H) {
              eq.lastModified[h] = H;
            }

            H = v.getResponseHeader("etag");

            if (H) {
              eq.etag[h] = H;
            }
          }

          if (A === 204 || f.type === "HEAD") {
            D = "nocontent";
          } else {
            if (A === 304) {
              D = "notmodified";
            } else {
              D = B.state;
              G = B.data;
              y = B.error;
              E = !y;
            }
          }
        } else {
          y = D;

          if (A || !D) {
            D = "error";

            if (A < 0) {
              A = 0;
            }
          }
        }

        v.status = A;
        v.statusText = (F || D) + "";

        if (E) {
          o.resolveWith(n, [G, D, v]);
        } else {
          o.rejectWith(n, [v, D, y]);
        }

        v.statusCode(g);
        g = cG;

        if (m) {
          b.trigger(E ? "ajaxSuccess" : "ajaxError", [v, f, E ? G : y]);
        }

        r.fireWith(n, [v, D]);

        if (m) {
          b.trigger("ajaxComplete", [v, f]);

          if (! --eq.active) {
            eq.event.trigger("ajaxStop");
          }
        }
      }

      return v;
    },
    getJSON: function getJSON(a, c, b) {
      return eq.get(a, c, b, "json");
    },
    getScript: function getScript(b, a) {
      return eq.get(b, cG, a, "script");
    }
  });
  eq.each(["get", "post"], function (b, a) {
    eq[a] = function (g, d, c, f) {
      if (eq.isFunction(d)) {
        f = f || c;
        c = d;
        d = cG;
      }

      return eq.ajax({
        url: g,
        type: a,
        dataType: f,
        data: d,
        success: c
      });
    };
  });

  function dg(a, b, f) {
    var i,
        g,
        j,
        d,
        h = a.contents,
        c = a.dataTypes;

    while (c[0] === "*") {
      c.shift();

      if (g === cG) {
        g = a.mimeType || b.getResponseHeader("Content-Type");
      }
    }

    if (g) {
      for (d in h) {
        if (h[d] && h[d].test(g)) {
          c.unshift(d);
          break;
        }
      }
    }

    if (c[0] in f) {
      j = c[0];
    } else {
      for (d in f) {
        if (!c[0] || a.converters[d + " " + c[0]]) {
          j = d;
          break;
        }

        if (!i) {
          i = d;
        }
      }

      j = j || i;
    }

    if (j) {
      if (j !== c[0]) {
        c.unshift(j);
      }

      return f[j];
    }
  }

  function dv(a, l, d, m) {
    var k,
        g,
        c,
        i,
        j,
        b = {},
        f = a.dataTypes.slice();

    if (f[1]) {
      for (c in a.converters) {
        b[c.toLowerCase()] = a.converters[c];
      }
    }

    g = f.shift();

    while (g) {
      if (a.responseFields[g]) {
        d[a.responseFields[g]] = l;
      }

      if (!j && m && a.dataFilter) {
        l = a.dataFilter(l, a.dataType);
      }

      j = g;
      g = f.shift();

      if (g) {
        if (g === "*") {
          g = j;
        } else {
          if (j !== "*" && j !== g) {
            c = b[j + " " + g] || b["* " + g];

            if (!c) {
              for (k in b) {
                i = k.split(" ");

                if (i[1] === g) {
                  c = b[j + " " + i[0]] || b["* " + i[0]];

                  if (c) {
                    if (c === true) {
                      c = b[k];
                    } else {
                      if (b[k] !== true) {
                        g = i[0];
                        f.unshift(i[1]);
                      }
                    }

                    break;
                  }
                }
              }
            }

            if (c !== true) {
              if (c && a["throws"]) {
                l = c(l);
              } else {
                try {
                  l = c(l);
                } catch (h) {
                  return {
                    state: "parsererror",
                    error: c ? h : "No conversion from " + j + " to " + g
                  };
                }
              }
            }
          }
        }
      }
    }

    return {
      state: "success",
      data: l
    };
  }

  eq.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /(?:java|ecma)script/
    },
    converters: {
      "text script": function textScript(a) {
        eq.globalEval(a);
        return a;
      }
    }
  });
  eq.ajaxPrefilter("script", function (a) {
    if (a.cache === cG) {
      a.cache = false;
    }

    if (a.crossDomain) {
      a.type = "GET";
      a.global = false;
    }
  });
  eq.ajaxTransport("script", function (b) {
    if (b.crossDomain) {
      var a,
          c = dO.head || eq("head")[0] || dO.documentElement;
      return {
        send: function send(f, d) {
          a = dO.createElement("script");
          a.async = true;

          if (b.scriptCharset) {
            a.charset = b.scriptCharset;
          }

          a.src = b.url;

          a.onload = a.onreadystatechange = function (g, h) {
            if (h || !a.readyState || /loaded|complete/.test(a.readyState)) {
              a.onload = a.onreadystatechange = null;

              if (a.parentNode) {
                a.parentNode.removeChild(a);
              }

              a = null;

              if (!h) {
                d(200, "success");
              }
            }
          };

          c.insertBefore(a, c.firstChild);
        },
        abort: function abort() {
          if (a) {
            a.onload(cG, true);
          }
        }
      };
    }
  });
  var eH = [],
      d7 = /(=)\?(?=&|$)|\?\?/;
  eq.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function jsonpCallback() {
      var a = eH.pop() || eq.expando + "_" + cc++;
      this[a] = true;
      return a;
    }
  });
  eq.ajaxPrefilter("json jsonp", function (b, h, a) {
    var c,
        g,
        f,
        d = b.jsonp !== false && (d7.test(b.url) ? "url" : typeof b.data === "string" && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && d7.test(b.data) && "data");

    if (d || b.dataTypes[0] === "jsonp") {
      c = b.jsonpCallback = eq.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback;

      if (d) {
        b[d] = b[d].replace(d7, "$1" + c);
      } else {
        if (b.jsonp !== false) {
          b.url += (dV.test(b.url) ? "&" : "?") + b.jsonp + "=" + c;
        }
      }

      b.converters["script json"] = function () {
        if (!f) {
          eq.error(c + " was not called");
        }

        return f[0];
      };

      b.dataTypes[0] = "json";
      g = eI[c];

      eI[c] = function () {
        f = arguments;
      };

      a.always(function () {
        eI[c] = g;

        if (b[c]) {
          b.jsonpCallback = h.jsonpCallback;
          eH.push(c);
        }

        if (f && eq.isFunction(g)) {
          g(f[0]);
        }

        f = g = cG;
      });
      return "script";
    }
  });

  var d6,
      c1,
      et = 0,
      ct = eI.ActiveXObject && function () {
    var a;

    for (a in d6) {
      d6[a](cG, true);
    }
  };

  function ck() {
    try {
      return new eI.XMLHttpRequest();
    } catch (a) {}
  }

  function cY() {
    try {
      return new eI.ActiveXObject("Microsoft.XMLHTTP");
    } catch (a) {}
  }

  eq.ajaxSettings.xhr = eI.ActiveXObject ? function () {
    return !this.isLocal && ck() || cY();
  } : ck;
  c1 = eq.ajaxSettings.xhr();
  eq.support.cors = !!c1 && "withCredentials" in c1;
  c1 = eq.support.ajax = !!c1;

  if (c1) {
    eq.ajaxTransport(function (b) {
      if (!b.crossDomain || eq.support.cors) {
        var _a;

        return {
          send: function send(f, d) {
            var h,
                c,
                g = b.xhr();

            if (b.username) {
              g.open(b.type, b.url, b.async, b.username, b.password);
            } else {
              g.open(b.type, b.url, b.async);
            }

            if (b.xhrFields) {
              for (c in b.xhrFields) {
                g[c] = b.xhrFields[c];
              }
            }

            if (b.mimeType && g.overrideMimeType) {
              g.overrideMimeType(b.mimeType);
            }

            if (!b.crossDomain && !f["X-Requested-With"]) {
              f["X-Requested-With"] = "XMLHttpRequest";
            }

            try {
              for (c in f) {
                g.setRequestHeader(c, f[c]);
              }
            } catch (i) {}

            g.send(b.hasContent && b.data || null);

            _a = function a(k, l) {
              var m, j, o, q;

              try {
                if (_a && (l || g.readyState === 4)) {
                  _a = cG;

                  if (h) {
                    g.onreadystatechange = eq.noop;

                    if (ct) {
                      delete d6[h];
                    }
                  }

                  if (l) {
                    if (g.readyState !== 4) {
                      g.abort();
                    }
                  } else {
                    q = {};
                    m = g.status;
                    j = g.getAllResponseHeaders();

                    if (typeof g.responseText === "string") {
                      q.text = g.responseText;
                    }

                    try {
                      o = g.statusText;
                    } catch (p) {
                      o = "";
                    }

                    if (!m && b.isLocal && !b.crossDomain) {
                      m = q.text ? 200 : 404;
                    } else {
                      if (m === 1223) {
                        m = 204;
                      }
                    }
                  }
                }
              } catch (n) {
                if (!l) {
                  d(-1, n);
                }
              }

              if (q) {
                d(m, o, q, j);
              }
            };

            if (!b.async) {
              _a();
            } else {
              if (g.readyState === 4) {
                setTimeout(_a);
              } else {
                h = ++et;

                if (ct) {
                  if (!d6) {
                    d6 = {};
                    eq(eI).unload(ct);
                  }

                  d6[h] = _a;
                }

                g.onreadystatechange = _a;
              }
            }
          },
          abort: function abort() {
            if (_a) {
              _a(cG, true);
            }
          }
        };
      }
    });
  }

  var eD,
      cX,
      eF = /^(?:toggle|show|hide)$/,
      c3 = new RegExp("^(?:([+-])=|)(" + cJ + ")([a-z%]*)$", "i"),
      dh = /queueHooks$/,
      es = [c9],
      dQ = {
    "*": [function (i, c) {
      var a = this.createTween(i, c),
          f = a.cur(),
          g = c3.exec(c),
          b = g && g[3] || (eq.cssNumber[i] ? "" : "px"),
          h = (eq.cssNumber[i] || b !== "px" && +f) && c3.exec(eq.css(a.elem, i)),
          j = 1,
          d = 20;

      if (h && h[3] !== b) {
        b = b || h[3];
        g = g || [];
        h = +f || 1;

        do {
          j = j || ".5";
          h = h / j;
          eq.style(a.elem, i, h + b);
        } while (j !== (j = a.cur() / f) && j !== 1 && --d);
      }

      if (g) {
        h = a.start = +h || +f || 0;
        a.unit = b;
        a.end = g[1] ? h + (g[1] + 1) * g[2] : +g[2];
      }

      return a;
    }]
  };

  function ee() {
    setTimeout(function () {
      eD = cG;
    });
    return eD = eq.now();
  }

  function cq(a, c, b) {
    var g,
        h = (dQ[c] || []).concat(dQ["*"]),
        f = 0,
        d = h.length;

    for (; f < d; f++) {
      if (g = h[f].call(b, c, a)) {
        return g;
      }
    }
  }

  function cR(l, f, b) {
    var a,
        k,
        g = 0,
        j = es.length,
        c = eq.Deferred().always(function () {
      delete h.elem;
    }),
        h = function h() {
      if (k) {
        return false;
      }

      var r = eD || ee(),
          o = Math.max(0, i.startTime + i.duration - r),
          q = o / i.duration || 0,
          m = 1 - q,
          p = 0,
          n = i.tweens.length;

      for (; p < n; p++) {
        i.tweens[p].run(m);
      }

      c.notifyWith(l, [i, m, o]);

      if (m < 1 && n) {
        return o;
      } else {
        c.resolveWith(l, [i]);
        return false;
      }
    },
        i = c.promise({
      elem: l,
      props: eq.extend({}, f),
      opts: eq.extend(true, {
        specialEasing: {}
      }, b),
      originalProperties: f,
      originalOptions: b,
      startTime: eD || ee(),
      duration: b.duration,
      tweens: [],
      createTween: function createTween(o, n) {
        var m = eq.Tween(l, i.opts, o, n, i.opts.specialEasing[o] || i.opts.easing);
        i.tweens.push(m);
        return m;
      },
      stop: function stop(m) {
        var n = 0,
            o = m ? i.tweens.length : 0;

        if (k) {
          return this;
        }

        k = true;

        for (; n < o; n++) {
          i.tweens[n].run(1);
        }

        if (m) {
          c.resolveWith(l, [i, m]);
        } else {
          c.rejectWith(l, [i, m]);
        }

        return this;
      }
    }),
        d = i.props;

    cA(d, i.opts.specialEasing);

    for (; g < j; g++) {
      a = es[g].call(i, l, d, i.opts);

      if (a) {
        return a;
      }
    }

    eq.map(d, cq, i);

    if (eq.isFunction(i.opts.start)) {
      i.opts.start.call(l, i);
    }

    eq.fx.timer(eq.extend(h, {
      elem: l,
      anim: i,
      queue: i.opts.queue
    }));
    return i.progress(i.opts.progress).done(i.opts.done, i.opts.complete).fail(i.opts.fail).always(i.opts.always);
  }

  function cA(b, h) {
    var f, g, c, a, d;

    for (f in b) {
      g = eq.camelCase(f);
      c = h[g];
      a = b[f];

      if (eq.isArray(a)) {
        c = a[1];
        a = b[f] = a[0];
      }

      if (f !== g) {
        b[g] = a;
        delete b[f];
      }

      d = eq.cssHooks[g];

      if (d && "expand" in d) {
        a = d.expand(a);
        delete b[g];

        for (f in a) {
          if (!(f in b)) {
            b[f] = a[f];
            h[f] = c;
          }
        }
      } else {
        h[g] = c;
      }
    }
  }

  eq.Animation = eq.extend(cR, {
    tweener: function tweener(d, a) {
      if (eq.isFunction(d)) {
        a = d;
        d = ["*"];
      } else {
        d = d.split(" ");
      }

      var b,
          f = 0,
          c = d.length;

      for (; f < c; f++) {
        b = d[f];
        dQ[b] = dQ[b] || [];
        dQ[b].unshift(a);
      }
    },
    prefilter: function prefilter(a, b) {
      if (b) {
        es.unshift(a);
      } else {
        es.push(a);
      }
    }
  });

  function c9(m, h, n) {
    var o,
        f,
        j,
        b,
        a,
        d,
        k = this,
        g = {},
        l = m.style,
        i = m.nodeType && dA(m),
        c = eq._data(m, "fxshow");

    if (!n.queue) {
      a = eq._queueHooks(m, "fx");

      if (a.unqueued == null) {
        a.unqueued = 0;
        d = a.empty.fire;

        a.empty.fire = function () {
          if (!a.unqueued) {
            d();
          }
        };
      }

      a.unqueued++;
      k.always(function () {
        k.always(function () {
          a.unqueued--;

          if (!eq.queue(m, "fx").length) {
            a.empty.fire();
          }
        });
      });
    }

    if (m.nodeType === 1 && ("height" in h || "width" in h)) {
      n.overflow = [l.overflow, l.overflowX, l.overflowY];

      if (eq.css(m, "display") === "inline" && eq.css(m, "float") === "none") {
        if (!eq.support.inlineBlockNeedsLayout || cH(m.nodeName) === "inline") {
          l.display = "inline-block";
        } else {
          l.zoom = 1;
        }
      }
    }

    if (n.overflow) {
      l.overflow = "hidden";

      if (!eq.support.shrinkWrapBlocks) {
        k.always(function () {
          l.overflow = n.overflow[0];
          l.overflowX = n.overflow[1];
          l.overflowY = n.overflow[2];
        });
      }
    }

    for (o in h) {
      f = h[o];

      if (eF.exec(f)) {
        delete h[o];
        j = j || f === "toggle";

        if (f === (i ? "hide" : "show")) {
          continue;
        }

        g[o] = c && c[o] || eq.style(m, o);
      }
    }

    if (!eq.isEmptyObject(g)) {
      if (c) {
        if ("hidden" in c) {
          i = c.hidden;
        }
      } else {
        c = eq._data(m, "fxshow", {});
      }

      if (j) {
        c.hidden = !i;
      }

      if (i) {
        eq(m).show();
      } else {
        k.done(function () {
          eq(m).hide();
        });
      }

      k.done(function () {
        var p;

        eq._removeData(m, "fxshow");

        for (p in g) {
          eq.style(m, p, g[p]);
        }
      });

      for (o in g) {
        b = cq(i ? c[o] : 0, o, k);

        if (!(o in c)) {
          c[o] = b.start;

          if (i) {
            b.end = b.start;
            b.start = o === "width" || o === "height" ? 1 : 0;
          }
        }
      }
    }
  }

  function cL(c, d, a, f, b) {
    return new cL.prototype.init(c, d, a, f, b);
  }

  eq.Tween = cL;
  cL.prototype = {
    constructor: cL,
    init: function init(b, f, g, d, a, c) {
      this.elem = b;
      this.prop = g;
      this.easing = a || "swing";
      this.options = f;
      this.start = this.now = this.cur();
      this.end = d;
      this.unit = c || (eq.cssNumber[g] ? "" : "px");
    },
    cur: function cur() {
      var a = cL.propHooks[this.prop];
      return a && a.get ? a.get(this) : cL.propHooks._default.get(this);
    },
    run: function run(b) {
      var c,
          a = cL.propHooks[this.prop];

      if (this.options.duration) {
        this.pos = c = eq.easing[this.easing](b, this.options.duration * b, 0, 1, this.options.duration);
      } else {
        this.pos = c = b;
      }

      this.now = (this.end - this.start) * c + this.start;

      if (this.options.step) {
        this.options.step.call(this.elem, this.now, this);
      }

      if (a && a.set) {
        a.set(this);
      } else {
        cL.propHooks._default.set(this);
      }

      return this;
    }
  };
  cL.prototype.init.prototype = cL.prototype;
  cL.propHooks = {
    _default: {
      get: function get(a) {
        var b;

        if (a.elem[a.prop] != null && (!a.elem.style || a.elem.style[a.prop] == null)) {
          return a.elem[a.prop];
        }

        b = eq.css(a.elem, a.prop, "");
        return !b || b === "auto" ? 0 : b;
      },
      set: function set(a) {
        if (eq.fx.step[a.prop]) {
          eq.fx.step[a.prop](a);
        } else {
          if (a.elem.style && (a.elem.style[eq.cssProps[a.prop]] != null || eq.cssHooks[a.prop])) {
            eq.style(a.elem, a.prop, a.now + a.unit);
          } else {
            a.elem[a.prop] = a.now;
          }
        }
      }
    }
  };
  cL.propHooks.scrollTop = cL.propHooks.scrollLeft = {
    set: function set(a) {
      if (a.elem.nodeType && a.elem.parentNode) {
        a.elem[a.prop] = a.now;
      }
    }
  };
  eq.each(["toggle", "show", "hide"], function (c, a) {
    var b = eq.fn[a];

    eq.fn[a] = function (g, d, f) {
      return g == null || typeof g === "boolean" ? b.apply(this, arguments) : this.animate(ea(a, true), g, d, f);
    };
  });
  eq.fn.extend({
    fadeTo: function fadeTo(b, c, d, a) {
      return this.filter(dA).css("opacity", 0).show().end().animate({
        opacity: c
      }, b, d, a);
    },
    animate: function animate(c, b, h, a) {
      var f = eq.isEmptyObject(c),
          g = eq.speed(b, h, a),
          d = function d() {
        var i = cR(this, eq.extend({}, c), g);

        if (f || eq._data(this, "finish")) {
          i.stop(true);
        }
      };

      d.finish = d;
      return f || g.queue === false ? this.each(d) : this.queue(g.queue, d);
    },
    stop: function stop(d, a, b) {
      var c = function c(g) {
        var f = g.stop;
        delete g.stop;
        f(b);
      };

      if (typeof d !== "string") {
        b = a;
        a = d;
        d = cG;
      }

      if (a && d !== false) {
        this.queue(d || "fx", []);
      }

      return this.each(function () {
        var f = true,
            i = d != null && d + "queueHooks",
            g = eq.timers,
            h = eq._data(this);

        if (i) {
          if (h[i] && h[i].stop) {
            c(h[i]);
          }
        } else {
          for (i in h) {
            if (h[i] && h[i].stop && dh.test(i)) {
              c(h[i]);
            }
          }
        }

        for (i = g.length; i--;) {
          if (g[i].elem === this && (d == null || g[i].queue === d)) {
            g[i].anim.stop(b);
            f = false;
            g.splice(i, 1);
          }
        }

        if (f || !b) {
          eq.dequeue(this, d);
        }
      });
    },
    finish: function finish(a) {
      if (a !== false) {
        a = a || "fx";
      }

      return this.each(function () {
        var b,
            f = eq._data(this),
            c = f[a + "queue"],
            d = f[a + "queueHooks"],
            g = eq.timers,
            h = c ? c.length : 0;

        f.finish = true;
        eq.queue(this, a, []);

        if (d && d.stop) {
          d.stop.call(this, true);
        }

        for (b = g.length; b--;) {
          if (g[b].elem === this && g[b].queue === a) {
            g[b].anim.stop(true);
            g.splice(b, 1);
          }
        }

        for (b = 0; b < h; b++) {
          if (c[b] && c[b].finish) {
            c[b].finish.call(this);
          }
        }

        delete f.finish;
      });
    }
  });

  function ea(c, a) {
    var b,
        f = {
      height: c
    },
        d = 0;
    a = a ? 1 : 0;

    for (; d < 4; d += 2 - a) {
      b = cB[d];
      f["margin" + b] = f["padding" + b] = c;
    }

    if (a) {
      f.opacity = f.width = c;
    }

    return f;
  }

  eq.each({
    slideDown: ea("show"),
    slideUp: ea("hide"),
    slideToggle: ea("toggle"),
    fadeIn: {
      opacity: "show"
    },
    fadeOut: {
      opacity: "hide"
    },
    fadeToggle: {
      opacity: "toggle"
    }
  }, function (b, a) {
    eq.fn[b] = function (d, f, c) {
      return this.animate(a, d, f, c);
    };
  });

  eq.speed = function (d, c, a) {
    var b = d && _typeof(d) === "object" ? eq.extend({}, d) : {
      complete: a || !a && c || eq.isFunction(d) && d,
      duration: d,
      easing: a && c || c && !eq.isFunction(c) && c
    };
    b.duration = eq.fx.off ? 0 : typeof b.duration === "number" ? b.duration : b.duration in eq.fx.speeds ? eq.fx.speeds[b.duration] : eq.fx.speeds._default;

    if (b.queue == null || b.queue === true) {
      b.queue = "fx";
    }

    b.old = b.complete;

    b.complete = function () {
      if (eq.isFunction(b.old)) {
        b.old.call(this);
      }

      if (b.queue) {
        eq.dequeue(this, b.queue);
      }
    };

    return b;
  };

  eq.easing = {
    linear: function linear(a) {
      return a;
    },
    swing: function swing(a) {
      return 0.5 - Math.cos(a * Math.PI) / 2;
    }
  };
  eq.timers = [];
  eq.fx = cL.prototype.init;

  eq.fx.tick = function () {
    var b,
        c = eq.timers,
        a = 0;
    eD = eq.now();

    for (; a < c.length; a++) {
      b = c[a];

      if (!b() && c[a] === b) {
        c.splice(a--, 1);
      }
    }

    if (!c.length) {
      eq.fx.stop();
    }

    eD = cG;
  };

  eq.fx.timer = function (a) {
    if (a() && eq.timers.push(a)) {
      eq.fx.start();
    }
  };

  eq.fx.interval = 13;

  eq.fx.start = function () {
    if (!cX) {
      cX = setInterval(eq.fx.tick, eq.fx.interval);
    }
  };

  eq.fx.stop = function () {
    clearInterval(cX);
    cX = null;
  };

  eq.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400
  };
  eq.fx.step = {};

  if (eq.expr && eq.expr.filters) {
    eq.expr.filters.animated = function (a) {
      return eq.grep(eq.timers, function (b) {
        return a === b.elem;
      }).length;
    };
  }

  eq.fn.offset = function (f) {
    if (arguments.length) {
      return f === cG ? this : this.each(function (h) {
        eq.offset.setOffset(this, f, h);
      });
    }

    var g,
        d,
        b = {
      top: 0,
      left: 0
    },
        a = this[0],
        c = a && a.ownerDocument;

    if (!c) {
      return;
    }

    g = c.documentElement;

    if (!eq.contains(g, a)) {
      return b;
    }

    if (_typeof(a.getBoundingClientRect) !== dM) {
      b = a.getBoundingClientRect();
    }

    d = dt(c);
    return {
      top: b.top + (d.pageYOffset || g.scrollTop) - (g.clientTop || 0),
      left: b.left + (d.pageXOffset || g.scrollLeft) - (g.clientLeft || 0)
    };
  };

  eq.offset = {
    setOffset: function setOffset(n, a, h) {
      var g = eq.css(n, "position");

      if (g === "static") {
        n.style.position = "relative";
      }

      var i = eq(n),
          l = i.offset(),
          m = eq.css(n, "top"),
          c = eq.css(n, "left"),
          b = (g === "absolute" || g === "fixed") && eq.inArray("auto", [m, c]) > -1,
          d = {},
          f = {},
          k,
          j;

      if (b) {
        f = i.position();
        k = f.top;
        j = f.left;
      } else {
        k = parseFloat(m) || 0;
        j = parseFloat(c) || 0;
      }

      if (eq.isFunction(a)) {
        a = a.call(n, h, l);
      }

      if (a.top != null) {
        d.top = a.top - l.top + k;
      }

      if (a.left != null) {
        d.left = a.left - l.left + j;
      }

      if ("using" in a) {
        a.using.call(n, d);
      } else {
        i.css(d);
      }
    }
  };
  eq.fn.extend({
    position: function position() {
      if (!this[0]) {
        return;
      }

      var d,
          c,
          b = {
        top: 0,
        left: 0
      },
          a = this[0];

      if (eq.css(a, "position") === "fixed") {
        c = a.getBoundingClientRect();
      } else {
        d = this.offsetParent();
        c = this.offset();

        if (!eq.nodeName(d[0], "html")) {
          b = d.offset();
        }

        b.top += eq.css(d[0], "borderTopWidth", true);
        b.left += eq.css(d[0], "borderLeftWidth", true);
      }

      return {
        top: c.top - b.top - eq.css(a, "marginTop", true),
        left: c.left - b.left - eq.css(a, "marginLeft", true)
      };
    },
    offsetParent: function offsetParent() {
      return this.map(function () {
        var a = this.offsetParent || eG;

        while (a && !eq.nodeName(a, "html") && eq.css(a, "position") === "static") {
          a = a.offsetParent;
        }

        return a || eG;
      });
    }
  });
  eq.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function (b, c) {
    var a = /Y/.test(c);

    eq.fn[b] = function (d) {
      return eq.access(this, function (i, f, g) {
        var h = dt(i);

        if (g === cG) {
          return h ? c in h ? h[c] : h.document.documentElement[f] : i[f];
        }

        if (h) {
          h.scrollTo(!a ? g : eq(h).scrollLeft(), a ? g : eq(h).scrollTop());
        } else {
          i[f] = g;
        }
      }, b, d, arguments.length, null);
    };
  });

  function dt(a) {
    return eq.isWindow(a) ? a : a.nodeType === 9 ? a.defaultView || a.parentWindow : false;
  }

  eq.each({
    Height: "height",
    Width: "width"
  }, function (b, a) {
    eq.each({
      padding: "inner" + b,
      content: a,
      "": "outer" + b
    }, function (d, c) {
      eq.fn[c] = function (f, g) {
        var h = arguments.length && (d || typeof f !== "boolean"),
            i = d || (f === true || g === true ? "margin" : "border");
        return eq.access(this, function (l, m, k) {
          var j;

          if (eq.isWindow(l)) {
            return l.document.documentElement["client" + b];
          }

          if (l.nodeType === 9) {
            j = l.documentElement;
            return Math.max(l.body["scroll" + b], j["scroll" + b], l.body["offset" + b], j["offset" + b], j["client" + b]);
          }

          return k === cG ? eq.css(l, m, i) : eq.style(l, m, k, i);
        }, a, h ? f : cG, h, null);
      };
    });
  });

  eq.fn.size = function () {
    return this.length;
  };

  eq.fn.andSelf = eq.fn.addBack;

  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && module && _typeof(module.exports) === "object") {
    module.exports = eq;
  } else {
    eI.jQuery = eI.$ = eq;

    if (typeof define === "function" && define.amd) {
      define("jquery", [], function () {
        return eq;
      });
    }
  }
})(window);
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "54751" + '/');

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
},{}]},{},["node_modules/parcel/src/builtins/hmr-runtime.js","js/jquery-1.10.2.js"], null)
//# sourceMappingURL=/jquery-1.10.2.6ca52c13.js.map