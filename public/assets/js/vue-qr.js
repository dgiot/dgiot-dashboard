!function(t, e) {
  "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define("vue-qr", [], e) : "object" == typeof exports ? exports["vue-qr"] = e() : t["vue-qr"] = e();
}(this, (function() {
  return function(t) {
    var e = {};

    function r(n) {
      if (e[n]) return e[n].exports;
      var o = e[n] = { i: n, l: !1, exports: {} };
      return t[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports;
    }

    return r.m = t, r.c = e, r.d = function(t, e, n) {
      r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
    }, r.r = function(t) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 });
    }, r.t = function(t, e) {
      if (1 & e && (t = r(t)), 8 & e) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var n = Object.create(null);
      if (r.r(n), Object.defineProperty(n, "default", {
        enumerable: !0,
        value: t
      }), 2 & e && "string" != typeof t) for (var o in t) r.d(n, o, function(e) {
        return t[e];
      }.bind(null, o));
      return n;
    }, r.n = function(t) {
      var e = t && t.__esModule ? function() {
        return t.default;
      } : function() {
        return t;
      };
      return r.d(e, "a", e), e;
    }, r.o = function(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }, r.p = "/dist/", r(r.s = 13);
  }([function(t, e) {
    t.exports = function(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }, t.exports.default = t.exports, t.exports.__esModule = !0;
  }, function(t, e) {
    function r(t, e) {
      for (var r = 0; r < e.length; r++) {
        var n = e[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
      }
    }

    t.exports = function(t, e, n) {
      return e && r(t.prototype, e), n && r(t, n), t;
    }, t.exports.default = t.exports, t.exports.__esModule = !0;
  }, function(t, e, r) {
    const n = r(20);
    e.parseFont = n, e.createCanvas = function(t, e) {
      return Object.assign(document.createElement("canvas"), { width: t, height: e });
    }, e.createImageData = function(t, e, r) {
      switch (arguments.length) {
        case 0:
          return new ImageData;
        case 1:
          return new ImageData(t);
        case 2:
          return new ImageData(t, e);
        default:
          return new ImageData(t, e, r);
      }
    }, e.loadImage = function(t, e) {
      return new Promise((function(r, n) {
        const o = Object.assign(document.createElement("img"), e);

        function i() {
          o.onload = null, o.onerror = null;
        }

        o.onload = function() {
          i(), r(o);
        }, o.onerror = function() {
          i(), n(new Error("Failed to load the image \"" + t + "\""));
        }, o.src = t;
      }));
    };
  }, function(t, e, r) {
    t.exports = r(14);
  }, function(t, e) {
    function r(e) {
      return "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? (t.exports = r = function(t) {
        return typeof t;
      }, t.exports.default = t.exports, t.exports.__esModule = !0) : (t.exports = r = function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
      }, t.exports.default = t.exports, t.exports.__esModule = !0), r(e);
    }

    t.exports = r, t.exports.default = t.exports, t.exports.__esModule = !0;
  }, function(t, e, r) {
    "use strict";
    r.d(e, "a", (function() {
      return c;
    })), r.d(e, "b", (function() {
      return l;
    })), r.d(e, "c", (function() {
      return p;
    }));
    var n = r(0), o = r.n(n), i = r(1), a = r.n(i);

    function s(t) {
      var e = encodeURI(t).toString().replace(/\%[0-9a-fA-F]{2}/g, "a");
      return e.length + (e.length != Number(t) ? 3 : 0);
    }

    var u = function() {
      function t(e) {
        o()(this, t), this.mode = f.MODE_8BIT_BYTE, this.parsedData = [], this.data = e;
        for (var r = [], n = 0, i = this.data.length; n < i; n++) {
          var a = [], s = this.data.charCodeAt(n);
          s > 65536 ? (a[0] = 240 | (1835008 & s) >>> 18, a[1] = 128 | (258048 & s) >>> 12, a[2] = 128 | (4032 & s) >>> 6, a[3] = 128 | 63 & s) : s > 2048 ? (a[0] = 224 | (61440 & s) >>> 12, a[1] = 128 | (4032 & s) >>> 6, a[2] = 128 | 63 & s) : s > 128 ? (a[0] = 192 | (1984 & s) >>> 6, a[1] = 128 | 63 & s) : a[0] = s, r.push(a);
        }
        this.parsedData = Array.prototype.concat.apply([], r), this.parsedData.length != this.data.length && (this.parsedData.unshift(191), this.parsedData.unshift(187), this.parsedData.unshift(239));
      }

      return a()(t, [{
        key: "getLength", value: function() {
          return this.parsedData.length;
        }
      }, {
        key: "write", value: function(t) {
          for (var e = 0, r = this.parsedData.length; e < r; e++) t.put(this.parsedData[e], 8);
        }
      }]), t;
    }(), c = function() {
      function t() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1,
          r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.L;
        o()(this, t), this.moduleCount = 0, this.dataList = [], this.typeNumber = e, this.errorCorrectLevel = r, this.moduleCount = 0, this.dataList = [];
      }

      return a()(t, [{
        key: "addData", value: function(t) {
          if (this.typeNumber <= 0) this.typeNumber = function(t, e) {
            for (var r = 1, n = s(t), o = 0, i = m.length; o < i; o++) {
              var a = 0;
              switch (e) {
                case l.L:
                  a = m[o][0];
                  break;
                case l.M:
                  a = m[o][1];
                  break;
                case l.Q:
                  a = m[o][2];
                  break;
                case l.H:
                  a = m[o][3];
              }
              if (n <= a) break;
              r++;
            }
            if (r > m.length) throw new Error("Too long data");
            return r;
          }(t, this.errorCorrectLevel); else {
            if (this.typeNumber > 40) throw new Error("Invalid QR version: ".concat(this.typeNumber));
            if (!function(t, e, r) {
              var n = s(e), o = t - 1, i = 0;
              switch (r) {
                case l.L:
                  i = m[o][0];
                  break;
                case l.M:
                  i = m[o][1];
                  break;
                case l.Q:
                  i = m[o][2];
                  break;
                case l.H:
                  i = m[o][3];
              }
              return n <= i;
            }(this.typeNumber, t, this.errorCorrectLevel)) throw new Error("Data is too long for QR version: ".concat(this.typeNumber));
          }
          var e = new u(t);
          this.dataList.push(e), this.dataCache = void 0;
        }
      }, {
        key: "isDark", value: function(t, e) {
          if (t < 0 || this.moduleCount <= t || e < 0 || this.moduleCount <= e) throw new Error("".concat(t, ",").concat(e));
          return this.modules[t][e];
        }
      }, {
        key: "getModuleCount", value: function() {
          return this.moduleCount;
        }
      }, {
        key: "make", value: function() {
          this.makeImpl(!1, this.getBestMaskPattern());
        }
      }, {
        key: "makeImpl", value: function(e, r) {
          this.moduleCount = 4 * this.typeNumber + 17, this.modules = new Array(this.moduleCount);
          for (var n = 0; n < this.moduleCount; n++) {
            this.modules[n] = new Array(this.moduleCount);
            for (var o = 0; o < this.moduleCount; o++) this.modules[n][o] = null;
          }
          this.setupPositionProbePattern(0, 0), this.setupPositionProbePattern(this.moduleCount - 7, 0), this.setupPositionProbePattern(0, this.moduleCount - 7), this.setupPositionAdjustPattern(), this.setupTimingPattern(), this.setupTypeInfo(e, r), this.typeNumber >= 7 && this.setupTypeNumber(e), null == this.dataCache && (this.dataCache = t.createData(this.typeNumber, this.errorCorrectLevel, this.dataList)), this.mapData(this.dataCache, r);
        }
      }, {
        key: "setupPositionProbePattern", value: function(t, e) {
          for (var r = -1; r <= 7; r++) if (!(t + r <= -1 || this.moduleCount <= t + r)) for (var n = -1; n <= 7; n++) e + n <= -1 || this.moduleCount <= e + n || (this.modules[t + r][e + n] = 0 <= r && r <= 6 && (0 == n || 6 == n) || 0 <= n && n <= 6 && (0 == r || 6 == r) || 2 <= r && r <= 4 && 2 <= n && n <= 4);
        }
      }, {
        key: "getBestMaskPattern", value: function() {
          if (Number.isInteger(this.maskPattern) && Object.values(h).includes(this.maskPattern)) return this.maskPattern;
          for (var t = 0, e = 0, r = 0; r < 8; r++) {
            this.makeImpl(!0, r);
            var n = p.getLostPoint(this);
            (0 == r || t > n) && (t = n, e = r);
          }
          return e;
        }
      }, {
        key: "setupTimingPattern", value: function() {
          for (var t = 8; t < this.moduleCount - 8; t++) null == this.modules[t][6] && (this.modules[t][6] = t % 2 == 0);
          for (var e = 8; e < this.moduleCount - 8; e++) null == this.modules[6][e] && (this.modules[6][e] = e % 2 == 0);
        }
      }, {
        key: "setupPositionAdjustPattern", value: function() {
          for (var t = p.getPatternPosition(this.typeNumber), e = 0; e < t.length; e++) for (var r = 0; r < t.length; r++) {
            var n = t[e], o = t[r];
            if (null == this.modules[n][o]) for (var i = -2; i <= 2; i++) for (var a = -2; a <= 2; a++) this.modules[n + i][o + a] = -2 == i || 2 == i || -2 == a || 2 == a || 0 == i && 0 == a;
          }
        }
      }, {
        key: "setupTypeNumber", value: function(t) {
          for (var e = p.getBCHTypeNumber(this.typeNumber), r = 0; r < 18; r++) {
            var n = !t && 1 == (e >> r & 1);
            this.modules[Math.floor(r / 3)][r % 3 + this.moduleCount - 8 - 3] = n;
          }
          for (r = 0; r < 18; r++) {
            n = !t && 1 == (e >> r & 1);
            this.modules[r % 3 + this.moduleCount - 8 - 3][Math.floor(r / 3)] = n;
          }
        }
      }, {
        key: "setupTypeInfo", value: function(t, e) {
          for (var r = this.errorCorrectLevel << 3 | e, n = p.getBCHTypeInfo(r), o = 0; o < 15; o++) {
            var i = !t && 1 == (n >> o & 1);
            o < 6 ? this.modules[o][8] = i : o < 8 ? this.modules[o + 1][8] = i : this.modules[this.moduleCount - 15 + o][8] = i;
          }
          for (o = 0; o < 15; o++) {
            i = !t && 1 == (n >> o & 1);
            o < 8 ? this.modules[8][this.moduleCount - o - 1] = i : o < 9 ? this.modules[8][15 - o - 1 + 1] = i : this.modules[8][15 - o - 1] = i;
          }
          this.modules[this.moduleCount - 8][8] = !t;
        }
      }, {
        key: "mapData", value: function(t, e) {
          for (var r = -1, n = this.moduleCount - 1, o = 7, i = 0, a = this.moduleCount - 1; a > 0; a -= 2) for (6 == a && a--; ;) {
            for (var s = 0; s < 2; s++) if (null == this.modules[n][a - s]) {
              var u = !1;
              i < t.length && (u = 1 == (t[i] >>> o & 1)), p.getMask(e, n, a - s) && (u = !u), this.modules[n][a - s] = u, -1 == --o && (i++, o = 7);
            }
            if ((n += r) < 0 || this.moduleCount <= n) {
              n -= r, r = -r;
              break;
            }
          }
        }
      }], [{
        key: "createData", value: function(e, r, n) {
          for (var o = y.getRSBlocks(e, r), i = new v, a = 0; a < n.length; a++) {
            var s = n[a];
            i.put(s.mode, 4), i.put(s.getLength(), p.getLengthInBits(s.mode, e)), s.write(i);
          }
          var u = 0;
          for (a = 0; a < o.length; a++) u += o[a].dataCount;
          if (i.getLengthInBits() > 8 * u) throw new Error("code length overflow. (".concat(i.getLengthInBits(), ">").concat(8 * u, ")"));
          for (i.getLengthInBits() + 4 <= 8 * u && i.put(0, 4); i.getLengthInBits() % 8 != 0;) i.putBit(!1);
          for (; !(i.getLengthInBits() >= 8 * u || (i.put(t.PAD0, 8), i.getLengthInBits() >= 8 * u));) i.put(t.PAD1, 8);
          return t.createBytes(i, o);
        }
      }, {
        key: "createBytes", value: function(t, e) {
          for (var r = 0, n = 0, o = 0, i = new Array(e.length), a = new Array(e.length), s = 0; s < e.length; s++) {
            var u = e[s].dataCount, c = e[s].totalCount - u;
            n = Math.max(n, u), o = Math.max(o, c), i[s] = new Array(u);
            for (var l = 0; l < i[s].length; l++) i[s][l] = 255 & t.buffer[l + r];
            r += u;
            var f = p.getErrorCorrectPolynomial(c), h = new g(i[s], f.getLength() - 1).mod(f);
            a[s] = new Array(f.getLength() - 1);
            for (l = 0; l < a[s].length; l++) {
              var d = l + h.getLength() - a[s].length;
              a[s][l] = d >= 0 ? h.get(d) : 0;
            }
          }
          var y = 0;
          for (l = 0; l < e.length; l++) y += e[l].totalCount;
          var v = new Array(y), m = 0;
          for (l = 0; l < n; l++) for (s = 0; s < e.length; s++) l < i[s].length && (v[m++] = i[s][l]);
          for (l = 0; l < o; l++) for (s = 0; s < e.length; s++) l < a[s].length && (v[m++] = a[s][l]);
          return v;
        }
      }]), t;
    }();
    c.PAD0 = 236, c.PAD1 = 17;
    var l = { L: 1, M: 0, Q: 3, H: 2 }, f = { MODE_NUMBER: 1, MODE_ALPHA_NUM: 2, MODE_8BIT_BYTE: 4, MODE_KANJI: 8 },
      h = {
        PATTERN000: 0,
        PATTERN001: 1,
        PATTERN010: 2,
        PATTERN011: 3,
        PATTERN100: 4,
        PATTERN101: 5,
        PATTERN110: 6,
        PATTERN111: 7
      }, p = function() {
        function t() {
          o()(this, t);
        }

        return a()(t, null, [{
          key: "getBCHTypeInfo", value: function(e) {
            for (var r = e << 10; t.getBCHDigit(r) - t.getBCHDigit(t.G15) >= 0;) r ^= t.G15 << t.getBCHDigit(r) - t.getBCHDigit(t.G15);
            return (e << 10 | r) ^ t.G15_MASK;
          }
        }, {
          key: "getBCHTypeNumber", value: function(e) {
            for (var r = e << 12; t.getBCHDigit(r) - t.getBCHDigit(t.G18) >= 0;) r ^= t.G18 << t.getBCHDigit(r) - t.getBCHDigit(t.G18);
            return e << 12 | r;
          }
        }, {
          key: "getBCHDigit", value: function(t) {
            for (var e = 0; 0 != t;) e++, t >>>= 1;
            return e;
          }
        }, {
          key: "getPatternPosition", value: function(e) {
            return t.PATTERN_POSITION_TABLE[e - 1];
          }
        }, {
          key: "getMask", value: function(t, e, r) {
            switch (t) {
              case h.PATTERN000:
                return (e + r) % 2 == 0;
              case h.PATTERN001:
                return e % 2 == 0;
              case h.PATTERN010:
                return r % 3 == 0;
              case h.PATTERN011:
                return (e + r) % 3 == 0;
              case h.PATTERN100:
                return (Math.floor(e / 2) + Math.floor(r / 3)) % 2 == 0;
              case h.PATTERN101:
                return e * r % 2 + e * r % 3 == 0;
              case h.PATTERN110:
                return (e * r % 2 + e * r % 3) % 2 == 0;
              case h.PATTERN111:
                return (e * r % 3 + (e + r) % 2) % 2 == 0;
              default:
                throw new Error("bad maskPattern:".concat(t));
            }
          }
        }, {
          key: "getErrorCorrectPolynomial", value: function(t) {
            for (var e = new g([1], 0), r = 0; r < t; r++) e = e.multiply(new g([1, d.gexp(r)], 0));
            return e;
          }
        }, {
          key: "getLengthInBits", value: function(t, e) {
            if (1 <= e && e < 10) switch (t) {
              case f.MODE_NUMBER:
                return 10;
              case f.MODE_ALPHA_NUM:
                return 9;
              case f.MODE_8BIT_BYTE:
              case f.MODE_KANJI:
                return 8;
              default:
                throw new Error("mode:".concat(t));
            } else if (e < 27) switch (t) {
              case f.MODE_NUMBER:
                return 12;
              case f.MODE_ALPHA_NUM:
                return 11;
              case f.MODE_8BIT_BYTE:
                return 16;
              case f.MODE_KANJI:
                return 10;
              default:
                throw new Error("mode:".concat(t));
            } else {
              if (!(e < 41)) throw new Error("type:".concat(e));
              switch (t) {
                case f.MODE_NUMBER:
                  return 14;
                case f.MODE_ALPHA_NUM:
                  return 13;
                case f.MODE_8BIT_BYTE:
                  return 16;
                case f.MODE_KANJI:
                  return 12;
                default:
                  throw new Error("mode:".concat(t));
              }
            }
          }
        }, {
          key: "getLostPoint", value: function(t) {
            for (var e = t.getModuleCount(), r = 0, n = 0; n < e; n++) for (var o = 0; o < e; o++) {
              for (var i = 0, a = t.isDark(n, o), s = -1; s <= 1; s++) if (!(n + s < 0 || e <= n + s)) for (var u = -1; u <= 1; u++) o + u < 0 || e <= o + u || 0 == s && 0 == u || a == t.isDark(n + s, o + u) && i++;
              i > 5 && (r += 3 + i - 5);
            }
            for (n = 0; n < e - 1; n++) for (o = 0; o < e - 1; o++) {
              var c = 0;
              t.isDark(n, o) && c++, t.isDark(n + 1, o) && c++, t.isDark(n, o + 1) && c++, t.isDark(n + 1, o + 1) && c++, 0 != c && 4 != c || (r += 3);
            }
            for (n = 0; n < e; n++) for (o = 0; o < e - 6; o++) t.isDark(n, o) && !t.isDark(n, o + 1) && t.isDark(n, o + 2) && t.isDark(n, o + 3) && t.isDark(n, o + 4) && !t.isDark(n, o + 5) && t.isDark(n, o + 6) && (r += 40);
            for (o = 0; o < e; o++) for (n = 0; n < e - 6; n++) t.isDark(n, o) && !t.isDark(n + 1, o) && t.isDark(n + 2, o) && t.isDark(n + 3, o) && t.isDark(n + 4, o) && !t.isDark(n + 5, o) && t.isDark(n + 6, o) && (r += 40);
            var l = 0;
            for (o = 0; o < e; o++) for (n = 0; n < e; n++) t.isDark(n, o) && l++;
            return r += 10 * (Math.abs(100 * l / e / e - 50) / 5);
          }
        }]), t;
      }();
    p.PATTERN_POSITION_TABLE = [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]], p.G15 = 1335, p.G18 = 7973, p.G15_MASK = 21522;
    var d = function() {
      function t() {
        o()(this, t);
      }

      return a()(t, null, [{
        key: "glog", value: function(e) {
          if (e < 1) throw new Error("glog(".concat(e, ")"));
          return t.LOG_TABLE[e];
        }
      }, {
        key: "gexp", value: function(e) {
          for (; e < 0;) e += 255;
          for (; e >= 256;) e -= 255;
          return t.EXP_TABLE[e];
        }
      }]), t;
    }();
    d.EXP_TABLE = new Array(256), d.LOG_TABLE = new Array(256), d._constructor = function() {
      for (var t = 0; t < 8; t++) d.EXP_TABLE[t] = 1 << t;
      for (t = 8; t < 256; t++) d.EXP_TABLE[t] = d.EXP_TABLE[t - 4] ^ d.EXP_TABLE[t - 5] ^ d.EXP_TABLE[t - 6] ^ d.EXP_TABLE[t - 8];
      for (t = 0; t < 255; t++) d.LOG_TABLE[d.EXP_TABLE[t]] = t;
    }();
    var g = function() {
      function t(e, r) {
        if (o()(this, t), null == e.length) throw new Error("".concat(e.length, "/").concat(r));
        for (var n = 0; n < e.length && 0 == e[n];) n++;
        this.num = new Array(e.length - n + r);
        for (var i = 0; i < e.length - n; i++) this.num[i] = e[i + n];
      }

      return a()(t, [{
        key: "get", value: function(t) {
          return this.num[t];
        }
      }, {
        key: "getLength", value: function() {
          return this.num.length;
        }
      }, {
        key: "multiply", value: function(e) {
          for (var r = new Array(this.getLength() + e.getLength() - 1), n = 0; n < this.getLength(); n++) for (var o = 0; o < e.getLength(); o++) r[n + o] ^= d.gexp(d.glog(this.get(n)) + d.glog(e.get(o)));
          return new t(r, 0);
        }
      }, {
        key: "mod", value: function(e) {
          if (this.getLength() - e.getLength() < 0) return this;
          for (var r = d.glog(this.get(0)) - d.glog(e.get(0)), n = new Array(this.getLength()), o = 0; o < this.getLength(); o++) n[o] = this.get(o);
          for (o = 0; o < e.getLength(); o++) n[o] ^= d.gexp(d.glog(e.get(o)) + r);
          return new t(n, 0).mod(e);
        }
      }]), t;
    }(), y = function() {
      function t(e, r) {
        o()(this, t), this.totalCount = e, this.dataCount = r;
      }

      return a()(t, null, [{
        key: "getRSBlocks", value: function(e, r) {
          var n = t.getRsBlockTable(e, r);
          if (null == n) throw new Error("bad rs block @ typeNumber:".concat(e, "/errorCorrectLevel:").concat(r));
          for (var o = n.length / 3, i = [], a = 0; a < o; a++) for (var s = n[3 * a + 0], u = n[3 * a + 1], c = n[3 * a + 2], l = 0; l < s; l++) i.push(new t(u, c));
          return i;
        }
      }, {
        key: "getRsBlockTable", value: function(e, r) {
          switch (r) {
            case l.L:
              return t.RS_BLOCK_TABLE[4 * (e - 1) + 0];
            case l.M:
              return t.RS_BLOCK_TABLE[4 * (e - 1) + 1];
            case l.Q:
              return t.RS_BLOCK_TABLE[4 * (e - 1) + 2];
            case l.H:
              return t.RS_BLOCK_TABLE[4 * (e - 1) + 3];
            default:
              return;
          }
        }
      }]), t;
    }();
    y.RS_BLOCK_TABLE = [[1, 26, 19], [1, 26, 16], [1, 26, 13], [1, 26, 9], [1, 44, 34], [1, 44, 28], [1, 44, 22], [1, 44, 16], [1, 70, 55], [1, 70, 44], [2, 35, 17], [2, 35, 13], [1, 100, 80], [2, 50, 32], [2, 50, 24], [4, 25, 9], [1, 134, 108], [2, 67, 43], [2, 33, 15, 2, 34, 16], [2, 33, 11, 2, 34, 12], [2, 86, 68], [4, 43, 27], [4, 43, 19], [4, 43, 15], [2, 98, 78], [4, 49, 31], [2, 32, 14, 4, 33, 15], [4, 39, 13, 1, 40, 14], [2, 121, 97], [2, 60, 38, 2, 61, 39], [4, 40, 18, 2, 41, 19], [4, 40, 14, 2, 41, 15], [2, 146, 116], [3, 58, 36, 2, 59, 37], [4, 36, 16, 4, 37, 17], [4, 36, 12, 4, 37, 13], [2, 86, 68, 2, 87, 69], [4, 69, 43, 1, 70, 44], [6, 43, 19, 2, 44, 20], [6, 43, 15, 2, 44, 16], [4, 101, 81], [1, 80, 50, 4, 81, 51], [4, 50, 22, 4, 51, 23], [3, 36, 12, 8, 37, 13], [2, 116, 92, 2, 117, 93], [6, 58, 36, 2, 59, 37], [4, 46, 20, 6, 47, 21], [7, 42, 14, 4, 43, 15], [4, 133, 107], [8, 59, 37, 1, 60, 38], [8, 44, 20, 4, 45, 21], [12, 33, 11, 4, 34, 12], [3, 145, 115, 1, 146, 116], [4, 64, 40, 5, 65, 41], [11, 36, 16, 5, 37, 17], [11, 36, 12, 5, 37, 13], [5, 109, 87, 1, 110, 88], [5, 65, 41, 5, 66, 42], [5, 54, 24, 7, 55, 25], [11, 36, 12], [5, 122, 98, 1, 123, 99], [7, 73, 45, 3, 74, 46], [15, 43, 19, 2, 44, 20], [3, 45, 15, 13, 46, 16], [1, 135, 107, 5, 136, 108], [10, 74, 46, 1, 75, 47], [1, 50, 22, 15, 51, 23], [2, 42, 14, 17, 43, 15], [5, 150, 120, 1, 151, 121], [9, 69, 43, 4, 70, 44], [17, 50, 22, 1, 51, 23], [2, 42, 14, 19, 43, 15], [3, 141, 113, 4, 142, 114], [3, 70, 44, 11, 71, 45], [17, 47, 21, 4, 48, 22], [9, 39, 13, 16, 40, 14], [3, 135, 107, 5, 136, 108], [3, 67, 41, 13, 68, 42], [15, 54, 24, 5, 55, 25], [15, 43, 15, 10, 44, 16], [4, 144, 116, 4, 145, 117], [17, 68, 42], [17, 50, 22, 6, 51, 23], [19, 46, 16, 6, 47, 17], [2, 139, 111, 7, 140, 112], [17, 74, 46], [7, 54, 24, 16, 55, 25], [34, 37, 13], [4, 151, 121, 5, 152, 122], [4, 75, 47, 14, 76, 48], [11, 54, 24, 14, 55, 25], [16, 45, 15, 14, 46, 16], [6, 147, 117, 4, 148, 118], [6, 73, 45, 14, 74, 46], [11, 54, 24, 16, 55, 25], [30, 46, 16, 2, 47, 17], [8, 132, 106, 4, 133, 107], [8, 75, 47, 13, 76, 48], [7, 54, 24, 22, 55, 25], [22, 45, 15, 13, 46, 16], [10, 142, 114, 2, 143, 115], [19, 74, 46, 4, 75, 47], [28, 50, 22, 6, 51, 23], [33, 46, 16, 4, 47, 17], [8, 152, 122, 4, 153, 123], [22, 73, 45, 3, 74, 46], [8, 53, 23, 26, 54, 24], [12, 45, 15, 28, 46, 16], [3, 147, 117, 10, 148, 118], [3, 73, 45, 23, 74, 46], [4, 54, 24, 31, 55, 25], [11, 45, 15, 31, 46, 16], [7, 146, 116, 7, 147, 117], [21, 73, 45, 7, 74, 46], [1, 53, 23, 37, 54, 24], [19, 45, 15, 26, 46, 16], [5, 145, 115, 10, 146, 116], [19, 75, 47, 10, 76, 48], [15, 54, 24, 25, 55, 25], [23, 45, 15, 25, 46, 16], [13, 145, 115, 3, 146, 116], [2, 74, 46, 29, 75, 47], [42, 54, 24, 1, 55, 25], [23, 45, 15, 28, 46, 16], [17, 145, 115], [10, 74, 46, 23, 75, 47], [10, 54, 24, 35, 55, 25], [19, 45, 15, 35, 46, 16], [17, 145, 115, 1, 146, 116], [14, 74, 46, 21, 75, 47], [29, 54, 24, 19, 55, 25], [11, 45, 15, 46, 46, 16], [13, 145, 115, 6, 146, 116], [14, 74, 46, 23, 75, 47], [44, 54, 24, 7, 55, 25], [59, 46, 16, 1, 47, 17], [12, 151, 121, 7, 152, 122], [12, 75, 47, 26, 76, 48], [39, 54, 24, 14, 55, 25], [22, 45, 15, 41, 46, 16], [6, 151, 121, 14, 152, 122], [6, 75, 47, 34, 76, 48], [46, 54, 24, 10, 55, 25], [2, 45, 15, 64, 46, 16], [17, 152, 122, 4, 153, 123], [29, 74, 46, 14, 75, 47], [49, 54, 24, 10, 55, 25], [24, 45, 15, 46, 46, 16], [4, 152, 122, 18, 153, 123], [13, 74, 46, 32, 75, 47], [48, 54, 24, 14, 55, 25], [42, 45, 15, 32, 46, 16], [20, 147, 117, 4, 148, 118], [40, 75, 47, 7, 76, 48], [43, 54, 24, 22, 55, 25], [10, 45, 15, 67, 46, 16], [19, 148, 118, 6, 149, 119], [18, 75, 47, 31, 76, 48], [34, 54, 24, 34, 55, 25], [20, 45, 15, 61, 46, 16]];
    var v = function() {
        function t() {
          o()(this, t), this.buffer = [], this.length = 0;
        }

        return a()(t, [{
          key: "get", value: function(t) {
            var e = Math.floor(t / 8);
            return 1 == (this.buffer[e] >>> 7 - t % 8 & 1);
          }
        }, {
          key: "put", value: function(t, e) {
            for (var r = 0; r < e; r++) this.putBit(1 == (t >>> e - r - 1 & 1));
          }
        }, {
          key: "getLengthInBits", value: function() {
            return this.length;
          }
        }, {
          key: "putBit", value: function(t) {
            var e = Math.floor(this.length / 8);
            this.buffer.length <= e && this.buffer.push(0), t && (this.buffer[e] |= 128 >>> this.length % 8), this.length++;
          }
        }]), t;
      }(),
      m = [[17, 14, 11, 7], [32, 26, 20, 14], [53, 42, 32, 24], [78, 62, 46, 34], [106, 84, 60, 44], [134, 106, 74, 58], [154, 122, 86, 64], [192, 152, 108, 84], [230, 180, 130, 98], [271, 213, 151, 119], [321, 251, 177, 137], [367, 287, 203, 155], [425, 331, 241, 177], [458, 362, 258, 194], [520, 412, 292, 220], [586, 450, 322, 250], [644, 504, 364, 280], [718, 560, 394, 310], [792, 624, 442, 338], [858, 666, 482, 382], [929, 711, 509, 403], [1003, 779, 565, 439], [1091, 857, 611, 461], [1171, 911, 661, 511], [1273, 997, 715, 535], [1367, 1059, 751, 593], [1465, 1125, 805, 625], [1528, 1190, 868, 658], [1628, 1264, 908, 698], [1732, 1370, 982, 742], [1840, 1452, 1030, 790], [1952, 1538, 1112, 842], [2068, 1628, 1168, 898], [2188, 1722, 1228, 958], [2303, 1809, 1283, 983], [2431, 1911, 1351, 1051], [2563, 1989, 1423, 1093], [2699, 2099, 1499, 1139], [2809, 2213, 1579, 1219], [2953, 2331, 1663, 1273]];
  }, function(t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), e.loop = e.conditional = e.parse = void 0;
    e.parse = function t(e, r) {
      var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : n;
      if (Array.isArray(r)) r.forEach((function(r) {
        return t(e, r, n, o);
      })); else if ("function" == typeof r) r(e, n, o, t); else {
        var i = Object.keys(r)[0];
        Array.isArray(r[i]) ? (o[i] = {}, t(e, r[i], n, o[i])) : o[i] = r[i](e, n, o, t);
      }
      return n;
    };
    e.conditional = function(t, e) {
      return function(r, n, o, i) {
        e(r, n, o) && i(r, t, n, o);
      };
    };
    e.loop = function(t, e) {
      return function(r, n, o, i) {
        for (var a = []; e(r, n, o);) {
          var s = {};
          i(r, t, n, s), a.push(s);
        }
        return a;
      };
    };
  }, function(t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), e.readBits = e.readArray = e.readUnsigned = e.readString = e.peekBytes = e.readBytes = e.peekByte = e.readByte = e.buildStream = void 0;
    e.buildStream = function(t) {
      return { data: t, pos: 0 };
    };
    var n = function() {
      return function(t) {
        return t.data[t.pos++];
      };
    };
    e.readByte = n;
    e.peekByte = function() {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
      return function(e) {
        return e.data[e.pos + t];
      };
    };
    var o = function(t) {
      return function(e) {
        return e.data.subarray(e.pos, e.pos += t);
      };
    };
    e.readBytes = o;
    e.peekBytes = function(t) {
      return function(e) {
        return e.data.subarray(e.pos, e.pos + t);
      };
    };
    e.readString = function(t) {
      return function(e) {
        return Array.from(o(t)(e)).map((function(t) {
          return String.fromCharCode(t);
        })).join("");
      };
    };
    e.readUnsigned = function(t) {
      return function(e) {
        var r = o(2)(e);
        return t ? (r[1] << 8) + r[0] : (r[0] << 8) + r[1];
      };
    };
    e.readArray = function(t, e) {
      return function(r, n, i) {
        for (var a = "function" == typeof e ? e(r, n, i) : e, s = o(t), u = new Array(a), c = 0; c < a; c++) u[c] = s(r);
        return u;
      };
    };
    e.readBits = function(t) {
      return function(e) {
        for (var r = function(t) {
          return t.data[t.pos++];
        }(e), n = new Array(8), o = 0; o < 8; o++) n[7 - o] = !!(r & 1 << o);
        return Object.keys(t).reduce((function(e, r) {
          var o = t[r];
          return o.length ? e[r] = function(t, e, r) {
            for (var n = 0, o = 0; o < r; o++) n += t[e + o] && Math.pow(2, r - o - 1);
            return n;
          }(n, o.index, o.length) : e[r] = n[o.index], e;
        }), {});
      };
    };
  }, function(t, e) {
    function r(t, e, r, n, o, i, a) {
      try {
        var s = t[i](a), u = s.value;
      } catch (t) {
        return void r(t);
      }
      s.done ? e(u) : Promise.resolve(u).then(n, o);
    }

    t.exports = function(t) {
      return function() {
        var e = this, n = arguments;
        return new Promise((function(o, i) {
          var a = t.apply(e, n);

          function s(t) {
            r(a, o, i, s, u, "next", t);
          }

          function u(t) {
            r(a, o, i, s, u, "throw", t);
          }

          s(void 0);
        }));
      };
    }, t.exports.default = t.exports, t.exports.__esModule = !0;
  }, function(t, e, r) {
    "use strict";
    r.d(e, "b", (function() {
      return s;
    })), r.d(e, "a", (function() {
      return c;
    }));
    var n = r(11), o = r.n(n), i = r(6), a = r(7), s = function(t) {
      var e = new Uint8Array(t);
      return Object(i.parse)(Object(a.buildStream)(e), o.a);
    }, u = function(t, e, r) {
      if (t.image) {
        var n = t.image, o = n.descriptor.width * n.descriptor.height, i = function(t, e, r) {
          var n, o, i, a, s, u, c, l, f, h, p, d, g, y, v, m, w = r, b = new Array(r), x = new Array(4096),
            E = new Array(4096), A = new Array(4097);
          for (s = (o = 1 << (h = t)) + 1, n = o + 2, c = -1, i = (1 << (a = h + 1)) - 1, l = 0; l < o; l++) x[l] = 0, E[l] = l;
          for (p = d = g = y = v = m = 0, f = 0; f < w;) {
            if (0 === y) {
              if (d < a) {
                p += e[m] << d, d += 8, m++;
                continue;
              }
              if (l = p & i, p >>= a, d -= a, l > n || l == s) break;
              if (l == o) {
                i = (1 << (a = h + 1)) - 1, n = o + 2, c = -1;
                continue;
              }
              if (-1 == c) {
                A[y++] = E[l], c = l, g = l;
                continue;
              }
              for (u = l, l == n && (A[y++] = g, l = c); l > o;) A[y++] = E[l], l = x[l];
              g = 255 & E[l], A[y++] = g, n < 4096 && (x[n] = c, E[n] = g, 0 == (++n & i) && n < 4096 && (a++, i += n)), c = u;
            }
            y--, b[v++] = A[y], f++;
          }
          for (f = v; f < w; f++) b[f] = 0;
          return b;
        }(n.data.minCodeSize, n.data.blocks, o);
        n.descriptor.lct.interlaced && (i = function(t, e) {
          for (var r = new Array(t.length), n = t.length / e, o = function(n, o) {
            var i = t.slice(o * e, (o + 1) * e);
            r.splice.apply(r, [n * e, e].concat(i));
          }, i = [0, 4, 2, 1], a = [8, 8, 4, 2], s = 0, u = 0; u < 4; u++) for (var c = i[u]; c < n; c += a[u]) o(c, s), s++;
          return r;
        }(i, n.descriptor.width));
        var a = {
          pixels: i,
          dims: {
            top: t.image.descriptor.top,
            left: t.image.descriptor.left,
            width: t.image.descriptor.width,
            height: t.image.descriptor.height
          }
        };
        return n.descriptor.lct && n.descriptor.lct.exists ? a.colorTable = n.lct : a.colorTable = e, t.gce && (a.delay = 10 * (t.gce.delay || 10), a.disposalType = t.gce.extras.disposal, t.gce.extras.transparentColorGiven && (a.transparentIndex = t.gce.transparentColorIndex)), r && (a.patch = function(t) {
          for (var e = t.pixels.length, r = new Uint8ClampedArray(4 * e), n = 0; n < e; n++) {
            var o = 4 * n, i = t.pixels[n], a = t.colorTable[i];
            r[o] = a[0], r[o + 1] = a[1], r[o + 2] = a[2], r[o + 3] = i !== t.transparentIndex ? 255 : 0;
          }
          return r;
        }(a)), a;
      }
      console.warn("gif frame does not have associated image.");
    }, c = function(t, e) {
      return t.frames.filter((function(t) {
        return t.image;
      })).map((function(r) {
        return u(r, t.gct, e);
      }));
    };
  }, function(t, e, r) {
    "use strict";
    (function(t) {
      r.d(e, "a", (function() {
        return v;
      }));
      var n = r(4), o = r.n(n), i = r(0), a = r.n(i), s = r(1), u = r.n(s), c = r(3), l = r.n(c), f = r(2), h = r(9),
        p = r(5), d = r(12), g = function(t, e, r, n) {
          return new (r || (r = Promise))((function(o, i) {
            function a(t) {
              try {
                u(n.next(t));
              } catch (t) {
                i(t);
              }
            }

            function s(t) {
              try {
                u(n.throw(t));
              } catch (t) {
                i(t);
              }
            }

            function u(t) {
              var e;
              t.done ? o(t.value) : (e = t.value, e instanceof r ? e : new r((function(t) {
                t(e);
              }))).then(a, s);
            }

            u((n = n.apply(t, e || [])).next());
          }));
        };

      function y(t) {
        if (t) return new Promise((function(r, n) {
          if ("data" == t.slice(0, 4)) {
            var o = new Image;
            return o.onload = function() {
              r(o), e(o);
            }, o.onerror = function() {
              n("Image load error"), e(o);
            }, void (o.src = t);
          }
          var i = new Image;
          i.setAttribute("crossOrigin", "Anonymous"), i.onload = function() {
            r(i);
          }, i.onerror = function() {
            n("Image load error");
          }, i.src = t;
        }));

        function e(t) {
          t.onload = null, t.onerror = null;
        }
      }

      var v = function() {
        function e(t) {
          a()(this, e);
          var r = Object.assign({}, t);
          if (Object.keys(e.defaultOptions).forEach((function(t) {
            t in r || Object.defineProperty(r, t, { value: e.defaultOptions[t], enumerable: !0, writable: !0 });
          })), r.components ? "object" === o()(r.components) && Object.keys(e.defaultComponentOptions).forEach((function(t) {
            t in r.components ? Object.defineProperty(r.components, t, {
              value: Object.assign(Object.assign({}, e.defaultComponentOptions[t]), r.components[t]),
              enumerable: !0,
              writable: !0
            }) : Object.defineProperty(r.components, t, {
              value: e.defaultComponentOptions[t],
              enumerable: !0,
              writable: !0
            });
          })) : r.components = e.defaultComponentOptions, null !== r.dotScale && void 0 !== r.dotScale) {
            if (r.dotScale <= 0 || r.dotScale > 1) throw new Error("dotScale should be in range (0, 1].");
            r.components.data.scale = r.dotScale, r.components.timing.scale = r.dotScale, r.components.alignment.scale = r.dotScale;
          }
          this.options = r, this.canvas = Object(f.createCanvas)(t.size, t.size), this.canvasContext = this.canvas.getContext("2d"), this.qrCode = new p.a(-1, this.options.correctLevel), Number.isInteger(this.options.maskPattern) && (this.qrCode.maskPattern = this.options.maskPattern), Number.isInteger(this.options.version) && (this.qrCode.typeNumber = this.options.version), this.qrCode.addData(this.options.text), this.qrCode.make();
        }

        return u()(e, [{
          key: "draw", value: function() {
            var t = this;
            return new Promise((function(e) {
              return t._draw().then(e);
            }));
          }
        }, {
          key: "_clear", value: function() {
            this.canvasContext.clearRect(0, 0, this.canvas.width, this.canvas.height);
          }
        }, {
          key: "_draw", value: function() {
            var r, n, o, i, a, s, u, c, v, w, b, x, E, A, B, k, _, P, C;
            return g(this, void 0, void 0, l.a.mark((function g() {
              var T, R, S, L, D, I, M, O, U, N, j, F, Y, z, G, H, q, X, Q, K, $, V, J, W, Z, tt, et, rt, nt, ot, it, at,
                st, ut, ct, lt, ft, ht, pt, dt, gt, yt, vt, mt, wt, bt, xt, Et, At, Bt, kt, _t, Pt, Ct, Tt, Rt, St, Lt,
                Dt, It, Mt, Ot, Ut, Nt, jt, Ft, Yt, zt, Gt, Ht, qt;
              return l.a.wrap((function(l) {
                for (; ;) switch (l.prev = l.next) {
                  case 0:
                    if (T = null === (r = this.qrCode) || void 0 === r ? void 0 : r.moduleCount, R = this.options.size, ((S = this.options.margin) < 0 || 2 * S >= R) && (S = 0), L = Math.ceil(S), D = R - 2 * S, I = this.options.whiteMargin, M = this.options.backgroundDimming, O = Math.ceil(D / T), N = (U = O * T) + 2 * L, j = Object(f.createCanvas)(N, N), F = j.getContext("2d"), this._clear(), F.save(), F.translate(L, L), Y = Object(f.createCanvas)(N, N), z = Y.getContext("2d"), G = null, H = [], !this.options.gifBackground) {
                      l.next = 47;
                      break;
                    }
                    if (q = Object(h.b)(this.options.gifBackground), G = q, H = Object(h.a)(q, !0), !this.options.autoColor) {
                      l.next = 45;
                      break;
                    }
                    X = 0, Q = 0, K = 0, $ = 0, V = 0;
                  case 28:
                    if (!(V < H[0].colorTable.length)) {
                      l.next = 41;
                      break;
                    }
                    if (!((J = H[0].colorTable[V])[0] > 200 || J[1] > 200 || J[2] > 200)) {
                      l.next = 32;
                      break;
                    }
                    return l.abrupt("continue", 38);
                  case 32:
                    if (0 !== J[0] || 0 !== J[1] || 0 !== J[2]) {
                      l.next = 34;
                      break;
                    }
                    return l.abrupt("continue", 38);
                  case 34:
                    $++, X += J[0], Q += J[1], K += J[2];
                  case 38:
                    V++, l.next = 28;
                    break;
                  case 41:
                    X = ~~(X / $), Q = ~~(Q / $), K = ~~(K / $), this.options.colorDark = "rgb(".concat(X, ",").concat(Q, ",").concat(K, ")");
                  case 45:
                    l.next = 61;
                    break;
                  case 47:
                    if (!this.options.backgroundImage) {
                      l.next = 58;
                      break;
                    }
                    return l.next = 50, y(this.options.backgroundImage);
                  case 50:
                    W = l.sent, this.options.autoColor && (Z = e._getAverageRGB(W), this.options.colorDark = "rgb(".concat(Z.r, ",").concat(Z.g, ",").concat(Z.b, ")")), z.drawImage(W, 0, 0, W.width, W.height, 0, 0, N, N), z.rect(0, 0, N, N), z.fillStyle = M, z.fill(), l.next = 61;
                    break;
                  case 58:
                    z.rect(0, 0, N, N), z.fillStyle = this.options.colorLight, z.fill();
                  case 61:
                    for (tt = p.c.getPatternPosition(this.qrCode.typeNumber), et = (null === (o = null === (n = this.options.components) || void 0 === n ? void 0 : n.data) || void 0 === o ? void 0 : o.scale) || .4, rt = .5 * (1 - et), nt = 0; nt < T; nt++) for (ot = 0; ot < T; ot++) {
                      for (it = this.qrCode.isDark(nt, ot), at = 6 == nt && ot >= 8 && ot <= T - 8 || 6 == ot && nt >= 8 && nt <= T - 8, st = ot < 8 && (nt < 8 || nt >= T - 8) || ot >= T - 8 && nt < 8 || at, ut = 1; ut < tt.length - 1; ut++) st = st || nt >= tt[ut] - 2 && nt <= tt[ut] + 2 && ot >= tt[ut] - 2 && ot <= tt[ut] + 2;
                      ct = ot * O + (st ? 0 : rt * O), lt = nt * O + (st ? 0 : rt * O), F.strokeStyle = it ? this.options.colorDark : this.options.colorLight, F.lineWidth = .5, F.fillStyle = it ? this.options.colorDark : this.options.colorLight, 0 === tt.length ? st || F.fillRect(ct, lt, (st ? 1 : et) * O, (st ? 1 : et) * O) : (ft = ot < T - 4 && ot >= T - 4 - 5 && nt < T - 4 && nt >= T - 4 - 5, st || ft || F.fillRect(ct, lt, (st ? 1 : et) * O, (st ? 1 : et) * O));
                    }
                    if (ht = tt[tt.length - 1], pt = this.options.colorLight, F.fillStyle = pt, F.fillRect(0, 0, 8 * O, 8 * O), F.fillRect(0, (T - 8) * O, 8 * O, 8 * O), F.fillRect((T - 8) * O, 0, 8 * O, 8 * O), (null === (a = null === (i = this.options.components) || void 0 === i ? void 0 : i.timing) || void 0 === a ? void 0 : a.protectors) && (F.fillRect(8 * O, 6 * O, (T - 8 - 8) * O, O), F.fillRect(6 * O, 8 * O, O, (T - 8 - 8) * O)), (null === (u = null === (s = this.options.components) || void 0 === s ? void 0 : s.cornerAlignment) || void 0 === u ? void 0 : u.protectors) && e._drawAlignProtector(F, ht, ht, O), !(null === (v = null === (c = this.options.components) || void 0 === c ? void 0 : c.alignment) || void 0 === v ? void 0 : v.protectors)) {
                      l.next = 99;
                      break;
                    }
                    dt = 0;
                  case 75:
                    if (!(dt < tt.length)) {
                      l.next = 99;
                      break;
                    }
                    gt = 0;
                  case 77:
                    if (!(gt < tt.length)) {
                      l.next = 96;
                      break;
                    }
                    if (yt = tt[gt], vt = tt[dt], 6 !== yt || 6 !== vt && vt !== ht) {
                      l.next = 84;
                      break;
                    }
                    return l.abrupt("continue", 93);
                  case 84:
                    if (6 !== vt || 6 !== yt && yt !== ht) {
                      l.next = 88;
                      break;
                    }
                    return l.abrupt("continue", 93);
                  case 88:
                    if (yt !== ht || vt !== ht) {
                      l.next = 92;
                      break;
                    }
                    return l.abrupt("continue", 93);
                  case 92:
                    e._drawAlignProtector(F, yt, vt, O);
                  case 93:
                    gt++, l.next = 77;
                    break;
                  case 96:
                    dt++, l.next = 75;
                    break;
                  case 99:
                    for (F.fillStyle = this.options.colorDark, F.fillRect(0, 0, 7 * O, O), F.fillRect((T - 7) * O, 0, 7 * O, O), F.fillRect(0, 6 * O, 7 * O, O), F.fillRect((T - 7) * O, 6 * O, 7 * O, O), F.fillRect(0, (T - 7) * O, 7 * O, O), F.fillRect(0, (T - 7 + 6) * O, 7 * O, O), F.fillRect(0, 0, O, 7 * O), F.fillRect(6 * O, 0, O, 7 * O), F.fillRect((T - 7) * O, 0, O, 7 * O), F.fillRect((T - 7 + 6) * O, 0, O, 7 * O), F.fillRect(0, (T - 7) * O, O, 7 * O), F.fillRect(6 * O, (T - 7) * O, O, 7 * O), F.fillRect(2 * O, 2 * O, 3 * O, 3 * O), F.fillRect((T - 7 + 2) * O, 2 * O, 3 * O, 3 * O), F.fillRect(2 * O, (T - 7 + 2) * O, 3 * O, 3 * O), mt = (null === (b = null === (w = this.options.components) || void 0 === w ? void 0 : w.timing) || void 0 === b ? void 0 : b.scale) || .4, wt = .5 * (1 - mt), bt = 0; bt < T - 8; bt += 2) e._drawDot(F, 8 + bt, 6, O, wt, mt), e._drawDot(F, 6, 8 + bt, O, wt, mt);
                    xt = (null === (E = null === (x = this.options.components) || void 0 === x ? void 0 : x.cornerAlignment) || void 0 === E ? void 0 : E.scale) || .4, Et = .5 * (1 - xt), e._drawAlign(F, ht, ht, O, Et, xt, this.options.colorDark, (null === (B = null === (A = this.options.components) || void 0 === A ? void 0 : A.cornerAlignment) || void 0 === B ? void 0 : B.protectors) || !1), At = (null === (_ = null === (k = this.options.components) || void 0 === k ? void 0 : k.alignment) || void 0 === _ ? void 0 : _.scale) || .4, Bt = .5 * (1 - At), kt = 0;
                  case 124:
                    if (!(kt < tt.length)) {
                      l.next = 148;
                      break;
                    }
                    _t = 0;
                  case 126:
                    if (!(_t < tt.length)) {
                      l.next = 145;
                      break;
                    }
                    if (Pt = tt[_t], Ct = tt[kt], 6 !== Pt || 6 !== Ct && Ct !== ht) {
                      l.next = 133;
                      break;
                    }
                    return l.abrupt("continue", 142);
                  case 133:
                    if (6 !== Ct || 6 !== Pt && Pt !== ht) {
                      l.next = 137;
                      break;
                    }
                    return l.abrupt("continue", 142);
                  case 137:
                    if (Pt !== ht || Ct !== ht) {
                      l.next = 141;
                      break;
                    }
                    return l.abrupt("continue", 142);
                  case 141:
                    e._drawAlign(F, Pt, Ct, O, Bt, At, this.options.colorDark, (null === (C = null === (P = this.options.components) || void 0 === P ? void 0 : P.alignment) || void 0 === C ? void 0 : C.protectors) || !1);
                  case 142:
                    _t++, l.next = 126;
                    break;
                  case 145:
                    kt++, l.next = 124;
                    break;
                  case 148:
                    if (I && (F.fillStyle = this.options.backgroundColor, F.fillRect(-L, -L, N, L), F.fillRect(-L, U, N, L), F.fillRect(U, -L, L, N), F.fillRect(-L, -L, L, N)), !this.options.logoImage) {
                      l.next = 179;
                      break;
                    }
                    return l.next = 152, y(this.options.logoImage);
                  case 152:
                    Tt = l.sent, Rt = this.options.logoScale, St = this.options.logoMargin, Lt = this.options.logoCornerRadius, (Rt <= 0 || Rt >= 1) && (Rt = .2), St < 0 && (St = 0), Lt < 0 && (Lt = 0), Mt = It = .5 * (N - (Dt = U * Rt)), F.restore(), F.fillStyle = this.options.logoBackgroundColor, F.save(), e._prepareRoundedCornerClip(F, It - St, Mt - St, Dt + 2 * St, Dt + 2 * St, Lt + St), F.clip(), Ot = F.globalCompositeOperation, F.globalCompositeOperation = "destination-out", F.fill(), F.globalCompositeOperation = Ot, F.restore(), F.save(), e._prepareRoundedCornerClip(F, It, Mt, Dt, Dt, Lt), F.clip(), F.drawImage(Tt, It, Mt, Dt, Dt), F.restore(), F.save(), F.translate(L, L);
                  case 179:
                    if (!G) {
                      l.next = 191;
                      break;
                    }
                    if (H.forEach((function(t) {
                      Ut || ((Ut = new d.a(R, R)).setDelay(t.delay), Ut.setRepeat(0));
                      var e = t.dims, r = e.width, n = e.height;
                      Nt || (Nt = Object(f.createCanvas)(r, n), (jt = Nt.getContext("2d")).rect(0, 0, Nt.width, Nt.height), jt.fillStyle = "#ffffff", jt.fill()), Ft && zt && r === Ft.width && n === Ft.height || (Ft = Object(f.createCanvas)(r, n), Yt = Ft.getContext("2d"), zt = Yt.createImageData(r, n)), zt.data.set(t.patch), Yt.putImageData(zt, 0, 0), jt.drawImage(Ft, t.dims.left, t.dims.top);
                      var o = Object(f.createCanvas)(N, N), i = o.getContext("2d");
                      i.drawImage(Nt, 0, 0, N, N), i.rect(0, 0, N, N), i.fillStyle = M, i.fill(), i.drawImage(j, 0, 0, N, N);
                      var a = Object(f.createCanvas)(R, R), s = a.getContext("2d");
                      s.drawImage(o, 0, 0, R, R), Ut.addFrame(s.getImageData(0, 0, a.width, a.height).data);
                    })), Ut) {
                      l.next = 183;
                      break;
                    }
                    throw new Error("No frames.");
                  case 183:
                    if (Ut.finish(), !m(this.canvas)) {
                      l.next = 188;
                      break;
                    }
                    return Gt = Ut.stream().toFlattenUint8Array(), Ht = Gt.reduce((function(t, e) {
                      return t + String.fromCharCode(e);
                    }), ""), l.abrupt("return", Promise.resolve("data:image/gif;base64,".concat(window.btoa(Ht))));
                  case 188:
                    return l.abrupt("return", Promise.resolve(t.from(Ut.stream().toFlattenUint8Array())));
                  case 191:
                    if (z.drawImage(j, 0, 0, N, N), F.drawImage(Y, -L, -L, N, N), qt = Object(f.createCanvas)(R, R), qt.getContext("2d").drawImage(j, 0, 0, R, R), this.canvas = qt, !m(this.canvas)) {
                      l.next = 199;
                      break;
                    }
                    return l.abrupt("return", Promise.resolve(this.canvas.toDataURL()));
                  case 199:
                    return l.abrupt("return", Promise.resolve(this.canvas.toBuffer()));
                  case 200:
                  case"end":
                    return l.stop();
                }
              }), g, this);
            })));
          }
        }], [{
          key: "_prepareRoundedCornerClip", value: function(t, e, r, n, o, i) {
            t.beginPath(), t.moveTo(e, r), t.arcTo(e + n, r, e + n, r + o, i), t.arcTo(e + n, r + o, e, r + o, i), t.arcTo(e, r + o, e, r, i), t.arcTo(e, r, e + n, r, i), t.closePath();
          }
        }, {
          key: "_getAverageRGB", value: function(t) {
            var e, r, n = { r: 0, g: 0, b: 0 }, o = -4, i = { r: 0, g: 0, b: 0 }, a = 0;
            r = t.naturalHeight || t.height, e = t.naturalWidth || t.width;
            var s, u = Object(f.createCanvas)(e, r).getContext("2d");
            if (!u) return n;
            u.drawImage(t, 0, 0);
            try {
              s = u.getImageData(0, 0, e, r);
            } catch (t) {
              return n;
            }
            for (; (o += 20) < s.data.length;) s.data[o] > 200 || s.data[o + 1] > 200 || s.data[o + 2] > 200 || (++a, i.r += s.data[o], i.g += s.data[o + 1], i.b += s.data[o + 2]);
            return i.r = ~~(i.r / a), i.g = ~~(i.g / a), i.b = ~~(i.b / a), i;
          }
        }, {
          key: "_drawDot", value: function(t, e, r, n) {
            var o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
              i = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1;
            t.fillRect((e + o) * n, (r + o) * n, i * n, i * n);
          }
        }, {
          key: "_drawAlignProtector", value: function(t, e, r, n) {
            t.clearRect((e - 2) * n, (r - 2) * n, 5 * n, 5 * n), t.fillRect((e - 2) * n, (r - 2) * n, 5 * n, 5 * n);
          }
        }, {
          key: "_drawAlign", value: function(t, r, n, o) {
            var i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
              a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
              s = arguments.length > 6 ? arguments[6] : void 0, u = arguments.length > 7 ? arguments[7] : void 0,
              c = t.fillStyle;
            t.fillStyle = s, new Array(4).fill(0).map((function(s, u) {
              e._drawDot(t, r - 2 + u, n - 2, o, i, a), e._drawDot(t, r + 2, n - 2 + u, o, i, a), e._drawDot(t, r + 2 - u, n + 2, o, i, a), e._drawDot(t, r - 2, n + 2 - u, o, i, a);
            })), e._drawDot(t, r, n, o, i, a), u || (t.fillStyle = "rgba(255, 255, 255, 0.6)", new Array(2).fill(0).map((function(s, u) {
              e._drawDot(t, r - 1 + u, n - 1, o, i, a), e._drawDot(t, r + 1, n - 1 + u, o, i, a), e._drawDot(t, r + 1 - u, n + 1, o, i, a), e._drawDot(t, r - 1, n + 1 - u, o, i, a);
            }))), t.fillStyle = c;
          }
        }]), e;
      }();

      function m(t) {
        try {
          return t instanceof HTMLElement;
        } catch (e) {
          return "object" === o()(t) && 1 === t.nodeType && "object" === o()(t.style) && "object" === o()(t.ownerDocument);
        }
      }

      v.CorrectLevel = p.b, v.defaultComponentOptions = {
        data: { scale: .4 },
        timing: { scale: .5, protectors: !1 },
        alignment: { scale: .5, protectors: !1 },
        cornerAlignment: { scale: .5, protectors: !0 }
      }, v.defaultOptions = {
        text: "",
        size: 400,
        margin: 20,
        colorDark: "#000000",
        colorLight: "rgba(255, 255, 255, 0.6)",
        correctLevel: p.b.M,
        backgroundImage: void 0,
        backgroundDimming: "rgba(0,0,0,0)",
        logoImage: void 0,
        logoScale: .2,
        logoMargin: 4,
        logoCornerRadius: 8,
        whiteMargin: !0,
        components: v.defaultComponentOptions,
        autoColor: !0,
        logoBackgroundColor: "#ffffff",
        backgroundColor: "#ffffff"
      };
    }).call(this, r(15).Buffer);
  }, function(t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), e.default = void 0;
    var n = r(6), o = r(7), i = {
      blocks: function(t) {
        for (var e = [], r = t.data.length, n = 0, i = (0, o.readByte)()(t); 0 !== i; i = (0, o.readByte)()(t)) {
          if (t.pos + i >= r) {
            var a = r - t.pos;
            e.push((0, o.readBytes)(a)(t)), n += a;
            break;
          }
          e.push((0, o.readBytes)(i)(t)), n += i;
        }
        for (var s = new Uint8Array(n), u = 0, c = 0; c < e.length; c++) s.set(e[c], u), u += e[c].length;
        return s;
      }
    }, a = (0, n.conditional)({
      gce: [{ codes: (0, o.readBytes)(2) }, { byteSize: (0, o.readByte)() }, {
        extras: (0, o.readBits)({
          future: {
            index: 0,
            length: 3
          }, disposal: { index: 3, length: 3 }, userInput: { index: 6 }, transparentColorGiven: { index: 7 }
        })
      }, { delay: (0, o.readUnsigned)(!0) }, { transparentColorIndex: (0, o.readByte)() }, { terminator: (0, o.readByte)() }]
    }, (function(t) {
      var e = (0, o.peekBytes)(2)(t);
      return 33 === e[0] && 249 === e[1];
    })), s = (0, n.conditional)({
      image: [{ code: (0, o.readByte)() }, {
        descriptor: [{ left: (0, o.readUnsigned)(!0) }, { top: (0, o.readUnsigned)(!0) }, { width: (0, o.readUnsigned)(!0) }, { height: (0, o.readUnsigned)(!0) }, {
          lct: (0, o.readBits)({
            exists: { index: 0 },
            interlaced: { index: 1 },
            sort: { index: 2 },
            future: { index: 3, length: 2 },
            size: { index: 5, length: 3 }
          })
        }]
      }, (0, n.conditional)({
        lct: (0, o.readArray)(3, (function(t, e, r) {
          return Math.pow(2, r.descriptor.lct.size + 1);
        }))
      }, (function(t, e, r) {
        return r.descriptor.lct.exists;
      })), { data: [{ minCodeSize: (0, o.readByte)() }, i] }]
    }, (function(t) {
      return 44 === (0, o.peekByte)()(t);
    })), u = (0, n.conditional)({
      text: [{ codes: (0, o.readBytes)(2) }, { blockSize: (0, o.readByte)() }, {
        preData: function(t, e, r) {
          return (0, o.readBytes)(r.text.blockSize)(t);
        }
      }, i]
    }, (function(t) {
      var e = (0, o.peekBytes)(2)(t);
      return 33 === e[0] && 1 === e[1];
    })), c = (0, n.conditional)({
      application: [{ codes: (0, o.readBytes)(2) }, { blockSize: (0, o.readByte)() }, {
        id: function(t, e, r) {
          return (0, o.readString)(r.blockSize)(t);
        }
      }, i]
    }, (function(t) {
      var e = (0, o.peekBytes)(2)(t);
      return 33 === e[0] && 255 === e[1];
    })), l = (0, n.conditional)({ comment: [{ codes: (0, o.readBytes)(2) }, i] }, (function(t) {
      var e = (0, o.peekBytes)(2)(t);
      return 33 === e[0] && 254 === e[1];
    })), f = [{ header: [{ signature: (0, o.readString)(3) }, { version: (0, o.readString)(3) }] }, {
      lsd: [{ width: (0, o.readUnsigned)(!0) }, { height: (0, o.readUnsigned)(!0) }, {
        gct: (0, o.readBits)({
          exists: { index: 0 },
          resolution: { index: 1, length: 3 },
          sort: { index: 4 },
          size: { index: 5, length: 3 }
        })
      }, { backgroundColorIndex: (0, o.readByte)() }, { pixelAspectRatio: (0, o.readByte)() }]
    }, (0, n.conditional)({
      gct: (0, o.readArray)(3, (function(t, e) {
        return Math.pow(2, e.lsd.gct.size + 1);
      }))
    }, (function(t, e) {
      return e.lsd.gct.exists;
    })), {
      frames: (0, n.loop)([a, c, l, s, u], (function(t) {
        var e = (0, o.peekByte)()(t);
        return 33 === e || 44 === e;
      }))
    }];
    e.default = f;
  }, function(t, e, r) {
    "use strict";
    var n = function(t, e) {
      var r, n, o, i, a;

      function s(t, e, n, o, i) {
        r[e][0] -= t * (r[e][0] - n) / 1024, r[e][1] -= t * (r[e][1] - o) / 1024, r[e][2] -= t * (r[e][2] - i) / 1024;
      }

      function u(t, e, n, o, i) {
        for (var s, u, c = Math.abs(e - t), l = Math.min(e + t, 256), f = e + 1, h = e - 1, p = 1; f < l || h > c;) u = a[p++], f < l && ((s = r[f++])[0] -= u * (s[0] - n) / (1 << 18), s[1] -= u * (s[1] - o) / (1 << 18), s[2] -= u * (s[2] - i) / (1 << 18)), h > c && ((s = r[h--])[0] -= u * (s[0] - n) / (1 << 18), s[1] -= u * (s[1] - o) / (1 << 18), s[2] -= u * (s[2] - i) / (1 << 18));
      }

      function c(t, e, n) {
        var a, s, u, c, l, f = ~(1 << 31), h = f, p = -1, d = p;
        for (a = 0; a < 256; a++) s = r[a], (u = Math.abs(s[0] - t) + Math.abs(s[1] - e) + Math.abs(s[2] - n)) < f && (f = u, p = a), (c = u - (o[a] >> 12)) < h && (h = c, d = a), l = i[a] >> 10, i[a] -= l, o[a] += l << 10;
        return i[p] += 64, o[p] -= 65536, d;
      }

      this.buildColormap = function() {
        !function() {
          var t, e;
          for (r = [], n = new Int32Array(256), o = new Int32Array(256), i = new Int32Array(256), a = new Int32Array(32), t = 0; t < 256; t++) e = (t << 12) / 256, r[t] = new Float64Array([e, e, e, 0]), i[t] = 256, o[t] = 0;
        }(), function() {
          var r, n, o, i, l, f, h = t.length, p = 30 + (e - 1) / 3, d = h / (3 * e), g = ~~(d / 100), y = 1024,
            v = 2048, m = v >> 6;
          for (m <= 1 && (m = 0), r = 0; r < m; r++) a[r] = y * (256 * (m * m - r * r) / (m * m));
          h < 1509 ? (e = 1, n = 3) : n = h % 499 != 0 ? 1497 : h % 491 != 0 ? 1473 : h % 487 != 0 ? 1461 : 1509;
          var w = 0;
          for (r = 0; r < d;) if (s(y, f = c(o = (255 & t[w]) << 4, i = (255 & t[w + 1]) << 4, l = (255 & t[w + 2]) << 4), o, i, l), 0 !== m && u(m, f, o, i, l), (w += n) >= h && (w -= h), 0 === g && (g = 1), ++r % g == 0) for (y -= y / p, (m = (v -= v / 30) >> 6) <= 1 && (m = 0), f = 0; f < m; f++) a[f] = y * (256 * (m * m - f * f) / (m * m));
        }(), function() {
          for (var t = 0; t < 256; t++) r[t][0] >>= 4, r[t][1] >>= 4, r[t][2] >>= 4, r[t][3] = t;
        }(), function() {
          var t, e, o, i, a, s, u = 0, c = 0;
          for (t = 0; t < 256; t++) {
            for (a = t, s = (o = r[t])[1], e = t + 1; e < 256; e++) (i = r[e])[1] < s && (a = e, s = i[1]);
            if (i = r[a], t != a && (e = i[0], i[0] = o[0], o[0] = e, e = i[1], i[1] = o[1], o[1] = e, e = i[2], i[2] = o[2], o[2] = e, e = i[3], i[3] = o[3], o[3] = e), s != u) {
              for (n[u] = c + t >> 1, e = u + 1; e < s; e++) n[e] = t;
              u = s, c = t;
            }
          }
          for (n[u] = c + 255 >> 1, e = u + 1; e < 256; e++) n[e] = 255;
        }();
      }, this.getColormap = function() {
        for (var t = [], e = [], n = 0; n < 256; n++) e[r[n][3]] = n;
        for (var o = 0, i = 0; i < 256; i++) {
          var a = e[i];
          t[o++] = r[a][0], t[o++] = r[a][1], t[o++] = r[a][2];
        }
        return t;
      }, this.lookupRGB = function(t, e, o) {
        for (var i, a, s, u = 1e3, c = -1, l = n[e], f = l - 1; l < 256 || f >= 0;) l < 256 && ((s = (a = r[l])[1] - e) >= u ? l = 256 : (l++, s < 0 && (s = -s), (i = a[0] - t) < 0 && (i = -i), (s += i) < u && ((i = a[2] - o) < 0 && (i = -i), (s += i) < u && (u = s, c = a[3])))), f >= 0 && ((s = e - (a = r[f])[1]) >= u ? f = -1 : (f--, s < 0 && (s = -s), (i = a[0] - t) < 0 && (i = -i), (s += i) < u && ((i = a[2] - o) < 0 && (i = -i), (s += i) < u && (u = s, c = a[3]))));
        return c;
      };
    }, o = [0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535];
    var i = function(t, e, r, n) {
      var i, a, s, u, c, l, f, h, p, d = Math.max(2, n), g = new Uint8Array(256), y = new Int32Array(5003),
        v = new Int32Array(5003), m = 0, w = 0, b = !1;

      function x(t, e) {
        g[a++] = t, a >= 254 && B(e);
      }

      function E(t) {
        A(5003), w = c + 2, b = !0, P(c, t);
      }

      function A(t) {
        for (var e = 0; e < t; ++e) y[e] = -1;
      }

      function B(t) {
        a > 0 && (t.writeByte(a), t.writeBytes(g, 0, a), a = 0);
      }

      function k(t) {
        return (1 << t) - 1;
      }

      function _() {
        return 0 === f ? -1 : (--f, 255 & r[h++]);
      }

      function P(t, e) {
        for (i &= o[m], m > 0 ? i |= t << m : i = t, m += p; m >= 8;) x(255 & i, e), i >>= 8, m -= 8;
        if ((w > s || b) && (b ? (s = k(p = u), b = !1) : (++p, s = 12 == p ? 4096 : k(p))), t == l) {
          for (; m > 0;) x(255 & i, e), i >>= 8, m -= 8;
          B(e);
        }
      }

      this.encode = function(r) {
        r.writeByte(d), f = t * e, h = 0, function(t, e) {
          var r, n, o, i, f, h;
          for (b = !1, s = k(p = u = t), l = (c = 1 << t - 1) + 1, w = c + 2, a = 0, i = _(), h = 0, r = 5003; r < 65536; r *= 2) ++h;
          h = 8 - h, A(5003), P(c, e);
          t:for (; -1 != (n = _());) if (r = (n << 12) + i, y[o = n << h ^ i] !== r) {
            if (y[o] >= 0) {
              f = 5003 - o, 0 === o && (f = 1);
              do {
                if ((o -= f) < 0 && (o += 5003), y[o] === r) {
                  i = v[o];
                  continue t;
                }
              } while (y[o] >= 0);
            }
            P(i, e), i = n, w < 4096 ? (v[o] = w++, y[o] = r) : E(e);
          } else i = v[o];
          P(i, e), P(l, e);
        }(d + 1, r), r.writeByte(0);
      };
    };

    function a() {
      this.page = -1, this.pages = [], this.newPage();
    }

    a.pageSize = 4096, a.charMap = {};
    for (var s = 0; s < 256; s++) a.charMap[s] = String.fromCharCode(s);

    function u(t, e) {
      this.width = ~~t, this.height = ~~e, this.transparent = null, this.transIndex = 0, this.repeat = -1, this.delay = 0, this.image = null, this.pixels = null, this.indexedPixels = null, this.colorDepth = null, this.colorTab = null, this.neuQuant = null, this.usedEntry = new Array, this.palSize = 7, this.dispose = -1, this.firstFrame = !0, this.sample = 10, this.dither = !1, this.globalPalette = !1, this.out = new a;
    }

    a.prototype.newPage = function() {
      this.pages[++this.page] = new Uint8Array(a.pageSize), this.cursor = 0;
    }, a.prototype.getData = function() {
      for (var t = "", e = 0; e < this.pages.length; e++) for (var r = 0; r < a.pageSize; r++) t += a.charMap[this.pages[e][r]];
      return t;
    }, a.prototype.toFlattenUint8Array = function() {
      for (var t = [], e = 0; e < this.pages.length; e++) if (e === this.pages.length - 1) {
        var r = Uint8Array.from(this.pages[e].slice(0, this.cursor));
        t.push(r);
      } else t.push(this.pages[e]);
      var n = new Uint8Array(t.reduce((function(t, e) {
        return t + e.length;
      }), 0));
      return t.reduce((function(t, e) {
        return n.set(e, t), t + e.length;
      }), 0), n;
    }, a.prototype.writeByte = function(t) {
      this.cursor >= a.pageSize && this.newPage(), this.pages[this.page][this.cursor++] = t;
    }, a.prototype.writeUTFBytes = function(t) {
      for (var e = t.length, r = 0; r < e; r++) this.writeByte(t.charCodeAt(r));
    }, a.prototype.writeBytes = function(t, e, r) {
      for (var n = r || t.length, o = e || 0; o < n; o++) this.writeByte(t[o]);
    }, u.prototype.setDelay = function(t) {
      this.delay = Math.round(t / 10);
    }, u.prototype.setFrameRate = function(t) {
      this.delay = Math.round(100 / t);
    }, u.prototype.setDispose = function(t) {
      t >= 0 && (this.dispose = t);
    }, u.prototype.setRepeat = function(t) {
      this.repeat = t;
    }, u.prototype.setTransparent = function(t) {
      this.transparent = t;
    }, u.prototype.addFrame = function(t) {
      this.image = t, this.colorTab = this.globalPalette && this.globalPalette.slice ? this.globalPalette : null, this.getImagePixels(), this.analyzePixels(), !0 === this.globalPalette && (this.globalPalette = this.colorTab), this.firstFrame && (this.writeHeader(), this.writeLSD(), this.writePalette(), this.repeat >= 0 && this.writeNetscapeExt()), this.writeGraphicCtrlExt(), this.writeImageDesc(), this.firstFrame || this.globalPalette || this.writePalette(), this.writePixels(), this.firstFrame = !1;
    }, u.prototype.finish = function() {
      this.out.writeByte(59);
    }, u.prototype.setQuality = function(t) {
      t < 1 && (t = 1), this.sample = t;
    }, u.prototype.setDither = function(t) {
      !0 === t && (t = "FloydSteinberg"), this.dither = t;
    }, u.prototype.setGlobalPalette = function(t) {
      this.globalPalette = t;
    }, u.prototype.getGlobalPalette = function() {
      return this.globalPalette && this.globalPalette.slice && this.globalPalette.slice(0) || this.globalPalette;
    }, u.prototype.writeHeader = function() {
      this.out.writeUTFBytes("GIF89a");
    }, u.prototype.analyzePixels = function() {
      this.colorTab || (this.neuQuant = new n(this.pixels, this.sample), this.neuQuant.buildColormap(), this.colorTab = this.neuQuant.getColormap()), this.dither ? this.ditherPixels(this.dither.replace("-serpentine", ""), null !== this.dither.match(/-serpentine/)) : this.indexPixels(), this.pixels = null, this.colorDepth = 8, this.palSize = 7, null !== this.transparent && (this.transIndex = this.findClosest(this.transparent, !0));
    }, u.prototype.indexPixels = function(t) {
      var e = this.pixels.length / 3;
      this.indexedPixels = new Uint8Array(e);
      for (var r = 0, n = 0; n < e; n++) {
        var o = this.findClosestRGB(255 & this.pixels[r++], 255 & this.pixels[r++], 255 & this.pixels[r++]);
        this.usedEntry[o] = !0, this.indexedPixels[n] = o;
      }
    }, u.prototype.ditherPixels = function(t, e) {
      var r = {
        FalseFloydSteinberg: [[3 / 8, 1, 0], [3 / 8, 0, 1], [2 / 8, 1, 1]],
        FloydSteinberg: [[7 / 16, 1, 0], [3 / 16, -1, 1], [5 / 16, 0, 1], [1 / 16, 1, 1]],
        Stucki: [[8 / 42, 1, 0], [4 / 42, 2, 0], [2 / 42, -2, 1], [4 / 42, -1, 1], [8 / 42, 0, 1], [4 / 42, 1, 1], [2 / 42, 2, 1], [1 / 42, -2, 2], [2 / 42, -1, 2], [4 / 42, 0, 2], [2 / 42, 1, 2], [1 / 42, 2, 2]],
        Atkinson: [[1 / 8, 1, 0], [1 / 8, 2, 0], [1 / 8, -1, 1], [1 / 8, 0, 1], [1 / 8, 1, 1], [1 / 8, 0, 2]]
      };
      if (!t || !r[t]) throw"Unknown dithering kernel: " + t;
      var n = r[t], o = 0, i = this.height, a = this.width, s = this.pixels, u = e ? -1 : 1;
      this.indexedPixels = new Uint8Array(this.pixels.length / 3);
      for (var c = 0; c < i; c++) {
        e && (u *= -1);
        for (var l = 1 == u ? 0 : a - 1, f = 1 == u ? a : 0; l !== f; l += u) {
          var h = 3 * (o = c * a + l), p = s[h], d = s[h + 1], g = s[h + 2];
          h = this.findClosestRGB(p, d, g), this.usedEntry[h] = !0, this.indexedPixels[o] = h, h *= 3;
          for (var y = p - this.colorTab[h], v = d - this.colorTab[h + 1], m = g - this.colorTab[h + 2], w = 1 == u ? 0 : n.length - 1, b = 1 == u ? n.length : 0; w !== b; w += u) {
            var x = n[w][1], E = n[w][2];
            if (x + l >= 0 && x + l < a && E + c >= 0 && E + c < i) {
              var A = n[w][0];
              h = o + x + E * a, s[h *= 3] = Math.max(0, Math.min(255, s[h] + y * A)), s[h + 1] = Math.max(0, Math.min(255, s[h + 1] + v * A)), s[h + 2] = Math.max(0, Math.min(255, s[h + 2] + m * A));
            }
          }
        }
      }
    }, u.prototype.findClosest = function(t, e) {
      return this.findClosestRGB((16711680 & t) >> 16, (65280 & t) >> 8, 255 & t, e);
    }, u.prototype.findClosestRGB = function(t, e, r, n) {
      if (null === this.colorTab) return -1;
      if (this.neuQuant && !n) return this.neuQuant.lookupRGB(t, e, r);
      for (var o = 0, i = 16777216, a = this.colorTab.length, s = 0, u = 0; s < a; u++) {
        var c = t - (255 & this.colorTab[s++]), l = e - (255 & this.colorTab[s++]), f = r - (255 & this.colorTab[s++]),
          h = c * c + l * l + f * f;
        (!n || this.usedEntry[u]) && h < i && (i = h, o = u);
      }
      return o;
    }, u.prototype.getImagePixels = function() {
      var t = this.width, e = this.height;
      this.pixels = new Uint8Array(t * e * 3);
      for (var r = this.image, n = 0, o = 0, i = 0; i < e; i++) for (var a = 0; a < t; a++) this.pixels[o++] = r[n++], this.pixels[o++] = r[n++], this.pixels[o++] = r[n++], n++;
    }, u.prototype.writeGraphicCtrlExt = function() {
      var t, e;
      this.out.writeByte(33), this.out.writeByte(249), this.out.writeByte(4), null === this.transparent ? (t = 0, e = 0) : (t = 1, e = 2), this.dispose >= 0 && (e = 7 & this.dispose), e <<= 2, this.out.writeByte(0 | e | t), this.writeShort(this.delay), this.out.writeByte(this.transIndex), this.out.writeByte(0);
    }, u.prototype.writeImageDesc = function() {
      this.out.writeByte(44), this.writeShort(0), this.writeShort(0), this.writeShort(this.width), this.writeShort(this.height), this.firstFrame || this.globalPalette ? this.out.writeByte(0) : this.out.writeByte(128 | this.palSize);
    }, u.prototype.writeLSD = function() {
      this.writeShort(this.width), this.writeShort(this.height), this.out.writeByte(240 | this.palSize), this.out.writeByte(0), this.out.writeByte(0);
    }, u.prototype.writeNetscapeExt = function() {
      this.out.writeByte(33), this.out.writeByte(255), this.out.writeByte(11), this.out.writeUTFBytes("NETSCAPE2.0"), this.out.writeByte(3), this.out.writeByte(1), this.writeShort(this.repeat), this.out.writeByte(0);
    }, u.prototype.writePalette = function() {
      this.out.writeBytes(this.colorTab);
      for (var t = 768 - this.colorTab.length, e = 0; e < t; e++) this.out.writeByte(0);
    }, u.prototype.writeShort = function(t) {
      this.out.writeByte(255 & t), this.out.writeByte(t >> 8 & 255);
    }, u.prototype.writePixels = function() {
      new i(this.width, this.height, this.indexedPixels, this.colorDepth).encode(this.out);
    }, u.prototype.stream = function() {
      return this.out;
    };
    e.a = u;
  }, function(t, e, r) {
    t.exports = r(21);
  }, function(t, e, r) {
    var n = function(t) {
      "use strict";
      var e = Object.prototype, r = e.hasOwnProperty, n = "function" == typeof Symbol ? Symbol : {},
        o = n.iterator || "@@iterator", i = n.asyncIterator || "@@asyncIterator", a = n.toStringTag || "@@toStringTag";

      function s(t, e, r) {
        return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e];
      }

      try {
        s({}, "");
      } catch (t) {
        s = function(t, e, r) {
          return t[e] = r;
        };
      }

      function u(t, e, r, n) {
        var o = e && e.prototype instanceof f ? e : f, i = Object.create(o.prototype), a = new A(n || []);
        return i._invoke = function(t, e, r) {
          var n = "suspendedStart";
          return function(o, i) {
            if ("executing" === n) throw new Error("Generator is already running");
            if ("completed" === n) {
              if ("throw" === o) throw i;
              return k();
            }
            for (r.method = o, r.arg = i; ;) {
              var a = r.delegate;
              if (a) {
                var s = b(a, r);
                if (s) {
                  if (s === l) continue;
                  return s;
                }
              }
              if ("next" === r.method) r.sent = r._sent = r.arg; else if ("throw" === r.method) {
                if ("suspendedStart" === n) throw n = "completed", r.arg;
                r.dispatchException(r.arg);
              } else "return" === r.method && r.abrupt("return", r.arg);
              n = "executing";
              var u = c(t, e, r);
              if ("normal" === u.type) {
                if (n = r.done ? "completed" : "suspendedYield", u.arg === l) continue;
                return { value: u.arg, done: r.done };
              }
              "throw" === u.type && (n = "completed", r.method = "throw", r.arg = u.arg);
            }
          };
        }(t, r, a), i;
      }

      function c(t, e, r) {
        try {
          return { type: "normal", arg: t.call(e, r) };
        } catch (t) {
          return { type: "throw", arg: t };
        }
      }

      t.wrap = u;
      var l = {};

      function f() {
      }

      function h() {
      }

      function p() {
      }

      var d = {};
      s(d, o, (function() {
        return this;
      }));
      var g = Object.getPrototypeOf, y = g && g(g(B([])));
      y && y !== e && r.call(y, o) && (d = y);
      var v = p.prototype = f.prototype = Object.create(d);

      function m(t) {
        ["next", "throw", "return"].forEach((function(e) {
          s(t, e, (function(t) {
            return this._invoke(e, t);
          }));
        }));
      }

      function w(t, e) {
        var n;
        this._invoke = function(o, i) {
          function a() {
            return new e((function(n, a) {
              !function n(o, i, a, s) {
                var u = c(t[o], t, i);
                if ("throw" !== u.type) {
                  var l = u.arg, f = l.value;
                  return f && "object" == typeof f && r.call(f, "__await") ? e.resolve(f.__await).then((function(t) {
                    n("next", t, a, s);
                  }), (function(t) {
                    n("throw", t, a, s);
                  })) : e.resolve(f).then((function(t) {
                    l.value = t, a(l);
                  }), (function(t) {
                    return n("throw", t, a, s);
                  }));
                }
                s(u.arg);
              }(o, i, n, a);
            }));
          }

          return n = n ? n.then(a, a) : a();
        };
      }

      function b(t, e) {
        var r = t.iterator[e.method];
        if (void 0 === r) {
          if (e.delegate = null, "throw" === e.method) {
            if (t.iterator.return && (e.method = "return", e.arg = void 0, b(t, e), "throw" === e.method)) return l;
            e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method");
          }
          return l;
        }
        var n = c(r, t.iterator, e.arg);
        if ("throw" === n.type) return e.method = "throw", e.arg = n.arg, e.delegate = null, l;
        var o = n.arg;
        return o ? o.done ? (e[t.resultName] = o.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, l) : o : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, l);
      }

      function x(t) {
        var e = { tryLoc: t[0] };
        1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
      }

      function E(t) {
        var e = t.completion || {};
        e.type = "normal", delete e.arg, t.completion = e;
      }

      function A(t) {
        this.tryEntries = [{ tryLoc: "root" }], t.forEach(x, this), this.reset(!0);
      }

      function B(t) {
        if (t) {
          var e = t[o];
          if (e) return e.call(t);
          if ("function" == typeof t.next) return t;
          if (!isNaN(t.length)) {
            var n = -1, i = function e() {
              for (; ++n < t.length;) if (r.call(t, n)) return e.value = t[n], e.done = !1, e;
              return e.value = void 0, e.done = !0, e;
            };
            return i.next = i;
          }
        }
        return { next: k };
      }

      function k() {
        return { value: void 0, done: !0 };
      }

      return h.prototype = p, s(v, "constructor", p), s(p, "constructor", h), h.displayName = s(p, a, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
        var e = "function" == typeof t && t.constructor;
        return !!e && (e === h || "GeneratorFunction" === (e.displayName || e.name));
      }, t.mark = function(t) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(t, p) : (t.__proto__ = p, s(t, a, "GeneratorFunction")), t.prototype = Object.create(v), t;
      }, t.awrap = function(t) {
        return { __await: t };
      }, m(w.prototype), s(w.prototype, i, (function() {
        return this;
      })), t.AsyncIterator = w, t.async = function(e, r, n, o, i) {
        void 0 === i && (i = Promise);
        var a = new w(u(e, r, n, o), i);
        return t.isGeneratorFunction(r) ? a : a.next().then((function(t) {
          return t.done ? t.value : a.next();
        }));
      }, m(v), s(v, a, "Generator"), s(v, o, (function() {
        return this;
      })), s(v, "toString", (function() {
        return "[object Generator]";
      })), t.keys = function(t) {
        var e = [];
        for (var r in t) e.push(r);
        return e.reverse(), function r() {
          for (; e.length;) {
            var n = e.pop();
            if (n in t) return r.value = n, r.done = !1, r;
          }
          return r.done = !0, r;
        };
      }, t.values = B, A.prototype = {
        constructor: A, reset: function(t) {
          if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(E), !t) for (var e in this) "t" === e.charAt(0) && r.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0);
        }, stop: function() {
          this.done = !0;
          var t = this.tryEntries[0].completion;
          if ("throw" === t.type) throw t.arg;
          return this.rval;
        }, dispatchException: function(t) {
          if (this.done) throw t;
          var e = this;

          function n(r, n) {
            return a.type = "throw", a.arg = t, e.next = r, n && (e.method = "next", e.arg = void 0), !!n;
          }

          for (var o = this.tryEntries.length - 1; o >= 0; --o) {
            var i = this.tryEntries[o], a = i.completion;
            if ("root" === i.tryLoc) return n("end");
            if (i.tryLoc <= this.prev) {
              var s = r.call(i, "catchLoc"), u = r.call(i, "finallyLoc");
              if (s && u) {
                if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                if (this.prev < i.finallyLoc) return n(i.finallyLoc);
              } else if (s) {
                if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
              } else {
                if (!u) throw new Error("try statement without catch or finally");
                if (this.prev < i.finallyLoc) return n(i.finallyLoc);
              }
            }
          }
        }, abrupt: function(t, e) {
          for (var n = this.tryEntries.length - 1; n >= 0; --n) {
            var o = this.tryEntries[n];
            if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
              var i = o;
              break;
            }
          }
          i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
          var a = i ? i.completion : {};
          return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, l) : this.complete(a);
        }, complete: function(t, e) {
          if ("throw" === t.type) throw t.arg;
          return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), l;
        }, finish: function(t) {
          for (var e = this.tryEntries.length - 1; e >= 0; --e) {
            var r = this.tryEntries[e];
            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), E(r), l;
          }
        }, catch: function(t) {
          for (var e = this.tryEntries.length - 1; e >= 0; --e) {
            var r = this.tryEntries[e];
            if (r.tryLoc === t) {
              var n = r.completion;
              if ("throw" === n.type) {
                var o = n.arg;
                E(r);
              }
              return o;
            }
          }
          throw new Error("illegal catch attempt");
        }, delegateYield: function(t, e, r) {
          return this.delegate = {
            iterator: B(t),
            resultName: e,
            nextLoc: r
          }, "next" === this.method && (this.arg = void 0), l;
        }
      }, t;
    }(t.exports);
    try {
      regeneratorRuntime = n;
    } catch (t) {
      "object" == typeof globalThis ? globalThis.regeneratorRuntime = n : Function("r", "regeneratorRuntime = r")(n);
    }
  }, function(t, e, r) {
    "use strict";
    (function(t) {
      /*!
   * The buffer module from node.js, for the browser.
   *
   * @author   Feross Aboukhadijeh <http://feross.org>
   * @license  MIT
   */
      var n = r(17), o = r(18), i = r(19);

      function a() {
        return u.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
      }

      function s(t, e) {
        if (a() < e) throw new RangeError("Invalid typed array length");
        return u.TYPED_ARRAY_SUPPORT ? (t = new Uint8Array(e)).__proto__ = u.prototype : (null === t && (t = new u(e)), t.length = e), t;
      }

      function u(t, e, r) {
        if (!(u.TYPED_ARRAY_SUPPORT || this instanceof u)) return new u(t, e, r);
        if ("number" == typeof t) {
          if ("string" == typeof e) throw new Error("If encoding is specified then the first argument must be a string");
          return f(this, t);
        }
        return c(this, t, e, r);
      }

      function c(t, e, r, n) {
        if ("number" == typeof e) throw new TypeError("\"value\" argument must not be a number");
        return "undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer ? function(t, e, r, n) {
          if (e.byteLength, r < 0 || e.byteLength < r) throw new RangeError("'offset' is out of bounds");
          if (e.byteLength < r + (n || 0)) throw new RangeError("'length' is out of bounds");
          e = void 0 === r && void 0 === n ? new Uint8Array(e) : void 0 === n ? new Uint8Array(e, r) : new Uint8Array(e, r, n);
          u.TYPED_ARRAY_SUPPORT ? (t = e).__proto__ = u.prototype : t = h(t, e);
          return t;
        }(t, e, r, n) : "string" == typeof e ? function(t, e, r) {
          "string" == typeof r && "" !== r || (r = "utf8");
          if (!u.isEncoding(r)) throw new TypeError("\"encoding\" must be a valid string encoding");
          var n = 0 | d(e, r), o = (t = s(t, n)).write(e, r);
          o !== n && (t = t.slice(0, o));
          return t;
        }(t, e, r) : function(t, e) {
          if (u.isBuffer(e)) {
            var r = 0 | p(e.length);
            return 0 === (t = s(t, r)).length || e.copy(t, 0, 0, r), t;
          }
          if (e) {
            if ("undefined" != typeof ArrayBuffer && e.buffer instanceof ArrayBuffer || "length" in e) return "number" != typeof e.length || (n = e.length) != n ? s(t, 0) : h(t, e);
            if ("Buffer" === e.type && i(e.data)) return h(t, e.data);
          }
          var n;
          throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
        }(t, e);
      }

      function l(t) {
        if ("number" != typeof t) throw new TypeError("\"size\" argument must be a number");
        if (t < 0) throw new RangeError("\"size\" argument must not be negative");
      }

      function f(t, e) {
        if (l(e), t = s(t, e < 0 ? 0 : 0 | p(e)), !u.TYPED_ARRAY_SUPPORT) for (var r = 0; r < e; ++r) t[r] = 0;
        return t;
      }

      function h(t, e) {
        var r = e.length < 0 ? 0 : 0 | p(e.length);
        t = s(t, r);
        for (var n = 0; n < r; n += 1) t[n] = 255 & e[n];
        return t;
      }

      function p(t) {
        if (t >= a()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + a().toString(16) + " bytes");
        return 0 | t;
      }

      function d(t, e) {
        if (u.isBuffer(t)) return t.length;
        if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(t) || t instanceof ArrayBuffer)) return t.byteLength;
        "string" != typeof t && (t = "" + t);
        var r = t.length;
        if (0 === r) return 0;
        for (var n = !1; ;) switch (e) {
          case"ascii":
          case"latin1":
          case"binary":
            return r;
          case"utf8":
          case"utf-8":
          case void 0:
            return F(t).length;
          case"ucs2":
          case"ucs-2":
          case"utf16le":
          case"utf-16le":
            return 2 * r;
          case"hex":
            return r >>> 1;
          case"base64":
            return Y(t).length;
          default:
            if (n) return F(t).length;
            e = ("" + e).toLowerCase(), n = !0;
        }
      }

      function g(t, e, r) {
        var n = !1;
        if ((void 0 === e || e < 0) && (e = 0), e > this.length) return "";
        if ((void 0 === r || r > this.length) && (r = this.length), r <= 0) return "";
        if ((r >>>= 0) <= (e >>>= 0)) return "";
        for (t || (t = "utf8"); ;) switch (t) {
          case"hex":
            return T(this, e, r);
          case"utf8":
          case"utf-8":
            return _(this, e, r);
          case"ascii":
            return P(this, e, r);
          case"latin1":
          case"binary":
            return C(this, e, r);
          case"base64":
            return k(this, e, r);
          case"ucs2":
          case"ucs-2":
          case"utf16le":
          case"utf-16le":
            return R(this, e, r);
          default:
            if (n) throw new TypeError("Unknown encoding: " + t);
            t = (t + "").toLowerCase(), n = !0;
        }
      }

      function y(t, e, r) {
        var n = t[e];
        t[e] = t[r], t[r] = n;
      }

      function v(t, e, r, n, o) {
        if (0 === t.length) return -1;
        if ("string" == typeof r ? (n = r, r = 0) : r > 2147483647 ? r = 2147483647 : r < -2147483648 && (r = -2147483648), r = +r, isNaN(r) && (r = o ? 0 : t.length - 1), r < 0 && (r = t.length + r), r >= t.length) {
          if (o) return -1;
          r = t.length - 1;
        } else if (r < 0) {
          if (!o) return -1;
          r = 0;
        }
        if ("string" == typeof e && (e = u.from(e, n)), u.isBuffer(e)) return 0 === e.length ? -1 : m(t, e, r, n, o);
        if ("number" == typeof e) return e &= 255, u.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? o ? Uint8Array.prototype.indexOf.call(t, e, r) : Uint8Array.prototype.lastIndexOf.call(t, e, r) : m(t, [e], r, n, o);
        throw new TypeError("val must be string, number or Buffer");
      }

      function m(t, e, r, n, o) {
        var i, a = 1, s = t.length, u = e.length;
        if (void 0 !== n && ("ucs2" === (n = String(n).toLowerCase()) || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)) {
          if (t.length < 2 || e.length < 2) return -1;
          a = 2, s /= 2, u /= 2, r /= 2;
        }

        function c(t, e) {
          return 1 === a ? t[e] : t.readUInt16BE(e * a);
        }

        if (o) {
          var l = -1;
          for (i = r; i < s; i++) if (c(t, i) === c(e, -1 === l ? 0 : i - l)) {
            if (-1 === l && (l = i), i - l + 1 === u) return l * a;
          } else -1 !== l && (i -= i - l), l = -1;
        } else for (r + u > s && (r = s - u), i = r; i >= 0; i--) {
          for (var f = !0, h = 0; h < u; h++) if (c(t, i + h) !== c(e, h)) {
            f = !1;
            break;
          }
          if (f) return i;
        }
        return -1;
      }

      function w(t, e, r, n) {
        r = Number(r) || 0;
        var o = t.length - r;
        n ? (n = Number(n)) > o && (n = o) : n = o;
        var i = e.length;
        if (i % 2 != 0) throw new TypeError("Invalid hex string");
        n > i / 2 && (n = i / 2);
        for (var a = 0; a < n; ++a) {
          var s = parseInt(e.substr(2 * a, 2), 16);
          if (isNaN(s)) return a;
          t[r + a] = s;
        }
        return a;
      }

      function b(t, e, r, n) {
        return z(F(e, t.length - r), t, r, n);
      }

      function x(t, e, r, n) {
        return z(function(t) {
          for (var e = [], r = 0; r < t.length; ++r) e.push(255 & t.charCodeAt(r));
          return e;
        }(e), t, r, n);
      }

      function E(t, e, r, n) {
        return x(t, e, r, n);
      }

      function A(t, e, r, n) {
        return z(Y(e), t, r, n);
      }

      function B(t, e, r, n) {
        return z(function(t, e) {
          for (var r, n, o, i = [], a = 0; a < t.length && !((e -= 2) < 0); ++a) r = t.charCodeAt(a), n = r >> 8, o = r % 256, i.push(o), i.push(n);
          return i;
        }(e, t.length - r), t, r, n);
      }

      function k(t, e, r) {
        return 0 === e && r === t.length ? n.fromByteArray(t) : n.fromByteArray(t.slice(e, r));
      }

      function _(t, e, r) {
        r = Math.min(t.length, r);
        for (var n = [], o = e; o < r;) {
          var i, a, s, u, c = t[o], l = null, f = c > 239 ? 4 : c > 223 ? 3 : c > 191 ? 2 : 1;
          if (o + f <= r) switch (f) {
            case 1:
              c < 128 && (l = c);
              break;
            case 2:
              128 == (192 & (i = t[o + 1])) && (u = (31 & c) << 6 | 63 & i) > 127 && (l = u);
              break;
            case 3:
              i = t[o + 1], a = t[o + 2], 128 == (192 & i) && 128 == (192 & a) && (u = (15 & c) << 12 | (63 & i) << 6 | 63 & a) > 2047 && (u < 55296 || u > 57343) && (l = u);
              break;
            case 4:
              i = t[o + 1], a = t[o + 2], s = t[o + 3], 128 == (192 & i) && 128 == (192 & a) && 128 == (192 & s) && (u = (15 & c) << 18 | (63 & i) << 12 | (63 & a) << 6 | 63 & s) > 65535 && u < 1114112 && (l = u);
          }
          null === l ? (l = 65533, f = 1) : l > 65535 && (l -= 65536, n.push(l >>> 10 & 1023 | 55296), l = 56320 | 1023 & l), n.push(l), o += f;
        }
        return function(t) {
          var e = t.length;
          if (e <= 4096) return String.fromCharCode.apply(String, t);
          var r = "", n = 0;
          for (; n < e;) r += String.fromCharCode.apply(String, t.slice(n, n += 4096));
          return r;
        }(n);
      }

      e.Buffer = u, e.SlowBuffer = function(t) {
        +t != t && (t = 0);
        return u.alloc(+t);
      }, e.INSPECT_MAX_BYTES = 50, u.TYPED_ARRAY_SUPPORT = void 0 !== t.TYPED_ARRAY_SUPPORT ? t.TYPED_ARRAY_SUPPORT : function() {
        try {
          var t = new Uint8Array(1);
          return t.__proto__ = {
            __proto__: Uint8Array.prototype, foo: function() {
              return 42;
            }
          }, 42 === t.foo() && "function" == typeof t.subarray && 0 === t.subarray(1, 1).byteLength;
        } catch (t) {
          return !1;
        }
      }(), e.kMaxLength = a(), u.poolSize = 8192, u._augment = function(t) {
        return t.__proto__ = u.prototype, t;
      }, u.from = function(t, e, r) {
        return c(null, t, e, r);
      }, u.TYPED_ARRAY_SUPPORT && (u.prototype.__proto__ = Uint8Array.prototype, u.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && u[Symbol.species] === u && Object.defineProperty(u, Symbol.species, {
        value: null,
        configurable: !0
      })), u.alloc = function(t, e, r) {
        return function(t, e, r, n) {
          return l(e), e <= 0 ? s(t, e) : void 0 !== r ? "string" == typeof n ? s(t, e).fill(r, n) : s(t, e).fill(r) : s(t, e);
        }(null, t, e, r);
      }, u.allocUnsafe = function(t) {
        return f(null, t);
      }, u.allocUnsafeSlow = function(t) {
        return f(null, t);
      }, u.isBuffer = function(t) {
        return !(null == t || !t._isBuffer);
      }, u.compare = function(t, e) {
        if (!u.isBuffer(t) || !u.isBuffer(e)) throw new TypeError("Arguments must be Buffers");
        if (t === e) return 0;
        for (var r = t.length, n = e.length, o = 0, i = Math.min(r, n); o < i; ++o) if (t[o] !== e[o]) {
          r = t[o], n = e[o];
          break;
        }
        return r < n ? -1 : n < r ? 1 : 0;
      }, u.isEncoding = function(t) {
        switch (String(t).toLowerCase()) {
          case"hex":
          case"utf8":
          case"utf-8":
          case"ascii":
          case"latin1":
          case"binary":
          case"base64":
          case"ucs2":
          case"ucs-2":
          case"utf16le":
          case"utf-16le":
            return !0;
          default:
            return !1;
        }
      }, u.concat = function(t, e) {
        if (!i(t)) throw new TypeError("\"list\" argument must be an Array of Buffers");
        if (0 === t.length) return u.alloc(0);
        var r;
        if (void 0 === e) for (e = 0, r = 0; r < t.length; ++r) e += t[r].length;
        var n = u.allocUnsafe(e), o = 0;
        for (r = 0; r < t.length; ++r) {
          var a = t[r];
          if (!u.isBuffer(a)) throw new TypeError("\"list\" argument must be an Array of Buffers");
          a.copy(n, o), o += a.length;
        }
        return n;
      }, u.byteLength = d, u.prototype._isBuffer = !0, u.prototype.swap16 = function() {
        var t = this.length;
        if (t % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
        for (var e = 0; e < t; e += 2) y(this, e, e + 1);
        return this;
      }, u.prototype.swap32 = function() {
        var t = this.length;
        if (t % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
        for (var e = 0; e < t; e += 4) y(this, e, e + 3), y(this, e + 1, e + 2);
        return this;
      }, u.prototype.swap64 = function() {
        var t = this.length;
        if (t % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
        for (var e = 0; e < t; e += 8) y(this, e, e + 7), y(this, e + 1, e + 6), y(this, e + 2, e + 5), y(this, e + 3, e + 4);
        return this;
      }, u.prototype.toString = function() {
        var t = 0 | this.length;
        return 0 === t ? "" : 0 === arguments.length ? _(this, 0, t) : g.apply(this, arguments);
      }, u.prototype.equals = function(t) {
        if (!u.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
        return this === t || 0 === u.compare(this, t);
      }, u.prototype.inspect = function() {
        var t = "", r = e.INSPECT_MAX_BYTES;
        return this.length > 0 && (t = this.toString("hex", 0, r).match(/.{2}/g).join(" "), this.length > r && (t += " ... ")), "<Buffer " + t + ">";
      }, u.prototype.compare = function(t, e, r, n, o) {
        if (!u.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
        if (void 0 === e && (e = 0), void 0 === r && (r = t ? t.length : 0), void 0 === n && (n = 0), void 0 === o && (o = this.length), e < 0 || r > t.length || n < 0 || o > this.length) throw new RangeError("out of range index");
        if (n >= o && e >= r) return 0;
        if (n >= o) return -1;
        if (e >= r) return 1;
        if (this === t) return 0;
        for (var i = (o >>>= 0) - (n >>>= 0), a = (r >>>= 0) - (e >>>= 0), s = Math.min(i, a), c = this.slice(n, o), l = t.slice(e, r), f = 0; f < s; ++f) if (c[f] !== l[f]) {
          i = c[f], a = l[f];
          break;
        }
        return i < a ? -1 : a < i ? 1 : 0;
      }, u.prototype.includes = function(t, e, r) {
        return -1 !== this.indexOf(t, e, r);
      }, u.prototype.indexOf = function(t, e, r) {
        return v(this, t, e, r, !0);
      }, u.prototype.lastIndexOf = function(t, e, r) {
        return v(this, t, e, r, !1);
      }, u.prototype.write = function(t, e, r, n) {
        if (void 0 === e) n = "utf8", r = this.length, e = 0; else if (void 0 === r && "string" == typeof e) n = e, r = this.length, e = 0; else {
          if (!isFinite(e)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
          e |= 0, isFinite(r) ? (r |= 0, void 0 === n && (n = "utf8")) : (n = r, r = void 0);
        }
        var o = this.length - e;
        if ((void 0 === r || r > o) && (r = o), t.length > 0 && (r < 0 || e < 0) || e > this.length) throw new RangeError("Attempt to write outside buffer bounds");
        n || (n = "utf8");
        for (var i = !1; ;) switch (n) {
          case"hex":
            return w(this, t, e, r);
          case"utf8":
          case"utf-8":
            return b(this, t, e, r);
          case"ascii":
            return x(this, t, e, r);
          case"latin1":
          case"binary":
            return E(this, t, e, r);
          case"base64":
            return A(this, t, e, r);
          case"ucs2":
          case"ucs-2":
          case"utf16le":
          case"utf-16le":
            return B(this, t, e, r);
          default:
            if (i) throw new TypeError("Unknown encoding: " + n);
            n = ("" + n).toLowerCase(), i = !0;
        }
      }, u.prototype.toJSON = function() {
        return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
      };

      function P(t, e, r) {
        var n = "";
        r = Math.min(t.length, r);
        for (var o = e; o < r; ++o) n += String.fromCharCode(127 & t[o]);
        return n;
      }

      function C(t, e, r) {
        var n = "";
        r = Math.min(t.length, r);
        for (var o = e; o < r; ++o) n += String.fromCharCode(t[o]);
        return n;
      }

      function T(t, e, r) {
        var n = t.length;
        (!e || e < 0) && (e = 0), (!r || r < 0 || r > n) && (r = n);
        for (var o = "", i = e; i < r; ++i) o += j(t[i]);
        return o;
      }

      function R(t, e, r) {
        for (var n = t.slice(e, r), o = "", i = 0; i < n.length; i += 2) o += String.fromCharCode(n[i] + 256 * n[i + 1]);
        return o;
      }

      function S(t, e, r) {
        if (t % 1 != 0 || t < 0) throw new RangeError("offset is not uint");
        if (t + e > r) throw new RangeError("Trying to access beyond buffer length");
      }

      function L(t, e, r, n, o, i) {
        if (!u.isBuffer(t)) throw new TypeError("\"buffer\" argument must be a Buffer instance");
        if (e > o || e < i) throw new RangeError("\"value\" argument is out of bounds");
        if (r + n > t.length) throw new RangeError("Index out of range");
      }

      function D(t, e, r, n) {
        e < 0 && (e = 65535 + e + 1);
        for (var o = 0, i = Math.min(t.length - r, 2); o < i; ++o) t[r + o] = (e & 255 << 8 * (n ? o : 1 - o)) >>> 8 * (n ? o : 1 - o);
      }

      function I(t, e, r, n) {
        e < 0 && (e = 4294967295 + e + 1);
        for (var o = 0, i = Math.min(t.length - r, 4); o < i; ++o) t[r + o] = e >>> 8 * (n ? o : 3 - o) & 255;
      }

      function M(t, e, r, n, o, i) {
        if (r + n > t.length) throw new RangeError("Index out of range");
        if (r < 0) throw new RangeError("Index out of range");
      }

      function O(t, e, r, n, i) {
        return i || M(t, 0, r, 4), o.write(t, e, r, n, 23, 4), r + 4;
      }

      function U(t, e, r, n, i) {
        return i || M(t, 0, r, 8), o.write(t, e, r, n, 52, 8), r + 8;
      }

      u.prototype.slice = function(t, e) {
        var r, n = this.length;
        if ((t = ~~t) < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n), (e = void 0 === e ? n : ~~e) < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n), e < t && (e = t), u.TYPED_ARRAY_SUPPORT) (r = this.subarray(t, e)).__proto__ = u.prototype; else {
          var o = e - t;
          r = new u(o, void 0);
          for (var i = 0; i < o; ++i) r[i] = this[i + t];
        }
        return r;
      }, u.prototype.readUIntLE = function(t, e, r) {
        t |= 0, e |= 0, r || S(t, e, this.length);
        for (var n = this[t], o = 1, i = 0; ++i < e && (o *= 256);) n += this[t + i] * o;
        return n;
      }, u.prototype.readUIntBE = function(t, e, r) {
        t |= 0, e |= 0, r || S(t, e, this.length);
        for (var n = this[t + --e], o = 1; e > 0 && (o *= 256);) n += this[t + --e] * o;
        return n;
      }, u.prototype.readUInt8 = function(t, e) {
        return e || S(t, 1, this.length), this[t];
      }, u.prototype.readUInt16LE = function(t, e) {
        return e || S(t, 2, this.length), this[t] | this[t + 1] << 8;
      }, u.prototype.readUInt16BE = function(t, e) {
        return e || S(t, 2, this.length), this[t] << 8 | this[t + 1];
      }, u.prototype.readUInt32LE = function(t, e) {
        return e || S(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3];
      }, u.prototype.readUInt32BE = function(t, e) {
        return e || S(t, 4, this.length), 16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]);
      }, u.prototype.readIntLE = function(t, e, r) {
        t |= 0, e |= 0, r || S(t, e, this.length);
        for (var n = this[t], o = 1, i = 0; ++i < e && (o *= 256);) n += this[t + i] * o;
        return n >= (o *= 128) && (n -= Math.pow(2, 8 * e)), n;
      }, u.prototype.readIntBE = function(t, e, r) {
        t |= 0, e |= 0, r || S(t, e, this.length);
        for (var n = e, o = 1, i = this[t + --n]; n > 0 && (o *= 256);) i += this[t + --n] * o;
        return i >= (o *= 128) && (i -= Math.pow(2, 8 * e)), i;
      }, u.prototype.readInt8 = function(t, e) {
        return e || S(t, 1, this.length), 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t];
      }, u.prototype.readInt16LE = function(t, e) {
        e || S(t, 2, this.length);
        var r = this[t] | this[t + 1] << 8;
        return 32768 & r ? 4294901760 | r : r;
      }, u.prototype.readInt16BE = function(t, e) {
        e || S(t, 2, this.length);
        var r = this[t + 1] | this[t] << 8;
        return 32768 & r ? 4294901760 | r : r;
      }, u.prototype.readInt32LE = function(t, e) {
        return e || S(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24;
      }, u.prototype.readInt32BE = function(t, e) {
        return e || S(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3];
      }, u.prototype.readFloatLE = function(t, e) {
        return e || S(t, 4, this.length), o.read(this, t, !0, 23, 4);
      }, u.prototype.readFloatBE = function(t, e) {
        return e || S(t, 4, this.length), o.read(this, t, !1, 23, 4);
      }, u.prototype.readDoubleLE = function(t, e) {
        return e || S(t, 8, this.length), o.read(this, t, !0, 52, 8);
      }, u.prototype.readDoubleBE = function(t, e) {
        return e || S(t, 8, this.length), o.read(this, t, !1, 52, 8);
      }, u.prototype.writeUIntLE = function(t, e, r, n) {
        (t = +t, e |= 0, r |= 0, n) || L(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
        var o = 1, i = 0;
        for (this[e] = 255 & t; ++i < r && (o *= 256);) this[e + i] = t / o & 255;
        return e + r;
      }, u.prototype.writeUIntBE = function(t, e, r, n) {
        (t = +t, e |= 0, r |= 0, n) || L(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
        var o = r - 1, i = 1;
        for (this[e + o] = 255 & t; --o >= 0 && (i *= 256);) this[e + o] = t / i & 255;
        return e + r;
      }, u.prototype.writeUInt8 = function(t, e, r) {
        return t = +t, e |= 0, r || L(this, t, e, 1, 255, 0), u.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), this[e] = 255 & t, e + 1;
      }, u.prototype.writeUInt16LE = function(t, e, r) {
        return t = +t, e |= 0, r || L(this, t, e, 2, 65535, 0), u.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8) : D(this, t, e, !0), e + 2;
      }, u.prototype.writeUInt16BE = function(t, e, r) {
        return t = +t, e |= 0, r || L(this, t, e, 2, 65535, 0), u.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8, this[e + 1] = 255 & t) : D(this, t, e, !1), e + 2;
      }, u.prototype.writeUInt32LE = function(t, e, r) {
        return t = +t, e |= 0, r || L(this, t, e, 4, 4294967295, 0), u.TYPED_ARRAY_SUPPORT ? (this[e + 3] = t >>> 24, this[e + 2] = t >>> 16, this[e + 1] = t >>> 8, this[e] = 255 & t) : I(this, t, e, !0), e + 4;
      }, u.prototype.writeUInt32BE = function(t, e, r) {
        return t = +t, e |= 0, r || L(this, t, e, 4, 4294967295, 0), u.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t) : I(this, t, e, !1), e + 4;
      }, u.prototype.writeIntLE = function(t, e, r, n) {
        if (t = +t, e |= 0, !n) {
          var o = Math.pow(2, 8 * r - 1);
          L(this, t, e, r, o - 1, -o);
        }
        var i = 0, a = 1, s = 0;
        for (this[e] = 255 & t; ++i < r && (a *= 256);) t < 0 && 0 === s && 0 !== this[e + i - 1] && (s = 1), this[e + i] = (t / a >> 0) - s & 255;
        return e + r;
      }, u.prototype.writeIntBE = function(t, e, r, n) {
        if (t = +t, e |= 0, !n) {
          var o = Math.pow(2, 8 * r - 1);
          L(this, t, e, r, o - 1, -o);
        }
        var i = r - 1, a = 1, s = 0;
        for (this[e + i] = 255 & t; --i >= 0 && (a *= 256);) t < 0 && 0 === s && 0 !== this[e + i + 1] && (s = 1), this[e + i] = (t / a >> 0) - s & 255;
        return e + r;
      }, u.prototype.writeInt8 = function(t, e, r) {
        return t = +t, e |= 0, r || L(this, t, e, 1, 127, -128), u.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), t < 0 && (t = 255 + t + 1), this[e] = 255 & t, e + 1;
      }, u.prototype.writeInt16LE = function(t, e, r) {
        return t = +t, e |= 0, r || L(this, t, e, 2, 32767, -32768), u.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8) : D(this, t, e, !0), e + 2;
      }, u.prototype.writeInt16BE = function(t, e, r) {
        return t = +t, e |= 0, r || L(this, t, e, 2, 32767, -32768), u.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8, this[e + 1] = 255 & t) : D(this, t, e, !1), e + 2;
      }, u.prototype.writeInt32LE = function(t, e, r) {
        return t = +t, e |= 0, r || L(this, t, e, 4, 2147483647, -2147483648), u.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8, this[e + 2] = t >>> 16, this[e + 3] = t >>> 24) : I(this, t, e, !0), e + 4;
      }, u.prototype.writeInt32BE = function(t, e, r) {
        return t = +t, e |= 0, r || L(this, t, e, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), u.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t) : I(this, t, e, !1), e + 4;
      }, u.prototype.writeFloatLE = function(t, e, r) {
        return O(this, t, e, !0, r);
      }, u.prototype.writeFloatBE = function(t, e, r) {
        return O(this, t, e, !1, r);
      }, u.prototype.writeDoubleLE = function(t, e, r) {
        return U(this, t, e, !0, r);
      }, u.prototype.writeDoubleBE = function(t, e, r) {
        return U(this, t, e, !1, r);
      }, u.prototype.copy = function(t, e, r, n) {
        if (r || (r = 0), n || 0 === n || (n = this.length), e >= t.length && (e = t.length), e || (e = 0), n > 0 && n < r && (n = r), n === r) return 0;
        if (0 === t.length || 0 === this.length) return 0;
        if (e < 0) throw new RangeError("targetStart out of bounds");
        if (r < 0 || r >= this.length) throw new RangeError("sourceStart out of bounds");
        if (n < 0) throw new RangeError("sourceEnd out of bounds");
        n > this.length && (n = this.length), t.length - e < n - r && (n = t.length - e + r);
        var o, i = n - r;
        if (this === t && r < e && e < n) for (o = i - 1; o >= 0; --o) t[o + e] = this[o + r]; else if (i < 1e3 || !u.TYPED_ARRAY_SUPPORT) for (o = 0; o < i; ++o) t[o + e] = this[o + r]; else Uint8Array.prototype.set.call(t, this.subarray(r, r + i), e);
        return i;
      }, u.prototype.fill = function(t, e, r, n) {
        if ("string" == typeof t) {
          if ("string" == typeof e ? (n = e, e = 0, r = this.length) : "string" == typeof r && (n = r, r = this.length), 1 === t.length) {
            var o = t.charCodeAt(0);
            o < 256 && (t = o);
          }
          if (void 0 !== n && "string" != typeof n) throw new TypeError("encoding must be a string");
          if ("string" == typeof n && !u.isEncoding(n)) throw new TypeError("Unknown encoding: " + n);
        } else "number" == typeof t && (t &= 255);
        if (e < 0 || this.length < e || this.length < r) throw new RangeError("Out of range index");
        if (r <= e) return this;
        var i;
        if (e >>>= 0, r = void 0 === r ? this.length : r >>> 0, t || (t = 0), "number" == typeof t) for (i = e; i < r; ++i) this[i] = t; else {
          var a = u.isBuffer(t) ? t : F(new u(t, n).toString()), s = a.length;
          for (i = 0; i < r - e; ++i) this[i + e] = a[i % s];
        }
        return this;
      };
      var N = /[^+\/0-9A-Za-z-_]/g;

      function j(t) {
        return t < 16 ? "0" + t.toString(16) : t.toString(16);
      }

      function F(t, e) {
        var r;
        e = e || 1 / 0;
        for (var n = t.length, o = null, i = [], a = 0; a < n; ++a) {
          if ((r = t.charCodeAt(a)) > 55295 && r < 57344) {
            if (!o) {
              if (r > 56319) {
                (e -= 3) > -1 && i.push(239, 191, 189);
                continue;
              }
              if (a + 1 === n) {
                (e -= 3) > -1 && i.push(239, 191, 189);
                continue;
              }
              o = r;
              continue;
            }
            if (r < 56320) {
              (e -= 3) > -1 && i.push(239, 191, 189), o = r;
              continue;
            }
            r = 65536 + (o - 55296 << 10 | r - 56320);
          } else o && (e -= 3) > -1 && i.push(239, 191, 189);
          if (o = null, r < 128) {
            if ((e -= 1) < 0) break;
            i.push(r);
          } else if (r < 2048) {
            if ((e -= 2) < 0) break;
            i.push(r >> 6 | 192, 63 & r | 128);
          } else if (r < 65536) {
            if ((e -= 3) < 0) break;
            i.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128);
          } else {
            if (!(r < 1114112)) throw new Error("Invalid code point");
            if ((e -= 4) < 0) break;
            i.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128);
          }
        }
        return i;
      }

      function Y(t) {
        return n.toByteArray(function(t) {
          if ((t = function(t) {
            return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "");
          }(t).replace(N, "")).length < 2) return "";
          for (; t.length % 4 != 0;) t += "=";
          return t;
        }(t));
      }

      function z(t, e, r, n) {
        for (var o = 0; o < n && !(o + r >= e.length || o >= t.length); ++o) e[o + r] = t[o];
        return o;
      }
    }).call(this, r(16));
  }, function(t, e) {
    var r;
    r = function() {
      return this;
    }();
    try {
      r = r || new Function("return this")();
    } catch (t) {
      "object" == typeof window && (r = window);
    }
    t.exports = r;
  }, function(t, e, r) {
    "use strict";
    e.byteLength = function(t) {
      var e = c(t), r = e[0], n = e[1];
      return 3 * (r + n) / 4 - n;
    }, e.toByteArray = function(t) {
      var e, r, n = c(t), a = n[0], s = n[1], u = new i(function(t, e, r) {
        return 3 * (e + r) / 4 - r;
      }(0, a, s)), l = 0, f = s > 0 ? a - 4 : a;
      for (r = 0; r < f; r += 4) e = o[t.charCodeAt(r)] << 18 | o[t.charCodeAt(r + 1)] << 12 | o[t.charCodeAt(r + 2)] << 6 | o[t.charCodeAt(r + 3)], u[l++] = e >> 16 & 255, u[l++] = e >> 8 & 255, u[l++] = 255 & e;
      2 === s && (e = o[t.charCodeAt(r)] << 2 | o[t.charCodeAt(r + 1)] >> 4, u[l++] = 255 & e);
      1 === s && (e = o[t.charCodeAt(r)] << 10 | o[t.charCodeAt(r + 1)] << 4 | o[t.charCodeAt(r + 2)] >> 2, u[l++] = e >> 8 & 255, u[l++] = 255 & e);
      return u;
    }, e.fromByteArray = function(t) {
      for (var e, r = t.length, o = r % 3, i = [], a = 0, s = r - o; a < s; a += 16383) i.push(l(t, a, a + 16383 > s ? s : a + 16383));
      1 === o ? (e = t[r - 1], i.push(n[e >> 2] + n[e << 4 & 63] + "==")) : 2 === o && (e = (t[r - 2] << 8) + t[r - 1], i.push(n[e >> 10] + n[e >> 4 & 63] + n[e << 2 & 63] + "="));
      return i.join("");
    };
    for (var n = [], o = [], i = "undefined" != typeof Uint8Array ? Uint8Array : Array, a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", s = 0, u = a.length; s < u; ++s) n[s] = a[s], o[a.charCodeAt(s)] = s;

    function c(t) {
      var e = t.length;
      if (e % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
      var r = t.indexOf("=");
      return -1 === r && (r = e), [r, r === e ? 0 : 4 - r % 4];
    }

    function l(t, e, r) {
      for (var o, i, a = [], s = e; s < r; s += 3) o = (t[s] << 16 & 16711680) + (t[s + 1] << 8 & 65280) + (255 & t[s + 2]), a.push(n[(i = o) >> 18 & 63] + n[i >> 12 & 63] + n[i >> 6 & 63] + n[63 & i]);
      return a.join("");
    }

    o["-".charCodeAt(0)] = 62, o["_".charCodeAt(0)] = 63;
  }, function(t, e) {
    /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
    e.read = function(t, e, r, n, o) {
      var i, a, s = 8 * o - n - 1, u = (1 << s) - 1, c = u >> 1, l = -7, f = r ? o - 1 : 0, h = r ? -1 : 1,
        p = t[e + f];
      for (f += h, i = p & (1 << -l) - 1, p >>= -l, l += s; l > 0; i = 256 * i + t[e + f], f += h, l -= 8) ;
      for (a = i & (1 << -l) - 1, i >>= -l, l += n; l > 0; a = 256 * a + t[e + f], f += h, l -= 8) ;
      if (0 === i) i = 1 - c; else {
        if (i === u) return a ? NaN : 1 / 0 * (p ? -1 : 1);
        a += Math.pow(2, n), i -= c;
      }
      return (p ? -1 : 1) * a * Math.pow(2, i - n);
    }, e.write = function(t, e, r, n, o, i) {
      var a, s, u, c = 8 * i - o - 1, l = (1 << c) - 1, f = l >> 1,
        h = 23 === o ? Math.pow(2, -24) - Math.pow(2, -77) : 0, p = n ? 0 : i - 1, d = n ? 1 : -1,
        g = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;
      for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (s = isNaN(e) ? 1 : 0, a = l) : (a = Math.floor(Math.log(e) / Math.LN2), e * (u = Math.pow(2, -a)) < 1 && (a--, u *= 2), (e += a + f >= 1 ? h / u : h * Math.pow(2, 1 - f)) * u >= 2 && (a++, u /= 2), a + f >= l ? (s = 0, a = l) : a + f >= 1 ? (s = (e * u - 1) * Math.pow(2, o), a += f) : (s = e * Math.pow(2, f - 1) * Math.pow(2, o), a = 0)); o >= 8; t[r + p] = 255 & s, p += d, s /= 256, o -= 8) ;
      for (a = a << o | s, c += o; c > 0; t[r + p] = 255 & a, p += d, a /= 256, c -= 8) ;
      t[r + p - d] |= 128 * g;
    };
  }, function(t, e) {
    var r = {}.toString;
    t.exports = Array.isArray || function(t) {
      return "[object Array]" == r.call(t);
    };
  }, function(t, e, r) {
    "use strict";
    const n = "'([^']+)'|\"([^\"]+)\"|[\\w\\s-]+", o = new RegExp("(bold|bolder|lighter|[1-9]00) +", "i"),
      i = new RegExp("(italic|oblique) +", "i"), a = new RegExp("(small-caps) +", "i"),
      s = new RegExp("(ultra-condensed|extra-condensed|condensed|semi-condensed|semi-expanded|expanded|extra-expanded|ultra-expanded) +", "i"),
      u = new RegExp(`([\\d\\.]+)(px|pt|pc|in|cm|mm|%|em|ex|ch|rem|q) *((?:${n})( *, *(?:${n}))*)`), c = {};
    t.exports = t => {
      if (c[t]) return c[t];
      const e = u.exec(t);
      if (!e) return;
      const r = {
        weight: "normal",
        style: "normal",
        stretch: "normal",
        variant: "normal",
        size: parseFloat(e[1]),
        unit: e[2],
        family: e[3].replace(/["']/g, "").replace(/ *, */g, ",")
      };
      let n, l, f, h;
      const p = t.substring(0, e.index);
      switch ((n = o.exec(p)) && (r.weight = n[1]), (l = i.exec(p)) && (r.style = l[1]), (f = a.exec(p)) && (r.variant = f[1]), (h = s.exec(p)) && (r.stretch = h[1]), r.unit) {
        case"pt":
          r.size /= .75;
          break;
        case"pc":
          r.size *= 16;
          break;
        case"in":
          r.size *= 96;
          break;
        case"cm":
          r.size *= 96 / 2.54;
          break;
        case"mm":
          r.size *= 96 / 25.4;
          break;
        case"%":
          break;
        case"em":
        case"rem":
          r.size *= 16 / .75;
          break;
        case"q":
          r.size *= 96 / 25.4 / 4;
      }
      return c[t] = r;
    };
  }, function(t, e, r) {
    "use strict";
    r.r(e);
    var n = r(8), o = r.n(n), i = r(3), a = r.n(i);

    function s(t) {
      return "" === t ? t : "true" === t || "1" == t;
    }

    var u = function(t, e) {
      return new Promise((function(e, r) {
        var n = new XMLHttpRequest;
        n.responseType = "blob", n.onload = function() {
          var t = new FileReader;
          t.onloadend = function() {
            e(t.result);
          }, t.readAsArrayBuffer(n.response);
        }, n.open("GET", t), n.send();
      }));
    }, c = r(10);
    var l = function(t, e, r, n, o, i, a, s) {
      var u, c = "function" == typeof t ? t.options : t;
      if (e && (c.render = e, c.staticRenderFns = r, c._compiled = !0), n && (c.functional = !0), i && (c._scopeId = "data-v-" + i), a ? (u = function(t) {
        (t = t || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (t = __VUE_SSR_CONTEXT__), o && o.call(this, t), t && t._registeredComponents && t._registeredComponents.add(a);
      }, c._ssrRegister = u) : o && (u = s ? function() {
        o.call(this, (c.functional ? this.parent : this).$root.$options.shadowRoot);
      } : o), u) if (c.functional) {
        c._injectStyles = u;
        var l = c.render;
        c.render = function(t, e) {
          return u.call(e), l(t, e);
        };
      } else {
        var f = c.beforeCreate;
        c.beforeCreate = f ? [].concat(f, u) : [u];
      }
      return { exports: t, options: c };
    }({
      props: {
        text: { type: String, required: !0 },
        qid: { type: String },
        correctLevel: { type: Number, default: 1 },
        size: { type: Number, default: 200 },
        margin: { type: Number, default: 20 },
        colorDark: { type: String, default: "#000000" },
        colorLight: { type: String, default: "#FFFFFF" },
        bgSrc: { type: String, default: void 0 },
        background: { type: String, default: "rgba(0,0,0,0)" },
        backgroundDimming: { type: String, default: "rgba(0,0,0,0)" },
        logoSrc: { type: String, default: void 0 },
        logoBackgroundColor: { type: String, default: "rgba(255,255,255,1)" },
        gifBgSrc: { type: String, default: void 0 },
        logoScale: { type: Number, default: .2 },
        logoMargin: { type: Number, default: 0 },
        logoCornerRadius: { type: Number, default: 8 },
        whiteMargin: { type: [Boolean, String], default: !0 },
        dotScale: { type: Number, default: 1 },
        autoColor: { type: [Boolean, String], default: !0 },
        binarize: { type: [Boolean, String], default: !1 },
        binarizeThreshold: { type: Number, default: 128 },
        callback: {
          type: Function, default: function() {
          }
        },
        bindElement: { type: Boolean, default: !0 },
        backgroundColor: { type: String, default: "#FFFFFF" },
        components: {
          default: function() {
            return {
              data: { scale: 1 },
              timing: { scale: 1, protectors: !1 },
              alignment: { scale: 1, protectors: !1 },
              cornerAlignment: { scale: 1, protectors: !0 }
            };
          }
        }
      }, name: "vue-qr", data: function() {
        return { imgUrl: "" };
      }, watch: {
        $props: {
          deep: !0, handler: function() {
            this.main();
          }
        }
      }, mounted: function() {
        this.main();
      }, methods: {
        main: function() {
          var t = this;
          return o()(a.a.mark((function e() {
            var r, n, o, i;
            return a.a.wrap((function(e) {
              for (; ;) switch (e.prev = e.next) {
                case 0:
                  if (!t.gifBgSrc) {
                    e.next = 7;
                    break;
                  }
                  return e.next = 3, u(t.gifBgSrc);
                case 3:
                  return r = e.sent, n = t.logoSrc, t.render(void 0, n, r), e.abrupt("return");
                case 7:
                  o = t.bgSrc, i = t.logoSrc, t.render(o, i);
                case 10:
                case"end":
                  return e.stop();
              }
            }), e);
          })))();
        }, render: function(t, e, r) {
          var n = this;
          return o()(a.a.mark((function o() {
            var i;
            return a.a.wrap((function(o) {
              for (; ;) switch (o.prev = o.next) {
                case 0:
                  i = n, new c.a({
                    gifBackground: r,
                    text: i.text,
                    size: i.size,
                    margin: i.margin,
                    colorDark: i.colorDark,
                    colorLight: i.colorLight,
                    backgroundColor: i.backgroundColor,
                    backgroundImage: t,
                    backgroundDimming: i.backgroundDimming,
                    logoImage: e,
                    logoScale: i.logoScale,
                    logoBackgroundColor: i.logoBackgroundColor,
                    correctLevel: i.correctLevel,
                    logoMargin: i.logoMargin,
                    logoCornerRadius: i.logoCornerRadius,
                    whiteMargin: s(i.whiteMargin),
                    dotScale: i.dotScale,
                    autoColor: s(i.autoColor),
                    binarize: s(i.binarize),
                    binarizeThreshold: i.binarizeThreshold,
                    components: i.components
                  }).draw().then((function(t) {
                    n.imgUrl = t, i.callback && i.callback(t, i.qid);
                  }));
                case 2:
                case"end":
                  return o.stop();
              }
            }), o);
          })))();
        }
      }
    }, (function() {
      var t = this.$createElement, e = this._self._c || t;
      return this.bindElement ? e("img", {
        staticStyle: { display: "inline-block" },
        attrs: { src: this.imgUrl }
      }) : this._e();
    }), [], !1, null, null, null).exports;
    l.install = function(t) {
      return t.component(l.name, l);
    };
    var f = l, h = [f];
    "undefined" != typeof window && window.Vue && function(t) {
      h.map((function(e) {
        t.component(e.name, e);
      }));
    }(window.Vue);
    e.default = f;
  }]);
}));
//# sourceMappingURL=vue-qr.js.map
