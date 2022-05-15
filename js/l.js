/**
 * crisp-client
 * @version v2.7.0 019b3e9
 * @author Crisp IM SAS
 * @date 5/6/2022
 */
(function () {
  try {
    var t =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              "function" == typeof Symbol &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          };
    (i.prototype.init = function () {
      var i,
        n,
        s = this,
        r = "init";
      try {
        this.n &&
          !0 !== this.s &&
          ((this.s = !0),
          ((i = document.createElement("div")).id = "crisp-loader"),
          document.getElementsByTagName("body")[0].appendChild(i),
          (n = function () {
            return (
              "none" === window.getComputedStyle(i).getPropertyValue("display")
            );
          }),
          (function t() {
            setTimeout(function () {
              (s.f -= s.y),
                void 0 !== window[s.x] &&
                "function" == typeof window[s.x].__init &&
                !0 === n()
                  ? (s.$.info(s.ns + "." + r, "Dependencies loaded"),
                    i.parentNode.removeChild(i),
                    window[s.x].__init({
                      dollar_crisp: window[s.x],
                      project_name: s.on,
                      url_go: s.fn,
                      url_image: s._n,
                      url_game: s.fs,
                      url_relay_client: s.ms,
                      url_relay_stream: s.ws,
                      url_website: s._e,
                      url_assets: s.io,
                      rtc_ice: s.do,
                      client_environment: s._a,
                      client_revision: s.Pp,
                      website_domain: s.Np,
                      website_id: s.n,
                      token_id: s.Kp,
                      cookie_expire: s.Sd,
                      cookie_domain: s.Gp,
                      page_url: s.Lp,
                      page_domain: s.Yp,
                      browser_useragent: s.Xp,
                      browser_timezone: s.Jp,
                      browser_capabilities: s.Wp,
                      browser_locales: s.Hp,
                      ready_trigger: s.Qp,
                      runtime_configuration: s.Vp,
                      reset_handler: function () {
                        s.reset();
                      },
                    }))
                  : 0 < s.f
                  ? t()
                  : s.$.error(s.ns + "." + r, "Could not load dependencies");
            }, s.y);
          })());
      } catch (t) {}
    }),
      (i.prototype.reset = function () {
        try {
          this.l(), this.init();
        } catch (t) {}
      }),
      (i.prototype.Zp = function () {
        try {
          this._f("dns-prefetch", this.ms),
            this._f("preconnect", this.io),
            this.t_(),
            this.i_();
        } catch (t) {}
      }),
      (i.prototype._f = function (t, i) {
        try {
          var n = document.createElement("link");
          n.setAttribute("href", i),
            n.setAttribute("rel", t),
            n.setAttribute("crossorigin", ""),
            this.n_(n),
            document.getElementsByTagName("head")[0].appendChild(n);
        } catch (t) {}
      }),
      (i.prototype.t_ = function () {
        try {
          var t = document.createElement("script");
          (t.src = [this.io + "/", this.s_ + "/", "client.js?" + this.Pp].join(
            ""
          )),
            (t.type = "text/javascript"),
            (t.async = 1),
            this.n_(t),
            document.getElementsByTagName("head")[0].appendChild(t);
        } catch (t) {}
      }),
      (i.prototype.i_ = function () {
        try {
          var t = this.r_(),
            i = document.createElement("link");
          (i.href = [
            this.io + "/",
            this.e_ + "/",
            "client_" + t + ".css?" + this.Pp,
          ].join("")),
            (i.type = "text/css"),
            (i.rel = "stylesheet"),
            this.n_(i),
            document.getElementsByTagName("head")[0].appendChild(i);
        } catch (t) {}
      }),
      (i.prototype.l = function () {
        this.o_(), this.c_(), this.h_();
      }),
      (i.prototype.o_ = function () {
        (this.s = !1),
          (this.f = this.a_),
          (this.Np = document.domain),
          (this.Lp = document.location.href),
          (this.Yp = document.location.hostname),
          (this.Xp = window.navigator.userAgent),
          (this.Jp = new Date().getTimezoneOffset()),
          (this.Hp = this.u_()),
          "string" == typeof CRISP_WEBSITE_ID && CRISP_WEBSITE_ID
            ? (this.n = CRISP_WEBSITE_ID)
            : (this.n = this.d_()),
          "string" == typeof CRISP_TOKEN_ID && CRISP_TOKEN_ID
            ? (this.Kp = CRISP_TOKEN_ID)
            : "number" == typeof CRISP_TOKEN_ID && CRISP_TOKEN_ID
            ? (this.Kp = CRISP_TOKEN_ID.toString())
            : (this.Kp = null),
          "number" == typeof CRISP_COOKIE_EXPIRE && 0 < CRISP_COOKIE_EXPIRE
            ? (this.Sd = CRISP_COOKIE_EXPIRE)
            : (this.Sd = null),
          "string" == typeof CRISP_COOKIE_DOMAIN && CRISP_COOKIE_DOMAIN
            ? (this.Gp = CRISP_COOKIE_DOMAIN)
            : (this.Gp = null),
          "function" == typeof CRISP_READY_TRIGGER
            ? (this.Qp = CRISP_READY_TRIGGER)
            : (this.Qp = {}),
          "object" ===
          ("undefined" == typeof CRISP_RUNTIME_CONFIG
            ? "undefined"
            : t(CRISP_RUNTIME_CONFIG))
            ? (this.Vp = CRISP_RUNTIME_CONFIG)
            : (this.Vp = {}),
          "object" ===
          ("undefined" == typeof CRISP_INCLUDE_ATTRS
            ? "undefined"
            : t(CRISP_INCLUDE_ATTRS))
            ? (this.p_ = CRISP_INCLUDE_ATTRS)
            : (this.p_ = {});
      }),
      (i.prototype.c_ = function () {
        try {
          (this.Wp = []),
            "function" == typeof window.MutationObserver &&
              "function" == typeof JSON.stringify &&
              this.Wp.push("browsing"),
            (("function" == typeof window.RTCPeerConnection &&
              "object" === t(navigator.mediaDevices) &&
              "https:" === document.location.protocol &&
              (window.innerWidth || 0) >= this.f_ &&
              (window.innerHeight || 0) >= this.l_) ||
              !0 === this.__) &&
              this.Wp.push("call");
        } catch (t) {}
      }),
      (i.prototype.h_ = function () {
        var t;
        try {
          this.Vp.locale &&
            (-1 !== (t = this.Hp.indexOf(this.Vp.locale)) &&
              this.Hp.splice(t, 1),
            this.Hp.unshift(this.Vp.locale));
        } catch (t) {}
      }),
      (i.prototype.n_ = function (t) {
        try {
          for (var i in this.p_)
            this.p_.hasOwnProperty(i) && t.setAttribute(i, this.p_[i]);
        } catch (t) {}
      }),
      (i.prototype.d_ = function () {
        var t = null;
        try {
          for (
            var i = document.querySelectorAll("script[src]"), n = 0;
            n < i.length;
            n++
          ) {
            var s = this.m_.exec(i[n].src);
            if (s && "string" == typeof s[1]) {
              t = s[1];
              break;
            }
          }
        } catch (t) {
        } finally {
          return t;
        }
      }),
      (i.prototype.r_ = function () {
        var t = "default";
        try {
          var i = (navigator.userAgent || "").toLowerCase(),
            n = (navigator.appVersion || "").toLowerCase(),
            s = !1;
          if (
            (!0 !== s &&
              ((-1 === i.indexOf("opera mini/") &&
                -1 === i.indexOf("msie") &&
                -1 === n.indexOf("trident/")) ||
                (s = !0)),
            !0 !== s)
          )
            for (var r = 0; r < this.y_.length; r++) {
              var e = this.y_[r],
                o = i.match(e.pattern);
              if (o && o[1] && parseInt(o[1], 10) <= e.version) {
                s = !0;
                break;
              }
            }
          !0 === s && (t = "legacy");
        } catch (t) {
        } finally {
          return t;
        }
      }),
      (i.prototype.I_ = function () {
        var t = !0;
        try {
          (!(window.innerWidth && window.innerWidth < this.v_) &&
            !0 === navigator.cookieEnabled &&
            !0 !== this.w_(this.Yp) &&
            !0 !== this.C_(this.Xp) &&
            window.WebSocket) ||
            (t = !1);
        } catch (t) {
        } finally {
          return t;
        }
      }),
      (i.prototype.w_ = function () {
        var t =
            0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "",
          i = !1;
        try {
          if (t)
            for (var n = 0; n < this.R_.domains.length; n++) {
              var s = this.R_.domains[n],
                r = "." + s;
              if (t === s || t.slice(-1 * r.length) === r) {
                i = !0;
                break;
              }
            }
        } catch (t) {
        } finally {
          return i;
        }
      }),
      (i.prototype.C_ = function () {
        var t =
            0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "",
          i = !1;
        try {
          if (t)
            for (var n = 0; n < this.R_.agents.length; n++)
              if (-1 !== t.indexOf(this.R_.agents[n])) {
                i = !0;
                break;
              }
        } catch (t) {
        } finally {
          return i;
        }
      }),
      (i.prototype.u_ = function () {
        var t = [];
        try {
          for (
            var i =
                navigator.languages && 0 < navigator.languages.length
                  ? navigator.languages
                  : [navigator.language || navigator.userLanguage],
              n = 0;
            n < i.length;
            n++
          )
            i[n] && t.push(i[n]);
        } catch (t) {
        } finally {
          return t;
        }
      }),
      new i();
  } catch (t) {}
  function i() {
    var t,
      i = this;
    try {
      (this.ns = "CrispLoader"),
        (this.$ = {
          warn: function () {},
          error: function () {},
          info: function () {},
          log: function () {},
          debug: function () {},
        }),
        (this.__ = !1),
        (this.on = "crisp-client"),
        (this.g_ = "client.crisp.chat"),
        (this.S_ = "client.relay.crisp.chat"),
        (this.E_ = "stream.relay.crisp.chat"),
        (this.Pp = "019b3e9"),
        (this._a = "production"),
        (this.b_ = "https:"),
        (this._e = "https://crisp.chat"),
        (this.fn = "https://go.crisp.chat"),
        (this._n = "https://image.crisp.chat"),
        (this.fs = "https://game.crisp.chat"),
        (this.ms = this.b_ + "//" + this.S_),
        (this.ws = this.b_ + "//" + this.E_),
        (this.io = this.b_ + "//" + this.g_),
        (this.do = [
          {
            urls: [
              "stun:stun.media.crisp.chat:3478?transport=udp",
              "stun:stun.media.crisp.chat:3478?transport=tcp",
              "stun:stun.media.crisp.chat:3479?transport=udp",
              "stun:stun.media.crisp.chat:3479?transport=tcp",
            ],
          },
          {
            urls: [
              "turn:turn.media.crisp.chat:3478?transport=udp",
              "turn:turn.media.crisp.chat:3478?transport=tcp",
              "turn:turn.media.crisp.chat:3479?transport=udp",
              "turn:turn.media.crisp.chat:3479?transport=tcp",
              "turns:turn.media.crisp.chat:443?transport=tcp",
            ],
            username: "client_9F9kh",
            credential:
              "DPCEHTqUb7jiJ2mvnzcUmFV4mKK6c8jntUXo4gC8tYCbHTocuy9YJiCxpQ4tmG3p",
          },
        ]),
        (this.R_ = {
          domains: [],
          agents: [
            "Googlebot",
            "Bingbot",
            "Slurp",
            "DuckDuckBot",
            "Baiduspider",
            "YandexBot",
            "GTmetrix",
            "Lighthouse",
            "Acunetix",
          ],
        }),
        (this.s_ = "static/javascripts"),
        (this.e_ = "static/stylesheets"),
        (this.x = "$crisp"),
        (this.y = 100),
        (this.a_ = 3e4),
        (this.P_ = 1e3),
        (this.v_ = 280),
        (this.f_ = 320),
        (this.l_ = 420),
        (this.y_ = [
          { pattern: /edg(?:e)?\/([0-9\.]+)/, version: 79 },
          { pattern: /chrom(?:e|ium)\/([0-9\.]+)/, version: 57 },
          { pattern: /firefox\/([0-9\.]+)/, version: 51 },
          {
            pattern: /version\/([0-9\.]+)(?: mobile\/(?:[^\s]+))? safari\//,
            version: 11,
          },
          { pattern: /android ([0-9\.]+)/, version: 7 },
        ]),
        (this.m_ = /(?:http\:|https\:)?\/\/[^\/]+\/l\/([a-zA-Z0-9\-_]+)\.js/i),
        this.l(),
        !0 === this.I_() &&
          ("interactive" === document.readyState ||
          "complete" === document.readyState
            ? this.init()
            : ((t = document.onreadystatechange || function () {}),
              window.addEventListener("DOMContentLoaded", function () {
                i.init();
              }),
              (document.onreadystatechange = function () {
                "function" == typeof t && t(),
                  ("interactive" !== document.readyState &&
                    "complete" !== document.readyState) ||
                    setTimeout(function () {
                      i.init();
                    }, i.P_);
              })),
          (void 0 !== window[this.x] &&
            "function" == typeof window[this.x].__init) ||
            this.Zp());
    } catch (t) {}
  }
})();
