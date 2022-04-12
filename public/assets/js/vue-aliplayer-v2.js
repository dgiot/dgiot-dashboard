;(function (e, t) {
  'object' === typeof exports && 'object' === typeof module
    ? (module.exports = t())
    : 'function' === typeof define && define.amd
    ? define([], t)
    : 'object' === typeof exports
    ? (exports['vue-aliplayer-v2'] = t())
    : (e['vue-aliplayer-v2'] = t())
})('undefined' !== typeof self ? self : this, function () {
  return (function (e) {
    var t = {}
    function n(r) {
      if (t[r]) return t[r].exports
      var i = (t[r] = { i: r, l: !1, exports: {} })
      return e[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports
    }
    return (
      (n.m = e),
      (n.c = t),
      (n.d = function (e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r })
      }),
      (n.r = function (e) {
        'undefined' !== typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(e, '__esModule', { value: !0 })
      }),
      (n.t = function (e, t) {
        if ((1 & t && (e = n(e)), 8 & t)) return e
        if (4 & t && 'object' === typeof e && e && e.__esModule) return e
        var r = Object.create(null)
        if (
          (n.r(r),
          Object.defineProperty(r, 'default', { enumerable: !0, value: e }),
          2 & t && 'string' != typeof e)
        )
          for (var i in e)
            n.d(
              r,
              i,
              function (t) {
                return e[t]
              }.bind(null, i)
            )
        return r
      }),
      (n.n = function (e) {
        var t =
          e && e.__esModule
            ? function () {
                return e['default']
              }
            : function () {
                return e
              }
        return n.d(t, 'a', t), t
      }),
      (n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
      }),
      (n.p = ''),
      n((n.s = '112a'))
    )
  })({
    '05fd': function (e, t, n) {
      e.exports = n('baa7')('native-function-to-string', Function.toString)
    },
    '065d': function (e, t, n) {
      var r = n('bb8b'),
        i = n('5edc')
      e.exports = n('26df')
        ? function (e, t, n) {
            return r.f(e, t, i(1, n))
          }
        : function (e, t, n) {
            return (e[t] = n), e
          }
    },
    '0926': function (e, t) {
      e.exports = function (e) {
        try {
          return !!e()
        } catch (t) {
          return !0
        }
      }
    },
    '0b34': function (e, t) {
      var n = (e.exports =
        'undefined' != typeof window && window.Math == Math
          ? window
          : 'undefined' != typeof self && self.Math == Math
          ? self
          : Function('return this')())
      'number' == typeof __g && (__g = n)
    },
    '112a': function (e, t, n) {
      'use strict'
      var r
      ;(n.r(t), 'undefined' !== typeof window) &&
        (n('e67d'),
        (r = window.document.currentScript) &&
          (r = r.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)) &&
          (n.p = r[1]))
      n('a450')
      var i = function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t
          return n('div', { attrs: { id: e.playerId } })
        },
        o = []
      function a(e) {
        return (
          (a =
            'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
              ? function (e) {
                  return typeof e
                }
              : function (e) {
                  return e &&
                    'function' === typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e
                }),
          a(e)
        )
      }
      n('4057')
      var s = {
          name: 'VueAliplayerV2',
          props: {
            options: {
              required: !1,
              type: [Object],
              default: function () {
                return null
              },
            },
            source: { required: !1, type: [String], default: null },
            cssLink: {
              required: !1,
              type: [String],
              default:
                '/dgiot_dashboard/public/assets/aliplayer-min.css',
            },
            scriptSrc: {
              required: !1,
              type: [String],
              default:
                '/dgiot_dashboard/public/assets/js/aliplayer-min.js',
            },
          },
          data: function () {
            return {
              player: null,
              playerId: 'player-'.concat(
                Math.random().toString(36).substr(2).toLocaleUpperCase()
              ),
              config: { id: null, width: '100%', autoplay: !0 },
              events: [
                'ready',
                'play',
                'pause',
                'canplay',
                'playing',
                'ended',
                'liveStreamStop',
                'onM3u8Retry',
                'hideBar',
                'showBar',
                'waiting',
                'timeupdate',
                'snapshoted',
                'requestFullScreen',
                'cancelFullScreen',
                'error',
                'startSeek',
                'completeSeek',
              ],
            }
          },
          watch: {
            source: function () {
              this.init()
            },
            options: {
              handler: function () {
                this.init()
              },
              deep: !0,
            },
          },
          mounted: function () {
            var e = this
            this.$nextTick(function () {
              e.init()
            })
          },
          updated: function () {
            var e = this
            this.$nextTick(function () {
              e.init()
            })
          },
          methods: {
            init: function () {
              var e = this,
                t = 'app__aliplayer-min-css',
                n = 'app__aliplayer-min-js',
                r = document.getElementsByTagName('head'),
                i = document.getElementsByTagName('html'),
                o = document.getElementById(n),
                a = document.getElementById(t)
              if (!a) {
                var s = document.createElement('link')
                ;(s.type = 'text/css'),
                  (s.rel = 'stylesheet'),
                  (s.href = this.cssLink),
                  (s.id = t),
                  r[0].appendChild(s)
              }
              o
                ? this.initPlayer()
                : ((o = document.createElement('script')),
                  (o.type = 'text/javascript'),
                  (o.id = n),
                  (o.src = this.scriptSrc),
                  i[0].appendChild(o)),
                o.addEventListener('load', function () {
                  e.initPlayer()
                })
            },
            initPlayer: function () {
              var e = this
              if ('undefined' != typeof window.Aliplayer) {
                var t = this.deepCloneObject(this.options)
                if (t) for (var n in t) this.config[n] = t[n]
                this.source && (this.config.source = this.source),
                  (this.config.id = this.playerId),
                  this.player && this.player.dispose(),
                  (this.player = Aliplayer(this.config))
                var r = function (t) {
                  e.player &&
                    e.player.on(e.events[t], function (n) {
                      e.$emit(e.events[t], n)
                    })
                }
                for (var i in this.events) r(i)
              }
            },
            getPlayer: function () {
              return this.player
            },
            play: function () {
              this.player && this.player.play()
            },
            pause: function () {
              this.player && this.player.pause()
            },
            replay: function () {
              this.player && this.player.replay()
            },
            seek: function (e) {
              this.player && this.player.seek(e)
            },
            getCurrentTime: function () {
              return this.player && this.player.getCurrentTime()
            },
            getDuration: function () {
              return this.player && this.player.getDuration()
            },
            getVolume: function () {
              return this.player && this.player.getVolume()
            },
            setVolume: function (e) {
              this.player && this.player.setVolume(e)
            },
            loadByUrl: function (e, t) {
              this.player && this.player.loadByUrl(e, t)
            },
            replayByVidAndPlayAuth: function (e, t) {
              this.player && this.player.replayByVidAndPlayAuth(e, t)
            },
            replayByVidAndAuthInfo: function (e, t, n, r, i, o) {
              this.player &&
                this.player.replayByVidAndAuthInfo(e, t, n, r, i, o)
            },
            setPlayerSize: function (e, t) {
              this.player && this.player.setPlayerSize(e, t)
            },
            setSpeed: function (e) {
              this.player && this.player.setSpeed(e)
            },
            setSanpshotProperties: function (e, t, n) {
              this.player && this.player.setSanpshotProperties(e, t, n)
            },
            requestFullScreen: function () {
              this.player &&
                this.player.fullscreenService &&
                this.player.fullscreenService.requestFullScreen()
            },
            cancelFullScreen: function () {
              this.player &&
                this.player.fullscreenService &&
                this.player.fullscreenService.cancelFullScreen()
            },
            getIsFullScreen: function () {
              return (
                this.player &&
                this.player.fullscreenService &&
                this.player.fullscreenService.getIsFullScreen()
              )
            },
            getStatus: function () {
              return this.player && this.player.getStatus()
            },
            setLiveTimeRange: function (e, t) {
              this.player &&
                this.player.liveShiftSerivce &&
                this.player.liveShiftSerivce.setLiveTimeRange(e, t)
            },
            setRotate: function (e) {
              this.player && this.player.setRotate(e)
            },
            getRotate: function () {
              return this.player && this.player.getRotate()
            },
            setImage: function (e) {
              this.player && this.player.setImage(e)
            },
            dispose: function () {
              this.player && this.player.dispose()
            },
            setCover: function (e) {
              this.player && this.player.setCover(e)
            },
            setProgressMarkers: function (e) {
              this.player && this.player.setProgressMarkers(e)
            },
            setPreviewTime: function (e) {
              this.player && this.player.setPreviewTime(e)
            },
            getPreviewTime: function () {
              return this.player && this.player.getPreviewTime()
            },
            isPreview: function () {
              this.player && this.player.isPreview()
            },
            off: function (e, t) {
              this.player && this.player.off(e, t)
            },
            deepCloneObject: function (e) {
              var t = Array.isArray(e) ? [] : {}
              if (e && 'object' === a(e))
                for (var n in e)
                  e.hasOwnProperty(n) &&
                    (e[n] && 'object' === a(e[n])
                      ? (t[n] = this.deepCloneObject(e[n]))
                      : (t[n] = e[n]))
              return t
            },
          },
          beforeDestroy: function () {
            this.dispose()
          },
        },
        u = s
      function c(e, t, n, r, i, o, a, s) {
        var u,
          c = 'function' === typeof e ? e.options : e
        if (
          (t && ((c.render = t), (c.staticRenderFns = n), (c._compiled = !0)),
          r && (c.functional = !0),
          o && (c._scopeId = 'data-v-' + o),
          a
            ? ((u = function (e) {
                ;(e =
                  e ||
                  (this.$vnode && this.$vnode.ssrContext) ||
                  (this.parent &&
                    this.parent.$vnode &&
                    this.parent.$vnode.ssrContext)),
                  e ||
                    'undefined' === typeof __VUE_SSR_CONTEXT__ ||
                    (e = __VUE_SSR_CONTEXT__),
                  i && i.call(this, e),
                  e && e._registeredComponents && e._registeredComponents.add(a)
              }),
              (c._ssrRegister = u))
            : i &&
              (u = s
                ? function () {
                    i.call(
                      this,
                      (c.functional ? this.parent : this).$root.$options
                        .shadowRoot
                    )
                  }
                : i),
          u)
        )
          if (c.functional) {
            c._injectStyles = u
            var l = c.render
            c.render = function (e, t) {
              return u.call(t), l(e, t)
            }
          } else {
            var f = c.beforeCreate
            c.beforeCreate = f ? [].concat(f, u) : [u]
          }
        return { exports: e, options: c }
      }
      var l = c(u, i, o, !1, null, null, null),
        f = l.exports
      ;(f.install = function (e, t) {
        t && t.cssLink && (f.props.cssLink.default = t.cssLink),
          t && t.scriptSrc && (f.props.scriptSrc.default = t.scriptSrc),
          e.component(f.name, f)
      }),
        (f.Player = f)
      var p = f
      t['default'] = p
    },
    '26df': function (e, t, n) {
      e.exports = !n('0926')(function () {
        return (
          7 !=
          Object.defineProperty({}, 'a', {
            get: function () {
              return 7
            },
          }).a
        )
      })
    },
    '3d8a': function (e, t) {
      e.exports = !1
    },
    4057: function (e, t, n) {
      'use strict'
      n('de49')
      var r = n('a86f'),
        i = n('6bf8'),
        o = n('26df'),
        a = 'toString',
        s = /./[a],
        u = function (e) {
          n('84e8')(RegExp.prototype, a, e, !0)
        }
      n('0926')(function () {
        return '/a/b' != s.call({ source: 'a', flags: 'b' })
      })
        ? u(function () {
            var e = r(this)
            return '/'.concat(
              e.source,
              '/',
              'flags' in e
                ? e.flags
                : !o && e instanceof RegExp
                ? i.call(e)
                : void 0
            )
          })
        : s.name != a &&
          u(function () {
            return s.call(this)
          })
    },
    '4fd4': function (e, t) {
      var n = {}.hasOwnProperty
      e.exports = function (e, t) {
        return n.call(e, t)
      }
    },
    '5d10': function (e, t, n) {
      var r = n('9cff')
      e.exports = function (e, t) {
        if (!r(e)) return e
        var n, i
        if (t && 'function' == typeof (n = e.toString) && !r((i = n.call(e))))
          return i
        if ('function' == typeof (n = e.valueOf) && !r((i = n.call(e))))
          return i
        if (!t && 'function' == typeof (n = e.toString) && !r((i = n.call(e))))
          return i
        throw TypeError("Can't convert object to primitive value")
      }
    },
    '5edc': function (e, t) {
      e.exports = function (e, t) {
        return {
          enumerable: !(1 & e),
          configurable: !(2 & e),
          writable: !(4 & e),
          value: t,
        }
      }
    },
    '6bf8': function (e, t, n) {
      'use strict'
      var r = n('a86f')
      e.exports = function () {
        var e = r(this),
          t = ''
        return (
          e.global && (t += 'g'),
          e.ignoreCase && (t += 'i'),
          e.multiline && (t += 'm'),
          e.unicode && (t += 'u'),
          e.sticky && (t += 'y'),
          t
        )
      }
    },
    '76e3': function (e, t) {
      var n = (e.exports = { version: '2.6.12' })
      'number' == typeof __e && (__e = n)
    },
    '83d3': function (e, t, n) {
      e.exports =
        !n('26df') &&
        !n('0926')(function () {
          return (
            7 !=
            Object.defineProperty(n('e8d7')('div'), 'a', {
              get: function () {
                return 7
              },
            }).a
          )
        })
    },
    '84e8': function (e, t, n) {
      var r = n('0b34'),
        i = n('065d'),
        o = n('4fd4'),
        a = n('d8b3')('src'),
        s = n('05fd'),
        u = 'toString',
        c = ('' + s).split(u)
      ;(n('76e3').inspectSource = function (e) {
        return s.call(e)
      }),
        (e.exports = function (e, t, n, s) {
          var u = 'function' == typeof n
          u && (o(n, 'name') || i(n, 'name', t)),
            e[t] !== n &&
              (u && (o(n, a) || i(n, a, e[t] ? '' + e[t] : c.join(String(t)))),
              e === r
                ? (e[t] = n)
                : s
                ? e[t]
                  ? (e[t] = n)
                  : i(e, t, n)
                : (delete e[t], i(e, t, n)))
        })(Function.prototype, u, function () {
          return ('function' == typeof this && this[a]) || s.call(this)
        })
    },
    '9cff': function (e, t) {
      e.exports = function (e) {
        return 'object' === typeof e ? null !== e : 'function' === typeof e
      }
    },
    a450: function (e, t, n) {
      var r = n('bb8b').f,
        i = Function.prototype,
        o = /^\s*function ([^ (]*)/,
        a = 'name'
      a in i ||
        (n('26df') &&
          r(i, a, {
            configurable: !0,
            get: function () {
              try {
                return ('' + this).match(o)[1]
              } catch (e) {
                return ''
              }
            },
          }))
    },
    a86f: function (e, t, n) {
      var r = n('9cff')
      e.exports = function (e) {
        if (!r(e)) throw TypeError(e + ' is not an object!')
        return e
      }
    },
    baa7: function (e, t, n) {
      var r = n('76e3'),
        i = n('0b34'),
        o = '__core-js_shared__',
        a = i[o] || (i[o] = {})
      ;(e.exports = function (e, t) {
        return a[e] || (a[e] = void 0 !== t ? t : {})
      })('versions', []).push({
        version: r.version,
        mode: n('3d8a') ? 'pure' : 'global',
        copyright: '© 2020 Denis Pushkarev (zloirock.ru)',
      })
    },
    bb8b: function (e, t, n) {
      var r = n('a86f'),
        i = n('83d3'),
        o = n('5d10'),
        a = Object.defineProperty
      t.f = n('26df')
        ? Object.defineProperty
        : function (e, t, n) {
            if ((r(e), (t = o(t, !0)), r(n), i))
              try {
                return a(e, t, n)
              } catch (s) {}
            if ('get' in n || 'set' in n)
              throw TypeError('Accessors not supported!')
            return 'value' in n && (e[t] = n.value), e
          }
    },
    d8b3: function (e, t) {
      var n = 0,
        r = Math.random()
      e.exports = function (e) {
        return 'Symbol('.concat(
          void 0 === e ? '' : e,
          ')_',
          (++n + r).toString(36)
        )
      }
    },
    de49: function (e, t, n) {
      n('26df') &&
        'g' != /./g.flags &&
        n('bb8b').f(RegExp.prototype, 'flags', {
          configurable: !0,
          get: n('6bf8'),
        })
    },
    e67d: function (e, t) {
      ;(function (e) {
        var t = 'currentScript',
          n = e.getElementsByTagName('script')
        t in e ||
          Object.defineProperty(e, t, {
            get: function () {
              try {
                throw new Error()
              } catch (r) {
                var e,
                  t = (/.*at [^\(]*\((.*):.+:.+\)$/gi.exec(r.stack) || [!1])[1]
                for (e in n)
                  if (n[e].src == t || 'interactive' == n[e].readyState)
                    return n[e]
                return null
              }
            },
          })
      })(document)
    },
    e8d7: function (e, t, n) {
      var r = n('9cff'),
        i = n('0b34').document,
        o = r(i) && r(i.createElement)
      e.exports = function (e) {
        return o ? i.createElement(e) : {}
      }
    },
  })
})
//# sourceMappingURL=vue-aliplayer-v2.umd.min.js.map
