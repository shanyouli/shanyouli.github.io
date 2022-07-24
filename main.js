(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));

  // ns-hugo:/home/runner/work/ShanyouBlog/ShanyouBlog/themes/virgo/assets/js/libs/jquery.min.js
  var require_jquery_min = __commonJS({
    "ns-hugo:/home/runner/work/ShanyouBlog/ShanyouBlog/themes/virgo/assets/js/libs/jquery.min.js"(exports, module) {
      !function(e, t) {
        "use strict";
        typeof module == "object" && typeof module.exports == "object" ? module.exports = e.document ? t(e, true) : function(e2) {
          if (!e2.document)
            throw new Error("jQuery requires a window with a document");
          return t(e2);
        } : t(e);
      }(typeof window != "undefined" ? window : exports, function(C, e) {
        "use strict";
        var t = [], r = Object.getPrototypeOf, s = t.slice, g = t.flat ? function(e2) {
          return t.flat.call(e2);
        } : function(e2) {
          return t.concat.apply([], e2);
        }, u = t.push, i = t.indexOf, n = {}, o = n.toString, v = n.hasOwnProperty, a = v.toString, l = a.call(Object), y = {}, m = function(e2) {
          return typeof e2 == "function" && typeof e2.nodeType != "number" && typeof e2.item != "function";
        }, x = function(e2) {
          return e2 != null && e2 === e2.window;
        }, E = C.document, c = { type: true, src: true, nonce: true, noModule: true };
        function b(e2, t2, n2) {
          var r2, i2, o2 = (n2 = n2 || E).createElement("script");
          if (o2.text = e2, t2)
            for (r2 in c)
              (i2 = t2[r2] || t2.getAttribute && t2.getAttribute(r2)) && o2.setAttribute(r2, i2);
          n2.head.appendChild(o2).parentNode.removeChild(o2);
        }
        function w(e2) {
          return e2 == null ? e2 + "" : typeof e2 == "object" || typeof e2 == "function" ? n[o.call(e2)] || "object" : typeof e2;
        }
        var f = "3.6.0", S = function(e2, t2) {
          return new S.fn.init(e2, t2);
        };
        function p(e2) {
          var t2 = !!e2 && "length" in e2 && e2.length, n2 = w(e2);
          return !m(e2) && !x(e2) && (n2 === "array" || t2 === 0 || typeof t2 == "number" && 0 < t2 && t2 - 1 in e2);
        }
        S.fn = S.prototype = { jquery: f, constructor: S, length: 0, toArray: function() {
          return s.call(this);
        }, get: function(e2) {
          return e2 == null ? s.call(this) : e2 < 0 ? this[e2 + this.length] : this[e2];
        }, pushStack: function(e2) {
          var t2 = S.merge(this.constructor(), e2);
          return t2.prevObject = this, t2;
        }, each: function(e2) {
          return S.each(this, e2);
        }, map: function(n2) {
          return this.pushStack(S.map(this, function(e2, t2) {
            return n2.call(e2, t2, e2);
          }));
        }, slice: function() {
          return this.pushStack(s.apply(this, arguments));
        }, first: function() {
          return this.eq(0);
        }, last: function() {
          return this.eq(-1);
        }, even: function() {
          return this.pushStack(S.grep(this, function(e2, t2) {
            return (t2 + 1) % 2;
          }));
        }, odd: function() {
          return this.pushStack(S.grep(this, function(e2, t2) {
            return t2 % 2;
          }));
        }, eq: function(e2) {
          var t2 = this.length, n2 = +e2 + (e2 < 0 ? t2 : 0);
          return this.pushStack(0 <= n2 && n2 < t2 ? [this[n2]] : []);
        }, end: function() {
          return this.prevObject || this.constructor();
        }, push: u, sort: t.sort, splice: t.splice }, S.extend = S.fn.extend = function() {
          var e2, t2, n2, r2, i2, o2, a2 = arguments[0] || {}, s2 = 1, u2 = arguments.length, l2 = false;
          for (typeof a2 == "boolean" && (l2 = a2, a2 = arguments[s2] || {}, s2++), typeof a2 == "object" || m(a2) || (a2 = {}), s2 === u2 && (a2 = this, s2--); s2 < u2; s2++)
            if ((e2 = arguments[s2]) != null)
              for (t2 in e2)
                r2 = e2[t2], t2 !== "__proto__" && a2 !== r2 && (l2 && r2 && (S.isPlainObject(r2) || (i2 = Array.isArray(r2))) ? (n2 = a2[t2], o2 = i2 && !Array.isArray(n2) ? [] : i2 || S.isPlainObject(n2) ? n2 : {}, i2 = false, a2[t2] = S.extend(l2, o2, r2)) : r2 !== void 0 && (a2[t2] = r2));
          return a2;
        }, S.extend({ expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""), isReady: true, error: function(e2) {
          throw new Error(e2);
        }, noop: function() {
        }, isPlainObject: function(e2) {
          var t2, n2;
          return !(!e2 || o.call(e2) !== "[object Object]") && (!(t2 = r(e2)) || typeof (n2 = v.call(t2, "constructor") && t2.constructor) == "function" && a.call(n2) === l);
        }, isEmptyObject: function(e2) {
          var t2;
          for (t2 in e2)
            return false;
          return true;
        }, globalEval: function(e2, t2, n2) {
          b(e2, { nonce: t2 && t2.nonce }, n2);
        }, each: function(e2, t2) {
          var n2, r2 = 0;
          if (p(e2)) {
            for (n2 = e2.length; r2 < n2; r2++)
              if (t2.call(e2[r2], r2, e2[r2]) === false)
                break;
          } else
            for (r2 in e2)
              if (t2.call(e2[r2], r2, e2[r2]) === false)
                break;
          return e2;
        }, makeArray: function(e2, t2) {
          var n2 = t2 || [];
          return e2 != null && (p(Object(e2)) ? S.merge(n2, typeof e2 == "string" ? [e2] : e2) : u.call(n2, e2)), n2;
        }, inArray: function(e2, t2, n2) {
          return t2 == null ? -1 : i.call(t2, e2, n2);
        }, merge: function(e2, t2) {
          for (var n2 = +t2.length, r2 = 0, i2 = e2.length; r2 < n2; r2++)
            e2[i2++] = t2[r2];
          return e2.length = i2, e2;
        }, grep: function(e2, t2, n2) {
          for (var r2 = [], i2 = 0, o2 = e2.length, a2 = !n2; i2 < o2; i2++)
            !t2(e2[i2], i2) !== a2 && r2.push(e2[i2]);
          return r2;
        }, map: function(e2, t2, n2) {
          var r2, i2, o2 = 0, a2 = [];
          if (p(e2))
            for (r2 = e2.length; o2 < r2; o2++)
              (i2 = t2(e2[o2], o2, n2)) != null && a2.push(i2);
          else
            for (o2 in e2)
              (i2 = t2(e2[o2], o2, n2)) != null && a2.push(i2);
          return g(a2);
        }, guid: 1, support: y }), typeof Symbol == "function" && (S.fn[Symbol.iterator] = t[Symbol.iterator]), S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e2, t2) {
          n["[object " + t2 + "]"] = t2.toLowerCase();
        });
        var d = function(n2) {
          var e2, d2, b2, o2, i2, h2, f2, g2, w2, u2, l2, T2, C2, a2, E2, v2, s2, c2, y2, S2 = "sizzle" + 1 * new Date(), p2 = n2.document, k2 = 0, r2 = 0, m2 = ue2(), x2 = ue2(), A2 = ue2(), N2 = ue2(), j2 = function(e3, t3) {
            return e3 === t3 && (l2 = true), 0;
          }, D2 = {}.hasOwnProperty, t2 = [], q2 = t2.pop, L2 = t2.push, H2 = t2.push, O2 = t2.slice, P2 = function(e3, t3) {
            for (var n3 = 0, r3 = e3.length; n3 < r3; n3++)
              if (e3[n3] === t3)
                return n3;
            return -1;
          }, R2 = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", M2 = "[\\x20\\t\\r\\n\\f]", I2 = "(?:\\\\[\\da-fA-F]{1,6}" + M2 + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", W2 = "\\[" + M2 + "*(" + I2 + ")(?:" + M2 + "*([*^$|!~]?=)" + M2 + `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` + I2 + "))|)" + M2 + "*\\]", F2 = ":(" + I2 + `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` + W2 + ")*)|.*)\\)|)", B2 = new RegExp(M2 + "+", "g"), $13 = new RegExp("^" + M2 + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M2 + "+$", "g"), _2 = new RegExp("^" + M2 + "*," + M2 + "*"), z2 = new RegExp("^" + M2 + "*([>+~]|" + M2 + ")" + M2 + "*"), U2 = new RegExp(M2 + "|>"), X2 = new RegExp(F2), V2 = new RegExp("^" + I2 + "$"), G2 = { ID: new RegExp("^#(" + I2 + ")"), CLASS: new RegExp("^\\.(" + I2 + ")"), TAG: new RegExp("^(" + I2 + "|[*])"), ATTR: new RegExp("^" + W2), PSEUDO: new RegExp("^" + F2), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M2 + "*(even|odd|(([+-]|)(\\d*)n|)" + M2 + "*(?:([+-]|)" + M2 + "*(\\d+)|))" + M2 + "*\\)|)", "i"), bool: new RegExp("^(?:" + R2 + ")$", "i"), needsContext: new RegExp("^" + M2 + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M2 + "*((?:-\\d)?\\d*)" + M2 + "*\\)|)(?=[^-]|$)", "i") }, Y2 = /HTML$/i, Q2 = /^(?:input|select|textarea|button)$/i, J2 = /^h\d$/i, K2 = /^[^{]+\{\s*\[native \w/, Z2 = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ee2 = /[+~]/, te2 = new RegExp("\\\\[\\da-fA-F]{1,6}" + M2 + "?|\\\\([^\\r\\n\\f])", "g"), ne2 = function(e3, t3) {
            var n3 = "0x" + e3.slice(1) - 65536;
            return t3 || (n3 < 0 ? String.fromCharCode(n3 + 65536) : String.fromCharCode(n3 >> 10 | 55296, 1023 & n3 | 56320));
          }, re2 = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ie2 = function(e3, t3) {
            return t3 ? e3 === "\0" ? "\uFFFD" : e3.slice(0, -1) + "\\" + e3.charCodeAt(e3.length - 1).toString(16) + " " : "\\" + e3;
          }, oe2 = function() {
            T2();
          }, ae2 = be2(function(e3) {
            return e3.disabled === true && e3.nodeName.toLowerCase() === "fieldset";
          }, { dir: "parentNode", next: "legend" });
          try {
            H2.apply(t2 = O2.call(p2.childNodes), p2.childNodes), t2[p2.childNodes.length].nodeType;
          } catch (e3) {
            H2 = { apply: t2.length ? function(e4, t3) {
              L2.apply(e4, O2.call(t3));
            } : function(e4, t3) {
              var n3 = e4.length, r3 = 0;
              while (e4[n3++] = t3[r3++])
                ;
              e4.length = n3 - 1;
            } };
          }
          function se2(t3, e3, n3, r3) {
            var i3, o3, a3, s3, u3, l3, c3, f3 = e3 && e3.ownerDocument, p3 = e3 ? e3.nodeType : 9;
            if (n3 = n3 || [], typeof t3 != "string" || !t3 || p3 !== 1 && p3 !== 9 && p3 !== 11)
              return n3;
            if (!r3 && (T2(e3), e3 = e3 || C2, E2)) {
              if (p3 !== 11 && (u3 = Z2.exec(t3)))
                if (i3 = u3[1]) {
                  if (p3 === 9) {
                    if (!(a3 = e3.getElementById(i3)))
                      return n3;
                    if (a3.id === i3)
                      return n3.push(a3), n3;
                  } else if (f3 && (a3 = f3.getElementById(i3)) && y2(e3, a3) && a3.id === i3)
                    return n3.push(a3), n3;
                } else {
                  if (u3[2])
                    return H2.apply(n3, e3.getElementsByTagName(t3)), n3;
                  if ((i3 = u3[3]) && d2.getElementsByClassName && e3.getElementsByClassName)
                    return H2.apply(n3, e3.getElementsByClassName(i3)), n3;
                }
              if (d2.qsa && !N2[t3 + " "] && (!v2 || !v2.test(t3)) && (p3 !== 1 || e3.nodeName.toLowerCase() !== "object")) {
                if (c3 = t3, f3 = e3, p3 === 1 && (U2.test(t3) || z2.test(t3))) {
                  (f3 = ee2.test(t3) && ye2(e3.parentNode) || e3) === e3 && d2.scope || ((s3 = e3.getAttribute("id")) ? s3 = s3.replace(re2, ie2) : e3.setAttribute("id", s3 = S2)), o3 = (l3 = h2(t3)).length;
                  while (o3--)
                    l3[o3] = (s3 ? "#" + s3 : ":scope") + " " + xe2(l3[o3]);
                  c3 = l3.join(",");
                }
                try {
                  return H2.apply(n3, f3.querySelectorAll(c3)), n3;
                } catch (e4) {
                  N2(t3, true);
                } finally {
                  s3 === S2 && e3.removeAttribute("id");
                }
              }
            }
            return g2(t3.replace($13, "$1"), e3, n3, r3);
          }
          function ue2() {
            var r3 = [];
            return function e3(t3, n3) {
              return r3.push(t3 + " ") > b2.cacheLength && delete e3[r3.shift()], e3[t3 + " "] = n3;
            };
          }
          function le2(e3) {
            return e3[S2] = true, e3;
          }
          function ce2(e3) {
            var t3 = C2.createElement("fieldset");
            try {
              return !!e3(t3);
            } catch (e4) {
              return false;
            } finally {
              t3.parentNode && t3.parentNode.removeChild(t3), t3 = null;
            }
          }
          function fe2(e3, t3) {
            var n3 = e3.split("|"), r3 = n3.length;
            while (r3--)
              b2.attrHandle[n3[r3]] = t3;
          }
          function pe2(e3, t3) {
            var n3 = t3 && e3, r3 = n3 && e3.nodeType === 1 && t3.nodeType === 1 && e3.sourceIndex - t3.sourceIndex;
            if (r3)
              return r3;
            if (n3) {
              while (n3 = n3.nextSibling)
                if (n3 === t3)
                  return -1;
            }
            return e3 ? 1 : -1;
          }
          function de2(t3) {
            return function(e3) {
              return e3.nodeName.toLowerCase() === "input" && e3.type === t3;
            };
          }
          function he2(n3) {
            return function(e3) {
              var t3 = e3.nodeName.toLowerCase();
              return (t3 === "input" || t3 === "button") && e3.type === n3;
            };
          }
          function ge2(t3) {
            return function(e3) {
              return "form" in e3 ? e3.parentNode && e3.disabled === false ? "label" in e3 ? "label" in e3.parentNode ? e3.parentNode.disabled === t3 : e3.disabled === t3 : e3.isDisabled === t3 || e3.isDisabled !== !t3 && ae2(e3) === t3 : e3.disabled === t3 : "label" in e3 && e3.disabled === t3;
            };
          }
          function ve2(a3) {
            return le2(function(o3) {
              return o3 = +o3, le2(function(e3, t3) {
                var n3, r3 = a3([], e3.length, o3), i3 = r3.length;
                while (i3--)
                  e3[n3 = r3[i3]] && (e3[n3] = !(t3[n3] = e3[n3]));
              });
            });
          }
          function ye2(e3) {
            return e3 && typeof e3.getElementsByTagName != "undefined" && e3;
          }
          for (e2 in d2 = se2.support = {}, i2 = se2.isXML = function(e3) {
            var t3 = e3 && e3.namespaceURI, n3 = e3 && (e3.ownerDocument || e3).documentElement;
            return !Y2.test(t3 || n3 && n3.nodeName || "HTML");
          }, T2 = se2.setDocument = function(e3) {
            var t3, n3, r3 = e3 ? e3.ownerDocument || e3 : p2;
            return r3 != C2 && r3.nodeType === 9 && r3.documentElement && (a2 = (C2 = r3).documentElement, E2 = !i2(C2), p2 != C2 && (n3 = C2.defaultView) && n3.top !== n3 && (n3.addEventListener ? n3.addEventListener("unload", oe2, false) : n3.attachEvent && n3.attachEvent("onunload", oe2)), d2.scope = ce2(function(e4) {
              return a2.appendChild(e4).appendChild(C2.createElement("div")), typeof e4.querySelectorAll != "undefined" && !e4.querySelectorAll(":scope fieldset div").length;
            }), d2.attributes = ce2(function(e4) {
              return e4.className = "i", !e4.getAttribute("className");
            }), d2.getElementsByTagName = ce2(function(e4) {
              return e4.appendChild(C2.createComment("")), !e4.getElementsByTagName("*").length;
            }), d2.getElementsByClassName = K2.test(C2.getElementsByClassName), d2.getById = ce2(function(e4) {
              return a2.appendChild(e4).id = S2, !C2.getElementsByName || !C2.getElementsByName(S2).length;
            }), d2.getById ? (b2.filter.ID = function(e4) {
              var t4 = e4.replace(te2, ne2);
              return function(e5) {
                return e5.getAttribute("id") === t4;
              };
            }, b2.find.ID = function(e4, t4) {
              if (typeof t4.getElementById != "undefined" && E2) {
                var n4 = t4.getElementById(e4);
                return n4 ? [n4] : [];
              }
            }) : (b2.filter.ID = function(e4) {
              var n4 = e4.replace(te2, ne2);
              return function(e5) {
                var t4 = typeof e5.getAttributeNode != "undefined" && e5.getAttributeNode("id");
                return t4 && t4.value === n4;
              };
            }, b2.find.ID = function(e4, t4) {
              if (typeof t4.getElementById != "undefined" && E2) {
                var n4, r4, i3, o3 = t4.getElementById(e4);
                if (o3) {
                  if ((n4 = o3.getAttributeNode("id")) && n4.value === e4)
                    return [o3];
                  i3 = t4.getElementsByName(e4), r4 = 0;
                  while (o3 = i3[r4++])
                    if ((n4 = o3.getAttributeNode("id")) && n4.value === e4)
                      return [o3];
                }
                return [];
              }
            }), b2.find.TAG = d2.getElementsByTagName ? function(e4, t4) {
              return typeof t4.getElementsByTagName != "undefined" ? t4.getElementsByTagName(e4) : d2.qsa ? t4.querySelectorAll(e4) : void 0;
            } : function(e4, t4) {
              var n4, r4 = [], i3 = 0, o3 = t4.getElementsByTagName(e4);
              if (e4 === "*") {
                while (n4 = o3[i3++])
                  n4.nodeType === 1 && r4.push(n4);
                return r4;
              }
              return o3;
            }, b2.find.CLASS = d2.getElementsByClassName && function(e4, t4) {
              if (typeof t4.getElementsByClassName != "undefined" && E2)
                return t4.getElementsByClassName(e4);
            }, s2 = [], v2 = [], (d2.qsa = K2.test(C2.querySelectorAll)) && (ce2(function(e4) {
              var t4;
              a2.appendChild(e4).innerHTML = "<a id='" + S2 + "'></a><select id='" + S2 + "-\r\\' msallowcapture=''><option selected=''></option></select>", e4.querySelectorAll("[msallowcapture^='']").length && v2.push("[*^$]=" + M2 + `*(?:''|"")`), e4.querySelectorAll("[selected]").length || v2.push("\\[" + M2 + "*(?:value|" + R2 + ")"), e4.querySelectorAll("[id~=" + S2 + "-]").length || v2.push("~="), (t4 = C2.createElement("input")).setAttribute("name", ""), e4.appendChild(t4), e4.querySelectorAll("[name='']").length || v2.push("\\[" + M2 + "*name" + M2 + "*=" + M2 + `*(?:''|"")`), e4.querySelectorAll(":checked").length || v2.push(":checked"), e4.querySelectorAll("a#" + S2 + "+*").length || v2.push(".#.+[+~]"), e4.querySelectorAll("\\\f"), v2.push("[\\r\\n\\f]");
            }), ce2(function(e4) {
              e4.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
              var t4 = C2.createElement("input");
              t4.setAttribute("type", "hidden"), e4.appendChild(t4).setAttribute("name", "D"), e4.querySelectorAll("[name=d]").length && v2.push("name" + M2 + "*[*^$|!~]?="), e4.querySelectorAll(":enabled").length !== 2 && v2.push(":enabled", ":disabled"), a2.appendChild(e4).disabled = true, e4.querySelectorAll(":disabled").length !== 2 && v2.push(":enabled", ":disabled"), e4.querySelectorAll("*,:x"), v2.push(",.*:");
            })), (d2.matchesSelector = K2.test(c2 = a2.matches || a2.webkitMatchesSelector || a2.mozMatchesSelector || a2.oMatchesSelector || a2.msMatchesSelector)) && ce2(function(e4) {
              d2.disconnectedMatch = c2.call(e4, "*"), c2.call(e4, "[s!='']:x"), s2.push("!=", F2);
            }), v2 = v2.length && new RegExp(v2.join("|")), s2 = s2.length && new RegExp(s2.join("|")), t3 = K2.test(a2.compareDocumentPosition), y2 = t3 || K2.test(a2.contains) ? function(e4, t4) {
              var n4 = e4.nodeType === 9 ? e4.documentElement : e4, r4 = t4 && t4.parentNode;
              return e4 === r4 || !(!r4 || r4.nodeType !== 1 || !(n4.contains ? n4.contains(r4) : e4.compareDocumentPosition && 16 & e4.compareDocumentPosition(r4)));
            } : function(e4, t4) {
              if (t4) {
                while (t4 = t4.parentNode)
                  if (t4 === e4)
                    return true;
              }
              return false;
            }, j2 = t3 ? function(e4, t4) {
              if (e4 === t4)
                return l2 = true, 0;
              var n4 = !e4.compareDocumentPosition - !t4.compareDocumentPosition;
              return n4 || (1 & (n4 = (e4.ownerDocument || e4) == (t4.ownerDocument || t4) ? e4.compareDocumentPosition(t4) : 1) || !d2.sortDetached && t4.compareDocumentPosition(e4) === n4 ? e4 == C2 || e4.ownerDocument == p2 && y2(p2, e4) ? -1 : t4 == C2 || t4.ownerDocument == p2 && y2(p2, t4) ? 1 : u2 ? P2(u2, e4) - P2(u2, t4) : 0 : 4 & n4 ? -1 : 1);
            } : function(e4, t4) {
              if (e4 === t4)
                return l2 = true, 0;
              var n4, r4 = 0, i3 = e4.parentNode, o3 = t4.parentNode, a3 = [e4], s3 = [t4];
              if (!i3 || !o3)
                return e4 == C2 ? -1 : t4 == C2 ? 1 : i3 ? -1 : o3 ? 1 : u2 ? P2(u2, e4) - P2(u2, t4) : 0;
              if (i3 === o3)
                return pe2(e4, t4);
              n4 = e4;
              while (n4 = n4.parentNode)
                a3.unshift(n4);
              n4 = t4;
              while (n4 = n4.parentNode)
                s3.unshift(n4);
              while (a3[r4] === s3[r4])
                r4++;
              return r4 ? pe2(a3[r4], s3[r4]) : a3[r4] == p2 ? -1 : s3[r4] == p2 ? 1 : 0;
            }), C2;
          }, se2.matches = function(e3, t3) {
            return se2(e3, null, null, t3);
          }, se2.matchesSelector = function(e3, t3) {
            if (T2(e3), d2.matchesSelector && E2 && !N2[t3 + " "] && (!s2 || !s2.test(t3)) && (!v2 || !v2.test(t3)))
              try {
                var n3 = c2.call(e3, t3);
                if (n3 || d2.disconnectedMatch || e3.document && e3.document.nodeType !== 11)
                  return n3;
              } catch (e4) {
                N2(t3, true);
              }
            return 0 < se2(t3, C2, null, [e3]).length;
          }, se2.contains = function(e3, t3) {
            return (e3.ownerDocument || e3) != C2 && T2(e3), y2(e3, t3);
          }, se2.attr = function(e3, t3) {
            (e3.ownerDocument || e3) != C2 && T2(e3);
            var n3 = b2.attrHandle[t3.toLowerCase()], r3 = n3 && D2.call(b2.attrHandle, t3.toLowerCase()) ? n3(e3, t3, !E2) : void 0;
            return r3 !== void 0 ? r3 : d2.attributes || !E2 ? e3.getAttribute(t3) : (r3 = e3.getAttributeNode(t3)) && r3.specified ? r3.value : null;
          }, se2.escape = function(e3) {
            return (e3 + "").replace(re2, ie2);
          }, se2.error = function(e3) {
            throw new Error("Syntax error, unrecognized expression: " + e3);
          }, se2.uniqueSort = function(e3) {
            var t3, n3 = [], r3 = 0, i3 = 0;
            if (l2 = !d2.detectDuplicates, u2 = !d2.sortStable && e3.slice(0), e3.sort(j2), l2) {
              while (t3 = e3[i3++])
                t3 === e3[i3] && (r3 = n3.push(i3));
              while (r3--)
                e3.splice(n3[r3], 1);
            }
            return u2 = null, e3;
          }, o2 = se2.getText = function(e3) {
            var t3, n3 = "", r3 = 0, i3 = e3.nodeType;
            if (i3) {
              if (i3 === 1 || i3 === 9 || i3 === 11) {
                if (typeof e3.textContent == "string")
                  return e3.textContent;
                for (e3 = e3.firstChild; e3; e3 = e3.nextSibling)
                  n3 += o2(e3);
              } else if (i3 === 3 || i3 === 4)
                return e3.nodeValue;
            } else
              while (t3 = e3[r3++])
                n3 += o2(t3);
            return n3;
          }, (b2 = se2.selectors = { cacheLength: 50, createPseudo: le2, match: G2, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: true }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: true }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function(e3) {
            return e3[1] = e3[1].replace(te2, ne2), e3[3] = (e3[3] || e3[4] || e3[5] || "").replace(te2, ne2), e3[2] === "~=" && (e3[3] = " " + e3[3] + " "), e3.slice(0, 4);
          }, CHILD: function(e3) {
            return e3[1] = e3[1].toLowerCase(), e3[1].slice(0, 3) === "nth" ? (e3[3] || se2.error(e3[0]), e3[4] = +(e3[4] ? e3[5] + (e3[6] || 1) : 2 * (e3[3] === "even" || e3[3] === "odd")), e3[5] = +(e3[7] + e3[8] || e3[3] === "odd")) : e3[3] && se2.error(e3[0]), e3;
          }, PSEUDO: function(e3) {
            var t3, n3 = !e3[6] && e3[2];
            return G2.CHILD.test(e3[0]) ? null : (e3[3] ? e3[2] = e3[4] || e3[5] || "" : n3 && X2.test(n3) && (t3 = h2(n3, true)) && (t3 = n3.indexOf(")", n3.length - t3) - n3.length) && (e3[0] = e3[0].slice(0, t3), e3[2] = n3.slice(0, t3)), e3.slice(0, 3));
          } }, filter: { TAG: function(e3) {
            var t3 = e3.replace(te2, ne2).toLowerCase();
            return e3 === "*" ? function() {
              return true;
            } : function(e4) {
              return e4.nodeName && e4.nodeName.toLowerCase() === t3;
            };
          }, CLASS: function(e3) {
            var t3 = m2[e3 + " "];
            return t3 || (t3 = new RegExp("(^|" + M2 + ")" + e3 + "(" + M2 + "|$)")) && m2(e3, function(e4) {
              return t3.test(typeof e4.className == "string" && e4.className || typeof e4.getAttribute != "undefined" && e4.getAttribute("class") || "");
            });
          }, ATTR: function(n3, r3, i3) {
            return function(e3) {
              var t3 = se2.attr(e3, n3);
              return t3 == null ? r3 === "!=" : !r3 || (t3 += "", r3 === "=" ? t3 === i3 : r3 === "!=" ? t3 !== i3 : r3 === "^=" ? i3 && t3.indexOf(i3) === 0 : r3 === "*=" ? i3 && -1 < t3.indexOf(i3) : r3 === "$=" ? i3 && t3.slice(-i3.length) === i3 : r3 === "~=" ? -1 < (" " + t3.replace(B2, " ") + " ").indexOf(i3) : r3 === "|=" && (t3 === i3 || t3.slice(0, i3.length + 1) === i3 + "-"));
            };
          }, CHILD: function(h3, e3, t3, g3, v3) {
            var y3 = h3.slice(0, 3) !== "nth", m3 = h3.slice(-4) !== "last", x3 = e3 === "of-type";
            return g3 === 1 && v3 === 0 ? function(e4) {
              return !!e4.parentNode;
            } : function(e4, t4, n3) {
              var r3, i3, o3, a3, s3, u3, l3 = y3 !== m3 ? "nextSibling" : "previousSibling", c3 = e4.parentNode, f3 = x3 && e4.nodeName.toLowerCase(), p3 = !n3 && !x3, d3 = false;
              if (c3) {
                if (y3) {
                  while (l3) {
                    a3 = e4;
                    while (a3 = a3[l3])
                      if (x3 ? a3.nodeName.toLowerCase() === f3 : a3.nodeType === 1)
                        return false;
                    u3 = l3 = h3 === "only" && !u3 && "nextSibling";
                  }
                  return true;
                }
                if (u3 = [m3 ? c3.firstChild : c3.lastChild], m3 && p3) {
                  d3 = (s3 = (r3 = (i3 = (o3 = (a3 = c3)[S2] || (a3[S2] = {}))[a3.uniqueID] || (o3[a3.uniqueID] = {}))[h3] || [])[0] === k2 && r3[1]) && r3[2], a3 = s3 && c3.childNodes[s3];
                  while (a3 = ++s3 && a3 && a3[l3] || (d3 = s3 = 0) || u3.pop())
                    if (a3.nodeType === 1 && ++d3 && a3 === e4) {
                      i3[h3] = [k2, s3, d3];
                      break;
                    }
                } else if (p3 && (d3 = s3 = (r3 = (i3 = (o3 = (a3 = e4)[S2] || (a3[S2] = {}))[a3.uniqueID] || (o3[a3.uniqueID] = {}))[h3] || [])[0] === k2 && r3[1]), d3 === false) {
                  while (a3 = ++s3 && a3 && a3[l3] || (d3 = s3 = 0) || u3.pop())
                    if ((x3 ? a3.nodeName.toLowerCase() === f3 : a3.nodeType === 1) && ++d3 && (p3 && ((i3 = (o3 = a3[S2] || (a3[S2] = {}))[a3.uniqueID] || (o3[a3.uniqueID] = {}))[h3] = [k2, d3]), a3 === e4))
                      break;
                }
                return (d3 -= v3) === g3 || d3 % g3 == 0 && 0 <= d3 / g3;
              }
            };
          }, PSEUDO: function(e3, o3) {
            var t3, a3 = b2.pseudos[e3] || b2.setFilters[e3.toLowerCase()] || se2.error("unsupported pseudo: " + e3);
            return a3[S2] ? a3(o3) : 1 < a3.length ? (t3 = [e3, e3, "", o3], b2.setFilters.hasOwnProperty(e3.toLowerCase()) ? le2(function(e4, t4) {
              var n3, r3 = a3(e4, o3), i3 = r3.length;
              while (i3--)
                e4[n3 = P2(e4, r3[i3])] = !(t4[n3] = r3[i3]);
            }) : function(e4) {
              return a3(e4, 0, t3);
            }) : a3;
          } }, pseudos: { not: le2(function(e3) {
            var r3 = [], i3 = [], s3 = f2(e3.replace($13, "$1"));
            return s3[S2] ? le2(function(e4, t3, n3, r4) {
              var i4, o3 = s3(e4, null, r4, []), a3 = e4.length;
              while (a3--)
                (i4 = o3[a3]) && (e4[a3] = !(t3[a3] = i4));
            }) : function(e4, t3, n3) {
              return r3[0] = e4, s3(r3, null, n3, i3), r3[0] = null, !i3.pop();
            };
          }), has: le2(function(t3) {
            return function(e3) {
              return 0 < se2(t3, e3).length;
            };
          }), contains: le2(function(t3) {
            return t3 = t3.replace(te2, ne2), function(e3) {
              return -1 < (e3.textContent || o2(e3)).indexOf(t3);
            };
          }), lang: le2(function(n3) {
            return V2.test(n3 || "") || se2.error("unsupported lang: " + n3), n3 = n3.replace(te2, ne2).toLowerCase(), function(e3) {
              var t3;
              do {
                if (t3 = E2 ? e3.lang : e3.getAttribute("xml:lang") || e3.getAttribute("lang"))
                  return (t3 = t3.toLowerCase()) === n3 || t3.indexOf(n3 + "-") === 0;
              } while ((e3 = e3.parentNode) && e3.nodeType === 1);
              return false;
            };
          }), target: function(e3) {
            var t3 = n2.location && n2.location.hash;
            return t3 && t3.slice(1) === e3.id;
          }, root: function(e3) {
            return e3 === a2;
          }, focus: function(e3) {
            return e3 === C2.activeElement && (!C2.hasFocus || C2.hasFocus()) && !!(e3.type || e3.href || ~e3.tabIndex);
          }, enabled: ge2(false), disabled: ge2(true), checked: function(e3) {
            var t3 = e3.nodeName.toLowerCase();
            return t3 === "input" && !!e3.checked || t3 === "option" && !!e3.selected;
          }, selected: function(e3) {
            return e3.parentNode && e3.parentNode.selectedIndex, e3.selected === true;
          }, empty: function(e3) {
            for (e3 = e3.firstChild; e3; e3 = e3.nextSibling)
              if (e3.nodeType < 6)
                return false;
            return true;
          }, parent: function(e3) {
            return !b2.pseudos.empty(e3);
          }, header: function(e3) {
            return J2.test(e3.nodeName);
          }, input: function(e3) {
            return Q2.test(e3.nodeName);
          }, button: function(e3) {
            var t3 = e3.nodeName.toLowerCase();
            return t3 === "input" && e3.type === "button" || t3 === "button";
          }, text: function(e3) {
            var t3;
            return e3.nodeName.toLowerCase() === "input" && e3.type === "text" && ((t3 = e3.getAttribute("type")) == null || t3.toLowerCase() === "text");
          }, first: ve2(function() {
            return [0];
          }), last: ve2(function(e3, t3) {
            return [t3 - 1];
          }), eq: ve2(function(e3, t3, n3) {
            return [n3 < 0 ? n3 + t3 : n3];
          }), even: ve2(function(e3, t3) {
            for (var n3 = 0; n3 < t3; n3 += 2)
              e3.push(n3);
            return e3;
          }), odd: ve2(function(e3, t3) {
            for (var n3 = 1; n3 < t3; n3 += 2)
              e3.push(n3);
            return e3;
          }), lt: ve2(function(e3, t3, n3) {
            for (var r3 = n3 < 0 ? n3 + t3 : t3 < n3 ? t3 : n3; 0 <= --r3; )
              e3.push(r3);
            return e3;
          }), gt: ve2(function(e3, t3, n3) {
            for (var r3 = n3 < 0 ? n3 + t3 : n3; ++r3 < t3; )
              e3.push(r3);
            return e3;
          }) } }).pseudos.nth = b2.pseudos.eq, { radio: true, checkbox: true, file: true, password: true, image: true })
            b2.pseudos[e2] = de2(e2);
          for (e2 in { submit: true, reset: true })
            b2.pseudos[e2] = he2(e2);
          function me2() {
          }
          function xe2(e3) {
            for (var t3 = 0, n3 = e3.length, r3 = ""; t3 < n3; t3++)
              r3 += e3[t3].value;
            return r3;
          }
          function be2(s3, e3, t3) {
            var u3 = e3.dir, l3 = e3.next, c3 = l3 || u3, f3 = t3 && c3 === "parentNode", p3 = r2++;
            return e3.first ? function(e4, t4, n3) {
              while (e4 = e4[u3])
                if (e4.nodeType === 1 || f3)
                  return s3(e4, t4, n3);
              return false;
            } : function(e4, t4, n3) {
              var r3, i3, o3, a3 = [k2, p3];
              if (n3) {
                while (e4 = e4[u3])
                  if ((e4.nodeType === 1 || f3) && s3(e4, t4, n3))
                    return true;
              } else
                while (e4 = e4[u3])
                  if (e4.nodeType === 1 || f3)
                    if (i3 = (o3 = e4[S2] || (e4[S2] = {}))[e4.uniqueID] || (o3[e4.uniqueID] = {}), l3 && l3 === e4.nodeName.toLowerCase())
                      e4 = e4[u3] || e4;
                    else {
                      if ((r3 = i3[c3]) && r3[0] === k2 && r3[1] === p3)
                        return a3[2] = r3[2];
                      if ((i3[c3] = a3)[2] = s3(e4, t4, n3))
                        return true;
                    }
              return false;
            };
          }
          function we2(i3) {
            return 1 < i3.length ? function(e3, t3, n3) {
              var r3 = i3.length;
              while (r3--)
                if (!i3[r3](e3, t3, n3))
                  return false;
              return true;
            } : i3[0];
          }
          function Te2(e3, t3, n3, r3, i3) {
            for (var o3, a3 = [], s3 = 0, u3 = e3.length, l3 = t3 != null; s3 < u3; s3++)
              (o3 = e3[s3]) && (n3 && !n3(o3, r3, i3) || (a3.push(o3), l3 && t3.push(s3)));
            return a3;
          }
          function Ce2(d3, h3, g3, v3, y3, e3) {
            return v3 && !v3[S2] && (v3 = Ce2(v3)), y3 && !y3[S2] && (y3 = Ce2(y3, e3)), le2(function(e4, t3, n3, r3) {
              var i3, o3, a3, s3 = [], u3 = [], l3 = t3.length, c3 = e4 || function(e5, t4, n4) {
                for (var r4 = 0, i4 = t4.length; r4 < i4; r4++)
                  se2(e5, t4[r4], n4);
                return n4;
              }(h3 || "*", n3.nodeType ? [n3] : n3, []), f3 = !d3 || !e4 && h3 ? c3 : Te2(c3, s3, d3, n3, r3), p3 = g3 ? y3 || (e4 ? d3 : l3 || v3) ? [] : t3 : f3;
              if (g3 && g3(f3, p3, n3, r3), v3) {
                i3 = Te2(p3, u3), v3(i3, [], n3, r3), o3 = i3.length;
                while (o3--)
                  (a3 = i3[o3]) && (p3[u3[o3]] = !(f3[u3[o3]] = a3));
              }
              if (e4) {
                if (y3 || d3) {
                  if (y3) {
                    i3 = [], o3 = p3.length;
                    while (o3--)
                      (a3 = p3[o3]) && i3.push(f3[o3] = a3);
                    y3(null, p3 = [], i3, r3);
                  }
                  o3 = p3.length;
                  while (o3--)
                    (a3 = p3[o3]) && -1 < (i3 = y3 ? P2(e4, a3) : s3[o3]) && (e4[i3] = !(t3[i3] = a3));
                }
              } else
                p3 = Te2(p3 === t3 ? p3.splice(l3, p3.length) : p3), y3 ? y3(null, t3, p3, r3) : H2.apply(t3, p3);
            });
          }
          function Ee2(e3) {
            for (var i3, t3, n3, r3 = e3.length, o3 = b2.relative[e3[0].type], a3 = o3 || b2.relative[" "], s3 = o3 ? 1 : 0, u3 = be2(function(e4) {
              return e4 === i3;
            }, a3, true), l3 = be2(function(e4) {
              return -1 < P2(i3, e4);
            }, a3, true), c3 = [function(e4, t4, n4) {
              var r4 = !o3 && (n4 || t4 !== w2) || ((i3 = t4).nodeType ? u3(e4, t4, n4) : l3(e4, t4, n4));
              return i3 = null, r4;
            }]; s3 < r3; s3++)
              if (t3 = b2.relative[e3[s3].type])
                c3 = [be2(we2(c3), t3)];
              else {
                if ((t3 = b2.filter[e3[s3].type].apply(null, e3[s3].matches))[S2]) {
                  for (n3 = ++s3; n3 < r3; n3++)
                    if (b2.relative[e3[n3].type])
                      break;
                  return Ce2(1 < s3 && we2(c3), 1 < s3 && xe2(e3.slice(0, s3 - 1).concat({ value: e3[s3 - 2].type === " " ? "*" : "" })).replace($13, "$1"), t3, s3 < n3 && Ee2(e3.slice(s3, n3)), n3 < r3 && Ee2(e3 = e3.slice(n3)), n3 < r3 && xe2(e3));
                }
                c3.push(t3);
              }
            return we2(c3);
          }
          return me2.prototype = b2.filters = b2.pseudos, b2.setFilters = new me2(), h2 = se2.tokenize = function(e3, t3) {
            var n3, r3, i3, o3, a3, s3, u3, l3 = x2[e3 + " "];
            if (l3)
              return t3 ? 0 : l3.slice(0);
            a3 = e3, s3 = [], u3 = b2.preFilter;
            while (a3) {
              for (o3 in n3 && !(r3 = _2.exec(a3)) || (r3 && (a3 = a3.slice(r3[0].length) || a3), s3.push(i3 = [])), n3 = false, (r3 = z2.exec(a3)) && (n3 = r3.shift(), i3.push({ value: n3, type: r3[0].replace($13, " ") }), a3 = a3.slice(n3.length)), b2.filter)
                !(r3 = G2[o3].exec(a3)) || u3[o3] && !(r3 = u3[o3](r3)) || (n3 = r3.shift(), i3.push({ value: n3, type: o3, matches: r3 }), a3 = a3.slice(n3.length));
              if (!n3)
                break;
            }
            return t3 ? a3.length : a3 ? se2.error(e3) : x2(e3, s3).slice(0);
          }, f2 = se2.compile = function(e3, t3) {
            var n3, v3, y3, m3, x3, r3, i3 = [], o3 = [], a3 = A2[e3 + " "];
            if (!a3) {
              t3 || (t3 = h2(e3)), n3 = t3.length;
              while (n3--)
                (a3 = Ee2(t3[n3]))[S2] ? i3.push(a3) : o3.push(a3);
              (a3 = A2(e3, (v3 = o3, m3 = 0 < (y3 = i3).length, x3 = 0 < v3.length, r3 = function(e4, t4, n4, r4, i4) {
                var o4, a4, s3, u3 = 0, l3 = "0", c3 = e4 && [], f3 = [], p3 = w2, d3 = e4 || x3 && b2.find.TAG("*", i4), h3 = k2 += p3 == null ? 1 : Math.random() || 0.1, g3 = d3.length;
                for (i4 && (w2 = t4 == C2 || t4 || i4); l3 !== g3 && (o4 = d3[l3]) != null; l3++) {
                  if (x3 && o4) {
                    a4 = 0, t4 || o4.ownerDocument == C2 || (T2(o4), n4 = !E2);
                    while (s3 = v3[a4++])
                      if (s3(o4, t4 || C2, n4)) {
                        r4.push(o4);
                        break;
                      }
                    i4 && (k2 = h3);
                  }
                  m3 && ((o4 = !s3 && o4) && u3--, e4 && c3.push(o4));
                }
                if (u3 += l3, m3 && l3 !== u3) {
                  a4 = 0;
                  while (s3 = y3[a4++])
                    s3(c3, f3, t4, n4);
                  if (e4) {
                    if (0 < u3)
                      while (l3--)
                        c3[l3] || f3[l3] || (f3[l3] = q2.call(r4));
                    f3 = Te2(f3);
                  }
                  H2.apply(r4, f3), i4 && !e4 && 0 < f3.length && 1 < u3 + y3.length && se2.uniqueSort(r4);
                }
                return i4 && (k2 = h3, w2 = p3), c3;
              }, m3 ? le2(r3) : r3))).selector = e3;
            }
            return a3;
          }, g2 = se2.select = function(e3, t3, n3, r3) {
            var i3, o3, a3, s3, u3, l3 = typeof e3 == "function" && e3, c3 = !r3 && h2(e3 = l3.selector || e3);
            if (n3 = n3 || [], c3.length === 1) {
              if (2 < (o3 = c3[0] = c3[0].slice(0)).length && (a3 = o3[0]).type === "ID" && t3.nodeType === 9 && E2 && b2.relative[o3[1].type]) {
                if (!(t3 = (b2.find.ID(a3.matches[0].replace(te2, ne2), t3) || [])[0]))
                  return n3;
                l3 && (t3 = t3.parentNode), e3 = e3.slice(o3.shift().value.length);
              }
              i3 = G2.needsContext.test(e3) ? 0 : o3.length;
              while (i3--) {
                if (a3 = o3[i3], b2.relative[s3 = a3.type])
                  break;
                if ((u3 = b2.find[s3]) && (r3 = u3(a3.matches[0].replace(te2, ne2), ee2.test(o3[0].type) && ye2(t3.parentNode) || t3))) {
                  if (o3.splice(i3, 1), !(e3 = r3.length && xe2(o3)))
                    return H2.apply(n3, r3), n3;
                  break;
                }
              }
            }
            return (l3 || f2(e3, c3))(r3, t3, !E2, n3, !t3 || ee2.test(e3) && ye2(t3.parentNode) || t3), n3;
          }, d2.sortStable = S2.split("").sort(j2).join("") === S2, d2.detectDuplicates = !!l2, T2(), d2.sortDetached = ce2(function(e3) {
            return 1 & e3.compareDocumentPosition(C2.createElement("fieldset"));
          }), ce2(function(e3) {
            return e3.innerHTML = "<a href='#'></a>", e3.firstChild.getAttribute("href") === "#";
          }) || fe2("type|href|height|width", function(e3, t3, n3) {
            if (!n3)
              return e3.getAttribute(t3, t3.toLowerCase() === "type" ? 1 : 2);
          }), d2.attributes && ce2(function(e3) {
            return e3.innerHTML = "<input/>", e3.firstChild.setAttribute("value", ""), e3.firstChild.getAttribute("value") === "";
          }) || fe2("value", function(e3, t3, n3) {
            if (!n3 && e3.nodeName.toLowerCase() === "input")
              return e3.defaultValue;
          }), ce2(function(e3) {
            return e3.getAttribute("disabled") == null;
          }) || fe2(R2, function(e3, t3, n3) {
            var r3;
            if (!n3)
              return e3[t3] === true ? t3.toLowerCase() : (r3 = e3.getAttributeNode(t3)) && r3.specified ? r3.value : null;
          }), se2;
        }(C);
        S.find = d, S.expr = d.selectors, S.expr[":"] = S.expr.pseudos, S.uniqueSort = S.unique = d.uniqueSort, S.text = d.getText, S.isXMLDoc = d.isXML, S.contains = d.contains, S.escapeSelector = d.escape;
        var h = function(e2, t2, n2) {
          var r2 = [], i2 = n2 !== void 0;
          while ((e2 = e2[t2]) && e2.nodeType !== 9)
            if (e2.nodeType === 1) {
              if (i2 && S(e2).is(n2))
                break;
              r2.push(e2);
            }
          return r2;
        }, T = function(e2, t2) {
          for (var n2 = []; e2; e2 = e2.nextSibling)
            e2.nodeType === 1 && e2 !== t2 && n2.push(e2);
          return n2;
        }, k = S.expr.match.needsContext;
        function A(e2, t2) {
          return e2.nodeName && e2.nodeName.toLowerCase() === t2.toLowerCase();
        }
        var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
        function j(e2, n2, r2) {
          return m(n2) ? S.grep(e2, function(e3, t2) {
            return !!n2.call(e3, t2, e3) !== r2;
          }) : n2.nodeType ? S.grep(e2, function(e3) {
            return e3 === n2 !== r2;
          }) : typeof n2 != "string" ? S.grep(e2, function(e3) {
            return -1 < i.call(n2, e3) !== r2;
          }) : S.filter(n2, e2, r2);
        }
        S.filter = function(e2, t2, n2) {
          var r2 = t2[0];
          return n2 && (e2 = ":not(" + e2 + ")"), t2.length === 1 && r2.nodeType === 1 ? S.find.matchesSelector(r2, e2) ? [r2] : [] : S.find.matches(e2, S.grep(t2, function(e3) {
            return e3.nodeType === 1;
          }));
        }, S.fn.extend({ find: function(e2) {
          var t2, n2, r2 = this.length, i2 = this;
          if (typeof e2 != "string")
            return this.pushStack(S(e2).filter(function() {
              for (t2 = 0; t2 < r2; t2++)
                if (S.contains(i2[t2], this))
                  return true;
            }));
          for (n2 = this.pushStack([]), t2 = 0; t2 < r2; t2++)
            S.find(e2, i2[t2], n2);
          return 1 < r2 ? S.uniqueSort(n2) : n2;
        }, filter: function(e2) {
          return this.pushStack(j(this, e2 || [], false));
        }, not: function(e2) {
          return this.pushStack(j(this, e2 || [], true));
        }, is: function(e2) {
          return !!j(this, typeof e2 == "string" && k.test(e2) ? S(e2) : e2 || [], false).length;
        } });
        var D, q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
        (S.fn.init = function(e2, t2, n2) {
          var r2, i2;
          if (!e2)
            return this;
          if (n2 = n2 || D, typeof e2 == "string") {
            if (!(r2 = e2[0] === "<" && e2[e2.length - 1] === ">" && 3 <= e2.length ? [null, e2, null] : q.exec(e2)) || !r2[1] && t2)
              return !t2 || t2.jquery ? (t2 || n2).find(e2) : this.constructor(t2).find(e2);
            if (r2[1]) {
              if (t2 = t2 instanceof S ? t2[0] : t2, S.merge(this, S.parseHTML(r2[1], t2 && t2.nodeType ? t2.ownerDocument || t2 : E, true)), N.test(r2[1]) && S.isPlainObject(t2))
                for (r2 in t2)
                  m(this[r2]) ? this[r2](t2[r2]) : this.attr(r2, t2[r2]);
              return this;
            }
            return (i2 = E.getElementById(r2[2])) && (this[0] = i2, this.length = 1), this;
          }
          return e2.nodeType ? (this[0] = e2, this.length = 1, this) : m(e2) ? n2.ready !== void 0 ? n2.ready(e2) : e2(S) : S.makeArray(e2, this);
        }).prototype = S.fn, D = S(E);
        var L = /^(?:parents|prev(?:Until|All))/, H = { children: true, contents: true, next: true, prev: true };
        function O(e2, t2) {
          while ((e2 = e2[t2]) && e2.nodeType !== 1)
            ;
          return e2;
        }
        S.fn.extend({ has: function(e2) {
          var t2 = S(e2, this), n2 = t2.length;
          return this.filter(function() {
            for (var e3 = 0; e3 < n2; e3++)
              if (S.contains(this, t2[e3]))
                return true;
          });
        }, closest: function(e2, t2) {
          var n2, r2 = 0, i2 = this.length, o2 = [], a2 = typeof e2 != "string" && S(e2);
          if (!k.test(e2)) {
            for (; r2 < i2; r2++)
              for (n2 = this[r2]; n2 && n2 !== t2; n2 = n2.parentNode)
                if (n2.nodeType < 11 && (a2 ? -1 < a2.index(n2) : n2.nodeType === 1 && S.find.matchesSelector(n2, e2))) {
                  o2.push(n2);
                  break;
                }
          }
          return this.pushStack(1 < o2.length ? S.uniqueSort(o2) : o2);
        }, index: function(e2) {
          return e2 ? typeof e2 == "string" ? i.call(S(e2), this[0]) : i.call(this, e2.jquery ? e2[0] : e2) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        }, add: function(e2, t2) {
          return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e2, t2))));
        }, addBack: function(e2) {
          return this.add(e2 == null ? this.prevObject : this.prevObject.filter(e2));
        } }), S.each({ parent: function(e2) {
          var t2 = e2.parentNode;
          return t2 && t2.nodeType !== 11 ? t2 : null;
        }, parents: function(e2) {
          return h(e2, "parentNode");
        }, parentsUntil: function(e2, t2, n2) {
          return h(e2, "parentNode", n2);
        }, next: function(e2) {
          return O(e2, "nextSibling");
        }, prev: function(e2) {
          return O(e2, "previousSibling");
        }, nextAll: function(e2) {
          return h(e2, "nextSibling");
        }, prevAll: function(e2) {
          return h(e2, "previousSibling");
        }, nextUntil: function(e2, t2, n2) {
          return h(e2, "nextSibling", n2);
        }, prevUntil: function(e2, t2, n2) {
          return h(e2, "previousSibling", n2);
        }, siblings: function(e2) {
          return T((e2.parentNode || {}).firstChild, e2);
        }, children: function(e2) {
          return T(e2.firstChild);
        }, contents: function(e2) {
          return e2.contentDocument != null && r(e2.contentDocument) ? e2.contentDocument : (A(e2, "template") && (e2 = e2.content || e2), S.merge([], e2.childNodes));
        } }, function(r2, i2) {
          S.fn[r2] = function(e2, t2) {
            var n2 = S.map(this, i2, e2);
            return r2.slice(-5) !== "Until" && (t2 = e2), t2 && typeof t2 == "string" && (n2 = S.filter(t2, n2)), 1 < this.length && (H[r2] || S.uniqueSort(n2), L.test(r2) && n2.reverse()), this.pushStack(n2);
          };
        });
        var P = /[^\x20\t\r\n\f]+/g;
        function R(e2) {
          return e2;
        }
        function M(e2) {
          throw e2;
        }
        function I(e2, t2, n2, r2) {
          var i2;
          try {
            e2 && m(i2 = e2.promise) ? i2.call(e2).done(t2).fail(n2) : e2 && m(i2 = e2.then) ? i2.call(e2, t2, n2) : t2.apply(void 0, [e2].slice(r2));
          } catch (e3) {
            n2.apply(void 0, [e3]);
          }
        }
        S.Callbacks = function(r2) {
          var e2, n2;
          r2 = typeof r2 == "string" ? (e2 = r2, n2 = {}, S.each(e2.match(P) || [], function(e3, t3) {
            n2[t3] = true;
          }), n2) : S.extend({}, r2);
          var i2, t2, o2, a2, s2 = [], u2 = [], l2 = -1, c2 = function() {
            for (a2 = a2 || r2.once, o2 = i2 = true; u2.length; l2 = -1) {
              t2 = u2.shift();
              while (++l2 < s2.length)
                s2[l2].apply(t2[0], t2[1]) === false && r2.stopOnFalse && (l2 = s2.length, t2 = false);
            }
            r2.memory || (t2 = false), i2 = false, a2 && (s2 = t2 ? [] : "");
          }, f2 = { add: function() {
            return s2 && (t2 && !i2 && (l2 = s2.length - 1, u2.push(t2)), function n3(e3) {
              S.each(e3, function(e4, t3) {
                m(t3) ? r2.unique && f2.has(t3) || s2.push(t3) : t3 && t3.length && w(t3) !== "string" && n3(t3);
              });
            }(arguments), t2 && !i2 && c2()), this;
          }, remove: function() {
            return S.each(arguments, function(e3, t3) {
              var n3;
              while (-1 < (n3 = S.inArray(t3, s2, n3)))
                s2.splice(n3, 1), n3 <= l2 && l2--;
            }), this;
          }, has: function(e3) {
            return e3 ? -1 < S.inArray(e3, s2) : 0 < s2.length;
          }, empty: function() {
            return s2 && (s2 = []), this;
          }, disable: function() {
            return a2 = u2 = [], s2 = t2 = "", this;
          }, disabled: function() {
            return !s2;
          }, lock: function() {
            return a2 = u2 = [], t2 || i2 || (s2 = t2 = ""), this;
          }, locked: function() {
            return !!a2;
          }, fireWith: function(e3, t3) {
            return a2 || (t3 = [e3, (t3 = t3 || []).slice ? t3.slice() : t3], u2.push(t3), i2 || c2()), this;
          }, fire: function() {
            return f2.fireWith(this, arguments), this;
          }, fired: function() {
            return !!o2;
          } };
          return f2;
        }, S.extend({ Deferred: function(e2) {
          var o2 = [["notify", "progress", S.Callbacks("memory"), S.Callbacks("memory"), 2], ["resolve", "done", S.Callbacks("once memory"), S.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", S.Callbacks("once memory"), S.Callbacks("once memory"), 1, "rejected"]], i2 = "pending", a2 = { state: function() {
            return i2;
          }, always: function() {
            return s2.done(arguments).fail(arguments), this;
          }, "catch": function(e3) {
            return a2.then(null, e3);
          }, pipe: function() {
            var i3 = arguments;
            return S.Deferred(function(r2) {
              S.each(o2, function(e3, t2) {
                var n2 = m(i3[t2[4]]) && i3[t2[4]];
                s2[t2[1]](function() {
                  var e4 = n2 && n2.apply(this, arguments);
                  e4 && m(e4.promise) ? e4.promise().progress(r2.notify).done(r2.resolve).fail(r2.reject) : r2[t2[0] + "With"](this, n2 ? [e4] : arguments);
                });
              }), i3 = null;
            }).promise();
          }, then: function(t2, n2, r2) {
            var u2 = 0;
            function l2(i3, o3, a3, s3) {
              return function() {
                var n3 = this, r3 = arguments, e3 = function() {
                  var e4, t4;
                  if (!(i3 < u2)) {
                    if ((e4 = a3.apply(n3, r3)) === o3.promise())
                      throw new TypeError("Thenable self-resolution");
                    t4 = e4 && (typeof e4 == "object" || typeof e4 == "function") && e4.then, m(t4) ? s3 ? t4.call(e4, l2(u2, o3, R, s3), l2(u2, o3, M, s3)) : (u2++, t4.call(e4, l2(u2, o3, R, s3), l2(u2, o3, M, s3), l2(u2, o3, R, o3.notifyWith))) : (a3 !== R && (n3 = void 0, r3 = [e4]), (s3 || o3.resolveWith)(n3, r3));
                  }
                }, t3 = s3 ? e3 : function() {
                  try {
                    e3();
                  } catch (e4) {
                    S.Deferred.exceptionHook && S.Deferred.exceptionHook(e4, t3.stackTrace), u2 <= i3 + 1 && (a3 !== M && (n3 = void 0, r3 = [e4]), o3.rejectWith(n3, r3));
                  }
                };
                i3 ? t3() : (S.Deferred.getStackHook && (t3.stackTrace = S.Deferred.getStackHook()), C.setTimeout(t3));
              };
            }
            return S.Deferred(function(e3) {
              o2[0][3].add(l2(0, e3, m(r2) ? r2 : R, e3.notifyWith)), o2[1][3].add(l2(0, e3, m(t2) ? t2 : R)), o2[2][3].add(l2(0, e3, m(n2) ? n2 : M));
            }).promise();
          }, promise: function(e3) {
            return e3 != null ? S.extend(e3, a2) : a2;
          } }, s2 = {};
          return S.each(o2, function(e3, t2) {
            var n2 = t2[2], r2 = t2[5];
            a2[t2[1]] = n2.add, r2 && n2.add(function() {
              i2 = r2;
            }, o2[3 - e3][2].disable, o2[3 - e3][3].disable, o2[0][2].lock, o2[0][3].lock), n2.add(t2[3].fire), s2[t2[0]] = function() {
              return s2[t2[0] + "With"](this === s2 ? void 0 : this, arguments), this;
            }, s2[t2[0] + "With"] = n2.fireWith;
          }), a2.promise(s2), e2 && e2.call(s2, s2), s2;
        }, when: function(e2) {
          var n2 = arguments.length, t2 = n2, r2 = Array(t2), i2 = s.call(arguments), o2 = S.Deferred(), a2 = function(t3) {
            return function(e3) {
              r2[t3] = this, i2[t3] = 1 < arguments.length ? s.call(arguments) : e3, --n2 || o2.resolveWith(r2, i2);
            };
          };
          if (n2 <= 1 && (I(e2, o2.done(a2(t2)).resolve, o2.reject, !n2), o2.state() === "pending" || m(i2[t2] && i2[t2].then)))
            return o2.then();
          while (t2--)
            I(i2[t2], a2(t2), o2.reject);
          return o2.promise();
        } });
        var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        S.Deferred.exceptionHook = function(e2, t2) {
          C.console && C.console.warn && e2 && W.test(e2.name) && C.console.warn("jQuery.Deferred exception: " + e2.message, e2.stack, t2);
        }, S.readyException = function(e2) {
          C.setTimeout(function() {
            throw e2;
          });
        };
        var F = S.Deferred();
        function B() {
          E.removeEventListener("DOMContentLoaded", B), C.removeEventListener("load", B), S.ready();
        }
        S.fn.ready = function(e2) {
          return F.then(e2)["catch"](function(e3) {
            S.readyException(e3);
          }), this;
        }, S.extend({ isReady: false, readyWait: 1, ready: function(e2) {
          (e2 === true ? --S.readyWait : S.isReady) || (S.isReady = true) !== e2 && 0 < --S.readyWait || F.resolveWith(E, [S]);
        } }), S.ready.then = F.then, E.readyState === "complete" || E.readyState !== "loading" && !E.documentElement.doScroll ? C.setTimeout(S.ready) : (E.addEventListener("DOMContentLoaded", B), C.addEventListener("load", B));
        var $12 = function(e2, t2, n2, r2, i2, o2, a2) {
          var s2 = 0, u2 = e2.length, l2 = n2 == null;
          if (w(n2) === "object")
            for (s2 in i2 = true, n2)
              $12(e2, t2, s2, n2[s2], true, o2, a2);
          else if (r2 !== void 0 && (i2 = true, m(r2) || (a2 = true), l2 && (a2 ? (t2.call(e2, r2), t2 = null) : (l2 = t2, t2 = function(e3, t3, n3) {
            return l2.call(S(e3), n3);
          })), t2))
            for (; s2 < u2; s2++)
              t2(e2[s2], n2, a2 ? r2 : r2.call(e2[s2], s2, t2(e2[s2], n2)));
          return i2 ? e2 : l2 ? t2.call(e2) : u2 ? t2(e2[0], n2) : o2;
        }, _ = /^-ms-/, z = /-([a-z])/g;
        function U(e2, t2) {
          return t2.toUpperCase();
        }
        function X(e2) {
          return e2.replace(_, "ms-").replace(z, U);
        }
        var V = function(e2) {
          return e2.nodeType === 1 || e2.nodeType === 9 || !+e2.nodeType;
        };
        function G() {
          this.expando = S.expando + G.uid++;
        }
        G.uid = 1, G.prototype = { cache: function(e2) {
          var t2 = e2[this.expando];
          return t2 || (t2 = {}, V(e2) && (e2.nodeType ? e2[this.expando] = t2 : Object.defineProperty(e2, this.expando, { value: t2, configurable: true }))), t2;
        }, set: function(e2, t2, n2) {
          var r2, i2 = this.cache(e2);
          if (typeof t2 == "string")
            i2[X(t2)] = n2;
          else
            for (r2 in t2)
              i2[X(r2)] = t2[r2];
          return i2;
        }, get: function(e2, t2) {
          return t2 === void 0 ? this.cache(e2) : e2[this.expando] && e2[this.expando][X(t2)];
        }, access: function(e2, t2, n2) {
          return t2 === void 0 || t2 && typeof t2 == "string" && n2 === void 0 ? this.get(e2, t2) : (this.set(e2, t2, n2), n2 !== void 0 ? n2 : t2);
        }, remove: function(e2, t2) {
          var n2, r2 = e2[this.expando];
          if (r2 !== void 0) {
            if (t2 !== void 0) {
              n2 = (t2 = Array.isArray(t2) ? t2.map(X) : (t2 = X(t2)) in r2 ? [t2] : t2.match(P) || []).length;
              while (n2--)
                delete r2[t2[n2]];
            }
            (t2 === void 0 || S.isEmptyObject(r2)) && (e2.nodeType ? e2[this.expando] = void 0 : delete e2[this.expando]);
          }
        }, hasData: function(e2) {
          var t2 = e2[this.expando];
          return t2 !== void 0 && !S.isEmptyObject(t2);
        } };
        var Y = new G(), Q = new G(), J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, K = /[A-Z]/g;
        function Z(e2, t2, n2) {
          var r2, i2;
          if (n2 === void 0 && e2.nodeType === 1)
            if (r2 = "data-" + t2.replace(K, "-$&").toLowerCase(), typeof (n2 = e2.getAttribute(r2)) == "string") {
              try {
                n2 = (i2 = n2) === "true" || i2 !== "false" && (i2 === "null" ? null : i2 === +i2 + "" ? +i2 : J.test(i2) ? JSON.parse(i2) : i2);
              } catch (e3) {
              }
              Q.set(e2, t2, n2);
            } else
              n2 = void 0;
          return n2;
        }
        S.extend({ hasData: function(e2) {
          return Q.hasData(e2) || Y.hasData(e2);
        }, data: function(e2, t2, n2) {
          return Q.access(e2, t2, n2);
        }, removeData: function(e2, t2) {
          Q.remove(e2, t2);
        }, _data: function(e2, t2, n2) {
          return Y.access(e2, t2, n2);
        }, _removeData: function(e2, t2) {
          Y.remove(e2, t2);
        } }), S.fn.extend({ data: function(n2, e2) {
          var t2, r2, i2, o2 = this[0], a2 = o2 && o2.attributes;
          if (n2 === void 0) {
            if (this.length && (i2 = Q.get(o2), o2.nodeType === 1 && !Y.get(o2, "hasDataAttrs"))) {
              t2 = a2.length;
              while (t2--)
                a2[t2] && (r2 = a2[t2].name).indexOf("data-") === 0 && (r2 = X(r2.slice(5)), Z(o2, r2, i2[r2]));
              Y.set(o2, "hasDataAttrs", true);
            }
            return i2;
          }
          return typeof n2 == "object" ? this.each(function() {
            Q.set(this, n2);
          }) : $12(this, function(e3) {
            var t3;
            if (o2 && e3 === void 0)
              return (t3 = Q.get(o2, n2)) !== void 0 ? t3 : (t3 = Z(o2, n2)) !== void 0 ? t3 : void 0;
            this.each(function() {
              Q.set(this, n2, e3);
            });
          }, null, e2, 1 < arguments.length, null, true);
        }, removeData: function(e2) {
          return this.each(function() {
            Q.remove(this, e2);
          });
        } }), S.extend({ queue: function(e2, t2, n2) {
          var r2;
          if (e2)
            return t2 = (t2 || "fx") + "queue", r2 = Y.get(e2, t2), n2 && (!r2 || Array.isArray(n2) ? r2 = Y.access(e2, t2, S.makeArray(n2)) : r2.push(n2)), r2 || [];
        }, dequeue: function(e2, t2) {
          t2 = t2 || "fx";
          var n2 = S.queue(e2, t2), r2 = n2.length, i2 = n2.shift(), o2 = S._queueHooks(e2, t2);
          i2 === "inprogress" && (i2 = n2.shift(), r2--), i2 && (t2 === "fx" && n2.unshift("inprogress"), delete o2.stop, i2.call(e2, function() {
            S.dequeue(e2, t2);
          }, o2)), !r2 && o2 && o2.empty.fire();
        }, _queueHooks: function(e2, t2) {
          var n2 = t2 + "queueHooks";
          return Y.get(e2, n2) || Y.access(e2, n2, { empty: S.Callbacks("once memory").add(function() {
            Y.remove(e2, [t2 + "queue", n2]);
          }) });
        } }), S.fn.extend({ queue: function(t2, n2) {
          var e2 = 2;
          return typeof t2 != "string" && (n2 = t2, t2 = "fx", e2--), arguments.length < e2 ? S.queue(this[0], t2) : n2 === void 0 ? this : this.each(function() {
            var e3 = S.queue(this, t2, n2);
            S._queueHooks(this, t2), t2 === "fx" && e3[0] !== "inprogress" && S.dequeue(this, t2);
          });
        }, dequeue: function(e2) {
          return this.each(function() {
            S.dequeue(this, e2);
          });
        }, clearQueue: function(e2) {
          return this.queue(e2 || "fx", []);
        }, promise: function(e2, t2) {
          var n2, r2 = 1, i2 = S.Deferred(), o2 = this, a2 = this.length, s2 = function() {
            --r2 || i2.resolveWith(o2, [o2]);
          };
          typeof e2 != "string" && (t2 = e2, e2 = void 0), e2 = e2 || "fx";
          while (a2--)
            (n2 = Y.get(o2[a2], e2 + "queueHooks")) && n2.empty && (r2++, n2.empty.add(s2));
          return s2(), i2.promise(t2);
        } });
        var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"), ne = ["Top", "Right", "Bottom", "Left"], re = E.documentElement, ie = function(e2) {
          return S.contains(e2.ownerDocument, e2);
        }, oe = { composed: true };
        re.getRootNode && (ie = function(e2) {
          return S.contains(e2.ownerDocument, e2) || e2.getRootNode(oe) === e2.ownerDocument;
        });
        var ae = function(e2, t2) {
          return (e2 = t2 || e2).style.display === "none" || e2.style.display === "" && ie(e2) && S.css(e2, "display") === "none";
        };
        function se(e2, t2, n2, r2) {
          var i2, o2, a2 = 20, s2 = r2 ? function() {
            return r2.cur();
          } : function() {
            return S.css(e2, t2, "");
          }, u2 = s2(), l2 = n2 && n2[3] || (S.cssNumber[t2] ? "" : "px"), c2 = e2.nodeType && (S.cssNumber[t2] || l2 !== "px" && +u2) && te.exec(S.css(e2, t2));
          if (c2 && c2[3] !== l2) {
            u2 /= 2, l2 = l2 || c2[3], c2 = +u2 || 1;
            while (a2--)
              S.style(e2, t2, c2 + l2), (1 - o2) * (1 - (o2 = s2() / u2 || 0.5)) <= 0 && (a2 = 0), c2 /= o2;
            c2 *= 2, S.style(e2, t2, c2 + l2), n2 = n2 || [];
          }
          return n2 && (c2 = +c2 || +u2 || 0, i2 = n2[1] ? c2 + (n2[1] + 1) * n2[2] : +n2[2], r2 && (r2.unit = l2, r2.start = c2, r2.end = i2)), i2;
        }
        var ue = {};
        function le(e2, t2) {
          for (var n2, r2, i2, o2, a2, s2, u2, l2 = [], c2 = 0, f2 = e2.length; c2 < f2; c2++)
            (r2 = e2[c2]).style && (n2 = r2.style.display, t2 ? (n2 === "none" && (l2[c2] = Y.get(r2, "display") || null, l2[c2] || (r2.style.display = "")), r2.style.display === "" && ae(r2) && (l2[c2] = (u2 = a2 = o2 = void 0, a2 = (i2 = r2).ownerDocument, s2 = i2.nodeName, (u2 = ue[s2]) || (o2 = a2.body.appendChild(a2.createElement(s2)), u2 = S.css(o2, "display"), o2.parentNode.removeChild(o2), u2 === "none" && (u2 = "block"), ue[s2] = u2)))) : n2 !== "none" && (l2[c2] = "none", Y.set(r2, "display", n2)));
          for (c2 = 0; c2 < f2; c2++)
            l2[c2] != null && (e2[c2].style.display = l2[c2]);
          return e2;
        }
        S.fn.extend({ show: function() {
          return le(this, true);
        }, hide: function() {
          return le(this);
        }, toggle: function(e2) {
          return typeof e2 == "boolean" ? e2 ? this.show() : this.hide() : this.each(function() {
            ae(this) ? S(this).show() : S(this).hide();
          });
        } });
        var ce, fe, pe = /^(?:checkbox|radio)$/i, de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, he = /^$|^module$|\/(?:java|ecma)script/i;
        ce = E.createDocumentFragment().appendChild(E.createElement("div")), (fe = E.createElement("input")).setAttribute("type", "radio"), fe.setAttribute("checked", "checked"), fe.setAttribute("name", "t"), ce.appendChild(fe), y.checkClone = ce.cloneNode(true).cloneNode(true).lastChild.checked, ce.innerHTML = "<textarea>x</textarea>", y.noCloneChecked = !!ce.cloneNode(true).lastChild.defaultValue, ce.innerHTML = "<option></option>", y.option = !!ce.lastChild;
        var ge = { thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };
        function ve(e2, t2) {
          var n2;
          return n2 = typeof e2.getElementsByTagName != "undefined" ? e2.getElementsByTagName(t2 || "*") : typeof e2.querySelectorAll != "undefined" ? e2.querySelectorAll(t2 || "*") : [], t2 === void 0 || t2 && A(e2, t2) ? S.merge([e2], n2) : n2;
        }
        function ye(e2, t2) {
          for (var n2 = 0, r2 = e2.length; n2 < r2; n2++)
            Y.set(e2[n2], "globalEval", !t2 || Y.get(t2[n2], "globalEval"));
        }
        ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td, y.option || (ge.optgroup = ge.option = [1, "<select multiple='multiple'>", "</select>"]);
        var me = /<|&#?\w+;/;
        function xe(e2, t2, n2, r2, i2) {
          for (var o2, a2, s2, u2, l2, c2, f2 = t2.createDocumentFragment(), p2 = [], d2 = 0, h2 = e2.length; d2 < h2; d2++)
            if ((o2 = e2[d2]) || o2 === 0)
              if (w(o2) === "object")
                S.merge(p2, o2.nodeType ? [o2] : o2);
              else if (me.test(o2)) {
                a2 = a2 || f2.appendChild(t2.createElement("div")), s2 = (de.exec(o2) || ["", ""])[1].toLowerCase(), u2 = ge[s2] || ge._default, a2.innerHTML = u2[1] + S.htmlPrefilter(o2) + u2[2], c2 = u2[0];
                while (c2--)
                  a2 = a2.lastChild;
                S.merge(p2, a2.childNodes), (a2 = f2.firstChild).textContent = "";
              } else
                p2.push(t2.createTextNode(o2));
          f2.textContent = "", d2 = 0;
          while (o2 = p2[d2++])
            if (r2 && -1 < S.inArray(o2, r2))
              i2 && i2.push(o2);
            else if (l2 = ie(o2), a2 = ve(f2.appendChild(o2), "script"), l2 && ye(a2), n2) {
              c2 = 0;
              while (o2 = a2[c2++])
                he.test(o2.type || "") && n2.push(o2);
            }
          return f2;
        }
        var be = /^([^.]*)(?:\.(.+)|)/;
        function we() {
          return true;
        }
        function Te() {
          return false;
        }
        function Ce(e2, t2) {
          return e2 === function() {
            try {
              return E.activeElement;
            } catch (e3) {
            }
          }() == (t2 === "focus");
        }
        function Ee(e2, t2, n2, r2, i2, o2) {
          var a2, s2;
          if (typeof t2 == "object") {
            for (s2 in typeof n2 != "string" && (r2 = r2 || n2, n2 = void 0), t2)
              Ee(e2, s2, n2, r2, t2[s2], o2);
            return e2;
          }
          if (r2 == null && i2 == null ? (i2 = n2, r2 = n2 = void 0) : i2 == null && (typeof n2 == "string" ? (i2 = r2, r2 = void 0) : (i2 = r2, r2 = n2, n2 = void 0)), i2 === false)
            i2 = Te;
          else if (!i2)
            return e2;
          return o2 === 1 && (a2 = i2, (i2 = function(e3) {
            return S().off(e3), a2.apply(this, arguments);
          }).guid = a2.guid || (a2.guid = S.guid++)), e2.each(function() {
            S.event.add(this, t2, i2, r2, n2);
          });
        }
        function Se(e2, i2, o2) {
          o2 ? (Y.set(e2, i2, false), S.event.add(e2, i2, { namespace: false, handler: function(e3) {
            var t2, n2, r2 = Y.get(this, i2);
            if (1 & e3.isTrigger && this[i2]) {
              if (r2.length)
                (S.event.special[i2] || {}).delegateType && e3.stopPropagation();
              else if (r2 = s.call(arguments), Y.set(this, i2, r2), t2 = o2(this, i2), this[i2](), r2 !== (n2 = Y.get(this, i2)) || t2 ? Y.set(this, i2, false) : n2 = {}, r2 !== n2)
                return e3.stopImmediatePropagation(), e3.preventDefault(), n2 && n2.value;
            } else
              r2.length && (Y.set(this, i2, { value: S.event.trigger(S.extend(r2[0], S.Event.prototype), r2.slice(1), this) }), e3.stopImmediatePropagation());
          } })) : Y.get(e2, i2) === void 0 && S.event.add(e2, i2, we);
        }
        S.event = { global: {}, add: function(t2, e2, n2, r2, i2) {
          var o2, a2, s2, u2, l2, c2, f2, p2, d2, h2, g2, v2 = Y.get(t2);
          if (V(t2)) {
            n2.handler && (n2 = (o2 = n2).handler, i2 = o2.selector), i2 && S.find.matchesSelector(re, i2), n2.guid || (n2.guid = S.guid++), (u2 = v2.events) || (u2 = v2.events = /* @__PURE__ */ Object.create(null)), (a2 = v2.handle) || (a2 = v2.handle = function(e3) {
              return typeof S != "undefined" && S.event.triggered !== e3.type ? S.event.dispatch.apply(t2, arguments) : void 0;
            }), l2 = (e2 = (e2 || "").match(P) || [""]).length;
            while (l2--)
              d2 = g2 = (s2 = be.exec(e2[l2]) || [])[1], h2 = (s2[2] || "").split(".").sort(), d2 && (f2 = S.event.special[d2] || {}, d2 = (i2 ? f2.delegateType : f2.bindType) || d2, f2 = S.event.special[d2] || {}, c2 = S.extend({ type: d2, origType: g2, data: r2, handler: n2, guid: n2.guid, selector: i2, needsContext: i2 && S.expr.match.needsContext.test(i2), namespace: h2.join(".") }, o2), (p2 = u2[d2]) || ((p2 = u2[d2] = []).delegateCount = 0, f2.setup && f2.setup.call(t2, r2, h2, a2) !== false || t2.addEventListener && t2.addEventListener(d2, a2)), f2.add && (f2.add.call(t2, c2), c2.handler.guid || (c2.handler.guid = n2.guid)), i2 ? p2.splice(p2.delegateCount++, 0, c2) : p2.push(c2), S.event.global[d2] = true);
          }
        }, remove: function(e2, t2, n2, r2, i2) {
          var o2, a2, s2, u2, l2, c2, f2, p2, d2, h2, g2, v2 = Y.hasData(e2) && Y.get(e2);
          if (v2 && (u2 = v2.events)) {
            l2 = (t2 = (t2 || "").match(P) || [""]).length;
            while (l2--)
              if (d2 = g2 = (s2 = be.exec(t2[l2]) || [])[1], h2 = (s2[2] || "").split(".").sort(), d2) {
                f2 = S.event.special[d2] || {}, p2 = u2[d2 = (r2 ? f2.delegateType : f2.bindType) || d2] || [], s2 = s2[2] && new RegExp("(^|\\.)" + h2.join("\\.(?:.*\\.|)") + "(\\.|$)"), a2 = o2 = p2.length;
                while (o2--)
                  c2 = p2[o2], !i2 && g2 !== c2.origType || n2 && n2.guid !== c2.guid || s2 && !s2.test(c2.namespace) || r2 && r2 !== c2.selector && (r2 !== "**" || !c2.selector) || (p2.splice(o2, 1), c2.selector && p2.delegateCount--, f2.remove && f2.remove.call(e2, c2));
                a2 && !p2.length && (f2.teardown && f2.teardown.call(e2, h2, v2.handle) !== false || S.removeEvent(e2, d2, v2.handle), delete u2[d2]);
              } else
                for (d2 in u2)
                  S.event.remove(e2, d2 + t2[l2], n2, r2, true);
            S.isEmptyObject(u2) && Y.remove(e2, "handle events");
          }
        }, dispatch: function(e2) {
          var t2, n2, r2, i2, o2, a2, s2 = new Array(arguments.length), u2 = S.event.fix(e2), l2 = (Y.get(this, "events") || /* @__PURE__ */ Object.create(null))[u2.type] || [], c2 = S.event.special[u2.type] || {};
          for (s2[0] = u2, t2 = 1; t2 < arguments.length; t2++)
            s2[t2] = arguments[t2];
          if (u2.delegateTarget = this, !c2.preDispatch || c2.preDispatch.call(this, u2) !== false) {
            a2 = S.event.handlers.call(this, u2, l2), t2 = 0;
            while ((i2 = a2[t2++]) && !u2.isPropagationStopped()) {
              u2.currentTarget = i2.elem, n2 = 0;
              while ((o2 = i2.handlers[n2++]) && !u2.isImmediatePropagationStopped())
                u2.rnamespace && o2.namespace !== false && !u2.rnamespace.test(o2.namespace) || (u2.handleObj = o2, u2.data = o2.data, (r2 = ((S.event.special[o2.origType] || {}).handle || o2.handler).apply(i2.elem, s2)) !== void 0 && (u2.result = r2) === false && (u2.preventDefault(), u2.stopPropagation()));
            }
            return c2.postDispatch && c2.postDispatch.call(this, u2), u2.result;
          }
        }, handlers: function(e2, t2) {
          var n2, r2, i2, o2, a2, s2 = [], u2 = t2.delegateCount, l2 = e2.target;
          if (u2 && l2.nodeType && !(e2.type === "click" && 1 <= e2.button)) {
            for (; l2 !== this; l2 = l2.parentNode || this)
              if (l2.nodeType === 1 && (e2.type !== "click" || l2.disabled !== true)) {
                for (o2 = [], a2 = {}, n2 = 0; n2 < u2; n2++)
                  a2[i2 = (r2 = t2[n2]).selector + " "] === void 0 && (a2[i2] = r2.needsContext ? -1 < S(i2, this).index(l2) : S.find(i2, this, null, [l2]).length), a2[i2] && o2.push(r2);
                o2.length && s2.push({ elem: l2, handlers: o2 });
              }
          }
          return l2 = this, u2 < t2.length && s2.push({ elem: l2, handlers: t2.slice(u2) }), s2;
        }, addProp: function(t2, e2) {
          Object.defineProperty(S.Event.prototype, t2, { enumerable: true, configurable: true, get: m(e2) ? function() {
            if (this.originalEvent)
              return e2(this.originalEvent);
          } : function() {
            if (this.originalEvent)
              return this.originalEvent[t2];
          }, set: function(e3) {
            Object.defineProperty(this, t2, { enumerable: true, configurable: true, writable: true, value: e3 });
          } });
        }, fix: function(e2) {
          return e2[S.expando] ? e2 : new S.Event(e2);
        }, special: { load: { noBubble: true }, click: { setup: function(e2) {
          var t2 = this || e2;
          return pe.test(t2.type) && t2.click && A(t2, "input") && Se(t2, "click", we), false;
        }, trigger: function(e2) {
          var t2 = this || e2;
          return pe.test(t2.type) && t2.click && A(t2, "input") && Se(t2, "click"), true;
        }, _default: function(e2) {
          var t2 = e2.target;
          return pe.test(t2.type) && t2.click && A(t2, "input") && Y.get(t2, "click") || A(t2, "a");
        } }, beforeunload: { postDispatch: function(e2) {
          e2.result !== void 0 && e2.originalEvent && (e2.originalEvent.returnValue = e2.result);
        } } } }, S.removeEvent = function(e2, t2, n2) {
          e2.removeEventListener && e2.removeEventListener(t2, n2);
        }, S.Event = function(e2, t2) {
          if (!(this instanceof S.Event))
            return new S.Event(e2, t2);
          e2 && e2.type ? (this.originalEvent = e2, this.type = e2.type, this.isDefaultPrevented = e2.defaultPrevented || e2.defaultPrevented === void 0 && e2.returnValue === false ? we : Te, this.target = e2.target && e2.target.nodeType === 3 ? e2.target.parentNode : e2.target, this.currentTarget = e2.currentTarget, this.relatedTarget = e2.relatedTarget) : this.type = e2, t2 && S.extend(this, t2), this.timeStamp = e2 && e2.timeStamp || Date.now(), this[S.expando] = true;
        }, S.Event.prototype = { constructor: S.Event, isDefaultPrevented: Te, isPropagationStopped: Te, isImmediatePropagationStopped: Te, isSimulated: false, preventDefault: function() {
          var e2 = this.originalEvent;
          this.isDefaultPrevented = we, e2 && !this.isSimulated && e2.preventDefault();
        }, stopPropagation: function() {
          var e2 = this.originalEvent;
          this.isPropagationStopped = we, e2 && !this.isSimulated && e2.stopPropagation();
        }, stopImmediatePropagation: function() {
          var e2 = this.originalEvent;
          this.isImmediatePropagationStopped = we, e2 && !this.isSimulated && e2.stopImmediatePropagation(), this.stopPropagation();
        } }, S.each({ altKey: true, bubbles: true, cancelable: true, changedTouches: true, ctrlKey: true, detail: true, eventPhase: true, metaKey: true, pageX: true, pageY: true, shiftKey: true, view: true, "char": true, code: true, charCode: true, key: true, keyCode: true, button: true, buttons: true, clientX: true, clientY: true, offsetX: true, offsetY: true, pointerId: true, pointerType: true, screenX: true, screenY: true, targetTouches: true, toElement: true, touches: true, which: true }, S.event.addProp), S.each({ focus: "focusin", blur: "focusout" }, function(e2, t2) {
          S.event.special[e2] = { setup: function() {
            return Se(this, e2, Ce), false;
          }, trigger: function() {
            return Se(this, e2), true;
          }, _default: function() {
            return true;
          }, delegateType: t2 };
        }), S.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function(e2, i2) {
          S.event.special[e2] = { delegateType: i2, bindType: i2, handle: function(e3) {
            var t2, n2 = e3.relatedTarget, r2 = e3.handleObj;
            return n2 && (n2 === this || S.contains(this, n2)) || (e3.type = r2.origType, t2 = r2.handler.apply(this, arguments), e3.type = i2), t2;
          } };
        }), S.fn.extend({ on: function(e2, t2, n2, r2) {
          return Ee(this, e2, t2, n2, r2);
        }, one: function(e2, t2, n2, r2) {
          return Ee(this, e2, t2, n2, r2, 1);
        }, off: function(e2, t2, n2) {
          var r2, i2;
          if (e2 && e2.preventDefault && e2.handleObj)
            return r2 = e2.handleObj, S(e2.delegateTarget).off(r2.namespace ? r2.origType + "." + r2.namespace : r2.origType, r2.selector, r2.handler), this;
          if (typeof e2 == "object") {
            for (i2 in e2)
              this.off(i2, t2, e2[i2]);
            return this;
          }
          return t2 !== false && typeof t2 != "function" || (n2 = t2, t2 = void 0), n2 === false && (n2 = Te), this.each(function() {
            S.event.remove(this, e2, n2, t2);
          });
        } });
        var ke = /<script|<style|<link/i, Ae = /checked\s*(?:[^=]|=\s*.checked.)/i, Ne = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
        function je(e2, t2) {
          return A(e2, "table") && A(t2.nodeType !== 11 ? t2 : t2.firstChild, "tr") && S(e2).children("tbody")[0] || e2;
        }
        function De(e2) {
          return e2.type = (e2.getAttribute("type") !== null) + "/" + e2.type, e2;
        }
        function qe(e2) {
          return (e2.type || "").slice(0, 5) === "true/" ? e2.type = e2.type.slice(5) : e2.removeAttribute("type"), e2;
        }
        function Le(e2, t2) {
          var n2, r2, i2, o2, a2, s2;
          if (t2.nodeType === 1) {
            if (Y.hasData(e2) && (s2 = Y.get(e2).events))
              for (i2 in Y.remove(t2, "handle events"), s2)
                for (n2 = 0, r2 = s2[i2].length; n2 < r2; n2++)
                  S.event.add(t2, i2, s2[i2][n2]);
            Q.hasData(e2) && (o2 = Q.access(e2), a2 = S.extend({}, o2), Q.set(t2, a2));
          }
        }
        function He(n2, r2, i2, o2) {
          r2 = g(r2);
          var e2, t2, a2, s2, u2, l2, c2 = 0, f2 = n2.length, p2 = f2 - 1, d2 = r2[0], h2 = m(d2);
          if (h2 || 1 < f2 && typeof d2 == "string" && !y.checkClone && Ae.test(d2))
            return n2.each(function(e3) {
              var t3 = n2.eq(e3);
              h2 && (r2[0] = d2.call(this, e3, t3.html())), He(t3, r2, i2, o2);
            });
          if (f2 && (t2 = (e2 = xe(r2, n2[0].ownerDocument, false, n2, o2)).firstChild, e2.childNodes.length === 1 && (e2 = t2), t2 || o2)) {
            for (s2 = (a2 = S.map(ve(e2, "script"), De)).length; c2 < f2; c2++)
              u2 = e2, c2 !== p2 && (u2 = S.clone(u2, true, true), s2 && S.merge(a2, ve(u2, "script"))), i2.call(n2[c2], u2, c2);
            if (s2)
              for (l2 = a2[a2.length - 1].ownerDocument, S.map(a2, qe), c2 = 0; c2 < s2; c2++)
                u2 = a2[c2], he.test(u2.type || "") && !Y.access(u2, "globalEval") && S.contains(l2, u2) && (u2.src && (u2.type || "").toLowerCase() !== "module" ? S._evalUrl && !u2.noModule && S._evalUrl(u2.src, { nonce: u2.nonce || u2.getAttribute("nonce") }, l2) : b(u2.textContent.replace(Ne, ""), u2, l2));
          }
          return n2;
        }
        function Oe(e2, t2, n2) {
          for (var r2, i2 = t2 ? S.filter(t2, e2) : e2, o2 = 0; (r2 = i2[o2]) != null; o2++)
            n2 || r2.nodeType !== 1 || S.cleanData(ve(r2)), r2.parentNode && (n2 && ie(r2) && ye(ve(r2, "script")), r2.parentNode.removeChild(r2));
          return e2;
        }
        S.extend({ htmlPrefilter: function(e2) {
          return e2;
        }, clone: function(e2, t2, n2) {
          var r2, i2, o2, a2, s2, u2, l2, c2 = e2.cloneNode(true), f2 = ie(e2);
          if (!(y.noCloneChecked || e2.nodeType !== 1 && e2.nodeType !== 11 || S.isXMLDoc(e2)))
            for (a2 = ve(c2), r2 = 0, i2 = (o2 = ve(e2)).length; r2 < i2; r2++)
              s2 = o2[r2], u2 = a2[r2], void 0, (l2 = u2.nodeName.toLowerCase()) === "input" && pe.test(s2.type) ? u2.checked = s2.checked : l2 !== "input" && l2 !== "textarea" || (u2.defaultValue = s2.defaultValue);
          if (t2)
            if (n2)
              for (o2 = o2 || ve(e2), a2 = a2 || ve(c2), r2 = 0, i2 = o2.length; r2 < i2; r2++)
                Le(o2[r2], a2[r2]);
            else
              Le(e2, c2);
          return 0 < (a2 = ve(c2, "script")).length && ye(a2, !f2 && ve(e2, "script")), c2;
        }, cleanData: function(e2) {
          for (var t2, n2, r2, i2 = S.event.special, o2 = 0; (n2 = e2[o2]) !== void 0; o2++)
            if (V(n2)) {
              if (t2 = n2[Y.expando]) {
                if (t2.events)
                  for (r2 in t2.events)
                    i2[r2] ? S.event.remove(n2, r2) : S.removeEvent(n2, r2, t2.handle);
                n2[Y.expando] = void 0;
              }
              n2[Q.expando] && (n2[Q.expando] = void 0);
            }
        } }), S.fn.extend({ detach: function(e2) {
          return Oe(this, e2, true);
        }, remove: function(e2) {
          return Oe(this, e2);
        }, text: function(e2) {
          return $12(this, function(e3) {
            return e3 === void 0 ? S.text(this) : this.empty().each(function() {
              this.nodeType !== 1 && this.nodeType !== 11 && this.nodeType !== 9 || (this.textContent = e3);
            });
          }, null, e2, arguments.length);
        }, append: function() {
          return He(this, arguments, function(e2) {
            this.nodeType !== 1 && this.nodeType !== 11 && this.nodeType !== 9 || je(this, e2).appendChild(e2);
          });
        }, prepend: function() {
          return He(this, arguments, function(e2) {
            if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
              var t2 = je(this, e2);
              t2.insertBefore(e2, t2.firstChild);
            }
          });
        }, before: function() {
          return He(this, arguments, function(e2) {
            this.parentNode && this.parentNode.insertBefore(e2, this);
          });
        }, after: function() {
          return He(this, arguments, function(e2) {
            this.parentNode && this.parentNode.insertBefore(e2, this.nextSibling);
          });
        }, empty: function() {
          for (var e2, t2 = 0; (e2 = this[t2]) != null; t2++)
            e2.nodeType === 1 && (S.cleanData(ve(e2, false)), e2.textContent = "");
          return this;
        }, clone: function(e2, t2) {
          return e2 = e2 != null && e2, t2 = t2 == null ? e2 : t2, this.map(function() {
            return S.clone(this, e2, t2);
          });
        }, html: function(e2) {
          return $12(this, function(e3) {
            var t2 = this[0] || {}, n2 = 0, r2 = this.length;
            if (e3 === void 0 && t2.nodeType === 1)
              return t2.innerHTML;
            if (typeof e3 == "string" && !ke.test(e3) && !ge[(de.exec(e3) || ["", ""])[1].toLowerCase()]) {
              e3 = S.htmlPrefilter(e3);
              try {
                for (; n2 < r2; n2++)
                  (t2 = this[n2] || {}).nodeType === 1 && (S.cleanData(ve(t2, false)), t2.innerHTML = e3);
                t2 = 0;
              } catch (e4) {
              }
            }
            t2 && this.empty().append(e3);
          }, null, e2, arguments.length);
        }, replaceWith: function() {
          var n2 = [];
          return He(this, arguments, function(e2) {
            var t2 = this.parentNode;
            S.inArray(this, n2) < 0 && (S.cleanData(ve(this)), t2 && t2.replaceChild(e2, this));
          }, n2);
        } }), S.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(e2, a2) {
          S.fn[e2] = function(e3) {
            for (var t2, n2 = [], r2 = S(e3), i2 = r2.length - 1, o2 = 0; o2 <= i2; o2++)
              t2 = o2 === i2 ? this : this.clone(true), S(r2[o2])[a2](t2), u.apply(n2, t2.get());
            return this.pushStack(n2);
          };
        });
        var Pe = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"), Re = function(e2) {
          var t2 = e2.ownerDocument.defaultView;
          return t2 && t2.opener || (t2 = C), t2.getComputedStyle(e2);
        }, Me = function(e2, t2, n2) {
          var r2, i2, o2 = {};
          for (i2 in t2)
            o2[i2] = e2.style[i2], e2.style[i2] = t2[i2];
          for (i2 in r2 = n2.call(e2), t2)
            e2.style[i2] = o2[i2];
          return r2;
        }, Ie = new RegExp(ne.join("|"), "i");
        function We(e2, t2, n2) {
          var r2, i2, o2, a2, s2 = e2.style;
          return (n2 = n2 || Re(e2)) && ((a2 = n2.getPropertyValue(t2) || n2[t2]) !== "" || ie(e2) || (a2 = S.style(e2, t2)), !y.pixelBoxStyles() && Pe.test(a2) && Ie.test(t2) && (r2 = s2.width, i2 = s2.minWidth, o2 = s2.maxWidth, s2.minWidth = s2.maxWidth = s2.width = a2, a2 = n2.width, s2.width = r2, s2.minWidth = i2, s2.maxWidth = o2)), a2 !== void 0 ? a2 + "" : a2;
        }
        function Fe(e2, t2) {
          return { get: function() {
            if (!e2())
              return (this.get = t2).apply(this, arguments);
            delete this.get;
          } };
        }
        !function() {
          function e2() {
            if (l2) {
              u2.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l2.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", re.appendChild(u2).appendChild(l2);
              var e3 = C.getComputedStyle(l2);
              n2 = e3.top !== "1%", s2 = t2(e3.marginLeft) === 12, l2.style.right = "60%", o2 = t2(e3.right) === 36, r2 = t2(e3.width) === 36, l2.style.position = "absolute", i2 = t2(l2.offsetWidth / 3) === 12, re.removeChild(u2), l2 = null;
            }
          }
          function t2(e3) {
            return Math.round(parseFloat(e3));
          }
          var n2, r2, i2, o2, a2, s2, u2 = E.createElement("div"), l2 = E.createElement("div");
          l2.style && (l2.style.backgroundClip = "content-box", l2.cloneNode(true).style.backgroundClip = "", y.clearCloneStyle = l2.style.backgroundClip === "content-box", S.extend(y, { boxSizingReliable: function() {
            return e2(), r2;
          }, pixelBoxStyles: function() {
            return e2(), o2;
          }, pixelPosition: function() {
            return e2(), n2;
          }, reliableMarginLeft: function() {
            return e2(), s2;
          }, scrollboxSize: function() {
            return e2(), i2;
          }, reliableTrDimensions: function() {
            var e3, t3, n3, r3;
            return a2 == null && (e3 = E.createElement("table"), t3 = E.createElement("tr"), n3 = E.createElement("div"), e3.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", t3.style.cssText = "border:1px solid", t3.style.height = "1px", n3.style.height = "9px", n3.style.display = "block", re.appendChild(e3).appendChild(t3).appendChild(n3), r3 = C.getComputedStyle(t3), a2 = parseInt(r3.height, 10) + parseInt(r3.borderTopWidth, 10) + parseInt(r3.borderBottomWidth, 10) === t3.offsetHeight, re.removeChild(e3)), a2;
          } }));
        }();
        var Be = ["Webkit", "Moz", "ms"], $e = E.createElement("div").style, _e = {};
        function ze(e2) {
          var t2 = S.cssProps[e2] || _e[e2];
          return t2 || (e2 in $e ? e2 : _e[e2] = function(e3) {
            var t3 = e3[0].toUpperCase() + e3.slice(1), n2 = Be.length;
            while (n2--)
              if ((e3 = Be[n2] + t3) in $e)
                return e3;
          }(e2) || e2);
        }
        var Ue = /^(none|table(?!-c[ea]).+)/, Xe = /^--/, Ve = { position: "absolute", visibility: "hidden", display: "block" }, Ge = { letterSpacing: "0", fontWeight: "400" };
        function Ye(e2, t2, n2) {
          var r2 = te.exec(t2);
          return r2 ? Math.max(0, r2[2] - (n2 || 0)) + (r2[3] || "px") : t2;
        }
        function Qe(e2, t2, n2, r2, i2, o2) {
          var a2 = t2 === "width" ? 1 : 0, s2 = 0, u2 = 0;
          if (n2 === (r2 ? "border" : "content"))
            return 0;
          for (; a2 < 4; a2 += 2)
            n2 === "margin" && (u2 += S.css(e2, n2 + ne[a2], true, i2)), r2 ? (n2 === "content" && (u2 -= S.css(e2, "padding" + ne[a2], true, i2)), n2 !== "margin" && (u2 -= S.css(e2, "border" + ne[a2] + "Width", true, i2))) : (u2 += S.css(e2, "padding" + ne[a2], true, i2), n2 !== "padding" ? u2 += S.css(e2, "border" + ne[a2] + "Width", true, i2) : s2 += S.css(e2, "border" + ne[a2] + "Width", true, i2));
          return !r2 && 0 <= o2 && (u2 += Math.max(0, Math.ceil(e2["offset" + t2[0].toUpperCase() + t2.slice(1)] - o2 - u2 - s2 - 0.5)) || 0), u2;
        }
        function Je(e2, t2, n2) {
          var r2 = Re(e2), i2 = (!y.boxSizingReliable() || n2) && S.css(e2, "boxSizing", false, r2) === "border-box", o2 = i2, a2 = We(e2, t2, r2), s2 = "offset" + t2[0].toUpperCase() + t2.slice(1);
          if (Pe.test(a2)) {
            if (!n2)
              return a2;
            a2 = "auto";
          }
          return (!y.boxSizingReliable() && i2 || !y.reliableTrDimensions() && A(e2, "tr") || a2 === "auto" || !parseFloat(a2) && S.css(e2, "display", false, r2) === "inline") && e2.getClientRects().length && (i2 = S.css(e2, "boxSizing", false, r2) === "border-box", (o2 = s2 in e2) && (a2 = e2[s2])), (a2 = parseFloat(a2) || 0) + Qe(e2, t2, n2 || (i2 ? "border" : "content"), o2, r2, a2) + "px";
        }
        function Ke(e2, t2, n2, r2, i2) {
          return new Ke.prototype.init(e2, t2, n2, r2, i2);
        }
        S.extend({ cssHooks: { opacity: { get: function(e2, t2) {
          if (t2) {
            var n2 = We(e2, "opacity");
            return n2 === "" ? "1" : n2;
          }
        } } }, cssNumber: { animationIterationCount: true, columnCount: true, fillOpacity: true, flexGrow: true, flexShrink: true, fontWeight: true, gridArea: true, gridColumn: true, gridColumnEnd: true, gridColumnStart: true, gridRow: true, gridRowEnd: true, gridRowStart: true, lineHeight: true, opacity: true, order: true, orphans: true, widows: true, zIndex: true, zoom: true }, cssProps: {}, style: function(e2, t2, n2, r2) {
          if (e2 && e2.nodeType !== 3 && e2.nodeType !== 8 && e2.style) {
            var i2, o2, a2, s2 = X(t2), u2 = Xe.test(t2), l2 = e2.style;
            if (u2 || (t2 = ze(s2)), a2 = S.cssHooks[t2] || S.cssHooks[s2], n2 === void 0)
              return a2 && "get" in a2 && (i2 = a2.get(e2, false, r2)) !== void 0 ? i2 : l2[t2];
            (o2 = typeof n2) === "string" && (i2 = te.exec(n2)) && i2[1] && (n2 = se(e2, t2, i2), o2 = "number"), n2 != null && n2 == n2 && (o2 !== "number" || u2 || (n2 += i2 && i2[3] || (S.cssNumber[s2] ? "" : "px")), y.clearCloneStyle || n2 !== "" || t2.indexOf("background") !== 0 || (l2[t2] = "inherit"), a2 && "set" in a2 && (n2 = a2.set(e2, n2, r2)) === void 0 || (u2 ? l2.setProperty(t2, n2) : l2[t2] = n2));
          }
        }, css: function(e2, t2, n2, r2) {
          var i2, o2, a2, s2 = X(t2);
          return Xe.test(t2) || (t2 = ze(s2)), (a2 = S.cssHooks[t2] || S.cssHooks[s2]) && "get" in a2 && (i2 = a2.get(e2, true, n2)), i2 === void 0 && (i2 = We(e2, t2, r2)), i2 === "normal" && t2 in Ge && (i2 = Ge[t2]), n2 === "" || n2 ? (o2 = parseFloat(i2), n2 === true || isFinite(o2) ? o2 || 0 : i2) : i2;
        } }), S.each(["height", "width"], function(e2, u2) {
          S.cssHooks[u2] = { get: function(e3, t2, n2) {
            if (t2)
              return !Ue.test(S.css(e3, "display")) || e3.getClientRects().length && e3.getBoundingClientRect().width ? Je(e3, u2, n2) : Me(e3, Ve, function() {
                return Je(e3, u2, n2);
              });
          }, set: function(e3, t2, n2) {
            var r2, i2 = Re(e3), o2 = !y.scrollboxSize() && i2.position === "absolute", a2 = (o2 || n2) && S.css(e3, "boxSizing", false, i2) === "border-box", s2 = n2 ? Qe(e3, u2, n2, a2, i2) : 0;
            return a2 && o2 && (s2 -= Math.ceil(e3["offset" + u2[0].toUpperCase() + u2.slice(1)] - parseFloat(i2[u2]) - Qe(e3, u2, "border", false, i2) - 0.5)), s2 && (r2 = te.exec(t2)) && (r2[3] || "px") !== "px" && (e3.style[u2] = t2, t2 = S.css(e3, u2)), Ye(0, t2, s2);
          } };
        }), S.cssHooks.marginLeft = Fe(y.reliableMarginLeft, function(e2, t2) {
          if (t2)
            return (parseFloat(We(e2, "marginLeft")) || e2.getBoundingClientRect().left - Me(e2, { marginLeft: 0 }, function() {
              return e2.getBoundingClientRect().left;
            })) + "px";
        }), S.each({ margin: "", padding: "", border: "Width" }, function(i2, o2) {
          S.cssHooks[i2 + o2] = { expand: function(e2) {
            for (var t2 = 0, n2 = {}, r2 = typeof e2 == "string" ? e2.split(" ") : [e2]; t2 < 4; t2++)
              n2[i2 + ne[t2] + o2] = r2[t2] || r2[t2 - 2] || r2[0];
            return n2;
          } }, i2 !== "margin" && (S.cssHooks[i2 + o2].set = Ye);
        }), S.fn.extend({ css: function(e2, t2) {
          return $12(this, function(e3, t3, n2) {
            var r2, i2, o2 = {}, a2 = 0;
            if (Array.isArray(t3)) {
              for (r2 = Re(e3), i2 = t3.length; a2 < i2; a2++)
                o2[t3[a2]] = S.css(e3, t3[a2], false, r2);
              return o2;
            }
            return n2 !== void 0 ? S.style(e3, t3, n2) : S.css(e3, t3);
          }, e2, t2, 1 < arguments.length);
        } }), ((S.Tween = Ke).prototype = { constructor: Ke, init: function(e2, t2, n2, r2, i2, o2) {
          this.elem = e2, this.prop = n2, this.easing = i2 || S.easing._default, this.options = t2, this.start = this.now = this.cur(), this.end = r2, this.unit = o2 || (S.cssNumber[n2] ? "" : "px");
        }, cur: function() {
          var e2 = Ke.propHooks[this.prop];
          return e2 && e2.get ? e2.get(this) : Ke.propHooks._default.get(this);
        }, run: function(e2) {
          var t2, n2 = Ke.propHooks[this.prop];
          return this.options.duration ? this.pos = t2 = S.easing[this.easing](e2, this.options.duration * e2, 0, 1, this.options.duration) : this.pos = t2 = e2, this.now = (this.end - this.start) * t2 + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n2 && n2.set ? n2.set(this) : Ke.propHooks._default.set(this), this;
        } }).init.prototype = Ke.prototype, (Ke.propHooks = { _default: { get: function(e2) {
          var t2;
          return e2.elem.nodeType !== 1 || e2.elem[e2.prop] != null && e2.elem.style[e2.prop] == null ? e2.elem[e2.prop] : (t2 = S.css(e2.elem, e2.prop, "")) && t2 !== "auto" ? t2 : 0;
        }, set: function(e2) {
          S.fx.step[e2.prop] ? S.fx.step[e2.prop](e2) : e2.elem.nodeType !== 1 || !S.cssHooks[e2.prop] && e2.elem.style[ze(e2.prop)] == null ? e2.elem[e2.prop] = e2.now : S.style(e2.elem, e2.prop, e2.now + e2.unit);
        } } }).scrollTop = Ke.propHooks.scrollLeft = { set: function(e2) {
          e2.elem.nodeType && e2.elem.parentNode && (e2.elem[e2.prop] = e2.now);
        } }, S.easing = { linear: function(e2) {
          return e2;
        }, swing: function(e2) {
          return 0.5 - Math.cos(e2 * Math.PI) / 2;
        }, _default: "swing" }, S.fx = Ke.prototype.init, S.fx.step = {};
        var Ze, et, tt, nt, rt = /^(?:toggle|show|hide)$/, it = /queueHooks$/;
        function ot() {
          et && (E.hidden === false && C.requestAnimationFrame ? C.requestAnimationFrame(ot) : C.setTimeout(ot, S.fx.interval), S.fx.tick());
        }
        function at() {
          return C.setTimeout(function() {
            Ze = void 0;
          }), Ze = Date.now();
        }
        function st(e2, t2) {
          var n2, r2 = 0, i2 = { height: e2 };
          for (t2 = t2 ? 1 : 0; r2 < 4; r2 += 2 - t2)
            i2["margin" + (n2 = ne[r2])] = i2["padding" + n2] = e2;
          return t2 && (i2.opacity = i2.width = e2), i2;
        }
        function ut(e2, t2, n2) {
          for (var r2, i2 = (lt.tweeners[t2] || []).concat(lt.tweeners["*"]), o2 = 0, a2 = i2.length; o2 < a2; o2++)
            if (r2 = i2[o2].call(n2, t2, e2))
              return r2;
        }
        function lt(o2, e2, t2) {
          var n2, a2, r2 = 0, i2 = lt.prefilters.length, s2 = S.Deferred().always(function() {
            delete u2.elem;
          }), u2 = function() {
            if (a2)
              return false;
            for (var e3 = Ze || at(), t3 = Math.max(0, l2.startTime + l2.duration - e3), n3 = 1 - (t3 / l2.duration || 0), r3 = 0, i3 = l2.tweens.length; r3 < i3; r3++)
              l2.tweens[r3].run(n3);
            return s2.notifyWith(o2, [l2, n3, t3]), n3 < 1 && i3 ? t3 : (i3 || s2.notifyWith(o2, [l2, 1, 0]), s2.resolveWith(o2, [l2]), false);
          }, l2 = s2.promise({ elem: o2, props: S.extend({}, e2), opts: S.extend(true, { specialEasing: {}, easing: S.easing._default }, t2), originalProperties: e2, originalOptions: t2, startTime: Ze || at(), duration: t2.duration, tweens: [], createTween: function(e3, t3) {
            var n3 = S.Tween(o2, l2.opts, e3, t3, l2.opts.specialEasing[e3] || l2.opts.easing);
            return l2.tweens.push(n3), n3;
          }, stop: function(e3) {
            var t3 = 0, n3 = e3 ? l2.tweens.length : 0;
            if (a2)
              return this;
            for (a2 = true; t3 < n3; t3++)
              l2.tweens[t3].run(1);
            return e3 ? (s2.notifyWith(o2, [l2, 1, 0]), s2.resolveWith(o2, [l2, e3])) : s2.rejectWith(o2, [l2, e3]), this;
          } }), c2 = l2.props;
          for (!function(e3, t3) {
            var n3, r3, i3, o3, a3;
            for (n3 in e3)
              if (i3 = t3[r3 = X(n3)], o3 = e3[n3], Array.isArray(o3) && (i3 = o3[1], o3 = e3[n3] = o3[0]), n3 !== r3 && (e3[r3] = o3, delete e3[n3]), (a3 = S.cssHooks[r3]) && "expand" in a3)
                for (n3 in o3 = a3.expand(o3), delete e3[r3], o3)
                  n3 in e3 || (e3[n3] = o3[n3], t3[n3] = i3);
              else
                t3[r3] = i3;
          }(c2, l2.opts.specialEasing); r2 < i2; r2++)
            if (n2 = lt.prefilters[r2].call(l2, o2, c2, l2.opts))
              return m(n2.stop) && (S._queueHooks(l2.elem, l2.opts.queue).stop = n2.stop.bind(n2)), n2;
          return S.map(c2, ut, l2), m(l2.opts.start) && l2.opts.start.call(o2, l2), l2.progress(l2.opts.progress).done(l2.opts.done, l2.opts.complete).fail(l2.opts.fail).always(l2.opts.always), S.fx.timer(S.extend(u2, { elem: o2, anim: l2, queue: l2.opts.queue })), l2;
        }
        S.Animation = S.extend(lt, { tweeners: { "*": [function(e2, t2) {
          var n2 = this.createTween(e2, t2);
          return se(n2.elem, e2, te.exec(t2), n2), n2;
        }] }, tweener: function(e2, t2) {
          m(e2) ? (t2 = e2, e2 = ["*"]) : e2 = e2.match(P);
          for (var n2, r2 = 0, i2 = e2.length; r2 < i2; r2++)
            n2 = e2[r2], lt.tweeners[n2] = lt.tweeners[n2] || [], lt.tweeners[n2].unshift(t2);
        }, prefilters: [function(e2, t2, n2) {
          var r2, i2, o2, a2, s2, u2, l2, c2, f2 = "width" in t2 || "height" in t2, p2 = this, d2 = {}, h2 = e2.style, g2 = e2.nodeType && ae(e2), v2 = Y.get(e2, "fxshow");
          for (r2 in n2.queue || ((a2 = S._queueHooks(e2, "fx")).unqueued == null && (a2.unqueued = 0, s2 = a2.empty.fire, a2.empty.fire = function() {
            a2.unqueued || s2();
          }), a2.unqueued++, p2.always(function() {
            p2.always(function() {
              a2.unqueued--, S.queue(e2, "fx").length || a2.empty.fire();
            });
          })), t2)
            if (i2 = t2[r2], rt.test(i2)) {
              if (delete t2[r2], o2 = o2 || i2 === "toggle", i2 === (g2 ? "hide" : "show")) {
                if (i2 !== "show" || !v2 || v2[r2] === void 0)
                  continue;
                g2 = true;
              }
              d2[r2] = v2 && v2[r2] || S.style(e2, r2);
            }
          if ((u2 = !S.isEmptyObject(t2)) || !S.isEmptyObject(d2))
            for (r2 in f2 && e2.nodeType === 1 && (n2.overflow = [h2.overflow, h2.overflowX, h2.overflowY], (l2 = v2 && v2.display) == null && (l2 = Y.get(e2, "display")), (c2 = S.css(e2, "display")) === "none" && (l2 ? c2 = l2 : (le([e2], true), l2 = e2.style.display || l2, c2 = S.css(e2, "display"), le([e2]))), (c2 === "inline" || c2 === "inline-block" && l2 != null) && S.css(e2, "float") === "none" && (u2 || (p2.done(function() {
              h2.display = l2;
            }), l2 == null && (c2 = h2.display, l2 = c2 === "none" ? "" : c2)), h2.display = "inline-block")), n2.overflow && (h2.overflow = "hidden", p2.always(function() {
              h2.overflow = n2.overflow[0], h2.overflowX = n2.overflow[1], h2.overflowY = n2.overflow[2];
            })), u2 = false, d2)
              u2 || (v2 ? "hidden" in v2 && (g2 = v2.hidden) : v2 = Y.access(e2, "fxshow", { display: l2 }), o2 && (v2.hidden = !g2), g2 && le([e2], true), p2.done(function() {
                for (r2 in g2 || le([e2]), Y.remove(e2, "fxshow"), d2)
                  S.style(e2, r2, d2[r2]);
              })), u2 = ut(g2 ? v2[r2] : 0, r2, p2), r2 in v2 || (v2[r2] = u2.start, g2 && (u2.end = u2.start, u2.start = 0));
        }], prefilter: function(e2, t2) {
          t2 ? lt.prefilters.unshift(e2) : lt.prefilters.push(e2);
        } }), S.speed = function(e2, t2, n2) {
          var r2 = e2 && typeof e2 == "object" ? S.extend({}, e2) : { complete: n2 || !n2 && t2 || m(e2) && e2, duration: e2, easing: n2 && t2 || t2 && !m(t2) && t2 };
          return S.fx.off ? r2.duration = 0 : typeof r2.duration != "number" && (r2.duration in S.fx.speeds ? r2.duration = S.fx.speeds[r2.duration] : r2.duration = S.fx.speeds._default), r2.queue != null && r2.queue !== true || (r2.queue = "fx"), r2.old = r2.complete, r2.complete = function() {
            m(r2.old) && r2.old.call(this), r2.queue && S.dequeue(this, r2.queue);
          }, r2;
        }, S.fn.extend({ fadeTo: function(e2, t2, n2, r2) {
          return this.filter(ae).css("opacity", 0).show().end().animate({ opacity: t2 }, e2, n2, r2);
        }, animate: function(t2, e2, n2, r2) {
          var i2 = S.isEmptyObject(t2), o2 = S.speed(e2, n2, r2), a2 = function() {
            var e3 = lt(this, S.extend({}, t2), o2);
            (i2 || Y.get(this, "finish")) && e3.stop(true);
          };
          return a2.finish = a2, i2 || o2.queue === false ? this.each(a2) : this.queue(o2.queue, a2);
        }, stop: function(i2, e2, o2) {
          var a2 = function(e3) {
            var t2 = e3.stop;
            delete e3.stop, t2(o2);
          };
          return typeof i2 != "string" && (o2 = e2, e2 = i2, i2 = void 0), e2 && this.queue(i2 || "fx", []), this.each(function() {
            var e3 = true, t2 = i2 != null && i2 + "queueHooks", n2 = S.timers, r2 = Y.get(this);
            if (t2)
              r2[t2] && r2[t2].stop && a2(r2[t2]);
            else
              for (t2 in r2)
                r2[t2] && r2[t2].stop && it.test(t2) && a2(r2[t2]);
            for (t2 = n2.length; t2--; )
              n2[t2].elem !== this || i2 != null && n2[t2].queue !== i2 || (n2[t2].anim.stop(o2), e3 = false, n2.splice(t2, 1));
            !e3 && o2 || S.dequeue(this, i2);
          });
        }, finish: function(a2) {
          return a2 !== false && (a2 = a2 || "fx"), this.each(function() {
            var e2, t2 = Y.get(this), n2 = t2[a2 + "queue"], r2 = t2[a2 + "queueHooks"], i2 = S.timers, o2 = n2 ? n2.length : 0;
            for (t2.finish = true, S.queue(this, a2, []), r2 && r2.stop && r2.stop.call(this, true), e2 = i2.length; e2--; )
              i2[e2].elem === this && i2[e2].queue === a2 && (i2[e2].anim.stop(true), i2.splice(e2, 1));
            for (e2 = 0; e2 < o2; e2++)
              n2[e2] && n2[e2].finish && n2[e2].finish.call(this);
            delete t2.finish;
          });
        } }), S.each(["toggle", "show", "hide"], function(e2, r2) {
          var i2 = S.fn[r2];
          S.fn[r2] = function(e3, t2, n2) {
            return e3 == null || typeof e3 == "boolean" ? i2.apply(this, arguments) : this.animate(st(r2, true), e3, t2, n2);
          };
        }), S.each({ slideDown: st("show"), slideUp: st("hide"), slideToggle: st("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(e2, r2) {
          S.fn[e2] = function(e3, t2, n2) {
            return this.animate(r2, e3, t2, n2);
          };
        }), S.timers = [], S.fx.tick = function() {
          var e2, t2 = 0, n2 = S.timers;
          for (Ze = Date.now(); t2 < n2.length; t2++)
            (e2 = n2[t2])() || n2[t2] !== e2 || n2.splice(t2--, 1);
          n2.length || S.fx.stop(), Ze = void 0;
        }, S.fx.timer = function(e2) {
          S.timers.push(e2), S.fx.start();
        }, S.fx.interval = 13, S.fx.start = function() {
          et || (et = true, ot());
        }, S.fx.stop = function() {
          et = null;
        }, S.fx.speeds = { slow: 600, fast: 200, _default: 400 }, S.fn.delay = function(r2, e2) {
          return r2 = S.fx && S.fx.speeds[r2] || r2, e2 = e2 || "fx", this.queue(e2, function(e3, t2) {
            var n2 = C.setTimeout(e3, r2);
            t2.stop = function() {
              C.clearTimeout(n2);
            };
          });
        }, tt = E.createElement("input"), nt = E.createElement("select").appendChild(E.createElement("option")), tt.type = "checkbox", y.checkOn = tt.value !== "", y.optSelected = nt.selected, (tt = E.createElement("input")).value = "t", tt.type = "radio", y.radioValue = tt.value === "t";
        var ct, ft = S.expr.attrHandle;
        S.fn.extend({ attr: function(e2, t2) {
          return $12(this, S.attr, e2, t2, 1 < arguments.length);
        }, removeAttr: function(e2) {
          return this.each(function() {
            S.removeAttr(this, e2);
          });
        } }), S.extend({ attr: function(e2, t2, n2) {
          var r2, i2, o2 = e2.nodeType;
          if (o2 !== 3 && o2 !== 8 && o2 !== 2)
            return typeof e2.getAttribute == "undefined" ? S.prop(e2, t2, n2) : (o2 === 1 && S.isXMLDoc(e2) || (i2 = S.attrHooks[t2.toLowerCase()] || (S.expr.match.bool.test(t2) ? ct : void 0)), n2 !== void 0 ? n2 === null ? void S.removeAttr(e2, t2) : i2 && "set" in i2 && (r2 = i2.set(e2, n2, t2)) !== void 0 ? r2 : (e2.setAttribute(t2, n2 + ""), n2) : i2 && "get" in i2 && (r2 = i2.get(e2, t2)) !== null ? r2 : (r2 = S.find.attr(e2, t2)) == null ? void 0 : r2);
        }, attrHooks: { type: { set: function(e2, t2) {
          if (!y.radioValue && t2 === "radio" && A(e2, "input")) {
            var n2 = e2.value;
            return e2.setAttribute("type", t2), n2 && (e2.value = n2), t2;
          }
        } } }, removeAttr: function(e2, t2) {
          var n2, r2 = 0, i2 = t2 && t2.match(P);
          if (i2 && e2.nodeType === 1)
            while (n2 = i2[r2++])
              e2.removeAttribute(n2);
        } }), ct = { set: function(e2, t2, n2) {
          return t2 === false ? S.removeAttr(e2, n2) : e2.setAttribute(n2, n2), n2;
        } }, S.each(S.expr.match.bool.source.match(/\w+/g), function(e2, t2) {
          var a2 = ft[t2] || S.find.attr;
          ft[t2] = function(e3, t3, n2) {
            var r2, i2, o2 = t3.toLowerCase();
            return n2 || (i2 = ft[o2], ft[o2] = r2, r2 = a2(e3, t3, n2) != null ? o2 : null, ft[o2] = i2), r2;
          };
        });
        var pt = /^(?:input|select|textarea|button)$/i, dt = /^(?:a|area)$/i;
        function ht(e2) {
          return (e2.match(P) || []).join(" ");
        }
        function gt(e2) {
          return e2.getAttribute && e2.getAttribute("class") || "";
        }
        function vt(e2) {
          return Array.isArray(e2) ? e2 : typeof e2 == "string" && e2.match(P) || [];
        }
        S.fn.extend({ prop: function(e2, t2) {
          return $12(this, S.prop, e2, t2, 1 < arguments.length);
        }, removeProp: function(e2) {
          return this.each(function() {
            delete this[S.propFix[e2] || e2];
          });
        } }), S.extend({ prop: function(e2, t2, n2) {
          var r2, i2, o2 = e2.nodeType;
          if (o2 !== 3 && o2 !== 8 && o2 !== 2)
            return o2 === 1 && S.isXMLDoc(e2) || (t2 = S.propFix[t2] || t2, i2 = S.propHooks[t2]), n2 !== void 0 ? i2 && "set" in i2 && (r2 = i2.set(e2, n2, t2)) !== void 0 ? r2 : e2[t2] = n2 : i2 && "get" in i2 && (r2 = i2.get(e2, t2)) !== null ? r2 : e2[t2];
        }, propHooks: { tabIndex: { get: function(e2) {
          var t2 = S.find.attr(e2, "tabindex");
          return t2 ? parseInt(t2, 10) : pt.test(e2.nodeName) || dt.test(e2.nodeName) && e2.href ? 0 : -1;
        } } }, propFix: { "for": "htmlFor", "class": "className" } }), y.optSelected || (S.propHooks.selected = { get: function(e2) {
          var t2 = e2.parentNode;
          return t2 && t2.parentNode && t2.parentNode.selectedIndex, null;
        }, set: function(e2) {
          var t2 = e2.parentNode;
          t2 && (t2.selectedIndex, t2.parentNode && t2.parentNode.selectedIndex);
        } }), S.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
          S.propFix[this.toLowerCase()] = this;
        }), S.fn.extend({ addClass: function(t2) {
          var e2, n2, r2, i2, o2, a2, s2, u2 = 0;
          if (m(t2))
            return this.each(function(e3) {
              S(this).addClass(t2.call(this, e3, gt(this)));
            });
          if ((e2 = vt(t2)).length) {
            while (n2 = this[u2++])
              if (i2 = gt(n2), r2 = n2.nodeType === 1 && " " + ht(i2) + " ") {
                a2 = 0;
                while (o2 = e2[a2++])
                  r2.indexOf(" " + o2 + " ") < 0 && (r2 += o2 + " ");
                i2 !== (s2 = ht(r2)) && n2.setAttribute("class", s2);
              }
          }
          return this;
        }, removeClass: function(t2) {
          var e2, n2, r2, i2, o2, a2, s2, u2 = 0;
          if (m(t2))
            return this.each(function(e3) {
              S(this).removeClass(t2.call(this, e3, gt(this)));
            });
          if (!arguments.length)
            return this.attr("class", "");
          if ((e2 = vt(t2)).length) {
            while (n2 = this[u2++])
              if (i2 = gt(n2), r2 = n2.nodeType === 1 && " " + ht(i2) + " ") {
                a2 = 0;
                while (o2 = e2[a2++])
                  while (-1 < r2.indexOf(" " + o2 + " "))
                    r2 = r2.replace(" " + o2 + " ", " ");
                i2 !== (s2 = ht(r2)) && n2.setAttribute("class", s2);
              }
          }
          return this;
        }, toggleClass: function(i2, t2) {
          var o2 = typeof i2, a2 = o2 === "string" || Array.isArray(i2);
          return typeof t2 == "boolean" && a2 ? t2 ? this.addClass(i2) : this.removeClass(i2) : m(i2) ? this.each(function(e2) {
            S(this).toggleClass(i2.call(this, e2, gt(this), t2), t2);
          }) : this.each(function() {
            var e2, t3, n2, r2;
            if (a2) {
              t3 = 0, n2 = S(this), r2 = vt(i2);
              while (e2 = r2[t3++])
                n2.hasClass(e2) ? n2.removeClass(e2) : n2.addClass(e2);
            } else
              i2 !== void 0 && o2 !== "boolean" || ((e2 = gt(this)) && Y.set(this, "__className__", e2), this.setAttribute && this.setAttribute("class", e2 || i2 === false ? "" : Y.get(this, "__className__") || ""));
          });
        }, hasClass: function(e2) {
          var t2, n2, r2 = 0;
          t2 = " " + e2 + " ";
          while (n2 = this[r2++])
            if (n2.nodeType === 1 && -1 < (" " + ht(gt(n2)) + " ").indexOf(t2))
              return true;
          return false;
        } });
        var yt = /\r/g;
        S.fn.extend({ val: function(n2) {
          var r2, e2, i2, t2 = this[0];
          return arguments.length ? (i2 = m(n2), this.each(function(e3) {
            var t3;
            this.nodeType === 1 && ((t3 = i2 ? n2.call(this, e3, S(this).val()) : n2) == null ? t3 = "" : typeof t3 == "number" ? t3 += "" : Array.isArray(t3) && (t3 = S.map(t3, function(e4) {
              return e4 == null ? "" : e4 + "";
            })), (r2 = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()]) && "set" in r2 && r2.set(this, t3, "value") !== void 0 || (this.value = t3));
          })) : t2 ? (r2 = S.valHooks[t2.type] || S.valHooks[t2.nodeName.toLowerCase()]) && "get" in r2 && (e2 = r2.get(t2, "value")) !== void 0 ? e2 : typeof (e2 = t2.value) == "string" ? e2.replace(yt, "") : e2 == null ? "" : e2 : void 0;
        } }), S.extend({ valHooks: { option: { get: function(e2) {
          var t2 = S.find.attr(e2, "value");
          return t2 != null ? t2 : ht(S.text(e2));
        } }, select: { get: function(e2) {
          var t2, n2, r2, i2 = e2.options, o2 = e2.selectedIndex, a2 = e2.type === "select-one", s2 = a2 ? null : [], u2 = a2 ? o2 + 1 : i2.length;
          for (r2 = o2 < 0 ? u2 : a2 ? o2 : 0; r2 < u2; r2++)
            if (((n2 = i2[r2]).selected || r2 === o2) && !n2.disabled && (!n2.parentNode.disabled || !A(n2.parentNode, "optgroup"))) {
              if (t2 = S(n2).val(), a2)
                return t2;
              s2.push(t2);
            }
          return s2;
        }, set: function(e2, t2) {
          var n2, r2, i2 = e2.options, o2 = S.makeArray(t2), a2 = i2.length;
          while (a2--)
            ((r2 = i2[a2]).selected = -1 < S.inArray(S.valHooks.option.get(r2), o2)) && (n2 = true);
          return n2 || (e2.selectedIndex = -1), o2;
        } } } }), S.each(["radio", "checkbox"], function() {
          S.valHooks[this] = { set: function(e2, t2) {
            if (Array.isArray(t2))
              return e2.checked = -1 < S.inArray(S(e2).val(), t2);
          } }, y.checkOn || (S.valHooks[this].get = function(e2) {
            return e2.getAttribute("value") === null ? "on" : e2.value;
          });
        }), y.focusin = "onfocusin" in C;
        var mt = /^(?:focusinfocus|focusoutblur)$/, xt = function(e2) {
          e2.stopPropagation();
        };
        S.extend(S.event, { trigger: function(e2, t2, n2, r2) {
          var i2, o2, a2, s2, u2, l2, c2, f2, p2 = [n2 || E], d2 = v.call(e2, "type") ? e2.type : e2, h2 = v.call(e2, "namespace") ? e2.namespace.split(".") : [];
          if (o2 = f2 = a2 = n2 = n2 || E, n2.nodeType !== 3 && n2.nodeType !== 8 && !mt.test(d2 + S.event.triggered) && (-1 < d2.indexOf(".") && (d2 = (h2 = d2.split(".")).shift(), h2.sort()), u2 = d2.indexOf(":") < 0 && "on" + d2, (e2 = e2[S.expando] ? e2 : new S.Event(d2, typeof e2 == "object" && e2)).isTrigger = r2 ? 2 : 3, e2.namespace = h2.join("."), e2.rnamespace = e2.namespace ? new RegExp("(^|\\.)" + h2.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e2.result = void 0, e2.target || (e2.target = n2), t2 = t2 == null ? [e2] : S.makeArray(t2, [e2]), c2 = S.event.special[d2] || {}, r2 || !c2.trigger || c2.trigger.apply(n2, t2) !== false)) {
            if (!r2 && !c2.noBubble && !x(n2)) {
              for (s2 = c2.delegateType || d2, mt.test(s2 + d2) || (o2 = o2.parentNode); o2; o2 = o2.parentNode)
                p2.push(o2), a2 = o2;
              a2 === (n2.ownerDocument || E) && p2.push(a2.defaultView || a2.parentWindow || C);
            }
            i2 = 0;
            while ((o2 = p2[i2++]) && !e2.isPropagationStopped())
              f2 = o2, e2.type = 1 < i2 ? s2 : c2.bindType || d2, (l2 = (Y.get(o2, "events") || /* @__PURE__ */ Object.create(null))[e2.type] && Y.get(o2, "handle")) && l2.apply(o2, t2), (l2 = u2 && o2[u2]) && l2.apply && V(o2) && (e2.result = l2.apply(o2, t2), e2.result === false && e2.preventDefault());
            return e2.type = d2, r2 || e2.isDefaultPrevented() || c2._default && c2._default.apply(p2.pop(), t2) !== false || !V(n2) || u2 && m(n2[d2]) && !x(n2) && ((a2 = n2[u2]) && (n2[u2] = null), S.event.triggered = d2, e2.isPropagationStopped() && f2.addEventListener(d2, xt), n2[d2](), e2.isPropagationStopped() && f2.removeEventListener(d2, xt), S.event.triggered = void 0, a2 && (n2[u2] = a2)), e2.result;
          }
        }, simulate: function(e2, t2, n2) {
          var r2 = S.extend(new S.Event(), n2, { type: e2, isSimulated: true });
          S.event.trigger(r2, null, t2);
        } }), S.fn.extend({ trigger: function(e2, t2) {
          return this.each(function() {
            S.event.trigger(e2, t2, this);
          });
        }, triggerHandler: function(e2, t2) {
          var n2 = this[0];
          if (n2)
            return S.event.trigger(e2, t2, n2, true);
        } }), y.focusin || S.each({ focus: "focusin", blur: "focusout" }, function(n2, r2) {
          var i2 = function(e2) {
            S.event.simulate(r2, e2.target, S.event.fix(e2));
          };
          S.event.special[r2] = { setup: function() {
            var e2 = this.ownerDocument || this.document || this, t2 = Y.access(e2, r2);
            t2 || e2.addEventListener(n2, i2, true), Y.access(e2, r2, (t2 || 0) + 1);
          }, teardown: function() {
            var e2 = this.ownerDocument || this.document || this, t2 = Y.access(e2, r2) - 1;
            t2 ? Y.access(e2, r2, t2) : (e2.removeEventListener(n2, i2, true), Y.remove(e2, r2));
          } };
        });
        var bt = C.location, wt = { guid: Date.now() }, Tt = /\?/;
        S.parseXML = function(e2) {
          var t2, n2;
          if (!e2 || typeof e2 != "string")
            return null;
          try {
            t2 = new C.DOMParser().parseFromString(e2, "text/xml");
          } catch (e3) {
          }
          return n2 = t2 && t2.getElementsByTagName("parsererror")[0], t2 && !n2 || S.error("Invalid XML: " + (n2 ? S.map(n2.childNodes, function(e3) {
            return e3.textContent;
          }).join("\n") : e2)), t2;
        };
        var Ct = /\[\]$/, Et = /\r?\n/g, St = /^(?:submit|button|image|reset|file)$/i, kt = /^(?:input|select|textarea|keygen)/i;
        function At(n2, e2, r2, i2) {
          var t2;
          if (Array.isArray(e2))
            S.each(e2, function(e3, t3) {
              r2 || Ct.test(n2) ? i2(n2, t3) : At(n2 + "[" + (typeof t3 == "object" && t3 != null ? e3 : "") + "]", t3, r2, i2);
            });
          else if (r2 || w(e2) !== "object")
            i2(n2, e2);
          else
            for (t2 in e2)
              At(n2 + "[" + t2 + "]", e2[t2], r2, i2);
        }
        S.param = function(e2, t2) {
          var n2, r2 = [], i2 = function(e3, t3) {
            var n3 = m(t3) ? t3() : t3;
            r2[r2.length] = encodeURIComponent(e3) + "=" + encodeURIComponent(n3 == null ? "" : n3);
          };
          if (e2 == null)
            return "";
          if (Array.isArray(e2) || e2.jquery && !S.isPlainObject(e2))
            S.each(e2, function() {
              i2(this.name, this.value);
            });
          else
            for (n2 in e2)
              At(n2, e2[n2], t2, i2);
          return r2.join("&");
        }, S.fn.extend({ serialize: function() {
          return S.param(this.serializeArray());
        }, serializeArray: function() {
          return this.map(function() {
            var e2 = S.prop(this, "elements");
            return e2 ? S.makeArray(e2) : this;
          }).filter(function() {
            var e2 = this.type;
            return this.name && !S(this).is(":disabled") && kt.test(this.nodeName) && !St.test(e2) && (this.checked || !pe.test(e2));
          }).map(function(e2, t2) {
            var n2 = S(this).val();
            return n2 == null ? null : Array.isArray(n2) ? S.map(n2, function(e3) {
              return { name: t2.name, value: e3.replace(Et, "\r\n") };
            }) : { name: t2.name, value: n2.replace(Et, "\r\n") };
          }).get();
        } });
        var Nt = /%20/g, jt = /#.*$/, Dt = /([?&])_=[^&]*/, qt = /^(.*?):[ \t]*([^\r\n]*)$/gm, Lt = /^(?:GET|HEAD)$/, Ht = /^\/\//, Ot = {}, Pt = {}, Rt = "*/".concat("*"), Mt = E.createElement("a");
        function It(o2) {
          return function(e2, t2) {
            typeof e2 != "string" && (t2 = e2, e2 = "*");
            var n2, r2 = 0, i2 = e2.toLowerCase().match(P) || [];
            if (m(t2))
              while (n2 = i2[r2++])
                n2[0] === "+" ? (n2 = n2.slice(1) || "*", (o2[n2] = o2[n2] || []).unshift(t2)) : (o2[n2] = o2[n2] || []).push(t2);
          };
        }
        function Wt(t2, i2, o2, a2) {
          var s2 = {}, u2 = t2 === Pt;
          function l2(e2) {
            var r2;
            return s2[e2] = true, S.each(t2[e2] || [], function(e3, t3) {
              var n2 = t3(i2, o2, a2);
              return typeof n2 != "string" || u2 || s2[n2] ? u2 ? !(r2 = n2) : void 0 : (i2.dataTypes.unshift(n2), l2(n2), false);
            }), r2;
          }
          return l2(i2.dataTypes[0]) || !s2["*"] && l2("*");
        }
        function Ft(e2, t2) {
          var n2, r2, i2 = S.ajaxSettings.flatOptions || {};
          for (n2 in t2)
            t2[n2] !== void 0 && ((i2[n2] ? e2 : r2 || (r2 = {}))[n2] = t2[n2]);
          return r2 && S.extend(true, e2, r2), e2;
        }
        Mt.href = bt.href, S.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: bt.href, type: "GET", isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(bt.protocol), global: true, processData: true, async: true, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Rt, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": true, "text json": JSON.parse, "text xml": S.parseXML }, flatOptions: { url: true, context: true } }, ajaxSetup: function(e2, t2) {
          return t2 ? Ft(Ft(e2, S.ajaxSettings), t2) : Ft(S.ajaxSettings, e2);
        }, ajaxPrefilter: It(Ot), ajaxTransport: It(Pt), ajax: function(e2, t2) {
          typeof e2 == "object" && (t2 = e2, e2 = void 0), t2 = t2 || {};
          var c2, f2, p2, n2, d2, r2, h2, g2, i2, o2, v2 = S.ajaxSetup({}, t2), y2 = v2.context || v2, m2 = v2.context && (y2.nodeType || y2.jquery) ? S(y2) : S.event, x2 = S.Deferred(), b2 = S.Callbacks("once memory"), w2 = v2.statusCode || {}, a2 = {}, s2 = {}, u2 = "canceled", T2 = { readyState: 0, getResponseHeader: function(e3) {
            var t3;
            if (h2) {
              if (!n2) {
                n2 = {};
                while (t3 = qt.exec(p2))
                  n2[t3[1].toLowerCase() + " "] = (n2[t3[1].toLowerCase() + " "] || []).concat(t3[2]);
              }
              t3 = n2[e3.toLowerCase() + " "];
            }
            return t3 == null ? null : t3.join(", ");
          }, getAllResponseHeaders: function() {
            return h2 ? p2 : null;
          }, setRequestHeader: function(e3, t3) {
            return h2 == null && (e3 = s2[e3.toLowerCase()] = s2[e3.toLowerCase()] || e3, a2[e3] = t3), this;
          }, overrideMimeType: function(e3) {
            return h2 == null && (v2.mimeType = e3), this;
          }, statusCode: function(e3) {
            var t3;
            if (e3)
              if (h2)
                T2.always(e3[T2.status]);
              else
                for (t3 in e3)
                  w2[t3] = [w2[t3], e3[t3]];
            return this;
          }, abort: function(e3) {
            var t3 = e3 || u2;
            return c2 && c2.abort(t3), l2(0, t3), this;
          } };
          if (x2.promise(T2), v2.url = ((e2 || v2.url || bt.href) + "").replace(Ht, bt.protocol + "//"), v2.type = t2.method || t2.type || v2.method || v2.type, v2.dataTypes = (v2.dataType || "*").toLowerCase().match(P) || [""], v2.crossDomain == null) {
            r2 = E.createElement("a");
            try {
              r2.href = v2.url, r2.href = r2.href, v2.crossDomain = Mt.protocol + "//" + Mt.host != r2.protocol + "//" + r2.host;
            } catch (e3) {
              v2.crossDomain = true;
            }
          }
          if (v2.data && v2.processData && typeof v2.data != "string" && (v2.data = S.param(v2.data, v2.traditional)), Wt(Ot, v2, t2, T2), h2)
            return T2;
          for (i2 in (g2 = S.event && v2.global) && S.active++ == 0 && S.event.trigger("ajaxStart"), v2.type = v2.type.toUpperCase(), v2.hasContent = !Lt.test(v2.type), f2 = v2.url.replace(jt, ""), v2.hasContent ? v2.data && v2.processData && (v2.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && (v2.data = v2.data.replace(Nt, "+")) : (o2 = v2.url.slice(f2.length), v2.data && (v2.processData || typeof v2.data == "string") && (f2 += (Tt.test(f2) ? "&" : "?") + v2.data, delete v2.data), v2.cache === false && (f2 = f2.replace(Dt, "$1"), o2 = (Tt.test(f2) ? "&" : "?") + "_=" + wt.guid++ + o2), v2.url = f2 + o2), v2.ifModified && (S.lastModified[f2] && T2.setRequestHeader("If-Modified-Since", S.lastModified[f2]), S.etag[f2] && T2.setRequestHeader("If-None-Match", S.etag[f2])), (v2.data && v2.hasContent && v2.contentType !== false || t2.contentType) && T2.setRequestHeader("Content-Type", v2.contentType), T2.setRequestHeader("Accept", v2.dataTypes[0] && v2.accepts[v2.dataTypes[0]] ? v2.accepts[v2.dataTypes[0]] + (v2.dataTypes[0] !== "*" ? ", " + Rt + "; q=0.01" : "") : v2.accepts["*"]), v2.headers)
            T2.setRequestHeader(i2, v2.headers[i2]);
          if (v2.beforeSend && (v2.beforeSend.call(y2, T2, v2) === false || h2))
            return T2.abort();
          if (u2 = "abort", b2.add(v2.complete), T2.done(v2.success), T2.fail(v2.error), c2 = Wt(Pt, v2, t2, T2)) {
            if (T2.readyState = 1, g2 && m2.trigger("ajaxSend", [T2, v2]), h2)
              return T2;
            v2.async && 0 < v2.timeout && (d2 = C.setTimeout(function() {
              T2.abort("timeout");
            }, v2.timeout));
            try {
              h2 = false, c2.send(a2, l2);
            } catch (e3) {
              if (h2)
                throw e3;
              l2(-1, e3);
            }
          } else
            l2(-1, "No Transport");
          function l2(e3, t3, n3, r3) {
            var i3, o3, a3, s3, u3, l3 = t3;
            h2 || (h2 = true, d2 && C.clearTimeout(d2), c2 = void 0, p2 = r3 || "", T2.readyState = 0 < e3 ? 4 : 0, i3 = 200 <= e3 && e3 < 300 || e3 === 304, n3 && (s3 = function(e4, t4, n4) {
              var r4, i4, o4, a4, s4 = e4.contents, u4 = e4.dataTypes;
              while (u4[0] === "*")
                u4.shift(), r4 === void 0 && (r4 = e4.mimeType || t4.getResponseHeader("Content-Type"));
              if (r4) {
                for (i4 in s4)
                  if (s4[i4] && s4[i4].test(r4)) {
                    u4.unshift(i4);
                    break;
                  }
              }
              if (u4[0] in n4)
                o4 = u4[0];
              else {
                for (i4 in n4) {
                  if (!u4[0] || e4.converters[i4 + " " + u4[0]]) {
                    o4 = i4;
                    break;
                  }
                  a4 || (a4 = i4);
                }
                o4 = o4 || a4;
              }
              if (o4)
                return o4 !== u4[0] && u4.unshift(o4), n4[o4];
            }(v2, T2, n3)), !i3 && -1 < S.inArray("script", v2.dataTypes) && S.inArray("json", v2.dataTypes) < 0 && (v2.converters["text script"] = function() {
            }), s3 = function(e4, t4, n4, r4) {
              var i4, o4, a4, s4, u4, l4 = {}, c3 = e4.dataTypes.slice();
              if (c3[1])
                for (a4 in e4.converters)
                  l4[a4.toLowerCase()] = e4.converters[a4];
              o4 = c3.shift();
              while (o4)
                if (e4.responseFields[o4] && (n4[e4.responseFields[o4]] = t4), !u4 && r4 && e4.dataFilter && (t4 = e4.dataFilter(t4, e4.dataType)), u4 = o4, o4 = c3.shift()) {
                  if (o4 === "*")
                    o4 = u4;
                  else if (u4 !== "*" && u4 !== o4) {
                    if (!(a4 = l4[u4 + " " + o4] || l4["* " + o4])) {
                      for (i4 in l4)
                        if ((s4 = i4.split(" "))[1] === o4 && (a4 = l4[u4 + " " + s4[0]] || l4["* " + s4[0]])) {
                          a4 === true ? a4 = l4[i4] : l4[i4] !== true && (o4 = s4[0], c3.unshift(s4[1]));
                          break;
                        }
                    }
                    if (a4 !== true)
                      if (a4 && e4["throws"])
                        t4 = a4(t4);
                      else
                        try {
                          t4 = a4(t4);
                        } catch (e5) {
                          return { state: "parsererror", error: a4 ? e5 : "No conversion from " + u4 + " to " + o4 };
                        }
                  }
                }
              return { state: "success", data: t4 };
            }(v2, s3, T2, i3), i3 ? (v2.ifModified && ((u3 = T2.getResponseHeader("Last-Modified")) && (S.lastModified[f2] = u3), (u3 = T2.getResponseHeader("etag")) && (S.etag[f2] = u3)), e3 === 204 || v2.type === "HEAD" ? l3 = "nocontent" : e3 === 304 ? l3 = "notmodified" : (l3 = s3.state, o3 = s3.data, i3 = !(a3 = s3.error))) : (a3 = l3, !e3 && l3 || (l3 = "error", e3 < 0 && (e3 = 0))), T2.status = e3, T2.statusText = (t3 || l3) + "", i3 ? x2.resolveWith(y2, [o3, l3, T2]) : x2.rejectWith(y2, [T2, l3, a3]), T2.statusCode(w2), w2 = void 0, g2 && m2.trigger(i3 ? "ajaxSuccess" : "ajaxError", [T2, v2, i3 ? o3 : a3]), b2.fireWith(y2, [T2, l3]), g2 && (m2.trigger("ajaxComplete", [T2, v2]), --S.active || S.event.trigger("ajaxStop")));
          }
          return T2;
        }, getJSON: function(e2, t2, n2) {
          return S.get(e2, t2, n2, "json");
        }, getScript: function(e2, t2) {
          return S.get(e2, void 0, t2, "script");
        } }), S.each(["get", "post"], function(e2, i2) {
          S[i2] = function(e3, t2, n2, r2) {
            return m(t2) && (r2 = r2 || n2, n2 = t2, t2 = void 0), S.ajax(S.extend({ url: e3, type: i2, dataType: r2, data: t2, success: n2 }, S.isPlainObject(e3) && e3));
          };
        }), S.ajaxPrefilter(function(e2) {
          var t2;
          for (t2 in e2.headers)
            t2.toLowerCase() === "content-type" && (e2.contentType = e2.headers[t2] || "");
        }), S._evalUrl = function(e2, t2, n2) {
          return S.ajax({ url: e2, type: "GET", dataType: "script", cache: true, async: false, global: false, converters: { "text script": function() {
          } }, dataFilter: function(e3) {
            S.globalEval(e3, t2, n2);
          } });
        }, S.fn.extend({ wrapAll: function(e2) {
          var t2;
          return this[0] && (m(e2) && (e2 = e2.call(this[0])), t2 = S(e2, this[0].ownerDocument).eq(0).clone(true), this[0].parentNode && t2.insertBefore(this[0]), t2.map(function() {
            var e3 = this;
            while (e3.firstElementChild)
              e3 = e3.firstElementChild;
            return e3;
          }).append(this)), this;
        }, wrapInner: function(n2) {
          return m(n2) ? this.each(function(e2) {
            S(this).wrapInner(n2.call(this, e2));
          }) : this.each(function() {
            var e2 = S(this), t2 = e2.contents();
            t2.length ? t2.wrapAll(n2) : e2.append(n2);
          });
        }, wrap: function(t2) {
          var n2 = m(t2);
          return this.each(function(e2) {
            S(this).wrapAll(n2 ? t2.call(this, e2) : t2);
          });
        }, unwrap: function(e2) {
          return this.parent(e2).not("body").each(function() {
            S(this).replaceWith(this.childNodes);
          }), this;
        } }), S.expr.pseudos.hidden = function(e2) {
          return !S.expr.pseudos.visible(e2);
        }, S.expr.pseudos.visible = function(e2) {
          return !!(e2.offsetWidth || e2.offsetHeight || e2.getClientRects().length);
        }, S.ajaxSettings.xhr = function() {
          try {
            return new C.XMLHttpRequest();
          } catch (e2) {
          }
        };
        var Bt = { 0: 200, 1223: 204 }, $t = S.ajaxSettings.xhr();
        y.cors = !!$t && "withCredentials" in $t, y.ajax = $t = !!$t, S.ajaxTransport(function(i2) {
          var o2, a2;
          if (y.cors || $t && !i2.crossDomain)
            return { send: function(e2, t2) {
              var n2, r2 = i2.xhr();
              if (r2.open(i2.type, i2.url, i2.async, i2.username, i2.password), i2.xhrFields)
                for (n2 in i2.xhrFields)
                  r2[n2] = i2.xhrFields[n2];
              for (n2 in i2.mimeType && r2.overrideMimeType && r2.overrideMimeType(i2.mimeType), i2.crossDomain || e2["X-Requested-With"] || (e2["X-Requested-With"] = "XMLHttpRequest"), e2)
                r2.setRequestHeader(n2, e2[n2]);
              o2 = function(e3) {
                return function() {
                  o2 && (o2 = a2 = r2.onload = r2.onerror = r2.onabort = r2.ontimeout = r2.onreadystatechange = null, e3 === "abort" ? r2.abort() : e3 === "error" ? typeof r2.status != "number" ? t2(0, "error") : t2(r2.status, r2.statusText) : t2(Bt[r2.status] || r2.status, r2.statusText, (r2.responseType || "text") !== "text" || typeof r2.responseText != "string" ? { binary: r2.response } : { text: r2.responseText }, r2.getAllResponseHeaders()));
                };
              }, r2.onload = o2(), a2 = r2.onerror = r2.ontimeout = o2("error"), r2.onabort !== void 0 ? r2.onabort = a2 : r2.onreadystatechange = function() {
                r2.readyState === 4 && C.setTimeout(function() {
                  o2 && a2();
                });
              }, o2 = o2("abort");
              try {
                r2.send(i2.hasContent && i2.data || null);
              } catch (e3) {
                if (o2)
                  throw e3;
              }
            }, abort: function() {
              o2 && o2();
            } };
        }), S.ajaxPrefilter(function(e2) {
          e2.crossDomain && (e2.contents.script = false);
        }), S.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function(e2) {
          return S.globalEval(e2), e2;
        } } }), S.ajaxPrefilter("script", function(e2) {
          e2.cache === void 0 && (e2.cache = false), e2.crossDomain && (e2.type = "GET");
        }), S.ajaxTransport("script", function(n2) {
          var r2, i2;
          if (n2.crossDomain || n2.scriptAttrs)
            return { send: function(e2, t2) {
              r2 = S("<script>").attr(n2.scriptAttrs || {}).prop({ charset: n2.scriptCharset, src: n2.url }).on("load error", i2 = function(e3) {
                r2.remove(), i2 = null, e3 && t2(e3.type === "error" ? 404 : 200, e3.type);
              }), E.head.appendChild(r2[0]);
            }, abort: function() {
              i2 && i2();
            } };
        });
        var _t, zt = [], Ut = /(=)\?(?=&|$)|\?\?/;
        S.ajaxSetup({ jsonp: "callback", jsonpCallback: function() {
          var e2 = zt.pop() || S.expando + "_" + wt.guid++;
          return this[e2] = true, e2;
        } }), S.ajaxPrefilter("json jsonp", function(e2, t2, n2) {
          var r2, i2, o2, a2 = e2.jsonp !== false && (Ut.test(e2.url) ? "url" : typeof e2.data == "string" && (e2.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && Ut.test(e2.data) && "data");
          if (a2 || e2.dataTypes[0] === "jsonp")
            return r2 = e2.jsonpCallback = m(e2.jsonpCallback) ? e2.jsonpCallback() : e2.jsonpCallback, a2 ? e2[a2] = e2[a2].replace(Ut, "$1" + r2) : e2.jsonp !== false && (e2.url += (Tt.test(e2.url) ? "&" : "?") + e2.jsonp + "=" + r2), e2.converters["script json"] = function() {
              return o2 || S.error(r2 + " was not called"), o2[0];
            }, e2.dataTypes[0] = "json", i2 = C[r2], C[r2] = function() {
              o2 = arguments;
            }, n2.always(function() {
              i2 === void 0 ? S(C).removeProp(r2) : C[r2] = i2, e2[r2] && (e2.jsonpCallback = t2.jsonpCallback, zt.push(r2)), o2 && m(i2) && i2(o2[0]), o2 = i2 = void 0;
            }), "script";
        }), y.createHTMLDocument = ((_t = E.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", _t.childNodes.length === 2), S.parseHTML = function(e2, t2, n2) {
          return typeof e2 != "string" ? [] : (typeof t2 == "boolean" && (n2 = t2, t2 = false), t2 || (y.createHTMLDocument ? ((r2 = (t2 = E.implementation.createHTMLDocument("")).createElement("base")).href = E.location.href, t2.head.appendChild(r2)) : t2 = E), o2 = !n2 && [], (i2 = N.exec(e2)) ? [t2.createElement(i2[1])] : (i2 = xe([e2], t2, o2), o2 && o2.length && S(o2).remove(), S.merge([], i2.childNodes)));
          var r2, i2, o2;
        }, S.fn.load = function(e2, t2, n2) {
          var r2, i2, o2, a2 = this, s2 = e2.indexOf(" ");
          return -1 < s2 && (r2 = ht(e2.slice(s2)), e2 = e2.slice(0, s2)), m(t2) ? (n2 = t2, t2 = void 0) : t2 && typeof t2 == "object" && (i2 = "POST"), 0 < a2.length && S.ajax({ url: e2, type: i2 || "GET", dataType: "html", data: t2 }).done(function(e3) {
            o2 = arguments, a2.html(r2 ? S("<div>").append(S.parseHTML(e3)).find(r2) : e3);
          }).always(n2 && function(e3, t3) {
            a2.each(function() {
              n2.apply(this, o2 || [e3.responseText, t3, e3]);
            });
          }), this;
        }, S.expr.pseudos.animated = function(t2) {
          return S.grep(S.timers, function(e2) {
            return t2 === e2.elem;
          }).length;
        }, S.offset = { setOffset: function(e2, t2, n2) {
          var r2, i2, o2, a2, s2, u2, l2 = S.css(e2, "position"), c2 = S(e2), f2 = {};
          l2 === "static" && (e2.style.position = "relative"), s2 = c2.offset(), o2 = S.css(e2, "top"), u2 = S.css(e2, "left"), (l2 === "absolute" || l2 === "fixed") && -1 < (o2 + u2).indexOf("auto") ? (a2 = (r2 = c2.position()).top, i2 = r2.left) : (a2 = parseFloat(o2) || 0, i2 = parseFloat(u2) || 0), m(t2) && (t2 = t2.call(e2, n2, S.extend({}, s2))), t2.top != null && (f2.top = t2.top - s2.top + a2), t2.left != null && (f2.left = t2.left - s2.left + i2), "using" in t2 ? t2.using.call(e2, f2) : c2.css(f2);
        } }, S.fn.extend({ offset: function(t2) {
          if (arguments.length)
            return t2 === void 0 ? this : this.each(function(e3) {
              S.offset.setOffset(this, t2, e3);
            });
          var e2, n2, r2 = this[0];
          return r2 ? r2.getClientRects().length ? (e2 = r2.getBoundingClientRect(), n2 = r2.ownerDocument.defaultView, { top: e2.top + n2.pageYOffset, left: e2.left + n2.pageXOffset }) : { top: 0, left: 0 } : void 0;
        }, position: function() {
          if (this[0]) {
            var e2, t2, n2, r2 = this[0], i2 = { top: 0, left: 0 };
            if (S.css(r2, "position") === "fixed")
              t2 = r2.getBoundingClientRect();
            else {
              t2 = this.offset(), n2 = r2.ownerDocument, e2 = r2.offsetParent || n2.documentElement;
              while (e2 && (e2 === n2.body || e2 === n2.documentElement) && S.css(e2, "position") === "static")
                e2 = e2.parentNode;
              e2 && e2 !== r2 && e2.nodeType === 1 && ((i2 = S(e2).offset()).top += S.css(e2, "borderTopWidth", true), i2.left += S.css(e2, "borderLeftWidth", true));
            }
            return { top: t2.top - i2.top - S.css(r2, "marginTop", true), left: t2.left - i2.left - S.css(r2, "marginLeft", true) };
          }
        }, offsetParent: function() {
          return this.map(function() {
            var e2 = this.offsetParent;
            while (e2 && S.css(e2, "position") === "static")
              e2 = e2.offsetParent;
            return e2 || re;
          });
        } }), S.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(t2, i2) {
          var o2 = i2 === "pageYOffset";
          S.fn[t2] = function(e2) {
            return $12(this, function(e3, t3, n2) {
              var r2;
              if (x(e3) ? r2 = e3 : e3.nodeType === 9 && (r2 = e3.defaultView), n2 === void 0)
                return r2 ? r2[i2] : e3[t3];
              r2 ? r2.scrollTo(o2 ? r2.pageXOffset : n2, o2 ? n2 : r2.pageYOffset) : e3[t3] = n2;
            }, t2, e2, arguments.length);
          };
        }), S.each(["top", "left"], function(e2, n2) {
          S.cssHooks[n2] = Fe(y.pixelPosition, function(e3, t2) {
            if (t2)
              return t2 = We(e3, n2), Pe.test(t2) ? S(e3).position()[n2] + "px" : t2;
          });
        }), S.each({ Height: "height", Width: "width" }, function(a2, s2) {
          S.each({ padding: "inner" + a2, content: s2, "": "outer" + a2 }, function(r2, o2) {
            S.fn[o2] = function(e2, t2) {
              var n2 = arguments.length && (r2 || typeof e2 != "boolean"), i2 = r2 || (e2 === true || t2 === true ? "margin" : "border");
              return $12(this, function(e3, t3, n3) {
                var r3;
                return x(e3) ? o2.indexOf("outer") === 0 ? e3["inner" + a2] : e3.document.documentElement["client" + a2] : e3.nodeType === 9 ? (r3 = e3.documentElement, Math.max(e3.body["scroll" + a2], r3["scroll" + a2], e3.body["offset" + a2], r3["offset" + a2], r3["client" + a2])) : n3 === void 0 ? S.css(e3, t3, i2) : S.style(e3, t3, n3, i2);
              }, s2, n2 ? e2 : void 0, n2);
            };
          });
        }), S.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e2, t2) {
          S.fn[t2] = function(e3) {
            return this.on(t2, e3);
          };
        }), S.fn.extend({ bind: function(e2, t2, n2) {
          return this.on(e2, null, t2, n2);
        }, unbind: function(e2, t2) {
          return this.off(e2, null, t2);
        }, delegate: function(e2, t2, n2, r2) {
          return this.on(t2, e2, n2, r2);
        }, undelegate: function(e2, t2, n2) {
          return arguments.length === 1 ? this.off(e2, "**") : this.off(t2, e2 || "**", n2);
        }, hover: function(e2, t2) {
          return this.mouseenter(e2).mouseleave(t2 || e2);
        } }), S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e2, n2) {
          S.fn[n2] = function(e3, t2) {
            return 0 < arguments.length ? this.on(n2, null, e3, t2) : this.trigger(n2);
          };
        });
        var Xt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        S.proxy = function(e2, t2) {
          var n2, r2, i2;
          if (typeof t2 == "string" && (n2 = e2[t2], t2 = e2, e2 = n2), m(e2))
            return r2 = s.call(arguments, 2), (i2 = function() {
              return e2.apply(t2 || this, r2.concat(s.call(arguments)));
            }).guid = e2.guid = e2.guid || S.guid++, i2;
        }, S.holdReady = function(e2) {
          e2 ? S.readyWait++ : S.ready(true);
        }, S.isArray = Array.isArray, S.parseJSON = JSON.parse, S.nodeName = A, S.isFunction = m, S.isWindow = x, S.camelCase = X, S.type = w, S.now = Date.now, S.isNumeric = function(e2) {
          var t2 = S.type(e2);
          return (t2 === "number" || t2 === "string") && !isNaN(e2 - parseFloat(e2));
        }, S.trim = function(e2) {
          return e2 == null ? "" : (e2 + "").replace(Xt, "");
        }, typeof define == "function" && define.amd && define("jquery", [], function() {
          return S;
        });
        var Vt = C.jQuery, Gt = C.$;
        return S.noConflict = function(e2) {
          return C.$ === S && (C.$ = Gt), e2 && C.jQuery === S && (C.jQuery = Vt), S;
        }, typeof e == "undefined" && (C.jQuery = C.$ = S), S;
      });
    }
  });

  // ns-hugo:/home/runner/work/ShanyouBlog/ShanyouBlog/themes/virgo/assets/js/libs/darkreader.min.js
  var require_darkreader_min = __commonJS({
    "ns-hugo:/home/runner/work/ShanyouBlog/ShanyouBlog/themes/virgo/assets/js/libs/darkreader.min.js"(exports, module) {
      !function(e, t) {
        typeof exports == "object" && typeof module != "undefined" ? t(exports) : typeof define == "function" && define.amd ? define(["exports"], t) : t((e = typeof globalThis != "undefined" ? globalThis : e || self).DarkReader = {});
      }(exports, function(e) {
        "use strict";
        var t = function() {
          return (t = Object.assign || function(e2) {
            for (var t2, r2 = 1, n2 = arguments.length; r2 < n2; r2++)
              for (var o2 in t2 = arguments[r2])
                Object.prototype.hasOwnProperty.call(t2, o2) && (e2[o2] = t2[o2]);
            return e2;
          }).apply(this, arguments);
        };
        function r(e2, t2, r2, n2) {
          return new (r2 || (r2 = Promise))(function(o2, a2) {
            function i2(e3) {
              try {
                s2(n2.next(e3));
              } catch (e4) {
                a2(e4);
              }
            }
            function u2(e3) {
              try {
                s2(n2.throw(e3));
              } catch (e4) {
                a2(e4);
              }
            }
            function s2(e3) {
              var t3;
              e3.done ? o2(e3.value) : (t3 = e3.value, t3 instanceof r2 ? t3 : new r2(function(e4) {
                e4(t3);
              })).then(i2, u2);
            }
            s2((n2 = n2.apply(e2, t2 || [])).next());
          });
        }
        function n(e2, t2) {
          var r2, n2, o2, a2, i2 = { label: 0, sent: function() {
            if (1 & o2[0])
              throw o2[1];
            return o2[1];
          }, trys: [], ops: [] };
          return a2 = { next: u2(0), throw: u2(1), return: u2(2) }, typeof Symbol == "function" && (a2[Symbol.iterator] = function() {
            return this;
          }), a2;
          function u2(a3) {
            return function(u3) {
              return function(a4) {
                if (r2)
                  throw new TypeError("Generator is already executing.");
                for (; i2; )
                  try {
                    if (r2 = 1, n2 && (o2 = 2 & a4[0] ? n2.return : a4[0] ? n2.throw || ((o2 = n2.return) && o2.call(n2), 0) : n2.next) && !(o2 = o2.call(n2, a4[1])).done)
                      return o2;
                    switch (n2 = 0, o2 && (a4 = [2 & a4[0], o2.value]), a4[0]) {
                      case 0:
                      case 1:
                        o2 = a4;
                        break;
                      case 4:
                        return i2.label++, { value: a4[1], done: false };
                      case 5:
                        i2.label++, n2 = a4[1], a4 = [0];
                        continue;
                      case 7:
                        a4 = i2.ops.pop(), i2.trys.pop();
                        continue;
                      default:
                        if (!(o2 = i2.trys, (o2 = o2.length > 0 && o2[o2.length - 1]) || a4[0] !== 6 && a4[0] !== 2)) {
                          i2 = 0;
                          continue;
                        }
                        if (a4[0] === 3 && (!o2 || a4[1] > o2[0] && a4[1] < o2[3])) {
                          i2.label = a4[1];
                          break;
                        }
                        if (a4[0] === 6 && i2.label < o2[1]) {
                          i2.label = o2[1], o2 = a4;
                          break;
                        }
                        if (o2 && i2.label < o2[2]) {
                          i2.label = o2[2], i2.ops.push(a4);
                          break;
                        }
                        o2[2] && i2.ops.pop(), i2.trys.pop();
                        continue;
                    }
                    a4 = t2.call(e2, i2);
                  } catch (e3) {
                    a4 = [6, e3], n2 = 0;
                  } finally {
                    r2 = o2 = 0;
                  }
                if (5 & a4[0])
                  throw a4[1];
                return { value: a4[0] ? a4[1] : void 0, done: true };
              }([a3, u3]);
            };
          }
        }
        function o(e2) {
          var t2 = typeof Symbol == "function" && Symbol.iterator, r2 = t2 && e2[t2], n2 = 0;
          if (r2)
            return r2.call(e2);
          if (e2 && typeof e2.length == "number")
            return { next: function() {
              return e2 && n2 >= e2.length && (e2 = void 0), { value: e2 && e2[n2++], done: !e2 };
            } };
          throw new TypeError(t2 ? "Object is not iterable." : "Symbol.iterator is not defined.");
        }
        function a(e2, t2) {
          var r2 = typeof Symbol == "function" && e2[Symbol.iterator];
          if (!r2)
            return e2;
          var n2, o2, a2 = r2.call(e2), i2 = [];
          try {
            for (; (t2 === void 0 || t2-- > 0) && !(n2 = a2.next()).done; )
              i2.push(n2.value);
          } catch (e3) {
            o2 = { error: e3 };
          } finally {
            try {
              n2 && !n2.done && (r2 = a2.return) && r2.call(a2);
            } finally {
              if (o2)
                throw o2.error;
            }
          }
          return i2;
        }
        function i(e2, t2, r2) {
          if (r2 || arguments.length === 2)
            for (var n2, o2 = 0, a2 = t2.length; o2 < a2; o2++)
              !n2 && o2 in t2 || (n2 || (n2 = Array.prototype.slice.call(t2, 0, o2)), n2[o2] = t2[o2]);
          return e2.concat(n2 || t2);
        }
        var u = typeof navigator == "undefined" ? "some useragent" : navigator.userAgent.toLowerCase(), s = typeof navigator == "undefined" ? "some platform" : navigator.platform.toLowerCase(), c = u.includes("chrome") || u.includes("chromium"), l = u.includes("thunderbird"), d = u.includes("firefox") || l;
        u.includes("vivaldi"), u.includes("yabrowser"), u.includes("opr") || u.includes("opera"), u.includes("edg");
        var f = u.includes("safari") && !c, h = s.startsWith("win"), p = s.startsWith("mac");
        u.includes("mobile");
        var v, m = typeof ShadowRoot == "function", g = typeof MediaQueryList == "function" && typeof MediaQueryList.prototype.addEventListener == "function";
        (v = u.match(/chrom[e|ium]\/([^ ]+)/)) && v[1] && v[1];
        var b = function() {
          try {
            return document.querySelector(":defined"), true;
          } catch (e2) {
            return false;
          }
        }();
        function y(e2, t2, o2) {
          return r(this, void 0, void 0, function() {
            var r2;
            return n(this, function(n2) {
              switch (n2.label) {
                case 0:
                  return [4, fetch(e2, { cache: "force-cache", credentials: "omit", referrer: o2 })];
                case 1:
                  if (r2 = n2.sent(), d && t2 === "text/css" && e2.startsWith("moz-extension://") && e2.endsWith(".css"))
                    return [2, r2];
                  if (t2 && !r2.headers.get("Content-Type").startsWith(t2))
                    throw new Error("Mime type mismatch when loading " + e2);
                  if (!r2.ok)
                    throw new Error("Unable to load " + e2 + " " + r2.status + " " + r2.statusText);
                  return [2, r2];
              }
            });
          });
        }
        function w(e2, t2) {
          return r(this, void 0, void 0, function() {
            return n(this, function(r2) {
              switch (r2.label) {
                case 0:
                  return [4, y(e2, t2)];
                case 1:
                  return [4, k(r2.sent())];
                case 2:
                  return [2, r2.sent()];
              }
            });
          });
        }
        function k(e2) {
          return r(this, void 0, void 0, function() {
            var t2;
            return n(this, function(r2) {
              switch (r2.label) {
                case 0:
                  return [4, e2.blob()];
                case 1:
                  return t2 = r2.sent(), [4, new Promise(function(e3) {
                    var r3 = new FileReader();
                    r3.onloadend = function() {
                      return e3(r3.result);
                    }, r3.readAsDataURL(t2);
                  })];
                case 2:
                  return [2, r2.sent()];
              }
            });
          });
        }
        var S = function(e2) {
          return r(void 0, void 0, void 0, function() {
            return n(this, function(t2) {
              return [2, Promise.reject(new Error(["Embedded Dark Reader cannot access a cross-origin resource", e2, "Overview your URLs and CORS policies or use", "`DarkReader.setFetchMethod(fetch: (url) => Promise<Response>))`.", "See if using `DarkReader.setFetchMethod(window.fetch)`", "before `DarkReader.enable()` works."].join(" ")))];
            });
          });
        }, _ = S;
        function E(e2) {
          return r(this, void 0, void 0, function() {
            return n(this, function(t2) {
              switch (t2.label) {
                case 0:
                  return [4, _(e2)];
                case 1:
                  return [2, t2.sent()];
              }
            });
          });
        }
        window.chrome || (window.chrome = {}), chrome.runtime || (chrome.runtime = {});
        var x = /* @__PURE__ */ new Set();
        function C() {
          for (var e2 = [], t2 = 0; t2 < arguments.length; t2++)
            e2[t2] = arguments[t2];
          return r(this, void 0, void 0, function() {
            var t3, r2, o2, a2, i2, u2, s2;
            return n(this, function(n2) {
              switch (n2.label) {
                case 0:
                  if (!e2[0] || e2[0].type !== "fetch")
                    return [3, 8];
                  t3 = e2[0].id, n2.label = 1;
                case 1:
                  return n2.trys.push([1, 7, , 8]), r2 = e2[0].data, o2 = r2.url, a2 = r2.responseType, [4, E(o2)];
                case 2:
                  return i2 = n2.sent(), a2 !== "data-url" ? [3, 4] : [4, k(i2)];
                case 3:
                  return u2 = n2.sent(), [3, 6];
                case 4:
                  return [4, i2.text()];
                case 5:
                  u2 = n2.sent(), n2.label = 6;
                case 6:
                  return x.forEach(function(e3) {
                    return e3({ type: "fetch-response", data: u2, error: null, id: t3 });
                  }), [3, 8];
                case 7:
                  return s2 = n2.sent(), console.error(s2), x.forEach(function(e3) {
                    return e3({ type: "fetch-response", data: null, err: s2, id: t3 });
                  }), [3, 8];
                case 8:
                  return [2];
              }
            });
          });
        }
        function V(e2) {
          x.add(e2);
        }
        if (typeof chrome.runtime.sendMessage == "function") {
          var R = chrome.runtime.sendMessage;
          chrome.runtime.sendMessage = function() {
            for (var e2 = [], t2 = 0; t2 < arguments.length; t2++)
              e2[t2] = arguments[t2];
            C.apply(void 0, i([], a(e2))), R.apply(chrome.runtime, e2);
          };
        } else
          chrome.runtime.sendMessage = C;
        if (chrome.runtime.onMessage || (chrome.runtime.onMessage = {}), typeof chrome.runtime.onMessage.addListener == "function") {
          var M = chrome.runtime.onMessage.addListener;
          chrome.runtime.onMessage.addListener = function() {
            for (var e2 = [], t2 = 0; t2 < arguments.length; t2++)
              e2[t2] = arguments[t2];
            V.apply(void 0, i([], a(e2))), M.apply(chrome.runtime.onMessage, e2);
          };
        } else
          chrome.runtime.onMessage.addListener = V;
        var T = "dynamicTheme", A = { background: "#181a1b", text: "#e8e6e3" }, L = { background: "#dcdad7", text: "#181a1b" }, P = { mode: 1, brightness: 100, contrast: 100, grayscale: 0, sepia: 0, useFont: false, fontFamily: p ? "Helvetica Neue" : h ? "Segoe UI" : "Open Sans", textStroke: 0, engine: T, stylesheet: "", darkSchemeBackgroundColor: A.background, darkSchemeTextColor: A.text, lightSchemeBackgroundColor: L.background, lightSchemeTextColor: L.text, scrollbarColor: p ? "" : "auto", selectionColor: "auto", styleSystemControls: true };
        function j(e2, t2) {
          var r2, n2;
          if (function(e3) {
            return e3.length != null;
          }(e2))
            for (var a2 = 0, i2 = e2.length; a2 < i2; a2++)
              t2(e2[a2]);
          else
            try {
              for (var u2 = o(e2), s2 = u2.next(); !s2.done; s2 = u2.next()) {
                t2(s2.value);
              }
            } catch (e3) {
              r2 = { error: e3 };
            } finally {
              try {
                s2 && !s2.done && (n2 = u2.return) && n2.call(u2);
              } finally {
                if (r2)
                  throw r2.error;
              }
            }
        }
        function O(e2, t2) {
          j(t2, function(t3) {
            return e2.push(t3);
          });
        }
        function D() {
          for (var e2 = [], t2 = 0; t2 < arguments.length; t2++)
            e2[t2] = arguments[t2];
        }
        function F() {
          for (var e2 = [], t2 = 0; t2 < arguments.length; t2++)
            e2[t2] = arguments[t2];
        }
        function q(e2) {
          var t2, r2 = false, n2 = null;
          return Object.assign(function() {
            for (var o2 = [], u2 = 0; u2 < arguments.length; u2++)
              o2[u2] = arguments[u2];
            t2 = o2, n2 ? r2 = true : (e2.apply(void 0, i([], a(t2))), n2 = requestAnimationFrame(function() {
              n2 = null, r2 && (e2.apply(void 0, i([], a(t2))), r2 = false);
            }));
          }, { cancel: function() {
            cancelAnimationFrame(n2), r2 = false, n2 = null;
          } });
        }
        function N(e2) {
          var t2 = 0;
          return e2.seconds && (t2 += 1e3 * e2.seconds), e2.minutes && (t2 += 60 * e2.minutes * 1e3), e2.hours && (t2 += 60 * e2.hours * 60 * 1e3), e2.days && (t2 += 24 * e2.days * 60 * 60 * 1e3), t2;
        }
        function B(e2) {
          e2 && e2.parentNode && e2.parentNode.removeChild(e2);
        }
        function W(e2, t2, r2) {
          r2 === void 0 && (r2 = Function.prototype);
          var n2 = N({ seconds: 2 }), o2 = N({ seconds: 10 }), a2 = e2.previousSibling, i2 = e2.parentNode;
          if (!i2)
            throw new Error("Unable to watch for node position: parent element not found");
          if (t2 === "prev-sibling" && !a2)
            throw new Error("Unable to watch for node position: there is no previous sibling");
          var u2 = 0, s2 = null, c2 = null, l2 = q(function() {
            if (!c2) {
              u2++;
              var f3 = Date.now();
              if (s2 == null)
                s2 = f3;
              else if (u2 >= 10) {
                if (f3 - s2 < o2)
                  return F("Node position watcher paused: retry in " + n2 + "ms", e2, a2), void (c2 = setTimeout(function() {
                    s2 = null, u2 = 0, c2 = null, l2();
                  }, n2));
                s2 = f3, u2 = 1;
              }
              if (t2 === "parent" && a2 && a2.parentNode !== i2)
                return F("Unable to restore node position: sibling parent changed", e2, a2, i2), void h2();
              if (t2 === "prev-sibling") {
                if (a2.parentNode == null)
                  return F("Unable to restore node position: sibling was removed", e2, a2, i2), void h2();
                a2.parentNode !== i2 && (F("Style was moved to another parent", e2, a2, i2), p2(a2.parentNode));
              }
              F("Restoring node position", e2, a2, i2), i2.insertBefore(e2, a2 ? a2.nextSibling : i2.firstChild), d2.takeRecords(), r2 && r2();
            }
          }), d2 = new MutationObserver(function() {
            (t2 === "parent" && e2.parentNode !== i2 || t2 === "prev-sibling" && e2.previousSibling !== a2) && l2();
          }), f2 = function() {
            d2.observe(i2, { childList: true });
          }, h2 = function() {
            clearTimeout(c2), d2.disconnect(), l2.cancel();
          }, p2 = function(e3) {
            i2 = e3, h2(), f2();
          };
          return f2(), { run: f2, stop: h2, skip: function() {
            d2.takeRecords();
          } };
        }
        function I(e2, t2) {
          if (e2 != null)
            for (var r2 = document.createTreeWalker(e2, NodeFilter.SHOW_ELEMENT, { acceptNode: function(e3) {
              return e3.shadowRoot == null ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
            } }), n2 = e2.shadowRoot ? r2.currentNode : r2.nextNode(); n2 != null; n2 = r2.nextNode())
              t2(n2), I(n2.shadowRoot, t2);
        }
        function U() {
          return document.readyState === "complete" || document.readyState === "interactive";
        }
        var $12 = /* @__PURE__ */ new Set();
        function z(e2) {
          $12.add(e2);
        }
        function H(e2) {
          $12.delete(e2);
        }
        function G() {
          return document.readyState === "complete";
        }
        var Q = /* @__PURE__ */ new Set();
        function K(e2) {
          Q.add(e2);
        }
        if (!U()) {
          var J = function() {
            U() && ($12.forEach(function(e2) {
              return e2();
            }), $12.clear(), G() && (document.removeEventListener("readystatechange", J), Q.forEach(function(e2) {
              return e2();
            }), Q.clear()));
          };
          document.addEventListener("readystatechange", J);
        }
        var X, Y = /* @__PURE__ */ new Map(), Z = /* @__PURE__ */ new WeakMap();
        function ee(e2, t2) {
          var r2, n2, o2;
          if (Y.has(e2))
            r2 = Y.get(e2), n2 = Z.get(r2);
          else {
            var a2 = false, i2 = false;
            (r2 = new MutationObserver(function(t3) {
              if (function(e3) {
                if (e3.length > 1e3)
                  return true;
                for (var t4 = 0, r4 = 0; r4 < e3.length; r4++)
                  if ((t4 += e3[r4].addedNodes.length) > 1e3)
                    return true;
                return false;
              }(t3))
                !a2 || U() ? n2.forEach(function(t4) {
                  return (0, t4.onHugeMutations)(e2);
                }) : i2 || (z(o2 = function() {
                  return n2.forEach(function(t4) {
                    return (0, t4.onHugeMutations)(e2);
                  });
                }), i2 = true), a2 = true;
              else {
                var r3 = function(e3) {
                  var t4 = /* @__PURE__ */ new Set(), r4 = /* @__PURE__ */ new Set(), n3 = /* @__PURE__ */ new Set();
                  e3.forEach(function(e4) {
                    j(e4.addedNodes, function(e5) {
                      e5 instanceof Element && e5.isConnected && t4.add(e5);
                    }), j(e4.removedNodes, function(e5) {
                      e5 instanceof Element && (e5.isConnected ? n3.add(e5) : r4.add(e5));
                    });
                  }), n3.forEach(function(e4) {
                    return t4.delete(e4);
                  });
                  var o3 = [], a3 = [];
                  return t4.forEach(function(e4) {
                    t4.has(e4.parentElement) && o3.push(e4);
                  }), r4.forEach(function(e4) {
                    r4.has(e4.parentElement) && a3.push(e4);
                  }), o3.forEach(function(e4) {
                    return t4.delete(e4);
                  }), a3.forEach(function(e4) {
                    return r4.delete(e4);
                  }), { additions: t4, moves: n3, deletions: r4 };
                }(t3);
                n2.forEach(function(e3) {
                  return (0, e3.onMinorMutations)(r3);
                });
              }
            })).observe(e2, { childList: true, subtree: true }), Y.set(e2, r2), n2 = /* @__PURE__ */ new Set(), Z.set(r2, n2);
          }
          return n2.add(t2), { disconnect: function() {
            n2.delete(t2), o2 && H(o2), n2.size === 0 && (r2.disconnect(), Z.delete(r2), Y.delete(e2));
          } };
        }
        var te = /* @__PURE__ */ new Map();
        function re(e2) {
          return X || (X = document.createElement("a")), X.href = e2, X.href;
        }
        function ne(e2, t2) {
          t2 === void 0 && (t2 = null);
          var r2 = e2 + (t2 ? ";" + t2 : "");
          if (te.has(r2))
            return te.get(r2);
          if (t2) {
            var n2 = new URL(e2, re(t2));
            return te.set(r2, n2), n2;
          }
          var o2 = new URL(re(e2));
          return te.set(e2, o2), o2;
        }
        function oe(e2, t2) {
          if (t2.match(/^data\\?\:/))
            return t2;
          var r2 = ne(e2);
          return ne(t2, r2.href).href;
        }
        function ae(e2, t2, r2) {
          j(e2, function(e3) {
            if (e3.selectorText)
              t2(e3);
            else if (e3.href)
              try {
                ae(e3.styleSheet.cssRules, t2, r2);
              } catch (e4) {
                D("Found a non-loaded link."), r2 && r2();
              }
            else if (e3.media) {
              var n2 = Array.from(e3.media), o2 = n2.some(function(e4) {
                return e4.startsWith("screen") || e4.startsWith("all");
              }), a2 = n2.some(function(e4) {
                return e4.startsWith("print") || e4.startsWith("speech");
              });
              !o2 && a2 || ae(e3.cssRules, t2, r2);
            } else
              e3.conditionText ? CSS.supports(e3.conditionText) && ae(e3.cssRules, t2, r2) : F("CSSRule type not supported", e3);
          });
        }
        var ie = ["background", "border", "border-color", "border-bottom", "border-left", "border-right", "border-top", "outline", "outline-color"], ue = f ? ie.map(function(e2) {
          return [e2, new RegExp(e2 + ":\\s*(.*?)\\s*;")];
        }) : null;
        function se(e2, t2) {
          j(e2, function(r2) {
            var n2 = e2.getPropertyValue(r2).trim();
            n2 && t2(r2, n2);
          }), f && e2.cssText.includes("var(") ? ue.forEach(function(r2) {
            var n2 = a(r2, 2), o2 = n2[0], i2 = n2[1], u2 = e2.cssText.match(i2);
            if (u2 && u2[1]) {
              var s2 = u2[1].trim();
              t2(o2, s2);
            }
          }) : ie.forEach(function(r2) {
            var n2 = e2.getPropertyValue(r2);
            n2 && n2.includes("var(") && t2(r2, n2);
          });
        }
        var ce = /url\((('.+?')|(".+?")|([^\)]*?))\)/g, le = /@import\s*(url\()?(('.+?')|(".+?")|([^\)]*?))\)?;?/g;
        function de(e2) {
          return e2.replace(/^url\((.*)\)$/, "$1").replace(/^"(.*)"$/, "$1").replace(/^'(.*)'$/, "$1");
        }
        function fe(e2) {
          var t2 = ne(e2);
          return "" + t2.origin + t2.pathname.replace(/\?.*$/, "").replace(/(\/)([^\/]+)$/i, "$1");
        }
        var he = /\/\*[\s\S]*?\*\//g;
        var pe = /@font-face\s*{[^}]*}/g;
        function ve(e2) {
          var t2 = e2.h, r2 = e2.s, n2 = e2.l, o2 = e2.a, i2 = o2 === void 0 ? 1 : o2;
          if (r2 === 0) {
            var u2 = a([n2, n2, n2].map(function(e3) {
              return Math.round(255 * e3);
            }), 3), s2 = u2[0], c2 = u2[1];
            return { r: s2, g: u2[2], b: c2, a: i2 };
          }
          var l2 = (1 - Math.abs(2 * n2 - 1)) * r2, d2 = l2 * (1 - Math.abs(t2 / 60 % 2 - 1)), f2 = n2 - l2 / 2, h2 = a((t2 < 60 ? [l2, d2, 0] : t2 < 120 ? [d2, l2, 0] : t2 < 180 ? [0, l2, d2] : t2 < 240 ? [0, d2, l2] : t2 < 300 ? [d2, 0, l2] : [l2, 0, d2]).map(function(e3) {
            return Math.round(255 * (e3 + f2));
          }), 3);
          return { r: h2[0], g: h2[1], b: h2[2], a: i2 };
        }
        function me(e2) {
          var t2 = e2.r, r2 = e2.g, n2 = e2.b, o2 = e2.a, a2 = o2 === void 0 ? 1 : o2, i2 = t2 / 255, u2 = r2 / 255, s2 = n2 / 255, c2 = Math.max(i2, u2, s2), l2 = Math.min(i2, u2, s2), d2 = c2 - l2, f2 = (c2 + l2) / 2;
          if (d2 === 0)
            return { h: 0, s: 0, l: f2, a: a2 };
          var h2 = 60 * (c2 === i2 ? (u2 - s2) / d2 % 6 : c2 === u2 ? (s2 - i2) / d2 + 2 : (i2 - u2) / d2 + 4);
          return h2 < 0 && (h2 += 360), { h: h2, s: d2 / (1 - Math.abs(2 * f2 - 1)), l: f2, a: a2 };
        }
        function ge(e2, t2) {
          t2 === void 0 && (t2 = 0);
          var r2 = e2.toFixed(t2);
          if (t2 === 0)
            return r2;
          var n2 = r2.indexOf(".");
          if (n2 >= 0) {
            var o2 = r2.match(/0+$/);
            if (o2)
              return o2.index === n2 + 1 ? r2.substring(0, n2) : r2.substring(0, o2.index);
          }
          return r2;
        }
        function be(e2) {
          var t2 = e2.h, r2 = e2.s, n2 = e2.l, o2 = e2.a;
          return o2 != null && o2 < 1 ? "hsla(" + ge(t2) + ", " + ge(100 * r2) + "%, " + ge(100 * n2) + "%, " + ge(o2, 2) + ")" : "hsl(" + ge(t2) + ", " + ge(100 * r2) + "%, " + ge(100 * n2) + "%)";
        }
        var ye = /^rgba?\([^\(\)]+\)$/, we = /^hsla?\([^\(\)]+\)$/, ke = /^#[0-9a-f]+$/i;
        function Se(e2) {
          var t2, r2, n2, o2, i2, u2 = e2.trim().toLowerCase();
          if (u2.match(ye))
            return t2 = a(_e(u2, Ee, xe, Ce), 4), r2 = t2[0], n2 = t2[1], o2 = t2[2], i2 = t2[3], { r: r2, g: n2, b: o2, a: i2 === void 0 ? 1 : i2 };
          if (u2.match(we))
            return function(e3) {
              var t3 = a(_e(e3, Ve, Re, Me), 4), r3 = t3[0], n3 = t3[1], o3 = t3[2], i3 = t3[3];
              return ve({ h: r3, s: n3, l: o3, a: i3 === void 0 ? 1 : i3 });
            }(u2);
          if (u2.match(ke))
            return function(e3) {
              var t3 = e3.substring(1);
              switch (t3.length) {
                case 3:
                case 4:
                  var r3 = a([0, 1, 2].map(function(e4) {
                    return parseInt("" + t3[e4] + t3[e4], 16);
                  }), 3);
                  return { r: r3[0], g: r3[1], b: r3[2], a: t3.length === 3 ? 1 : parseInt("" + t3[3] + t3[3], 16) / 255 };
                case 6:
                case 8:
                  var n3 = a([0, 2, 4].map(function(e4) {
                    return parseInt(t3.substring(e4, e4 + 2), 16);
                  }), 3);
                  return { r: n3[0], g: n3[1], b: n3[2], a: t3.length === 6 ? 1 : parseInt(t3.substring(6, 8), 16) / 255 };
              }
              throw new Error("Unable to parse " + e3);
            }(u2);
          if (Te.has(u2))
            return function(e3) {
              var t3 = Te.get(e3);
              return { r: t3 >> 16 & 255, g: t3 >> 8 & 255, b: t3 >> 0 & 255, a: 1 };
            }(u2);
          if (Ae.has(u2))
            return function(e3) {
              var t3 = Ae.get(e3);
              return { r: t3 >> 16 & 255, g: t3 >> 8 & 255, b: t3 >> 0 & 255, a: 1 };
            }(u2);
          if (e2 === "transparent")
            return { r: 0, g: 0, b: 0, a: 0 };
          throw new Error("Unable to parse " + e2);
        }
        function _e(e2, t2, r2, n2) {
          var o2 = e2.split(t2).filter(function(e3) {
            return e3;
          }), i2 = Object.entries(n2);
          return o2.map(function(e3) {
            return e3.trim();
          }).map(function(e3, t3) {
            var n3, o3 = i2.find(function(t4) {
              var r3 = a(t4, 1)[0];
              return e3.endsWith(r3);
            });
            return n3 = o3 ? parseFloat(e3.substring(0, e3.length - o3[0].length)) / o3[1] * r2[t3] : parseFloat(e3), r2[t3] > 1 ? Math.round(n3) : n3;
          });
        }
        var Ee = /rgba?|\(|\)|\/|,|\s/gi, xe = [255, 255, 255, 1], Ce = { "%": 100 };
        var Ve = /hsla?|\(|\)|\/|,|\s/gi, Re = [360, 1, 1, 1], Me = { "%": 100, deg: 360, rad: 2 * Math.PI, turn: 1 };
        var Te = new Map(Object.entries({ aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgrey: 11119017, darkgreen: 25600, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, grey: 8421504, green: 32768, greenyellow: 11403055, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgrey: 13882323, lightgreen: 9498256, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 })), Ae = new Map(Object.entries({ ActiveBorder: 3906044, ActiveCaption: 0, AppWorkspace: 11184810, Background: 6513614, ButtonFace: 16777215, ButtonHighlight: 15329769, ButtonShadow: 10461343, ButtonText: 0, CaptionText: 0, GrayText: 8355711, Highlight: 11720703, HighlightText: 0, InactiveBorder: 16777215, InactiveCaption: 16777215, InactiveCaptionText: 0, InfoBackground: 16514245, InfoText: 0, Menu: 16185078, MenuText: 16777215, Scrollbar: 11184810, ThreeDDarkShadow: 0, ThreeDFace: 12632256, ThreeDHighlight: 16777215, ThreeDLightShadow: 16777215, ThreeDShadow: 0, Window: 15527148, WindowFrame: 11184810, WindowText: 0, "-webkit-focus-ring-color": 15046400 }).map(function(e2) {
          var t2 = a(e2, 2), r2 = t2[0], n2 = t2[1];
          return [r2.toLowerCase(), n2];
        }));
        function Le(e2, t2, r2, n2, o2) {
          return (e2 - t2) * (o2 - n2) / (r2 - t2) + n2;
        }
        function Pe(e2, t2, r2) {
          return Math.min(r2, Math.max(t2, e2));
        }
        function je(e2, t2) {
          for (var r2 = [], n2 = 0, o2 = e2.length; n2 < o2; n2++) {
            r2[n2] = [];
            for (var a2 = 0, i2 = t2[0].length; a2 < i2; a2++) {
              for (var u2 = 0, s2 = 0, c2 = e2[0].length; s2 < c2; s2++)
                u2 += e2[n2][s2] * t2[s2][a2];
              r2[n2][a2] = u2;
            }
          }
          return r2;
        }
        function Oe(e2, t2, r2) {
          r2 === void 0 && (r2 = 0);
          for (var n2, o2 = []; n2 = e2.exec(t2); )
            o2.push(n2[r2]);
          return o2;
        }
        function De(e2) {
          var t2 = Fe.identity();
          return e2.sepia !== 0 && (t2 = je(t2, Fe.sepia(e2.sepia / 100))), e2.grayscale !== 0 && (t2 = je(t2, Fe.grayscale(e2.grayscale / 100))), e2.contrast !== 100 && (t2 = je(t2, Fe.contrast(e2.contrast / 100))), e2.brightness !== 100 && (t2 = je(t2, Fe.brightness(e2.brightness / 100))), e2.mode === 1 && (t2 = je(t2, Fe.invertNHue())), t2;
        }
        var Fe = { identity: function() {
          return [[1, 0, 0, 0, 0], [0, 1, 0, 0, 0], [0, 0, 1, 0, 0], [0, 0, 0, 1, 0], [0, 0, 0, 0, 1]];
        }, invertNHue: function() {
          return [[0.333, -0.667, -0.667, 0, 1], [-0.667, 0.333, -0.667, 0, 1], [-0.667, -0.667, 0.333, 0, 1], [0, 0, 0, 1, 0], [0, 0, 0, 0, 1]];
        }, brightness: function(e2) {
          return [[e2, 0, 0, 0, 0], [0, e2, 0, 0, 0], [0, 0, e2, 0, 0], [0, 0, 0, 1, 0], [0, 0, 0, 0, 1]];
        }, contrast: function(e2) {
          var t2 = (1 - e2) / 2;
          return [[e2, 0, 0, 0, t2], [0, e2, 0, 0, t2], [0, 0, e2, 0, t2], [0, 0, 0, 1, 0], [0, 0, 0, 0, 1]];
        }, sepia: function(e2) {
          return [[0.393 + 0.607 * (1 - e2), 0.769 - 0.769 * (1 - e2), 0.189 - 0.189 * (1 - e2), 0, 0], [0.349 - 0.349 * (1 - e2), 0.686 + 0.314 * (1 - e2), 0.168 - 0.168 * (1 - e2), 0, 0], [0.272 - 0.272 * (1 - e2), 0.534 - 0.534 * (1 - e2), 0.131 + 0.869 * (1 - e2), 0, 0], [0, 0, 0, 1, 0], [0, 0, 0, 0, 1]];
        }, grayscale: function(e2) {
          return [[0.2126 + 0.7874 * (1 - e2), 0.7152 - 0.7152 * (1 - e2), 0.0722 - 0.0722 * (1 - e2), 0, 0], [0.2126 - 0.2126 * (1 - e2), 0.7152 + 0.2848 * (1 - e2), 0.0722 - 0.0722 * (1 - e2), 0, 0], [0.2126 - 0.2126 * (1 - e2), 0.7152 - 0.7152 * (1 - e2), 0.0722 + 0.9278 * (1 - e2), 0, 0], [0, 0, 0, 1, 0], [0, 0, 0, 0, 1]];
        } };
        function qe(e2) {
          return e2[e2.mode === 1 ? "darkSchemeBackgroundColor" : "lightSchemeBackgroundColor"];
        }
        function Ne(e2) {
          return e2[e2.mode === 1 ? "darkSchemeTextColor" : "lightSchemeTextColor"];
        }
        var Be = /* @__PURE__ */ new Map(), We = /* @__PURE__ */ new Map();
        function Ie(e2) {
          if (We.has(e2))
            return We.get(e2);
          var t2 = me(Se(e2));
          return We.set(e2, t2), t2;
        }
        var Ue = ["r", "g", "b", "a"], $e = ["mode", "brightness", "contrast", "grayscale", "sepia", "darkSchemeBackgroundColor", "darkSchemeTextColor", "lightSchemeBackgroundColor", "lightSchemeTextColor"];
        function ze(e2, t2, r2, n2, o2) {
          var i2;
          Be.has(r2) ? i2 = Be.get(r2) : (i2 = /* @__PURE__ */ new Map(), Be.set(r2, i2));
          var u2 = function(e3, t3) {
            return Ue.map(function(t4) {
              return e3[t4];
            }).concat($e.map(function(e4) {
              return t3[e4];
            })).join(";");
          }(e2, t2);
          if (i2.has(u2))
            return i2.get(u2);
          var s2 = ve(r2(me(e2), n2 == null ? null : Ie(n2), o2 == null ? null : Ie(o2))), c2 = s2.r, l2 = s2.g, d2 = s2.b, f2 = s2.a, h2 = a(function(e3, t3) {
            var r3 = a(e3, 3), n3 = je(t3, [[r3[0] / 255], [r3[1] / 255], [r3[2] / 255], [1], [1]]);
            return [0, 1, 2].map(function(e4) {
              return Pe(Math.round(255 * n3[e4][0]), 0, 255);
            });
          }([c2, l2, d2], De(t2)), 3), p2 = h2[0], v2 = h2[1], m2 = h2[2], g2 = f2 === 1 ? function(e3) {
            var t3 = e3.r, r3 = e3.g, n3 = e3.b, o3 = e3.a;
            return "#" + (o3 != null && o3 < 1 ? [t3, r3, n3, Math.round(255 * o3)] : [t3, r3, n3]).map(function(e4) {
              return (e4 < 16 ? "0" : "") + e4.toString(16);
            }).join("");
          }({ r: p2, g: v2, b: m2 }) : function(e3) {
            var t3 = e3.r, r3 = e3.g, n3 = e3.b, o3 = e3.a;
            return o3 != null && o3 < 1 ? "rgba(" + ge(t3) + ", " + ge(r3) + ", " + ge(n3) + ", " + ge(o3, 2) + ")" : "rgb(" + ge(t3) + ", " + ge(r3) + ", " + ge(n3) + ")";
          }({ r: p2, g: v2, b: m2, a: f2 });
          return i2.set(u2, g2), g2;
        }
        function He(e2) {
          return e2;
        }
        function Ge(e2, t2) {
          var r2 = qe(t2);
          return ze(e2, t2, Qe, Ne(t2), r2);
        }
        function Qe(e2, t2, r2) {
          var n2, o2 = e2.h, a2 = e2.s, i2 = e2.l, u2 = e2.a, s2 = i2 < 0.5;
          s2 ? n2 = i2 < 0.2 || a2 < 0.12 : n2 = a2 < 0.24 || i2 > 0.8 && (o2 > 200 && o2 < 280);
          var c2 = o2, l2 = i2;
          return n2 && (s2 ? (c2 = t2.h, l2 = t2.s) : (c2 = r2.h, l2 = r2.s)), { h: c2, s: l2, l: Le(i2, 0, 1, t2.l, r2.l), a: u2 };
        }
        function Ke(e2, t2) {
          var r2 = e2.h, n2 = e2.s, o2 = e2.l, a2 = e2.a, i2 = n2 < 0.12 || o2 > 0.8 && (r2 > 200 && r2 < 280);
          if (o2 < 0.5) {
            var u2 = Le(o2, 0, 0.5, 0, 0.4);
            return i2 ? { h: t2.h, s: t2.s, l: u2, a: a2 } : { h: r2, s: n2, l: u2, a: a2 };
          }
          var s2 = Le(o2, 0.5, 1, 0.4, t2.l);
          if (i2)
            return { h: t2.h, s: t2.s, l: s2, a: a2 };
          var c2 = r2;
          r2 > 60 && r2 < 180 && (c2 = r2 > 120 ? Le(r2, 120, 180, 135, 180) : Le(r2, 60, 120, 60, 105));
          return { h: c2, s: n2, l: s2, a: a2 };
        }
        function Je(e2, r2) {
          if (r2.mode === 0)
            return Ge(e2, r2);
          var n2 = qe(r2);
          return ze(e2, t(t({}, r2), { mode: 0 }), Ke, n2);
        }
        var Xe, Ye = 0.55;
        function Ze(e2) {
          return Le(e2, 205, 245, 205, 220);
        }
        function et(e2, t2) {
          var r2 = e2.h, n2 = e2.s, o2 = e2.l, a2 = e2.a, i2 = o2 < 0.2 || n2 < 0.24, u2 = !i2 && r2 > 205 && r2 < 245;
          if (o2 > 0.5) {
            var s2 = Le(o2, 0.5, 1, Ye, t2.l);
            if (i2)
              return { h: t2.h, s: t2.s, l: s2, a: a2 };
            var c2 = r2;
            return u2 && (c2 = Ze(r2)), { h: c2, s: n2, l: s2, a: a2 };
          }
          if (i2)
            return { h: t2.h, s: t2.s, l: Le(o2, 0, 0.5, t2.l, Ye), a: a2 };
          var l2, d2 = r2;
          return u2 ? (d2 = Ze(r2), l2 = Le(o2, 0, 0.5, t2.l, Math.min(1, 0.6000000000000001))) : l2 = Le(o2, 0, 0.5, t2.l, Ye), { h: d2, s: n2, l: l2, a: a2 };
        }
        function tt(e2, r2) {
          if (r2.mode === 0)
            return Ge(e2, r2);
          var n2 = Ne(r2);
          return ze(e2, t(t({}, r2), { mode: 0 }), et, n2);
        }
        function rt(e2, t2, r2) {
          var n2 = e2.h, o2 = e2.s, a2 = e2.l, i2 = e2.a, u2 = n2, s2 = o2;
          return (a2 < 0.2 || o2 < 0.24) && (a2 < 0.5 ? (u2 = t2.h, s2 = t2.s) : (u2 = r2.h, s2 = r2.s)), { h: u2, s: s2, l: Le(a2, 0, 1, 0.5, 0.2), a: i2 };
        }
        function nt(e2, r2) {
          if (r2.mode === 0)
            return Ge(e2, r2);
          var n2 = Ne(r2), o2 = qe(r2);
          return ze(e2, t(t({}, r2), { mode: 0 }), rt, n2, o2);
        }
        function ot(e2, t2) {
          return Je(e2, t2);
        }
        function at(e2) {
          var t2 = [];
          return e2.mode === Xe.dark && t2.push("invert(100%) hue-rotate(180deg)"), e2.brightness !== 100 && t2.push("brightness(" + e2.brightness + "%)"), e2.contrast !== 100 && t2.push("contrast(" + e2.contrast + "%)"), e2.grayscale !== 0 && t2.push("grayscale(" + e2.grayscale + "%)"), e2.sepia !== 0 && t2.push("sepia(" + e2.sepia + "%)"), t2.length === 0 ? null : t2.join(" ");
        }
        !function(e2) {
          e2[e2.light = 0] = "light", e2[e2.dark = 1] = "dark";
        }(Xe || (Xe = {}));
        var it = 0, ut = /* @__PURE__ */ new Map(), st = /* @__PURE__ */ new Map();
        function ct(e2) {
          return r(this, void 0, void 0, function() {
            return n(this, function(t2) {
              return [2, new Promise(function(t3, r2) {
                var n2 = ++it;
                ut.set(n2, t3), st.set(n2, r2), chrome.runtime.sendMessage({ type: "fetch", data: e2, id: n2 });
              })];
            });
          });
        }
        function lt(e2) {
          return r(this, void 0, void 0, function() {
            var r2, o2, a2;
            return n(this, function(n2) {
              switch (n2.label) {
                case 0:
                  return e2.startsWith("data:") ? (r2 = e2, [3, 3]) : [3, 1];
                case 1:
                  return [4, dt(e2)];
                case 2:
                  r2 = n2.sent(), n2.label = 3;
                case 3:
                  return [4, ft(r2)];
                case 4:
                  return o2 = n2.sent(), a2 = function(e3) {
                    ht || (t2 = vt, r3 = vt, (ht = document.createElement("canvas")).width = t2, ht.height = r3, (pt = ht.getContext("2d")).imageSmoothingEnabled = false);
                    var t2, r3;
                    var n3 = e3.naturalWidth, o3 = e3.naturalHeight;
                    if (o3 === 0 || n3 === 0)
                      return F("logWarn(Image is empty " + e3.currentSrc + ")"), null;
                    var a3 = n3 * o3, i2 = Math.min(1, Math.sqrt(vt / a3)), u2 = Math.ceil(n3 * i2), s2 = Math.ceil(o3 * i2);
                    pt.clearRect(0, 0, u2, s2), pt.drawImage(e3, 0, 0, n3, o3, 0, 0, u2, s2);
                    var c2, l2, d2, f2, h2, p2, v2, m2 = pt.getImageData(0, 0, u2, s2).data, g2 = 0.05, b2 = 0.4, y2 = 0.7, w2 = 0, k2 = 0, S2 = 0;
                    for (d2 = 0; d2 < s2; d2++)
                      for (l2 = 0; l2 < u2; l2++)
                        f2 = m2[(c2 = 4 * (d2 * u2 + l2)) + 0] / 255, h2 = m2[c2 + 1] / 255, p2 = m2[c2 + 2] / 255, m2[c2 + 3] / 255 < g2 ? w2++ : ((v2 = 0.2126 * f2 + 0.7152 * h2 + 0.0722 * p2) < b2 && k2++, v2 > y2 && S2++);
                    var _2 = u2 * s2, E2 = _2 - w2;
                    return { isDark: k2 / E2 >= 0.7, isLight: S2 / E2 >= 0.7, isTransparent: w2 / _2 >= 0.1, isLarge: a3 >= 48e4 };
                  }(o2), [2, t({ src: e2, dataURL: r2, width: o2.naturalWidth, height: o2.naturalHeight }, a2)];
              }
            });
          });
        }
        function dt(e2) {
          return r(this, void 0, void 0, function() {
            return n(this, function(t2) {
              switch (t2.label) {
                case 0:
                  return new URL(e2).origin !== location.origin ? [3, 2] : [4, w(e2)];
                case 1:
                  return [2, t2.sent()];
                case 2:
                  return [4, ct({ url: e2, responseType: "data-url" })];
                case 3:
                  return [2, t2.sent()];
              }
            });
          });
        }
        function ft(e2) {
          return r(this, void 0, void 0, function() {
            return n(this, function(t2) {
              return [2, new Promise(function(t3, r2) {
                var n2 = new Image();
                n2.onload = function() {
                  return t3(n2);
                }, n2.onerror = function() {
                  return r2("Unable to load image " + e2);
                }, n2.src = e2;
              })];
            });
          });
        }
        chrome.runtime.onMessage.addListener(function(e2) {
          var t2 = e2.type, r2 = e2.data, n2 = e2.error, o2 = e2.id;
          if (t2 === "fetch-response") {
            var a2 = ut.get(o2), i2 = st.get(o2);
            ut.delete(o2), st.delete(o2), n2 ? i2 && i2(n2) : a2 && a2(r2);
          }
        });
        var ht, pt, vt = 1024;
        function mt(e2, t2) {
          var r2 = e2.dataURL, n2 = e2.width, o2 = e2.height, a2 = ['<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="' + n2 + '" height="' + o2 + '">', "<defs>", '<filter id="darkreader-image-filter">', '<feColorMatrix type="matrix" values="' + De(t2).slice(0, 4).map(function(e3) {
            return e3.map(function(e4) {
              return e4.toFixed(3);
            }).join(" ");
          }).join(" ") + '" />', "</filter>", "</defs>", '<image width="' + n2 + '" height="' + o2 + '" filter="url(#darkreader-image-filter)" xlink:href="' + r2 + '" />', "</svg>"].join("");
          return "data:image/svg+xml;base64," + btoa(a2);
        }
        function gt() {
          ht = null, pt = null;
        }
        function bt(e2, t2, r2, n2, o2, a2) {
          var i2 = Boolean(r2 && r2.style && r2.style.getPropertyPriority(e2)), u2 = t2;
          if (e2.startsWith("--")) {
            if (s2 = function(e3, t3, r3, n3, o3, a3) {
              return e3.getModifierForVariable({ varName: t3, sourceValue: r3, rule: n3, ignoredImgSelectors: o3, isCancelled: a3 });
            }(n2, e2, t2, r2, o2, a2))
              return { property: e2, value: s2, important: i2, sourceValue: u2 };
          } else if (t2.includes("var(")) {
            if (s2 = function(e3, t3, r3) {
              return e3.getModifierForVarDependant(t3, r3);
            }(n2, e2, t2))
              return { property: e2, value: s2, important: i2, sourceValue: u2 };
          } else if (e2.includes("color") && e2 !== "-webkit-print-color-adjust" || e2 === "fill" || e2 === "stroke" || e2 === "stop-color") {
            if (s2 = function(e3, t3) {
              if (St.has(t3.toLowerCase()))
                return t3;
              try {
                var r3 = Et(t3);
                return e3.includes("background") ? function(e4) {
                  return Je(r3, e4);
                } : e3.includes("border") || e3.includes("outline") ? function(e4) {
                  return nt(r3, e4);
                } : function(e4) {
                  return tt(r3, e4);
                };
              } catch (e4) {
                return F("Color parse error", e4), null;
              }
            }(e2, t2))
              return { property: e2, value: s2, important: i2, sourceValue: u2 };
          } else if (e2 === "background-image" || e2 === "list-style-image") {
            if (s2 = Mt(t2, r2, o2, a2))
              return { property: e2, value: s2, important: i2, sourceValue: u2 };
          } else if (e2.includes("shadow")) {
            var s2;
            if (s2 = function(e3) {
              try {
                var t3 = 0, r3 = Oe(/(^|\s)([a-z]+\(.+?\)|#[0-9a-f]+|[a-z]+)(.*?(inset|outset)?($|,))/gi, e3, 2), n3 = r3.map(function(n4, o3) {
                  var a3 = t3, i3 = e3.indexOf(n4, t3), u3 = i3 + n4.length;
                  t3 = u3;
                  var s3 = xt(n4);
                  return s3 ? function(t4) {
                    return "" + e3.substring(a3, i3) + function(e4, t5) {
                      return Je(e4, t5);
                    }(s3, t4) + (o3 === r3.length - 1 ? e3.substring(u3) : "");
                  } : function() {
                    return e3.substring(a3, u3);
                  };
                });
                return function(e4) {
                  return n3.map(function(t4) {
                    return t4(e4);
                  }).join("");
                };
              } catch (t4) {
                return F("Unable to parse shadow " + e3, t4), null;
              }
            }(t2))
              return { property: e2, value: s2, important: i2, sourceValue: u2 };
          }
          return null;
        }
        function yt(e2, r2, n2) {
          var o2 = [];
          return r2 || (o2.push("html {"), o2.push("    background-color: " + Je({ r: 255, g: 255, b: 255 }, e2) + " !important;"), o2.push("}")), o2.push((r2 ? "" : "html, body, ") + (n2 ? "input, textarea, select, button" : "") + " {"), o2.push("    background-color: " + Je({ r: 255, g: 255, b: 255 }, e2) + ";"), o2.push("}"), o2.push("html, body, " + (n2 ? "input, textarea, select, button" : "") + " {"), o2.push("    border-color: " + nt({ r: 76, g: 76, b: 76 }, e2) + ";"), o2.push("    color: " + tt({ r: 0, g: 0, b: 0 }, e2) + ";"), o2.push("}"), o2.push("a {"), o2.push("    color: " + tt({ r: 0, g: 64, b: 255 }, e2) + ";"), o2.push("}"), o2.push("table {"), o2.push("    border-color: " + nt({ r: 128, g: 128, b: 128 }, e2) + ";"), o2.push("}"), o2.push("::placeholder {"), o2.push("    color: " + tt({ r: 169, g: 169, b: 169 }, e2) + ";"), o2.push("}"), o2.push("input:-webkit-autofill,"), o2.push("textarea:-webkit-autofill,"), o2.push("select:-webkit-autofill {"), o2.push("    background-color: " + Je({ r: 250, g: 255, b: 189 }, e2) + " !important;"), o2.push("    color: " + tt({ r: 0, g: 0, b: 0 }, e2) + " !important;"), o2.push("}"), e2.scrollbarColor && o2.push(function(e3) {
            var r3, n3, o3, a2, i2, u2, s2 = [];
            if (e3.scrollbarColor === "auto")
              r3 = Je({ r: 241, g: 241, b: 241 }, e3), n3 = tt({ r: 96, g: 96, b: 96 }, e3), o3 = Je({ r: 176, g: 176, b: 176 }, e3), a2 = Je({ r: 144, g: 144, b: 144 }, e3), i2 = Je({ r: 96, g: 96, b: 96 }, e3), u2 = Je({ r: 255, g: 255, b: 255 }, e3);
            else {
              var c2 = me(Se(e3.scrollbarColor)), l2 = c2.l > 0.5, f2 = function(e4) {
                return t(t({}, c2), { l: Pe(c2.l + e4, 0, 1) });
              }, h2 = function(e4) {
                return t(t({}, c2), { l: Pe(c2.l - e4, 0, 1) });
              };
              r3 = be(h2(0.4)), n3 = be(l2 ? h2(0.4) : f2(0.4)), o3 = be(c2), a2 = be(f2(0.1)), i2 = be(f2(0.2));
            }
            s2.push("::-webkit-scrollbar {"), s2.push("    background-color: " + r3 + ";"), s2.push("    color: " + n3 + ";"), s2.push("}"), s2.push("::-webkit-scrollbar-thumb {"), s2.push("    background-color: " + o3 + ";"), s2.push("}"), s2.push("::-webkit-scrollbar-thumb:hover {"), s2.push("    background-color: " + a2 + ";"), s2.push("}"), s2.push("::-webkit-scrollbar-thumb:active {"), s2.push("    background-color: " + i2 + ";"), s2.push("}"), s2.push("::-webkit-scrollbar-corner {"), s2.push("    background-color: " + u2 + ";"), s2.push("}"), d && (s2.push("* {"), s2.push("    scrollbar-color: " + o3 + " " + r3 + ";"), s2.push("}"));
            return s2.join("\n");
          }(e2)), e2.selectionColor && o2.push(function(e3) {
            var t2 = [], r3 = wt(e3), n3 = r3.backgroundColorSelection, o3 = r3.foregroundColorSelection;
            return ["::selection", "::-moz-selection"].forEach(function(e4) {
              t2.push(e4 + " {"), t2.push("    background-color: " + n3 + " !important;"), t2.push("    color: " + o3 + " !important;"), t2.push("}");
            }), t2.join("\n");
          }(e2)), o2.join("\n");
        }
        function wt(e2) {
          var r2, n2;
          if (e2.selectionColor === "auto")
            r2 = Je({ r: 0, g: 96, b: 212 }, t(t({}, e2), { grayscale: 0 })), n2 = tt({ r: 255, g: 255, b: 255 }, t(t({}, e2), { grayscale: 0 }));
          else {
            var o2 = me(Se(e2.selectionColor));
            r2 = e2.selectionColor, n2 = o2.l < 0.5 ? "#FFF" : "#000";
          }
          return { backgroundColorSelection: r2, foregroundColorSelection: n2 };
        }
        function kt(e2, t2) {
          var r2 = t2.strict, n2 = [];
          return n2.push("html, body, " + (r2 ? "body :not(iframe)" : "body > :not(iframe)") + " {"), n2.push("    background-color: " + Je({ r: 255, g: 255, b: 255 }, e2) + " !important;"), n2.push("    border-color: " + nt({ r: 64, g: 64, b: 64 }, e2) + " !important;"), n2.push("    color: " + tt({ r: 0, g: 0, b: 0 }, e2) + " !important;"), n2.push("}"), n2.join("\n");
        }
        var St = /* @__PURE__ */ new Set(["inherit", "transparent", "initial", "currentcolor", "none", "unset"]), _t = /* @__PURE__ */ new Map();
        function Et(e2) {
          if (e2 = e2.trim(), _t.has(e2))
            return _t.get(e2);
          var t2 = Se(e2);
          return _t.set(e2, t2), t2;
        }
        function xt(e2) {
          try {
            return Et(e2);
          } catch (e3) {
            return null;
          }
        }
        var Ct = /[\-a-z]+gradient\(([^\(\)]*(\(([^\(\)]*(\(.*?\)))*[^\(\)]*\))){0,15}[^\(\)]*\)/g, Vt = /* @__PURE__ */ new Map(), Rt = /* @__PURE__ */ new Map();
        function Mt(e2, o2, a2, i2) {
          var u2 = this;
          try {
            var s2 = Oe(Ct, e2), c2 = Oe(ce, e2);
            if (c2.length === 0 && s2.length === 0)
              return e2;
            var l2 = function(t2) {
              var r2 = 0;
              return t2.map(function(t3) {
                var n2 = e2.indexOf(t3, r2);
                return r2 = n2 + t3.length, { match: t3, index: n2 };
              });
            }, d2 = l2(c2).map(function(e3) {
              return t({ type: "url" }, e3);
            }).concat(l2(s2).map(function(e3) {
              return t({ type: "gradient" }, e3);
            })).sort(function(e3, t2) {
              return e3.index - t2.index;
            }), f2 = function(e3, r2) {
              var n2, o3 = e3.isDark, a3 = e3.isLight, i3 = e3.isTransparent, u3 = e3.isLarge, s3 = e3.width;
              if (o3 && i3 && r2.mode === 1 && !u3 && s3 > 2)
                D("Inverting dark image " + e3.src), n2 = 'url("' + mt(e3, t(t({}, r2), { sepia: Pe(r2.sepia + 10, 0, 100) })) + '")';
              else if (a3 && !i3 && r2.mode === 1) {
                if (u3)
                  n2 = "none";
                else
                  D("Dimming light image " + e3.src), n2 = 'url("' + mt(e3, r2) + '")';
              } else if (r2.mode === 0 && a3 && !u3) {
                D("Applying filter to image " + e3.src), n2 = 'url("' + mt(e3, t(t({}, r2), { brightness: Pe(r2.brightness - 10, 5, 200), sepia: Pe(r2.sepia + 10, 0, 100) })) + '")';
              } else
                n2 = null;
              return n2;
            }, h2 = [], p2 = 0;
            return d2.forEach(function(t2, s3) {
              var c3 = t2.match, l3 = t2.type, v2 = t2.index, m2 = p2, g2 = v2 + c3.length;
              p2 = g2, h2.push(function() {
                return e2.substring(m2, v2);
              }), h2.push(l3 === "url" ? function(e3) {
                var t3;
                if (function(e4, t4) {
                  if (!e4 || t4.length === 0)
                    return false;
                  if (t4.some(function(e5) {
                    return e5 === "*";
                  }))
                    return true;
                  for (var r2 = e4.split(/,\s*/g), n2 = function(e5) {
                    var n3 = t4[e5];
                    if (r2.some(function(e6) {
                      return e6 === n3;
                    }))
                      return { value: true };
                  }, o3 = 0; o3 < t4.length; o3++) {
                    var a3 = n2(o3);
                    if (typeof a3 == "object")
                      return a3.value;
                  }
                  return false;
                }(o2.selectorText, a2))
                  return null;
                var s4 = de(e3), c4 = o2.parentStyleSheet, l4 = c4.href ? fe(c4.href) : ((t3 = c4.ownerNode) === null || t3 === void 0 ? void 0 : t3.baseURI) || location.origin, d3 = 'url("' + (s4 = oe(l4, s4)) + '")';
                return function(e4) {
                  return r(u2, void 0, void 0, function() {
                    var t4, r2;
                    return n(this, function(n2) {
                      switch (n2.label) {
                        case 0:
                          return Vt.has(s4) ? (t4 = Vt.get(s4), [3, 7]) : [3, 1];
                        case 1:
                          return n2.trys.push([1, 6, , 7]), Rt.has(s4) ? (r2 = Rt.get(s4), [4, new Promise(function(e5) {
                            return r2.push(e5);
                          })]) : [3, 3];
                        case 2:
                          return (t4 = n2.sent()) ? [3, 5] : [2, null];
                        case 3:
                          return Rt.set(s4, []), [4, lt(s4)];
                        case 4:
                          t4 = n2.sent(), Vt.set(s4, t4), Rt.get(s4).forEach(function(e5) {
                            return e5(t4);
                          }), Rt.delete(s4), n2.label = 5;
                        case 5:
                          return i2() ? [2, null] : [3, 7];
                        case 6:
                          return F(n2.sent()), Rt.has(s4) && (Rt.get(s4).forEach(function(e5) {
                            return e5(null);
                          }), Rt.delete(s4)), [2, d3];
                        case 7:
                          return [2, f2(t4, e4) || d3];
                      }
                    });
                  });
                };
              }(c3) : function(e3) {
                var t3 = e3.match(/^(.*-gradient)\((.*)\)$/), r2 = t3[1], n2 = t3[2], o3 = /^(from|color-stop|to)\(([^\(\)]*?,\s*)?(.*?)\)$/, a3 = Oe(/([^\(\),]+(\([^\(\)]*(\([^\(\)]*\)*[^\(\)]*)?\))?[^\(\),]*),?/g, n2, 1).map(function(e4) {
                  var t4 = xt(e4 = e4.trim());
                  if (t4)
                    return function(e5) {
                      return ot(t4, e5);
                    };
                  var r3 = e4.lastIndexOf(" ");
                  if (t4 = xt(e4.substring(0, r3)))
                    return function(n4) {
                      return ot(t4, n4) + " " + e4.substring(r3 + 1);
                    };
                  var n3 = e4.match(o3);
                  return n3 && (t4 = xt(n3[3])) ? function(e5) {
                    return n3[1] + "(" + (n3[2] ? n3[2] + ", " : "") + ot(t4, e5) + ")";
                  } : function() {
                    return e4;
                  };
                });
                return function(e4) {
                  return r2 + "(" + a3.map(function(t4) {
                    return t4(e4);
                  }).join(", ") + ")";
                };
              }(c3)), s3 === d2.length - 1 && h2.push(function() {
                return e2.substring(g2);
              });
            }), function(e3) {
              var t2 = h2.filter(Boolean).map(function(t3) {
                return t3(e3);
              });
              return t2.some(function(e4) {
                return e4 instanceof Promise;
              }) ? Promise.all(t2).then(function(e4) {
                return e4.join("");
              }) : t2.join("");
            };
          } catch (t2) {
            return F("Unable to parse gradient " + e2, t2), null;
          }
        }
        function Tt() {
          _t.clear(), Be.clear(), We.clear(), Vt.clear(), gt(), Rt.clear();
        }
        var At = new (function() {
          function e2() {
            this.varTypes = /* @__PURE__ */ new Map(), this.rulesQueue = [], this.definedVars = /* @__PURE__ */ new Set(), this.varRefs = /* @__PURE__ */ new Map(), this.unknownColorVars = /* @__PURE__ */ new Set(), this.unknownBgVars = /* @__PURE__ */ new Set(), this.undefinedVars = /* @__PURE__ */ new Set(), this.initialVarTypes = /* @__PURE__ */ new Map(), this.changedTypeVars = /* @__PURE__ */ new Set(), this.typeChangeSubscriptions = /* @__PURE__ */ new Map(), this.unstableVarValues = /* @__PURE__ */ new Map();
          }
          return e2.prototype.clear = function() {
            this.varTypes.clear(), this.rulesQueue.splice(0), this.definedVars.clear(), this.varRefs.clear(), this.unknownColorVars.clear(), this.unknownBgVars.clear(), this.undefinedVars.clear(), this.initialVarTypes.clear(), this.changedTypeVars.clear(), this.typeChangeSubscriptions.clear(), this.unstableVarValues.clear();
          }, e2.prototype.isVarType = function(e3, t2) {
            return this.varTypes.has(e3) && (this.varTypes.get(e3) & t2) > 0;
          }, e2.prototype.addRulesForMatching = function(e3) {
            this.rulesQueue.push(e3);
          }, e2.prototype.matchVariablesAndDependants = function() {
            var e3 = this;
            this.changedTypeVars.clear(), this.initialVarTypes = new Map(this.varTypes), this.collectRootVariables(), this.rulesQueue.forEach(function(t2) {
              return e3.collectVariables(t2);
            }), this.rulesQueue.forEach(function(t2) {
              return e3.collectVarDependants(t2);
            }), this.rulesQueue.splice(0), this.collectRootVarDependants(), this.varRefs.forEach(function(t2, r2) {
              t2.forEach(function(t3) {
                e3.varTypes.has(r2) && e3.resolveVariableType(t3, e3.varTypes.get(r2));
              });
            }), this.unknownColorVars.forEach(function(t2) {
              e3.unknownBgVars.has(t2) ? (e3.unknownColorVars.delete(t2), e3.unknownBgVars.delete(t2), e3.resolveVariableType(t2, 1)) : e3.isVarType(t2, 7) ? e3.unknownColorVars.delete(t2) : e3.undefinedVars.add(t2);
            }), this.unknownBgVars.forEach(function(t2) {
              e3.findVarRef(t2, function(t3) {
                return e3.unknownColorVars.has(t3) || e3.isVarType(t3, 6);
              }) != null ? e3.itarateVarRefs(t2, function(t3) {
                e3.resolveVariableType(t3, 1);
              }) : e3.isVarType(t2, 9) ? e3.unknownBgVars.delete(t2) : e3.undefinedVars.add(t2);
            }), this.changedTypeVars.forEach(function(t2) {
              e3.typeChangeSubscriptions.has(t2) && e3.typeChangeSubscriptions.get(t2).forEach(function(e4) {
                e4();
              });
            }), this.changedTypeVars.clear();
          }, e2.prototype.getModifierForVariable = function(e3) {
            var t2 = this;
            return function(r2) {
              var n2 = e3.varName, o2 = e3.sourceValue, a2 = e3.rule, i2 = e3.ignoredImgSelectors, u2 = e3.isCancelled, s2 = function() {
                var e4 = [], s3 = function(a3, i3, u3) {
                  if (t2.isVarType(n2, a3)) {
                    var s4, c4 = i3(n2);
                    if (Wt(o2))
                      if (It(o2)) {
                        var l3 = Ht(o2, t2.unstableVarValues);
                        l3 || (l3 = a3 === 1 ? "#ffffff" : "#000000"), s4 = u3(l3, r2);
                      } else
                        s4 = Ot(o2, function(e5) {
                          return i3(e5);
                        }, function(e5) {
                          return u3(e5, r2);
                        });
                    else
                      s4 = u3(o2, r2);
                    e4.push({ property: c4, value: s4 });
                  }
                };
                if (s3(1, Dt, Ut), s3(2, Ft, $t), s3(4, qt, zt), t2.isVarType(n2, 8)) {
                  var c3 = Nt(n2), l2 = o2;
                  Wt(o2) && (l2 = Ot(o2, function(e5) {
                    return Dt(e5);
                  }, function(e5) {
                    return Ut(e5, r2);
                  }));
                  var d2 = Mt(l2, a2, i2, u2);
                  l2 = typeof d2 == "function" ? d2(r2) : d2, e4.push({ property: c3, value: l2 });
                }
                return e4;
              }, c2 = /* @__PURE__ */ new Set();
              return { declarations: s2(), onTypeChange: { addListener: function(e4) {
                var r3 = function() {
                  var t3 = s2();
                  e4(t3);
                };
                c2.add(r3), t2.subscribeForVarTypeChange(n2, r3);
              }, removeListeners: function() {
                c2.forEach(function(e4) {
                  t2.unsubscribeFromVariableTypeChanges(n2, e4);
                });
              } } };
            };
          }, e2.prototype.getModifierForVarDependant = function(e3, t2) {
            var r2 = this;
            if (t2.match(/^\s*(rgb|hsl)a?\(/)) {
              var n2 = e3.startsWith("background"), o2 = e3 === "color";
              return function(e4) {
                var a3 = Ht(t2, r2.unstableVarValues);
                return a3 || (a3 = n2 ? "#ffffff" : "#000000"), (n2 ? Ut : o2 ? $t : zt)(a3, e4);
              };
            }
            if (e3 === "background-color")
              return function(e4) {
                return Ot(t2, function(e5) {
                  return Dt(e5);
                }, function(t3) {
                  return Ut(t3, e4);
                });
              };
            if (e3 === "color")
              return function(e4) {
                return Ot(t2, function(e5) {
                  return Ft(e5);
                }, function(t3) {
                  return $t(t3, e4);
                });
              };
            if (e3 === "background" || e3 === "background-image" || e3 === "box-shadow")
              return function(e4) {
                var n3 = /* @__PURE__ */ new Set(), o3 = function() {
                  return Ot(t2, function(e5) {
                    return r2.isVarType(e5, 1) ? Dt(e5) : r2.isVarType(e5, 8) ? Nt(e5) : (n3.add(e5), e5);
                  }, function(t3) {
                    return Ut(t3, e4);
                  });
                }, a3 = o3();
                return n3.size > 0 ? new Promise(function(e5) {
                  var t3 = n3.values().next().value, a4 = function() {
                    r2.unsubscribeFromVariableTypeChanges(t3, a4);
                    var n4 = o3();
                    e5(n4);
                  };
                  r2.subscribeForVarTypeChange(t3, a4);
                }) : a3;
              };
            if (e3.startsWith("border") || e3.startsWith("outline")) {
              if (t2.endsWith(")")) {
                var a2 = t2.match(/((rgb|hsl)a?)\(/);
                if (a2) {
                  var i2 = a2.index;
                  return function(e4) {
                    return Ht(t2, r2.unstableVarValues) ? "" + t2.substring(0, i2) + zt(Ht(t2.substring(i2, t2.length), r2.unstableVarValues), e4) : t2;
                  };
                }
              }
              return function(e4) {
                return Ot(t2, function(e5) {
                  return qt(e5);
                }, function(t3) {
                  return $t(t3, e4);
                });
              };
            }
            return null;
          }, e2.prototype.subscribeForVarTypeChange = function(e3, t2) {
            this.typeChangeSubscriptions.has(e3) || this.typeChangeSubscriptions.set(e3, /* @__PURE__ */ new Set()), this.typeChangeSubscriptions.get(e3).add(t2);
          }, e2.prototype.unsubscribeFromVariableTypeChanges = function(e3, t2) {
            this.typeChangeSubscriptions.has(e3) && this.typeChangeSubscriptions.get(e3).delete(t2);
          }, e2.prototype.collectVariables = function(e3) {
            var t2 = this;
            !function(e4, t3) {
              ae(e4, function(e5) {
                e5.style && se(e5.style, function(e6, r2) {
                  e6.startsWith("--") && t3(e6, r2);
                });
              });
            }(e3, function(e4, r2) {
              t2.inspectVariable(e4, r2);
            });
          }, e2.prototype.collectRootVariables = function() {
            var e3 = this;
            se(document.documentElement.style, function(t2, r2) {
              Bt(t2) && e3.inspectVariable(t2, r2);
            });
          }, e2.prototype.inspectVariable = function(e3, t2) {
            (this.unstableVarValues.set(e3, t2), Wt(t2) && It(t2) && (this.unknownColorVars.add(e3), this.definedVars.add(e3)), this.definedVars.has(e3)) || (this.definedVars.add(e3), xt(t2) ? this.unknownColorVars.add(e3) : (t2.includes("url(") || t2.includes("linear-gradient(") || t2.includes("radial-gradient(")) && this.resolveVariableType(e3, 8));
          }, e2.prototype.resolveVariableType = function(e3, t2) {
            var r2 = this.initialVarTypes.get(e3) || 0, n2 = (this.varTypes.get(e3) || 0) | t2;
            this.varTypes.set(e3, n2), (n2 !== r2 || this.undefinedVars.has(e3)) && (this.changedTypeVars.add(e3), this.undefinedVars.delete(e3)), this.unknownColorVars.delete(e3), this.unknownBgVars.delete(e3);
          }, e2.prototype.collectVarDependants = function(e3) {
            var t2 = this;
            !function(e4, t3) {
              ae(e4, function(e5) {
                e5.style && se(e5.style, function(e6, r2) {
                  Wt(r2) && t3(e6, r2);
                });
              });
            }(e3, function(e4, r2) {
              t2.inspectVerDependant(e4, r2);
            });
          }, e2.prototype.collectRootVarDependants = function() {
            var e3 = this;
            se(document.documentElement.style, function(t2, r2) {
              Wt(r2) && e3.inspectVerDependant(t2, r2);
            });
          }, e2.prototype.inspectVerDependant = function(e3, t2) {
            var r2 = this;
            Bt(e3) ? this.iterateVarDeps(t2, function(t3) {
              r2.varRefs.has(e3) || r2.varRefs.set(e3, /* @__PURE__ */ new Set()), r2.varRefs.get(e3).add(t3);
            }) : e3 === "background-color" || e3 === "box-shadow" ? this.iterateVarDeps(t2, function(e4) {
              return r2.resolveVariableType(e4, 1);
            }) : e3 === "color" ? this.iterateVarDeps(t2, function(e4) {
              return r2.resolveVariableType(e4, 2);
            }) : e3.startsWith("border") || e3.startsWith("outline") ? this.iterateVarDeps(t2, function(e4) {
              return r2.resolveVariableType(e4, 4);
            }) : e3 !== "background" && e3 !== "background-image" || this.iterateVarDeps(t2, function(e4) {
              if (!r2.isVarType(e4, 9)) {
                var t3 = r2.findVarRef(e4, function(e5) {
                  return r2.unknownColorVars.has(e5) || r2.isVarType(e5, 6);
                }) != null;
                r2.itarateVarRefs(e4, function(e5) {
                  t3 ? r2.resolveVariableType(e5, 1) : r2.unknownBgVars.add(e5);
                });
              }
            });
          }, e2.prototype.iterateVarDeps = function(e3, t2) {
            var r2 = /* @__PURE__ */ new Set();
            !function(e4, t3) {
              Ot(e4, function(e5) {
                return t3(e5), e5;
              });
            }(e3, function(e4) {
              return r2.add(e4);
            }), r2.forEach(function(e4) {
              return t2(e4);
            });
          }, e2.prototype.findVarRef = function(e3, t2, r2) {
            var n2, a2;
            if (r2 === void 0 && (r2 = /* @__PURE__ */ new Set()), r2.has(e3))
              return null;
            if (r2.add(e3), t2(e3))
              return e3;
            var i2 = this.varRefs.get(e3);
            if (!i2 || i2.size === 0)
              return null;
            try {
              for (var u2 = o(i2), s2 = u2.next(); !s2.done; s2 = u2.next()) {
                var c2 = s2.value, l2 = this.findVarRef(c2, t2, r2);
                if (l2)
                  return l2;
              }
            } catch (e4) {
              n2 = { error: e4 };
            } finally {
              try {
                s2 && !s2.done && (a2 = u2.return) && a2.call(u2);
              } finally {
                if (n2)
                  throw n2.error;
              }
            }
            return null;
          }, e2.prototype.itarateVarRefs = function(e3, t2) {
            this.findVarRef(e3, function(e4) {
              return t2(e4), false;
            });
          }, e2.prototype.putRootVars = function(e3, t2) {
            var r2, n2, i2 = this, u2 = e3.sheet;
            u2.cssRules.length > 0 && u2.deleteRule(0);
            var s2 = /* @__PURE__ */ new Map();
            se(document.documentElement.style, function(e4, r3) {
              Bt(e4) && (i2.isVarType(e4, 1) && s2.set(Dt(e4), Ut(r3, t2)), i2.isVarType(e4, 2) && s2.set(Ft(e4), $t(r3, t2)), i2.isVarType(e4, 4) && s2.set(qt(e4), zt(r3, t2)));
            });
            var c2 = [];
            c2.push(":root {");
            try {
              for (var l2 = o(s2), d2 = l2.next(); !d2.done; d2 = l2.next()) {
                var f2 = a(d2.value, 2), h2 = f2[0], p2 = f2[1];
                c2.push("    " + h2 + ": " + p2 + ";");
              }
            } catch (e4) {
              r2 = { error: e4 };
            } finally {
              try {
                d2 && !d2.done && (n2 = l2.return) && n2.call(l2);
              } finally {
                if (r2)
                  throw r2.error;
              }
            }
            c2.push("}");
            var v2 = c2.join("\n");
            u2.insertRule(v2);
          }, e2;
        }())();
        function Lt(e2, t2) {
          t2 === void 0 && (t2 = 0);
          var r2 = e2.indexOf("var(", t2);
          if (r2 >= 0) {
            var n2 = function(e3, t3) {
              t3 === void 0 && (t3 = 0);
              for (var r3 = e3.length, n3 = 0, o2 = -1, a2 = t3; a2 < r3; a2++)
                if (n3 === 0) {
                  if ((i2 = e3.indexOf("(", a2)) < 0)
                    break;
                  o2 = i2, n3++, a2 = i2;
                } else {
                  var i2, u2 = e3.indexOf(")", a2);
                  if (u2 < 0)
                    break;
                  if ((i2 = e3.indexOf("(", a2)) < 0 || u2 < i2) {
                    if (--n3 == 0)
                      return { start: o2, end: u2 + 1 };
                    a2 = u2;
                  } else
                    n3++, a2 = i2;
                }
              return null;
            }(e2, r2 + 3);
            return n2 ? { start: r2, end: n2.end } : null;
          }
        }
        function Pt(e2, t2) {
          var r2 = function(e3) {
            for (var t3, r3 = [], n3 = 0; t3 = Lt(e3, n3); ) {
              var o3 = t3.start, a3 = t3.end;
              r3.push({ start: o3, end: a3, value: e3.substring(o3, a3) }), n3 = t3.end + 1;
            }
            return r3;
          }(e2), n2 = r2.length;
          if (n2 === 0)
            return e2;
          var o2 = e2.length, a2 = r2.map(function(e3) {
            return t2(e3.value);
          }), i2 = [];
          i2.push(e2.substring(0, r2[0].start));
          for (var u2 = 0; u2 < n2; u2++) {
            i2.push(a2[u2]);
            var s2 = r2[u2].end, c2 = u2 < n2 - 1 ? r2[u2 + 1].start : o2;
            i2.push(e2.substring(s2, c2));
          }
          return i2.join("");
        }
        function jt(e2) {
          var t2, r2, n2 = e2.indexOf(",");
          return n2 >= 0 ? (t2 = e2.substring(4, n2).trim(), r2 = e2.substring(n2 + 1, e2.length - 1).trim()) : (t2 = e2.substring(4, e2.length - 1).trim(), r2 = ""), { name: t2, fallback: r2 };
        }
        function Ot(e2, t2, r2) {
          return Pt(e2, function(e3) {
            var n2 = jt(e3), o2 = n2.name, a2 = n2.fallback, i2 = t2(o2);
            return a2 ? "var(" + i2 + ", " + (Wt(a2) ? Ot(a2, t2, r2) : r2 ? r2(a2) : a2) + ")" : "var(" + i2 + ")";
          });
        }
        function Dt(e2) {
          return "--darkreader-bg" + e2;
        }
        function Ft(e2) {
          return "--darkreader-text" + e2;
        }
        function qt(e2) {
          return "--darkreader-border" + e2;
        }
        function Nt(e2) {
          return "--darkreader-bgimg" + e2;
        }
        function Bt(e2) {
          return e2.startsWith("--");
        }
        function Wt(e2) {
          return e2.includes("var(");
        }
        function It(e2) {
          return e2.match(/^\s*(rgb|hsl)a?\(/);
        }
        function Ut(e2, t2) {
          var r2 = xt(e2);
          return r2 ? Je(r2, t2) : e2;
        }
        function $t(e2, t2) {
          var r2 = xt(e2);
          return r2 ? tt(r2, t2) : e2;
        }
        function zt(e2, t2) {
          var r2 = xt(e2);
          return r2 ? nt(r2, t2) : e2;
        }
        function Ht(e2, t2, r2) {
          r2 === void 0 && (r2 = /* @__PURE__ */ new Set());
          var n2 = false, o2 = Pt(e2, function(e3) {
            var o3 = jt(e3), a2 = o3.name, i2 = o3.fallback;
            if (r2.has(a2))
              return n2 = true, null;
            r2.add(a2);
            var u2 = t2.get(a2) || i2, s2 = null;
            return u2 && (s2 = Wt(u2) ? Ht(u2, t2, r2) : u2), s2 || (n2 = true, null);
          });
          return n2 ? null : o2;
        }
        var Gt = { "background-color": { customProp: "--darkreader-inline-bgcolor", cssProp: "background-color", dataAttr: "data-darkreader-inline-bgcolor" }, "background-image": { customProp: "--darkreader-inline-bgimage", cssProp: "background-image", dataAttr: "data-darkreader-inline-bgimage" }, "border-color": { customProp: "--darkreader-inline-border", cssProp: "border-color", dataAttr: "data-darkreader-inline-border" }, "border-bottom-color": { customProp: "--darkreader-inline-border-bottom", cssProp: "border-bottom-color", dataAttr: "data-darkreader-inline-border-bottom" }, "border-left-color": { customProp: "--darkreader-inline-border-left", cssProp: "border-left-color", dataAttr: "data-darkreader-inline-border-left" }, "border-right-color": { customProp: "--darkreader-inline-border-right", cssProp: "border-right-color", dataAttr: "data-darkreader-inline-border-right" }, "border-top-color": { customProp: "--darkreader-inline-border-top", cssProp: "border-top-color", dataAttr: "data-darkreader-inline-border-top" }, "box-shadow": { customProp: "--darkreader-inline-boxshadow", cssProp: "box-shadow", dataAttr: "data-darkreader-inline-boxshadow" }, color: { customProp: "--darkreader-inline-color", cssProp: "color", dataAttr: "data-darkreader-inline-color" }, fill: { customProp: "--darkreader-inline-fill", cssProp: "fill", dataAttr: "data-darkreader-inline-fill" }, stroke: { customProp: "--darkreader-inline-stroke", cssProp: "stroke", dataAttr: "data-darkreader-inline-stroke" }, "outline-color": { customProp: "--darkreader-inline-outline", cssProp: "outline-color", dataAttr: "data-darkreader-inline-outline" }, "stop-color": { customProp: "--darkreader-inline-stopcolor", cssProp: "stop-color", dataAttr: "data-darkreader-inline-stopcolor" } }, Qt = Object.values(Gt), Kt = {};
        Qt.forEach(function(e2) {
          var t2 = e2.cssProp, r2 = e2.customProp;
          return Kt[r2] = t2;
        });
        var Jt = ["style", "fill", "stop-color", "stroke", "bgcolor", "color"], Xt = Jt.map(function(e2) {
          return "[" + e2 + "]";
        }).join(", ");
        function Yt() {
          return Qt.map(function(e2) {
            var t2 = e2.dataAttr, r2 = e2.customProp;
            return ["[" + t2 + "] {", "  " + e2.cssProp + ": var(" + r2 + ") !important;", "}"].join("\n");
          }).join("\n");
        }
        var Zt = /* @__PURE__ */ new Map(), er = /* @__PURE__ */ new Map();
        function tr(e2, t2, r2) {
          Zt.has(e2) && (Zt.get(e2).disconnect(), er.get(e2).disconnect());
          var n2 = /* @__PURE__ */ new WeakSet();
          function o2(e3) {
            (function(e4) {
              var t3 = [];
              return e4 instanceof Element && e4.matches(Xt) && t3.push(e4), (e4 instanceof Element || m && e4 instanceof ShadowRoot || e4 instanceof Document) && O(t3, e4.querySelectorAll(Xt)), t3;
            })(e3).forEach(function(e4) {
              n2.has(e4) || (n2.add(e4), t2(e4));
            }), I(e3, function(o3) {
              n2.has(e3) || (n2.add(e3), r2(o3.shadowRoot), tr(o3.shadowRoot, t2, r2));
            });
          }
          var u2 = ee(e2, { onMinorMutations: function(e3) {
            e3.additions.forEach(function(e4) {
              return o2(e4);
            });
          }, onHugeMutations: function() {
            o2(e2);
          } });
          Zt.set(e2, u2);
          var s2 = 0, c2 = null, l2 = N({ seconds: 10 }), d2 = N({ seconds: 2 }), f2 = [], h2 = null, p2 = q(function(e3) {
            e3.forEach(function(e4) {
              Jt.includes(e4.attributeName) && t2(e4.target);
            });
          }), v2 = new MutationObserver(function(e3) {
            if (h2)
              f2.push.apply(f2, i([], a(e3)));
            else {
              s2++;
              var t3 = Date.now();
              if (c2 == null)
                c2 = t3;
              else if (s2 >= 50) {
                if (t3 - c2 < l2)
                  return h2 = setTimeout(function() {
                    c2 = null, s2 = 0, h2 = null;
                    var e4 = f2;
                    f2 = [], p2(e4);
                  }, d2), void f2.push.apply(f2, i([], a(e3)));
                c2 = t3, s2 = 1;
              }
              p2(e3);
            }
          });
          v2.observe(e2, { attributes: true, attributeFilter: Jt.concat(Qt.map(function(e3) {
            return e3.dataAttr;
          })), subtree: true }), er.set(e2, v2);
        }
        var rr = /* @__PURE__ */ new WeakMap(), nr = ["brightness", "contrast", "grayscale", "sepia", "mode"];
        function or(e2, t2) {
          return Jt.map(function(t3) {
            return t3 + '="' + e2.getAttribute(t3) + '"';
          }).concat(nr.map(function(e3) {
            return e3 + '="' + t2[e3] + '"';
          })).join(" ");
        }
        function ar(e2, t2, r2, n2) {
          if (or(e2, t2) !== rr.get(e2)) {
            var o2 = new Set(Object.keys(Gt));
            if (r2.length > 0 && function(e3, t3) {
              for (var r3 = 0, n3 = t3.length; r3 < n3; r3++) {
                var o3 = t3[r3];
                if (e3.matches(o3))
                  return true;
              }
              return false;
            }(e2, r2))
              o2.forEach(function(t3) {
                e2.removeAttribute(Gt[t3].dataAttr);
              });
            else {
              if (e2.hasAttribute("bgcolor"))
                ((u2 = e2.getAttribute("bgcolor")).match(/^[0-9a-f]{3}$/i) || u2.match(/^[0-9a-f]{6}$/i)) && (u2 = "#" + u2), s2("background-color", "background-color", u2);
              if (e2.hasAttribute("color"))
                ((u2 = e2.getAttribute("color")).match(/^[0-9a-f]{3}$/i) || u2.match(/^[0-9a-f]{6}$/i)) && (u2 = "#" + u2), s2("color", "color", u2);
              if (e2 instanceof SVGElement) {
                if (e2.hasAttribute("fill")) {
                  var a2 = e2.getAttribute("fill");
                  if (e2 instanceof SVGTextElement)
                    s2("fill", "color", a2);
                  else {
                    var i2 = function() {
                      var t3 = e2.getBoundingClientRect(), r3 = t3.width, n3 = t3.height;
                      s2("fill", r3 > 32 || n3 > 32 ? "background-color" : "color", a2);
                    };
                    G() ? i2() : K(i2);
                  }
                }
                e2.hasAttribute("stop-color") && s2("stop-color", "background-color", e2.getAttribute("stop-color"));
              }
              if (e2.hasAttribute("stroke")) {
                var u2 = e2.getAttribute("stroke");
                s2("stroke", e2 instanceof SVGLineElement || e2 instanceof SVGTextElement ? "border-color" : "color", u2);
              }
              e2.style && se(e2.style, function(t3, r3) {
                if (t3 !== "background-image" || !r3.includes("url"))
                  if (Gt.hasOwnProperty(t3))
                    s2(t3, t3, r3);
                  else {
                    var n3 = Kt[t3];
                    !n3 || e2.style.getPropertyValue(n3) || e2.hasAttribute(n3) || e2.style.setProperty(t3, "");
                  }
              }), e2.style && e2 instanceof SVGTextElement && e2.style.fill && s2("fill", "color", e2.style.getPropertyValue("fill")), j(o2, function(t3) {
                e2.removeAttribute(Gt[t3].dataAttr);
              }), rr.set(e2, or(e2, t2));
            }
          }
          function s2(r3, a3, i3) {
            var u3 = Gt[r3], s3 = u3.customProp, c2 = u3.dataAttr, l2 = bt(a3, i3, null, At, n2, null);
            if (l2) {
              var d2 = l2.value;
              typeof d2 == "function" && (d2 = d2(t2)), e2.style.setProperty(s3, d2), e2.hasAttribute(c2) || e2.setAttribute(c2, ""), o2.delete(r3);
            }
          }
        }
        var ir = "theme-color", ur = 'meta[name="theme-color"]', sr = null, cr = null;
        function lr(e2, t2) {
          sr = sr || e2.content;
          try {
            var r2 = Se(sr);
            e2.content = Je(r2, t2);
          } catch (e3) {
            F(e3);
          }
        }
        var dr = ["mode", "brightness", "contrast", "grayscale", "sepia", "darkSchemeBackgroundColor", "darkSchemeTextColor", "lightSchemeBackgroundColor", "lightSchemeTextColor"];
        var fr = function() {
          var e2 = [], t2 = null;
          function r2() {
            for (var r3; r3 = e2.shift(); )
              r3();
            t2 = null;
          }
          return { add: function(n2) {
            e2.push(n2), t2 || (t2 = requestAnimationFrame(r2));
          }, cancel: function() {
            e2.splice(0), cancelAnimationFrame(t2), t2 = null;
          } };
        }();
        function hr() {
          var e2 = 0, t2 = /* @__PURE__ */ new Set(), r2 = /* @__PURE__ */ new Map(), n2 = /* @__PURE__ */ new Set(), o2 = null, u2 = false, s2 = false;
          return { modifySheet: function(c2) {
            var l2 = c2.sourceCSSRules, d2 = c2.theme, f2 = c2.ignoreImageAnalysis, h2 = c2.force, p2 = c2.prepareSheet, v2 = c2.isAsyncCancelled, m2 = r2.size === 0, g2 = new Set(r2.keys()), b2 = function(e3) {
              return dr.map(function(t3) {
                return t3 + ":" + e3[t3];
              }).join(";");
            }(d2), y2 = b2 !== o2;
            u2 && (s2 = true);
            var w2 = [];
            if (ae(l2, function(e3) {
              var n3 = e3.cssText, o3 = false;
              if (g2.delete(n3), e3.parentRule instanceof CSSMediaRule && (n3 += ";" + e3.parentRule.media.mediaText), t2.has(n3) || (t2.add(n3), o3 = true), o3) {
                m2 = true;
                var a2 = [];
                e3.style && se(e3.style, function(t3, r3) {
                  var n4 = bt(t3, r3, e3, At, f2, v2);
                  n4 && a2.push(n4);
                });
                var i2 = null;
                if (a2.length > 0) {
                  var u3 = e3.parentRule;
                  i2 = { selector: e3.selectorText, declarations: a2, parentRule: u3 }, w2.push(i2);
                }
                r2.set(n3, i2);
              } else
                w2.push(r2.get(n3));
            }, function() {
              u2 = true;
            }), g2.forEach(function(e3) {
              t2.delete(e3), r2.delete(e3);
            }), o2 = b2, h2 || m2 || y2) {
              e2++;
              var k2 = /* @__PURE__ */ new Map(), S2 = /* @__PURE__ */ new Map(), _2 = 0, E2 = 0, x2 = { rule: null, rules: [], isGroup: true }, C2 = /* @__PURE__ */ new WeakMap();
              n2.forEach(function(e3) {
                return e3();
              }), n2.clear(), w2.filter(function(e3) {
                return e3;
              }).forEach(function(t3) {
                var r3 = t3.selector, o3 = t3.declarations, u3 = M2(t3.parentRule), s3 = { selector: r3, declarations: [], isGroup: false }, c3 = s3.declarations;
                function l3(t4, r4, n3, o4) {
                  var a2 = ++_2, i2 = { property: t4, value: null, important: n3, asyncKey: a2, sourceValue: o4 };
                  c3.push(i2);
                  var u4 = e2;
                  r4.then(function(t5) {
                    t5 && !v2() && u4 === e2 && (i2.value = t5, fr.add(function() {
                      v2() || u4 !== e2 || function(e3) {
                        var t6 = k2.get(e3), r5 = t6.rule, n4 = t6.target, o5 = t6.index;
                        n4.deleteRule(o5), R2(n4, o5, r5), k2.delete(e3);
                      }(a2);
                    }));
                  });
                }
                function f3(t4, r4, o4, u4) {
                  var s4 = r4, d3 = s4.declarations, f4 = s4.onTypeChange, h3 = ++E2, p3 = e2, m3 = c3.length, g3 = [];
                  if (d3.length === 0) {
                    var b3 = { property: t4, value: u4, important: o4, sourceValue: u4, varKey: h3 };
                    c3.push(b3), g3 = [b3];
                  }
                  d3.forEach(function(e3) {
                    if (e3.value instanceof Promise)
                      l3(e3.property, e3.value, o4, u4);
                    else {
                      var t5 = { property: e3.property, value: e3.value, important: o4, sourceValue: u4, varKey: h3 };
                      c3.push(t5), g3.push(t5);
                    }
                  }), f4.addListener(function(t5) {
                    if (!v2() && p3 === e2) {
                      var r5 = t5.map(function(e3) {
                        return { property: e3.property, value: e3.value, important: o4, sourceValue: u4, varKey: h3 };
                      }), n3 = c3.indexOf(g3[0], m3);
                      c3.splice.apply(c3, i([n3, g3.length], a(r5))), g3 = r5, function(e3) {
                        var t6 = S2.get(e3), r6 = t6.rule, n4 = t6.target, o5 = t6.index;
                        n4.deleteRule(o5), R2(n4, o5, r6);
                      }(h3);
                    }
                  }), n2.add(function() {
                    return f4.removeListeners();
                  });
                }
                u3.rules.push(s3), o3.forEach(function(e3) {
                  var t4 = e3.property, r4 = e3.value, n3 = e3.important, o4 = e3.sourceValue;
                  if (typeof r4 == "function") {
                    var a2 = r4(d2);
                    a2 instanceof Promise ? l3(t4, a2, n3, o4) : t4.startsWith("--") ? f3(t4, a2, n3, o4) : c3.push({ property: t4, value: a2, important: n3, sourceValue: o4 });
                  } else
                    c3.push({ property: t4, value: r4, important: n3, sourceValue: o4 });
                });
              });
              var V2 = p2();
              !function e3(t3, r3, n3) {
                t3.rules.forEach(function(t4) {
                  t4.isGroup ? e3(t4, function(e4, t5) {
                    var r4 = e4.rule;
                    if (r4 instanceof CSSMediaRule) {
                      var n4 = r4.media, o3 = t5.cssRules.length;
                      return t5.insertRule("@media " + n4.mediaText + " {}", o3), t5.cssRules[o3];
                    }
                    return t5;
                  }(t4, r3), n3) : n3(t4, r3);
                });
              }(x2, V2, function(e3, t3) {
                var r3 = t3.cssRules.length;
                e3.declarations.forEach(function(n3) {
                  var o3 = n3.asyncKey, a2 = n3.varKey;
                  o3 != null && k2.set(o3, { rule: e3, target: t3, index: r3 }), a2 != null && S2.set(a2, { rule: e3, target: t3, index: r3 });
                }), R2(t3, r3, e3);
              });
            }
            function R2(e3, t3, r3) {
              var n3 = r3.selector + " { " + r3.declarations.map(function(e4) {
                var t4 = e4.property, r4 = e4.value, n4 = e4.important, o3 = e4.sourceValue;
                return t4 + ": " + (r4 == null ? o3 : r4) + (n4 ? " !important" : "") + ";";
              }).join(" ") + " }";
              e3.insertRule(n3, t3);
            }
            function M2(e3) {
              if (e3 == null)
                return x2;
              if (C2.has(e3))
                return C2.get(e3);
              var t3 = { rule: e3, rules: [], isGroup: true };
              return C2.set(e3, t3), M2(e3.parentRule).rules.push(t3), t3;
            }
          }, shouldRebuildStyle: function() {
            return u2 && !s2;
          } };
        }
        function pr(e2) {
          return (e2 instanceof HTMLStyleElement || e2 instanceof SVGStyleElement || e2 instanceof HTMLLinkElement && e2.rel && e2.rel.toLowerCase().includes("stylesheet") && !e2.disabled) && !e2.classList.contains("darkreader") && e2.media.toLowerCase() !== "print" && !e2.classList.contains("stylus");
        }
        function vr(e2, t2, r2) {
          return t2 === void 0 && (t2 = []), r2 === void 0 && (r2 = true), pr(e2) ? t2.push(e2) : (e2 instanceof Element || m && e2 instanceof ShadowRoot || e2 === document) && (j(e2.querySelectorAll('style, link[rel*="stylesheet" i]:not([disabled])'), function(e3) {
            return vr(e3, t2, false);
          }), r2 && I(e2, function(e3) {
            return vr(e3.shadowRoot, t2, false);
          })), t2;
        }
        var mr = /* @__PURE__ */ new WeakSet(), gr = /* @__PURE__ */ new WeakSet(), br = false;
        document.addEventListener("__darkreader__inlineScriptsAllowed", function() {
          br = true;
        });
        var yr = 0, wr = /* @__PURE__ */ new Map();
        function kr(e2, t2) {
          for (var o2 = t2.update, i2 = t2.loadingStart, u2 = t2.loadingEnd, s2 = [], d2 = e2; (d2 = d2.nextElementSibling) && d2.matches(".darkreader"); )
            s2.push(d2);
          var h2 = s2.find(function(e3) {
            return e3.matches(".darkreader--cors") && !gr.has(e3);
          }) || null, p2 = s2.find(function(e3) {
            return e3.matches(".darkreader--sync") && !mr.has(e3);
          }) || null, v2 = null, m2 = null, g2 = false, b2 = true, y2 = hr(), w2 = new MutationObserver(function() {
            o2();
          }), k2 = { attributes: true, childList: true, subtree: true, characterData: true };
          function S2() {
            return e2 instanceof HTMLStyleElement && e2.textContent.trim().match(le);
          }
          function _2() {
            return h2 ? h2.sheet.cssRules : S2() ? null : A2();
          }
          function E2() {
            h2 ? (e2.nextSibling !== h2 && e2.parentNode.insertBefore(h2, e2.nextSibling), h2.nextSibling !== p2 && e2.parentNode.insertBefore(p2, h2.nextSibling)) : e2.nextSibling !== p2 && e2.parentNode.insertBefore(p2, e2.nextSibling);
          }
          var x2 = false, C2 = false, V2 = ++yr;
          function R2() {
            return r(this, void 0, void 0, function() {
              var t3, r2, o3, i3, u3, s3, c2;
              return n(this, function(n2) {
                switch (n2.label) {
                  case 0:
                    if (!(e2 instanceof HTMLLinkElement))
                      return [3, 7];
                    if (o3 = a(T2(), 2), i3 = o3[0], (u3 = o3[1]) && F(u3), !(!i3 && !u3 && !f || f && !e2.sheet || (l2 = u3, l2 && l2.message && l2.message.includes("loading"))))
                      return [3, 5];
                    n2.label = 1;
                  case 1:
                    return n2.trys.push([1, 3, , 4]), D("Linkelement " + V2 + " is not loaded yet and thus will be await for", e2), [4, Sr(e2, V2)];
                  case 2:
                    return n2.sent(), [3, 4];
                  case 3:
                    return F(n2.sent()), C2 = true, [3, 4];
                  case 4:
                    if (g2)
                      return [2, null];
                    c2 = a(T2(), 2), i3 = c2[0], (u3 = c2[1]) && F(u3), n2.label = 5;
                  case 5:
                    return i3 != null ? [2, i3] : [4, _r(e2.href)];
                  case 6:
                    return t3 = n2.sent(), r2 = fe(e2.href), g2 ? [2, null] : [3, 8];
                  case 7:
                    if (!S2())
                      return [2, null];
                    t3 = e2.textContent.trim(), r2 = fe(location.href), n2.label = 8;
                  case 8:
                    if (!t3)
                      return [3, 13];
                    n2.label = 9;
                  case 9:
                    return n2.trys.push([9, 11, , 12]), [4, Er(t3, r2)];
                  case 10:
                    return s3 = n2.sent(), h2 = function(e3, t4) {
                      if (!t4)
                        return null;
                      var r3 = document.createElement("style");
                      return r3.classList.add("darkreader"), r3.classList.add("darkreader--cors"), r3.media = "screen", r3.textContent = t4, e3.parentNode.insertBefore(r3, e3.nextSibling), r3.sheet.disabled = true, gr.add(r3), r3;
                    }(e2, s3), [3, 12];
                  case 11:
                    return F(n2.sent()), [3, 12];
                  case 12:
                    if (h2)
                      return v2 = W(h2, "prev-sibling"), [2, h2.sheet.cssRules];
                    n2.label = 13;
                  case 13:
                    return [2, null];
                }
                var l2;
              });
            });
          }
          var M2 = false;
          function T2() {
            try {
              return e2.sheet == null ? [null, null] : [e2.sheet.cssRules, null];
            } catch (e3) {
              return [null, e3];
            }
          }
          function A2() {
            var e3 = a(T2(), 2), t3 = e3[0], r2 = e3[1];
            return r2 ? (F(r2), null) : t3;
          }
          function L2() {
            e2.addEventListener("__darkreader__updateSheet", I2), l || br && e2.sheet || function() {
              P2 = O2(), q2();
              var t3 = function() {
                O2() !== P2 && (P2 = O2(), o2()), br && e2.sheet ? q2() : j2 = requestAnimationFrame(t3);
              };
              t3();
            }();
          }
          var P2 = null, j2 = null;
          function O2() {
            var e3 = A2();
            return e3 ? e3.length : null;
          }
          function q2() {
            cancelAnimationFrame(j2);
          }
          var N2 = false;
          function I2() {
            function e3() {
              N2 = false, g2 || o2();
            }
            br = true, q2(), N2 || (N2 = true, typeof queueMicrotask == "function" ? queueMicrotask(e3) : requestAnimationFrame(e3));
          }
          function U2() {
            e2.removeEventListener("__darkreader__updateSheet", I2), q2();
          }
          function $13() {
            w2.disconnect(), g2 = true, v2 && v2.stop(), m2 && m2.stop(), U2();
          }
          var z2 = 0;
          return { details: function() {
            var e3 = _2();
            return e3 ? { rules: e3 } : (x2 || C2 || (x2 = true, i2(), R2().then(function(e4) {
              x2 = false, u2(), e4 && o2();
            }).catch(function(e4) {
              F(e4), x2 = false, u2();
            })), null);
          }, render: function(t3, r2) {
            var n2 = _2();
            function a2() {
              p2 || ((p2 = e2 instanceof SVGStyleElement ? document.createElementNS("http://www.w3.org/2000/svg", "style") : document.createElement("style")).classList.add("darkreader"), p2.classList.add("darkreader--sync"), p2.media = "screen", !c && e2.title && (p2.title = e2.title), mr.add(p2)), m2 && m2.stop(), E2(), p2.sheet == null && (p2.textContent = "");
              for (var t4 = p2.sheet, r3 = t4.cssRules.length - 1; r3 >= 0; r3--)
                t4.deleteRule(r3);
              return m2 ? m2.run() : m2 = W(p2, "prev-sibling", function() {
                M2 = true, i3();
              }), p2.sheet;
            }
            function i3() {
              var e3 = M2;
              M2 = false, y2.modifySheet({ prepareSheet: a2, sourceCSSRules: n2, theme: t3, ignoreImageAnalysis: r2, force: e3, isAsyncCancelled: function() {
                return g2;
              } }), b2 = p2.sheet.cssRules.length === 0, y2.shouldRebuildStyle() && K(function() {
                return o2();
              });
            }
            n2 && (g2 = false, i3());
          }, pause: $13, destroy: function() {
            if ($13(), B(h2), B(p2), u2(), wr.has(V2)) {
              var e3 = wr.get(V2);
              wr.delete(V2), e3 && e3();
            }
          }, watch: function() {
            w2.observe(e2, k2), e2 instanceof HTMLStyleElement && L2();
          }, restore: function() {
            p2 && (++z2 > 10 ? F("Style sheet was moved multiple times", e2) : (F("Restore style", p2, e2), E2(), v2 && v2.skip(), m2 && m2.skip(), b2 || (M2 = true, o2())));
          } };
        }
        function Sr(e2, t2) {
          return r(this, void 0, void 0, function() {
            return n(this, function(r2) {
              return [2, new Promise(function(r3, n2) {
                var o2 = function() {
                  e2.removeEventListener("load", a2), e2.removeEventListener("error", i2), wr.delete(t2);
                }, a2 = function() {
                  o2(), D("Linkelement " + t2 + " has been loaded"), r3();
                }, i2 = function() {
                  o2(), n2("Linkelement " + t2 + " couldn't be loaded. " + e2.href);
                };
                wr.set(t2, function() {
                  o2(), n2();
                }), e2.addEventListener("load", a2), e2.addEventListener("error", i2), e2.href || i2();
              })];
            });
          });
        }
        function _r(e2) {
          return r(this, void 0, void 0, function() {
            return n(this, function(t2) {
              switch (t2.label) {
                case 0:
                  return e2.startsWith("data:") ? [4, fetch(e2)] : [3, 3];
                case 1:
                  return [4, t2.sent().text()];
                case 2:
                  return [2, t2.sent()];
                case 3:
                  return [4, ct({ url: e2, responseType: "text", mimeType: "text/css", origin: window.location.origin })];
                case 4:
                  return [2, t2.sent()];
              }
            });
          });
        }
        function Er(e2, t2, a2) {
          return a2 === void 0 && (a2 = /* @__PURE__ */ new Map()), r(this, void 0, void 0, function() {
            var r2, i2, u2, s2, c2, l2, d2, f2, h2, p2;
            return n(this, function(n2) {
              switch (n2.label) {
                case 0:
                  e2 = function(e3, t3) {
                    return e3.replace(ce, function(e4) {
                      var r3 = de(e4);
                      return 'url("' + oe(t3, r3) + '")';
                    });
                  }(e2 = function(e3) {
                    return e3.replace(pe, "");
                  }(e2 = e2.replace(he, "")), t2), r2 = Oe(le, e2), n2.label = 1;
                case 1:
                  n2.trys.push([1, 10, 11, 12]), i2 = o(r2), u2 = i2.next(), n2.label = 2;
                case 2:
                  return u2.done ? [3, 9] : (s2 = u2.value, c2 = de(s2.substring(8).replace(/;$/, "")), l2 = oe(t2, c2), d2 = void 0, a2.has(l2) ? (d2 = a2.get(l2), [3, 7]) : [3, 3]);
                case 3:
                  return n2.trys.push([3, 6, , 7]), [4, _r(l2)];
                case 4:
                  return d2 = n2.sent(), a2.set(l2, d2), [4, Er(d2, fe(l2), a2)];
                case 5:
                  return d2 = n2.sent(), [3, 7];
                case 6:
                  return F(n2.sent()), d2 = "", [3, 7];
                case 7:
                  e2 = e2.split(s2).join(d2), n2.label = 8;
                case 8:
                  return u2 = i2.next(), [3, 2];
                case 9:
                  return [3, 12];
                case 10:
                  return f2 = n2.sent(), h2 = { error: f2 }, [3, 12];
                case 11:
                  try {
                    u2 && !u2.done && (p2 = i2.return) && p2.call(i2);
                  } finally {
                    if (h2)
                      throw h2.error;
                  }
                  return [7];
                case 12:
                  return [2, e2 = e2.trim()];
              }
            });
          });
        }
        var xr, Cr, Vr = [], Rr = /* @__PURE__ */ new Map();
        function Mr(e2) {
          b && j(e2.querySelectorAll(":not(:defined)"), function(e3) {
            var t2 = e3.tagName.toLowerCase();
            Rr.has(t2) || (Rr.set(t2, /* @__PURE__ */ new Set()), function(e4) {
              return r(this, void 0, void 0, function() {
                return n(this, function(t3) {
                  return [2, new Promise(function(t4) {
                    if (window.customElements && typeof customElements.whenDefined == "function")
                      customElements.whenDefined(e4).then(t4);
                    else if (Tr)
                      Ar.set(e4, t4), document.dispatchEvent(new CustomEvent("__darkreader__addUndefinedResolver", { detail: { tag: e4 } }));
                    else {
                      var r2 = function() {
                        var n2 = Rr.get(e4);
                        n2 && n2.size > 0 && (n2.values().next().value.matches(":defined") ? t4() : requestAnimationFrame(r2));
                      };
                      requestAnimationFrame(r2);
                    }
                  })];
                });
              });
            }(t2).then(function() {
              if (Cr) {
                var e4 = Rr.get(t2);
                Rr.delete(t2), Cr(Array.from(e4));
              }
            })), Rr.get(t2).add(e3);
          });
        }
        var Tr = false;
        document.addEventListener("__darkreader__inlineScriptsAllowed", function() {
          Tr = true;
        });
        var Ar = /* @__PURE__ */ new Map();
        function Lr(e2) {
          (Tr = true, Ar.has(e2.detail.tag)) && Ar.get(e2.detail.tag)();
        }
        function Pr(e2, t2, r2) {
          jr();
          var n2 = new Set(e2), o2 = /* @__PURE__ */ new WeakMap(), a2 = /* @__PURE__ */ new WeakMap();
          function i2(e3) {
            o2.set(e3, e3.previousElementSibling), a2.set(e3, e3.nextElementSibling);
          }
          function u2(e3) {
            var r3 = e3.createdStyles, u3 = e3.removedStyles, s3 = e3.movedStyles;
            r3.forEach(function(e4) {
              return i2(e4);
            }), s3.forEach(function(e4) {
              return i2(e4);
            }), u3.forEach(function(e4) {
              return t3 = e4, o2.delete(t3), void a2.delete(t3);
              var t3;
            }), r3.forEach(function(e4) {
              return n2.add(e4);
            }), u3.forEach(function(e4) {
              return n2.delete(e4);
            }), r3.size + u3.size + s3.size > 0 && t2({ created: Array.from(r3), removed: Array.from(u3), moved: Array.from(s3), updated: [] });
          }
          function s2(e3) {
            var t3 = e3.additions, r3 = e3.moves, n3 = e3.deletions, o3 = /* @__PURE__ */ new Set(), a3 = /* @__PURE__ */ new Set(), i3 = /* @__PURE__ */ new Set();
            t3.forEach(function(e4) {
              return vr(e4).forEach(function(e5) {
                return o3.add(e5);
              });
            }), n3.forEach(function(e4) {
              return vr(e4).forEach(function(e5) {
                return a3.add(e5);
              });
            }), r3.forEach(function(e4) {
              return vr(e4).forEach(function(e5) {
                return i3.add(e5);
              });
            }), u2({ createdStyles: o3, removedStyles: a3, movedStyles: i3 }), t3.forEach(function(e4) {
              I(e4, f2), Mr(e4);
            });
          }
          function c2(e3) {
            var t3 = new Set(vr(e3)), r3 = /* @__PURE__ */ new Set(), i3 = /* @__PURE__ */ new Set(), s3 = /* @__PURE__ */ new Set();
            t3.forEach(function(e4) {
              n2.has(e4) || r3.add(e4);
            }), n2.forEach(function(e4) {
              t3.has(e4) || i3.add(e4);
            }), t3.forEach(function(e4) {
              var t4;
              r3.has(e4) || i3.has(e4) || (t4 = e4).previousElementSibling === o2.get(t4) && t4.nextElementSibling === a2.get(t4) || s3.add(e4);
            }), u2({ createdStyles: r3, removedStyles: i3, movedStyles: s3 }), I(e3, f2), Mr(e3);
          }
          function l2(e3) {
            var r3 = /* @__PURE__ */ new Set(), n3 = /* @__PURE__ */ new Set();
            e3.forEach(function(e4) {
              var t3 = e4.target;
              t3.isConnected && (pr(t3) ? r3.add(t3) : t3 instanceof HTMLLinkElement && t3.disabled && n3.add(t3));
            }), r3.size + n3.size > 0 && t2({ updated: Array.from(r3), created: [], removed: Array.from(n3), moved: [] });
          }
          function d2(e3) {
            var t3 = ee(e3, { onMinorMutations: s2, onHugeMutations: c2 }), r3 = new MutationObserver(l2);
            r3.observe(e3, { attributes: true, attributeFilter: ["rel", "disabled", "media"], subtree: true }), Vr.push(t3, r3), xr.add(e3);
          }
          function f2(e3) {
            var t3 = e3.shadowRoot;
            t3 == null || xr.has(t3) || (d2(t3), r2(t3));
          }
          e2.forEach(i2), d2(document), I(document.documentElement, f2), Cr = function(e3) {
            var r3 = [];
            e3.forEach(function(e4) {
              return O(r3, vr(e4.shadowRoot));
            }), t2({ created: r3, updated: [], removed: [], moved: [] }), e3.forEach(function(e4) {
              var t3 = e4.shadowRoot;
              t3 != null && (f2(e4), I(t3, f2), Mr(t3));
            });
          }, document.addEventListener("__darkreader__isDefined", Lr), Mr(document);
        }
        function jr() {
          Vr.forEach(function(e2) {
            return e2.disconnect();
          }), Vr.splice(0, Vr.length), xr = /* @__PURE__ */ new WeakSet(), Cr = null, Rr.clear(), document.removeEventListener("__darkreader__isDefined", Lr);
        }
        var Or = /* @__PURE__ */ new WeakMap(), Dr = /* @__PURE__ */ new WeakSet();
        function Fr(e2) {
          var t2 = false;
          return { render: function(r2, n2) {
            e2.adoptedStyleSheets.forEach(function(o2) {
              if (!Dr.has(o2)) {
                var u2 = o2.rules, s2 = new CSSStyleSheet();
                hr().modifySheet({ prepareSheet: function() {
                  for (var t3 = s2.cssRules.length - 1; t3 >= 0; t3--)
                    s2.deleteRule(t3);
                  return function(t4, r3) {
                    var n3 = i([], a(e2.adoptedStyleSheets)), o3 = n3.indexOf(t4), u3 = n3.indexOf(r3);
                    o3 !== u3 - 1 && (u3 >= 0 && n3.splice(u3, 1), n3.splice(o3 + 1, 0, r3), e2.adoptedStyleSheets = n3);
                  }(o2, s2), Or.set(o2, s2), Dr.add(s2), s2;
                }, sourceCSSRules: u2, theme: r2, ignoreImageAnalysis: n2, force: false, isAsyncCancelled: function() {
                  return t2;
                } });
              }
            });
          }, destroy: function() {
            t2 = true;
            var r2 = i([], a(e2.adoptedStyleSheets));
            e2.adoptedStyleSheets.forEach(function(e3) {
              if (Dr.has(e3)) {
                var t3 = r2.indexOf(e3);
                t3 >= 0 && r2.splice(t3, 1), Or.delete(e3), Dr.delete(e3);
              }
            }), e2.adoptedStyleSheets = r2;
          } };
        }
        function qr() {
          document.dispatchEvent(new CustomEvent("__darkreader__inlineScriptsAllowed"));
          var e2 = Object.getOwnPropertyDescriptor(CSSStyleSheet.prototype, "addRule"), t2 = Object.getOwnPropertyDescriptor(CSSStyleSheet.prototype, "insertRule"), r2 = Object.getOwnPropertyDescriptor(CSSStyleSheet.prototype, "deleteRule"), n2 = Object.getOwnPropertyDescriptor(CSSStyleSheet.prototype, "removeRule"), o2 = location.hostname.endsWith("pushbullet.com") || location.hostname.endsWith("ilsole24ore.com") || location.hostname.endsWith("allegro.pl"), u2 = o2 ? Object.getOwnPropertyDescriptor(Document.prototype, "styleSheets") : null, s2 = function() {
            Object.defineProperty(CSSStyleSheet.prototype, "addRule", e2), Object.defineProperty(CSSStyleSheet.prototype, "insertRule", t2), Object.defineProperty(CSSStyleSheet.prototype, "deleteRule", r2), Object.defineProperty(CSSStyleSheet.prototype, "removeRule", n2), document.removeEventListener("__darkreader__cleanUp", s2), document.removeEventListener("__darkreader__addUndefinedResolver", c2), o2 && Object.defineProperty(Document.prototype, "styleSheets", u2);
          }, c2 = function(e3) {
            customElements.whenDefined(e3.detail.tag).then(function() {
              document.dispatchEvent(new CustomEvent("__darkreader__isDefined", { detail: { tag: e3.detail.tag } }));
            });
          };
          document.addEventListener("__darkreader__cleanUp", s2), document.addEventListener("__darkreader__addUndefinedResolver", c2);
          var l2 = new Event("__darkreader__updateSheet");
          Object.defineProperty(CSSStyleSheet.prototype, "addRule", Object.assign({}, e2, { value: function(t3, r3, n3) {
            return e2.value.call(this, t3, r3, n3), this.ownerNode && !this.ownerNode.classList.contains("darkreader") && this.ownerNode.dispatchEvent(l2), -1;
          } })), Object.defineProperty(CSSStyleSheet.prototype, "insertRule", Object.assign({}, t2, { value: function(e3, r3) {
            var n3 = t2.value.call(this, e3, r3);
            return this.ownerNode && !this.ownerNode.classList.contains("darkreader") && this.ownerNode.dispatchEvent(l2), n3;
          } })), Object.defineProperty(CSSStyleSheet.prototype, "deleteRule", Object.assign({}, r2, { value: function(e3) {
            r2.value.call(this, e3), this.ownerNode && !this.ownerNode.classList.contains("darkreader") && this.ownerNode.dispatchEvent(l2);
          } })), Object.defineProperty(CSSStyleSheet.prototype, "removeRule", Object.assign({}, n2, { value: function(e3) {
            n2.value.call(this, e3), this.ownerNode && !this.ownerNode.classList.contains("darkreader") && this.ownerNode.dispatchEvent(l2);
          } })), o2 && Object.defineProperty(Document.prototype, "styleSheets", Object.assign({}, u2, { get: function() {
            var e3 = i([], a(u2.get.call(this))).filter(function(e4) {
              return !e4.ownerNode.classList.contains("darkreader");
            });
            return Object.setPrototypeOf(e3, StyleSheetList.prototype);
          } }));
        }
        var Nr = Array.from(crypto.getRandomValues(new Uint8Array(16))).map(function(e2) {
          return ((t2 = e2) < 16 ? "0" : "") + t2.toString(16);
          var t2;
        }).join(""), Br = /* @__PURE__ */ new Map(), Wr = [], Ir = null, Ur = null, $r = null, zr = null, Hr = null;
        function Gr(e2, t2) {
          t2 === void 0 && (t2 = document.head || document);
          var r2 = t2.querySelector("." + e2);
          return r2 || ((r2 = document.createElement("style")).classList.add("darkreader"), r2.classList.add(e2), r2.media = "screen", r2.textContent = ""), r2;
        }
        var Qr = /* @__PURE__ */ new Map();
        function Kr(e2, t2) {
          Qr.has(t2) && Qr.get(t2).stop(), Qr.set(t2, W(e2, "parent"));
        }
        function Jr() {
          var e2 = Gr("darkreader--fallback", document);
          e2.textContent = kt(Ir, { strict: true }), document.head.insertBefore(e2, document.head.firstChild), Kr(e2, "fallback");
          var r2 = Gr("darkreader--user-agent");
          r2.textContent = yt(Ir, $r, Ir.styleSystemControls), document.head.insertBefore(r2, e2.nextSibling), Kr(r2, "user-agent");
          var n2, o2, a2 = Gr("darkreader--text");
          Ir.useFont || Ir.textStroke > 0 ? a2.textContent = (n2 = Ir, (o2 = []).push('*:not(pre, .far, .fa, .glyphicon, [class*="vjs-"], .fab, .fa-github, .fas, .material-icons, .icofont, .typcn, mu, [class*="mu-"], .glyphicon, .icon) {'), n2.useFont && n2.fontFamily && o2.push("  font-family: " + n2.fontFamily + " !important;"), n2.textStroke > 0 && (o2.push("  -webkit-text-stroke: " + n2.textStroke + "px !important;"), o2.push("  text-stroke: " + n2.textStroke + "px !important;")), o2.push("}"), o2.join("\n")) : a2.textContent = "", document.head.insertBefore(a2, e2.nextSibling), Kr(a2, "text");
          var i2 = Gr("darkreader--invert");
          Ur && Array.isArray(Ur.invert) && Ur.invert.length > 0 ? i2.textContent = [Ur.invert.join(", ") + " {", "    filter: " + at(t(t({}, Ir), { contrast: Ir.mode === 0 ? Ir.contrast : Pe(Ir.contrast - 10, 0, 100) })) + " !important;", "}"].join("\n") : i2.textContent = "", document.head.insertBefore(i2, a2.nextSibling), Kr(i2, "invert");
          var u2 = Gr("darkreader--inline");
          u2.textContent = Yt(), document.head.insertBefore(u2, i2.nextSibling), Kr(u2, "inline");
          var s2 = Gr("darkreader--override");
          s2.textContent = Ur && Ur.css ? Zr(Ur.css) : "", document.head.appendChild(s2), Kr(s2, "override");
          var c2 = Gr("darkreader--variables"), l2 = wt(Ir), d2 = Ir.darkSchemeBackgroundColor, f2 = Ir.darkSchemeTextColor, h2 = Ir.lightSchemeBackgroundColor, p2 = Ir.lightSchemeTextColor, v2 = Ir.mode, m2 = v2 === 0 ? h2 : d2, g2 = v2 === 0 ? p2 : f2;
          m2 = Je(Se(m2), Ir), g2 = tt(Se(g2), Ir), c2.textContent = [":root {", "   --darkreader-neutral-background: " + m2 + ";", "   --darkreader-neutral-text: " + g2 + ";", "   --darkreader-selection-background: " + l2.backgroundColorSelection + ";", "   --darkreader-selection-text: " + l2.foregroundColorSelection + ";", "}"].join("\n"), document.head.insertBefore(c2, u2.nextSibling), Kr(c2, "variables");
          var b2 = Gr("darkreader--root-vars");
          document.head.insertBefore(b2, c2.nextSibling);
          var y2 = function(e3, t2) {
            t2 === void 0 && (t2 = document.head || document);
            var r3 = t2.querySelector("." + e3);
            return r3 || ((r3 = document.createElement("script")).classList.add("darkreader"), r3.classList.add(e3)), r3;
          }("darkreader--proxy");
          y2.textContent = "(" + qr + ")()", document.head.insertBefore(y2, b2.nextSibling);
        }
        var Xr = /* @__PURE__ */ new Set();
        function Yr(e2) {
          var t2 = Gr("darkreader--inline", e2);
          t2.textContent = Yt(), e2.insertBefore(t2, e2.firstChild);
          var r2 = Gr("darkreader--override", e2);
          r2.textContent = Ur && Ur.css ? Zr(Ur.css) : "", e2.insertBefore(r2, t2.nextSibling), Xr.add(e2);
        }
        function Zr(e2) {
          return e2.replace(/\${(.+?)}/g, function(e3, t2) {
            try {
              var r2 = Et(t2);
              return ze(r2, Ir, He);
            } catch (e4) {
              return F(e4), t2;
            }
          });
        }
        function en() {
          var e2 = document.querySelector(".darkreader--fallback");
          e2 && (e2.textContent = "");
        }
        var tn = 0, rn = /* @__PURE__ */ new Set();
        function nn(e2) {
          var t2 = ++tn;
          D("New manager for element, with loadingStyleID " + t2, e2);
          var r2 = kr(e2, { update: function() {
            var e3 = r2.details();
            e3 && (At.addRulesForMatching(e3.rules), At.matchVariablesAndDependants(), r2.render(Ir, zr));
          }, loadingStart: function() {
            if (!U() || !ln) {
              rn.add(t2), D("Current amount of styles loading: " + rn.size);
              var e3 = document.querySelector(".darkreader--fallback");
              e3.textContent || (e3.textContent = kt(Ir, { strict: false }));
            }
          }, loadingEnd: function() {
            rn.delete(t2), D("Removed loadingStyle " + t2 + ", now awaiting: " + rn.size), D("To-do to be loaded", rn), rn.size === 0 && U() && en();
          } });
          return Br.set(e2, r2), r2;
        }
        function on(e2) {
          var t2 = Br.get(e2);
          t2 && (t2.destroy(), Br.delete(e2));
        }
        var an = q(function(e2) {
          Br.forEach(function(e3) {
            return e3.render(Ir, zr);
          }), Wr.forEach(function(e3) {
            return e3.render(Ir, zr);
          }), e2 && e2();
        }), un = function() {
          an.cancel();
        };
        function sn() {
          rn.size !== 0 ? F("DOM is ready, but still have styles being loaded.", rn) : en();
        }
        var cn = null, ln = !document.hidden;
        function dn() {
          document.removeEventListener("visibilitychange", cn), cn = null;
        }
        function fn() {
          function e2() {
            var e3, t3;
            !function() {
              un();
              var e4 = vr(document).filter(function(e5) {
                return !Br.has(e5);
              }).map(function(e5) {
                return nn(e5);
              });
              e4.map(function(e5) {
                return e5.details();
              }).filter(function(e5) {
                return e5 && e5.rules.length > 0;
              }).forEach(function(e5) {
                At.addRulesForMatching(e5.rules);
              }), At.matchVariablesAndDependants(), At.putRootVars(document.head.querySelector(".darkreader--root-vars"), Ir), Br.forEach(function(e5) {
                return e5.render(Ir, zr);
              }), rn.size === 0 && en(), e4.forEach(function(e5) {
                return e5.watch();
              });
              var t4 = function(e5) {
                for (var t5 = [], r3 = 0, n3 = e5.length; r3 < n3; r3++)
                  t5.push(e5[r3]);
                return t5;
              }(document.querySelectorAll(Xt));
              I(document.documentElement, function(e5) {
                Yr(e5.shadowRoot);
                var r3 = e5.shadowRoot.querySelectorAll(Xt);
                r3.length > 0 && O(t4, r3);
              }), t4.forEach(function(e5) {
                return ar(e5, Ir, Hr, zr);
              }), hn(document);
            }(), Pr(Array.from(Br.keys()), function(e4) {
              var t4 = e4.created, r3 = e4.updated, n3 = e4.removed, o3 = e4.moved, a2 = n3, i2 = t4.concat(r3).concat(o3).filter(function(e5) {
                return !Br.has(e5);
              }), u2 = o3.filter(function(e5) {
                return Br.has(e5);
              });
              D("Styles to be removed:", a2), a2.forEach(function(e5) {
                return on(e5);
              });
              var s2 = i2.map(function(e5) {
                return nn(e5);
              });
              s2.map(function(e5) {
                return e5.details();
              }).filter(function(e5) {
                return e5 && e5.rules.length > 0;
              }).forEach(function(e5) {
                At.addRulesForMatching(e5.rules);
              }), At.matchVariablesAndDependants(), s2.forEach(function(e5) {
                return e5.render(Ir, zr);
              }), s2.forEach(function(e5) {
                return e5.watch();
              }), u2.forEach(function(e5) {
                return Br.get(e5).restore();
              });
            }, function(e4) {
              Yr(e4), hn(e4);
            }), e3 = function(e4) {
              ar(e4, Ir, Hr, zr), e4 === document.documentElement && e4.getAttribute("style").includes("--") && (At.matchVariablesAndDependants(), At.putRootVars(document.head.querySelector(".darkreader--root-vars"), Ir));
            }, t3 = function(e4) {
              Yr(e4);
              var t4 = e4.querySelectorAll(Xt);
              t4.length > 0 && j(t4, function(e5) {
                return ar(e5, Ir, Hr, zr);
              });
            }, tr(document, e3, t3), I(document.documentElement, function(r3) {
              tr(r3.shadowRoot, e3, t3);
            }), z(sn);
          }
          var t2, r2, n2, o2;
          Jr(), document.hidden ? (t2 = e2, r2 = Boolean(cn), cn = function() {
            document.hidden || (dn(), t2(), ln = true);
          }, r2 || document.addEventListener("visibilitychange", cn)) : e2(), n2 = Ir, (o2 = document.querySelector(ur)) ? lr(o2, n2) : (cr && cr.disconnect(), (cr = new MutationObserver(function(e3) {
            e:
              for (var t3 = 0; t3 < e3.length; t3++)
                for (var r3 = e3[t3].addedNodes, o3 = 0; o3 < r3.length; o3++) {
                  var a2 = r3[o3];
                  if (a2 instanceof HTMLMetaElement && a2.name === ir) {
                    cr.disconnect(), cr = null, lr(a2, n2);
                    break e;
                  }
                }
          })).observe(document.head, { childList: true }));
        }
        function hn(e2) {
          if (Array.isArray(e2.adoptedStyleSheets) && e2.adoptedStyleSheets.length > 0) {
            var t2 = Fr(e2);
            Wr.push(t2), t2.render(Ir, zr);
          }
        }
        function pn() {
          Br.forEach(function(e2) {
            return e2.pause();
          }), j(Qr.values(), function(e2) {
            return e2.stop();
          }), Qr.clear(), jr(), Zt.forEach(function(e2) {
            return e2.disconnect();
          }), er.forEach(function(e2) {
            return e2.disconnect();
          }), Zt.clear(), er.clear(), H(sn), Q.clear();
        }
        function vn() {
          var e2, t2 = document.querySelector('meta[name="darkreader"]');
          return t2 ? t2.content !== Nr : ((e2 = document.createElement("meta")).name = "darkreader", e2.content = Nr, document.head.appendChild(e2), false);
        }
        function mn(e2, t2, r2) {
          if (Ir = e2, (Ur = t2) ? (zr = Array.isArray(Ur.ignoreImageAnalysis) ? Ur.ignoreImageAnalysis : [], Hr = Array.isArray(Ur.ignoreInlineStyle) ? Ur.ignoreInlineStyle : []) : (zr = [], Hr = []), $r = r2, document.head) {
            if (vn())
              return;
            document.documentElement.setAttribute("data-darkreader-mode", "dynamic"), document.documentElement.setAttribute("data-darkreader-scheme", Ir.mode ? "dark" : "dimmed"), fn();
          } else {
            if (!d) {
              var n2 = Gr("darkreader--fallback");
              document.documentElement.appendChild(n2), n2.textContent = kt(Ir, { strict: true });
            }
            var o2 = new MutationObserver(function() {
              if (document.head) {
                if (o2.disconnect(), vn())
                  return void gn();
                fn();
              }
            });
            o2.observe(document, { childList: true, subtree: true });
          }
        }
        function gn() {
          document.documentElement.removeAttribute("data-darkreader-mode"), document.documentElement.removeAttribute("data-darkreader-scheme"), At.clear(), te.clear(), dn(), un(), pn(), Tt(), B(document.querySelector(".darkreader--fallback")), document.head && (!function() {
            cr && (cr.disconnect(), cr = null);
            var e2 = document.querySelector(ur);
            e2 && sr && (e2.content = sr);
          }(), B(document.head.querySelector(".darkreader--user-agent")), B(document.head.querySelector(".darkreader--text")), B(document.head.querySelector(".darkreader--invert")), B(document.head.querySelector(".darkreader--inline")), B(document.head.querySelector(".darkreader--override")), B(document.head.querySelector(".darkreader--variables")), B(document.head.querySelector(".darkreader--root-vars")), B(document.head.querySelector('meta[name="darkreader"]')), document.dispatchEvent(new CustomEvent("__darkreader__cleanUp")), B(document.head.querySelector(".darkreader--proxy"))), Xr.forEach(function(e2) {
            B(e2.querySelector(".darkreader--inline")), B(e2.querySelector(".darkreader--override"));
          }), Xr.clear(), j(Br.keys(), function(e2) {
            return on(e2);
          }), rn.clear(), wr.clear(), j(document.querySelectorAll(".darkreader"), B), Wr.forEach(function(e2) {
            e2.destroy();
          }), Wr.splice(0);
        }
        var bn = /url\(\"(blob\:.*?)\"\)/g;
        function yn(e2) {
          return r(this, void 0, void 0, function() {
            var t2, r2;
            return n(this, function(n2) {
              switch (n2.label) {
                case 0:
                  return t2 = [], Oe(bn, e2, 1).forEach(function(e3) {
                    var r3 = w(e3);
                    t2.push(r3);
                  }), [4, Promise.all(t2)];
                case 1:
                  return r2 = n2.sent(), [2, e2.replace(bn, function() {
                    return 'url("' + r2.shift() + '")';
                  })];
              }
            });
          });
        }
        function wn() {
          return r(this, void 0, void 0, function() {
            function e2(e3, r3) {
              var n2 = document.querySelector(e3);
              n2 && n2.textContent && (t2.push("/* " + r3 + " */"), t2.push(n2.textContent), t2.push(""));
            }
            var t2, r2, o2, a2, i2;
            return n(this, function(n2) {
              switch (n2.label) {
                case 0:
                  return t2 = ['/*\n                        _______\n                       /       \\\n                      .==.    .==.\n                     ((  ))==((  ))\n                    / "=="    "=="\\\n                   /____|| || ||___\\\n       ________     ____    ________  ___    ___\n       |  ___  \\   /    \\   |  ___  \\ |  |  /  /\n       |  |  \\  \\ /  /\\  \\  |  |  \\  \\|  |_/  /\n       |  |   )  /  /__\\  \\ |  |__/  /|  ___  \\\n       |  |__/  /  ______  \\|  ____  \\|  |  \\  \\\n_______|_______/__/ ____ \\__\\__|___\\__\\__|___\\__\\____\n|  ___  \\ |  ____/ /    \\   |  ___  \\ |  ____|  ___  \\\n|  |  \\  \\|  |___ /  /\\  \\  |  |  \\  \\|  |___|  |  \\  \\\n|  |__/  /|  ____/  /__\\  \\ |  |   )  |  ____|  |__/  /\n|  ____  \\|  |__/  ______  \\|  |__/  /|  |___|  ____  \\\n|__|   \\__\\____/__/      \\__\\_______/ |______|__|   \\__\\\n                https://darkreader.org\n*/'], e2(".darkreader--fallback", "Fallback Style"), e2(".darkreader--user-agent", "User-Agent Style"), e2(".darkreader--text", "Text Style"), e2(".darkreader--invert", "Invert Style"), e2(".darkreader--variables", "Variables Style"), r2 = [], document.querySelectorAll(".darkreader--sync").forEach(function(e3) {
                    j(e3.sheet.cssRules, function(e4) {
                      e4 && e4.cssText && r2.push(e4.cssText);
                    });
                  }), r2.length ? (o2 = function(e3) {
                    function t3(e4) {
                      return e4.replace(/^\s+/, "");
                    }
                    function r3(e4) {
                      return e4 === 0 ? "" : " ".repeat(4 * e4);
                    }
                    for (var n3 = /[^{}]+{\s*}/g; n3.test(e3); )
                      e3 = e3.replace(n3, "");
                    for (var o3 = e3.replace(/\s{2,}/g, " ").replace(/\{/g, "{\n").replace(/\}/g, "\n}\n").replace(/\;(?![^\(|\"]*(\)|\"))/g, ";\n").replace(/\,(?![^\(|\"]*(\)|\"))/g, ",\n").replace(/\n\s*\n/g, "\n").split("\n"), a3 = 0, i3 = [], u2 = 0, s2 = o3.length; u2 < s2; u2++) {
                      var c2 = o3[u2] + "\n";
                      c2.match(/\{/) ? i3.push(r3(a3++) + t3(c2)) : c2.match(/\}/) ? i3.push(r3(--a3) + t3(c2)) : i3.push(r3(a3) + t3(c2));
                    }
                    return i3.join("").trim();
                  }(r2.join("\n")), t2.push("/* Modified CSS */"), i2 = (a2 = t2).push, [4, yn(o2)]) : [3, 2];
                case 1:
                  i2.apply(a2, [n2.sent()]), t2.push(""), n2.label = 2;
                case 2:
                  return e2(".darkreader--override", "Override Style"), [2, t2.join("\n")];
              }
            });
          });
        }
        var kn = false, Sn = function() {
          try {
            return window.self !== window.top;
          } catch (e2) {
            return console.warn(e2), true;
          }
        }();
        function _n(e2, r2) {
          e2 === void 0 && (e2 = {}), r2 === void 0 && (r2 = null);
          var n2 = t(t({}, P), e2);
          if (n2.engine !== T)
            throw new Error("Theme engine is not supported.");
          mn(n2, r2, Sn), kn = true;
        }
        function En() {
          gn(), kn = false;
        }
        var xn = matchMedia("(prefers-color-scheme: dark)"), Cn = { themeOptions: null, fixes: null };
        function Vn() {
          xn.matches ? _n(Cn.themeOptions, Cn.fixes) : En();
        }
        var Rn = function(e2) {
          _ = e2 || S;
        };
        e.auto = function(e2, t2) {
          e2 === void 0 && (e2 = {}), t2 === void 0 && (t2 = null), e2 ? (Cn = { themeOptions: e2, fixes: t2 }, Vn(), g ? xn.addEventListener("change", Vn) : xn.addListener(Vn)) : (g ? xn.removeEventListener("change", Vn) : xn.removeListener(Vn), En());
        }, e.disable = En, e.enable = _n, e.exportGeneratedCSS = function() {
          return r(this, void 0, void 0, function() {
            return n(this, function(e2) {
              switch (e2.label) {
                case 0:
                  return [4, wn()];
                case 1:
                  return [2, e2.sent()];
              }
            });
          });
        }, e.isEnabled = function() {
          return kn;
        }, e.setFetchMethod = Rn, Object.defineProperty(e, "__esModule", { value: true });
      });
    }
  });

  // ns-hugo:/home/runner/work/ShanyouBlog/ShanyouBlog/themes/virgo/assets/js/init/greet.js
  function greet() {
    console.log(`---------------------
		
	Hello Jack \u{1F60E}

		---------------------`);
  }

  // ns-hugo:/home/runner/work/ShanyouBlog/ShanyouBlog/themes/virgo/assets/js/init/eventBinding.js
  var import_jquery8 = __toESM(require_jquery_min());

  // ns-hugo:/home/runner/work/ShanyouBlog/ShanyouBlog/themes/virgo/assets/js/init/fixAnchorTop.js
  var import_jquery = __toESM(require_jquery_min());

  // ns-hugo:/home/runner/work/ShanyouBlog/ShanyouBlog/themes/virgo/assets/js/utils/isMobile.js
  function browserRedirect() {
    let sUserAgent = navigator.userAgent.toLowerCase(), bIsIpad = sUserAgent.match(/ipad/i) == "ipad", bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os", bIsMidp = sUserAgent.match(/midp/i) == "midp", bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4", bIsUc = sUserAgent.match(/ucweb/i) == "ucweb", bIsAndroid = sUserAgent.match(/android/i) == "android", bIsCE = sUserAgent.match(/windows ce/i) == "windows ce", bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
    if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
      return true;
    }
  }

  // ns-hugo:/home/runner/work/ShanyouBlog/ShanyouBlog/themes/virgo/assets/js/init/fixAnchorTop.js
  function fixAnchorTop() {
    let _hash = decodeURIComponent(location.hash);
    let _ele = browserRedirect() ? (0, import_jquery.default)("body") : (0, import_jquery.default)("html");
    if (_hash)
      _ele.scrollTop((0, import_jquery.default)(_hash).offset().top - 48);
  }

  // ns-hugo:/home/runner/work/ShanyouBlog/ShanyouBlog/themes/virgo/assets/js/init/colorHeader.js
  var import_jquery2 = __toESM(require_jquery_min());
  function colorHeader() {
    let _curScroll = (0, import_jquery2.default)(this).scrollTop() + 48;
    if (_curScroll > 120) {
      (0, import_jquery2.default)("#header").addClass("js-header");
    } else {
      (0, import_jquery2.default)("#header").removeClass("js-header");
    }
  }

  // ns-hugo:/home/runner/work/ShanyouBlog/ShanyouBlog/themes/virgo/assets/js/init/colorToc.js
  var import_jquery4 = __toESM(require_jquery_min());

  // ns-hugo:/home/runner/work/ShanyouBlog/ShanyouBlog/themes/virgo/assets/js/init/initToc.js
  var import_jquery3 = __toESM(require_jquery_min());
  function initToc() {
    (0, import_jquery3.default)("h2, h3").addClass("headline");
    (0, import_jquery3.default)("#TableOfContents a").each(function() {
      let _id = "id-" + (0, import_jquery3.default)(this).attr("href").split("#")[1];
      (0, import_jquery3.default)(this).attr("id", _id);
      (0, import_jquery3.default)(this).addClass("toc-link");
    });
  }

  // ns-hugo:/home/runner/work/ShanyouBlog/ShanyouBlog/themes/virgo/assets/js/init/colorToc.js
  function colorToc() {
    initToc();
    let _curScroll = (0, import_jquery4.default)(this).scrollTop() + 48;
    let _curHeadline;
    let _arrTop = [];
    (0, import_jquery4.default)(".headline").each(function() {
      let _curHeadlineTop = (0, import_jquery4.default)(this).offset().top;
      _arrTop.push(_curHeadlineTop);
      if (_curHeadlineTop - 1 < _curScroll)
        _curHeadline = (0, import_jquery4.default)(this);
      if (_curScroll >= _arrTop[0]) {
        let _id = "id-" + _curHeadline.attr("id");
        (0, import_jquery4.default)(".toc-link").removeClass("toc-link--active");
        (0, import_jquery4.default)("#" + _id).addClass("toc-link--active");
      }
    });
  }

  // ns-hugo:/home/runner/work/ShanyouBlog/ShanyouBlog/themes/virgo/assets/js/utils/toggleToc.js
  var import_jquery5 = __toESM(require_jquery_min());
  function toggleToc(e) {
    e.stopPropagation();
    let toc = (0, import_jquery5.default)(".toc"), po = (0, import_jquery5.default)(".toc .page-operation");
    let _right = toc.css("right");
    if (_right === "-300px") {
      toc.css({ right: "16px" });
      po.css({ right: "24px" });
      (0, import_jquery5.default)("body").click(toggleToc);
    } else {
      toc.css({ right: "-300px" });
      po.css({ right: "-300px" });
      (0, import_jquery5.default)("body").unbind("click");
    }
  }

  // ns-hugo:/home/runner/work/ShanyouBlog/ShanyouBlog/themes/virgo/assets/js/utils/toggleColor.js
  var import_darkreader = __toESM(require_darkreader_min());
  var import_jquery7 = __toESM(require_jquery_min());

  // ns-hugo:/home/runner/work/ShanyouBlog/ShanyouBlog/themes/virgo/assets/js/utils/parseSiteParams.js
  var import_jquery6 = __toESM(require_jquery_min());
  function parseSiteParams() {
    let _vars = (0, import_jquery6.default)("#vars");
    console.log(_vars.text());
    return JSON.parse(_vars.text());
  }

  // ns-hugo:/home/runner/work/ShanyouBlog/ShanyouBlog/themes/virgo/assets/js/utils/toggleColor.js
  var color = parseSiteParams().svgColor;
  var sun = `<svg t="1657283336399" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2283" width="16" height="16"><path d="M512 288c-123.488 0-224 100.512-224 224 0 123.488 100.512 224 224 224s224-100.512 224-224C736 388.512 635.488 288 512 288zM512 672c-88.384 0-160-71.616-160-160s71.616-160 160-160 160 71.616 160 160S600.384 672 512 672zM512 224c17.664 0 32-14.336 32-32L544 128c0-17.664-14.336-32-32-32s-32 14.336-32 32l0 64C480 209.664 494.336 224 512 224zM512 800c-17.664 0-32 14.336-32 32l0 64c0 17.664 14.336 32 32 32s32-14.336 32-32l0-64C544 814.336 529.664 800 512 800zM760.864 308.32l45.248-45.248c12.512-12.512 12.512-32.736 0-45.248-12.512-12.512-32.736-12.512-45.248 0l-45.248 45.248c-12.512 12.512-12.512 32.736 0 45.248C728.128 320.832 748.384 320.832 760.864 308.32zM263.136 715.68l-45.248 45.248c-12.512 12.512-12.512 32.736 0 45.248s32.736 12.512 45.248 0l45.248-45.248c12.512-12.544 12.512-32.768 0-45.248C295.872 703.168 275.616 703.136 263.136 715.68zM224 512c0-17.664-14.336-32-32-32L128 480c-17.664 0-32 14.336-32 32s14.336 32 32 32l64 0C209.664 544 224 529.664 224 512zM896 480l-64 0c-17.664 0-32 14.336-32 32s14.336 32 32 32l64 0c17.664 0 32-14.336 32-32S913.664 480 896 480zM263.072 308.32c12.512 12.512 32.768 12.512 45.248 0 12.512-12.512 12.512-32.736 0-45.248l-45.248-45.248c-12.512-12.512-32.736-12.512-45.248 0-12.512 12.512-12.512 32.736 0 45.248L263.072 308.32zM760.928 715.616c-12.544-12.512-32.768-12.512-45.248 0-12.512 12.512-12.544 32.736 0 45.248l45.248 45.248c12.512 12.512 32.736 12.512 45.248 0s12.512-32.736 0-45.248L760.928 715.616z" p-id="2284" fill=${color}></path></svg>`;
  var moon = `<svg t="1656411842215" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5086" width="12" height="12"><path d="M1007.492874 384.513055c-8.795694-34.58307-21.189627-67.666874-36.682043-99.05151-2.698679-5.397358-10.894667-3.498287-10.894666 2.598728v0.299853c0 32.484098-6.896624 63.868734-19.890263 92.554691-10.694764 23.488501-25.487523 45.077933-43.978471 64.068635-41.779547 42.679107-99.05151 66.967217-158.722299 67.26707-61.869712 0.299853-119.941284-24.188159-162.920244-68.966238-40.280281-41.979449-62.56937-98.251902-62.269516-156.323473 0.399804-59.270984 23.588452-114.94373 65.567901-156.823229 19.59041-19.59041 42.179351-35.082826 66.667364-46.077443C672.956643 71.166451 704.041426 64.469729 736.125719 64.469729h1.299364c6.097015 0 8.096037-8.096037 2.598728-10.794715C708.739126 37.982696 675.655322 25.488812 641.172203 16.493216 599.492607 5.598549 555.714038-0.098662 510.536154 0.001289 222.37722 0.700947-7.41029 237.38508 0.185992 525.444064c7.096526 271.667008 225.889418 490.559851 497.456474 497.856279 287.559228 7.796183 524.14341-220.891864 525.842579-508.551044 0.299853-44.977981-5.297407-88.656599-15.992171-130.236244z m-83.15929 301.552378c-22.588942 53.27392-54.873137 101.250434-95.953027 142.330323-41.179841 41.179841-89.056403 73.464036-142.330324 95.953027-55.172991 23.288599-113.744317 35.182777-174.314666 35.182777s-119.141675-11.794226-174.314666-35.182777c-53.27392-22.588942-101.250434-54.873137-142.330323-95.953027-41.179841-41.179841-73.464036-89.056403-95.953027-142.330323C75.749001 630.892442 63.954774 572.221164 63.954774 511.750767s11.794226-119.141675 35.182777-174.314666c22.588942-53.27392 54.873137-101.250434 95.953027-142.330323 41.179841-41.179841 89.056403-73.464036 142.330323-95.953027C392.593892 75.7642 451.26517 63.969974 511.735567 63.969974c13.99315 0 27.886348 0.599706 41.679596 1.89907C489.246577 118.643209 448.266638 198.704016 448.266638 288.360126c0 159.022152 128.836929 287.859081 287.859081 287.859081 89.156354 0 168.817357-40.580134 221.691473-104.149015 1.099462 13.09359 1.699168 26.387082 1.699168 39.680575 0 60.470397-11.794226 119.141675-35.182776 174.314666z" p-id="5087" fill=${color}></path></svg>`;
  if (localStorage.getItem("dark")) {
    (0, import_darkreader.enable)({
      brightness: 100,
      contrast: 90,
      sepia: 10
    });
  }
  function toggleColor() {
    let _isEnabled = (0, import_darkreader.isEnabled)();
    if (_isEnabled) {
      (0, import_darkreader.disable)();
      localStorage.removeItem("dark");
      (0, import_jquery7.default)("#light-dark a").html(moon);
    } else {
      (0, import_darkreader.enable)({
        brightness: 100,
        contrast: 90,
        sepia: 10
      });
      localStorage.setItem("dark", true);
      (0, import_jquery7.default)("#light-dark a").html(sun);
    }
  }

  // ns-hugo:/home/runner/work/ShanyouBlog/ShanyouBlog/themes/virgo/assets/js/init/eventBinding.js
  function initEventBinding() {
    (0, import_jquery8.default)(window).bind("hashchange", fixAnchorTop);
    (0, import_jquery8.default)(window).bind("scroll", colorHeader);
    (0, import_jquery8.default)(window).bind("scroll", colorToc);
    (0, import_jquery8.default)("#toc").bind("click", toggleToc);
    (0, import_jquery8.default)("#light-dark").bind("click", toggleColor);
    if (location.href.indexOf("ovirgo") > -1)
      (0, import_jquery8.default)("#s").hide();
  }

  // ns-hugo:/home/runner/work/ShanyouBlog/ShanyouBlog/themes/virgo/assets/js/init/initCodeBlock.js
  var import_jquery9 = __toESM(require_jquery_min());
  function initCodeBlock() {
    const _arr = (0, import_jquery9.default)(".highlight pre code");
    _arr.each(function(idx) {
      let isShow = !parseSiteParams().hasFoldAllCodeBlocks;
      if (browserRedirect())
        isShow = false;
      let _this = (0, import_jquery9.default)(this);
      let _lang = (0, import_jquery9.default)(this).attr("data-lang");
      let _id = _lang + idx;
      if (!isShow)
        _this.css("display", "none");
      (0, import_jquery9.default)(this).before(`<div class="lang" id="${_id}">${isShow ? _lang + " \u25BD" : _lang + " \u25B7"}</div>`);
      let _langEle = (0, import_jquery9.default)("#" + _id);
      _langEle.click(function() {
        _this.toggle();
        isShow = !isShow;
        _langEle.html(isShow ? `${_lang} \u25BD` : `${_lang} \u25B7`);
      });
    });
  }

  // ns-hugo:/home/runner/work/ShanyouBlog/ShanyouBlog/themes/virgo/assets/js/init/initMouseClickAnimate.js
  var import_jquery10 = __toESM(require_jquery_min());

  // ns-hugo:/home/runner/work/ShanyouBlog/ShanyouBlog/themes/virgo/assets/js/init/enhanceOrgMode.js
  var import_jquery11 = __toESM(require_jquery_min());
  function enhanceOrgMode_default() {
    (0, import_jquery11.default)(".html-block p").each((idx, item) => {
      item.innerHTML = `${item.innerText}`;
    });
  }

  // <stdin>
  greet();
  initEventBinding();
  initCodeBlock();
  enhanceOrgMode_default();
})();
/*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
/*! jQuery v3.6.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */
