/*!
 * Bootstrap Colorpicker - Bootstrap Colorpicker is a modular color picker plugin for Bootstrap 4.
 * @package bootstrap-colorpicker
 * @version v3.0.3
 * @license MIT
 * @link https://farbelous.github.io/bootstrap-colorpicker/
 * @link https://github.com/farbelous/bootstrap-colorpicker.git
 */
!(function (e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t(require("jQuery")))
    : "function" == typeof define && define.amd
    ? define("bootstrap-colorpicker", ["jQuery"], t)
    : "object" == typeof exports
    ? (exports["bootstrap-colorpicker"] = t(require("jQuery")))
    : (e["bootstrap-colorpicker"] = t(e.jQuery));
})("undefined" != typeof self ? self : this, function (e) {
  return (function (e) {
    function t(r) {
      if (o[r]) return o[r].exports;
      var n = (o[r] = { i: r, l: !1, exports: {} });
      return e[r].call(n.exports, n, n.exports, t), (n.l = !0), n.exports;
    }
    var o = {};
    return (
      (t.m = e),
      (t.c = o),
      (t.d = function (e, o, r) {
        t.o(e, o) ||
          Object.defineProperty(e, o, {
            configurable: !1,
            enumerable: !0,
            get: r,
          });
      }),
      (t.n = function (e) {
        var o =
          e && e.__esModule
            ? function () {
                return e.default;
              }
            : function () {
                return e;
              };
        return t.d(o, "a", o), o;
      }),
      (t.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (t.p = ""),
      t((t.s = 7))
    );
  })([
    function (t, o) {
      t.exports = e;
    },
    function (e, t, o) {
      "use strict";
      function r(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = (function () {
          function e(e, t) {
            for (var o = 0; o < t.length; o++) {
              var r = t[o];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function (t, o, r) {
            return o && e(t.prototype, o), r && e(t, r), t;
          };
        })(),
        i = o(0),
        a = (function (e) {
          return e && e.__esModule ? e : { default: e };
        })(i),
        l = (function () {
          function e(t) {
            var o =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            if (
              (r(this, e),
              (this.colorpicker = t),
              (this.options = o),
              !this.colorpicker.element || !this.colorpicker.element.length)
            )
              throw new Error(
                "Extension: this.colorpicker.element is not valid"
              );
            this.colorpicker.element.on(
              "colorpickerCreate.colorpicker-ext",
              a.default.proxy(this.onCreate, this)
            ),
              this.colorpicker.element.on(
                "colorpickerDestroy.colorpicker-ext",
                a.default.proxy(this.onDestroy, this)
              ),
              this.colorpicker.element.on(
                "colorpickerUpdate.colorpicker-ext",
                a.default.proxy(this.onUpdate, this)
              ),
              this.colorpicker.element.on(
                "colorpickerChange.colorpicker-ext",
                a.default.proxy(this.onChange, this)
              ),
              this.colorpicker.element.on(
                "colorpickerInvalid.colorpicker-ext",
                a.default.proxy(this.onInvalid, this)
              ),
              this.colorpicker.element.on(
                "colorpickerShow.colorpicker-ext",
                a.default.proxy(this.onShow, this)
              ),
              this.colorpicker.element.on(
                "colorpickerHide.colorpicker-ext",
                a.default.proxy(this.onHide, this)
              ),
              this.colorpicker.element.on(
                "colorpickerEnable.colorpicker-ext",
                a.default.proxy(this.onEnable, this)
              ),
              this.colorpicker.element.on(
                "colorpickerDisable.colorpicker-ext",
                a.default.proxy(this.onDisable, this)
              );
          }
          return (
            n(e, [
              {
                key: "resolveColor",
                value: function (e) {
                  !(arguments.length > 1 && void 0 !== arguments[1]) ||
                    arguments[1];
                  return !1;
                },
              },
              { key: "onCreate", value: function (e) {} },
              {
                key: "onDestroy",
                value: function (e) {
                  this.colorpicker.element.off(".colorpicker-ext");
                },
              },
              { key: "onUpdate", value: function (e) {} },
              { key: "onChange", value: function (e) {} },
              { key: "onInvalid", value: function (e) {} },
              { key: "onHide", value: function (e) {} },
              { key: "onShow", value: function (e) {} },
              { key: "onDisable", value: function (e) {} },
              { key: "onEnable", value: function (e) {} },
            ]),
            e
          );
        })();
      t.default = l;
    },
    function (e, t, o) {
      "use strict";
      function r(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.ColorItem = t.HSVAColor = void 0);
      var n = (function () {
          function e(e, t) {
            for (var o = 0; o < t.length; o++) {
              var r = t[o];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function (t, o, r) {
            return o && e(t.prototype, o), r && e(t, r), t;
          };
        })(),
        i = o(16),
        a = (function (e) {
          return e && e.__esModule ? e : { default: e };
        })(i),
        l = (function () {
          function e(t, o, n, i) {
            r(this, e),
              (this.h = isNaN(t) ? 0 : t),
              (this.s = isNaN(o) ? 0 : o),
              (this.v = isNaN(n) ? 0 : n),
              (this.a = isNaN(t) ? 1 : i);
          }
          return (
            n(e, [
              {
                key: "toString",
                value: function () {
                  return (
                    this.h + ", " + this.s + "%, " + this.v + "%, " + this.a
                  );
                },
              },
            ]),
            e
          );
        })(),
        s = (function () {
          function e() {
            var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : null,
              o =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : null;
            r(this, e), this.replace(t, o);
          }
          return (
            n(
              e,
              [
                {
                  key: "api",
                  value: function (t) {
                    for (
                      var o = arguments.length,
                        r = Array(o > 1 ? o - 1 : 0),
                        n = 1;
                      n < o;
                      n++
                    )
                      r[n - 1] = arguments[n];
                    if (0 === arguments.length) return this._color;
                    var i = this._color[t].apply(this._color, r);
                    return i instanceof a.default ? new e(i, this.format) : i;
                  },
                },
                {
                  key: "original",
                  get: function () {
                    return this._original;
                  },
                },
              ],
              [
                {
                  key: "HSVAColor",
                  get: function () {
                    return l;
                  },
                },
              ]
            ),
            n(
              e,
              [
                {
                  key: "replace",
                  value: function (t) {
                    var o =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : null;
                    if (
                      ((o = e.sanitizeFormat(o)),
                      (this._original = { color: t, format: o, valid: !0 }),
                      (this._color = e.parse(t)),
                      null === this._color)
                    )
                      return (
                        (this._color = (0, a.default)(null)),
                        void (this._original.valid = !1)
                      );
                    this._format =
                      o || (e.isHex(t) ? "hex" : this._color.model);
                  },
                },
                {
                  key: "isValid",
                  value: function () {
                    return !0 === this._original.valid;
                  },
                },
                {
                  key: "setHueRatio",
                  value: function (e) {
                    this.hue = 360 * (1 - e);
                  },
                },
                {
                  key: "setSaturationRatio",
                  value: function (e) {
                    this.saturation = 100 * e;
                  },
                },
                {
                  key: "setValueRatio",
                  value: function (e) {
                    this.value = 100 * (1 - e);
                  },
                },
                {
                  key: "setAlphaRatio",
                  value: function (e) {
                    this.alpha = 1 - e;
                  },
                },
                {
                  key: "isDesaturated",
                  value: function () {
                    return 0 === this.saturation;
                  },
                },
                {
                  key: "isTransparent",
                  value: function () {
                    return 0 === this.alpha;
                  },
                },
                {
                  key: "hasTransparency",
                  value: function () {
                    return this.hasAlpha() && this.alpha < 1;
                  },
                },
                {
                  key: "hasAlpha",
                  value: function () {
                    return !isNaN(this.alpha);
                  },
                },
                {
                  key: "toObject",
                  value: function () {
                    return new l(
                      this.hue,
                      this.saturation,
                      this.value,
                      this.alpha
                    );
                  },
                },
                {
                  key: "toHsva",
                  value: function () {
                    return this.toObject();
                  },
                },
                {
                  key: "toHsvaRatio",
                  value: function () {
                    return new l(
                      this.hue / 360,
                      this.saturation / 100,
                      this.value / 100,
                      this.alpha
                    );
                  },
                },
                {
                  key: "toString",
                  value: function () {
                    return this.string();
                  },
                },
                {
                  key: "string",
                  value: function () {
                    var t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : null;
                    if (!(t = e.sanitizeFormat(t || this.format)))
                      return this._color.round().string();
                    if (void 0 === this._color[t])
                      throw new Error("Unsupported color format: '" + t + "'");
                    var o = this._color[t]();
                    return o.round ? o.round().string() : o;
                  },
                },
                {
                  key: "equals",
                  value: function (t) {
                    return (
                      (t = t instanceof e ? t : new e(t)),
                      !(!t.isValid() || !this.isValid()) &&
                        this.hue === t.hue &&
                        this.saturation === t.saturation &&
                        this.value === t.value &&
                        this.alpha === t.alpha
                    );
                  },
                },
                {
                  key: "getClone",
                  value: function () {
                    return new e(this._color, this.format);
                  },
                },
                {
                  key: "getCloneHueOnly",
                  value: function () {
                    return new e([this.hue, 100, 100, 1], this.format);
                  },
                },
                {
                  key: "getCloneOpaque",
                  value: function () {
                    return new e(this._color.alpha(1), this.format);
                  },
                },
                {
                  key: "toRgbString",
                  value: function () {
                    return this.string("rgb");
                  },
                },
                {
                  key: "toHexString",
                  value: function () {
                    return this.string("hex");
                  },
                },
                {
                  key: "toHslString",
                  value: function () {
                    return this.string("hsl");
                  },
                },
                {
                  key: "isDark",
                  value: function () {
                    return this._color.isDark();
                  },
                },
                {
                  key: "isLight",
                  value: function () {
                    return this._color.isLight();
                  },
                },
                {
                  key: "generate",
                  value: function (t) {
                    var o = [];
                    if (Array.isArray(t)) o = t;
                    else {
                      if (!e.colorFormulas.hasOwnProperty(t))
                        throw new Error(
                          "No color formula found with the name '" + t + "'."
                        );
                      o = e.colorFormulas[t];
                    }
                    var r = [],
                      n = this._color,
                      i = this.format;
                    return (
                      o.forEach(function (t) {
                        var o = [
                          t ? (n.hue() + t) % 360 : n.hue(),
                          n.saturationv(),
                          n.value(),
                          n.alpha(),
                        ];
                        r.push(new e(o, i));
                      }),
                      r
                    );
                  },
                },
                {
                  key: "hue",
                  get: function () {
                    return this._color.hue();
                  },
                  set: function (e) {
                    this._color = this._color.hue(e);
                  },
                },
                {
                  key: "saturation",
                  get: function () {
                    return this._color.saturationv();
                  },
                  set: function (e) {
                    this._color = this._color.saturationv(e);
                  },
                },
                {
                  key: "value",
                  get: function () {
                    return this._color.value();
                  },
                  set: function (e) {
                    this._color = this._color.value(e);
                  },
                },
                {
                  key: "alpha",
                  get: function () {
                    var e = this._color.alpha();
                    return isNaN(e) ? 1 : e;
                  },
                  set: function (e) {
                    this._color = this._color.alpha(Math.round(100 * e) / 100);
                  },
                },
                {
                  key: "format",
                  get: function () {
                    return this._format ? this._format : this._color.model;
                  },
                  set: function (t) {
                    this._format = e.sanitizeFormat(t);
                  },
                },
              ],
              [
                {
                  key: "parse",
                  value: function (t) {
                    if (t instanceof a.default) return t;
                    if (t instanceof e) return t._color;
                    var o = null;
                    (t =
                      t instanceof l
                        ? [t.h, t.s, t.v, isNaN(t.a) ? 1 : t.a]
                        : e.sanitizeString(t)),
                      Array.isArray(t) && (o = "hsv");
                    try {
                      return (0, a.default)(t, o);
                    } catch (e) {
                      return null;
                    }
                  },
                },
                {
                  key: "sanitizeString",
                  value: function (e) {
                    return "string" == typeof e || e instanceof String
                      ? e.match(/^[0-9a-f]{2,}$/i)
                        ? "#" + e
                        : "transparent" === e.toLowerCase()
                        ? "#FFFFFF00"
                        : e
                      : e;
                  },
                },
                {
                  key: "isHex",
                  value: function (e) {
                    return (
                      ("string" == typeof e || e instanceof String) &&
                      !!e.match(/^#?[0-9a-f]{2,}$/i)
                    );
                  },
                },
                {
                  key: "sanitizeFormat",
                  value: function (e) {
                    switch (e) {
                      case "hex":
                      case "hex3":
                      case "hex4":
                      case "hex6":
                      case "hex8":
                        return "hex";
                      case "rgb":
                      case "rgba":
                      case "keyword":
                      case "name":
                        return "rgb";
                      case "hsl":
                      case "hsla":
                      case "hsv":
                      case "hsva":
                      case "hwb":
                      case "hwba":
                        return "hsl";
                      default:
                        return "";
                    }
                  },
                },
              ]
            ),
            e
          );
        })();
      (s.colorFormulas = {
        complementary: [180],
        triad: [0, 120, 240],
        tetrad: [0, 90, 180, 270],
        splitcomplement: [0, 72, 216],
      }),
        (t.default = s),
        (t.HSVAColor = l),
        (t.ColorItem = s);
    },
    function (e, t, o) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = { bar_size_short: 16, base_margin: 6, columns: 6 },
        n = r.bar_size_short * r.columns + r.base_margin * (r.columns - 1);
      t.default = {
        customClass: null,
        color: !1,
        fallbackColor: !1,
        format: null,
        horizontal: !1,
        inline: !1,
        container: !1,
        popover: {
          animation: !0,
          placement: "bottom",
          fallbackPlacement: "flip",
        },
        debug: !1,
        input: "input",
        addon: ".colorpicker-input-addon",
        autoInputFallback: !0,
        useHashPrefix: !0,
        useAlpha: !0,
        template:
          '<div class="colorpicker">\n      <div class="colorpicker-saturation"><i class="colorpicker-guide"></i></div>\n      <div class="colorpicker-hue"><i class="colorpicker-guide"></i></div>\n      <div class="colorpicker-alpha">\n        <div class="colorpicker-alpha-color"></div>\n        <i class="colorpicker-guide"></i>\n      </div>\n    </div>',
        extensions: [{ name: "preview", options: { showText: !0 } }],
        sliders: {
          saturation: {
            selector: ".colorpicker-saturation",
            maxLeft: n,
            maxTop: n,
            callLeft: "setSaturationRatio",
            callTop: "setValueRatio",
          },
          hue: {
            selector: ".colorpicker-hue",
            maxLeft: 0,
            maxTop: n,
            callLeft: !1,
            callTop: "setHueRatio",
          },
          alpha: {
            selector: ".colorpicker-alpha",
            childSelector: ".colorpicker-alpha-color",
            maxLeft: 0,
            maxTop: n,
            callLeft: !1,
            callTop: "setAlphaRatio",
          },
        },
        slidersHorz: {
          saturation: {
            selector: ".colorpicker-saturation",
            maxLeft: n,
            maxTop: n,
            callLeft: "setSaturationRatio",
            callTop: "setValueRatio",
          },
          hue: {
            selector: ".colorpicker-hue",
            maxLeft: n,
            maxTop: 0,
            callLeft: "setHueRatio",
            callTop: !1,
          },
          alpha: {
            selector: ".colorpicker-alpha",
            childSelector: ".colorpicker-alpha-color",
            maxLeft: n,
            maxTop: 0,
            callLeft: "setAlphaRatio",
            callTop: !1,
          },
        },
      };
    },
    function (e, t, o) {
      "use strict";
      function r(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function n(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function i(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
      }
      function a(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof t
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
          t &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(e, t)
              : (e.__proto__ = t));
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var l =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              },
        s = (function () {
          function e(e, t) {
            for (var o = 0; o < t.length; o++) {
              var r = t[o];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function (t, o, r) {
            return o && e(t.prototype, o), r && e(t, r), t;
          };
        })(),
        c = o(1),
        u = r(c),
        h = o(0),
        p = r(h),
        f = { colors: null, namesAsValues: !0 },
        d = (function (e) {
          function t(e) {
            var o =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            n(this, t);
            var r = i(
              this,
              (t.__proto__ || Object.getPrototypeOf(t)).call(
                this,
                e,
                p.default.extend(!0, {}, f, o)
              )
            );
            return (
              Array.isArray(r.options.colors) ||
                "object" === l(r.options.colors) ||
                (r.options.colors = null),
              r
            );
          }
          return (
            a(t, e),
            s(t, [
              {
                key: "colors",
                get: function () {
                  return this.options.colors;
                },
              },
            ]),
            s(t, [
              {
                key: "getLength",
                value: function () {
                  return this.options.colors
                    ? Array.isArray(this.options.colors)
                      ? this.options.colors.length
                      : "object" === l(this.options.colors)
                      ? Object.keys(this.options.colors).length
                      : 0
                    : 0;
                },
              },
              {
                key: "resolveColor",
                value: function (e) {
                  var t =
                    !(arguments.length > 1 && void 0 !== arguments[1]) ||
                    arguments[1];
                  return (
                    !(this.getLength() <= 0) &&
                    (Array.isArray(this.options.colors)
                      ? this.options.colors.indexOf(e) >= 0
                        ? e
                        : this.options.colors.indexOf(e.toUpperCase()) >= 0
                        ? e.toUpperCase()
                        : this.options.colors.indexOf(e.toLowerCase()) >= 0 &&
                          e.toLowerCase()
                      : "object" === l(this.options.colors) &&
                        (!this.options.namesAsValues || t
                          ? this.getValue(e, !1)
                          : this.getName(e, this.getName("#" + e))))
                  );
                },
              },
              {
                key: "getName",
                value: function (e) {
                  var t =
                    arguments.length > 1 &&
                    void 0 !== arguments[1] &&
                    arguments[1];
                  if ("string" != typeof e || !this.options.colors) return t;
                  for (var o in this.options.colors)
                    if (
                      this.options.colors.hasOwnProperty(o) &&
                      this.options.colors[o].toLowerCase() === e.toLowerCase()
                    )
                      return o;
                  return t;
                },
              },
              {
                key: "getValue",
                value: function (e) {
                  var t =
                    arguments.length > 1 &&
                    void 0 !== arguments[1] &&
                    arguments[1];
                  return "string" == typeof e &&
                    this.options.colors &&
                    this.options.colors.hasOwnProperty(e)
                    ? this.options.colors[e]
                    : t;
                },
              },
            ]),
            t
          );
        })(u.default);
      t.default = d;
    },
    function (e, t) {
      e.exports = {
        aliceblue: [240, 248, 255],
        antiquewhite: [250, 235, 215],
        aqua: [0, 255, 255],
        aquamarine: [127, 255, 212],
        azure: [240, 255, 255],
        beige: [245, 245, 220],
        bisque: [255, 228, 196],
        black: [0, 0, 0],
        blanchedalmond: [255, 235, 205],
        blue: [0, 0, 255],
        blueviolet: [138, 43, 226],
        brown: [165, 42, 42],
        burlywood: [222, 184, 135],
        cadetblue: [95, 158, 160],
        chartreuse: [127, 255, 0],
        chocolate: [210, 105, 30],
        coral: [255, 127, 80],
        cornflowerblue: [100, 149, 237],
        cornsilk: [255, 248, 220],
        crimson: [220, 20, 60],
        cyan: [0, 255, 255],
        darkblue: [0, 0, 139],
        darkcyan: [0, 139, 139],
        darkgoldenrod: [184, 134, 11],
        darkgray: [169, 169, 169],
        darkgreen: [0, 100, 0],
        darkgrey: [169, 169, 169],
        darkkhaki: [189, 183, 107],
        darkmagenta: [139, 0, 139],
        darkolivegreen: [85, 107, 47],
        darkorange: [255, 140, 0],
        darkorchid: [153, 50, 204],
        darkred: [139, 0, 0],
        darksalmon: [233, 150, 122],
        darkseagreen: [143, 188, 143],
        darkslateblue: [72, 61, 139],
        darkslategray: [47, 79, 79],
        darkslategrey: [47, 79, 79],
        darkturquoise: [0, 206, 209],
        darkviolet: [148, 0, 211],
        deeppink: [255, 20, 147],
        deepskyblue: [0, 191, 255],
        dimgray: [105, 105, 105],
        dimgrey: [105, 105, 105],
        dodgerblue: [30, 144, 255],
        firebrick: [178, 34, 34],
        floralwhite: [255, 250, 240],
        forestgreen: [34, 139, 34],
        fuchsia: [255, 0, 255],
        gainsboro: [220, 220, 220],
        ghostwhite: [248, 248, 255],
        gold: [255, 215, 0],
        goldenrod: [218, 165, 32],
        gray: [128, 128, 128],
        green: [0, 128, 0],
        greenyellow: [173, 255, 47],
        grey: [128, 128, 128],
        honeydew: [240, 255, 240],
        hotpink: [255, 105, 180],
        indianred: [205, 92, 92],
        indigo: [75, 0, 130],
        ivory: [255, 255, 240],
        khaki: [240, 230, 140],
        lavender: [230, 230, 250],
        lavenderblush: [255, 240, 245],
        lawngreen: [124, 252, 0],
        lemonchiffon: [255, 250, 205],
        lightblue: [173, 216, 230],
        lightcoral: [240, 128, 128],
        lightcyan: [224, 255, 255],
        lightgoldenrodyellow: [250, 250, 210],
        lightgray: [211, 211, 211],
        lightgreen: [144, 238, 144],
        lightgrey: [211, 211, 211],
        lightpink: [255, 182, 193],
        lightsalmon: [255, 160, 122],
        lightseagreen: [32, 178, 170],
        lightskyblue: [135, 206, 250],
        lightslategray: [119, 136, 153],
        lightslategrey: [119, 136, 153],
        lightsteelblue: [176, 196, 222],
        lightyellow: [255, 255, 224],
        lime: [0, 255, 0],
        limegreen: [50, 205, 50],
        linen: [250, 240, 230],
        magenta: [255, 0, 255],
        maroon: [128, 0, 0],
        mediumaquamarine: [102, 205, 170],
        mediumblue: [0, 0, 205],
        mediumorchid: [186, 85, 211],
        mediumpurple: [147, 112, 219],
        mediumseagreen: [60, 179, 113],
        mediumslateblue: [123, 104, 238],
        mediumspringgreen: [0, 250, 154],
        mediumturquoise: [72, 209, 204],
        mediumvioletred: [199, 21, 133],
        midnightblue: [25, 25, 112],
        mintcream: [245, 255, 250],
        mistyrose: [255, 228, 225],
        moccasin: [255, 228, 181],
        navajowhite: [255, 222, 173],
        navy: [0, 0, 128],
        oldlace: [253, 245, 230],
        olive: [128, 128, 0],
        olivedrab: [107, 142, 35],
        orange: [255, 165, 0],
        orangered: [255, 69, 0],
        orchid: [218, 112, 214],
        palegoldenrod: [238, 232, 170],
        palegreen: [152, 251, 152],
        paleturquoise: [175, 238, 238],
        palevioletred: [219, 112, 147],
        papayawhip: [255, 239, 213],
        peachpuff: [255, 218, 185],
        peru: [205, 133, 63],
        pink: [255, 192, 203],
        plum: [221, 160, 221],
        powderblue: [176, 224, 230],
        purple: [128, 0, 128],
        rebeccapurple: [102, 51, 153],
        red: [255, 0, 0],
        rosybrown: [188, 143, 143],
        royalblue: [65, 105, 225],
        saddlebrown: [139, 69, 19],
        salmon: [250, 128, 114],
        sandybrown: [244, 164, 96],
        seagreen: [46, 139, 87],
        seashell: [255, 245, 238],
        sienna: [160, 82, 45],
        silver: [192, 192, 192],
        skyblue: [135, 206, 235],
        slateblue: [106, 90, 205],
        slategray: [112, 128, 144],
        slategrey: [112, 128, 144],
        snow: [255, 250, 250],
        springgreen: [0, 255, 127],
        steelblue: [70, 130, 180],
        tan: [210, 180, 140],
        teal: [0, 128, 128],
        thistle: [216, 191, 216],
        tomato: [255, 99, 71],
        turquoise: [64, 224, 208],
        violet: [238, 130, 238],
        wheat: [245, 222, 179],
        white: [255, 255, 255],
        whitesmoke: [245, 245, 245],
        yellow: [255, 255, 0],
        yellowgreen: [154, 205, 50],
      };
    },
    function (e, t, o) {
      function r(e, t) {
        return (
          Math.pow(e[0] - t[0], 2) +
          Math.pow(e[1] - t[1], 2) +
          Math.pow(e[2] - t[2], 2)
        );
      }
      var n = o(5),
        i = {};
      for (var a in n) n.hasOwnProperty(a) && (i[n[a]] = a);
      var l = (e.exports = {
        rgb: { channels: 3, labels: "rgb" },
        hsl: { channels: 3, labels: "hsl" },
        hsv: { channels: 3, labels: "hsv" },
        hwb: { channels: 3, labels: "hwb" },
        cmyk: { channels: 4, labels: "cmyk" },
        xyz: { channels: 3, labels: "xyz" },
        lab: { channels: 3, labels: "lab" },
        lch: { channels: 3, labels: "lch" },
        hex: { channels: 1, labels: ["hex"] },
        keyword: { channels: 1, labels: ["keyword"] },
        ansi16: { channels: 1, labels: ["ansi16"] },
        ansi256: { channels: 1, labels: ["ansi256"] },
        hcg: { channels: 3, labels: ["h", "c", "g"] },
        apple: { channels: 3, labels: ["r16", "g16", "b16"] },
        gray: { channels: 1, labels: ["gray"] },
      });
      for (var s in l)
        if (l.hasOwnProperty(s)) {
          if (!("channels" in l[s]))
            throw new Error("missing channels property: " + s);
          if (!("labels" in l[s]))
            throw new Error("missing channel labels property: " + s);
          if (l[s].labels.length !== l[s].channels)
            throw new Error("channel and label counts mismatch: " + s);
          var c = l[s].channels,
            u = l[s].labels;
          delete l[s].channels,
            delete l[s].labels,
            Object.defineProperty(l[s], "channels", { value: c }),
            Object.defineProperty(l[s], "labels", { value: u });
        }
      (l.rgb.hsl = function (e) {
        var t,
          o,
          r,
          n = e[0] / 255,
          i = e[1] / 255,
          a = e[2] / 255,
          l = Math.min(n, i, a),
          s = Math.max(n, i, a),
          c = s - l;
        return (
          s === l
            ? (t = 0)
            : n === s
            ? (t = (i - a) / c)
            : i === s
            ? (t = 2 + (a - n) / c)
            : a === s && (t = 4 + (n - i) / c),
          (t = Math.min(60 * t, 360)),
          t < 0 && (t += 360),
          (r = (l + s) / 2),
          (o = s === l ? 0 : r <= 0.5 ? c / (s + l) : c / (2 - s - l)),
          [t, 100 * o, 100 * r]
        );
      }),
        (l.rgb.hsv = function (e) {
          var t,
            o,
            r,
            n,
            i,
            a = e[0] / 255,
            l = e[1] / 255,
            s = e[2] / 255,
            c = Math.max(a, l, s),
            u = c - Math.min(a, l, s),
            h = function (e) {
              return (c - e) / 6 / u + 0.5;
            };
          return (
            0 === u
              ? (n = i = 0)
              : ((i = u / c),
                (t = h(a)),
                (o = h(l)),
                (r = h(s)),
                a === c
                  ? (n = r - o)
                  : l === c
                  ? (n = 1 / 3 + t - r)
                  : s === c && (n = 2 / 3 + o - t),
                n < 0 ? (n += 1) : n > 1 && (n -= 1)),
            [360 * n, 100 * i, 100 * c]
          );
        }),
        (l.rgb.hwb = function (e) {
          var t = e[0],
            o = e[1],
            r = e[2],
            n = l.rgb.hsl(e)[0],
            i = (1 / 255) * Math.min(t, Math.min(o, r));
          return (
            (r = 1 - (1 / 255) * Math.max(t, Math.max(o, r))),
            [n, 100 * i, 100 * r]
          );
        }),
        (l.rgb.cmyk = function (e) {
          var t,
            o,
            r,
            n,
            i = e[0] / 255,
            a = e[1] / 255,
            l = e[2] / 255;
          return (
            (n = Math.min(1 - i, 1 - a, 1 - l)),
            (t = (1 - i - n) / (1 - n) || 0),
            (o = (1 - a - n) / (1 - n) || 0),
            (r = (1 - l - n) / (1 - n) || 0),
            [100 * t, 100 * o, 100 * r, 100 * n]
          );
        }),
        (l.rgb.keyword = function (e) {
          var t = i[e];
          if (t) return t;
          var o,
            a = 1 / 0;
          for (var l in n)
            if (n.hasOwnProperty(l)) {
              var s = n[l],
                c = r(e, s);
              c < a && ((a = c), (o = l));
            }
          return o;
        }),
        (l.keyword.rgb = function (e) {
          return n[e];
        }),
        (l.rgb.xyz = function (e) {
          var t = e[0] / 255,
            o = e[1] / 255,
            r = e[2] / 255;
          return (
            (t = t > 0.04045 ? Math.pow((t + 0.055) / 1.055, 2.4) : t / 12.92),
            (o = o > 0.04045 ? Math.pow((o + 0.055) / 1.055, 2.4) : o / 12.92),
            (r = r > 0.04045 ? Math.pow((r + 0.055) / 1.055, 2.4) : r / 12.92),
            [
              100 * (0.4124 * t + 0.3576 * o + 0.1805 * r),
              100 * (0.2126 * t + 0.7152 * o + 0.0722 * r),
              100 * (0.0193 * t + 0.1192 * o + 0.9505 * r),
            ]
          );
        }),
        (l.rgb.lab = function (e) {
          var t,
            o,
            r,
            n = l.rgb.xyz(e),
            i = n[0],
            a = n[1],
            s = n[2];
          return (
            (i /= 95.047),
            (a /= 100),
            (s /= 108.883),
            (i = i > 0.008856 ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116),
            (a = a > 0.008856 ? Math.pow(a, 1 / 3) : 7.787 * a + 16 / 116),
            (s = s > 0.008856 ? Math.pow(s, 1 / 3) : 7.787 * s + 16 / 116),
            (t = 116 * a - 16),
            (o = 500 * (i - a)),
            (r = 200 * (a - s)),
            [t, o, r]
          );
        }),
        (l.hsl.rgb = function (e) {
          var t,
            o,
            r,
            n,
            i,
            a = e[0] / 360,
            l = e[1] / 100,
            s = e[2] / 100;
          if (0 === l) return (i = 255 * s), [i, i, i];
          (o = s < 0.5 ? s * (1 + l) : s + l - s * l),
            (t = 2 * s - o),
            (n = [0, 0, 0]);
          for (var c = 0; c < 3; c++)
            (r = a + (1 / 3) * -(c - 1)),
              r < 0 && r++,
              r > 1 && r--,
              (i =
                6 * r < 1
                  ? t + 6 * (o - t) * r
                  : 2 * r < 1
                  ? o
                  : 3 * r < 2
                  ? t + (o - t) * (2 / 3 - r) * 6
                  : t),
              (n[c] = 255 * i);
          return n;
        }),
        (l.hsl.hsv = function (e) {
          var t,
            o,
            r = e[0],
            n = e[1] / 100,
            i = e[2] / 100,
            a = n,
            l = Math.max(i, 0.01);
          return (
            (i *= 2),
            (n *= i <= 1 ? i : 2 - i),
            (a *= l <= 1 ? l : 2 - l),
            (o = (i + n) / 2),
            (t = 0 === i ? (2 * a) / (l + a) : (2 * n) / (i + n)),
            [r, 100 * t, 100 * o]
          );
        }),
        (l.hsv.rgb = function (e) {
          var t = e[0] / 60,
            o = e[1] / 100,
            r = e[2] / 100,
            n = Math.floor(t) % 6,
            i = t - Math.floor(t),
            a = 255 * r * (1 - o),
            l = 255 * r * (1 - o * i),
            s = 255 * r * (1 - o * (1 - i));
          switch (((r *= 255), n)) {
            case 0:
              return [r, s, a];
            case 1:
              return [l, r, a];
            case 2:
              return [a, r, s];
            case 3:
              return [a, l, r];
            case 4:
              return [s, a, r];
            case 5:
              return [r, a, l];
          }
        }),
        (l.hsv.hsl = function (e) {
          var t,
            o,
            r,
            n = e[0],
            i = e[1] / 100,
            a = e[2] / 100,
            l = Math.max(a, 0.01);
          return (
            (r = (2 - i) * a),
            (t = (2 - i) * l),
            (o = i * l),
            (o /= t <= 1 ? t : 2 - t),
            (o = o || 0),
            (r /= 2),
            [n, 100 * o, 100 * r]
          );
        }),
        (l.hwb.rgb = function (e) {
          var t,
            o,
            r,
            n,
            i = e[0] / 360,
            a = e[1] / 100,
            l = e[2] / 100,
            s = a + l;
          s > 1 && ((a /= s), (l /= s)),
            (t = Math.floor(6 * i)),
            (o = 1 - l),
            (r = 6 * i - t),
            0 != (1 & t) && (r = 1 - r),
            (n = a + r * (o - a));
          var c, u, h;
          switch (t) {
            default:
            case 6:
            case 0:
              (c = o), (u = n), (h = a);
              break;
            case 1:
              (c = n), (u = o), (h = a);
              break;
            case 2:
              (c = a), (u = o), (h = n);
              break;
            case 3:
              (c = a), (u = n), (h = o);
              break;
            case 4:
              (c = n), (u = a), (h = o);
              break;
            case 5:
              (c = o), (u = a), (h = n);
          }
          return [255 * c, 255 * u, 255 * h];
        }),
        (l.cmyk.rgb = function (e) {
          var t,
            o,
            r,
            n = e[0] / 100,
            i = e[1] / 100,
            a = e[2] / 100,
            l = e[3] / 100;
          return (
            (t = 1 - Math.min(1, n * (1 - l) + l)),
            (o = 1 - Math.min(1, i * (1 - l) + l)),
            (r = 1 - Math.min(1, a * (1 - l) + l)),
            [255 * t, 255 * o, 255 * r]
          );
        }),
        (l.xyz.rgb = function (e) {
          var t,
            o,
            r,
            n = e[0] / 100,
            i = e[1] / 100,
            a = e[2] / 100;
          return (
            (t = 3.2406 * n + -1.5372 * i + -0.4986 * a),
            (o = -0.9689 * n + 1.8758 * i + 0.0415 * a),
            (r = 0.0557 * n + -0.204 * i + 1.057 * a),
            (t =
              t > 0.0031308 ? 1.055 * Math.pow(t, 1 / 2.4) - 0.055 : 12.92 * t),
            (o =
              o > 0.0031308 ? 1.055 * Math.pow(o, 1 / 2.4) - 0.055 : 12.92 * o),
            (r =
              r > 0.0031308 ? 1.055 * Math.pow(r, 1 / 2.4) - 0.055 : 12.92 * r),
            (t = Math.min(Math.max(0, t), 1)),
            (o = Math.min(Math.max(0, o), 1)),
            (r = Math.min(Math.max(0, r), 1)),
            [255 * t, 255 * o, 255 * r]
          );
        }),
        (l.xyz.lab = function (e) {
          var t,
            o,
            r,
            n = e[0],
            i = e[1],
            a = e[2];
          return (
            (n /= 95.047),
            (i /= 100),
            (a /= 108.883),
            (n = n > 0.008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116),
            (i = i > 0.008856 ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116),
            (a = a > 0.008856 ? Math.pow(a, 1 / 3) : 7.787 * a + 16 / 116),
            (t = 116 * i - 16),
            (o = 500 * (n - i)),
            (r = 200 * (i - a)),
            [t, o, r]
          );
        }),
        (l.lab.xyz = function (e) {
          var t,
            o,
            r,
            n = e[0],
            i = e[1],
            a = e[2];
          (o = (n + 16) / 116), (t = i / 500 + o), (r = o - a / 200);
          var l = Math.pow(o, 3),
            s = Math.pow(t, 3),
            c = Math.pow(r, 3);
          return (
            (o = l > 0.008856 ? l : (o - 16 / 116) / 7.787),
            (t = s > 0.008856 ? s : (t - 16 / 116) / 7.787),
            (r = c > 0.008856 ? c : (r - 16 / 116) / 7.787),
            (t *= 95.047),
            (o *= 100),
            (r *= 108.883),
            [t, o, r]
          );
        }),
        (l.lab.lch = function (e) {
          var t,
            o,
            r,
            n = e[0],
            i = e[1],
            a = e[2];
          return (
            (t = Math.atan2(a, i)),
            (o = (360 * t) / 2 / Math.PI),
            o < 0 && (o += 360),
            (r = Math.sqrt(i * i + a * a)),
            [n, r, o]
          );
        }),
        (l.lch.lab = function (e) {
          var t,
            o,
            r,
            n = e[0],
            i = e[1],
            a = e[2];
          return (
            (r = (a / 360) * 2 * Math.PI),
            (t = i * Math.cos(r)),
            (o = i * Math.sin(r)),
            [n, t, o]
          );
        }),
        (l.rgb.ansi16 = function (e) {
          var t = e[0],
            o = e[1],
            r = e[2],
            n = 1 in arguments ? arguments[1] : l.rgb.hsv(e)[2];
          if (0 === (n = Math.round(n / 50))) return 30;
          var i =
            30 +
            ((Math.round(r / 255) << 2) |
              (Math.round(o / 255) << 1) |
              Math.round(t / 255));
          return 2 === n && (i += 60), i;
        }),
        (l.hsv.ansi16 = function (e) {
          return l.rgb.ansi16(l.hsv.rgb(e), e[2]);
        }),
        (l.rgb.ansi256 = function (e) {
          var t = e[0],
            o = e[1],
            r = e[2];
          return t === o && o === r
            ? t < 8
              ? 16
              : t > 248
              ? 231
              : Math.round(((t - 8) / 247) * 24) + 232
            : 16 +
                36 * Math.round((t / 255) * 5) +
                6 * Math.round((o / 255) * 5) +
                Math.round((r / 255) * 5);
        }),
        (l.ansi16.rgb = function (e) {
          var t = e % 10;
          if (0 === t || 7 === t)
            return e > 50 && (t += 3.5), (t = (t / 10.5) * 255), [t, t, t];
          var o = 0.5 * (1 + ~~(e > 50));
          return [
            (1 & t) * o * 255,
            ((t >> 1) & 1) * o * 255,
            ((t >> 2) & 1) * o * 255,
          ];
        }),
        (l.ansi256.rgb = function (e) {
          if (e >= 232) {
            var t = 10 * (e - 232) + 8;
            return [t, t, t];
          }
          e -= 16;
          var o;
          return [
            (Math.floor(e / 36) / 5) * 255,
            (Math.floor((o = e % 36) / 6) / 5) * 255,
            ((o % 6) / 5) * 255,
          ];
        }),
        (l.rgb.hex = function (e) {
          var t =
              ((255 & Math.round(e[0])) << 16) +
              ((255 & Math.round(e[1])) << 8) +
              (255 & Math.round(e[2])),
            o = t.toString(16).toUpperCase();
          return "000000".substring(o.length) + o;
        }),
        (l.hex.rgb = function (e) {
          var t = e.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
          if (!t) return [0, 0, 0];
          var o = t[0];
          3 === t[0].length &&
            (o = o
              .split("")
              .map(function (e) {
                return e + e;
              })
              .join(""));
          var r = parseInt(o, 16);
          return [(r >> 16) & 255, (r >> 8) & 255, 255 & r];
        }),
        (l.rgb.hcg = function (e) {
          var t,
            o,
            r = e[0] / 255,
            n = e[1] / 255,
            i = e[2] / 255,
            a = Math.max(Math.max(r, n), i),
            l = Math.min(Math.min(r, n), i),
            s = a - l;
          return (
            (t = s < 1 ? l / (1 - s) : 0),
            (o =
              s <= 0
                ? 0
                : a === r
                ? ((n - i) / s) % 6
                : a === n
                ? 2 + (i - r) / s
                : 4 + (r - n) / s + 4),
            (o /= 6),
            (o %= 1),
            [360 * o, 100 * s, 100 * t]
          );
        }),
        (l.hsl.hcg = function (e) {
          var t = e[1] / 100,
            o = e[2] / 100,
            r = 1,
            n = 0;
          return (
            (r = o < 0.5 ? 2 * t * o : 2 * t * (1 - o)),
            r < 1 && (n = (o - 0.5 * r) / (1 - r)),
            [e[0], 100 * r, 100 * n]
          );
        }),
        (l.hsv.hcg = function (e) {
          var t = e[1] / 100,
            o = e[2] / 100,
            r = t * o,
            n = 0;
          return r < 1 && (n = (o - r) / (1 - r)), [e[0], 100 * r, 100 * n];
        }),
        (l.hcg.rgb = function (e) {
          var t = e[0] / 360,
            o = e[1] / 100,
            r = e[2] / 100;
          if (0 === o) return [255 * r, 255 * r, 255 * r];
          var n = [0, 0, 0],
            i = (t % 1) * 6,
            a = i % 1,
            l = 1 - a,
            s = 0;
          switch (Math.floor(i)) {
            case 0:
              (n[0] = 1), (n[1] = a), (n[2] = 0);
              break;
            case 1:
              (n[0] = l), (n[1] = 1), (n[2] = 0);
              break;
            case 2:
              (n[0] = 0), (n[1] = 1), (n[2] = a);
              break;
            case 3:
              (n[0] = 0), (n[1] = l), (n[2] = 1);
              break;
            case 4:
              (n[0] = a), (n[1] = 0), (n[2] = 1);
              break;
            default:
              (n[0] = 1), (n[1] = 0), (n[2] = l);
          }
          return (
            (s = (1 - o) * r),
            [255 * (o * n[0] + s), 255 * (o * n[1] + s), 255 * (o * n[2] + s)]
          );
        }),
        (l.hcg.hsv = function (e) {
          var t = e[1] / 100,
            o = e[2] / 100,
            r = t + o * (1 - t),
            n = 0;
          return r > 0 && (n = t / r), [e[0], 100 * n, 100 * r];
        }),
        (l.hcg.hsl = function (e) {
          var t = e[1] / 100,
            o = e[2] / 100,
            r = o * (1 - t) + 0.5 * t,
            n = 0;
          return (
            r > 0 && r < 0.5
              ? (n = t / (2 * r))
              : r >= 0.5 && r < 1 && (n = t / (2 * (1 - r))),
            [e[0], 100 * n, 100 * r]
          );
        }),
        (l.hcg.hwb = function (e) {
          var t = e[1] / 100,
            o = e[2] / 100,
            r = t + o * (1 - t);
          return [e[0], 100 * (r - t), 100 * (1 - r)];
        }),
        (l.hwb.hcg = function (e) {
          var t = e[1] / 100,
            o = e[2] / 100,
            r = 1 - o,
            n = r - t,
            i = 0;
          return n < 1 && (i = (r - n) / (1 - n)), [e[0], 100 * n, 100 * i];
        }),
        (l.apple.rgb = function (e) {
          return [
            (e[0] / 65535) * 255,
            (e[1] / 65535) * 255,
            (e[2] / 65535) * 255,
          ];
        }),
        (l.rgb.apple = function (e) {
          return [
            (e[0] / 255) * 65535,
            (e[1] / 255) * 65535,
            (e[2] / 255) * 65535,
          ];
        }),
        (l.gray.rgb = function (e) {
          return [(e[0] / 100) * 255, (e[0] / 100) * 255, (e[0] / 100) * 255];
        }),
        (l.gray.hsl = l.gray.hsv =
          function (e) {
            return [0, 0, e[0]];
          }),
        (l.gray.hwb = function (e) {
          return [0, 100, e[0]];
        }),
        (l.gray.cmyk = function (e) {
          return [0, 0, 0, e[0]];
        }),
        (l.gray.lab = function (e) {
          return [e[0], 0, 0];
        }),
        (l.gray.hex = function (e) {
          var t = 255 & Math.round((e[0] / 100) * 255),
            o = (t << 16) + (t << 8) + t,
            r = o.toString(16).toUpperCase();
          return "000000".substring(r.length) + r;
        }),
        (l.rgb.gray = function (e) {
          return [((e[0] + e[1] + e[2]) / 3 / 255) * 100];
        });
    },
    function (e, t, o) {
      "use strict";
      function r(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var n =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              },
        i = o(8),
        a = r(i),
        l = o(0),
        s = r(l),
        c = "colorpicker";
      (s.default[c] = a.default),
        (s.default.fn[c] = function (e) {
          var t = Array.prototype.slice.call(arguments, 1),
            o = 1 === this.length,
            r = null,
            i = this.each(function () {
              var i = (0, s.default)(this),
                l = i.data(c),
                u = "object" === (void 0 === e ? "undefined" : n(e)) ? e : {};
              l || ((l = new a.default(this, u)), i.data(c, l)),
                o &&
                  ((r = i),
                  "string" == typeof e &&
                    (r =
                      "colorpicker" === e
                        ? l
                        : s.default.isFunction(l[e])
                        ? l[e].apply(l, t)
                        : l[e]));
            });
          return o ? r : i;
        }),
        (s.default.fn[c].constructor = a.default);
    },
    function (e, t, o) {
      "use strict";
      function r(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function n(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = (function () {
          function e(e, t) {
            for (var o = 0; o < t.length; o++) {
              var r = t[o];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function (t, o, r) {
            return o && e(t.prototype, o), r && e(t, r), t;
          };
        })(),
        a = o(1),
        l = r(a),
        s = o(3),
        c = r(s),
        u = o(9),
        h = r(u),
        p = o(0),
        f = r(p),
        d = o(13),
        v = r(d),
        k = o(14),
        g = r(k),
        y = o(15),
        b = r(y),
        m = o(22),
        w = r(m),
        x = o(23),
        _ = r(x),
        C = o(24),
        M = r(C),
        O = o(2),
        j = r(O),
        H = 0,
        P = "undefined" != typeof self ? self : void 0,
        E = (function () {
          function e(t, o) {
            n(this, e),
              (H += 1),
              (this.id = H),
              (this.lastEvent = { alias: null, e: null }),
              (this.element = (0, f.default)(t)
                .addClass("colorpicker-element")
                .attr("data-colorpicker-id", this.id)),
              (this.options = f.default.extend(
                !0,
                {},
                c.default,
                o,
                this.element.data()
              )),
              (this.disabled = !1),
              (this.extensions = []),
              (this.container =
                !0 === this.options.container ||
                (!0 !== this.options.container && !0 === this.options.inline)
                  ? this.element
                  : this.options.container),
              (this.container =
                !1 !== this.container && (0, f.default)(this.container)),
              (this.inputHandler = new b.default(this)),
              (this.colorHandler = new w.default(this)),
              (this.sliderHandler = new v.default(this)),
              (this.popupHandler = new g.default(this, P)),
              (this.pickerHandler = new _.default(this)),
              (this.addonHandler = new M.default(this)),
              this.init(),
              (0, f.default)(
                f.default.proxy(function () {
                  this.trigger("colorpickerCreate");
                }, this)
              );
          }
          return (
            i(
              e,
              [
                {
                  key: "color",
                  get: function () {
                    return this.colorHandler.color;
                  },
                },
                {
                  key: "format",
                  get: function () {
                    return this.colorHandler.format;
                  },
                },
                {
                  key: "picker",
                  get: function () {
                    return this.pickerHandler.picker;
                  },
                },
              ],
              [
                {
                  key: "Color",
                  get: function () {
                    return j.default;
                  },
                },
                {
                  key: "Extension",
                  get: function () {
                    return l.default;
                  },
                },
              ]
            ),
            i(e, [
              {
                key: "init",
                value: function () {
                  this.addonHandler.bind(),
                    this.inputHandler.bind(),
                    this.initExtensions(),
                    this.colorHandler.bind(),
                    this.pickerHandler.bind(),
                    this.sliderHandler.bind(),
                    this.popupHandler.bind(),
                    this.pickerHandler.attach(),
                    this.update(),
                    this.inputHandler.isDisabled() && this.disable();
                },
              },
              {
                key: "initExtensions",
                value: function () {
                  var t = this;
                  Array.isArray(this.options.extensions) ||
                    (this.options.extensions = []),
                    this.options.debug &&
                      this.options.extensions.push({ name: "debugger" }),
                    this.options.extensions.forEach(function (o) {
                      t.registerExtension(
                        e.extensions[o.name.toLowerCase()],
                        o.options || {}
                      );
                    });
                },
              },
              {
                key: "registerExtension",
                value: function (e) {
                  var t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {},
                    o = new e(this, t);
                  return this.extensions.push(o), o;
                },
              },
              {
                key: "destroy",
                value: function () {
                  var e = this.color;
                  this.sliderHandler.unbind(),
                    this.inputHandler.unbind(),
                    this.popupHandler.unbind(),
                    this.colorHandler.unbind(),
                    this.addonHandler.unbind(),
                    this.pickerHandler.unbind(),
                    this.element
                      .removeClass("colorpicker-element")
                      .removeData("colorpicker", "color")
                      .off(".colorpicker"),
                    this.trigger("colorpickerDestroy", e);
                },
              },
              {
                key: "show",
                value: function (e) {
                  this.popupHandler.show(e);
                },
              },
              {
                key: "hide",
                value: function (e) {
                  this.popupHandler.hide(e);
                },
              },
              {
                key: "toggle",
                value: function (e) {
                  this.popupHandler.toggle(e);
                },
              },
              {
                key: "getValue",
                value: function () {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : null,
                    t = this.colorHandler.color;
                  return (
                    (t = t instanceof j.default ? t : e),
                    t instanceof j.default ? t.string(this.format) : t
                  );
                },
              },
              {
                key: "setValue",
                value: function (e) {
                  if (!this.isDisabled()) {
                    var t = this.colorHandler;
                    (t.hasColor() && e && t.color.equals(e)) ||
                      (!t.hasColor() && !e) ||
                      ((t.color = e
                        ? t.createColor(e, this.options.autoInputFallback)
                        : null),
                      this.trigger("colorpickerChange", t.color, e),
                      this.update());
                  }
                },
              },
              {
                key: "update",
                value: function () {
                  this.colorHandler.hasColor()
                    ? this.inputHandler.update()
                    : this.colorHandler.assureColor(),
                    this.addonHandler.update(),
                    this.pickerHandler.update(),
                    this.trigger("colorpickerUpdate");
                },
              },
              {
                key: "enable",
                value: function () {
                  return (
                    this.inputHandler.enable(),
                    (this.disabled = !1),
                    this.picker.removeClass("colorpicker-disabled"),
                    this.trigger("colorpickerEnable"),
                    !0
                  );
                },
              },
              {
                key: "disable",
                value: function () {
                  return (
                    this.inputHandler.disable(),
                    (this.disabled = !0),
                    this.picker.addClass("colorpicker-disabled"),
                    this.trigger("colorpickerDisable"),
                    !0
                  );
                },
              },
              {
                key: "isEnabled",
                value: function () {
                  return !this.isDisabled();
                },
              },
              {
                key: "isDisabled",
                value: function () {
                  return !0 === this.disabled;
                },
              },
              {
                key: "trigger",
                value: function (e) {
                  var t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : null,
                    o =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : null;
                  this.element.trigger({
                    type: e,
                    colorpicker: this,
                    color: t || this.color,
                    value: o || this.getValue(),
                  });
                },
              },
            ]),
            e
          );
        })();
      (E.extensions = h.default), (t.default = E);
    },
    function (e, t, o) {
      "use strict";
      function r(e) {
        return e && e.__esModule ? e : { default: e };
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Palette = t.Swatches = t.Preview = t.Debugger = void 0);
      var n = o(10),
        i = r(n),
        a = o(11),
        l = r(a),
        s = o(12),
        c = r(s),
        u = o(4),
        h = r(u);
      (t.Debugger = i.default),
        (t.Preview = l.default),
        (t.Swatches = c.default),
        (t.Palette = h.default),
        (t.default = {
          debugger: i.default,
          preview: l.default,
          swatches: c.default,
          palette: h.default,
        });
    },
    function (e, t, o) {
      "use strict";
      function r(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function n(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function i(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
      }
      function a(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof t
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
          t &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(e, t)
              : (e.__proto__ = t));
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var l = (function () {
          function e(e, t) {
            for (var o = 0; o < t.length; o++) {
              var r = t[o];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function (t, o, r) {
            return o && e(t.prototype, o), r && e(t, r), t;
          };
        })(),
        s = function e(t, o, r) {
          null === t && (t = Function.prototype);
          var n = Object.getOwnPropertyDescriptor(t, o);
          if (void 0 === n) {
            var i = Object.getPrototypeOf(t);
            return null === i ? void 0 : e(i, o, r);
          }
          if ("value" in n) return n.value;
          var a = n.get;
          if (void 0 !== a) return a.call(r);
        },
        c = o(1),
        u = r(c),
        h = o(0),
        p = r(h),
        f = (function (e) {
          function t(e) {
            var o =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            n(this, t);
            var r = i(
              this,
              (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, o)
            );
            return (
              (r.eventCounter = 0),
              r.colorpicker.inputHandler.hasInput() &&
                r.colorpicker.inputHandler.input.on(
                  "change.colorpicker-ext",
                  p.default.proxy(r.onChangeInput, r)
                ),
              r
            );
          }
          return (
            a(t, e),
            l(t, [
              {
                key: "log",
                value: function (e) {
                  for (
                    var t,
                      o = arguments.length,
                      r = Array(o > 1 ? o - 1 : 0),
                      n = 1;
                    n < o;
                    n++
                  )
                    r[n - 1] = arguments[n];
                  this.eventCounter += 1;
                  var i =
                    "#" +
                    this.eventCounter +
                    ": Colorpicker#" +
                    this.colorpicker.id +
                    " [" +
                    e +
                    "]";
                  (t = console).debug.apply(t, [i].concat(r)),
                    this.colorpicker.element.trigger({
                      type: "colorpickerDebug",
                      colorpicker: this.colorpicker,
                      color: this.color,
                      value: null,
                      debug: {
                        debugger: this,
                        eventName: e,
                        logArgs: r,
                        logMessage: i,
                      },
                    });
                },
              },
              {
                key: "resolveColor",
                value: function (e) {
                  var t =
                    !(arguments.length > 1 && void 0 !== arguments[1]) ||
                    arguments[1];
                  return this.log("resolveColor()", e, t), !1;
                },
              },
              {
                key: "onCreate",
                value: function (e) {
                  return (
                    this.log("colorpickerCreate"),
                    s(
                      t.prototype.__proto__ ||
                        Object.getPrototypeOf(t.prototype),
                      "onCreate",
                      this
                    ).call(this, e)
                  );
                },
              },
              {
                key: "onDestroy",
                value: function (e) {
                  return (
                    this.log("colorpickerDestroy"),
                    (this.eventCounter = 0),
                    this.colorpicker.inputHandler.hasInput() &&
                      this.colorpicker.inputHandler.input.off(
                        ".colorpicker-ext"
                      ),
                    s(
                      t.prototype.__proto__ ||
                        Object.getPrototypeOf(t.prototype),
                      "onDestroy",
                      this
                    ).call(this, e)
                  );
                },
              },
              {
                key: "onUpdate",
                value: function (e) {
                  this.log("colorpickerUpdate");
                },
              },
              {
                key: "onChangeInput",
                value: function (e) {
                  this.log("input:change.colorpicker", e.value, e.color);
                },
              },
              {
                key: "onChange",
                value: function (e) {
                  this.log("colorpickerChange", e.value, e.color);
                },
              },
              {
                key: "onInvalid",
                value: function (e) {
                  this.log("colorpickerInvalid", e.value, e.color);
                },
              },
              {
                key: "onHide",
                value: function (e) {
                  this.log("colorpickerHide"), (this.eventCounter = 0);
                },
              },
              {
                key: "onShow",
                value: function (e) {
                  this.log("colorpickerShow");
                },
              },
              {
                key: "onDisable",
                value: function (e) {
                  this.log("colorpickerDisable");
                },
              },
              {
                key: "onEnable",
                value: function (e) {
                  this.log("colorpickerEnable");
                },
              },
            ]),
            t
          );
        })(u.default);
      t.default = f;
    },
    function (e, t, o) {
      "use strict";
      function r(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function n(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function i(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
      }
      function a(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof t
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
          t &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(e, t)
              : (e.__proto__ = t));
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var l = (function () {
          function e(e, t) {
            for (var o = 0; o < t.length; o++) {
              var r = t[o];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function (t, o, r) {
            return o && e(t.prototype, o), r && e(t, r), t;
          };
        })(),
        s = function e(t, o, r) {
          null === t && (t = Function.prototype);
          var n = Object.getOwnPropertyDescriptor(t, o);
          if (void 0 === n) {
            var i = Object.getPrototypeOf(t);
            return null === i ? void 0 : e(i, o, r);
          }
          if ("value" in n) return n.value;
          var a = n.get;
          if (void 0 !== a) return a.call(r);
        },
        c = o(1),
        u = r(c),
        h = o(0),
        p = r(h),
        f = (function (e) {
          function t(e) {
            var o =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            n(this, t);
            var r = i(
              this,
              (t.__proto__ || Object.getPrototypeOf(t)).call(
                this,
                e,
                p.default.extend(
                  !0,
                  {},
                  {
                    template:
                      '<div class="colorpicker-bar colorpicker-preview"><div /></div>',
                    showText: !0,
                    format: e.format,
                  },
                  o
                )
              )
            );
            return (
              (r.element = (0, p.default)(r.options.template)),
              (r.elementInner = r.element.find("div")),
              r
            );
          }
          return (
            a(t, e),
            l(t, [
              {
                key: "onCreate",
                value: function (e) {
                  s(
                    t.prototype.__proto__ || Object.getPrototypeOf(t.prototype),
                    "onCreate",
                    this
                  ).call(this, e),
                    this.colorpicker.picker.append(this.element);
                },
              },
              {
                key: "onUpdate",
                value: function (e) {
                  if (
                    (s(
                      t.prototype.__proto__ ||
                        Object.getPrototypeOf(t.prototype),
                      "onUpdate",
                      this
                    ).call(this, e),
                    !e.color)
                  )
                    return void this.elementInner
                      .css("backgroundColor", null)
                      .css("color", null)
                      .html("");
                  this.elementInner.css(
                    "backgroundColor",
                    e.color.toRgbString()
                  ),
                    this.options.showText &&
                      (this.elementInner.html(
                        e.color.string(
                          this.options.format || this.colorpicker.format
                        )
                      ),
                      e.color.isDark() && e.color.alpha > 0.5
                        ? this.elementInner.css("color", "white")
                        : this.elementInner.css("color", "black"));
                },
              },
            ]),
            t
          );
        })(u.default);
      t.default = f;
    },
    function (e, t, o) {
      "use strict";
      function r(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function n(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function i(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
      }
      function a(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof t
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
          t &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(e, t)
              : (e.__proto__ = t));
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var l = (function () {
          function e(e, t) {
            for (var o = 0; o < t.length; o++) {
              var r = t[o];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function (t, o, r) {
            return o && e(t.prototype, o), r && e(t, r), t;
          };
        })(),
        s = function e(t, o, r) {
          null === t && (t = Function.prototype);
          var n = Object.getOwnPropertyDescriptor(t, o);
          if (void 0 === n) {
            var i = Object.getPrototypeOf(t);
            return null === i ? void 0 : e(i, o, r);
          }
          if ("value" in n) return n.value;
          var a = n.get;
          if (void 0 !== a) return a.call(r);
        },
        c = o(4),
        u = r(c),
        h = o(0),
        p = r(h),
        f = {
          barTemplate:
            '<div class="colorpicker-bar colorpicker-swatches">\n                    <div class="colorpicker-swatches--inner"></div>\n                </div>',
          swatchTemplate:
            '<i class="colorpicker-swatch"><i class="colorpicker-swatch--inner"></i></i>',
        },
        d = (function (e) {
          function t(e) {
            var o =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            n(this, t);
            var r = i(
              this,
              (t.__proto__ || Object.getPrototypeOf(t)).call(
                this,
                e,
                p.default.extend(!0, {}, f, o)
              )
            );
            return (r.element = null), r;
          }
          return (
            a(t, e),
            l(t, [
              {
                key: "isEnabled",
                value: function () {
                  return this.getLength() > 0;
                },
              },
              {
                key: "onCreate",
                value: function (e) {
                  s(
                    t.prototype.__proto__ || Object.getPrototypeOf(t.prototype),
                    "onCreate",
                    this
                  ).call(this, e),
                    this.isEnabled() &&
                      ((this.element = (0, p.default)(
                        this.options.barTemplate
                      )),
                      this.load(),
                      this.colorpicker.picker.append(this.element));
                },
              },
              {
                key: "load",
                value: function () {
                  var e = this,
                    t = this.colorpicker,
                    o = this.element.find(".colorpicker-swatches--inner"),
                    r =
                      !0 === this.options.namesAsValues &&
                      !Array.isArray(this.colors);
                  o.empty(),
                    p.default.each(this.colors, function (n, i) {
                      var a = (0, p.default)(e.options.swatchTemplate)
                        .attr("data-name", n)
                        .attr("data-value", i)
                        .attr("title", r ? n + ": " + i : i)
                        .on(
                          "mousedown.colorpicker touchstart.colorpicker",
                          function (e) {
                            var o = (0, p.default)(this);
                            t.setValue(
                              r ? o.attr("data-name") : o.attr("data-value")
                            );
                          }
                        );
                      a
                        .find(".colorpicker-swatch--inner")
                        .css("background-color", i),
                        o.append(a);
                    }),
                    o.append(
                      (0, p.default)('<i class="colorpicker-clear"></i>')
                    );
                },
              },
            ]),
            t
          );
        })(u.default);
      t.default = d;
    },
    function (e, t, o) {
      "use strict";
      function r(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = (function () {
          function e(e, t) {
            for (var o = 0; o < t.length; o++) {
              var r = t[o];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function (t, o, r) {
            return o && e(t.prototype, o), r && e(t, r), t;
          };
        })(),
        i = o(0),
        a = (function (e) {
          return e && e.__esModule ? e : { default: e };
        })(i),
        l = (function () {
          function e(t) {
            r(this, e),
              (this.colorpicker = t),
              (this.currentSlider = null),
              (this.mousePointer = { left: 0, top: 0 }),
              (this.onMove = a.default.proxy(this.defaultOnMove, this));
          }
          return (
            n(e, [
              {
                key: "defaultOnMove",
                value: function (e, t) {
                  if (this.currentSlider) {
                    var o = this.currentSlider,
                      r = this.colorpicker,
                      n = r.colorHandler,
                      i = n.hasColor()
                        ? n.color.getClone()
                        : n.getFallbackColor();
                    (o.guideStyle.left = t + "px"),
                      (o.guideStyle.top = e + "px"),
                      o.callLeft && i[o.callLeft].call(i, t / o.maxLeft),
                      o.callTop && i[o.callTop].call(i, e / o.maxTop),
                      r.setValue(i),
                      r.popupHandler.focus();
                  }
                },
              },
              {
                key: "bind",
                value: function () {
                  var e = this.colorpicker.options.horizontal
                      ? this.colorpicker.options.slidersHorz
                      : this.colorpicker.options.sliders,
                    t = [];
                  for (var o in e) e.hasOwnProperty(o) && t.push(e[o].selector);
                  this.colorpicker.picker
                    .find(t.join(", "))
                    .on(
                      "mousedown.colorpicker touchstart.colorpicker",
                      a.default.proxy(this.pressed, this)
                    );
                },
              },
              {
                key: "unbind",
                value: function () {
                  (0, a.default)(this.colorpicker.picker).off({
                    "mousemove.colorpicker": a.default.proxy(this.moved, this),
                    "touchmove.colorpicker": a.default.proxy(this.moved, this),
                    "mouseup.colorpicker": a.default.proxy(this.released, this),
                    "touchend.colorpicker": a.default.proxy(
                      this.released,
                      this
                    ),
                  });
                },
              },
              {
                key: "pressed",
                value: function (e) {
                  if (!this.colorpicker.isDisabled()) {
                    (this.colorpicker.lastEvent.alias = "pressed"),
                      (this.colorpicker.lastEvent.e = e),
                      !e.pageX &&
                        !e.pageY &&
                        e.originalEvent &&
                        e.originalEvent.touches &&
                        ((e.pageX = e.originalEvent.touches[0].pageX),
                        (e.pageY = e.originalEvent.touches[0].pageY));
                    var t = (0, a.default)(e.target),
                      o = t.closest("div"),
                      r = this.colorpicker.options.horizontal
                        ? this.colorpicker.options.slidersHorz
                        : this.colorpicker.options.sliders;
                    if (!o.is(".colorpicker")) {
                      this.currentSlider = null;
                      for (var n in r)
                        if (r.hasOwnProperty(n)) {
                          var i = r[n];
                          if (o.is(i.selector)) {
                            this.currentSlider = a.default.extend({}, i, {
                              name: n,
                            });
                            break;
                          }
                          if (
                            void 0 !== i.childSelector &&
                            o.is(i.childSelector)
                          ) {
                            (this.currentSlider = a.default.extend({}, i, {
                              name: n,
                            })),
                              (o = o.parent());
                            break;
                          }
                        }
                      var l = o.find(".colorpicker-guide").get(0);
                      if (null !== this.currentSlider && null !== l) {
                        var s = o.offset();
                        (this.currentSlider.guideStyle = l.style),
                          (this.currentSlider.left = e.pageX - s.left),
                          (this.currentSlider.top = e.pageY - s.top),
                          (this.mousePointer = { left: e.pageX, top: e.pageY }),
                          (0, a.default)(this.colorpicker.picker)
                            .on({
                              "mousemove.colorpicker": a.default.proxy(
                                this.moved,
                                this
                              ),
                              "touchmove.colorpicker": a.default.proxy(
                                this.moved,
                                this
                              ),
                              "mouseup.colorpicker": a.default.proxy(
                                this.released,
                                this
                              ),
                              "touchend.colorpicker": a.default.proxy(
                                this.released,
                                this
                              ),
                            })
                            .trigger("mousemove");
                      }
                    }
                  }
                },
              },
              {
                key: "moved",
                value: function (e) {
                  (this.colorpicker.lastEvent.alias = "moved"),
                    (this.colorpicker.lastEvent.e = e),
                    !e.pageX &&
                      !e.pageY &&
                      e.originalEvent &&
                      e.originalEvent.touches &&
                      ((e.pageX = e.originalEvent.touches[0].pageX),
                      (e.pageY = e.originalEvent.touches[0].pageY)),
                    e.preventDefault();
                  var t = Math.max(
                      0,
                      Math.min(
                        this.currentSlider.maxLeft,
                        this.currentSlider.left +
                          ((e.pageX || this.mousePointer.left) -
                            this.mousePointer.left)
                      )
                    ),
                    o = Math.max(
                      0,
                      Math.min(
                        this.currentSlider.maxTop,
                        this.currentSlider.top +
                          ((e.pageY || this.mousePointer.top) -
                            this.mousePointer.top)
                      )
                    );
                  this.onMove(o, t);
                },
              },
              {
                key: "released",
                value: function (e) {
                  (this.colorpicker.lastEvent.alias = "released"),
                    (this.colorpicker.lastEvent.e = e),
                    (0, a.default)(this.colorpicker.picker).off({
                      "mousemove.colorpicker": this.moved,
                      "touchmove.colorpicker": this.moved,
                      "mouseup.colorpicker": this.released,
                      "touchend.colorpicker": this.released,
                    });
                },
              },
            ]),
            e
          );
        })();
      t.default = l;
    },
    function (e, t, o) {
      "use strict";
      function r(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function n(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = (function () {
          function e(e, t) {
            for (var o = 0; o < t.length; o++) {
              var r = t[o];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function (t, o, r) {
            return o && e(t.prototype, o), r && e(t, r), t;
          };
        })(),
        a = o(0),
        l = r(a),
        s = o(3),
        c = r(s),
        u = (function () {
          function e(t, o) {
            n(this, e),
              (this.root = o),
              (this.colorpicker = t),
              (this.popoverTarget = null),
              (this.popoverTip = null),
              (this.clicking = !1),
              (this.hidding = !1),
              (this.showing = !1);
          }
          return (
            i(e, [
              {
                key: "bind",
                value: function () {
                  var e = this.colorpicker;
                  if (e.options.inline)
                    return void e.picker.addClass(
                      "colorpicker-inline colorpicker-visible"
                    );
                  e.picker.addClass("colorpicker-popup colorpicker-hidden"),
                    (this.hasInput || this.hasAddon) &&
                      (e.options.popover && this.createPopover(),
                      this.hasAddon &&
                        (this.addon.attr("tabindex") ||
                          this.addon.attr("tabindex", 0),
                        this.addon.on({
                          "mousedown.colorpicker touchstart.colorpicker":
                            l.default.proxy(this.toggle, this),
                        }),
                        this.addon.on({
                          "focus.colorpicker": l.default.proxy(this.show, this),
                        }),
                        this.addon.on({
                          "focusout.colorpicker": l.default.proxy(
                            this.hide,
                            this
                          ),
                        })),
                      this.hasInput &&
                        !this.hasAddon &&
                        (this.input.on({
                          "mousedown.colorpicker touchstart.colorpicker":
                            l.default.proxy(this.show, this),
                          "focus.colorpicker": l.default.proxy(this.show, this),
                        }),
                        this.input.on({
                          "focusout.colorpicker": l.default.proxy(
                            this.hide,
                            this
                          ),
                        })),
                      (0, l.default)(this.root).on(
                        "resize.colorpicker",
                        l.default.proxy(this.reposition, this)
                      ));
                },
              },
              {
                key: "unbind",
                value: function () {
                  this.hasInput &&
                    (this.input.off({
                      "mousedown.colorpicker touchstart.colorpicker":
                        l.default.proxy(this.show, this),
                      "focus.colorpicker": l.default.proxy(this.show, this),
                    }),
                    this.input.off({
                      "focusout.colorpicker": l.default.proxy(this.hide, this),
                    })),
                    this.hasAddon &&
                      (this.addon.off({
                        "mousedown.colorpicker touchstart.colorpicker":
                          l.default.proxy(this.toggle, this),
                      }),
                      this.addon.off({
                        "focus.colorpicker": l.default.proxy(this.show, this),
                      }),
                      this.addon.off({
                        "focusout.colorpicker": l.default.proxy(
                          this.hide,
                          this
                        ),
                      })),
                    this.popoverTarget && this.popoverTarget.popover("dispose"),
                    (0, l.default)(this.root).off(
                      "resize.colorpicker",
                      l.default.proxy(this.reposition, this)
                    ),
                    (0, l.default)(this.root.document).off(
                      "mousedown.colorpicker touchstart.colorpicker",
                      l.default.proxy(this.hide, this)
                    ),
                    (0, l.default)(this.root.document).off(
                      "mousedown.colorpicker touchstart.colorpicker",
                      l.default.proxy(this.onClickingInside, this)
                    );
                },
              },
              {
                key: "isClickingInside",
                value: function (e) {
                  return (
                    !!e &&
                    (this.isOrIsInside(this.popoverTip, e.currentTarget) ||
                      this.isOrIsInside(this.popoverTip, e.target) ||
                      this.isOrIsInside(
                        this.colorpicker.picker,
                        e.currentTarget
                      ) ||
                      this.isOrIsInside(this.colorpicker.picker, e.target))
                  );
                },
              },
              {
                key: "isOrIsInside",
                value: function (e, t) {
                  return (
                    !(!e || !t) &&
                    ((t = (0, l.default)(t)), t.is(e) || e.find(t).length > 0)
                  );
                },
              },
              {
                key: "onClickingInside",
                value: function (e) {
                  this.clicking = this.isClickingInside(e);
                },
              },
              {
                key: "createPopover",
                value: function () {
                  var e = this.colorpicker;
                  (this.popoverTarget = this.hasAddon
                    ? this.addon
                    : this.input),
                    e.picker.addClass("colorpicker-bs-popover-content"),
                    this.popoverTarget.popover(
                      l.default.extend(
                        !0,
                        {},
                        c.default.popover,
                        e.options.popover,
                        { trigger: "manual", content: e.picker, html: !0 }
                      )
                    ),
                    (this.popoverTip = (0, l.default)(
                      this.popoverTarget
                        .popover("getTipElement")
                        .data("bs.popover").tip
                    )),
                    this.popoverTip.addClass("colorpicker-bs-popover"),
                    this.popoverTarget.on(
                      "shown.bs.popover",
                      l.default.proxy(this.fireShow, this)
                    ),
                    this.popoverTarget.on(
                      "hidden.bs.popover",
                      l.default.proxy(this.fireHide, this)
                    );
                },
              },
              {
                key: "reposition",
                value: function (e) {
                  this.popoverTarget &&
                    this.isVisible() &&
                    this.popoverTarget.popover("update");
                },
              },
              {
                key: "toggle",
                value: function (e) {
                  this.isVisible() ? this.hide(e) : this.show(e);
                },
              },
              {
                key: "show",
                value: function (e) {
                  if (!(this.isVisible() || this.showing || this.hidding)) {
                    (this.showing = !0),
                      (this.hidding = !1),
                      (this.clicking = !1);
                    var t = this.colorpicker;
                    (t.lastEvent.alias = "show"),
                      (t.lastEvent.e = e),
                      e &&
                        (!this.hasInput ||
                          "color" === this.input.attr("type")) &&
                        e &&
                        e.preventDefault &&
                        (e.stopPropagation(), e.preventDefault()),
                      this.isPopover &&
                        (0, l.default)(this.root).on(
                          "resize.colorpicker",
                          l.default.proxy(this.reposition, this)
                        ),
                      t.picker
                        .addClass("colorpicker-visible")
                        .removeClass("colorpicker-hidden"),
                      this.popoverTarget
                        ? this.popoverTarget.popover("show")
                        : this.fireShow();
                  }
                },
              },
              {
                key: "fireShow",
                value: function () {
                  (this.hidding = !1),
                    (this.showing = !1),
                    this.isPopover &&
                      ((0, l.default)(this.root.document).on(
                        "mousedown.colorpicker touchstart.colorpicker",
                        l.default.proxy(this.hide, this)
                      ),
                      (0, l.default)(this.root.document).on(
                        "mousedown.colorpicker touchstart.colorpicker",
                        l.default.proxy(this.onClickingInside, this)
                      )),
                    this.colorpicker.trigger("colorpickerShow");
                },
              },
              {
                key: "hide",
                value: function (e) {
                  if (!(this.isHidden() || this.showing || this.hidding)) {
                    var t = this.colorpicker,
                      o = this.clicking || this.isClickingInside(e);
                    if (
                      ((this.hidding = !0),
                      (this.showing = !1),
                      (this.clicking = !1),
                      (t.lastEvent.alias = "hide"),
                      (t.lastEvent.e = e),
                      o)
                    )
                      return void (this.hidding = !1);
                    this.popoverTarget
                      ? this.popoverTarget.popover("hide")
                      : this.fireHide();
                  }
                },
              },
              {
                key: "fireHide",
                value: function () {
                  (this.hidding = !1), (this.showing = !1);
                  var e = this.colorpicker;
                  e.picker
                    .addClass("colorpicker-hidden")
                    .removeClass("colorpicker-visible"),
                    (0, l.default)(this.root).off(
                      "resize.colorpicker",
                      l.default.proxy(this.reposition, this)
                    ),
                    (0, l.default)(this.root.document).off(
                      "mousedown.colorpicker touchstart.colorpicker",
                      l.default.proxy(this.hide, this)
                    ),
                    (0, l.default)(this.root.document).off(
                      "mousedown.colorpicker touchstart.colorpicker",
                      l.default.proxy(this.onClickingInside, this)
                    ),
                    e.trigger("colorpickerHide");
                },
              },
              {
                key: "focus",
                value: function () {
                  return this.hasAddon
                    ? this.addon.focus()
                    : !!this.hasInput && this.input.focus();
                },
              },
              {
                key: "isVisible",
                value: function () {
                  return (
                    this.colorpicker.picker.hasClass("colorpicker-visible") &&
                    !this.colorpicker.picker.hasClass("colorpicker-hidden")
                  );
                },
              },
              {
                key: "isHidden",
                value: function () {
                  return (
                    this.colorpicker.picker.hasClass("colorpicker-hidden") &&
                    !this.colorpicker.picker.hasClass("colorpicker-visible")
                  );
                },
              },
              {
                key: "input",
                get: function () {
                  return this.colorpicker.inputHandler.input;
                },
              },
              {
                key: "hasInput",
                get: function () {
                  return this.colorpicker.inputHandler.hasInput();
                },
              },
              {
                key: "addon",
                get: function () {
                  return this.colorpicker.addonHandler.addon;
                },
              },
              {
                key: "hasAddon",
                get: function () {
                  return this.colorpicker.addonHandler.hasAddon();
                },
              },
              {
                key: "isPopover",
                get: function () {
                  return !this.colorpicker.options.inline && !!this.popoverTip;
                },
              },
            ]),
            e
          );
        })();
      t.default = u;
    },
    function (e, t, o) {
      "use strict";
      function r(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function n(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = (function () {
          function e(e, t) {
            for (var o = 0; o < t.length; o++) {
              var r = t[o];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function (t, o, r) {
            return o && e(t.prototype, o), r && e(t, r), t;
          };
        })(),
        a = o(0),
        l = r(a),
        s = o(2),
        c = r(s),
        u = (function () {
          function e(t) {
            n(this, e),
              (this.colorpicker = t),
              (this.input = this.colorpicker.element.is("input")
                ? this.colorpicker.element
                : !!this.colorpicker.options.input &&
                  this.colorpicker.element.find(
                    this.colorpicker.options.input
                  )),
              this.input && 0 === this.input.length && (this.input = !1),
              this._initValue();
          }
          return (
            i(e, [
              {
                key: "bind",
                value: function () {
                  this.hasInput() &&
                    (this.input.on({
                      "keyup.colorpicker": l.default.proxy(this.onkeyup, this),
                    }),
                    this.input.on({
                      "change.colorpicker": l.default.proxy(
                        this.onchange,
                        this
                      ),
                    }));
                },
              },
              {
                key: "unbind",
                value: function () {
                  this.hasInput() && this.input.off(".colorpicker");
                },
              },
              {
                key: "_initValue",
                value: function () {
                  if (this.hasInput()) {
                    var e = "";
                    [
                      this.input.val(),
                      this.input.data("color"),
                      this.input.attr("data-color"),
                    ].map(function (t) {
                      t && "" === e && (e = t);
                    }),
                      e instanceof c.default
                        ? (e = this.getFormattedColor(
                            e.string(this.colorpicker.format)
                          ))
                        : "string" == typeof e ||
                          e instanceof String ||
                          (e = ""),
                      this.input.prop("value", e);
                  }
                },
              },
              {
                key: "getValue",
                value: function () {
                  return !!this.hasInput() && this.input.val();
                },
              },
              {
                key: "setValue",
                value: function (e) {
                  if (this.hasInput()) {
                    var t = this.input.prop("value");
                    (e = e || ""),
                      e !== (t || "") &&
                        (this.input.prop("value", e),
                        this.input.trigger({
                          type: "change",
                          colorpicker: this.colorpicker,
                          color: this.colorpicker.color,
                          value: e,
                        }));
                  }
                },
              },
              {
                key: "getFormattedColor",
                value: function () {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : null;
                  return (e =
                    e || this.colorpicker.colorHandler.getColorString())
                    ? ((e = this.colorpicker.colorHandler.resolveColorDelegate(
                        e,
                        !1
                      )),
                      !1 === this.colorpicker.options.useHashPrefix &&
                        (e = e.replace(/^#/g, "")),
                      e)
                    : "";
                },
              },
              {
                key: "hasInput",
                value: function () {
                  return !1 !== this.input;
                },
              },
              {
                key: "isEnabled",
                value: function () {
                  return this.hasInput() && !this.isDisabled();
                },
              },
              {
                key: "isDisabled",
                value: function () {
                  return this.hasInput() && !0 === this.input.prop("disabled");
                },
              },
              {
                key: "disable",
                value: function () {
                  this.hasInput() && this.input.prop("disabled", !0);
                },
              },
              {
                key: "enable",
                value: function () {
                  this.hasInput() && this.input.prop("disabled", !1);
                },
              },
              {
                key: "update",
                value: function () {
                  this.hasInput() &&
                    ((!1 === this.colorpicker.options.autoInputFallback &&
                      this.colorpicker.colorHandler.isInvalidColor()) ||
                      this.setValue(this.getFormattedColor()));
                },
              },
              {
                key: "onchange",
                value: function (e) {
                  (this.colorpicker.lastEvent.alias = "input.change"),
                    (this.colorpicker.lastEvent.e = e);
                  var t = this.getValue();
                  t !== e.value && this.colorpicker.setValue(t);
                },
              },
              {
                key: "onkeyup",
                value: function (e) {
                  (this.colorpicker.lastEvent.alias = "input.keyup"),
                    (this.colorpicker.lastEvent.e = e);
                  var t = this.getValue();
                  t !== e.value && this.colorpicker.setValue(t);
                },
              },
            ]),
            e
          );
        })();
      t.default = u;
    },
    function (e, t, o) {
      "use strict";
      function r(e, t) {
        if (!(this instanceof r)) return new r(e, t);
        if ((t && t in f && (t = null), t && !(t in h)))
          throw new Error("Unknown model: " + t);
        var o, n;
        if (e)
          if (e instanceof r)
            (this.model = e.model),
              (this.color = e.color.slice()),
              (this.valpha = e.valpha);
          else if ("string" == typeof e) {
            var i = u.get(e);
            if (null === i)
              throw new Error("Unable to parse color from string: " + e);
            (this.model = i.model),
              (n = h[this.model].channels),
              (this.color = i.value.slice(0, n)),
              (this.valpha = "number" == typeof i.value[n] ? i.value[n] : 1);
          } else if (e.length) {
            (this.model = t || "rgb"), (n = h[this.model].channels);
            var a = p.call(e, 0, n);
            (this.color = c(a, n)),
              (this.valpha = "number" == typeof e[n] ? e[n] : 1);
          } else if ("number" == typeof e)
            (e &= 16777215),
              (this.model = "rgb"),
              (this.color = [(e >> 16) & 255, (e >> 8) & 255, 255 & e]),
              (this.valpha = 1);
          else {
            this.valpha = 1;
            var l = Object.keys(e);
            "alpha" in e &&
              (l.splice(l.indexOf("alpha"), 1),
              (this.valpha = "number" == typeof e.alpha ? e.alpha : 0));
            var s = l.sort().join("");
            if (!(s in d))
              throw new Error(
                "Unable to parse color from object: " + JSON.stringify(e)
              );
            this.model = d[s];
            var k = h[this.model].labels,
              g = [];
            for (o = 0; o < k.length; o++) g.push(e[k[o]]);
            this.color = c(g);
          }
        else (this.model = "rgb"), (this.color = [0, 0, 0]), (this.valpha = 1);
        if (v[this.model])
          for (n = h[this.model].channels, o = 0; o < n; o++) {
            var y = v[this.model][o];
            y && (this.color[o] = y(this.color[o]));
          }
        (this.valpha = Math.max(0, Math.min(1, this.valpha))),
          Object.freeze && Object.freeze(this);
      }
      function n(e, t) {
        return Number(e.toFixed(t));
      }
      function i(e) {
        return function (t) {
          return n(t, e);
        };
      }
      function a(e, t, o) {
        return (
          (e = Array.isArray(e) ? e : [e]),
          e.forEach(function (e) {
            (v[e] || (v[e] = []))[t] = o;
          }),
          (e = e[0]),
          function (r) {
            var n;
            return arguments.length
              ? (o && (r = o(r)), (n = this[e]()), (n.color[t] = r), n)
              : ((n = this[e]().color[t]), o && (n = o(n)), n);
          }
        );
      }
      function l(e) {
        return function (t) {
          return Math.max(0, Math.min(e, t));
        };
      }
      function s(e) {
        return Array.isArray(e) ? e : [e];
      }
      function c(e, t) {
        for (var o = 0; o < t; o++) "number" != typeof e[o] && (e[o] = 0);
        return e;
      }
      var u = o(17),
        h = o(20),
        p = [].slice,
        f = ["keyword", "gray", "hex"],
        d = {};
      Object.keys(h).forEach(function (e) {
        d[p.call(h[e].labels).sort().join("")] = e;
      });
      var v = {};
      (r.prototype = {
        toString: function () {
          return this.string();
        },
        toJSON: function () {
          return this[this.model]();
        },
        string: function (e) {
          var t = this.model in u.to ? this : this.rgb();
          t = t.round("number" == typeof e ? e : 1);
          var o = 1 === t.valpha ? t.color : t.color.concat(this.valpha);
          return u.to[t.model](o);
        },
        percentString: function (e) {
          var t = this.rgb().round("number" == typeof e ? e : 1),
            o = 1 === t.valpha ? t.color : t.color.concat(this.valpha);
          return u.to.rgb.percent(o);
        },
        array: function () {
          return 1 === this.valpha
            ? this.color.slice()
            : this.color.concat(this.valpha);
        },
        object: function () {
          for (
            var e = {},
              t = h[this.model].channels,
              o = h[this.model].labels,
              r = 0;
            r < t;
            r++
          )
            e[o[r]] = this.color[r];
          return 1 !== this.valpha && (e.alpha = this.valpha), e;
        },
        unitArray: function () {
          var e = this.rgb().color;
          return (
            (e[0] /= 255),
            (e[1] /= 255),
            (e[2] /= 255),
            1 !== this.valpha && e.push(this.valpha),
            e
          );
        },
        unitObject: function () {
          var e = this.rgb().object();
          return (
            (e.r /= 255),
            (e.g /= 255),
            (e.b /= 255),
            1 !== this.valpha && (e.alpha = this.valpha),
            e
          );
        },
        round: function (e) {
          return (
            (e = Math.max(e || 0, 0)),
            new r(this.color.map(i(e)).concat(this.valpha), this.model)
          );
        },
        alpha: function (e) {
          return arguments.length
            ? new r(this.color.concat(Math.max(0, Math.min(1, e))), this.model)
            : this.valpha;
        },
        red: a("rgb", 0, l(255)),
        green: a("rgb", 1, l(255)),
        blue: a("rgb", 2, l(255)),
        hue: a(["hsl", "hsv", "hsl", "hwb", "hcg"], 0, function (e) {
          return ((e % 360) + 360) % 360;
        }),
        saturationl: a("hsl", 1, l(100)),
        lightness: a("hsl", 2, l(100)),
        saturationv: a("hsv", 1, l(100)),
        value: a("hsv", 2, l(100)),
        chroma: a("hcg", 1, l(100)),
        gray: a("hcg", 2, l(100)),
        white: a("hwb", 1, l(100)),
        wblack: a("hwb", 2, l(100)),
        cyan: a("cmyk", 0, l(100)),
        magenta: a("cmyk", 1, l(100)),
        yellow: a("cmyk", 2, l(100)),
        black: a("cmyk", 3, l(100)),
        x: a("xyz", 0, l(100)),
        y: a("xyz", 1, l(100)),
        z: a("xyz", 2, l(100)),
        l: a("lab", 0, l(100)),
        a: a("lab", 1),
        b: a("lab", 2),
        keyword: function (e) {
          return arguments.length
            ? new r(e)
            : h[this.model].keyword(this.color);
        },
        hex: function (e) {
          return arguments.length
            ? new r(e)
            : u.to.hex(this.rgb().round().color);
        },
        rgbNumber: function () {
          var e = this.rgb().color;
          return ((255 & e[0]) << 16) | ((255 & e[1]) << 8) | (255 & e[2]);
        },
        luminosity: function () {
          for (var e = this.rgb().color, t = [], o = 0; o < e.length; o++) {
            var r = e[o] / 255;
            t[o] =
              r <= 0.03928 ? r / 12.92 : Math.pow((r + 0.055) / 1.055, 2.4);
          }
          return 0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2];
        },
        contrast: function (e) {
          var t = this.luminosity(),
            o = e.luminosity();
          return t > o ? (t + 0.05) / (o + 0.05) : (o + 0.05) / (t + 0.05);
        },
        level: function (e) {
          var t = this.contrast(e);
          return t >= 7.1 ? "AAA" : t >= 4.5 ? "AA" : "";
        },
        isDark: function () {
          var e = this.rgb().color;
          return (299 * e[0] + 587 * e[1] + 114 * e[2]) / 1e3 < 128;
        },
        isLight: function () {
          return !this.isDark();
        },
        negate: function () {
          for (var e = this.rgb(), t = 0; t < 3; t++)
            e.color[t] = 255 - e.color[t];
          return e;
        },
        lighten: function (e) {
          var t = this.hsl();
          return (t.color[2] += t.color[2] * e), t;
        },
        darken: function (e) {
          var t = this.hsl();
          return (t.color[2] -= t.color[2] * e), t;
        },
        saturate: function (e) {
          var t = this.hsl();
          return (t.color[1] += t.color[1] * e), t;
        },
        desaturate: function (e) {
          var t = this.hsl();
          return (t.color[1] -= t.color[1] * e), t;
        },
        whiten: function (e) {
          var t = this.hwb();
          return (t.color[1] += t.color[1] * e), t;
        },
        blacken: function (e) {
          var t = this.hwb();
          return (t.color[2] += t.color[2] * e), t;
        },
        grayscale: function () {
          var e = this.rgb().color,
            t = 0.3 * e[0] + 0.59 * e[1] + 0.11 * e[2];
          return r.rgb(t, t, t);
        },
        fade: function (e) {
          return this.alpha(this.valpha - this.valpha * e);
        },
        opaquer: function (e) {
          return this.alpha(this.valpha + this.valpha * e);
        },
        rotate: function (e) {
          var t = this.hsl(),
            o = t.color[0];
          return (
            (o = (o + e) % 360), (o = o < 0 ? 360 + o : o), (t.color[0] = o), t
          );
        },
        mix: function (e, t) {
          var o = e.rgb(),
            n = this.rgb(),
            i = void 0 === t ? 0.5 : t,
            a = 2 * i - 1,
            l = o.alpha() - n.alpha(),
            s = ((a * l == -1 ? a : (a + l) / (1 + a * l)) + 1) / 2,
            c = 1 - s;
          return r.rgb(
            s * o.red() + c * n.red(),
            s * o.green() + c * n.green(),
            s * o.blue() + c * n.blue(),
            o.alpha() * i + n.alpha() * (1 - i)
          );
        },
      }),
        Object.keys(h).forEach(function (e) {
          if (-1 === f.indexOf(e)) {
            var t = h[e].channels;
            (r.prototype[e] = function () {
              if (this.model === e) return new r(this);
              if (arguments.length) return new r(arguments, e);
              var o = "number" == typeof arguments[t] ? t : this.valpha;
              return new r(s(h[this.model][e].raw(this.color)).concat(o), e);
            }),
              (r[e] = function (o) {
                return (
                  "number" == typeof o && (o = c(p.call(arguments), t)),
                  new r(o, e)
                );
              });
          }
        }),
        (e.exports = r);
    },
    function (e, t, o) {
      function r(e, t, o) {
        return Math.min(Math.max(t, e), o);
      }
      function n(e) {
        var t = e.toString(16).toUpperCase();
        return t.length < 2 ? "0" + t : t;
      }
      var i = o(5),
        a = o(18),
        l = {};
      for (var s in i) i.hasOwnProperty(s) && (l[i[s]] = s);
      var c = (e.exports = { to: {} });
      (c.get = function (e) {
        var t,
          o,
          r = e.substring(0, 3).toLowerCase();
        switch (r) {
          case "hsl":
            (t = c.get.hsl(e)), (o = "hsl");
            break;
          case "hwb":
            (t = c.get.hwb(e)), (o = "hwb");
            break;
          default:
            (t = c.get.rgb(e)), (o = "rgb");
        }
        return t ? { model: o, value: t } : null;
      }),
        (c.get.rgb = function (e) {
          if (!e) return null;
          var t,
            o,
            n,
            a = /^#([a-f0-9]{3,4})$/i,
            l = /^#([a-f0-9]{6})([a-f0-9]{2})?$/i,
            s =
              /^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,
            c =
              /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,
            u = /(\D+)/,
            h = [0, 0, 0, 1];
          if ((t = e.match(l))) {
            for (n = t[2], t = t[1], o = 0; o < 3; o++) {
              var p = 2 * o;
              h[o] = parseInt(t.slice(p, p + 2), 16);
            }
            n && (h[3] = Math.round((parseInt(n, 16) / 255) * 100) / 100);
          } else if ((t = e.match(a))) {
            for (t = t[1], n = t[3], o = 0; o < 3; o++)
              h[o] = parseInt(t[o] + t[o], 16);
            n && (h[3] = Math.round((parseInt(n + n, 16) / 255) * 100) / 100);
          } else if ((t = e.match(s))) {
            for (o = 0; o < 3; o++) h[o] = parseInt(t[o + 1], 0);
            t[4] && (h[3] = parseFloat(t[4]));
          } else {
            if (!(t = e.match(c)))
              return (t = e.match(u))
                ? "transparent" === t[1]
                  ? [0, 0, 0, 0]
                  : (h = i[t[1]])
                  ? ((h[3] = 1), h)
                  : null
                : null;
            for (o = 0; o < 3; o++)
              h[o] = Math.round(2.55 * parseFloat(t[o + 1]));
            t[4] && (h[3] = parseFloat(t[4]));
          }
          for (o = 0; o < 3; o++) h[o] = r(h[o], 0, 255);
          return (h[3] = r(h[3], 0, 1)), h;
        }),
        (c.get.hsl = function (e) {
          if (!e) return null;
          var t =
              /^hsla?\(\s*([+-]?\d*[\.]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,
            o = e.match(t);
          if (o) {
            var n = parseFloat(o[4]);
            return [
              ((parseFloat(o[1]) % 360) + 360) % 360,
              r(parseFloat(o[2]), 0, 100),
              r(parseFloat(o[3]), 0, 100),
              r(isNaN(n) ? 1 : n, 0, 1),
            ];
          }
          return null;
        }),
        (c.get.hwb = function (e) {
          if (!e) return null;
          var t =
              /^hwb\(\s*([+-]?\d*[\.]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,
            o = e.match(t);
          if (o) {
            var n = parseFloat(o[4]);
            return [
              ((parseFloat(o[1]) % 360) + 360) % 360,
              r(parseFloat(o[2]), 0, 100),
              r(parseFloat(o[3]), 0, 100),
              r(isNaN(n) ? 1 : n, 0, 1),
            ];
          }
          return null;
        }),
        (c.to.hex = function () {
          var e = a(arguments);
          return (
            "#" +
            n(e[0]) +
            n(e[1]) +
            n(e[2]) +
            (e[3] < 1 ? n(Math.round(255 * e[3])) : "")
          );
        }),
        (c.to.rgb = function () {
          var e = a(arguments);
          return e.length < 4 || 1 === e[3]
            ? "rgb(" +
                Math.round(e[0]) +
                ", " +
                Math.round(e[1]) +
                ", " +
                Math.round(e[2]) +
                ")"
            : "rgba(" +
                Math.round(e[0]) +
                ", " +
                Math.round(e[1]) +
                ", " +
                Math.round(e[2]) +
                ", " +
                e[3] +
                ")";
        }),
        (c.to.rgb.percent = function () {
          var e = a(arguments),
            t = Math.round((e[0] / 255) * 100),
            o = Math.round((e[1] / 255) * 100),
            r = Math.round((e[2] / 255) * 100);
          return e.length < 4 || 1 === e[3]
            ? "rgb(" + t + "%, " + o + "%, " + r + "%)"
            : "rgba(" + t + "%, " + o + "%, " + r + "%, " + e[3] + ")";
        }),
        (c.to.hsl = function () {
          var e = a(arguments);
          return e.length < 4 || 1 === e[3]
            ? "hsl(" + e[0] + ", " + e[1] + "%, " + e[2] + "%)"
            : "hsla(" + e[0] + ", " + e[1] + "%, " + e[2] + "%, " + e[3] + ")";
        }),
        (c.to.hwb = function () {
          var e = a(arguments),
            t = "";
          return (
            e.length >= 4 && 1 !== e[3] && (t = ", " + e[3]),
            "hwb(" + e[0] + ", " + e[1] + "%, " + e[2] + "%" + t + ")"
          );
        }),
        (c.to.keyword = function (e) {
          return l[e.slice(0, 3)];
        });
    },
    function (e, t, o) {
      "use strict";
      var r = o(19),
        n = Array.prototype.concat,
        i = Array.prototype.slice,
        a = (e.exports = function (e) {
          for (var t = [], o = 0, a = e.length; o < a; o++) {
            var l = e[o];
            r(l) ? (t = n.call(t, i.call(l))) : t.push(l);
          }
          return t;
        });
      a.wrap = function (e) {
        return function () {
          return e(a(arguments));
        };
      };
    },
    function (e, t, o) {
      "use strict";
      e.exports = function (e) {
        return (
          !!e &&
          (e instanceof Array ||
            Array.isArray(e) ||
            (e.length >= 0 && e.splice instanceof Function))
        );
      };
    },
    function (e, t, o) {
      function r(e) {
        var t = function (t) {
          return void 0 === t || null === t
            ? t
            : (arguments.length > 1 &&
                (t = Array.prototype.slice.call(arguments)),
              e(t));
        };
        return "conversion" in e && (t.conversion = e.conversion), t;
      }
      function n(e) {
        var t = function (t) {
          if (void 0 === t || null === t) return t;
          arguments.length > 1 && (t = Array.prototype.slice.call(arguments));
          var o = e(t);
          if ("object" == typeof o)
            for (var r = o.length, n = 0; n < r; n++) o[n] = Math.round(o[n]);
          return o;
        };
        return "conversion" in e && (t.conversion = e.conversion), t;
      }
      var i = o(6),
        a = o(21),
        l = {};
      Object.keys(i).forEach(function (e) {
        (l[e] = {}),
          Object.defineProperty(l[e], "channels", { value: i[e].channels }),
          Object.defineProperty(l[e], "labels", { value: i[e].labels });
        var t = a(e);
        Object.keys(t).forEach(function (o) {
          var i = t[o];
          (l[e][o] = n(i)), (l[e][o].raw = r(i));
        });
      }),
        (e.exports = l);
    },
    function (e, t, o) {
      function r() {
        for (var e = {}, t = Object.keys(l), o = t.length, r = 0; r < o; r++)
          e[t[r]] = { distance: -1, parent: null };
        return e;
      }
      function n(e) {
        var t = r(),
          o = [e];
        for (t[e].distance = 0; o.length; )
          for (
            var n = o.pop(), i = Object.keys(l[n]), a = i.length, s = 0;
            s < a;
            s++
          ) {
            var c = i[s],
              u = t[c];
            -1 === u.distance &&
              ((u.distance = t[n].distance + 1), (u.parent = n), o.unshift(c));
          }
        return t;
      }
      function i(e, t) {
        return function (o) {
          return t(e(o));
        };
      }
      function a(e, t) {
        for (
          var o = [t[e].parent, e], r = l[t[e].parent][e], n = t[e].parent;
          t[n].parent;

        )
          o.unshift(t[n].parent),
            (r = i(l[t[n].parent][n], r)),
            (n = t[n].parent);
        return (r.conversion = o), r;
      }
      var l = o(6);
      e.exports = function (e) {
        for (
          var t = n(e), o = {}, r = Object.keys(t), i = r.length, l = 0;
          l < i;
          l++
        ) {
          var s = r[l];
          null !== t[s].parent && (o[s] = a(s, t));
        }
        return o;
      };
    },
    function (e, t, o) {
      "use strict";
      function r(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function n(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = (function () {
          function e(e, t) {
            for (var o = 0; o < t.length; o++) {
              var r = t[o];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function (t, o, r) {
            return o && e(t.prototype, o), r && e(t, r), t;
          };
        })(),
        a = o(0),
        l = r(a),
        s = o(2),
        c = r(s),
        u = (function () {
          function e(t) {
            n(this, e), (this.colorpicker = t);
          }
          return (
            i(e, [
              {
                key: "bind",
                value: function () {
                  if (this.colorpicker.options.color)
                    return void (this.color = this.createColor(
                      this.colorpicker.options.color
                    ));
                  !this.color &&
                    this.colorpicker.inputHandler.getValue() &&
                    (this.color = this.createColor(
                      this.colorpicker.inputHandler.getValue(),
                      this.colorpicker.options.autoInputFallback
                    ));
                },
              },
              {
                key: "unbind",
                value: function () {
                  this.colorpicker.element.removeData("color");
                },
              },
              {
                key: "getColorString",
                value: function () {
                  return this.hasColor() ? this.color.string(this.format) : "";
                },
              },
              {
                key: "setColorString",
                value: function (e) {
                  var t = e ? this.createColor(e) : null;
                  this.color = t || null;
                },
              },
              {
                key: "createColor",
                value: function (e) {
                  var t =
                      !(arguments.length > 1 && void 0 !== arguments[1]) ||
                      arguments[1],
                    o = new c.default(
                      this.resolveColorDelegate(e),
                      this.format
                    );
                  return (
                    o.isValid() ||
                      (t && (o = this.getFallbackColor()),
                      this.colorpicker.trigger("colorpickerInvalid", o, e)),
                    this.isAlphaEnabled() || (o.alpha = 1),
                    o
                  );
                },
              },
              {
                key: "getFallbackColor",
                value: function () {
                  if (this.fallback && this.fallback === this.color)
                    return this.color;
                  var e = this.resolveColorDelegate(this.fallback),
                    t = new c.default(e, this.format);
                  if (!t.isValid())
                    throw new Error("The fallback color is invalid.");
                  return t;
                },
              },
              {
                key: "assureColor",
                value: function () {
                  return (
                    this.hasColor() || (this.color = this.getFallbackColor()),
                    this.color
                  );
                },
              },
              {
                key: "resolveColorDelegate",
                value: function (e) {
                  var t =
                      !(arguments.length > 1 && void 0 !== arguments[1]) ||
                      arguments[1],
                    o = !1;
                  return (
                    l.default.each(
                      this.colorpicker.extensions,
                      function (r, n) {
                        !1 === o && (o = n.resolveColor(e, t));
                      }
                    ),
                    o || e
                  );
                },
              },
              {
                key: "isInvalidColor",
                value: function () {
                  return !this.hasColor() || !this.color.isValid();
                },
              },
              {
                key: "isAlphaEnabled",
                value: function () {
                  return !1 !== this.colorpicker.options.useAlpha;
                },
              },
              {
                key: "hasColor",
                value: function () {
                  return this.color instanceof c.default;
                },
              },
              {
                key: "fallback",
                get: function () {
                  return this.colorpicker.options.fallbackColor
                    ? this.colorpicker.options.fallbackColor
                    : this.hasColor()
                    ? this.color
                    : null;
                },
              },
              {
                key: "format",
                get: function () {
                  return this.colorpicker.options.format
                    ? this.colorpicker.options.format
                    : this.hasColor() &&
                      this.color.hasTransparency() &&
                      this.color.format.match(/^hex/)
                    ? this.isAlphaEnabled()
                      ? "rgba"
                      : "hex"
                    : this.hasColor()
                    ? this.color.format
                    : "rgb";
                },
              },
              {
                key: "color",
                get: function () {
                  return this.colorpicker.element.data("color");
                },
                set: function (e) {
                  this.colorpicker.element.data("color", e),
                    e instanceof c.default &&
                      "auto" === this.colorpicker.options.format &&
                      (this.colorpicker.options.format = this.color.format);
                },
              },
            ]),
            e
          );
        })();
      t.default = u;
    },
    function (e, t, o) {
      "use strict";
      function r(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = (function () {
          function e(e, t) {
            for (var o = 0; o < t.length; o++) {
              var r = t[o];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function (t, o, r) {
            return o && e(t.prototype, o), r && e(t, r), t;
          };
        })(),
        i = o(0),
        a = (function (e) {
          return e && e.__esModule ? e : { default: e };
        })(i),
        l = (function () {
          function e(t) {
            r(this, e), (this.colorpicker = t), (this.picker = null);
          }
          return (
            n(e, [
              {
                key: "bind",
                value: function () {
                  var e = (this.picker = (0, a.default)(this.options.template));
                  this.options.customClass &&
                    e.addClass(this.options.customClass),
                    this.options.horizontal &&
                      e.addClass("colorpicker-horizontal"),
                    this._supportsAlphaBar()
                      ? ((this.options.useAlpha = !0),
                        e.addClass("colorpicker-with-alpha"))
                      : (this.options.useAlpha = !1);
                },
              },
              {
                key: "attach",
                value: function () {
                  var e = this.colorpicker.container
                    ? this.colorpicker.container
                    : null;
                  e && this.picker.appendTo(e);
                },
              },
              {
                key: "unbind",
                value: function () {
                  this.picker.remove();
                },
              },
              {
                key: "_supportsAlphaBar",
                value: function () {
                  return (
                    (this.options.useAlpha ||
                      (this.colorpicker.colorHandler.hasColor() &&
                        this.color.hasTransparency())) &&
                    !1 !== this.options.useAlpha &&
                    (!this.options.format ||
                      (this.options.format &&
                        !this.options.format.match(/^hex([36])?$/i)))
                  );
                },
              },
              {
                key: "update",
                value: function () {
                  if (this.colorpicker.colorHandler.hasColor()) {
                    var e = !0 !== this.options.horizontal,
                      t = e ? this.options.sliders : this.options.slidersHorz,
                      o = this.picker.find(
                        ".colorpicker-saturation .colorpicker-guide"
                      ),
                      r = this.picker.find(
                        ".colorpicker-hue .colorpicker-guide"
                      ),
                      n = this.picker.find(
                        ".colorpicker-alpha .colorpicker-guide"
                      ),
                      i = this.color.toHsvaRatio();
                    r.length &&
                      r.css(
                        e ? "top" : "left",
                        (e ? t.hue.maxTop : t.hue.maxLeft) * (1 - i.h)
                      ),
                      n.length &&
                        n.css(
                          e ? "top" : "left",
                          (e ? t.alpha.maxTop : t.alpha.maxLeft) * (1 - i.a)
                        ),
                      o.length &&
                        o.css({
                          top: t.saturation.maxTop - i.v * t.saturation.maxTop,
                          left: i.s * t.saturation.maxLeft,
                        }),
                      this.picker
                        .find(".colorpicker-saturation")
                        .css(
                          "backgroundColor",
                          this.color.getCloneHueOnly().toHexString()
                        );
                    var a = this.color.toHexString(),
                      l = "";
                    (l = this.options.horizontal
                      ? "linear-gradient(to right, " +
                        a +
                        " 0%, transparent 100%)"
                      : "linear-gradient(to bottom, " +
                        a +
                        " 0%, transparent 100%)"),
                      this.picker
                        .find(".colorpicker-alpha-color")
                        .css("background", l);
                  }
                },
              },
              {
                key: "options",
                get: function () {
                  return this.colorpicker.options;
                },
              },
              {
                key: "color",
                get: function () {
                  return this.colorpicker.colorHandler.color;
                },
              },
            ]),
            e
          );
        })();
      t.default = l;
    },
    function (e, t, o) {
      "use strict";
      function r(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = (function () {
          function e(e, t) {
            for (var o = 0; o < t.length; o++) {
              var r = t[o];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function (t, o, r) {
            return o && e(t.prototype, o), r && e(t, r), t;
          };
        })(),
        i = (function () {
          function e(t) {
            r(this, e), (this.colorpicker = t), (this.addon = null);
          }
          return (
            n(e, [
              {
                key: "hasAddon",
                value: function () {
                  return !!this.addon;
                },
              },
              {
                key: "bind",
                value: function () {
                  (this.addon = this.colorpicker.options.addon
                    ? this.colorpicker.element.find(
                        this.colorpicker.options.addon
                      )
                    : null),
                    this.addon &&
                      0 === this.addon.length &&
                      (this.addon = null);
                },
              },
              {
                key: "unbind",
                value: function () {
                  this.hasAddon() && this.addon.off(".colorpicker");
                },
              },
              {
                key: "update",
                value: function () {
                  if (
                    this.colorpicker.colorHandler.hasColor() &&
                    this.hasAddon()
                  ) {
                    var e = this.colorpicker.colorHandler.getColorString(),
                      t = { background: e },
                      o = this.addon.find("i").eq(0);
                    o.length > 0 ? o.css(t) : this.addon.css(t);
                  }
                },
              },
            ]),
            e
          );
        })();
      t.default = i;
    },
  ]);
});
//# sourceMappingURL=bootstrap-colorpicker.min.js.map
