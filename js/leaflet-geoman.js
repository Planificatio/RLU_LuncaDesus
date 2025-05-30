(() => {
    var Wl = Object.create;
    var lr = Object.defineProperty;
    var Ql = Object.getOwnPropertyDescriptor;
    var th = Object.getOwnPropertyNames;
    var eh = Object.getPrototypeOf,
        ih = Object.prototype.hasOwnProperty;
    var S = (t, e) => () => (e || t((e = {
        exports: {}
    }).exports, e), e.exports);
    var rh = (t, e, i, r) => {
        if (e && typeof e == "object" || typeof e == "function")
            for (let n of th(e)) !ih.call(t, n) && n !== i && lr(t, n, {
                get: () => e[n],
                enumerable: !(r = Ql(e, n)) || r.enumerable
            });
        return t
    };
    var xt = (t, e, i) => (i = t != null ? Wl(eh(t)) : {}, rh(e || !t || !t.__esModule ? lr(i, "default", {
        value: t,
        enumerable: !0
    }) : i, t));
    var cr = S((w_, ur) => {
        function sh() {
            this.__data__ = [], this.size = 0
        }
        ur.exports = sh
    });
    var he = S((C_, pr) => {
        function ah(t, e) {
            return t === e || t !== t && e !== e
        }
        pr.exports = ah
    });
    var ue = S((E_, fr) => {
        var oh = he();

        function lh(t, e) {
            for (var i = t.length; i--;)
                if (oh(t[i][0], e)) return i;
            return -1
        }
        fr.exports = lh
    });
    var gr = S((P_, dr) => {
        var hh = ue(),
            uh = Array.prototype,
            ch = uh.splice;

        function ph(t) {
            var e = this.__data__,
                i = hh(e, t);
            if (i < 0) return !1;
            var r = e.length - 1;
            return i == r ? e.pop() : ch.call(e, i, 1), --this.size, !0
        }
        dr.exports = ph
    });
    var _r = S((S_, mr) => {
        var fh = ue();

        function dh(t) {
            var e = this.__data__,
                i = fh(e, t);
            return i < 0 ? void 0 : e[i][1]
        }
        mr.exports = dh
    });
    var Lr = S((B_, yr) => {
        var gh = ue();

        function mh(t) {
            return gh(this.__data__, t) > -1
        }
        yr.exports = mh
    });
    var vr = S((T_, br) => {
        var _h = ue();

        function yh(t, e) {
            var i = this.__data__,
                r = _h(i, t);
            return r < 0 ? (++this.size, i.push([t, e])) : i[r][1] = e, this
        }
        br.exports = yh
    });
    var ce = S((R_, kr) => {
        var Lh = cr(),
            bh = gr(),
            vh = _r(),
            kh = Lr(),
            Mh = vr();

        function Kt(t) {
            var e = -1,
                i = t == null ? 0 : t.length;
            for (this.clear(); ++e < i;) {
                var r = t[e];
                this.set(r[0], r[1])
            }
        }
        Kt.prototype.clear = Lh;
        Kt.prototype.delete = bh;
        Kt.prototype.get = vh;
        Kt.prototype.has = kh;
        Kt.prototype.set = Mh;
        kr.exports = Kt
    });
    var xr = S((D_, Mr) => {
        var xh = ce();

        function wh() {
            this.__data__ = new xh, this.size = 0
        }
        Mr.exports = wh
    });
    var Cr = S((O_, wr) => {
        function Ch(t) {
            var e = this.__data__,
                i = e.delete(t);
            return this.size = e.size, i
        }
        wr.exports = Ch
    });
    var Pr = S((A_, Er) => {
        function Eh(t) {
            return this.__data__.get(t)
        }
        Er.exports = Eh
    });
    var Br = S((I_, Sr) => {
        function Ph(t) {
            return this.__data__.has(t)
        }
        Sr.exports = Ph
    });
    var oi = S((G_, Tr) => {
        var Sh = typeof global == "object" && global && global.Object === Object && global;
        Tr.exports = Sh
    });
    var Gt = S((q_, Rr) => {
        var Bh = oi(),
            Th = typeof self == "object" && self && self.Object === Object && self,
            Rh = Bh || Th || Function("return this")();
        Rr.exports = Rh
    });
    var Oe = S((N_, Dr) => {
        var Dh = Gt(),
            Oh = Dh.Symbol;
        Dr.exports = Oh
    });
    var Gr = S((z_, Ir) => {
        var Or = Oe(),
            Ar = Object.prototype,
            Ah = Ar.hasOwnProperty,
            Ih = Ar.toString,
            pe = Or ? Or.toStringTag : void 0;

        function Gh(t) {
            var e = Ah.call(t, pe),
                i = t[pe];
            try {
                t[pe] = void 0;
                var r = !0
            } catch {}
            var n = Ih.call(t);
            return r && (e ? t[pe] = i : delete t[pe]), n
        }
        Ir.exports = Gh
    });
    var Nr = S((F_, qr) => {
        var qh = Object.prototype,
            Nh = qh.toString;

        function zh(t) {
            return Nh.call(t)
        }
        qr.exports = zh
    });
    var Ht = S((V_, Vr) => {
        var zr = Oe(),
            Fh = Gr(),
            Vh = Nr(),
            Uh = "[object Null]",
            jh = "[object Undefined]",
            Fr = zr ? zr.toStringTag : void 0;

        function Kh(t) {
            return t == null ? t === void 0 ? jh : Uh : Fr && Fr in Object(t) ? Fh(t) : Vh(t)
        }
        Vr.exports = Kh
    });
    var Bt = S((U_, Ur) => {
        function Hh(t) {
            var e = typeof t;
            return t != null && (e == "object" || e == "function")
        }
        Ur.exports = Hh
    });
    var Ae = S((j_, jr) => {
        var Xh = Ht(),
            Yh = Bt(),
            Jh = "[object AsyncFunction]",
            $h = "[object Function]",
            Zh = "[object GeneratorFunction]",
            Wh = "[object Proxy]";

        function Qh(t) {
            if (!Yh(t)) return !1;
            var e = Xh(t);
            return e == $h || e == Zh || e == Jh || e == Wh
        }
        jr.exports = Qh
    });
    var Hr = S((K_, Kr) => {
        var tu = Gt(),
            eu = tu["__core-js_shared__"];
        Kr.exports = eu
    });
    var Jr = S((H_, Yr) => {
        var li = Hr(),
            Xr = function() {
                var t = /[^.]+$/.exec(li && li.keys && li.keys.IE_PROTO || "");
                return t ? "Symbol(src)_1." + t : ""
            }();

        function iu(t) {
            return !!Xr && Xr in t
        }
        Yr.exports = iu
    });
    var Zr = S((X_, $r) => {
        var ru = Function.prototype,
            nu = ru.toString;

        function su(t) {
            if (t != null) {
                try {
                    return nu.call(t)
                } catch {}
                try {
                    return t + ""
                } catch {}
            }
            return ""
        }
        $r.exports = su
    });
    var Qr = S((Y_, Wr) => {
        var au = Ae(),
            ou = Jr(),
            lu = Bt(),
            hu = Zr(),
            uu = /[\\^$.*+?()[\]{}|]/g,
            cu = /^\[object .+?Constructor\]$/,
            pu = Function.prototype,
            fu = Object.prototype,
            du = pu.toString,
            gu = fu.hasOwnProperty,
            mu = RegExp("^" + du.call(gu).replace(uu, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

        function _u(t) {
            if (!lu(t) || ou(t)) return !1;
            var e = au(t) ? mu : cu;
            return e.test(hu(t))
        }
        Wr.exports = _u
    });
    var en = S((J_, tn) => {
        function yu(t, e) {
            return t?.[e]
        }
        tn.exports = yu
    });
    var Ie = S(($_, rn) => {
        var Lu = Qr(),
            bu = en();

        function vu(t, e) {
            var i = bu(t, e);
            return Lu(i) ? i : void 0
        }
        rn.exports = vu
    });
    var hi = S((Z_, nn) => {
        var ku = Ie(),
            Mu = Gt(),
            xu = ku(Mu, "Map");
        nn.exports = xu
    });
    var fe = S((W_, sn) => {
        var wu = Ie(),
            Cu = wu(Object, "create");
        sn.exports = Cu
    });
    var ln = S((Q_, on) => {
        var an = fe();

        function Eu() {
            this.__data__ = an ? an(null) : {}, this.size = 0
        }
        on.exports = Eu
    });
    var un = S((ty, hn) => {
        function Pu(t) {
            var e = this.has(t) && delete this.__data__[t];
            return this.size -= e ? 1 : 0, e
        }
        hn.exports = Pu
    });
    var pn = S((ey, cn) => {
        var Su = fe(),
            Bu = "__lodash_hash_undefined__",
            Tu = Object.prototype,
            Ru = Tu.hasOwnProperty;

        function Du(t) {
            var e = this.__data__;
            if (Su) {
                var i = e[t];
                return i === Bu ? void 0 : i
            }
            return Ru.call(e, t) ? e[t] : void 0
        }
        cn.exports = Du
    });
    var dn = S((iy, fn) => {
        var Ou = fe(),
            Au = Object.prototype,
            Iu = Au.hasOwnProperty;

        function Gu(t) {
            var e = this.__data__;
            return Ou ? e[t] !== void 0 : Iu.call(e, t)
        }
        fn.exports = Gu
    });
    var mn = S((ry, gn) => {
        var qu = fe(),
            Nu = "__lodash_hash_undefined__";

        function zu(t, e) {
            var i = this.__data__;
            return this.size += this.has(t) ? 0 : 1, i[t] = qu && e === void 0 ? Nu : e, this
        }
        gn.exports = zu
    });
    var yn = S((ny, _n) => {
        var Fu = ln(),
            Vu = un(),
            Uu = pn(),
            ju = dn(),
            Ku = mn();

        function Xt(t) {
            var e = -1,
                i = t == null ? 0 : t.length;
            for (this.clear(); ++e < i;) {
                var r = t[e];
                this.set(r[0], r[1])
            }
        }
        Xt.prototype.clear = Fu;
        Xt.prototype.delete = Vu;
        Xt.prototype.get = Uu;
        Xt.prototype.has = ju;
        Xt.prototype.set = Ku;
        _n.exports = Xt
    });
    var vn = S((sy, bn) => {
        var Ln = yn(),
            Hu = ce(),
            Xu = hi();

        function Yu() {
            this.size = 0, this.__data__ = {
                hash: new Ln,
                map: new(Xu || Hu),
                string: new Ln
            }
        }
        bn.exports = Yu
    });
    var Mn = S((ay, kn) => {
        function Ju(t) {
            var e = typeof t;
            return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null
        }
        kn.exports = Ju
    });
    var de = S((oy, xn) => {
        var $u = Mn();

        function Zu(t, e) {
            var i = t.__data__;
            return $u(e) ? i[typeof e == "string" ? "string" : "hash"] : i.map
        }
        xn.exports = Zu
    });
    var Cn = S((ly, wn) => {
        var Wu = de();

        function Qu(t) {
            var e = Wu(this, t).delete(t);
            return this.size -= e ? 1 : 0, e
        }
        wn.exports = Qu
    });
    var Pn = S((hy, En) => {
        var tc = de();

        function ec(t) {
            return tc(this, t).get(t)
        }
        En.exports = ec
    });
    var Bn = S((uy, Sn) => {
        var ic = de();

        function rc(t) {
            return ic(this, t).has(t)
        }
        Sn.exports = rc
    });
    var Rn = S((cy, Tn) => {
        var nc = de();

        function sc(t, e) {
            var i = nc(this, t),
                r = i.size;
            return i.set(t, e), this.size += i.size == r ? 0 : 1, this
        }
        Tn.exports = sc
    });
    var ui = S((py, Dn) => {
        var ac = vn(),
            oc = Cn(),
            lc = Pn(),
            hc = Bn(),
            uc = Rn();

        function Yt(t) {
            var e = -1,
                i = t == null ? 0 : t.length;
            for (this.clear(); ++e < i;) {
                var r = t[e];
                this.set(r[0], r[1])
            }
        }
        Yt.prototype.clear = ac;
        Yt.prototype.delete = oc;
        Yt.prototype.get = lc;
        Yt.prototype.has = hc;
        Yt.prototype.set = uc;
        Dn.exports = Yt
    });
    var An = S((fy, On) => {
        var cc = ce(),
            pc = hi(),
            fc = ui(),
            dc = 200;

        function gc(t, e) {
            var i = this.__data__;
            if (i instanceof cc) {
                var r = i.__data__;
                if (!pc || r.length < dc - 1) return r.push([t, e]), this.size = ++i.size, this;
                i = this.__data__ = new fc(r)
            }
            return i.set(t, e), this.size = i.size, this
        }
        On.exports = gc
    });
    var Gn = S((dy, In) => {
        var mc = ce(),
            _c = xr(),
            yc = Cr(),
            Lc = Pr(),
            bc = Br(),
            vc = An();

        function Jt(t) {
            var e = this.__data__ = new mc(t);
            this.size = e.size
        }
        Jt.prototype.clear = _c;
        Jt.prototype.delete = yc;
        Jt.prototype.get = Lc;
        Jt.prototype.has = bc;
        Jt.prototype.set = vc;
        In.exports = Jt
    });
    var ci = S((gy, qn) => {
        var kc = Ie(),
            Mc = function() {
                try {
                    var t = kc(Object, "defineProperty");
                    return t({}, "", {}), t
                } catch {}
            }();
        qn.exports = Mc
    });
    var Ge = S((my, zn) => {
        var Nn = ci();

        function xc(t, e, i) {
            e == "__proto__" && Nn ? Nn(t, e, {
                configurable: !0,
                enumerable: !0,
                value: i,
                writable: !0
            }) : t[e] = i
        }
        zn.exports = xc
    });
    var pi = S((_y, Fn) => {
        var wc = Ge(),
            Cc = he();

        function Ec(t, e, i) {
            (i !== void 0 && !Cc(t[e], i) || i === void 0 && !(e in t)) && wc(t, e, i)
        }
        Fn.exports = Ec
    });
    var Un = S((yy, Vn) => {
        function Pc(t) {
            return function(e, i, r) {
                for (var n = -1, s = Object(e), a = r(e), o = a.length; o--;) {
                    var l = a[t ? o : ++n];
                    if (i(s[l], l, s) === !1) break
                }
                return e
            }
        }
        Vn.exports = Pc
    });
    var Kn = S((Ly, jn) => {
        var Sc = Un(),
            Bc = Sc();
        jn.exports = Bc
    });
    var $n = S((ge, $t) => {
        var Tc = Gt(),
            Jn = typeof ge == "object" && ge && !ge.nodeType && ge,
            Hn = Jn && typeof $t == "object" && $t && !$t.nodeType && $t,
            Rc = Hn && Hn.exports === Jn,
            Xn = Rc ? Tc.Buffer : void 0,
            Yn = Xn ? Xn.allocUnsafe : void 0;

        function Dc(t, e) {
            if (e) return t.slice();
            var i = t.length,
                r = Yn ? Yn(i) : new t.constructor(i);
            return t.copy(r), r
        }
        $t.exports = Dc
    });
    var Wn = S((by, Zn) => {
        var Oc = Gt(),
            Ac = Oc.Uint8Array;
        Zn.exports = Ac
    });
    var es = S((vy, ts) => {
        var Qn = Wn();

        function Ic(t) {
            var e = new t.constructor(t.byteLength);
            return new Qn(e).set(new Qn(t)), e
        }
        ts.exports = Ic
    });
    var rs = S((ky, is) => {
        var Gc = es();

        function qc(t, e) {
            var i = e ? Gc(t.buffer) : t.buffer;
            return new t.constructor(i, t.byteOffset, t.length)
        }
        is.exports = qc
    });
    var ss = S((My, ns) => {
        function Nc(t, e) {
            var i = -1,
                r = t.length;
            for (e || (e = Array(r)); ++i < r;) e[i] = t[i];
            return e
        }
        ns.exports = Nc
    });
    var ls = S((xy, os) => {
        var zc = Bt(),
            as = Object.create,
            Fc = function() {
                function t() {}
                return function(e) {
                    if (!zc(e)) return {};
                    if (as) return as(e);
                    t.prototype = e;
                    var i = new t;
                    return t.prototype = void 0, i
                }
            }();
        os.exports = Fc
    });
    var us = S((wy, hs) => {
        function Vc(t, e) {
            return function(i) {
                return t(e(i))
            }
        }
        hs.exports = Vc
    });
    var fi = S((Cy, cs) => {
        var Uc = us(),
            jc = Uc(Object.getPrototypeOf, Object);
        cs.exports = jc
    });
    var di = S((Ey, ps) => {
        var Kc = Object.prototype;

        function Hc(t) {
            var e = t && t.constructor,
                i = typeof e == "function" && e.prototype || Kc;
            return t === i
        }
        ps.exports = Hc
    });
    var ds = S((Py, fs) => {
        var Xc = ls(),
            Yc = fi(),
            Jc = di();

        function $c(t) {
            return typeof t.constructor == "function" && !Jc(t) ? Xc(Yc(t)) : {}
        }
        fs.exports = $c
    });
    var qt = S((Sy, gs) => {
        function Zc(t) {
            return t != null && typeof t == "object"
        }
        gs.exports = Zc
    });
    var _s = S((By, ms) => {
        var Wc = Ht(),
            Qc = qt(),
            tp = "[object Arguments]";

        function ep(t) {
            return Qc(t) && Wc(t) == tp
        }
        ms.exports = ep
    });
    var gi = S((Ty, bs) => {
        var ys = _s(),
            ip = qt(),
            Ls = Object.prototype,
            rp = Ls.hasOwnProperty,
            np = Ls.propertyIsEnumerable,
            sp = ys(function() {
                return arguments
            }()) ? ys : function(t) {
                return ip(t) && rp.call(t, "callee") && !np.call(t, "callee")
            };
        bs.exports = sp
    });
    var Zt = S((Ry, vs) => {
        var ap = Array.isArray;
        vs.exports = ap
    });
    var mi = S((Dy, ks) => {
        var op = 9007199254740991;

        function lp(t) {
            return typeof t == "number" && t > -1 && t % 1 == 0 && t <= op
        }
        ks.exports = lp
    });
    var qe = S((Oy, Ms) => {
        var hp = Ae(),
            up = mi();

        function cp(t) {
            return t != null && up(t.length) && !hp(t)
        }
        Ms.exports = cp
    });
    var ws = S((Ay, xs) => {
        var pp = qe(),
            fp = qt();

        function dp(t) {
            return fp(t) && pp(t)
        }
        xs.exports = dp
    });
    var Es = S((Iy, Cs) => {
        function gp() {
            return !1
        }
        Cs.exports = gp
    });
    var _i = S((me, Wt) => {
        var mp = Gt(),
            _p = Es(),
            Bs = typeof me == "object" && me && !me.nodeType && me,
            Ps = Bs && typeof Wt == "object" && Wt && !Wt.nodeType && Wt,
            yp = Ps && Ps.exports === Bs,
            Ss = yp ? mp.Buffer : void 0,
            Lp = Ss ? Ss.isBuffer : void 0,
            bp = Lp || _p;
        Wt.exports = bp
    });
    var Ds = S((Gy, Rs) => {
        var vp = Ht(),
            kp = fi(),
            Mp = qt(),
            xp = "[object Object]",
            wp = Function.prototype,
            Cp = Object.prototype,
            Ts = wp.toString,
            Ep = Cp.hasOwnProperty,
            Pp = Ts.call(Object);

        function Sp(t) {
            if (!Mp(t) || vp(t) != xp) return !1;
            var e = kp(t);
            if (e === null) return !0;
            var i = Ep.call(e, "constructor") && e.constructor;
            return typeof i == "function" && i instanceof i && Ts.call(i) == Pp
        }
        Rs.exports = Sp
    });
    var As = S((qy, Os) => {
        var Bp = Ht(),
            Tp = mi(),
            Rp = qt(),
            Dp = "[object Arguments]",
            Op = "[object Array]",
            Ap = "[object Boolean]",
            Ip = "[object Date]",
            Gp = "[object Error]",
            qp = "[object Function]",
            Np = "[object Map]",
            zp = "[object Number]",
            Fp = "[object Object]",
            Vp = "[object RegExp]",
            Up = "[object Set]",
            jp = "[object String]",
            Kp = "[object WeakMap]",
            Hp = "[object ArrayBuffer]",
            Xp = "[object DataView]",
            Yp = "[object Float32Array]",
            Jp = "[object Float64Array]",
            $p = "[object Int8Array]",
            Zp = "[object Int16Array]",
            Wp = "[object Int32Array]",
            Qp = "[object Uint8Array]",
            tf = "[object Uint8ClampedArray]",
            ef = "[object Uint16Array]",
            rf = "[object Uint32Array]",
            Y = {};
        Y[Yp] = Y[Jp] = Y[$p] = Y[Zp] = Y[Wp] = Y[Qp] = Y[tf] = Y[ef] = Y[rf] = !0;
        Y[Dp] = Y[Op] = Y[Hp] = Y[Ap] = Y[Xp] = Y[Ip] = Y[Gp] = Y[qp] = Y[Np] = Y[zp] = Y[Fp] = Y[Vp] = Y[Up] = Y[jp] = Y[Kp] = !1;

        function nf(t) {
            return Rp(t) && Tp(t.length) && !!Y[Bp(t)]
        }
        Os.exports = nf
    });
    var Gs = S((Ny, Is) => {
        function sf(t) {
            return function(e) {
                return t(e)
            }
        }
        Is.exports = sf
    });
    var Ns = S((_e, Qt) => {
        var af = oi(),
            qs = typeof _e == "object" && _e && !_e.nodeType && _e,
            ye = qs && typeof Qt == "object" && Qt && !Qt.nodeType && Qt,
            of = ye && ye.exports === qs,
            yi = of && af.process,
            lf = function() {
                try {
                    var t = ye && ye.require && ye.require("util").types;
                    return t || yi && yi.binding && yi.binding("util")
                } catch {}
            }();
        Qt.exports = lf
    });
    var Li = S((zy, Vs) => {
        var hf = As(),
            uf = Gs(),
            zs = Ns(),
            Fs = zs && zs.isTypedArray,
            cf = Fs ? uf(Fs) : hf;
        Vs.exports = cf
    });
    var bi = S((Fy, Us) => {
        function pf(t, e) {
            if (!(e === "constructor" && typeof t[e] == "function") && e != "__proto__") return t[e]
        }
        Us.exports = pf
    });
    var Ks = S((Vy, js) => {
        var ff = Ge(),
            df = he(),
            gf = Object.prototype,
            mf = gf.hasOwnProperty;

        function _f(t, e, i) {
            var r = t[e];
            (!(mf.call(t, e) && df(r, i)) || i === void 0 && !(e in t)) && ff(t, e, i)
        }
        js.exports = _f
    });
    var Xs = S((Uy, Hs) => {
        var yf = Ks(),
            Lf = Ge();

        function bf(t, e, i, r) {
            var n = !i;
            i || (i = {});
            for (var s = -1, a = e.length; ++s < a;) {
                var o = e[s],
                    l = r ? r(i[o], t[o], o, i, t) : void 0;
                l === void 0 && (l = t[o]), n ? Lf(i, o, l) : yf(i, o, l)
            }
            return i
        }
        Hs.exports = bf
    });
    var Js = S((jy, Ys) => {
        function vf(t, e) {
            for (var i = -1, r = Array(t); ++i < t;) r[i] = e(i);
            return r
        }
        Ys.exports = vf
    });
    var vi = S((Ky, $s) => {
        var kf = 9007199254740991,
            Mf = /^(?:0|[1-9]\d*)$/;

        function xf(t, e) {
            var i = typeof t;
            return e = e ?? kf, !!e && (i == "number" || i != "symbol" && Mf.test(t)) && t > -1 && t % 1 == 0 && t < e
        }
        $s.exports = xf
    });
    var Ws = S((Hy, Zs) => {
        var wf = Js(),
            Cf = gi(),
            Ef = Zt(),
            Pf = _i(),
            Sf = vi(),
            Bf = Li(),
            Tf = Object.prototype,
            Rf = Tf.hasOwnProperty;

        function Df(t, e) {
            var i = Ef(t),
                r = !i && Cf(t),
                n = !i && !r && Pf(t),
                s = !i && !r && !n && Bf(t),
                a = i || r || n || s,
                o = a ? wf(t.length, String) : [],
                l = o.length;
            for (var u in t)(e || Rf.call(t, u)) && !(a && (u == "length" || n && (u == "offset" || u == "parent") || s && (u == "buffer" || u == "byteLength" || u == "byteOffset") || Sf(u, l))) && o.push(u);
            return o
        }
        Zs.exports = Df
    });
    var ta = S((Xy, Qs) => {
        function Of(t) {
            var e = [];
            if (t != null)
                for (var i in Object(t)) e.push(i);
            return e
        }
        Qs.exports = Of
    });
    var ia = S((Yy, ea) => {
        var Af = Bt(),
            If = di(),
            Gf = ta(),
            qf = Object.prototype,
            Nf = qf.hasOwnProperty;

        function zf(t) {
            if (!Af(t)) return Gf(t);
            var e = If(t),
                i = [];
            for (var r in t) r == "constructor" && (e || !Nf.call(t, r)) || i.push(r);
            return i
        }
        ea.exports = zf
    });
    var ki = S((Jy, ra) => {
        var Ff = Ws(),
            Vf = ia(),
            Uf = qe();

        function jf(t) {
            return Uf(t) ? Ff(t, !0) : Vf(t)
        }
        ra.exports = jf
    });
    var sa = S(($y, na) => {
        var Kf = Xs(),
            Hf = ki();

        function Xf(t) {
            return Kf(t, Hf(t))
        }
        na.exports = Xf
    });
    var ca = S((Zy, ua) => {
        var aa = pi(),
            Yf = $n(),
            Jf = rs(),
            $f = ss(),
            Zf = ds(),
            oa = gi(),
            la = Zt(),
            Wf = ws(),
            Qf = _i(),
            td = Ae(),
            ed = Bt(),
            id = Ds(),
            rd = Li(),
            ha = bi(),
            nd = sa();

        function sd(t, e, i, r, n, s, a) {
            var o = ha(t, i),
                l = ha(e, i),
                u = a.get(l);
            if (u) {
                aa(t, i, u);
                return
            }
            var f = s ? s(o, l, i + "", t, e, a) : void 0,
                d = f === void 0;
            if (d) {
                var P = la(l),
                    E = !P && Qf(l),
                    T = !P && !E && rd(l);
                f = l, P || E || T ? la(o) ? f = o : Wf(o) ? f = $f(o) : E ? (d = !1, f = Yf(l, !0)) : T ? (d = !1, f = Jf(l, !0)) : f = [] : id(l) || oa(l) ? (f = o, oa(o) ? f = nd(o) : (!ed(o) || td(o)) && (f = Zf(l))) : d = !1
            }
            d && (a.set(l, f), n(f, l, r, s, a), a.delete(l)), aa(t, i, f)
        }
        ua.exports = sd
    });
    var da = S((Wy, fa) => {
        var ad = Gn(),
            od = pi(),
            ld = Kn(),
            hd = ca(),
            ud = Bt(),
            cd = ki(),
            pd = bi();

        function pa(t, e, i, r, n) {
            t !== e && ld(e, function(s, a) {
                if (n || (n = new ad), ud(s)) hd(t, e, a, i, pa, r, n);
                else {
                    var o = r ? r(pd(t, a), s, a + "", t, e, n) : void 0;
                    o === void 0 && (o = s), od(t, a, o)
                }
            }, cd)
        }
        fa.exports = pa
    });
    var Mi = S((Qy, ga) => {
        function fd(t) {
            return t
        }
        ga.exports = fd
    });
    var _a = S((tL, ma) => {
        function dd(t, e, i) {
            switch (i.length) {
                case 0:
                    return t.call(e);
                case 1:
                    return t.call(e, i[0]);
                case 2:
                    return t.call(e, i[0], i[1]);
                case 3:
                    return t.call(e, i[0], i[1], i[2])
            }
            return t.apply(e, i)
        }
        ma.exports = dd
    });
    var ba = S((eL, La) => {
        var gd = _a(),
            ya = Math.max;

        function md(t, e, i) {
            return e = ya(e === void 0 ? t.length - 1 : e, 0),
                function() {
                    for (var r = arguments, n = -1, s = ya(r.length - e, 0), a = Array(s); ++n < s;) a[n] = r[e + n];
                    n = -1;
                    for (var o = Array(e + 1); ++n < e;) o[n] = r[n];
                    return o[e] = i(a), gd(t, this, o)
                }
        }
        La.exports = md
    });
    var ka = S((iL, va) => {
        function _d(t) {
            return function() {
                return t
            }
        }
        va.exports = _d
    });
    var wa = S((rL, xa) => {
        var yd = ka(),
            Ma = ci(),
            Ld = Mi(),
            bd = Ma ? function(t, e) {
                return Ma(t, "toString", {
                    configurable: !0,
                    enumerable: !1,
                    value: yd(e),
                    writable: !0
                })
            } : Ld;
        xa.exports = bd
    });
    var Ea = S((nL, Ca) => {
        var vd = 800,
            kd = 16,
            Md = Date.now;

        function xd(t) {
            var e = 0,
                i = 0;
            return function() {
                var r = Md(),
                    n = kd - (r - i);
                if (i = r, n > 0) {
                    if (++e >= vd) return arguments[0]
                } else e = 0;
                return t.apply(void 0, arguments)
            }
        }
        Ca.exports = xd
    });
    var Sa = S((sL, Pa) => {
        var wd = wa(),
            Cd = Ea(),
            Ed = Cd(wd);
        Pa.exports = Ed
    });
    var Ta = S((aL, Ba) => {
        var Pd = Mi(),
            Sd = ba(),
            Bd = Sa();

        function Td(t, e) {
            return Bd(Sd(t, e, Pd), t + "")
        }
        Ba.exports = Td
    });
    var Da = S((oL, Ra) => {
        var Rd = he(),
            Dd = qe(),
            Od = vi(),
            Ad = Bt();

        function Id(t, e, i) {
            if (!Ad(i)) return !1;
            var r = typeof e;
            return (r == "number" ? Dd(i) && Od(e, i.length) : r == "string" && e in i) ? Rd(i[e], t) : !1
        }
        Ra.exports = Id
    });
    var Aa = S((lL, Oa) => {
        var Gd = Ta(),
            qd = Da();

        function Nd(t) {
            return Gd(function(e, i) {
                var r = -1,
                    n = i.length,
                    s = n > 1 ? i[n - 1] : void 0,
                    a = n > 2 ? i[2] : void 0;
                for (s = t.length > 3 && typeof s == "function" ? (n--, s) : void 0, a && qd(i[0], i[1], a) && (s = n < 3 ? void 0 : s, n = 1), e = Object(e); ++r < n;) {
                    var o = i[r];
                    o && t(e, o, r, s)
                }
                return e
            })
        }
        Oa.exports = Nd
    });
    var Ne = S((hL, Ia) => {
        var zd = da(),
            Fd = Aa(),
            Vd = Fd(function(t, e, i) {
                zd(t, e, i)
            });
        Ia.exports = Vd
    });
    var ze = S((_b, _o) => {
        var kg = Ht(),
            Mg = qt(),
            xg = "[object Symbol]";

        function wg(t) {
            return typeof t == "symbol" || Mg(t) && kg(t) == xg
        }
        _o.exports = wg
    });
    var Lo = S((yb, yo) => {
        var Cg = Zt(),
            Eg = ze(),
            Pg = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
            Sg = /^\w*$/;

        function Bg(t, e) {
            if (Cg(t)) return !1;
            var i = typeof t;
            return i == "number" || i == "symbol" || i == "boolean" || t == null || Eg(t) ? !0 : Sg.test(t) || !Pg.test(t) || e != null && t in Object(e)
        }
        yo.exports = Bg
    });
    var ko = S((Lb, vo) => {
        var bo = ui(),
            Tg = "Expected a function";

        function xi(t, e) {
            if (typeof t != "function" || e != null && typeof e != "function") throw new TypeError(Tg);
            var i = function() {
                var r = arguments,
                    n = e ? e.apply(this, r) : r[0],
                    s = i.cache;
                if (s.has(n)) return s.get(n);
                var a = t.apply(this, r);
                return i.cache = s.set(n, a) || s, a
            };
            return i.cache = new(xi.Cache || bo), i
        }
        xi.Cache = bo;
        vo.exports = xi
    });
    var xo = S((bb, Mo) => {
        var Rg = ko(),
            Dg = 500;

        function Og(t) {
            var e = Rg(t, function(r) {
                    return i.size === Dg && i.clear(), r
                }),
                i = e.cache;
            return e
        }
        Mo.exports = Og
    });
    var Co = S((vb, wo) => {
        var Ag = xo(),
            Ig = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
            Gg = /\\(\\)?/g,
            qg = Ag(function(t) {
                var e = [];
                return t.charCodeAt(0) === 46 && e.push(""), t.replace(Ig, function(i, r, n, s) {
                    e.push(n ? s.replace(Gg, "$1") : r || i)
                }), e
            });
        wo.exports = qg
    });
    var Po = S((kb, Eo) => {
        function Ng(t, e) {
            for (var i = -1, r = t == null ? 0 : t.length, n = Array(r); ++i < r;) n[i] = e(t[i], i, t);
            return n
        }
        Eo.exports = Ng
    });
    var Oo = S((Mb, Do) => {
        var So = Oe(),
            zg = Po(),
            Fg = Zt(),
            Vg = ze(),
            Ug = 1 / 0,
            Bo = So ? So.prototype : void 0,
            To = Bo ? Bo.toString : void 0;

        function Ro(t) {
            if (typeof t == "string") return t;
            if (Fg(t)) return zg(t, Ro) + "";
            if (Vg(t)) return To ? To.call(t) : "";
            var e = t + "";
            return e == "0" && 1 / t == -Ug ? "-0" : e
        }
        Do.exports = Ro
    });
    var Io = S((xb, Ao) => {
        var jg = Oo();

        function Kg(t) {
            return t == null ? "" : jg(t)
        }
        Ao.exports = Kg
    });
    var qo = S((wb, Go) => {
        var Hg = Zt(),
            Xg = Lo(),
            Yg = Co(),
            Jg = Io();

        function $g(t, e) {
            return Hg(t) ? t : Xg(t, e) ? [t] : Yg(Jg(t))
        }
        Go.exports = $g
    });
    var zo = S((Cb, No) => {
        var Zg = ze(),
            Wg = 1 / 0;

        function Qg(t) {
            if (typeof t == "string" || Zg(t)) return t;
            var e = t + "";
            return e == "0" && 1 / t == -Wg ? "-0" : e
        }
        No.exports = Qg
    });
    var Vo = S((Eb, Fo) => {
        var tm = qo(),
            em = zo();

        function im(t, e) {
            e = tm(e, t);
            for (var i = 0, r = e.length; t != null && i < r;) t = t[em(e[i++])];
            return i && i == r ? t : void 0
        }
        Fo.exports = im
    });
    var Le = S((Pb, Uo) => {
        var rm = Vo();

        function nm(t, e, i) {
            var r = t == null ? void 0 : rm(t, e);
            return r === void 0 ? i : r
        }
        Uo.exports = nm
    });
    var Qo = S((Ti, Ri) => {
        (function(t, e) {
            typeof Ti == "object" && typeof Ri < "u" ? Ri.exports = e() : typeof define == "function" && define.amd ? define(e) : (t = t || self).RBush = e()
        })(Ti, function() {
            "use strict";

            function t(_, x, b, R, D) {
                (function O(A, q, h, c, p) {
                    for (; c > h;) {
                        if (c - h > 600) {
                            var y = c - h + 1,
                                g = q - h + 1,
                                k = Math.log(y),
                                C = .5 * Math.exp(2 * k / 3),
                                m = .5 * Math.sqrt(k * C * (y - C) / y) * (g - y / 2 < 0 ? -1 : 1),
                                v = Math.max(h, Math.floor(q - g * C / y + m)),
                                w = Math.min(c, Math.floor(q + (y - g) * C / y + m));
                            O(A, q, v, w, p)
                        }
                        var M = A[q],
                            B = h,
                            I = c;
                        for (e(A, h, q), p(A[c], M) > 0 && e(A, h, c); B < I;) {
                            for (e(A, B, I), B++, I--; p(A[B], M) < 0;) B++;
                            for (; p(A[I], M) > 0;) I--
                        }
                        p(A[h], M) === 0 ? e(A, h, I) : e(A, ++I, c), I <= q && (h = I + 1), q <= I && (c = I - 1)
                    }
                })(_, x, b || 0, R || _.length - 1, D || i)
            }

            function e(_, x, b) {
                var R = _[x];
                _[x] = _[b], _[b] = R
            }

            function i(_, x) {
                return _ < x ? -1 : _ > x ? 1 : 0
            }
            var r = function(_) {
                _ === void 0 && (_ = 9), this._maxEntries = Math.max(4, _), this._minEntries = Math.max(2, Math.ceil(.4 * this._maxEntries)), this.clear()
            };

            function n(_, x, b) {
                if (!b) return x.indexOf(_);
                for (var R = 0; R < x.length; R++)
                    if (b(_, x[R])) return R;
                return -1
            }

            function s(_, x) {
                a(_, 0, _.children.length, x, _)
            }

            function a(_, x, b, R, D) {
                D || (D = T(null)), D.minX = 1 / 0, D.minY = 1 / 0, D.maxX = -1 / 0, D.maxY = -1 / 0;
                for (var O = x; O < b; O++) {
                    var A = _.children[O];
                    o(D, _.leaf ? R(A) : A)
                }
                return D
            }

            function o(_, x) {
                return _.minX = Math.min(_.minX, x.minX), _.minY = Math.min(_.minY, x.minY), _.maxX = Math.max(_.maxX, x.maxX), _.maxY = Math.max(_.maxY, x.maxY), _
            }

            function l(_, x) {
                return _.minX - x.minX
            }

            function u(_, x) {
                return _.minY - x.minY
            }

            function f(_) {
                return (_.maxX - _.minX) * (_.maxY - _.minY)
            }

            function d(_) {
                return _.maxX - _.minX + (_.maxY - _.minY)
            }

            function P(_, x) {
                return _.minX <= x.minX && _.minY <= x.minY && x.maxX <= _.maxX && x.maxY <= _.maxY
            }

            function E(_, x) {
                return x.minX <= _.maxX && x.minY <= _.maxY && x.maxX >= _.minX && x.maxY >= _.minY
            }

            function T(_) {
                return {
                    children: _,
                    height: 1,
                    leaf: !0,
                    minX: 1 / 0,
                    minY: 1 / 0,
                    maxX: -1 / 0,
                    maxY: -1 / 0
                }
            }

            function G(_, x, b, R, D) {
                for (var O = [x, b]; O.length;)
                    if (!((b = O.pop()) - (x = O.pop()) <= R)) {
                        var A = x + Math.ceil((b - x) / R / 2) * R;
                        t(_, A, x, b, D), O.push(x, A, A, b)
                    }
            }
            return r.prototype.all = function() {
                return this._all(this.data, [])
            }, r.prototype.search = function(_) {
                var x = this.data,
                    b = [];
                if (!E(_, x)) return b;
                for (var R = this.toBBox, D = []; x;) {
                    for (var O = 0; O < x.children.length; O++) {
                        var A = x.children[O],
                            q = x.leaf ? R(A) : A;
                        E(_, q) && (x.leaf ? b.push(A) : P(_, q) ? this._all(A, b) : D.push(A))
                    }
                    x = D.pop()
                }
                return b
            }, r.prototype.collides = function(_) {
                var x = this.data;
                if (!E(_, x)) return !1;
                for (var b = []; x;) {
                    for (var R = 0; R < x.children.length; R++) {
                        var D = x.children[R],
                            O = x.leaf ? this.toBBox(D) : D;
                        if (E(_, O)) {
                            if (x.leaf || P(_, O)) return !0;
                            b.push(D)
                        }
                    }
                    x = b.pop()
                }
                return !1
            }, r.prototype.load = function(_) {
                if (!_ || !_.length) return this;
                if (_.length < this._minEntries) {
                    for (var x = 0; x < _.length; x++) this.insert(_[x]);
                    return this
                }
                var b = this._build(_.slice(), 0, _.length - 1, 0);
                if (this.data.children.length)
                    if (this.data.height === b.height) this._splitRoot(this.data, b);
                    else {
                        if (this.data.height < b.height) {
                            var R = this.data;
                            this.data = b, b = R
                        }
                        this._insert(b, this.data.height - b.height - 1, !0)
                    }
                else this.data = b;
                return this
            }, r.prototype.insert = function(_) {
                return _ && this._insert(_, this.data.height - 1), this
            }, r.prototype.clear = function() {
                return this.data = T([]), this
            }, r.prototype.remove = function(_, x) {
                if (!_) return this;
                for (var b, R, D, O = this.data, A = this.toBBox(_), q = [], h = []; O || q.length;) {
                    if (O || (O = q.pop(), R = q[q.length - 1], b = h.pop(), D = !0), O.leaf) {
                        var c = n(_, O.children, x);
                        if (c !== -1) return O.children.splice(c, 1), q.push(O), this._condense(q), this
                    }
                    D || O.leaf || !P(O, A) ? R ? (b++, O = R.children[b], D = !1) : O = null : (q.push(O), h.push(b), b = 0, R = O, O = O.children[0])
                }
                return this
            }, r.prototype.toBBox = function(_) {
                return _
            }, r.prototype.compareMinX = function(_, x) {
                return _.minX - x.minX
            }, r.prototype.compareMinY = function(_, x) {
                return _.minY - x.minY
            }, r.prototype.toJSON = function() {
                return this.data
            }, r.prototype.fromJSON = function(_) {
                return this.data = _, this
            }, r.prototype._all = function(_, x) {
                for (var b = []; _;) _.leaf ? x.push.apply(x, _.children) : b.push.apply(b, _.children), _ = b.pop();
                return x
            }, r.prototype._build = function(_, x, b, R) {
                var D, O = b - x + 1,
                    A = this._maxEntries;
                if (O <= A) return s(D = T(_.slice(x, b + 1)), this.toBBox), D;
                R || (R = Math.ceil(Math.log(O) / Math.log(A)), A = Math.ceil(O / Math.pow(A, R - 1))), (D = T([])).leaf = !1, D.height = R;
                var q = Math.ceil(O / A),
                    h = q * Math.ceil(Math.sqrt(A));
                G(_, x, b, h, this.compareMinX);
                for (var c = x; c <= b; c += h) {
                    var p = Math.min(c + h - 1, b);
                    G(_, c, p, q, this.compareMinY);
                    for (var y = c; y <= p; y += q) {
                        var g = Math.min(y + q - 1, p);
                        D.children.push(this._build(_, y, g, R - 1))
                    }
                }
                return s(D, this.toBBox), D
            }, r.prototype._chooseSubtree = function(_, x, b, R) {
                for (; R.push(x), !x.leaf && R.length - 1 !== b;) {
                    for (var D = 1 / 0, O = 1 / 0, A = void 0, q = 0; q < x.children.length; q++) {
                        var h = x.children[q],
                            c = f(h),
                            p = (y = _, g = h, (Math.max(g.maxX, y.maxX) - Math.min(g.minX, y.minX)) * (Math.max(g.maxY, y.maxY) - Math.min(g.minY, y.minY)) - c);
                        p < O ? (O = p, D = c < D ? c : D, A = h) : p === O && c < D && (D = c, A = h)
                    }
                    x = A || x.children[0]
                }
                var y, g;
                return x
            }, r.prototype._insert = function(_, x, b) {
                var R = b ? _ : this.toBBox(_),
                    D = [],
                    O = this._chooseSubtree(R, this.data, x, D);
                for (O.children.push(_), o(O, R); x >= 0 && D[x].children.length > this._maxEntries;) this._split(D, x), x--;
                this._adjustParentBBoxes(R, D, x)
            }, r.prototype._split = function(_, x) {
                var b = _[x],
                    R = b.children.length,
                    D = this._minEntries;
                this._chooseSplitAxis(b, D, R);
                var O = this._chooseSplitIndex(b, D, R),
                    A = T(b.children.splice(O, b.children.length - O));
                A.height = b.height, A.leaf = b.leaf, s(b, this.toBBox), s(A, this.toBBox), x ? _[x - 1].children.push(A) : this._splitRoot(b, A)
            }, r.prototype._splitRoot = function(_, x) {
                this.data = T([_, x]), this.data.height = _.height + 1, this.data.leaf = !1, s(this.data, this.toBBox)
            }, r.prototype._chooseSplitIndex = function(_, x, b) {
                for (var R, D, O, A, q, h, c, p = 1 / 0, y = 1 / 0, g = x; g <= b - x; g++) {
                    var k = a(_, 0, g, this.toBBox),
                        C = a(_, g, b, this.toBBox),
                        m = (D = k, O = C, A = void 0, q = void 0, h = void 0, c = void 0, A = Math.max(D.minX, O.minX), q = Math.max(D.minY, O.minY), h = Math.min(D.maxX, O.maxX), c = Math.min(D.maxY, O.maxY), Math.max(0, h - A) * Math.max(0, c - q)),
                        v = f(k) + f(C);
                    m < p ? (p = m, R = g, y = v < y ? v : y) : m === p && v < y && (y = v, R = g)
                }
                return R || b - x
            }, r.prototype._chooseSplitAxis = function(_, x, b) {
                var R = _.leaf ? this.compareMinX : l,
                    D = _.leaf ? this.compareMinY : u;
                this._allDistMargin(_, x, b, R) < this._allDistMargin(_, x, b, D) && _.children.sort(R)
            }, r.prototype._allDistMargin = function(_, x, b, R) {
                _.children.sort(R);
                for (var D = this.toBBox, O = a(_, 0, x, D), A = a(_, b - x, b, D), q = d(O) + d(A), h = x; h < b - x; h++) {
                    var c = _.children[h];
                    o(O, _.leaf ? D(c) : c), q += d(O)
                }
                for (var p = b - x - 1; p >= x; p--) {
                    var y = _.children[p];
                    o(A, _.leaf ? D(y) : y), q += d(A)
                }
                return q
            }, r.prototype._adjustParentBBoxes = function(_, x, b) {
                for (var R = b; R >= 0; R--) o(x[R], _)
            }, r.prototype._condense = function(_) {
                for (var x = _.length - 1, b = void 0; x >= 0; x--) _[x].children.length === 0 ? x > 0 ? (b = _[x - 1].children).splice(b.indexOf(_[x]), 1) : this.clear() : s(_[x], this.toBBox)
            }, r
        })
    });
    var Gi = S(z => {
        "use strict";
        Object.defineProperty(z, "__esModule", {
            value: !0
        });
        z.earthRadius = 63710088e-1;
        z.factors = {
            centimeters: z.earthRadius * 100,
            centimetres: z.earthRadius * 100,
            degrees: z.earthRadius / 111325,
            feet: z.earthRadius * 3.28084,
            inches: z.earthRadius * 39.37,
            kilometers: z.earthRadius / 1e3,
            kilometres: z.earthRadius / 1e3,
            meters: z.earthRadius,
            metres: z.earthRadius,
            miles: z.earthRadius / 1609.344,
            millimeters: z.earthRadius * 1e3,
            millimetres: z.earthRadius * 1e3,
            nauticalmiles: z.earthRadius / 1852,
            radians: 1,
            yards: z.earthRadius * 1.0936
        };
        z.unitsFactors = {
            centimeters: 100,
            centimetres: 100,
            degrees: 1 / 111325,
            feet: 3.28084,
            inches: 39.37,
            kilometers: 1 / 1e3,
            kilometres: 1 / 1e3,
            meters: 1,
            metres: 1,
            miles: 1 / 1609.344,
            millimeters: 1e3,
            millimetres: 1e3,
            nauticalmiles: 1 / 1852,
            radians: 1 / z.earthRadius,
            yards: 1.0936133
        };
        z.areaFactors = {
            acres: 247105e-9,
            centimeters: 1e4,
            centimetres: 1e4,
            feet: 10.763910417,
            hectares: 1e-4,
            inches: 1550.003100006,
            kilometers: 1e-6,
            kilometres: 1e-6,
            meters: 1,
            metres: 1,
            miles: 386e-9,
            millimeters: 1e6,
            millimetres: 1e6,
            yards: 1.195990046
        };

        function Ot(t, e, i) {
            i === void 0 && (i = {});
            var r = {
                type: "Feature"
            };
            return (i.id === 0 || i.id) && (r.id = i.id), i.bbox && (r.bbox = i.bbox), r.properties = e || {}, r.geometry = t, r
        }
        z.feature = Ot;

        function ym(t, e, i) {
            switch (i === void 0 && (i = {}), t) {
                case "Point":
                    return Di(e).geometry;
                case "LineString":
                    return Ai(e).geometry;
                case "Polygon":
                    return Oi(e).geometry;
                case "MultiPoint":
                    return el(e).geometry;
                case "MultiLineString":
                    return tl(e).geometry;
                case "MultiPolygon":
                    return il(e).geometry;
                default:
                    throw new Error(t + " is invalid")
            }
        }
        z.geometry = ym;

        function Di(t, e, i) {
            if (i === void 0 && (i = {}), !t) throw new Error("coordinates is required");
            if (!Array.isArray(t)) throw new Error("coordinates must be an Array");
            if (t.length < 2) throw new Error("coordinates must be at least 2 numbers long");
            if (!Ve(t[0]) || !Ve(t[1])) throw new Error("coordinates must contain numbers");
            var r = {
                type: "Point",
                coordinates: t
            };
            return Ot(r, e, i)
        }
        z.point = Di;

        function Lm(t, e, i) {
            return i === void 0 && (i = {}), Ue(t.map(function(r) {
                return Di(r, e)
            }), i)
        }
        z.points = Lm;

        function Oi(t, e, i) {
            i === void 0 && (i = {});
            for (var r = 0, n = t; r < n.length; r++) {
                var s = n[r];
                if (s.length < 4) throw new Error("Each LinearRing of a Polygon must have 4 or more Positions.");
                for (var a = 0; a < s[s.length - 1].length; a++)
                    if (s[s.length - 1][a] !== s[0][a]) throw new Error("First and last Position are not equivalent.")
            }
            var o = {
                type: "Polygon",
                coordinates: t
            };
            return Ot(o, e, i)
        }
        z.polygon = Oi;

        function bm(t, e, i) {
            return i === void 0 && (i = {}), Ue(t.map(function(r) {
                return Oi(r, e)
            }), i)
        }
        z.polygons = bm;

        function Ai(t, e, i) {
            if (i === void 0 && (i = {}), t.length < 2) throw new Error("coordinates must be an array of two or more positions");
            var r = {
                type: "LineString",
                coordinates: t
            };
            return Ot(r, e, i)
        }
        z.lineString = Ai;

        function vm(t, e, i) {
            return i === void 0 && (i = {}), Ue(t.map(function(r) {
                return Ai(r, e)
            }), i)
        }
        z.lineStrings = vm;

        function Ue(t, e) {
            e === void 0 && (e = {});
            var i = {
                type: "FeatureCollection"
            };
            return e.id && (i.id = e.id), e.bbox && (i.bbox = e.bbox), i.features = t, i
        }
        z.featureCollection = Ue;

        function tl(t, e, i) {
            i === void 0 && (i = {});
            var r = {
                type: "MultiLineString",
                coordinates: t
            };
            return Ot(r, e, i)
        }
        z.multiLineString = tl;

        function el(t, e, i) {
            i === void 0 && (i = {});
            var r = {
                type: "MultiPoint",
                coordinates: t
            };
            return Ot(r, e, i)
        }
        z.multiPoint = el;

        function il(t, e, i) {
            i === void 0 && (i = {});
            var r = {
                type: "MultiPolygon",
                coordinates: t
            };
            return Ot(r, e, i)
        }
        z.multiPolygon = il;

        function km(t, e, i) {
            i === void 0 && (i = {});
            var r = {
                type: "GeometryCollection",
                geometries: t
            };
            return Ot(r, e, i)
        }
        z.geometryCollection = km;

        function Mm(t, e) {
            if (e === void 0 && (e = 0), e && !(e >= 0)) throw new Error("precision must be a positive number");
            var i = Math.pow(10, e || 0);
            return Math.round(t * i) / i
        }
        z.round = Mm;

        function rl(t, e) {
            e === void 0 && (e = "kilometers");
            var i = z.factors[e];
            if (!i) throw new Error(e + " units is invalid");
            return t * i
        }
        z.radiansToLength = rl;

        function Ii(t, e) {
            e === void 0 && (e = "kilometers");
            var i = z.factors[e];
            if (!i) throw new Error(e + " units is invalid");
            return t / i
        }
        z.lengthToRadians = Ii;

        function xm(t, e) {
            return nl(Ii(t, e))
        }
        z.lengthToDegrees = xm;

        function wm(t) {
            var e = t % 360;
            return e < 0 && (e += 360), e
        }
        z.bearingToAzimuth = wm;

        function nl(t) {
            var e = t % (2 * Math.PI);
            return e * 180 / Math.PI
        }
        z.radiansToDegrees = nl;

        function Cm(t) {
            var e = t % 360;
            return e * Math.PI / 180
        }
        z.degreesToRadians = Cm;

        function Em(t, e, i) {
            if (e === void 0 && (e = "kilometers"), i === void 0 && (i = "kilometers"), !(t >= 0)) throw new Error("length must be a positive number");
            return rl(Ii(t, e), i)
        }
        z.convertLength = Em;

        function Pm(t, e, i) {
            if (e === void 0 && (e = "meters"), i === void 0 && (i = "kilometers"), !(t >= 0)) throw new Error("area must be a positive number");
            var r = z.areaFactors[e];
            if (!r) throw new Error("invalid original units");
            var n = z.areaFactors[i];
            if (!n) throw new Error("invalid final units");
            return t / r * n
        }
        z.convertArea = Pm;

        function Ve(t) {
            return !isNaN(t) && t !== null && !Array.isArray(t)
        }
        z.isNumber = Ve;

        function Sm(t) {
            return !!t && t.constructor === Object
        }
        z.isObject = Sm;

        function Bm(t) {
            if (!t) throw new Error("bbox is required");
            if (!Array.isArray(t)) throw new Error("bbox must be an Array");
            if (t.length !== 4 && t.length !== 6) throw new Error("bbox must be an Array of 4 or 6 numbers");
            t.forEach(function(e) {
                if (!Ve(e)) throw new Error("bbox must only contain numbers")
            })
        }
        z.validateBBox = Bm;

        function Tm(t) {
            if (!t) throw new Error("id is required");
            if (["string", "number"].indexOf(typeof t) === -1) throw new Error("id must be a number or a string")
        }
        z.validateId = Tm
    });
    var Ni = S(Q => {
        "use strict";
        Object.defineProperty(Q, "__esModule", {
            value: !0
        });
        var nt = Gi();

        function Ce(t, e, i) {
            if (t !== null)
                for (var r, n, s, a, o, l, u, f = 0, d = 0, P, E = t.type, T = E === "FeatureCollection", G = E === "Feature", _ = T ? t.features.length : 1, x = 0; x < _; x++) {
                    u = T ? t.features[x].geometry : G ? t.geometry : t, P = u ? u.type === "GeometryCollection" : !1, o = P ? u.geometries.length : 1;
                    for (var b = 0; b < o; b++) {
                        var R = 0,
                            D = 0;
                        if (a = P ? u.geometries[b] : u, a !== null) {
                            l = a.coordinates;
                            var O = a.type;
                            switch (f = i && (O === "Polygon" || O === "MultiPolygon") ? 1 : 0, O) {
                                case null:
                                    break;
                                case "Point":
                                    if (e(l, d, x, R, D) === !1) return !1;
                                    d++, R++;
                                    break;
                                case "LineString":
                                case "MultiPoint":
                                    for (r = 0; r < l.length; r++) {
                                        if (e(l[r], d, x, R, D) === !1) return !1;
                                        d++, O === "MultiPoint" && R++
                                    }
                                    O === "LineString" && R++;
                                    break;
                                case "Polygon":
                                case "MultiLineString":
                                    for (r = 0; r < l.length; r++) {
                                        for (n = 0; n < l[r].length - f; n++) {
                                            if (e(l[r][n], d, x, R, D) === !1) return !1;
                                            d++
                                        }
                                        O === "MultiLineString" && R++, O === "Polygon" && D++
                                    }
                                    O === "Polygon" && R++;
                                    break;
                                case "MultiPolygon":
                                    for (r = 0; r < l.length; r++) {
                                        for (D = 0, n = 0; n < l[r].length; n++) {
                                            for (s = 0; s < l[r][n].length - f; s++) {
                                                if (e(l[r][n][s], d, x, R, D) === !1) return !1;
                                                d++
                                            }
                                            D++
                                        }
                                        R++
                                    }
                                    break;
                                case "GeometryCollection":
                                    for (r = 0; r < a.geometries.length; r++)
                                        if (Ce(a.geometries[r], e, i) === !1) return !1;
                                    break;
                                default:
                                    throw new Error("Unknown Geometry Type")
                            }
                        }
                    }
                }
        }

        function Rm(t, e, i, r) {
            var n = i;
            return Ce(t, function(s, a, o, l, u) {
                a === 0 && i === void 0 ? n = s : n = e(n, s, a, o, l, u)
            }, r), n
        }

        function sl(t, e) {
            var i;
            switch (t.type) {
                case "FeatureCollection":
                    for (i = 0; i < t.features.length && e(t.features[i].properties, i) !== !1; i++);
                    break;
                case "Feature":
                    e(t.properties, 0);
                    break
            }
        }

        function Dm(t, e, i) {
            var r = i;
            return sl(t, function(n, s) {
                s === 0 && i === void 0 ? r = n : r = e(r, n, s)
            }), r
        }

        function al(t, e) {
            if (t.type === "Feature") e(t, 0);
            else if (t.type === "FeatureCollection")
                for (var i = 0; i < t.features.length && e(t.features[i], i) !== !1; i++);
        }

        function Om(t, e, i) {
            var r = i;
            return al(t, function(n, s) {
                s === 0 && i === void 0 ? r = n : r = e(r, n, s)
            }), r
        }

        function Am(t) {
            var e = [];
            return Ce(t, function(i) {
                e.push(i)
            }), e
        }

        function qi(t, e) {
            var i, r, n, s, a, o, l, u, f, d, P = 0,
                E = t.type === "FeatureCollection",
                T = t.type === "Feature",
                G = E ? t.features.length : 1;
            for (i = 0; i < G; i++) {
                for (o = E ? t.features[i].geometry : T ? t.geometry : t, u = E ? t.features[i].properties : T ? t.properties : {}, f = E ? t.features[i].bbox : T ? t.bbox : void 0, d = E ? t.features[i].id : T ? t.id : void 0, l = o ? o.type === "GeometryCollection" : !1, a = l ? o.geometries.length : 1, n = 0; n < a; n++) {
                    if (s = l ? o.geometries[n] : o, s === null) {
                        if (e(null, P, u, f, d) === !1) return !1;
                        continue
                    }
                    switch (s.type) {
                        case "Point":
                        case "LineString":
                        case "MultiPoint":
                        case "Polygon":
                        case "MultiLineString":
                        case "MultiPolygon": {
                            if (e(s, P, u, f, d) === !1) return !1;
                            break
                        }
                        case "GeometryCollection": {
                            for (r = 0; r < s.geometries.length; r++)
                                if (e(s.geometries[r], P, u, f, d) === !1) return !1;
                            break
                        }
                        default:
                            throw new Error("Unknown Geometry Type")
                    }
                }
                P++
            }
        }

        function Im(t, e, i) {
            var r = i;
            return qi(t, function(n, s, a, o, l) {
                s === 0 && i === void 0 ? r = n : r = e(r, n, s, a, o, l)
            }), r
        }

        function je(t, e) {
            qi(t, function(i, r, n, s, a) {
                var o = i === null ? null : i.type;
                switch (o) {
                    case null:
                    case "Point":
                    case "LineString":
                    case "Polygon":
                        return e(nt.feature(i, n, {
                            bbox: s,
                            id: a
                        }), r, 0) === !1 ? !1 : void 0
                }
                var l;
                switch (o) {
                    case "MultiPoint":
                        l = "Point";
                        break;
                    case "MultiLineString":
                        l = "LineString";
                        break;
                    case "MultiPolygon":
                        l = "Polygon";
                        break
                }
                for (var u = 0; u < i.coordinates.length; u++) {
                    var f = i.coordinates[u],
                        d = {
                            type: l,
                            coordinates: f
                        };
                    if (e(nt.feature(d, n), r, u) === !1) return !1
                }
            })
        }

        function Gm(t, e, i) {
            var r = i;
            return je(t, function(n, s, a) {
                s === 0 && a === 0 && i === void 0 ? r = n : r = e(r, n, s, a)
            }), r
        }

        function ol(t, e) {
            je(t, function(i, r, n) {
                var s = 0;
                if (i.geometry) {
                    var a = i.geometry.type;
                    if (!(a === "Point" || a === "MultiPoint")) {
                        var o, l = 0,
                            u = 0,
                            f = 0;
                        if (Ce(i, function(d, P, E, T, G) {
                                if (o === void 0 || r > l || T > u || G > f) {
                                    o = d, l = r, u = T, f = G, s = 0;
                                    return
                                }
                                var _ = nt.lineString([o, d], i.properties);
                                if (e(_, r, n, G, s) === !1) return !1;
                                s++, o = d
                            }) === !1) return !1
                    }
                }
            })
        }

        function qm(t, e, i) {
            var r = i,
                n = !1;
            return ol(t, function(s, a, o, l, u) {
                n === !1 && i === void 0 ? r = s : r = e(r, s, a, o, l, u), n = !0
            }), r
        }

        function ll(t, e) {
            if (!t) throw new Error("geojson is required");
            je(t, function(i, r, n) {
                if (i.geometry !== null) {
                    var s = i.geometry.type,
                        a = i.geometry.coordinates;
                    switch (s) {
                        case "LineString":
                            if (e(i, r, n, 0, 0) === !1) return !1;
                            break;
                        case "Polygon":
                            for (var o = 0; o < a.length; o++)
                                if (e(nt.lineString(a[o], i.properties), r, n, o) === !1) return !1;
                            break
                    }
                }
            })
        }

        function Nm(t, e, i) {
            var r = i;
            return ll(t, function(n, s, a, o) {
                s === 0 && i === void 0 ? r = n : r = e(r, n, s, a, o)
            }), r
        }

        function zm(t, e) {
            if (e = e || {}, !nt.isObject(e)) throw new Error("options is invalid");
            var i = e.featureIndex || 0,
                r = e.multiFeatureIndex || 0,
                n = e.geometryIndex || 0,
                s = e.segmentIndex || 0,
                a = e.properties,
                o;
            switch (t.type) {
                case "FeatureCollection":
                    i < 0 && (i = t.features.length + i), a = a || t.features[i].properties, o = t.features[i].geometry;
                    break;
                case "Feature":
                    a = a || t.properties, o = t.geometry;
                    break;
                case "Point":
                case "MultiPoint":
                    return null;
                case "LineString":
                case "Polygon":
                case "MultiLineString":
                case "MultiPolygon":
                    o = t;
                    break;
                default:
                    throw new Error("geojson is invalid")
            }
            if (o === null) return null;
            var l = o.coordinates;
            switch (o.type) {
                case "Point":
                case "MultiPoint":
                    return null;
                case "LineString":
                    return s < 0 && (s = l.length + s - 1), nt.lineString([l[s], l[s + 1]], a, e);
                case "Polygon":
                    return n < 0 && (n = l.length + n), s < 0 && (s = l[n].length + s - 1), nt.lineString([l[n][s], l[n][s + 1]], a, e);
                case "MultiLineString":
                    return r < 0 && (r = l.length + r), s < 0 && (s = l[r].length + s - 1), nt.lineString([l[r][s], l[r][s + 1]], a, e);
                case "MultiPolygon":
                    return r < 0 && (r = l.length + r), n < 0 && (n = l[r].length + n), s < 0 && (s = l[r][n].length - s - 1), nt.lineString([l[r][n][s], l[r][n][s + 1]], a, e)
            }
            throw new Error("geojson is invalid")
        }

        function Fm(t, e) {
            if (e = e || {}, !nt.isObject(e)) throw new Error("options is invalid");
            var i = e.featureIndex || 0,
                r = e.multiFeatureIndex || 0,
                n = e.geometryIndex || 0,
                s = e.coordIndex || 0,
                a = e.properties,
                o;
            switch (t.type) {
                case "FeatureCollection":
                    i < 0 && (i = t.features.length + i), a = a || t.features[i].properties, o = t.features[i].geometry;
                    break;
                case "Feature":
                    a = a || t.properties, o = t.geometry;
                    break;
                case "Point":
                case "MultiPoint":
                    return null;
                case "LineString":
                case "Polygon":
                case "MultiLineString":
                case "MultiPolygon":
                    o = t;
                    break;
                default:
                    throw new Error("geojson is invalid")
            }
            if (o === null) return null;
            var l = o.coordinates;
            switch (o.type) {
                case "Point":
                    return nt.point(l, a, e);
                case "MultiPoint":
                    return r < 0 && (r = l.length + r), nt.point(l[r], a, e);
                case "LineString":
                    return s < 0 && (s = l.length + s), nt.point(l[s], a, e);
                case "Polygon":
                    return n < 0 && (n = l.length + n), s < 0 && (s = l[n].length + s), nt.point(l[n][s], a, e);
                case "MultiLineString":
                    return r < 0 && (r = l.length + r), s < 0 && (s = l[r].length + s), nt.point(l[r][s], a, e);
                case "MultiPolygon":
                    return r < 0 && (r = l.length + r), n < 0 && (n = l[r].length + n), s < 0 && (s = l[r][n].length - s), nt.point(l[r][n][s], a, e)
            }
            throw new Error("geojson is invalid")
        }
        Q.coordAll = Am;
        Q.coordEach = Ce;
        Q.coordReduce = Rm;
        Q.featureEach = al;
        Q.featureReduce = Om;
        Q.findPoint = Fm;
        Q.findSegment = zm;
        Q.flattenEach = je;
        Q.flattenReduce = Gm;
        Q.geomEach = qi;
        Q.geomReduce = Im;
        Q.lineEach = ll;
        Q.lineReduce = Nm;
        Q.propEach = sl;
        Q.propReduce = Dm;
        Q.segmentEach = ol;
        Q.segmentReduce = qm
    });
    var hl = S(Fi => {
        "use strict";
        Object.defineProperty(Fi, "__esModule", {
            value: !0
        });
        var Vm = Ni();

        function zi(t) {
            var e = [1 / 0, 1 / 0, -1 / 0, -1 / 0];
            return Vm.coordEach(t, function(i) {
                e[0] > i[0] && (e[0] = i[0]), e[1] > i[1] && (e[1] = i[1]), e[2] < i[0] && (e[2] = i[0]), e[3] < i[1] && (e[3] = i[1])
            }), e
        }
        zi.default = zi;
        Fi.default = zi
    });
    var Ui = S((Ev, Vi) => {
        var kt = Qo(),
            cl = Gi(),
            pl = Ni(),
            re = hl().default,
            Um = pl.featureEach,
            wv = pl.coordEach,
            Cv = cl.polygon,
            ul = cl.featureCollection;

        function fl(t) {
            var e = new kt(t);
            return e.insert = function(i) {
                if (i.type !== "Feature") throw new Error("invalid feature");
                return i.bbox = i.bbox ? i.bbox : re(i), kt.prototype.insert.call(this, i)
            }, e.load = function(i) {
                var r = [];
                return Array.isArray(i) ? i.forEach(function(n) {
                    if (n.type !== "Feature") throw new Error("invalid features");
                    n.bbox = n.bbox ? n.bbox : re(n), r.push(n)
                }) : Um(i, function(n) {
                    if (n.type !== "Feature") throw new Error("invalid features");
                    n.bbox = n.bbox ? n.bbox : re(n), r.push(n)
                }), kt.prototype.load.call(this, r)
            }, e.remove = function(i, r) {
                if (i.type !== "Feature") throw new Error("invalid feature");
                return i.bbox = i.bbox ? i.bbox : re(i), kt.prototype.remove.call(this, i, r)
            }, e.clear = function() {
                return kt.prototype.clear.call(this)
            }, e.search = function(i) {
                var r = kt.prototype.search.call(this, this.toBBox(i));
                return ul(r)
            }, e.collides = function(i) {
                return kt.prototype.collides.call(this, this.toBBox(i))
            }, e.all = function() {
                var i = kt.prototype.all.call(this);
                return ul(i)
            }, e.toJSON = function() {
                return kt.prototype.toJSON.call(this)
            }, e.fromJSON = function(i) {
                return kt.prototype.fromJSON.call(this, i)
            }, e.toBBox = function(i) {
                var r;
                if (i.bbox) r = i.bbox;
                else if (Array.isArray(i) && i.length === 4) r = i;
                else if (Array.isArray(i) && i.length === 6) r = [i[0], i[1], i[3], i[4]];
                else if (i.type === "Feature") r = re(i);
                else if (i.type === "FeatureCollection") r = re(i);
                else throw new Error("invalid geojson");
                return {
                    minX: r[0],
                    minY: r[1],
                    maxX: r[2],
                    maxY: r[3]
                }
            }, e
        }
        Vi.exports = fl;
        Vi.exports.default = fl
    });
    Array.prototype.findIndex = Array.prototype.findIndex || function(t) {
        if (this === null) throw new TypeError("Array.prototype.findIndex called on null or undefined");
        if (typeof t != "function") throw new TypeError("callback must be a function");
        for (var e = Object(this), i = e.length >>> 0, r = arguments[1], n = 0; n < i; n++)
            if (t.call(r, e[n], n, e)) return n;
        return -1
    };
    Array.prototype.find = Array.prototype.find || function(t) {
        if (this === null) throw new TypeError("Array.prototype.find called on null or undefined");
        if (typeof t != "function") throw new TypeError("callback must be a function");
        for (var e = Object(this), i = e.length >>> 0, r = arguments[1], n = 0; n < i; n++) {
            var s = e[n];
            if (t.call(r, s, n, e)) return s
        }
    };
    typeof Object.assign != "function" && (Object.assign = function(t) {
        "use strict";
        if (t == null) throw new TypeError("Cannot convert undefined or null to object");
        t = Object(t);
        for (var e = 1; e < arguments.length; e++) {
            var i = arguments[e];
            if (i != null)
                for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (t[r] = i[r])
        }
        return t
    });
    (function(t) {
        t.forEach(function(e) {
            e.hasOwnProperty("remove") || Object.defineProperty(e, "remove", {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                value: function() {
                    this.parentNode.removeChild(this)
                }
            })
        })
    })([Element.prototype, CharacterData.prototype, DocumentType.prototype]);
    Array.prototype.includes || Object.defineProperty(Array.prototype, "includes", {
        value: function(t, e) {
            if (this == null) throw new TypeError('"this" is null or not defined');
            var i = Object(this),
                r = i.length >>> 0;
            if (r === 0) return !1;
            var n = e | 0,
                s = Math.max(n >= 0 ? n : r - Math.abs(n), 0);

            function a(o, l) {
                return o === l || typeof o == "number" && typeof l == "number" && isNaN(o) && isNaN(l)
            }
            for (; s < r;) {
                if (a(i[s], t)) return !0;
                s++
            }
            return !1
        }
    });
    var hr = {
        name: "@geoman-io/leaflet-geoman-free",
        version: "2.17.0",
        description: "A Leaflet Plugin For Editing Geometry Layers in Leaflet 1.0",
        keywords: ["leaflet", "geoman", "polygon management", "geometry editing", "map data", "map overlay", "polygon", "geojson", "leaflet-draw", "data-field-geojson", "ui-leaflet-draw"],
        files: ["dist"],
        main: "dist/leaflet-geoman.js",
        types: "dist/leaflet-geoman.d.ts",
        dependencies: {
            "@turf/boolean-contains": "^6.5.0",
            "@turf/kinks": "^6.5.0",
            "@turf/line-intersect": "^6.5.0",
            "@turf/line-split": "^6.5.0",
            lodash: "4.17.21",
            "polyclip-ts": "^0.16.5"
        },
        devDependencies: {
            "@types/leaflet": "^1.7.9",
            "cross-env": "^7.0.3",
            cypress: "6.9.1",
            "cypress-wait-until": "1.7.1",
            esbuild: "^0.20.0",
            eslint: "8.56.0",
            "eslint-config-airbnb-base": "15.0.0",
            "eslint-config-prettier": "9.1.0",
            "eslint-plugin-cypress": "2.15.1",
            "eslint-plugin-import": "2.29.1",
            husky: "^9.0.7",
            leaflet: "1.9.3",
            "lint-staged": "^15.2.1",
            prettier: "3.2.4",
            "prosthetic-hand": "1.3.1",
            "ts-node": "^10.9.2"
        },
        peerDependencies: {
            leaflet: "^1.2.0"
        },
        scripts: {
            start: "pnpm run dev",
            dev: "cross-env DEV=true ts-node bundle.mjs",
            build: "ts-node bundle.mjs",
            test: "cypress run",
            cypress: "cypress open",
            prepare: "pnpm run build && husky",
            "eslint-check": "eslint --print-config . | eslint-config-prettier-check",
            eslint: 'eslint "{src,cypress,demo}/**/*.js" --fix ',
            prettier: 'prettier --write "{src,cypress,demo}/**/*.{js,css}" --log-level=warn',
            lint: "pnpm run eslint && pnpm run prettier"
        },
        repository: {
            type: "git",
            url: "git://github.com/geoman-io/leaflet-geoman.git"
        },
        author: {
            name: "Geoman.io",
            email: "sales@geoman.io",
            url: "http://geoman.io"
        },
        license: "MIT",
        bugs: {
            url: "https://github.com/geoman-io/leaflet-geoman/issues"
        },
        homepage: "https://geoman.io",
        prettier: {
            trailingComma: "es5",
            tabWidth: 2,
            semi: !0,
            singleQuote: !0
        },
        "lint-staged": {
            "*.js": 'eslint "{src,cypress,demo}/**/*.js" --fix',
            "*.{js,css,md}": 'prettier --write "{src,cypress,demo}/**/*.{js,css}"'
        }
    };
    var Pi = xt(Ne());
    var Ga = {
        tooltips: {
            placeMarker: "Click to place marker",
            firstVertex: "Click to place first vertex",
            continueLine: "Click to continue drawing",
            finishLine: "Click any existing marker to finish",
            finishPoly: "Click first marker to finish",
            finishRect: "Click to finish",
            startCircle: "Click to place circle center",
            finishCircle: "Click to finish circle",
            placeCircleMarker: "Click to place circle marker",
            placeText: "Click to place text",
            selectFirstLayerFor: "Select first layer for {action}",
            selectSecondLayerFor: "Select second layer for {action}"
        },
        actions: {
            finish: "Finish",
            cancel: "Cancel",
            removeLastVertex: "Remove Last Vertex"
        },
        buttonTitles: {
            drawMarkerButton: "Draw Marker",
            drawPolyButton: "Draw Polygons",
            drawLineButton: "Draw Polyline",
            drawCircleButton: "Draw Circle",
            drawRectButton: "Draw Rectangle",
            editButton: "Edit Layers",
            dragButton: "Drag Layers",
            cutButton: "Cut Layers",
            deleteButton: "Remove Layers",
            drawCircleMarkerButton: "Draw Circle Marker",
            snappingButton: "Snap dragged marker to other layers and vertices",
            pinningButton: "Pin shared vertices together",
            rotateButton: "Rotate Layers",
            drawTextButton: "Draw Text",
            scaleButton: "Scale Layers",
            autoTracingButton: "Auto trace Line",
            snapGuidesButton: "Show SnapGuides",
            unionButton: "Union layers",
            differenceButton: "Subtract layers"
        },
        measurements: {
            totalLength: "Length",
            segmentLength: "Segment length",
            area: "Area",
            radius: "Radius",
            perimeter: "Perimeter",
            height: "Height",
            width: "Width",
            coordinates: "Position",
            coordinatesMarker: "Position Marker"
        }
    };
    var qa = {
        tooltips: {
            placeMarker: "Platziere den Marker mit Klick",
            firstVertex: "Platziere den ersten Marker mit Klick",
            continueLine: "Klicke, um weiter zu zeichnen",
            finishLine: "Beende mit Klick auf existierenden Marker",
            finishPoly: "Beende mit Klick auf ersten Marker",
            finishRect: "Beende mit Klick",
            startCircle: "Platziere das Kreiszentrum mit Klick",
            finishCircle: "Beende den Kreis mit Klick",
            placeCircleMarker: "Platziere den Kreismarker mit Klick",
            placeText: "Platziere den Text mit Klick"
        },
        actions: {
            finish: "Beenden",
            cancel: "Abbrechen",
            removeLastVertex: "Letzten Vertex l\xF6schen"
        },
        buttonTitles: {
            drawMarkerButton: "Marker zeichnen",
            drawPolyButton: "Polygon zeichnen",
            drawLineButton: "Polyline zeichnen",
            drawCircleButton: "Kreis zeichnen",
            drawRectButton: "Rechteck zeichnen",
            editButton: "Layer editieren",
            dragButton: "Layer bewegen",
            cutButton: "Layer schneiden",
            deleteButton: "Layer l\xF6schen",
            drawCircleMarkerButton: "Kreismarker zeichnen",
            snappingButton: "Bewegter Layer an andere Layer oder Vertexe einhacken",
            pinningButton: "Vertexe an der gleichen Position verkn\xFCpfen",
            rotateButton: "Layer drehen",
            drawTextButton: "Text zeichnen",
            scaleButton: "Layer skalieren",
            autoTracingButton: "Linie automatisch nachzeichen"
        },
        measurements: {
            totalLength: "L\xE4nge",
            segmentLength: "Segment L\xE4nge",
            area: "Fl\xE4che",
            radius: "Radius",
            perimeter: "Umfang",
            height: "H\xF6he",
            width: "Breite",
            coordinates: "Position",
            coordinatesMarker: "Position Marker"
        }
    };
    var Na = {
        tooltips: {
            placeMarker: "Clicca per posizionare un Marker",
            firstVertex: "Clicca per posizionare il primo vertice",
            continueLine: "Clicca per continuare a disegnare",
            finishLine: "Clicca qualsiasi marker esistente per terminare",
            finishPoly: "Clicca il primo marker per terminare",
            finishRect: "Clicca per terminare",
            startCircle: "Clicca per posizionare il punto centrale del cerchio",
            finishCircle: "Clicca per terminare il cerchio",
            placeCircleMarker: "Clicca per posizionare un Marker del cherchio"
        },
        actions: {
            finish: "Termina",
            cancel: "Annulla",
            removeLastVertex: "Rimuovi l'ultimo vertice"
        },
        buttonTitles: {
            drawMarkerButton: "Disegna Marker",
            drawPolyButton: "Disegna Poligoni",
            drawLineButton: "Disegna Polilinea",
            drawCircleButton: "Disegna Cerchio",
            drawRectButton: "Disegna Rettangolo",
            editButton: "Modifica Livelli",
            dragButton: "Sposta Livelli",
            cutButton: "Ritaglia Livelli",
            deleteButton: "Elimina Livelli",
            drawCircleMarkerButton: "Disegna Marker del Cerchio",
            snappingButton: "Snap ha trascinato il pennarello su altri strati e vertici",
            pinningButton: "Pin condiviso vertici insieme",
            rotateButton: "Ruota livello"
        }
    };
    var za = {
        tooltips: {
            placeMarker: "Klik untuk menempatkan marker",
            firstVertex: "Klik untuk menempatkan vertex pertama",
            continueLine: "Klik untuk meneruskan digitasi",
            finishLine: "Klik pada sembarang marker yang ada untuk mengakhiri",
            finishPoly: "Klik marker pertama untuk mengakhiri",
            finishRect: "Klik untuk mengakhiri",
            startCircle: "Klik untuk menempatkan titik pusat lingkaran",
            finishCircle: "Klik untuk mengakhiri lingkaran",
            placeCircleMarker: "Klik untuk menempatkan penanda lingkarann"
        },
        actions: {
            finish: "Selesai",
            cancel: "Batal",
            removeLastVertex: "Hilangkan Vertex Terakhir"
        },
        buttonTitles: {
            drawMarkerButton: "Digitasi Marker",
            drawPolyButton: "Digitasi Polygon",
            drawLineButton: "Digitasi Polyline",
            drawCircleButton: "Digitasi Lingkaran",
            drawRectButton: "Digitasi Segi Empat",
            editButton: "Edit Layer",
            dragButton: "Geser Layer",
            cutButton: "Potong Layer",
            deleteButton: "Hilangkan Layer",
            drawCircleMarkerButton: "Digitasi Penanda Lingkaran",
            snappingButton: "Jepretkan penanda yang ditarik ke lapisan dan simpul lain",
            pinningButton: "Sematkan simpul bersama bersama",
            rotateButton: "Putar lapisan"
        }
    };
    var Fa = {
        tooltips: {
            placeMarker: "Apas\u0103 click pentru a ad\u0103uga un punct",
            firstVertex: "Apas\u0103 click pentru a ad\u0103uga primul Vertex",
            continueLine: "Apas\u0103 click pentru a continua",
            finishLine: "Apas\u0103 click pe orice vertex pentru a termina",
            finishPoly: "Apas\u0103 click pe primul vertex pentru a \u00EEnchide poligonul",
            finishRect: "Apas\u0103 click pentru a finisa",
            startCircle: "Apas\u0103 click pentru a plasa punctul central",
            finishCircle: "Seteaz\u0103 dimensiunea cercului",
            placeCircleMarker: "Adaug\u0103 un punct",
			placeText: "Apas\u0103 click pentru a ad\u0103uga text"
        },
        actions: {
            finish: "Termin\u0103",
            cancel: "Anuleaz\u0103",
            removeLastVertex: "\u0218terge ultimul vertex"
        },
        buttonTitles: {
            drawMarkerButton: "Adaug\u0103 punct",
            drawPolyButton: "Deseneaz\u0103 poligon",
            drawLineButton: "Deseneaz\u0103 linie",
            drawCircleButton: "Deseneaz\u0103 cerc",
            drawRectButton: "Deseneaz\u0103 dreptunghi",
            editButton: "Editare",
            dragButton: "Mutare straturi",
            cutButton: "T\u0103iere",
            deleteButton: "\u0218tergere",
            drawCircleMarkerButton: "Deseneaz\u0103 marcatorul cercului",
            snappingButton: "Fixa\u021Bi marcatorul glisat pe alte straturi \u0219i v\xE2rfuri",
            pinningButton: "Fixa\u021Bi v\xE2rfurile partajate \xEEmpreun\u0103",
            rotateButton: "Rotire",
			drawTextButton: "Adaug\u0103 text"
        }
    };
    var Va = {
        tooltips: {
            placeMarker: "\u041D\u0430\u0436\u043C\u0438\u0442\u0435, \u0447\u0442\u043E\u0431\u044B \u043D\u0430\u043D\u0435\u0441\u0442\u0438 \u043C\u0430\u0440\u043A\u0435\u0440",
            firstVertex: "\u041D\u0430\u0436\u043C\u0438\u0442\u0435, \u0447\u0442\u043E\u0431\u044B \u043D\u0430\u043D\u0435\u0441\u0442\u0438 \u043F\u0435\u0440\u0432\u044B\u0439 \u043E\u0431\u044A\u0435\u043A\u0442",
            continueLine: "\u041D\u0430\u0436\u043C\u0438\u0442\u0435, \u0447\u0442\u043E\u0431\u044B \u043F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C \u0440\u0438\u0441\u043E\u0432\u0430\u043D\u0438\u0435",
            finishLine: "\u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u043B\u044E\u0431\u043E\u0439 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u0439 \u043C\u0430\u0440\u043A\u0435\u0440 \u0434\u043B\u044F \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0438\u044F",
            finishPoly: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043F\u0435\u0440\u0432\u0443\u044E \u0442\u043E\u0447\u043A\u0443, \u0447\u0442\u043E\u0431\u044B \u0437\u0430\u043A\u043E\u043D\u0447\u0438\u0442\u044C",
            finishRect: "\u041D\u0430\u0436\u043C\u0438\u0442\u0435, \u0447\u0442\u043E\u0431\u044B \u0437\u0430\u043A\u043E\u043D\u0447\u0438\u0442\u044C",
            startCircle: "\u041D\u0430\u0436\u043C\u0438\u0442\u0435, \u0447\u0442\u043E\u0431\u044B \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0446\u0435\u043D\u0442\u0440 \u043A\u0440\u0443\u0433\u0430",
            finishCircle: "\u041D\u0430\u0436\u043C\u0438\u0442\u0435, \u0447\u0442\u043E\u0431\u044B \u0437\u0430\u0434\u0430\u0442\u044C \u0440\u0430\u0434\u0438\u0443\u0441",
            placeCircleMarker: "\u041D\u0430\u0436\u043C\u0438\u0442\u0435, \u0447\u0442\u043E\u0431\u044B \u043D\u0430\u043D\u0435\u0441\u0442\u0438 \u043A\u0440\u0443\u0433\u043E\u0432\u043E\u0439 \u043C\u0430\u0440\u043A\u0435\u0440"
        },
        actions: {
            finish: "\u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044C",
            cancel: "\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C",
            removeLastVertex: "\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0435\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435"
        },
        buttonTitles: {
            drawMarkerButton: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043C\u0430\u0440\u043A\u0435\u0440",
            drawPolyButton: "\u0420\u0438\u0441\u043E\u0432\u0430\u0442\u044C \u043F\u043E\u043B\u0438\u0433\u043E\u043D",
            drawLineButton: "\u0420\u0438\u0441\u043E\u0432\u0430\u0442\u044C \u043A\u0440\u0438\u0432\u0443\u044E",
            drawCircleButton: "\u0420\u0438\u0441\u043E\u0432\u0430\u0442\u044C \u043A\u0440\u0443\u0433",
            drawRectButton: "\u0420\u0438\u0441\u043E\u0432\u0430\u0442\u044C \u043F\u0440\u044F\u043C\u043E\u0443\u0433\u043E\u043B\u044C\u043D\u0438\u043A",
            editButton: "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u043B\u043E\u0439",
            dragButton: "\u041F\u0435\u0440\u0435\u043D\u0435\u0441\u0442\u0438 \u0441\u043B\u043E\u0439",
            cutButton: "\u0412\u044B\u0440\u0435\u0437\u0430\u0442\u044C \u0441\u043B\u043E\u0439",
            deleteButton: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0441\u043B\u043E\u0439",
            drawCircleMarkerButton: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043A\u0440\u0443\u0433\u043E\u0432\u043E\u0439 \u043C\u0430\u0440\u043A\u0435\u0440",
            snappingButton: "\u041F\u0440\u0438\u0432\u044F\u0437\u0430\u0442\u044C \u043F\u0435\u0440\u0435\u0442\u0430\u0441\u043A\u0438\u0432\u0430\u0435\u043C\u044B\u0439 \u043C\u0430\u0440\u043A\u0435\u0440 \u043A \u0434\u0440\u0443\u0433\u0438\u043C \u0441\u043B\u043E\u044F\u043C \u0438 \u0432\u0435\u0440\u0448\u0438\u043D\u0430\u043C",
            pinningButton: "\u0421\u0432\u044F\u0437\u0430\u0442\u044C \u043E\u0431\u0449\u0438\u0435 \u0442\u043E\u0447\u043A\u0438 \u0432\u043C\u0435\u0441\u0442\u0435",
            rotateButton: "\u041F\u043E\u0432\u043E\u0440\u043E\u0442 \u0441\u043B\u043E\u044F"
        }
    };
    var Ua = {
        tooltips: {
            placeMarker: "Presiona para colocar un marcador",
            firstVertex: "Presiona para colocar el primer v\xE9rtice",
            continueLine: "Presiona para continuar dibujando",
            finishLine: "Presiona cualquier marcador existente para finalizar",
            finishPoly: "Presiona el primer marcador para finalizar",
            finishRect: "Presiona para finalizar",
            startCircle: "Presiona para colocar el centro del c\xEDrculo",
            finishCircle: "Presiona para finalizar el c\xEDrculo",
            placeCircleMarker: "Presiona para colocar un marcador de c\xEDrculo"
        },
        actions: {
            finish: "Finalizar",
            cancel: "Cancelar",
            removeLastVertex: "Eliminar \xFAltimo v\xE9rtice"
        },
        buttonTitles: {
            drawMarkerButton: "Dibujar Marcador",
            drawPolyButton: "Dibujar Pol\xEDgono",
            drawLineButton: "Dibujar L\xEDnea",
            drawCircleButton: "Dibujar C\xEDrculo",
            drawRectButton: "Dibujar Rect\xE1ngulo",
            editButton: "Editar Capas",
            dragButton: "Arrastrar Capas",
            cutButton: "Cortar Capas",
            deleteButton: "Eliminar Capas",
            drawCircleMarkerButton: "Dibujar Marcador de C\xEDrculo",
            snappingButton: "El marcador de Snap arrastrado a otras capas y v\xE9rtices",
            pinningButton: "Fijar juntos los v\xE9rtices compartidos",
            rotateButton: "Rotar capa"
        }
    };
    var ja = {
        tooltips: {
            placeMarker: "Klik om een marker te plaatsen",
            firstVertex: "Klik om het eerste punt te plaatsen",
            continueLine: "Klik om te blijven tekenen",
            finishLine: "Klik op een bestaand punt om te be\xEBindigen",
            finishPoly: "Klik op het eerst punt om te be\xEBindigen",
            finishRect: "Klik om te be\xEBindigen",
            startCircle: "Klik om het middelpunt te plaatsen",
            finishCircle: "Klik om de cirkel te be\xEBindigen",
            placeCircleMarker: "Klik om een marker te plaatsen"
        },
        actions: {
            finish: "Bewaar",
            cancel: "Annuleer",
            removeLastVertex: "Verwijder laatste punt"
        },
        buttonTitles: {
            drawMarkerButton: "Plaats Marker",
            drawPolyButton: "Teken een vlak",
            drawLineButton: "Teken een lijn",
            drawCircleButton: "Teken een cirkel",
            drawRectButton: "Teken een vierkant",
            editButton: "Bewerk",
            dragButton: "Verplaats",
            cutButton: "Knip",
            deleteButton: "Verwijder",
            drawCircleMarkerButton: "Plaats Marker",
            snappingButton: "Snap gesleepte marker naar andere lagen en hoekpunten",
            pinningButton: "Speld gedeelde hoekpunten samen",
            rotateButton: "Laag roteren"
        }
    };
    var Ka = {
        tooltips: {
            placeMarker: "Cliquez pour placer un marqueur",
            firstVertex: "Cliquez pour placer le premier sommet",
            continueLine: "Cliquez pour continuer \xE0 dessiner",
            finishLine: "Cliquez sur n'importe quel marqueur pour terminer",
            finishPoly: "Cliquez sur le premier marqueur pour terminer",
            finishRect: "Cliquez pour terminer",
            startCircle: "Cliquez pour placer le centre du cercle",
            finishCircle: "Cliquez pour finir le cercle",
            placeCircleMarker: "Cliquez pour placer le marqueur circulaire"
        },
        actions: {
            finish: "Terminer",
            cancel: "Annuler",
            removeLastVertex: "Retirer le dernier sommet"
        },
        buttonTitles: {
            drawMarkerButton: "Placer des marqueurs",
            drawPolyButton: "Dessiner des polygones",
            drawLineButton: "Dessiner des polylignes",
            drawCircleButton: "Dessiner un cercle",
            drawRectButton: "Dessiner un rectangle",
            editButton: "\xC9diter des calques",
            dragButton: "D\xE9placer des calques",
            cutButton: "Couper des calques",
            deleteButton: "Supprimer des calques",
            drawCircleMarkerButton: "Dessiner un marqueur circulaire",
            snappingButton: "Glisser le marqueur vers d'autres couches et sommets",
            pinningButton: "\xC9pingler ensemble les sommets partag\xE9s",
            rotateButton: "Tourner des calques"
        }
    };
    var Ha = {
        tooltips: {
            placeMarker: "\u5355\u51FB\u653E\u7F6E\u6807\u8BB0",
            firstVertex: "\u5355\u51FB\u653E\u7F6E\u9996\u4E2A\u9876\u70B9",
            continueLine: "\u5355\u51FB\u7EE7\u7EED\u7ED8\u5236",
            finishLine: "\u5355\u51FB\u4EFB\u4F55\u5B58\u5728\u7684\u6807\u8BB0\u4EE5\u5B8C\u6210",
            finishPoly: "\u5355\u51FB\u7B2C\u4E00\u4E2A\u6807\u8BB0\u4EE5\u5B8C\u6210",
            finishRect: "\u5355\u51FB\u5B8C\u6210",
            startCircle: "\u5355\u51FB\u653E\u7F6E\u5706\u5FC3",
            finishCircle: "\u5355\u51FB\u5B8C\u6210\u5706\u5F62",
            placeCircleMarker: "\u70B9\u51FB\u653E\u7F6E\u5706\u5F62\u6807\u8BB0"
        },
        actions: {
            finish: "\u5B8C\u6210",
            cancel: "\u53D6\u6D88",
            removeLastVertex: "\u79FB\u9664\u6700\u540E\u7684\u9876\u70B9"
        },
        buttonTitles: {
            drawMarkerButton: "\u7ED8\u5236\u6807\u8BB0",
            drawPolyButton: "\u7ED8\u5236\u591A\u8FB9\u5F62",
            drawLineButton: "\u7ED8\u5236\u7EBF\u6BB5",
            drawCircleButton: "\u7ED8\u5236\u5706\u5F62",
            drawRectButton: "\u7ED8\u5236\u957F\u65B9\u5F62",
            editButton: "\u7F16\u8F91\u56FE\u5C42",
            dragButton: "\u62D6\u62FD\u56FE\u5C42",
            cutButton: "\u526A\u5207\u56FE\u5C42",
            deleteButton: "\u5220\u9664\u56FE\u5C42",
            drawCircleMarkerButton: "\u753B\u5706\u5708\u6807\u8BB0",
            snappingButton: "\u5C06\u62D6\u52A8\u7684\u6807\u8BB0\u6355\u6349\u5230\u5176\u4ED6\u56FE\u5C42\u548C\u9876\u70B9",
            pinningButton: "\u5C06\u5171\u4EAB\u9876\u70B9\u56FA\u5B9A\u5728\u4E00\u8D77",
            rotateButton: "\u65CB\u8F6C\u56FE\u5C42"
        }
    };
    var Xa = {
        tooltips: {
            placeMarker: "\u55AE\u64CA\u653E\u7F6E\u6A19\u8A18",
            firstVertex: "\u55AE\u64CA\u653E\u7F6E\u7B2C\u4E00\u500B\u9802\u9EDE",
            continueLine: "\u55AE\u64CA\u7E7C\u7E8C\u7E6A\u88FD",
            finishLine: "\u55AE\u64CA\u4EFB\u4F55\u5B58\u5728\u7684\u6A19\u8A18\u4EE5\u5B8C\u6210",
            finishPoly: "\u55AE\u64CA\u7B2C\u4E00\u500B\u6A19\u8A18\u4EE5\u5B8C\u6210",
            finishRect: "\u55AE\u64CA\u5B8C\u6210",
            startCircle: "\u55AE\u64CA\u653E\u7F6E\u5713\u5FC3",
            finishCircle: "\u55AE\u64CA\u5B8C\u6210\u5713\u5F62",
            placeCircleMarker: "\u9EDE\u64CA\u653E\u7F6E\u5713\u5F62\u6A19\u8A18"
        },
        actions: {
            finish: "\u5B8C\u6210",
            cancel: "\u53D6\u6D88",
            removeLastVertex: "\u79FB\u9664\u6700\u5F8C\u4E00\u500B\u9802\u9EDE"
        },
        buttonTitles: {
            drawMarkerButton: "\u653E\u7F6E\u6A19\u8A18",
            drawPolyButton: "\u7E6A\u88FD\u591A\u908A\u5F62",
            drawLineButton: "\u7E6A\u88FD\u7DDA\u6BB5",
            drawCircleButton: "\u7E6A\u88FD\u5713\u5F62",
            drawRectButton: "\u7E6A\u88FD\u65B9\u5F62",
            editButton: "\u7DE8\u8F2F\u5716\u5F62",
            dragButton: "\u79FB\u52D5\u5716\u5F62",
            cutButton: "\u88C1\u5207\u5716\u5F62",
            deleteButton: "\u522A\u9664\u5716\u5F62",
            drawCircleMarkerButton: "\u756B\u5713\u5708\u6A19\u8A18",
            snappingButton: "\u5C07\u62D6\u52D5\u7684\u6A19\u8A18\u5C0D\u9F4A\u5230\u5176\u4ED6\u5716\u5C64\u548C\u9802\u9EDE",
            pinningButton: "\u5C07\u5171\u4EAB\u9802\u9EDE\u56FA\u5B9A\u5728\u4E00\u8D77",
            rotateButton: "\u65CB\u8F49\u5716\u5F62"
        }
    };
    var Ya = {
        tooltips: {
            placeMarker: "Clique para posicionar o marcador",
            firstVertex: "Clique para posicionar o primeiro v\xE9rtice",
            continueLine: "Clique para continuar desenhando",
            finishLine: "Clique em qualquer marcador existente para finalizar",
            finishPoly: "Clique no primeiro marcador para finalizar",
            finishRect: "Clique para finalizar",
            startCircle: "Clique para posicionar o centro do c\xEDrculo",
            finishCircle: "Clique para finalizar o c\xEDrculo",
            placeCircleMarker: "Clique para posicionar o marcador circular",
            placeText: "Clique para inserir texto"
        },
        actions: {
            finish: "Finalizar",
            cancel: "Cancelar",
            removeLastVertex: "Remover \xFAltimo v\xE9rtice"
        },
        buttonTitles: {
            drawMarkerButton: "Desenhar Marcador",
            drawPolyButton: "Desenhar Pol\xEDgonos",
            drawLineButton: "Desenhar Linha Poligonal",
            drawCircleButton: "Desenhar C\xEDrculo",
            drawRectButton: "Desenhar Ret\xE2ngulo",
            editButton: "Editar Camadas",
            dragButton: "Arrastar Camadas",
            cutButton: "Recortar Camadas",
            deleteButton: "Remover Camadas",
            drawCircleMarkerButton: "Desenhar Marcador de C\xEDrculo",
            snappingButton: "Ajustar marcador arrastado a outras camadas e v\xE9rtices",
            pinningButton: "Unir v\xE9rtices compartilhados",
            rotateButton: "Rotacionar Camadas",
            drawTextButton: "Desenhar Texto",
            scaleButton: "Redimensionar Camadas",
            autoTracingButton: "Tra\xE7ado Autom\xE1tico de Linha"
        },
        measurements: {
            totalLength: "Comprimento",
            segmentLength: "Comprimento do Segmento",
            area: "\xC1rea",
            radius: "Raio",
            perimeter: "Per\xEDmetro",
            height: "Altura",
            width: "Largura",
            coordinates: "Posi\xE7\xE3o",
            coordinatesMarker: "Marcador de Posi\xE7\xE3o"
        }
    };
    var Ja = {
        tooltips: {
            placeMarker: "Clique para colocar marcador",
            firstVertex: "Clique para colocar primeiro v\xE9rtice",
            continueLine: "Clique para continuar a desenhar",
            finishLine: "Clique num marcador existente para terminar",
            finishPoly: "Clique no primeiro marcador para terminar",
            finishRect: "Clique para terminar",
            startCircle: "Clique para colocar o centro do c\xEDrculo",
            finishCircle: "Clique para terminar o c\xEDrculo",
            placeCircleMarker: "Clique para colocar marcador de c\xEDrculo",
            placeText: "Clique para colocar texto"
        },
        actions: {
            finish: "Terminar",
            cancel: "Cancelar",
            removeLastVertex: "Remover \xDAltimo V\xE9rtice"
        },
        buttonTitles: {
            drawMarkerButton: "Desenhar Marcador",
            drawPolyButton: "Desenhar Pol\xEDgonos",
            drawLineButton: "Desenhar Polilinha",
            drawCircleButton: "Desenhar C\xEDrculo",
            drawRectButton: "Desenhar Ret\xE2ngulo",
            editButton: "Editar Camadas",
            dragButton: "Arrastar Camadas",
            cutButton: "Cortar Camadas",
            deleteButton: "Remover Camadas",
            drawCircleMarkerButton: "Desenhar Marcador de C\xEDrculo",
            snappingButton: "Ajustar marcador arrastado a outras camadas e v\xE9rtices",
            pinningButton: "Unir v\xE9rtices partilhados",
            rotateButton: "Rodar Camadas",
            drawTextButton: "Desenhar Texto",
            scaleButton: "Escalar Camadas",
            autoTracingButton: "Tra\xE7ado Autom\xE1tico de Linha"
        },
        measurements: {
            totalLength: "Comprimento",
            segmentLength: "Comprimento do Segmento",
            area: "\xC1rea",
            radius: "Raio",
            perimeter: "Per\xEDmetro",
            height: "Altura",
            width: "Largura",
            coordinates: "Posi\xE7\xE3o",
            coordinatesMarker: "Marcador de Posi\xE7\xE3o"
        }
    };
    var $a = {
        tooltips: {
            placeMarker: "Kliknij, aby umie\u015Bci\u0107 znacznik",
            firstVertex: "Kliknij, aby umie\u015Bci\u0107 pierwszy wierzcho\u0142ek",
            continueLine: "Kliknij, aby kontynuowa\u0107 rysowanie",
            finishLine: "Kliknij dowolny istniej\u0105cy znacznik, aby zako\u0144czy\u0107",
            finishPoly: "Kliknij pierwszy znacznik, aby zako\u0144czy\u0107",
            finishRect: "Kliknij, aby zako\u0144czy\u0107",
            startCircle: "Kliknij, aby umie\u015Bci\u0107 \u015Brodek okr\u0119gu",
            finishCircle: "Kliknij, aby zako\u0144czy\u0107 okr\u0105g",
            placeCircleMarker: "Kliknij, aby umie\u015Bci\u0107 znacznik okr\u0119gu",
            placeText: "Kliknij, aby umie\u015Bci\u0107 tekst"
        },
        actions: {
            finish: "Zako\u0144cz",
            cancel: "Anuluj",
            removeLastVertex: "Usu\u0144 ostatni wierzcho\u0142ek"
        },
        buttonTitles: {
            drawMarkerButton: "Rysuj znacznik",
            drawPolyButton: "Rysuj wielok\u0105t",
            drawLineButton: "Rysuj lini\u0119",
            drawCircleButton: "Rysuj okr\u0105g",
            drawRectButton: "Rysuj prostok\u0105t",
            editButton: "Edytuj warstwy",
            dragButton: "Przeci\u0105gnij warstwy",
            cutButton: "Wytnij warstwy",
            deleteButton: "Usu\u0144 warstwy",
            drawCircleMarkerButton: "Rysuj znacznik okr\u0105g\u0142y",
            snappingButton: "Przyci\u0105gnij przenoszony znacznik do innych warstw i wierzcho\u0142k\xF3w",
            pinningButton: "Przypnij wsp\xF3lne wierzcho\u0142ki razem",
            rotateButton: "Obr\xF3\u0107 warstwy",
            drawTextButton: "Rysuj tekst",
            scaleButton: "Skaluj warstwy",
            autoTracingButton: "Automatyczne \u015Bledzenie linii"
        },
        measurements: {
            totalLength: "D\u0142ugo\u015B\u0107",
            segmentLength: "D\u0142ugo\u015B\u0107 odcinka",
            area: "Obszar",
            radius: "Promie\u0144",
            perimeter: "Obw\xF3d",
            height: "Wysoko\u015B\u0107",
            width: "Szeroko\u015B\u0107",
            coordinates: "Pozycja",
            coordinatesMarker: "Znacznik pozycji"
        }
    };
    var Za = {
        tooltips: {
            placeMarker: "Klicka f\xF6r att placera mark\xF6r",
            firstVertex: "Klicka f\xF6r att placera f\xF6rsta h\xF6rnet",
            continueLine: "Klicka f\xF6r att forts\xE4tta rita",
            finishLine: "Klicka p\xE5 en existerande punkt f\xF6r att slutf\xF6ra",
            finishPoly: "Klicka p\xE5 den f\xF6rsta punkten f\xF6r att slutf\xF6ra",
            finishRect: "Klicka f\xF6r att slutf\xF6ra",
            startCircle: "Klicka f\xF6r att placera cirkelns centrum",
            finishCircle: "Klicka f\xF6r att slutf\xF6ra cirkeln",
            placeCircleMarker: "Klicka f\xF6r att placera cirkelmark\xF6r"
        },
        actions: {
            finish: "Slutf\xF6r",
            cancel: "Avbryt",
            removeLastVertex: "Ta bort sista h\xF6rnet"
        },
        buttonTitles: {
            drawMarkerButton: "Rita Mark\xF6r",
            drawPolyButton: "Rita Polygoner",
            drawLineButton: "Rita Linje",
            drawCircleButton: "Rita Cirkel",
            drawRectButton: "Rita Rektangel",
            editButton: "Redigera Lager",
            dragButton: "Dra Lager",
            cutButton: "Klipp i Lager",
            deleteButton: "Ta bort Lager",
            drawCircleMarkerButton: "Rita Cirkelmark\xF6r",
            snappingButton: "Sn\xE4pp dra mark\xF6ren till andra lager och h\xF6rn",
            pinningButton: "F\xE4st delade h\xF6rn tillsammans",
            rotateButton: "Rotera lagret"
        }
    };
    var Wa = {
        tooltips: {
            placeMarker: "\u039A\u03AC\u03BD\u03C4\u03B5 \u03BA\u03BB\u03B9\u03BA \u03B3\u03B9\u03B1 \u03BD\u03B1 \u03C4\u03BF\u03C0\u03BF\u03B8\u03B5\u03C4\u03AE\u03C3\u03B5\u03C4\u03B5 \u0394\u03B5\u03AF\u03BA\u03C4\u03B7",
            firstVertex: "\u039A\u03AC\u03BD\u03C4\u03B5 \u03BA\u03BB\u03B9\u03BA \u03B3\u03B9\u03B1 \u03BD\u03B1 \u03C4\u03BF\u03C0\u03BF\u03B8\u03B5\u03C4\u03AE\u03C3\u03B5\u03C4\u03B5 \u03C4\u03BF \u03C0\u03C1\u03CE\u03C4\u03BF \u03C3\u03B7\u03BC\u03B5\u03AF\u03BF",
            continueLine: "\u039A\u03AC\u03BD\u03C4\u03B5 \u03BA\u03BB\u03B9\u03BA \u03B3\u03B9\u03B1 \u03BD\u03B1 \u03C3\u03C5\u03BD\u03B5\u03C7\u03AF\u03C3\u03B5\u03C4\u03B5 \u03BD\u03B1 \u03C3\u03C7\u03B5\u03B4\u03B9\u03AC\u03B6\u03B5\u03C4\u03B5",
            finishLine: "\u039A\u03AC\u03BD\u03C4\u03B5 \u03BA\u03BB\u03B9\u03BA \u03C3\u03B5 \u03BF\u03C0\u03BF\u03B9\u03BF\u03BD\u03B4\u03AE\u03C0\u03BF\u03C4\u03B5 \u03C5\u03C0\u03AC\u03C1\u03C7\u03BF\u03BD \u03C3\u03B7\u03BC\u03B5\u03AF\u03BF \u03B3\u03B9\u03B1 \u03BD\u03B1 \u03BF\u03BB\u03BF\u03BA\u03BB\u03B7\u03C1\u03C9\u03B8\u03B5\u03AF",
            finishPoly: "\u039A\u03AC\u03BD\u03C4\u03B5 \u03BA\u03BB\u03B9\u03BA \u03C3\u03C4\u03BF \u03C0\u03C1\u03CE\u03C4\u03BF \u03C3\u03B7\u03BC\u03B5\u03AF\u03BF \u03B3\u03B9\u03B1 \u03BD\u03B1 \u03C4\u03B5\u03BB\u03B5\u03B9\u03CE\u03C3\u03B5\u03C4\u03B5",
            finishRect: "\u039A\u03AC\u03BD\u03C4\u03B5 \u03BA\u03BB\u03B9\u03BA \u03B3\u03B9\u03B1 \u03BD\u03B1 \u03C4\u03B5\u03BB\u03B5\u03B9\u03CE\u03C3\u03B5\u03C4\u03B5",
            startCircle: "\u039A\u03AC\u03BD\u03C4\u03B5 \u03BA\u03BB\u03B9\u03BA \u03B3\u03B9\u03B1 \u03BD\u03B1 \u03C4\u03BF\u03C0\u03BF\u03B8\u03B5\u03C4\u03AE\u03C3\u03B5\u03C4\u03B5 \u03BA\u03AD\u03BD\u03C4\u03C1\u03BF \u039A\u03CD\u03BA\u03BB\u03BF\u03C5",
            finishCircle: "\u039A\u03AC\u03BD\u03C4\u03B5 \u03BA\u03BB\u03B9\u03BA \u03B3\u03B9\u03B1 \u03BD\u03B1 \u03BF\u03BB\u03BF\u03BA\u03BB\u03B7\u03C1\u03CE\u03C3\u03B5\u03C4\u03B5 \u03C4\u03BF\u03BD \u039A\u03CD\u03BA\u03BB\u03BF",
            placeCircleMarker: "\u039A\u03AC\u03BD\u03C4\u03B5 \u03BA\u03BB\u03B9\u03BA \u03B3\u03B9\u03B1 \u03BD\u03B1 \u03C4\u03BF\u03C0\u03BF\u03B8\u03B5\u03C4\u03AE\u03C3\u03B5\u03C4\u03B5 \u039A\u03C5\u03BA\u03BB\u03B9\u03BA\u03CC \u0394\u03B5\u03AF\u03BA\u03C4\u03B7"
        },
        actions: {
            finish: "\u03A4\u03AD\u03BB\u03BF\u03C2",
            cancel: "\u0391\u03BA\u03CD\u03C1\u03C9\u03C3\u03B7",
            removeLastVertex: "\u039A\u03B1\u03C4\u03AC\u03C1\u03B3\u03B7\u03C3\u03B7 \u03C4\u03B5\u03BB\u03B5\u03C5\u03C4\u03B1\u03AF\u03BF\u03C5 \u03C3\u03B7\u03BC\u03B5\u03AF\u03BF\u03C5"
        },
        buttonTitles: {
            drawMarkerButton: "\u03A3\u03C7\u03B5\u03B4\u03AF\u03B1\u03C3\u03B7 \u0394\u03B5\u03AF\u03BA\u03C4\u03B7",
            drawPolyButton: "\u03A3\u03C7\u03B5\u03B4\u03AF\u03B1\u03C3\u03B7 \u03A0\u03BF\u03BB\u03C5\u03B3\u03CE\u03BD\u03BF\u03C5",
            drawLineButton: "\u03A3\u03C7\u03B5\u03B4\u03AF\u03B1\u03C3\u03B7 \u0393\u03C1\u03B1\u03BC\u03BC\u03AE\u03C2",
            drawCircleButton: "\u03A3\u03C7\u03B5\u03B4\u03AF\u03B1\u03C3\u03B7 \u039A\u03CD\u03BA\u03BB\u03BF\u03C5",
            drawRectButton: "\u03A3\u03C7\u03B5\u03B4\u03AF\u03B1\u03C3\u03B7 \u039F\u03C1\u03B8\u03BF\u03B3\u03C9\u03BD\u03AF\u03BF\u03C5",
            editButton: "\u0395\u03C0\u03B5\u03BE\u03B5\u03C1\u03B3\u03B1\u03C3\u03AF\u03B1 \u0395\u03C0\u03B9\u03C0\u03AD\u03B4\u03C9\u03BD",
            dragButton: "\u039C\u03B5\u03C4\u03B1\u03C6\u03BF\u03C1\u03AC \u0395\u03C0\u03B9\u03C0\u03AD\u03B4\u03C9\u03BD",
            cutButton: "\u0391\u03C0\u03BF\u03BA\u03BF\u03C0\u03AE \u0395\u03C0\u03B9\u03C0\u03AD\u03B4\u03C9\u03BD",
            deleteButton: "\u039A\u03B1\u03C4\u03AC\u03C1\u03B3\u03B7\u03C3\u03B7 \u0395\u03C0\u03B9\u03C0\u03AD\u03B4\u03C9\u03BD",
            drawCircleMarkerButton: "\u03A3\u03C7\u03B5\u03B4\u03AF\u03B1\u03C3\u03B7 \u039A\u03C5\u03BA\u03BB\u03B9\u03BA\u03BF\u03CD \u0394\u03B5\u03AF\u03BA\u03C4\u03B7",
            snappingButton: "\u03A0\u03C1\u03BF\u03C3\u03BA\u03CC\u03BB\u03BB\u03B7\u03C3\u03B7 \u03C4\u03BF\u03C5 \u0394\u03B5\u03AF\u03BA\u03C4\u03B7 \u03BC\u03B5\u03C4\u03B1\u03C6\u03BF\u03C1\u03AC\u03C2 \u03C3\u03B5 \u03AC\u03BB\u03BB\u03B1 \u0395\u03C0\u03AF\u03C0\u03B5\u03B4\u03B1 \u03BA\u03B1\u03B9 \u039A\u03BF\u03C1\u03C5\u03C6\u03AD\u03C2",
            pinningButton: "\u03A0\u03B5\u03C1\u03B9\u03BA\u03BF\u03C0\u03AE \u03BA\u03BF\u03B9\u03BD\u03CE\u03BD \u03BA\u03BF\u03C1\u03C5\u03C6\u03CE\u03BD \u03BC\u03B1\u03B6\u03AF",
            rotateButton: "\u03A0\u03B5\u03C1\u03B9\u03C3\u03C4\u03C1\u03AD\u03C8\u03C4\u03B5 \u03C4\u03BF \u03C3\u03C4\u03C1\u03CE\u03BC\u03B1"
        }
    };
    var Qa = {
        tooltips: {
            placeMarker: "Kattintson a jel\xF6l\u0151 elhelyez\xE9s\xE9hez",
            firstVertex: "Kattintson az els\u0151 pont elhelyez\xE9s\xE9hez",
            continueLine: "Kattintson a k\xF6vetkez\u0151 pont elhelyez\xE9s\xE9hez",
            finishLine: "A befejez\xE9shez kattintson egy megl\xE9v\u0151 pontra",
            finishPoly: "A befejez\xE9shez kattintson az els\u0151 pontra",
            finishRect: "Kattintson a befejez\xE9shez",
            startCircle: "Kattintson a k\xF6r k\xF6z\xE9ppontj\xE1nak elhelyez\xE9s\xE9hez",
            finishCircle: "Kattintson a k\xF6r befejez\xE9s\xE9hez",
            placeCircleMarker: "Kattintson a k\xF6rjel\xF6l\u0151 elhelyez\xE9s\xE9hez",
			placeText: "Kattintson a sz\xF6veg besz\u00FAr\xE1s\xE1hoz"
        },
        actions: {
            finish: "Befejez\xE9s",
            cancel: "M\xE9gse",
            removeLastVertex: "Utols\xF3 pont elt\xE1vol\xEDt\xE1sa"
        },
        buttonTitles: {
            drawMarkerButton: "Jel\xF6l\u0151 elhelyez\xE9se",
            drawPolyButton: "Poligon rajzol\xE1sa",
            drawLineButton: "Vonal rajzol\xE1sa",
            drawCircleButton: "K\xF6r rajzol\xE1sa",
            drawRectButton: "N\xE9gyzet rajzol\xE1sa",
            editButton: "Szerkeszt\xE9s",
            dragButton: "Mozgat\xE1s",
            cutButton: "V\xE1g\xE1s",
            deleteButton: "T\xF6rl\xE9s",
            drawCircleMarkerButton: "K\xF6r jel\xF6l\u0151 rajzol\xE1sa",
            snappingButton: "Kapcsolja a jel\xF6lt\u0151t m\xE1sik elemhez vagy ponthoz",
            pinningButton: "K\xF6z\xF6s pontok \xF6sszek\xF6t\xE9se",
            rotateButton: "F\xF3lia elforgat\xE1sa",
			drawTextButton: "Sz\xF6veg besz\u00FAr\xE1sa"
        }
    };
    var to = {
        tooltips: {
            placeMarker: "Tryk for at placere en mark\xF8r",
            firstVertex: "Tryk for at placere det f\xF8rste punkt",
            continueLine: "Tryk for at forts\xE6tte linjen",
            finishLine: "Tryk p\xE5 et eksisterende punkt for at afslutte",
            finishPoly: "Tryk p\xE5 det f\xF8rste punkt for at afslutte",
            finishRect: "Tryk for at afslutte",
            startCircle: "Tryk for at placere cirklens center",
            finishCircle: "Tryk for at afslutte cirklen",
            placeCircleMarker: "Tryk for at placere en cirkelmark\xF8r"
        },
        actions: {
            finish: "Afslut",
            cancel: "Afbryd",
            removeLastVertex: "Fjern sidste punkt"
        },
        buttonTitles: {
            drawMarkerButton: "Placer mark\xF8r",
            drawPolyButton: "Tegn polygon",
            drawLineButton: "Tegn linje",
            drawCircleButton: "Tegn cirkel",
            drawRectButton: "Tegn firkant",
            editButton: "Rediger",
            dragButton: "Tr\xE6k",
            cutButton: "Klip",
            deleteButton: "Fjern",
            drawCircleMarkerButton: "Tegn cirkelmark\xF8r",
            snappingButton: "Fastg\xF8r trukket mark\xF8r til andre elementer",
            pinningButton: "Sammenl\xE6g delte elementer",
            rotateButton: "Roter laget"
        }
    };
    var eo = {
        tooltips: {
            placeMarker: "Klikk for \xE5 plassere punkt",
            firstVertex: "Klikk for \xE5 plassere f\xF8rste punkt",
            continueLine: "Klikk for \xE5 tegne videre",
            finishLine: "Klikk p\xE5 et eksisterende punkt for \xE5 fullf\xF8re",
            finishPoly: "Klikk f\xF8rste punkt for \xE5 fullf\xF8re",
            finishRect: "Klikk for \xE5 fullf\xF8re",
            startCircle: "Klikk for \xE5 sette sirkel midtpunkt",
            finishCircle: "Klikk for \xE5 fullf\xF8re sirkel",
            placeCircleMarker: "Klikk for \xE5 plassere sirkel",
            placeText: "Klikk for \xE5 plassere tekst"
        },
        actions: {
            finish: "Fullf\xF8r",
            cancel: "Kanseller",
            removeLastVertex: "Fjern forrige punkt"
        },
        buttonTitles: {
            drawMarkerButton: "Tegn punkt",
            drawPolyButton: "Tegn flate",
            drawLineButton: "Tegn linje",
            drawCircleButton: "Tegn sirkel",
            drawRectButton: "Tegn rektangel",
            editButton: "Rediger objekter",
            dragButton: "Dra objekter",
            cutButton: "Kutt objekter",
            deleteButton: "Fjern objekter",
            drawCircleMarkerButton: "Tegn sirkel-punkt",
            snappingButton: "Fest dratt punkt til andre objekter og punkt",
            pinningButton: "Pin delte punkter sammen",
            rotateButton: "Rot\xE9r objekter",
            drawTextButton: "Tegn tekst",
            scaleButton: "Skal\xE9r objekter",
            autoTracingButton: "Automatisk sporing av linje"
        },
        measurements: {
            totalLength: "Lengde",
            segmentLength: "Segmentlengde",
            area: "Omr\xE5de",
            radius: "Radius",
            perimeter: "Omriss",
            height: "H\xF8yde",
            width: "Bredde",
            coordinates: "Posisjon",
            coordinatesMarker: "Posisjonsmark\xF8r"
        }
    };
    var io = {
        tooltips: {
            placeMarker: "\u06A9\u0644\u06CC\u06A9 \u0628\u0631\u0627\u06CC \u062C\u0627\u0646\u0645\u0627\u06CC\u06CC \u0646\u0634\u0627\u0646",
            firstVertex: "\u06A9\u0644\u06CC\u06A9 \u0628\u0631\u0627\u06CC \u0631\u0633\u0645 \u0627\u0648\u0644\u06CC\u0646 \u0631\u0623\u0633",
            continueLine: "\u06A9\u0644\u06CC\u06A9 \u0628\u0631\u0627\u06CC \u0627\u062F\u0627\u0645\u0647 \u0631\u0633\u0645",
            finishLine: "\u06A9\u0644\u06CC\u06A9 \u0631\u0648\u06CC \u0647\u0631 \u0646\u0634\u0627\u0646 \u0645\u0648\u062C\u0648\u062F \u0628\u0631\u0627\u06CC \u067E\u0627\u06CC\u0627\u0646",
            finishPoly: "\u06A9\u0644\u06CC\u06A9 \u0631\u0648\u06CC \u0627\u0648\u0644\u06CC\u0646 \u0646\u0634\u0627\u0646 \u0628\u0631\u0627\u06CC \u067E\u0627\u06CC\u0627\u0646",
            finishRect: "\u06A9\u0644\u06CC\u06A9 \u0628\u0631\u0627\u06CC \u067E\u0627\u06CC\u0627\u0646",
            startCircle: "\u06A9\u0644\u06CC\u06A9 \u0628\u0631\u0627\u06CC \u0631\u0633\u0645 \u0645\u0631\u06A9\u0632 \u062F\u0627\u06CC\u0631\u0647",
            finishCircle: "\u06A9\u0644\u06CC\u06A9 \u0628\u0631\u0627\u06CC \u067E\u0627\u06CC\u0627\u0646 \u0631\u0633\u0645 \u062F\u0627\u06CC\u0631\u0647",
            placeCircleMarker: "\u06A9\u0644\u06CC\u06A9 \u0628\u0631\u0627\u06CC \u0631\u0633\u0645 \u0646\u0634\u0627\u0646 \u062F\u0627\u06CC\u0631\u0647",
            placeText: "\u06A9\u0644\u06CC\u06A9 \u0628\u0631\u0627\u06CC \u0646\u0648\u0634\u062A\u0646 \u0645\u062A\u0646"
        },
        actions: {
            finish: "\u067E\u0627\u06CC\u0627\u0646",
            cancel: "\u0644\u0641\u0648",
            removeLastVertex: "\u062D\u0630\u0641 \u0622\u062E\u0631\u06CC\u0646 \u0631\u0623\u0633"
        },
        buttonTitles: {
            drawMarkerButton: "\u062F\u0631\u062C \u0646\u0634\u0627\u0646",
            drawPolyButton: "\u0631\u0633\u0645 \u0686\u0646\u062F\u0636\u0644\u0639\u06CC",
            drawLineButton: "\u0631\u0633\u0645 \u062E\u0637",
            drawCircleButton: "\u0631\u0633\u0645 \u062F\u0627\u06CC\u0631\u0647",
            drawRectButton: "\u0631\u0633\u0645 \u0686\u0647\u0627\u0631\u0636\u0644\u0639\u06CC",
            editButton: "\u0648\u06CC\u0631\u0627\u06CC\u0634 \u0644\u0627\u06CC\u0647\u200C\u0647\u0627",
            dragButton: "\u062C\u0627\u0628\u062C\u0627\u06CC\u06CC \u0644\u0627\u06CC\u0647\u200C\u0647\u0627",
            cutButton: "\u0628\u0631\u0634 \u0644\u0627\u06CC\u0647\u200C\u0647\u0627",
            deleteButton: "\u062D\u0630\u0641 \u0644\u0627\u06CC\u0647\u200C\u0647\u0627",
            drawCircleMarkerButton: "\u0631\u0633\u0645 \u0646\u0634\u0627\u0646 \u062F\u0627\u06CC\u0631\u0647",
            snappingButton: "\u0646\u0634\u0627\u0646\u06AF\u0631 \u0631\u0627 \u0628\u0647 \u0644\u0627\u06CC\u0647\u200C\u0647\u0627 \u0648 \u0631\u0626\u0648\u0633 \u062F\u06CC\u06AF\u0631 \u0628\u06A9\u0634\u06CC\u062F",
            pinningButton: "\u0631\u0626\u0648\u0633 \u0645\u0634\u062A\u0631\u06A9 \u0631\u0627 \u0628\u0627 \u0647\u0645 \u067E\u06CC\u0646 \u06A9\u0646\u06CC\u062F",
            rotateButton: "\u0686\u0631\u062E\u0634 \u0644\u0627\u06CC\u0647",
            drawTextButton: "\u0631\u0633\u0645 \u0645\u062A\u0646",
            scaleButton: "\u0645\u0642\u06CC\u0627\u0633\u200C\u06AF\u0630\u0627\u0631\u06CC",
            autoTracingButton: "\u0631\u062F\u06CC\u0627\u0628 \u062E\u0648\u062F\u06A9\u0627\u0631"
        },
        measurements: {
            totalLength: "\u0637\u0648\u0644",
            segmentLength: "\u0637\u0648\u0644 \u0628\u062E\u0634",
            area: "\u0646\u0627\u062D\u06CC\u0647",
            radius: "\u0634\u0639\u0627\u0639",
            perimeter: "\u0645\u062D\u06CC\u0637",
            height: "\u0627\u0631\u062A\u0641\u0627\u0639",
            width: "\u0639\u0631\u0636",
            coordinates: "\u0645\u0648\u0642\u0639\u06CC\u062A",
            coordinatesMarker: "\u0645\u0648\u0642\u0639\u06CC\u062A \u0646\u0634\u0627\u0646"
        }
    };
    var ro = {
        tooltips: {
            placeMarker: "\u041D\u0430\u0442\u0438\u0441\u043D\u0456\u0442\u044C, \u0449\u043E\u0431 \u043D\u0430\u043D\u0435\u0441\u0442\u0438 \u043C\u0430\u0440\u043A\u0435\u0440",
            firstVertex: "\u041D\u0430\u0442\u0438\u0441\u043D\u0456\u0442\u044C, \u0449\u043E\u0431 \u043D\u0430\u043D\u0435\u0441\u0442\u0438 \u043F\u0435\u0440\u0448\u0443 \u0432\u0435\u0440\u0448\u0438\u043D\u0443",
            continueLine: "\u041D\u0430\u0442\u0438\u0441\u043D\u0456\u0442\u044C, \u0449\u043E\u0431 \u043F\u0440\u043E\u0434\u043E\u0432\u0436\u0438\u0442\u0438 \u043C\u0430\u043B\u044E\u0432\u0430\u0442\u0438",
            finishLine: "\u041D\u0430\u0442\u0438\u0441\u043D\u0456\u0442\u044C \u0431\u0443\u0434\u044C-\u044F\u043A\u0438\u0439 \u0456\u0441\u043D\u0443\u044E\u0447\u0438\u0439 \u043C\u0430\u0440\u043A\u0435\u0440 \u0434\u043B\u044F \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u043D\u044F",
            finishPoly: "\u0412\u0438\u0431\u0435\u0440\u0456\u0442\u044C \u043F\u0435\u0440\u0448\u0438\u0439 \u043C\u0430\u0440\u043A\u0435\u0440, \u0449\u043E\u0431 \u0437\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u0438",
            finishRect: "\u041D\u0430\u0442\u0438\u0441\u043D\u0456\u0442\u044C, \u0449\u043E\u0431 \u0437\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u0438",
            startCircle: "\u041D\u0430\u0442\u0438\u0441\u043D\u0456\u0442\u044C, \u0449\u043E\u0431 \u0434\u043E\u0434\u0430\u0442\u0438 \u0446\u0435\u043D\u0442\u0440 \u043A\u043E\u043B\u0430",
            finishCircle: "\u041D\u0430\u0442\u0438\u0441\u043D\u0456\u0442\u044C, \u0449\u043E\u0431 \u0437\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u0438 \u043A\u043E\u043B\u043E",
            placeCircleMarker: "\u041D\u0430\u0442\u0438\u0441\u043D\u0456\u0442\u044C, \u0449\u043E\u0431 \u043D\u0430\u043D\u0435\u0441\u0442\u0438 \u043A\u0440\u0443\u0433\u043E\u0432\u0438\u0439 \u043C\u0430\u0440\u043A\u0435\u0440"
        },
        actions: {
            finish: "\u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u0438",
            cancel: "\u0412\u0456\u0434\u043C\u0456\u043D\u0438\u0442\u0438",
            removeLastVertex: "\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u043F\u043E\u043F\u0435\u0440\u0435\u0434\u043D\u044E \u0432\u0435\u0440\u0448\u0438\u043D\u0443"
        },
        buttonTitles: {
            drawMarkerButton: "\u041C\u0430\u043B\u044E\u0432\u0430\u0442\u0438 \u043C\u0430\u0440\u043A\u0435\u0440",
            drawPolyButton: "\u041C\u0430\u043B\u044E\u0432\u0430\u0442\u0438 \u043F\u043E\u043B\u0456\u0433\u043E\u043D",
            drawLineButton: "\u041C\u0430\u043B\u044E\u0432\u0430\u0442\u0438 \u043A\u0440\u0438\u0432\u0443",
            drawCircleButton: "\u041C\u0430\u043B\u044E\u0432\u0430\u0442\u0438 \u043A\u043E\u043B\u043E",
            drawRectButton: "\u041C\u0430\u043B\u044E\u0432\u0430\u0442\u0438 \u043F\u0440\u044F\u043C\u043E\u043A\u0443\u0442\u043D\u0438\u043A",
            editButton: "\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438 \u0448\u0430\u0440\u0438",
            dragButton: "\u041F\u0435\u0440\u0435\u043D\u0435\u0441\u0442\u0438 \u0448\u0430\u0440\u0438",
            cutButton: "\u0412\u0438\u0440\u0456\u0437\u0430\u0442\u0438 \u0448\u0430\u0440\u0438",
            deleteButton: "\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u0448\u0430\u0440\u0438",
            drawCircleMarkerButton: "\u041C\u0430\u043B\u044E\u0432\u0430\u0442\u0438 \u043A\u0440\u0443\u0433\u043E\u0432\u0438\u0439 \u043C\u0430\u0440\u043A\u0435\u0440",
            snappingButton: "\u041F\u0440\u0438\u0432\u2019\u044F\u0437\u0430\u0442\u0438 \u043F\u0435\u0440\u0435\u0442\u044F\u0433\u043D\u0443\u0442\u0438\u0439 \u043C\u0430\u0440\u043A\u0435\u0440 \u0434\u043E \u0456\u043D\u0448\u0438\u0445 \u0448\u0430\u0440\u0456\u0432 \u0442\u0430 \u0432\u0435\u0440\u0448\u0438\u043D",
            pinningButton: "\u0417\u0432'\u044F\u0437\u0430\u0442\u0438 \u0441\u043F\u0456\u043B\u044C\u043D\u0456 \u0432\u0435\u0440\u0448\u0438\u043D\u0438 \u0440\u0430\u0437\u043E\u043C",
            rotateButton: "\u041F\u043E\u0432\u0435\u0440\u043D\u0443\u0442\u0438 \u0448\u0430\u0440"
        }
    };
    var no = {
        tooltips: {
            placeMarker: "\u0130\u015Faret\xE7i yerle\u015Ftirmek i\xE7in t\u0131klay\u0131n",
            firstVertex: "\u0130lk tepe noktas\u0131n\u0131 yerle\u015Ftirmek i\xE7in t\u0131klay\u0131n",
            continueLine: "\xC7izime devam etmek i\xE7in t\u0131klay\u0131n",
            finishLine: "Bitirmek i\xE7in mevcut herhangi bir i\u015Faret\xE7iyi t\u0131klay\u0131n",
            finishPoly: "Bitirmek i\xE7in ilk i\u015Faret\xE7iyi t\u0131klay\u0131n",
            finishRect: "Bitirmek i\xE7in t\u0131klay\u0131n",
            startCircle: "Daire merkezine yerle\u015Ftirmek i\xE7in t\u0131klay\u0131n",
            finishCircle: "Daireyi bitirmek i\xE7in t\u0131klay\u0131n",
            placeCircleMarker: "Daire i\u015Faret\xE7isi yerle\u015Ftirmek i\xE7in t\u0131klay\u0131n"
        },
        actions: {
            finish: "Bitir",
            cancel: "\u0130ptal",
            removeLastVertex: "Son k\xF6\u015Feyi kald\u0131r"
        },
        buttonTitles: {
            drawMarkerButton: "\xC7izim \u0130\u015Faret\xE7isi",
            drawPolyButton: "\xC7okgenler \xE7iz",
            drawLineButton: "\xC7oklu \xE7izgi \xE7iz",
            drawCircleButton: "\xC7ember \xE7iz",
            drawRectButton: "Dikd\xF6rtgen \xE7iz",
            editButton: "Katmanlar\u0131 d\xFCzenle",
            dragButton: "Katmanlar\u0131 s\xFCr\xFCkle",
            cutButton: "Katmanlar\u0131 kes",
            deleteButton: "Katmanlar\u0131 kald\u0131r",
            drawCircleMarkerButton: "Daire i\u015Faret\xE7isi \xE7iz",
            snappingButton: "S\xFCr\xFCklenen i\u015Faret\xE7iyi di\u011Fer katmanlara ve k\xF6\u015Felere yap\u0131\u015Ft\u0131r",
            pinningButton: "Payla\u015F\u0131lan k\xF6\u015Feleri birbirine sabitle",
            rotateButton: "Katman\u0131 d\xF6nd\xFCr"
        }
    };
    var so = {
        tooltips: {
            placeMarker: "Kliknut\xEDm vytvo\u0159\xEDte zna\u010Dku",
            firstVertex: "Kliknut\xEDm vytvo\u0159\xEDte prvn\xED objekt",
            continueLine: "Kliknut\xEDm pokra\u010Dujte v kreslen\xED",
            finishLine: "Kliknut\xED na libovolnou existuj\xEDc\xED zna\u010Dku pro dokon\u010Den\xED",
            finishPoly: "Vyberte prvn\xED bod pro dokon\u010Den\xED",
            finishRect: "Klikn\u011Bte pro dokon\u010Den\xED",
            startCircle: "Kliknut\xEDm p\u0159idejte st\u0159ed kruhu",
            finishCircle: "\u041D\u0430\u0436\u043C\u0438\u0442\u0435, \u0447\u0442\u043E\u0431\u044B \u0437\u0430\u0434\u0430\u0442\u044C \u0440\u0430\u0434\u0438\u0443\u0441",
            placeCircleMarker: "Kliknut\xEDm nastavte polom\u011Br"
        },
        actions: {
            finish: "Dokon\u010Dit",
            cancel: "Zru\u0161it",
            removeLastVertex: "Zru\u0161it posledn\xED akci"
        },
        buttonTitles: {
            drawMarkerButton: "P\u0159idat zna\u010Dku",
            drawPolyButton: "Nakreslit polygon",
            drawLineButton: "Nakreslit k\u0159ivku",
            drawCircleButton: "Nakreslit kruh",
            drawRectButton: "Nakreslit obd\xE9ln\xEDk",
            editButton: "Upravit vrstvu",
            dragButton: "P\u0159eneste vrstvu",
            cutButton: "Vyjmout vrstvu",
            deleteButton: "Smazat vrstvu",
            drawCircleMarkerButton: "P\u0159idat kruhovou zna\u010Dku",
            snappingButton: "Nav\xE1zat ta\u017Enou zna\u010Dku k dal\u0161\xEDm vrstv\xE1m a vrchol\u016Fm",
            pinningButton: "Spojit spole\u010Dn\xE9 body dohromady",
            rotateButton: "Oto\u010Dte vrstvu"
        }
    };
    var ao = {
        tooltips: {
            placeMarker: "\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u30DE\u30FC\u30AB\u30FC\u3092\u914D\u7F6E",
            firstVertex: "\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u6700\u521D\u306E\u9802\u70B9\u3092\u914D\u7F6E",
            continueLine: "\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u63CF\u753B\u3092\u7D9A\u3051\u308B",
            finishLine: "\u4EFB\u610F\u306E\u30DE\u30FC\u30AB\u30FC\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u7D42\u4E86",
            finishPoly: "\u6700\u521D\u306E\u30DE\u30FC\u30AB\u30FC\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u7D42\u4E86",
            finishRect: "\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u7D42\u4E86",
            startCircle: "\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u5186\u306E\u4E2D\u5FC3\u3092\u914D\u7F6E",
            finishCircle: "\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u5186\u306E\u63CF\u753B\u3092\u7D42\u4E86",
            placeCircleMarker: "\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u5186\u30DE\u30FC\u30AB\u30FC\u3092\u914D\u7F6E",
            placeText: "\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u30C6\u30AD\u30B9\u30C8\u3092\u914D\u7F6E"
        },
        actions: {
            finish: "\u7D42\u4E86",
            cancel: "\u30AD\u30E3\u30F3\u30BB\u30EB",
            removeLastVertex: "\u6700\u5F8C\u306E\u9802\u70B9\u3092\u524A\u9664"
        },
        buttonTitles: {
            drawMarkerButton: "\u30DE\u30FC\u30AB\u30FC\u3092\u63CF\u753B",
            drawPolyButton: "\u30DD\u30EA\u30B4\u30F3\u3092\u63CF\u753B",
            drawLineButton: "\u6298\u308C\u7DDA\u3092\u63CF\u753B",
            drawCircleButton: "\u5186\u3092\u63CF\u753B",
            drawRectButton: "\u77E9\u5F62\u3092\u63CF\u753B",
            editButton: "\u30EC\u30A4\u30E4\u30FC\u3092\u7DE8\u96C6",
            dragButton: "\u30EC\u30A4\u30E4\u30FC\u3092\u30C9\u30E9\u30C3\u30B0",
            cutButton: "\u30EC\u30A4\u30E4\u30FC\u3092\u5207\u308A\u53D6\u308A",
            deleteButton: "\u30EC\u30A4\u30E4\u30FC\u3092\u524A\u9664",
            drawCircleMarkerButton: "\u5186\u30DE\u30FC\u30AB\u30FC\u3092\u63CF\u753B",
            snappingButton: "\u30C9\u30E9\u30C3\u30B0\u3057\u305F\u30DE\u30FC\u30AB\u30FC\u3092\u4ED6\u306E\u30EC\u30A4\u30E4\u30FC\u3084\u9802\u70B9\u306B\u30B9\u30CA\u30C3\u30D7\u3059\u308B",
            pinningButton: "\u5171\u6709\u3059\u308B\u9802\u70B9\u3092\u540C\u6642\u306B\u52D5\u304B\u3059",
            rotateButton: "\u30EC\u30A4\u30E4\u30FC\u3092\u56DE\u8EE2",
            drawTextButton: "\u30C6\u30AD\u30B9\u30C8\u3092\u63CF\u753B"
        }
    };
    var oo = {
        tooltips: {
            placeMarker: "Klikkaa asettaaksesi merkin",
            firstVertex: "Klikkaa asettaakseni ensimm\xE4isen osuuden",
            continueLine: "Klikkaa jatkaaksesi piirt\xE4mist\xE4",
            finishLine: "Klikkaa olemassa olevaa merkki\xE4 lopettaaksesi",
            finishPoly: "Klikkaa ensimm\xE4ist\xE4 merkki\xE4 lopettaaksesi",
            finishRect: "Klikkaa lopettaaksesi",
            startCircle: "Klikkaa asettaaksesi ympyr\xE4n keskipisteen",
            finishCircle: "Klikkaa lopettaaksesi ympyr\xE4n",
            placeCircleMarker: "Klikkaa asettaaksesi ympyr\xE4merkin",
            placeText: "Klikkaa asettaaksesi tekstin"
        },
        actions: {
            finish: "Valmis",
            cancel: "Peruuta",
            removeLastVertex: "Poista viimeinen osuus"
        },
        buttonTitles: {
            drawMarkerButton: "Piirr\xE4 merkkej\xE4",
            drawPolyButton: "Piirr\xE4 monikulmioita",
            drawLineButton: "Piirr\xE4 viivoja",
            drawCircleButton: "Piirr\xE4 ympyr\xE4",
            drawRectButton: "Piirr\xE4 neliskulmioita",
            editButton: "Muokkaa",
            dragButton: "Siirr\xE4",
            cutButton: "Leikkaa",
            deleteButton: "Poista",
            drawCircleMarkerButton: "Piirr\xE4 ympyr\xE4merkki",
            snappingButton: "Kiinnit\xE4 siirrett\xE4v\xE4 merkki toisiin muotoihin",
            pinningButton: "Kiinnit\xE4 jaetut muodot yhteen",
            rotateButton: "K\xE4\xE4nn\xE4",
            drawTextButton: "Piirr\xE4 teksti\xE4"
        }
    };
    var lo = {
        tooltips: {
            placeMarker: "\uB9C8\uCEE4 \uC704\uCE58\uB97C \uD074\uB9AD\uD558\uC138\uC694",
            firstVertex: "\uCCAB\uBC88\uC9F8 \uAF2D\uC9C0\uC810 \uC704\uCE58\uC744 \uD074\uB9AD\uD558\uC138\uC694",
            continueLine: "\uACC4\uC18D \uADF8\uB9AC\uB824\uBA74 \uD074\uB9AD\uD558\uC138\uC694",
            finishLine: "\uB05D\uB0B4\uB824\uBA74 \uAE30\uC874 \uB9C8\uCEE4\uB97C \uD074\uB9AD\uD558\uC138\uC694",
            finishPoly: "\uB05D\uB0B4\uB824\uBA74 \uCC98\uC74C \uB9C8\uCEE4\uB97C \uD074\uB9AD\uD558\uC138\uC694",
            finishRect: "\uB05D\uB0B4\uB824\uBA74 \uD074\uB9AD\uD558\uC138\uC694",
            startCircle: "\uC6D0\uC758 \uC911\uC2EC\uC774 \uB420 \uC704\uCE58\uB97C \uD074\uB9AD\uD558\uC138\uC694",
            finishCircle: "\uC6D0\uC744 \uB05D\uB0B4\uB824\uBA74 \uD074\uB9AD\uD558\uC138\uC694",
            placeCircleMarker: "\uC6D0 \uB9C8\uCEE4 \uC704\uCE58\uB97C \uD074\uB9AD\uD558\uC138\uC694",
            placeText: "\uD14D\uC2A4\uD2B8 \uC704\uCE58\uB97C \uD074\uB9AD\uD558\uC138\uC694"
        },
        actions: {
            finish: "\uB05D\uB0B4\uAE30",
            cancel: "\uCDE8\uC18C",
            removeLastVertex: "\uB9C8\uC9C0\uB9C9 \uAF2D\uC9C0\uC810 \uC81C\uAC70"
        },
        buttonTitles: {
            drawMarkerButton: "\uB9C8\uCEE4 \uADF8\uB9AC\uAE30",
            drawPolyButton: "\uB2E4\uAC01\uD615 \uADF8\uB9AC\uAE30",
            drawLineButton: "\uB2E4\uAC01\uC120 \uADF8\uB9AC\uAE30",
            drawCircleButton: "\uC6D0 \uADF8\uB9AC\uAE30",
            drawRectButton: "\uC9C1\uC0AC\uAC01\uD615 \uADF8\uB9AC\uAE30",
            editButton: "\uB808\uC774\uC5B4 \uD3B8\uC9D1\uD558\uAE30",
            dragButton: "\uB808\uC774\uC5B4 \uB04C\uAE30",
            cutButton: "\uB808\uC774\uC5B4 \uC790\uB974\uAE30",
            deleteButton: "\uB808\uC774\uC5B4 \uC81C\uAC70\uD558\uAE30",
            drawCircleMarkerButton: "\uC6D0 \uB9C8\uCEE4 \uADF8\uB9AC\uAE30",
            snappingButton: "\uC7A1\uC544\uB048 \uB9C8\uCEE4\uB97C \uB2E4\uB978 \uB808\uC774\uC5B4 \uBC0F \uAF2D\uC9C0\uC810\uC5D0 \uB4E4\uB7EC\uBD99\uAC8C \uD558\uAE30",
            pinningButton: "\uACF5\uC720 \uAF2D\uC9C0\uC810\uC744 \uD568\uAED8 \uCC0D\uAE30",
            rotateButton: "\uB808\uC774\uC5B4 \uD68C\uC804\uD558\uAE30",
            drawTextButton: "\uD14D\uC2A4\uD2B8 \uADF8\uB9AC\uAE30"
        }
    };
    var ho = {
        tooltips: {
            placeMarker: "\u041C\u0430\u0440\u043A\u0435\u0440\u0434\u0438 \u0436\u0430\u0439\u0433\u0430\u0448\u0442\u044B\u0440\u0443\u0443 \u04AF\u0447\u04AF\u043D \u0431\u0430\u0441\u044B\u04A3\u044B\u0437",
            firstVertex: "\u0411\u0438\u0440\u0438\u043D\u0447\u0438 \u0447\u043E\u043A\u0443\u043D\u0443 \u0436\u0430\u0439\u0433\u0430\u0448\u0442\u044B\u0440\u0443\u0443\u043D\u0443 \u04AF\u0447\u04AF\u043D \u0431\u0430\u0441\u044B\u04A3\u044B\u0437",
            continueLine: "\u0421\u04AF\u0440\u04E9\u0442 \u0442\u0430\u0440\u0442\u0443\u0443\u043D\u0443 \u0443\u043B\u0430\u043D\u0442\u0443\u0443 \u04AF\u0447\u04AF\u043D \u0431\u0430\u0441\u044B\u04A3\u044B\u0437",
            finishLine: "\u0410\u044F\u043A\u0442\u043E\u043E \u04AF\u0447\u04AF\u043D \u0443\u0447\u0443\u0440\u0434\u0430\u0433\u044B \u043C\u0430\u0440\u043A\u0435\u0440\u0434\u0438 \u0431\u0430\u0441\u044B\u04A3\u044B\u0437",
            finishPoly: "\u0411\u04AF\u0442\u04AF\u0440\u04AF\u04AF \u04AF\u0447\u04AF\u043D \u0431\u0438\u0440\u0438\u043D\u0447\u0438 \u043C\u0430\u0440\u043A\u0435\u0440\u0434\u0438 \u0431\u0430\u0441\u044B\u04A3\u044B\u0437",
            finishRect: "\u0411\u04AF\u0442\u04AF\u0440\u04AF\u04AF \u04AF\u0447\u04AF\u043D \u0431\u0430\u0441\u044B\u04A3\u044B\u0437",
            startCircle: "\u0410\u0439\u043B\u0430\u043D\u0430\u043D\u044B\u043D \u0431\u043E\u0440\u0431\u043E\u0440\u0443\u043D \u0436\u0430\u0439\u0433\u0430\u0448\u0442\u044B\u0440\u0443\u0443\u043D\u0443 \u04AF\u0447\u04AF\u043D \u0431\u0430\u0441\u044B\u04A3\u044B\u0437",
            finishCircle: "\u0410\u0439\u043B\u0430\u043D\u0430\u043D\u044B \u0431\u04AF\u0442\u04AF\u0440\u04AF\u04AF \u04AF\u0447\u04AF\u043D \u0431\u0430\u0441\u044B\u04A3\u044B\u0437",
            placeCircleMarker: "\u0422\u0435\u0433\u0435\u0440\u0435\u043A \u043C\u0430\u0440\u043A\u0435\u0440\u0434\u0438 \u0436\u0430\u0439\u0433\u0430\u0448\u0442\u044B\u0440\u0443\u0443 \u04AF\u0447\u04AF\u043D \u0431\u0430\u0441\u044B\u04A3\u044B\u0437",
            placeText: "\u0422\u0435\u043A\u0441\u0442\u0442\u0438 \u0436\u0430\u0439\u0433\u0430\u0448\u0442\u044B\u0440\u0443\u0443 \u04AF\u0447\u04AF\u043D \u0431\u0430\u0441\u044B\u04A3\u044B\u0437"
        },
        actions: {
            finish: "\u0410\u044F\u0433\u044B",
            cancel: "\u0416\u043E\u043A \u043A\u044B\u043B\u0443\u0443",
            removeLastVertex: "\u0410\u043A\u044B\u0440\u043A\u044B \u0447\u043E\u043A\u0443\u043D\u0443 \u04E9\u0447\u04AF\u0440\u04AF\u04AF"
        },
        buttonTitles: {
            drawMarkerButton: "\u041C\u0430\u0440\u043A\u0435\u0440\u0434\u0438 \u0447\u0438\u0437\u0443\u0443",
            drawPolyButton: "\u041F\u043E\u043B\u0438\u0433\u043E\u043D \u0447\u0438\u0437\u0443\u0443",
            drawLineButton: "\u041F\u043E\u043B\u0438\u043B\u0438\u043D\u0438\u044F \u0447\u0438\u0437\u0443\u0443",
            drawCircleButton: "\u0414\u0430\u0439\u044B\u043D\u0434\u044B \u0447\u0438\u0437\u0443\u0443",
            drawRectButton: "\u041F\u0440\u044F\u043C\u043E\u0443\u0433\u043E\u043B\u044C\u043D\u0438\u043A \u0447\u0438\u0437\u0443\u0443",
            editButton: "\u0421\u043B\u043E\u043E\u043F\u0442\u0443 \u0442\u04AF\u0437\u04E9\u0442\u04AF\u04AF",
            dragButton: "\u0421\u043B\u043E\u043E\u043F\u0442\u0443 \u043A\u0430\u0440\u0430\u043F \u0441\u04AF\u0439\u043B\u04E9\u04AF",
            cutButton: "\u0421\u043B\u043E\u043E\u043F\u0442\u0443\u043D \u0431\u0430\u0448\u044B\u043D \u043A\u0435\u0441\u04AF\u04AF",
            deleteButton: "\u0421\u043B\u043E\u043E\u043F\u0442\u0443\u043D \u04E9\u0447\u04AF\u0440\u04AF\u04AF",
            drawCircleMarkerButton: "\u0414\u0430\u0439\u044B\u043D\u0434\u044B \u043C\u0430\u0440\u043A\u0435\u0440\u0434\u0438 \u0447\u0438\u0437\u0443\u0443",
            snappingButton: "\u0411\u0430\u0448\u043A\u0430 \u0441\u043B\u043E\u043E\u043F\u0442\u043E\u0440\u0434\u0443\u043D \u0436\u0430\u043D\u0430 \u0432\u0435\u0440\u0442\u0435\u043A\u0441\u0442\u0435\u0440\u0434\u0438\u043D \u0430\u0440\u0430\u0441\u044B\u043D\u0430 \u0447\u0435\u043A\u0438\u043B\u0434\u04E9\u04E9",
            pinningButton: "\u0411\u04E9\u043B\u04AF\u0448\u043A\u04E9\u043D \u0432\u0435\u0440\u0442\u0435\u043A\u0441\u0442\u0435\u0440\u0434\u0438 \u0431\u0438\u0440\u0433\u0435 \u0442\u0443\u0442\u0443\u0448\u0442\u0443\u0440\u0443\u0443",
            rotateButton: "\u0421\u043B\u043E\u043E\u043F\u0442\u0443\u043D \u04E9\u0437\u0433\u04E9\u0440\u0442\u04AF\u04AF",
            drawTextButton: "\u0422\u0435\u043A\u0441\u0442 \u0447\u0438\u0437\u0443\u0443",
            scaleButton: "\u0421\u043B\u043E\u043E\u043F\u0442\u0443\u043D \u04E9\u043B\u0447\u04E9\u043C\u04AF\u043D \u04E9\u0437\u0433\u04E9\u0440\u0442\u04AF\u04AF",
            autoTracingButton: "\u0410\u0432\u0442\u043E\u043C\u0430\u0442\u0442\u044B\u043A \u0442\u0438\u0437\u043C\u0435\u0433\u0438 \u0447\u0438\u0437\u0443\u0443"
        },
        measurements: {
            totalLength: "\u0423\u0437\u0443\u043D\u0434\u0443\u043A",
            segmentLength: "\u0421\u0435\u0433\u043C\u0435\u043D\u0442 \u0443\u0437\u0443\u043D\u0434\u0443\u0433\u0443",
            area: "\u0410\u0439\u043C\u0430\u043A",
            radius: "\u0420\u0430\u0434\u0438\u0443\u0441",
            perimeter: "\u041F\u0435\u0440\u0438\u043C\u0435\u0442\u0440",
            height: "\u0414\u0438\u0430\u043C\u0435\u0442\u0440",
            width: "\u041A\u0435\u043D\u0447\u0438\u043B\u0438\u043A",
            coordinates: "\u041A\u043E\u043E\u0440\u0434\u0438\u043D\u0430\u0442\u0442\u0430\u0440",
            coordinatesMarker: "\u041C\u0430\u0440\u043A\u0435\u0440\u0434\u0438\u043D \u043A\u043E\u043E\u0440\u0434\u0438\u043D\u0430\u0442\u0442\u0430\u0440\u044B"
        }
    };
    var Nt = {
        en: Ga,
        de: qa,
        it: Na,
        id: za,
        ro: Fa,
        ru: Va,
        es: Ua,
        nl: ja,
        fr: Ka,
        pt_br: Ya,
        pt_pt: Ja,
        zh: Ha,
        zh_tw: Xa,
        pl: $a,
        sv: Za,
        el: Wa,
        hu: Qa,
        da: to,
        no: eo,
        fa: io,
        ua: ro,
        tr: no,
        cz: so,
        ja: ao,
        fi: oo,
        ko: lo,
        ky: ho
    };
    var mg = {
            _globalEditModeEnabled: !1,
            enableGlobalEditMode(t) {
                let e = {
                    ...t
                };
                this._globalEditModeEnabled = !0, this.Toolbar.toggleButton("editMode", this.globalEditModeEnabled()), L.PM.Utils.findLayers(this.map).forEach(r => {
                    this._isRelevantForEdit(r) && r.pm.enable(e)
                }), this.throttledReInitEdit || (this.throttledReInitEdit = L.Util.throttle(this.handleLayerAdditionInGlobalEditMode, 100, this)), this._addedLayersEdit = {}, this.map.on("layeradd", this._layerAddedEdit, this), this.map.on("layeradd", this.throttledReInitEdit, this), this._fireGlobalEditModeToggled(!0)
            },
            disableGlobalEditMode() {
                this._globalEditModeEnabled = !1, L.PM.Utils.findLayers(this.map).forEach(e => {
                    e.pm.disable()
                }), this.map.off("layeradd", this._layerAddedEdit, this), this.map.off("layeradd", this.throttledReInitEdit, this), this.Toolbar.toggleButton("editMode", this.globalEditModeEnabled()), this._fireGlobalEditModeToggled(!1)
            },
            globalEditEnabled() {
                return this.globalEditModeEnabled()
            },
            globalEditModeEnabled() {
                return this._globalEditModeEnabled
            },
            toggleGlobalEditMode(t = this.globalOptions) {
                this.globalEditModeEnabled() ? this.disableGlobalEditMode() : this.enableGlobalEditMode(t)
            },
            handleLayerAdditionInGlobalEditMode() {
                let t = this._addedLayersEdit;
                if (this._addedLayersEdit = {}, this.globalEditModeEnabled())
                    for (let e in t) {
                        let i = t[e];
                        this._isRelevantForEdit(i) && i.pm.enable({
                            ...this.globalOptions
                        })
                    }
            },
            _layerAddedEdit({
                layer: t
            }) {
                this._addedLayersEdit[L.stamp(t)] = t
            },
            _isRelevantForEdit(t) {
                return t.pm && !(t instanceof L.LayerGroup) && (!L.PM.optIn && !t.options.pmIgnore || L.PM.optIn && t.options.pmIgnore === !1) && !t._pmTempLayer && t.pm.options.allowEditing
            }
        },
        uo = mg;
    var _g = {
            _globalDragModeEnabled: !1,
            enableGlobalDragMode() {
                let t = L.PM.Utils.findLayers(this.map);
                this._globalDragModeEnabled = !0, this._addedLayersDrag = {}, t.forEach(e => {
                    this._isRelevantForDrag(e) && e.pm.enableLayerDrag()
                }), this.throttledReInitDrag || (this.throttledReInitDrag = L.Util.throttle(this.reinitGlobalDragMode, 100, this)), this.map.on("layeradd", this._layerAddedDrag, this), this.map.on("layeradd", this.throttledReInitDrag, this), this.Toolbar.toggleButton("dragMode", this.globalDragModeEnabled()), this._fireGlobalDragModeToggled(!0)
            },
            disableGlobalDragMode() {
                let t = L.PM.Utils.findLayers(this.map);
                this._globalDragModeEnabled = !1, t.forEach(e => {
                    e.pm.disableLayerDrag()
                }), this.map.off("layeradd", this._layerAddedDrag, this), this.map.off("layeradd", this.throttledReInitDrag, this), this.Toolbar.toggleButton("dragMode", this.globalDragModeEnabled()), this._fireGlobalDragModeToggled(!1)
            },
            globalDragModeEnabled() {
                return !!this._globalDragModeEnabled
            },
            toggleGlobalDragMode() {
                this.globalDragModeEnabled() ? this.disableGlobalDragMode() : this.enableGlobalDragMode()
            },
            reinitGlobalDragMode() {
                let t = this._addedLayersDrag;
                if (this._addedLayersDrag = {}, this.globalDragModeEnabled())
                    for (let e in t) {
                        let i = t[e];
                        this._isRelevantForDrag(i) && i.pm.enableLayerDrag()
                    }
            },
            _layerAddedDrag({
                layer: t
            }) {
                this._addedLayersDrag[L.stamp(t)] = t
            },
            _isRelevantForDrag(t) {
                return t.pm && !(t instanceof L.LayerGroup) && (!L.PM.optIn && !t.options.pmIgnore || L.PM.optIn && t.options.pmIgnore === !1) && !t._pmTempLayer && t.pm.options.draggable
            }
        },
        co = _g;
    var yg = {
            _globalRemovalModeEnabled: !1,
            enableGlobalRemovalMode() {
                this._globalRemovalModeEnabled = !0, this.map.eachLayer(t => {
                    this._isRelevantForRemoval(t) && (t.pm.enabled() && t.pm.disable(), t.on("click", this.removeLayer, this))
                }), this.throttledReInitRemoval || (this.throttledReInitRemoval = L.Util.throttle(this.handleLayerAdditionInGlobalRemovalMode, 100, this)), this._addedLayersRemoval = {}, this.map.on("layeradd", this._layerAddedRemoval, this), this.map.on("layeradd", this.throttledReInitRemoval, this), this.Toolbar.toggleButton("removalMode", this.globalRemovalModeEnabled()), this._fireGlobalRemovalModeToggled(!0)
            },
            disableGlobalRemovalMode() {
                this._globalRemovalModeEnabled = !1, this.map.eachLayer(t => {
                    t.off("click", this.removeLayer, this)
                }), this.map.off("layeradd", this._layerAddedRemoval, this), this.map.off("layeradd", this.throttledReInitRemoval, this), this.Toolbar.toggleButton("removalMode", this.globalRemovalModeEnabled()), this._fireGlobalRemovalModeToggled(!1)
            },
            globalRemovalEnabled() {
                return this.globalRemovalModeEnabled()
            },
            globalRemovalModeEnabled() {
                return !!this._globalRemovalModeEnabled
            },
            toggleGlobalRemovalMode() {
                this.globalRemovalModeEnabled() ? this.disableGlobalRemovalMode() : this.enableGlobalRemovalMode()
            },
            removeLayer(t) {
                let e = t.target;
                this._isRelevantForRemoval(e) && !e.pm.dragging() && (e.removeFrom(this.map.pm._getContainingLayer()), e.remove(), e instanceof L.LayerGroup ? (this._fireRemoveLayerGroup(e), this._fireRemoveLayerGroup(this.map, e)) : (e.pm._fireRemove(e), e.pm._fireRemove(this.map, e)))
            },
            _isRelevantForRemoval(t) {
                return t.pm && !(t instanceof L.LayerGroup) && (!L.PM.optIn && !t.options.pmIgnore || L.PM.optIn && t.options.pmIgnore === !1) && !t._pmTempLayer && t.pm.options.allowRemoval
            },
            handleLayerAdditionInGlobalRemovalMode() {
                let t = this._addedLayersRemoval;
                if (this._addedLayersRemoval = {}, this.globalRemovalModeEnabled())
                    for (let e in t) {
                        let i = t[e];
                        this._isRelevantForRemoval(i) && (i.pm.enabled() && i.pm.disable(), i.on("click", this.removeLayer, this))
                    }
            },
            _layerAddedRemoval({
                layer: t
            }) {
                this._addedLayersRemoval[L.stamp(t)] = t
            }
        },
        po = yg;
    var Lg = {
            _globalRotateModeEnabled: !1,
            enableGlobalRotateMode() {
                this._globalRotateModeEnabled = !0, L.PM.Utils.findLayers(this.map).filter(e => e instanceof L.Polyline).forEach(e => {
                    this._isRelevantForRotate(e) && e.pm.enableRotate()
                }), this.throttledReInitRotate || (this.throttledReInitRotate = L.Util.throttle(this.handleLayerAdditionInGlobalRotateMode, 100, this)), this._addedLayersRotate = {}, this.map.on("layeradd", this._layerAddedRotate, this), this.map.on("layeradd", this.throttledReInitRotate, this), this.Toolbar.toggleButton("rotateMode", this.globalRotateModeEnabled()), this._fireGlobalRotateModeToggled()
            },
            disableGlobalRotateMode() {
                this._globalRotateModeEnabled = !1, L.PM.Utils.findLayers(this.map).filter(e => e instanceof L.Polyline).forEach(e => {
                    e.pm.disableRotate()
                }), this.map.off("layeradd", this._layerAddedRotate, this), this.map.off("layeradd", this.throttledReInitRotate, this), this.Toolbar.toggleButton("rotateMode", this.globalRotateModeEnabled()), this._fireGlobalRotateModeToggled()
            },
            globalRotateModeEnabled() {
                return !!this._globalRotateModeEnabled
            },
            toggleGlobalRotateMode() {
                this.globalRotateModeEnabled() ? this.disableGlobalRotateMode() : this.enableGlobalRotateMode()
            },
            _isRelevantForRotate(t) {
                return t.pm && t instanceof L.Polyline && !(t instanceof L.LayerGroup) && (!L.PM.optIn && !t.options.pmIgnore || L.PM.optIn && t.options.pmIgnore === !1) && !t._pmTempLayer && t.pm.options.allowRotation
            },
            handleLayerAdditionInGlobalRotateMode() {
                let t = this._addedLayersRotate;
                if (this._addedLayersRotate = {}, this.globalRotateModeEnabled())
                    for (let e in t) {
                        let i = t[e];
                        this._isRelevantForRemoval(i) && i.pm.enableRotate()
                    }
            },
            _layerAddedRotate({
                layer: t
            }) {
                this._addedLayersRotate[L.stamp(t)] = t
            }
        },
        fo = Lg;
    var go = xt(Ne()),
        bg = {
            _fireDrawStart(t = "Draw", e = {}) {
                this.__fire(this._map, "pm:drawstart", {
                    shape: this._shape,
                    workingLayer: this._layer
                }, t, e)
            },
            _fireDrawEnd(t = "Draw", e = {}) {
                this.__fire(this._map, "pm:drawend", {
                    shape: this._shape
                }, t, e)
            },
            _fireCreate(t, e = "Draw", i = {}) {
                this.__fire(this._map, "pm:create", {
                    shape: this._shape,
                    marker: t,
                    layer: t
                }, e, i)
            },
            _fireCenterPlaced(t = "Draw", e = {}) {
                let i = t === "Draw" ? this._layer : void 0,
                    r = t !== "Draw" ? this._layer : void 0;
                this.__fire(this._layer, "pm:centerplaced", {
                    shape: this._shape,
                    workingLayer: i,
                    layer: r,
                    latlng: this._layer.getLatLng()
                }, t, e)
            },
            _fireCut(t, e, i, r = "Draw", n = {}) {
                this.__fire(t, "pm:cut", {
                    shape: this._shape,
                    layer: e,
                    originalLayer: i
                }, r, n)
            },
            _fireEdit(t = this._layer, e = "Edit", i = {}) {
                this.__fire(t, "pm:edit", {
                    layer: this._layer,
                    shape: this.getShape()
                }, e, i)
            },
            _fireEnable(t = "Edit", e = {}) {
                this.__fire(this._layer, "pm:enable", {
                    layer: this._layer,
                    shape: this.getShape()
                }, t, e)
            },
            _fireDisable(t = "Edit", e = {}) {
                this.__fire(this._layer, "pm:disable", {
                    layer: this._layer,
                    shape: this.getShape()
                }, t, e)
            },
            _fireUpdate(t = "Edit", e = {}) {
                this.__fire(this._layer, "pm:update", {
                    layer: this._layer,
                    shape: this.getShape()
                }, t, e)
            },
            _fireMarkerDragStart(t, e = void 0, i = "Edit", r = {}) {
                this.__fire(this._layer, "pm:markerdragstart", {
                    layer: this._layer,
                    markerEvent: t,
                    shape: this.getShape(),
                    indexPath: e
                }, i, r)
            },
            _fireMarkerDrag(t, e = void 0, i = "Edit", r = {}) {
                this.__fire(this._layer, "pm:markerdrag", {
                    layer: this._layer,
                    markerEvent: t,
                    shape: this.getShape(),
                    indexPath: e
                }, i, r)
            },
            _fireMarkerDragEnd(t, e = void 0, i = void 0, r = "Edit", n = {}) {
                this.__fire(this._layer, "pm:markerdragend", {
                    layer: this._layer,
                    markerEvent: t,
                    shape: this.getShape(),
                    indexPath: e,
                    intersectionReset: i
                }, r, n)
            },
            _fireDragStart(t = "Edit", e = {}) {
                this.__fire(this._layer, "pm:dragstart", {
                    layer: this._layer,
                    shape: this.getShape()
                }, t, e)
            },
            _fireDrag(t, e = "Edit", i = {}) {
                this.__fire(this._layer, "pm:drag", {
                    ...t,
                    shape: this.getShape()
                }, e, i)
            },
            _fireDragEnd(t = "Edit", e = {}) {
                this.__fire(this._layer, "pm:dragend", {
                    layer: this._layer,
                    shape: this.getShape()
                }, t, e)
            },
            _fireDragEnable(t = "Edit", e = {}) {
                this.__fire(this._layer, "pm:dragenable", {
                    layer: this._layer,
                    shape: this.getShape()
                }, t, e)
            },
            _fireDragDisable(t = "Edit", e = {}) {
                this.__fire(this._layer, "pm:dragdisable", {
                    layer: this._layer,
                    shape: this.getShape()
                }, t, e)
            },
            _fireRemove(t, e = t, i = "Edit", r = {}) {
                this.__fire(t, "pm:remove", {
                    layer: e,
                    shape: this.getShape()
                }, i, r)
            },
            _fireVertexAdded(t, e, i, r = "Edit", n = {}) {
                this.__fire(this._layer, "pm:vertexadded", {
                    layer: this._layer,
                    workingLayer: this._layer,
                    marker: t,
                    indexPath: e,
                    latlng: i,
                    shape: this.getShape()
                }, r, n)
            },
            _fireVertexRemoved(t, e, i = "Edit", r = {}) {
                this.__fire(this._layer, "pm:vertexremoved", {
                    layer: this._layer,
                    marker: t,
                    indexPath: e,
                    shape: this.getShape()
                }, i, r)
            },
            _fireVertexClick(t, e, i = "Edit", r = {}) {
                this.__fire(this._layer, "pm:vertexclick", {
                    layer: this._layer,
                    markerEvent: t,
                    indexPath: e,
                    shape: this.getShape()
                }, i, r)
            },
            _fireIntersect(t, e = this._layer, i = "Edit", r = {}) {
                this.__fire(e, "pm:intersect", {
                    layer: this._layer,
                    intersection: t,
                    shape: this.getShape()
                }, i, r)
            },
            _fireLayerReset(t, e, i = "Edit", r = {}) {
                this.__fire(this._layer, "pm:layerreset", {
                    layer: this._layer,
                    markerEvent: t,
                    indexPath: e,
                    shape: this.getShape()
                }, i, r)
            },
            _fireChange(t, e = "Edit", i = {}) {
                this.__fire(this._layer, "pm:change", {
                    layer: this._layer,
                    latlngs: t,
                    shape: this.getShape()
                }, e, i)
            },
            _fireTextChange(t, e = "Edit", i = {}) {
                this.__fire(this._layer, "pm:textchange", {
                    layer: this._layer,
                    text: t,
                    shape: this.getShape()
                }, e, i)
            },
            _fireTextFocus(t = "Edit", e = {}) {
                this.__fire(this._layer, "pm:textfocus", {
                    layer: this._layer,
                    shape: this.getShape()
                }, t, e)
            },
            _fireTextBlur(t = "Edit", e = {}) {
                this.__fire(this._layer, "pm:textblur", {
                    layer: this._layer,
                    shape: this.getShape()
                }, t, e)
            },
            _fireSnapDrag(t, e, i = "Snapping", r = {}) {
                this.__fire(t, "pm:snapdrag", e, i, r)
            },
            _fireSnap(t, e, i = "Snapping", r = {}) {
                this.__fire(t, "pm:snap", e, i, r)
            },
            _fireUnsnap(t, e, i = "Snapping", r = {}) {
                this.__fire(t, "pm:unsnap", e, i, r)
            },
            _fireRotationEnable(t, e, i = "Rotation", r = {}) {
                this.__fire(t, "pm:rotateenable", {
                    layer: this._layer,
                    helpLayer: this._rotatePoly,
                    shape: this.getShape()
                }, i, r)
            },
            _fireRotationDisable(t, e = "Rotation", i = {}) {
                this.__fire(t, "pm:rotatedisable", {
                    layer: this._layer,
                    shape: this.getShape()
                }, e, i)
            },
            _fireRotationStart(t, e, i = "Rotation", r = {}) {
                this.__fire(t, "pm:rotatestart", {
                    layer: this._rotationLayer,
                    helpLayer: this._layer,
                    startAngle: this._startAngle,
                    originLatLngs: e
                }, i, r)
            },
            _fireRotation(t, e, i, r = this._rotationLayer, n = "Rotation", s = {}) {
                this.__fire(t, "pm:rotate", {
                    layer: r,
                    helpLayer: this._layer,
                    startAngle: this._startAngle,
                    angle: r.pm.getAngle(),
                    angleDiff: e,
                    oldLatLngs: i,
                    newLatLngs: r.getLatLngs()
                }, n, s)
            },
            _fireRotationEnd(t, e, i, r = "Rotation", n = {}) {
                this.__fire(t, "pm:rotateend", {
                    layer: this._rotationLayer,
                    helpLayer: this._layer,
                    startAngle: e,
                    angle: this._rotationLayer.pm.getAngle(),
                    originLatLngs: i,
                    newLatLngs: this._rotationLayer.getLatLngs()
                }, r, n)
            },
            _fireActionClick(t, e, i, r = "Toolbar", n = {}) {
                this.__fire(this._map, "pm:actionclick", {
                    text: t.text,
                    action: t,
                    btnName: e,
                    button: i
                }, r, n)
            },
            _fireButtonClick(t, e, i = "Toolbar", r = {}) {
                this.__fire(this._map, "pm:buttonclick", {
                    btnName: t,
                    button: e
                }, i, r)
            },
            _fireLangChange(t, e, i, r, n = "Global", s = {}) {
                this.__fire(this.map, "pm:langchange", {
                    oldLang: t,
                    activeLang: e,
                    fallback: i,
                    translations: r
                }, n, s)
            },
            _fireGlobalDragModeToggled(t, e = "Global", i = {}) {
                this.__fire(this.map, "pm:globaldragmodetoggled", {
                    enabled: t,
                    map: this.map
                }, e, i)
            },
            _fireGlobalEditModeToggled(t, e = "Global", i = {}) {
                this.__fire(this.map, "pm:globaleditmodetoggled", {
                    enabled: t,
                    map: this.map
                }, e, i)
            },
            _fireGlobalRemovalModeToggled(t, e = "Global", i = {}) {
                this.__fire(this.map, "pm:globalremovalmodetoggled", {
                    enabled: t,
                    map: this.map
                }, e, i)
            },
            _fireGlobalCutModeToggled(t = "Global", e = {}) {
                this.__fire(this._map, "pm:globalcutmodetoggled", {
                    enabled: !!this._enabled,
                    map: this._map
                }, t, e)
            },
            _fireGlobalDrawModeToggled(t = "Global", e = {}) {
                this.__fire(this._map, "pm:globaldrawmodetoggled", {
                    enabled: this._enabled,
                    shape: this._shape,
                    map: this._map
                }, t, e)
            },
            _fireGlobalRotateModeToggled(t = "Global", e = {}) {
                this.__fire(this.map, "pm:globalrotatemodetoggled", {
                    enabled: this.globalRotateModeEnabled(),
                    map: this.map
                }, t, e)
            },
            _fireRemoveLayerGroup(t, e = t, i = "Edit", r = {}) {
                this.__fire(t, "pm:remove", {
                    layer: e,
                    shape: void 0
                }, i, r)
            },
            _fireKeyeventEvent(t, e, i, r = "Global", n = {}) {
                this.__fire(this.map, "pm:keyevent", {
                    event: t,
                    eventType: e,
                    focusOn: i
                }, r, n)
            },
            __fire(t, e, i, r, n = {}) {
                i = (0, go.default)(i, n, {
                    source: r
                }), L.PM.Utils._fireEvent(t, e, i)
            }
        },
        Tt = bg;
    var vg = () => ({
            _lastEvents: {
                keydown: void 0,
                keyup: void 0,
                current: void 0
            },
            _initKeyListener(t) {
                this.map = t, L.DomEvent.on(document, "keydown keyup", this._onKeyListener, this), L.DomEvent.on(window, "blur", this._onBlur, this), t.once("unload", this._unbindKeyListenerEvents, this)
            },
            _unbindKeyListenerEvents() {
                L.DomEvent.off(document, "keydown keyup", this._onKeyListener, this), L.DomEvent.off(window, "blur", this._onBlur, this)
            },
            _onKeyListener(t) {
                let e = "document";
                this.map.getContainer().contains(t.target) && (e = "map");
                let i = {
                    event: t,
                    eventType: t.type,
                    focusOn: e
                };
                this._lastEvents[t.type] = i, this._lastEvents.current = i, this.map.pm._fireKeyeventEvent(t, t.type, e)
            },
            _onBlur(t) {
                t.altKey = !1;
                let e = {
                    event: t,
                    eventType: t.type,
                    focusOn: "document"
                };
                this._lastEvents[t.type] = e, this._lastEvents.current = e
            },
            getLastKeyEvent(t = "current") {
                return this._lastEvents[t]
            },
            isShiftKeyPressed() {
                return this._lastEvents.current?.event.shiftKey
            },
            isAltKeyPressed() {
                return this._lastEvents.current?.event.altKey
            },
            isCtrlKeyPressed() {
                return this._lastEvents.current?.event.ctrlKey
            },
            isMetaKeyPressed() {
                return this._lastEvents.current?.event.metaKey
            },
            getPressedKey() {
                return this._lastEvents.current?.event.key
            }
        }),
        mo = vg;
    var wi = xt(Le());

    function V(t) {
        let e = L.PM.activeLang;
        return (0, wi.default)(Nt[e], t) || (0, wi.default)(Nt.en, t) || t
    }

    function be(t) {
        for (let e = 0; e < t.length; e += 1) {
            let i = t[e];
            if (Array.isArray(i)) {
                if (be(i)) return !0
            } else if (i != null && i !== "") return !0
        }
        return !1
    }

    function ve(t) {
        return t.reduce((e, i) => {
            if (i.length !== 0) {
                let r = Array.isArray(i) ? ve(i) : i;
                Array.isArray(r) ? r.length !== 0 && e.push(r) : e.push(r)
            }
            return e
        }, [])
    }

    function sm(t, e, i) {
        let r = {
                a: L.CRS.Earth.R,
                b: 63567523142e-4,
                f: .0033528106647474805
            },
            {
                a: n,
                b: s,
                f: a
            } = r,
            o = t.lng,
            l = t.lat,
            u = i,
            f = Math.PI,
            d = e * f / 180,
            P = Math.sin(d),
            E = Math.cos(d),
            T = (1 - a) * Math.tan(l * f / 180),
            G = 1 / Math.sqrt(1 + T * T),
            _ = T * G,
            x = Math.atan2(T, E),
            b = G * P,
            R = 1 - b * b,
            D = R * (n * n - s * s) / (s * s),
            O = 1 + D / 16384 * (4096 + D * (-768 + D * (320 - 175 * D))),
            A = D / 1024 * (256 + D * (-128 + D * (74 - 47 * D))),
            q = u / (s * O),
            h = 2 * Math.PI,
            c, p, y;
        for (; Math.abs(q - h) > 1e-12;) {
            c = Math.cos(2 * x + q), p = Math.sin(q), y = Math.cos(q);
            let B = A * p * (c + A / 4 * (y * (-1 + 2 * c * c) - A / 6 * c * (-3 + 4 * p * p) * (-3 + 4 * c * c)));
            h = q, q = u / (s * O) + B
        }
        let g = _ * p - G * y * E,
            k = Math.atan2(_ * y + G * p * E, (1 - a) * Math.sqrt(b * b + g * g)),
            C = Math.atan2(p * P, G * y - _ * p * E),
            m = a / 16 * R * (4 + a * (4 - 3 * R)),
            v = C - (1 - m) * a * b * (q + m * p * (c + m * y * (-1 + 2 * c * c))),
            w = o + v * 180 / f,
            M = k * 180 / f;
        return L.latLng(w, M)
    }

    function Ci(t, e, i, r, n = !0) {
        let s, a, o, l = [];
        for (let u = 0; u < i; u += 1) {
            if (n) s = u * 360 / i + r, a = sm(t, s, e), o = L.latLng(a.lng, a.lat);
            else {
                let f = t.lat + Math.cos(2 * u * Math.PI / i) * e,
                    d = t.lng + Math.sin(2 * u * Math.PI / i) * e;
                o = L.latLng(f, d)
            }
            l.push(o)
        }
        return l
    }

    function am(t, e, i) {
        e = (e + 360) % 360;
        let r = Math.PI / 180,
            n = 180 / Math.PI,
            {
                R: s
            } = L.CRS.Earth,
            a = t.lng * r,
            o = t.lat * r,
            l = e * r,
            u = Math.sin(o),
            f = Math.cos(o),
            d = Math.cos(i / s),
            P = Math.sin(i / s),
            E = Math.asin(u * d + f * P * Math.cos(l)),
            T = a + Math.atan2(Math.sin(l) * P * f, d - u * Math.sin(E));
        T *= n;
        let G = T - 360,
            _ = T < -180 ? T + 360 : T;
        return T = T > 180 ? G : _, L.latLng([E * n, T])
    }

    function ke(t, e, i) {
        let r = t.latLngToContainerPoint(e),
            n = t.latLngToContainerPoint(i),
            s = Math.atan2(n.y - r.y, n.x - r.x) * 180 / Math.PI + 90;
        return s += s < 0 ? 360 : 0, s
    }

    function te(t, e, i, r) {
        let n = ke(t, e, i);
        return am(e, n, r)
    }

    function jo(t, e, i = "asc") {
        if (!e || Object.keys(e).length === 0) return (l, u) => l - u;
        let r = Object.keys(e),
            n, s = r.length - 1,
            a = {};
        for (; s >= 0;) n = r[s], a[n.toLowerCase()] = e[n], s -= 1;

        function o(l) {
            if (l instanceof L.Marker) return "Marker";
            if (l instanceof L.Circle) return "Circle";
            if (l instanceof L.CircleMarker) return "CircleMarker";
            if (l instanceof L.Rectangle) return "Rectangle";
            if (l instanceof L.Polygon) return "Polygon";
            if (l instanceof L.Polyline) return "Line"
        }
        return (l, u) => {
            let f, d;
            if (t === "instanceofShape") {
                if (f = o(l.layer).toLowerCase(), d = o(u.layer).toLowerCase(), !f || !d) return 0
            } else {
                if (!l.hasOwnProperty(t) || !u.hasOwnProperty(t)) return 0;
                f = l[t].toLowerCase(), d = u[t].toLowerCase()
            }
            let P = f in a ? a[f] : Number.MAX_SAFE_INTEGER,
                E = d in a ? a[d] : Number.MAX_SAFE_INTEGER,
                T = 0;
            return P < E ? T = -1 : P > E && (T = 1), i === "desc" ? T * -1 : T
        }
    }

    function vt(t, e = t.getLatLngs()) {
        return t instanceof L.Polygon ? L.polygon(e).getLatLngs() : L.polyline(e).getLatLngs()
    }

    function Ei(t, e) {
        if (e.options.crs?.projection?.MAX_LATITUDE) {
            let i = e.options.crs?.projection?.MAX_LATITUDE;
            t.lat = Math.max(Math.min(i, t.lat), -i)
        }
        return t
    }

    function Rt(t) {
        return t.options.renderer || t._map && (t._map._getPaneRenderer(t.options.pane) || t._map.options.renderer || t._map._renderer) || t._renderer
    }
    var om = L.Class.extend({
            includes: [uo, co, po, fo, Tt],
            initialize(t) {
                this.map = t, this.Draw = new L.PM.Draw(t), this.Toolbar = new L.PM.Toolbar(t), this.Keyboard = mo(), this.globalOptions = {
                    snappable: !0,
                    layerGroup: void 0,
                    snappingOrder: ["Marker", "CircleMarker", "Circle", "Line", "Polygon", "Rectangle"],
                    panes: {
                        vertexPane: "markerPane",
                        layerPane: "overlayPane",
                        markerPane: "markerPane"
                    },
                    draggable: !0
                }, this.Keyboard._initKeyListener(t)
            },
            setLang(t = "en", e, i = "en") {
                let r = L.PM.activeLang;
                e && (Nt[t] = (0, Pi.default)(Nt[i], e)), L.PM.activeLang = t, this.map.pm.Toolbar.reinit(), this._fireLangChange(r, t, i, Nt[t])
            },
            addControls(t) {
                this.Toolbar.addControls(t)
            },
            removeControls() {
                this.Toolbar.removeControls()
            },
            toggleControls() {
                this.Toolbar.toggleControls()
            },
            controlsVisible() {
                return this.Toolbar.isVisible
            },
            enableDraw(t = "Polygon", e) {
                t === "Poly" && (t = "Polygon"), this.Draw.enable(t, e)
            },
            disableDraw(t = "Polygon") {
                t === "Poly" && (t = "Polygon"), this.Draw.disable(t)
            },
            setPathOptions(t, e = {}) {
                let i = e.ignoreShapes || [],
                    r = e.merge || !1;
                this.map.pm.Draw.shapes.forEach(n => {
                    i.indexOf(n) === -1 && this.map.pm.Draw[n].setPathOptions(t, r)
                })
            },
            getGlobalOptions() {
                return this.globalOptions
            },
            setGlobalOptions(t) {
                let e = (0, Pi.default)(this.globalOptions, t);
                e.editable && (e.resizeableCircleMarker = e.editable, delete e.editable);
                let i = !1;
                this.map.pm.Draw.CircleMarker.enabled() && !!this.map.pm.Draw.CircleMarker.options.resizeableCircleMarker != !!e.resizeableCircleMarker && (this.map.pm.Draw.CircleMarker.disable(), i = !0);
                let r = !1;
                this.map.pm.Draw.Circle.enabled() && !!this.map.pm.Draw.Circle.options.resizableCircle != !!e.resizableCircle && (this.map.pm.Draw.Circle.disable(), r = !0), this.map.pm.Draw.shapes.forEach(s => {
                    this.map.pm.Draw[s].setOptions(e)
                }), i && this.map.pm.Draw.CircleMarker.enable(), r && this.map.pm.Draw.Circle.enable(), L.PM.Utils.findLayers(this.map).forEach(s => {
                    s.pm.setOptions(e)
                }), this.map.fire("pm:globaloptionschanged"), this.globalOptions = e, this.applyGlobalOptions()
            },
            applyGlobalOptions() {
                L.PM.Utils.findLayers(this.map).forEach(e => {
                    e.pm.enabled() && e.pm.applyOptions()
                })
            },
            globalDrawModeEnabled() {
                return !!this.Draw.getActiveShape()
            },
            globalCutModeEnabled() {
                return !!this.Draw.Cut.enabled()
            },
            enableGlobalCutMode(t) {
                return this.Draw.Cut.enable(t)
            },
            toggleGlobalCutMode(t) {
                return this.Draw.Cut.toggle(t)
            },
            disableGlobalCutMode() {
                return this.Draw.Cut.disable()
            },
            getGeomanLayers(t = !1) {
                let e = L.PM.Utils.findLayers(this.map);
                if (!t) return e;
                let i = L.featureGroup();
                return i._pmTempLayer = !0, e.forEach(r => {
                    i.addLayer(r)
                }), i
            },
            getGeomanDrawLayers(t = !1) {
                let e = L.PM.Utils.findLayers(this.map).filter(r => r._drawnByGeoman === !0);
                if (!t) return e;
                let i = L.featureGroup();
                return i._pmTempLayer = !0, e.forEach(r => {
                    i.addLayer(r)
                }), i
            },
            _getContainingLayer() {
                return this.globalOptions.layerGroup && this.globalOptions.layerGroup instanceof L.LayerGroup ? this.globalOptions.layerGroup : this.map
            },
            _isCRSSimple() {
                return this.map.options.crs === L.CRS.Simple
            },
            _touchEventCounter: 0,
            _addTouchEvents(t) {
                this._touchEventCounter === 0 && (L.DomEvent.on(t, "touchmove", this._canvasTouchMove, this), L.DomEvent.on(t, "touchstart touchend touchcancel", this._canvasTouchClick, this)), this._touchEventCounter += 1
            },
            _removeTouchEvents(t) {
                this._touchEventCounter === 1 && (L.DomEvent.off(t, "touchmove", this._canvasTouchMove, this), L.DomEvent.off(t, "touchstart touchend touchcancel", this._canvasTouchClick, this)), this._touchEventCounter = this._touchEventCounter <= 1 ? 0 : this._touchEventCounter - 1
            },
            _canvasTouchMove(t) {
                Rt(this.map)._onMouseMove(this._createMouseEvent("mousemove", t))
            },
            _canvasTouchClick(t) {
                let e = "";
                t.type === "touchstart" || t.type === "pointerdown" ? e = "mousedown" : (t.type === "touchend" || t.type === "pointerup" || t.type === "touchcancel" || t.type === "pointercancel") && (e = "mouseup"), e && Rt(this.map)._onClick(this._createMouseEvent(e, t))
            },
            _createMouseEvent(t, e) {
                let i, r = e.touches[0] || e.changedTouches[0];
                try {
                    i = new MouseEvent(t, {
                        bubbles: e.bubbles,
                        cancelable: e.cancelable,
                        view: e.view,
                        detail: r.detail,
                        screenX: r.screenX,
                        screenY: r.screenY,
                        clientX: r.clientX,
                        clientY: r.clientY,
                        ctrlKey: e.ctrlKey,
                        altKey: e.altKey,
                        shiftKey: e.shiftKey,
                        metaKey: e.metaKey,
                        button: e.button,
                        relatedTarget: e.relatedTarget
                    })
                } catch {
                    i = document.createEvent("MouseEvents"), i.initMouseEvent(t, e.bubbles, e.cancelable, e.view, r.detail, r.screenX, r.screenY, r.clientX, r.clientY, e.ctrlKey, e.altKey, e.shiftKey, e.metaKey, e.button, e.relatedTarget)
                }
                return i
            }
        }),
        Ko = om;
    var lm = L.Control.extend({
            includes: [Tt],
            options: {
                position: "topleft",
                disableByOtherButtons: !0
            },
            initialize(t) {
                this._button = L.Util.extend({}, this.options, t)
            },
            onAdd(t) {
                return this._map = t, this._map.pm.Toolbar.options.oneBlock ? this._container = this._map.pm.Toolbar._createContainer(this.options.position) : this._button.tool === "edit" ? this._container = this._map.pm.Toolbar.editContainer : this._button.tool === "options" ? this._container = this._map.pm.Toolbar.optionsContainer : this._button.tool === "custom" ? this._container = this._map.pm.Toolbar.customContainer : this._container = this._map.pm.Toolbar.drawContainer, this._renderButton(), this._container
            },
            _renderButton() {
                let t = this.buttonsDomNode;
                this.buttonsDomNode = this._makeButton(this._button), t ? t.replaceWith(this.buttonsDomNode) : this._container.appendChild(this.buttonsDomNode)
            },
            onRemove() {
                return this.buttonsDomNode.remove(), this._container
            },
            getText() {
                return this._button.text
            },
            getIconUrl() {
                return this._button.iconUrl
            },
            destroy() {
                this._button = {}, this._update()
            },
            toggle(t) {
                return typeof t == "boolean" ? this._button.toggleStatus = t : this._button.toggleStatus = !this._button.toggleStatus, this._applyStyleClasses(), this._button.toggleStatus
            },
            toggled() {
                return this._button.toggleStatus
            },
            onCreate() {
                this.toggle(!1)
            },
            disable() {
                this.toggle(!1), this._button.disabled = !0, this._updateDisabled()
            },
            enable() {
                this._button.disabled = !1, this._updateDisabled()
            },
            _triggerClick(t) {
                t && t.preventDefault(), !this._button.disabled && (this._button.onClick(t, {
                    button: this,
                    event: t
                }), this._clicked(t), this._button.afterClick(t, {
                    button: this,
                    event: t
                }))
            },
            _makeButton(t) {
                let e = this.options.position.indexOf("right") > -1 ? "pos-right" : "",
                    i = L.DomUtil.create("div", `button-container  ${e}`, this._container);
                t.title && i.setAttribute("title", t.title);
                let r = L.DomUtil.create("a", "leaflet-buttons-control-button", i);
                r.setAttribute("role", "button"), r.setAttribute("tabindex", "0"), r.href = "#";
                let n = L.DomUtil.create("div", `leaflet-pm-actions-container ${e}`, i),
                    s = t.actions,
                    a = {
                        cancel: {
                            text: V("actions.cancel"),
                            title: V("actions.cancel"),
                            onClick() {
                                this._triggerClick()
                            }
                        },
                        finishMode: {
                            text: V("actions.finish"),
                            title: V("actions.finish"),
                            onClick() {
                                this._triggerClick()
                            }
                        },
                        removeLastVertex: {
                            text: V("actions.removeLastVertex"),
                            title: V("actions.removeLastVertex"),
                            onClick() {
                                this._map.pm.Draw[t.jsClass]._removeLastVertex()
                            }
                        },
                        finish: {
                            text: V("actions.finish"),
                            title: V("actions.finish"),
                            onClick(l) {
                                this._map.pm.Draw[t.jsClass]._finishShape(l)
                            }
                        }
                    };
                s.forEach(l => {
                    let u = typeof l == "string" ? l : l.name,
                        f;
                    if (a[u]) f = a[u];
                    else if (l.text) f = l;
                    else return;
                    let d = L.DomUtil.create("a", `leaflet-pm-action ${e} action-${u}`, n);
                    if (d.setAttribute("role", "button"), d.setAttribute("tabindex", "0"), d.href = "#", f.title && (d.title = f.title), d.innerHTML = f.text, L.DomEvent.disableClickPropagation(d), L.DomEvent.on(d, "click", L.DomEvent.stop), !t.disabled && f.onClick) {
                        let P = E => {
                            E.preventDefault();
                            let T = "",
                                {
                                    buttons: G
                                } = this._map.pm.Toolbar;
                            for (let _ in G)
                                if (G[_]._button === t) {
                                    T = _;
                                    break
                                } this._fireActionClick(f, T, t)
                        };
                        L.DomEvent.addListener(d, "click", P, this), L.DomEvent.addListener(d, "click", f.onClick, this)
                    }
                }), t.toggleStatus && L.DomUtil.addClass(i, "active");
                let o = L.DomUtil.create("div", "control-icon", r);
                return t.iconUrl && o.setAttribute("src", t.iconUrl), t.className && L.DomUtil.addClass(o, t.className), L.DomEvent.disableClickPropagation(r), L.DomEvent.on(r, "click", L.DomEvent.stop), t.disabled || (L.DomEvent.addListener(r, "click", this._onBtnClick, this), L.DomEvent.addListener(r, "click", this._triggerClick, this)), t.disabled && (L.DomUtil.addClass(r, "pm-disabled"), r.setAttribute("aria-disabled", "true")), i
            },
            _applyStyleClasses() {
                this._container && (!this._button.toggleStatus || this._button.cssToggle === !1 ? (L.DomUtil.removeClass(this.buttonsDomNode, "active"), L.DomUtil.removeClass(this._container, "activeChild")) : (L.DomUtil.addClass(this.buttonsDomNode, "active"), L.DomUtil.addClass(this._container, "activeChild")))
            },
            _onBtnClick() {
                if (this._button.disabled) return;
                this._button.disableOtherButtons && this._map.pm.Toolbar.triggerClickOnToggledButtons(this);
                let t = "",
                    {
                        buttons: e
                    } = this._map.pm.Toolbar;
                for (let i in e)
                    if (e[i]._button === this._button) {
                        t = i;
                        break
                    } this._fireButtonClick(t, this._button)
            },
            _clicked() {
                this._button.doToggle && this.toggle()
            },
            _updateDisabled() {
                if (!this._container) return;
                let t = "pm-disabled",
                    e = this.buttonsDomNode.children[0];
                this._button.disabled ? (L.DomUtil.addClass(e, t), e.setAttribute("aria-disabled", "true")) : (L.DomUtil.removeClass(e, t), e.setAttribute("aria-disabled", "false"))
            }
        }),
        Ho = lm;
    L.Control.PMButton = Ho;
    var hm = L.Class.extend({
            options: {
                drawMarker: !0,
                drawRectangle: !0,
                drawPolyline: !0,
                drawPolygon: !0,
                drawCircle: !0,
                drawCircleMarker: !0,
                drawText: !0,
                editMode: !0,
                dragMode: !0,
                cutPolygon: !0,
                removalMode: !0,
                rotateMode: !0,
                snappingOption: !0,
                drawControls: !0,
                editControls: !0,
                optionsControls: !0,
                customControls: !0,
                oneBlock: !1,
                position: "topleft",
                positions: {
                    draw: "",
                    edit: "",
                    options: "",
                    custom: ""
                }
            },
            customButtons: [],
            initialize(t) {
                this.customButtons = [], this.options.positions = {
                    draw: "",
                    edit: "",
                    options: "",
                    custom: ""
                }, this.init(t)
            },
            reinit() {
                let t = this.isVisible;
                this.removeControls(), this._defineButtons(), t && this.addControls()
            },
            init(t) {
                this.map = t, this.buttons = {}, this.isVisible = !1, this.drawContainer = L.DomUtil.create("div", "leaflet-pm-toolbar leaflet-pm-draw leaflet-bar leaflet-control"), this.editContainer = L.DomUtil.create("div", "leaflet-pm-toolbar leaflet-pm-edit leaflet-bar leaflet-control"), this.optionsContainer = L.DomUtil.create("div", "leaflet-pm-toolbar leaflet-pm-options leaflet-bar leaflet-control"), this.customContainer = L.DomUtil.create("div", "leaflet-pm-toolbar leaflet-pm-custom leaflet-bar leaflet-control"), this._defineButtons()
            },
            _createContainer(t) {
                let e = `${t}Container`;
                return this[e] || (this[e] = L.DomUtil.create("div", `leaflet-pm-toolbar leaflet-pm-${t} leaflet-bar leaflet-control`)), this[e]
            },
            getButtons() {
                return this.buttons
            },
            addControls(t = this.options) {
                typeof t.editPolygon < "u" && (t.editMode = t.editPolygon), typeof t.deleteLayer < "u" && (t.removalMode = t.deleteLayer), L.Util.setOptions(this, t), this.applyIconStyle(), this.isVisible = !0, this._showHideButtons()
            },
            applyIconStyle() {
                let t = this.getButtons(),
                    e = {
                        geomanIcons: {
                            drawMarker: "control-icon leaflet-pm-icon-marker",
                            drawPolyline: "control-icon leaflet-pm-icon-polyline",
                            drawRectangle: "control-icon leaflet-pm-icon-rectangle",
                            drawPolygon: "control-icon leaflet-pm-icon-polygon",
                            drawCircle: "control-icon leaflet-pm-icon-circle",
                            drawCircleMarker: "control-icon leaflet-pm-icon-circle-marker",
                            editMode: "control-icon leaflet-pm-icon-edit",
                            dragMode: "control-icon leaflet-pm-icon-drag",
                            cutPolygon: "control-icon leaflet-pm-icon-cut",
                            removalMode: "control-icon leaflet-pm-icon-delete",
                            drawText: "control-icon leaflet-pm-icon-text"
                        }
                    };
                for (let i in t) {
                    let r = t[i];
                    L.Util.setOptions(r, {
                        className: e.geomanIcons[i]
                    })
                }
            },
            removeControls() {
                let t = this.getButtons();
                for (let e in t) t[e].remove();
                this.isVisible = !1
            },
            toggleControls(t = this.options) {
                this.isVisible ? this.removeControls() : this.addControls(t)
            },
            _addButton(t, e) {
                return this.buttons[t] = e, this.options[t] = !!this.options[t] || !1, this.buttons[t]
            },
            triggerClickOnToggledButtons(t) {
                for (let e in this.buttons) {
                    let i = this.buttons[e];
                    i._button.disableByOtherButtons && i !== t && i.toggled() && i._triggerClick()
                }
            },
            toggleButton(t, e, i = !0) {
                return t === "editPolygon" && (t = "editMode"), t === "deleteLayer" && (t = "removalMode"), i && this.triggerClickOnToggledButtons(this.buttons[t]), this.buttons[t] ? this.buttons[t].toggle(e) : !1
            },
            _defineButtons() {
                let t = {
                        className: "control-icon leaflet-pm-icon-marker",
                        title: V("buttonTitles.drawMarkerButton"),
                        jsClass: "Marker",
                        onClick: () => {},
                        afterClick: (P, E) => {
                            this.map.pm.Draw[E.button._button.jsClass].toggle()
                        },
                        doToggle: !0,
                        toggleStatus: !1,
                        disableOtherButtons: !0,
                        position: this.options.position,
                        actions: ["cancel"]
                    },
                    e = {
                        title: V("buttonTitles.drawPolyButton"),
                        className: "control-icon leaflet-pm-icon-polygon",
                        jsClass: "Polygon",
                        onClick: () => {},
                        afterClick: (P, E) => {
                            this.map.pm.Draw[E.button._button.jsClass].toggle()
                        },
                        doToggle: !0,
                        toggleStatus: !1,
                        disableOtherButtons: !0,
                        position: this.options.position,
                        actions: ["finish", "removeLastVertex", "cancel"]
                    },
                    i = {
                        className: "control-icon leaflet-pm-icon-polyline",
                        title: V("buttonTitles.drawLineButton"),
                        jsClass: "Line",
                        onClick: () => {},
                        afterClick: (P, E) => {
                            this.map.pm.Draw[E.button._button.jsClass].toggle()
                        },
                        doToggle: !0,
                        toggleStatus: !1,
                        disableOtherButtons: !0,
                        position: this.options.position,
                        actions: ["finish", "removeLastVertex", "cancel"]
                    },
                    r = {
                        title: V("buttonTitles.drawCircleButton"),
                        className: "control-icon leaflet-pm-icon-circle",
                        jsClass: "Circle",
                        onClick: () => {},
                        afterClick: (P, E) => {
                            this.map.pm.Draw[E.button._button.jsClass].toggle()
                        },
                        doToggle: !0,
                        toggleStatus: !1,
                        disableOtherButtons: !0,
                        position: this.options.position,
                        actions: ["cancel"]
                    },
                    n = {
                        title: V("buttonTitles.drawCircleMarkerButton"),
                        className: "control-icon leaflet-pm-icon-circle-marker",
                        jsClass: "CircleMarker",
                        onClick: () => {},
                        afterClick: (P, E) => {
                            this.map.pm.Draw[E.button._button.jsClass].toggle()
                        },
                        doToggle: !0,
                        toggleStatus: !1,
                        disableOtherButtons: !0,
                        position: this.options.position,
                        actions: ["cancel"]
                    },
                    s = {
                        title: V("buttonTitles.drawRectButton"),
                        className: "control-icon leaflet-pm-icon-rectangle",
                        jsClass: "Rectangle",
                        onClick: () => {},
                        afterClick: (P, E) => {
                            this.map.pm.Draw[E.button._button.jsClass].toggle()
                        },
                        doToggle: !0,
                        toggleStatus: !1,
                        disableOtherButtons: !0,
                        position: this.options.position,
                        actions: ["cancel"]
                    },
                    a = {
                        title: V("buttonTitles.editButton"),
                        className: "control-icon leaflet-pm-icon-edit",
                        onClick: () => {},
                        afterClick: () => {
                            this.map.pm.toggleGlobalEditMode()
                        },
                        doToggle: !0,
                        toggleStatus: !1,
                        disableOtherButtons: !0,
                        position: this.options.position,
                        tool: "edit",
                        actions: ["finishMode"]
                    },
                    o = {
                        title: V("buttonTitles.dragButton"),
                        className: "control-icon leaflet-pm-icon-drag",
                        onClick: () => {},
                        afterClick: () => {
                            this.map.pm.toggleGlobalDragMode()
                        },
                        doToggle: !0,
                        toggleStatus: !1,
                        disableOtherButtons: !0,
                        position: this.options.position,
                        tool: "edit",
                        actions: ["finishMode"]
                    },
                    l = {
                        title: V("buttonTitles.cutButton"),
                        className: "control-icon leaflet-pm-icon-cut",
                        jsClass: "Cut",
                        onClick: () => {},
                        afterClick: (P, E) => {
                            this.map.pm.Draw[E.button._button.jsClass].toggle({
                                snappable: !0,
                                cursorMarker: !0,
                                allowSelfIntersection: !1
                            })
                        },
                        doToggle: !0,
                        toggleStatus: !1,
                        disableOtherButtons: !0,
                        position: this.options.position,
                        tool: "edit",
                        actions: ["finish", "removeLastVertex", "cancel"]
                    },
                    u = {
                        title: V("buttonTitles.deleteButton"),
                        className: "control-icon leaflet-pm-icon-delete",
                        onClick: () => {},
                        afterClick: () => {
                            this.map.pm.toggleGlobalRemovalMode()
                        },
                        doToggle: !0,
                        toggleStatus: !1,
                        disableOtherButtons: !0,
                        position: this.options.position,
                        tool: "edit",
                        actions: ["finishMode"]
                    },
                    f = {
                        title: V("buttonTitles.rotateButton"),
                        className: "control-icon leaflet-pm-icon-rotate",
                        onClick: () => {},
                        afterClick: () => {
                            this.map.pm.toggleGlobalRotateMode()
                        },
                        doToggle: !0,
                        toggleStatus: !1,
                        disableOtherButtons: !0,
                        position: this.options.position,
                        tool: "edit",
                        actions: ["finishMode"]
                    },
                    d = {
                        className: "control-icon leaflet-pm-icon-text",
                        title: V("buttonTitles.drawTextButton"),
                        jsClass: "Text",
                        onClick: () => {},
                        afterClick: (P, E) => {
                            this.map.pm.Draw[E.button._button.jsClass].toggle()
                        },
                        doToggle: !0,
                        toggleStatus: !1,
                        disableOtherButtons: !0,
                        position: this.options.position,
                        actions: ["cancel"]
					},
					colorChangeButton = {
						title: V("buttonTitles.chengecolor"),
        				className: 'control-icon leaflet-pm-icon-color',
        				onClick: () => {},
        				afterClick: (e) => { 
						    this.map.pm.toggleColorChangeMode()
						},
        				doToggle: true,
        				toggleStatus: false,
        				disableOtherButtons: true,
        				position: this.options.position,
        				tool: 'edit',
        				actions: ['finishMode']
                    };
                this._addButton("drawMarker", new L.Control.PMButton(t)), this._addButton("drawPolyline", new L.Control.PMButton(i)), this._addButton("drawRectangle", new L.Control.PMButton(s)), this._addButton("drawPolygon", new L.Control.PMButton(e)), this._addButton("drawCircle", new L.Control.PMButton(r)), this._addButton("drawCircleMarker", new L.Control.PMButton(n)), this._addButton("drawText", new L.Control.PMButton(d)), this._addButton("editMode", new L.Control.PMButton(a)), this._addButton("dragMode", new L.Control.PMButton(o)), this._addButton("cutPolygon", new L.Control.PMButton(l)), this._addButton("removalMode", new L.Control.PMButton(u)), this._addButton("rotateMode", new L.Control.PMButton(f)), this._addButton('colorChangeMode', new L.Control.PMButton(colorChangeButton))
            },
            _showHideButtons() {
                if (!this.isVisible) return;
                this.removeControls(), this.isVisible = !0;
                let t = this.getButtons(),
                    e = [];
                this.options.drawControls === !1 && (e = e.concat(Object.keys(t).filter(i => !t[i]._button.tool))), this.options.editControls === !1 && (e = e.concat(Object.keys(t).filter(i => t[i]._button.tool === "edit"))), this.options.optionsControls === !1 && (e = e.concat(Object.keys(t).filter(i => t[i]._button.tool === "options"))), this.options.customControls === !1 && (e = e.concat(Object.keys(t).filter(i => t[i]._button.tool === "custom")));
                for (let i in t)
                    if (this.options[i] && e.indexOf(i) === -1) {
                        let r = t[i]._button.tool;
                        r || (r = "draw"), t[i].setPosition(this._getBtnPosition(r)), t[i].addTo(this.map)
                    }
            },
            _getBtnPosition(t) {
                return this.options.positions && this.options.positions[t] ? this.options.positions[t] : this.options.position
            },
            setBlockPosition(t, e) {
                this.options.positions[t] = e, this._showHideButtons(), this.changeControlOrder()
            },
            getBlockPositions() {
                return this.options.positions
            },
            copyDrawControl(t, e) {
                if (e) typeof e != "object" && (e = {
                    name: e
                });
                else throw new TypeError("Button has no name");
                let i = this._btnNameMapping(t);
                if (!e.name) throw new TypeError("Button has no name");
                if (this.buttons[e.name]) throw new TypeError("Button with this name already exists");
                let r = this.map.pm.Draw.createNewDrawInstance(e.name, i);
                e = {
                    ...this.buttons[i]._button,
                    ...e
                };
                let s = this.createCustomControl(e);
                return {
                    drawInstance: r,
                    control: s
                }
            },
            createCustomControl(t) {
                if (!t.name) throw new TypeError("Button has no name");
                if (this.buttons[t.name]) throw new TypeError("Button with this name already exists");
                t.onClick || (t.onClick = () => {}), t.afterClick || (t.afterClick = () => {}), t.toggle !== !1 && (t.toggle = !0), t.block && (t.block = t.block.toLowerCase()), (!t.block || t.block === "draw") && (t.block = ""), t.className ? t.className.indexOf("control-icon") === -1 && (t.className = `control-icon ${t.className}`) : t.className = "control-icon";
                let e = {
                    tool: t.block,
                    className: t.className,
                    title: t.title || "",
                    jsClass: t.name,
                    onClick: t.onClick,
                    afterClick: t.afterClick,
                    doToggle: t.toggle,
                    toggleStatus: !1,
                    disableOtherButtons: t.disableOtherButtons ?? !0,
                    disableByOtherButtons: t.disableByOtherButtons ?? !0,
                    cssToggle: t.toggle,
                    position: this.options.position,
                    actions: t.actions || [],
                    disabled: !!t.disabled
                };
                this.options[t.name] !== !1 && (this.options[t.name] = !0);
                let i = this._addButton(t.name, new L.Control.PMButton(e));
                return this.changeControlOrder(), i
            },
            controlExists(t) {
                return !!this.getButton(t)
            },
            getButton(t) {
                return this.getButtons()[t]
            },
            getButtonsInBlock(t) {
                let e = {};
                if (t)
                    for (let i in this.getButtons()) {
                        let r = this.getButtons()[i];
                        (r._button.tool === t || t === "draw" && !r._button.tool) && (e[i] = r)
                    }
                return e
            },
            changeControlOrder(t = []) {
                let e = this._shapeMapping(),
                    i = [];
                t.forEach(u => {
                    e[u] ? i.push(e[u]) : i.push(u)
                });
                let r = this.getButtons(),
                    n = {};
                i.forEach(u => {
                    r[u] && (n[u] = r[u])
                }), Object.keys(r).filter(u => !r[u]._button.tool).forEach(u => {
                    i.indexOf(u) === -1 && (n[u] = r[u])
                }), Object.keys(r).filter(u => r[u]._button.tool === "edit").forEach(u => {
                    i.indexOf(u) === -1 && (n[u] = r[u])
                }), Object.keys(r).filter(u => r[u]._button.tool === "options").forEach(u => {
                    i.indexOf(u) === -1 && (n[u] = r[u])
                }), Object.keys(r).filter(u => r[u]._button.tool === "custom").forEach(u => {
                    i.indexOf(u) === -1 && (n[u] = r[u])
                }), Object.keys(r).forEach(u => {
                    i.indexOf(u) === -1 && (n[u] = r[u])
                }), this.map.pm.Toolbar.buttons = n, this._showHideButtons()
            },
            getControlOrder() {
                let t = this.getButtons(),
                    e = [];
                for (let i in t) e.push(i);
                return e
            },
            changeActionsOfControl(t, e) {
                let i = this._btnNameMapping(t);
                if (!i) throw new TypeError("No name passed");
                if (!e) throw new TypeError("No actions passed");
                if (!this.buttons[i]) throw new TypeError("Button with this name not exists");
                this.buttons[i]._button.actions = e, this.changeControlOrder()
            },
            setButtonDisabled(t, e) {
                let i = this._btnNameMapping(t);
                e ? this.buttons[i].disable() : this.buttons[i].enable()
            },
            _shapeMapping() {
                return {
                    Marker: "drawMarker",
                    Circle: "drawCircle",
                    Polygon: "drawPolygon",
                    Rectangle: "drawRectangle",
                    Polyline: "drawPolyline",
                    Line: "drawPolyline",
                    CircleMarker: "drawCircleMarker",
                    Edit: "editMode",
                    Drag: "dragMode",
                    Cut: "cutPolygon",
                    Removal: "removalMode",
                    Rotate: "rotateMode",
                    Text: "drawText"
                }
            },
            _btnNameMapping(t) {
                let e = this._shapeMapping();
                return e[t] ? e[t] : t
            }
        }),
        Xo = hm;
    var Yo = xt(Ne());
    var um = {
            _initSnappableMarkers() {
                this.options.snapDistance = this.options.snapDistance || 30, this.options.snapSegment = this.options.snapSegment === void 0 ? !0 : this.options.snapSegment, this._assignEvents(this._markers), this._layer.off("pm:dragstart", this._unsnap, this), this._layer.on("pm:dragstart", this._unsnap, this)
            },
            _disableSnapping() {
                this._layer.off("pm:dragstart", this._unsnap, this)
            },
            _assignEvents(t) {
                t.forEach(e => {
                    if (Array.isArray(e)) {
                        this._assignEvents(e);
                        return
                    }
                    e.off("drag", this._handleSnapping, this), e.on("drag", this._handleSnapping, this), e.off("dragend", this._cleanupSnapping, this), e.on("dragend", this._cleanupSnapping, this)
                })
            },
            _cleanupSnapping(t) {
                if (t) {
                    let e = t.target;
                    e._snapped = !1
                }
                delete this._snapList, this.throttledList && (this._map.off("layeradd", this.throttledList, this), this.throttledList = void 0), this._map.off("layerremove", this._handleSnapLayerRemoval, this), this.debugIndicatorLines && this.debugIndicatorLines.forEach(e => {
                    e.remove()
                })
            },
            _handleThrottleSnapping() {
                this.throttledList && this._createSnapList()
            },
            _handleSnapping(t) {
                let e = t.target;
                if (e._snapped = !1, this.throttledList || (this.throttledList = L.Util.throttle(this._handleThrottleSnapping, 100, this)), t?.originalEvent?.altKey || this._map?.pm?.Keyboard.isAltKeyPressed() || (this._snapList === void 0 && (this._createSnapList(), this._map.off("layeradd", this.throttledList, this), this._map.on("layeradd", this.throttledList, this)), this._snapList.length <= 0)) return !1;
                let i = this._calcClosestLayer(e.getLatLng(), this._snapList);
                if (Object.keys(i).length === 0) return !1;
                let r = i.layer instanceof L.Marker || i.layer instanceof L.CircleMarker || !this.options.snapSegment,
                    n;
                r ? n = i.latlng : n = this._checkPrioritiySnapping(i);
                let s = this.options.snapDistance,
                    a = {
                        marker: e,
                        shape: this._shape,
                        snapLatLng: n,
                        segment: i.segment,
                        layer: this._layer,
                        workingLayer: this._layer,
                        layerInteractedWith: i.layer,
                        distance: i.distance
                    };
                if (this._fireSnapDrag(a.marker, a), this._fireSnapDrag(this._layer, a), i.distance < s) {
                    e._orgLatLng = e.getLatLng(), e.setLatLng(n), e._snapped = !0, e._snapInfo = a;
                    let o = () => {
                            this._snapLatLng = n, this._fireSnap(e, a), this._fireSnap(this._layer, a)
                        },
                        l = this._snapLatLng || {},
                        u = n || {};
                    (l.lat !== u.lat || l.lng !== u.lng) && o()
                } else this._snapLatLng && (this._unsnap(a), e._snapped = !1, e._snapInfo = void 0, this._fireUnsnap(a.marker, a), this._fireUnsnap(this._layer, a));
                return !0
            },
            _createSnapList() {
                let t = [],
                    e = [],
                    i = this._map;
                i.off("layerremove", this._handleSnapLayerRemoval, this), i.on("layerremove", this._handleSnapLayerRemoval, this), i.eachLayer(r => {
                    if ((r instanceof L.Polyline || r instanceof L.Marker || r instanceof L.CircleMarker || r instanceof L.ImageOverlay) && r.options.snapIgnore !== !0) {
                        if (r.options.snapIgnore === void 0 && (!L.PM.optIn && r.options.pmIgnore === !0 || L.PM.optIn && r.options.pmIgnore !== !1)) return;
                        (r instanceof L.Circle || r instanceof L.CircleMarker) && r.pm && r.pm._hiddenPolyCircle ? t.push(r.pm._hiddenPolyCircle) : r instanceof L.ImageOverlay && (r = L.rectangle(r.getBounds())), t.push(r);
                        let n = L.polyline([], {
                            color: "red",
                            pmIgnore: !0
                        });
                        n._pmTempLayer = !0, e.push(n), (r instanceof L.Circle || r instanceof L.CircleMarker) && e.push(n)
                    }
                }), t = t.filter(r => this._layer !== r), t = t.filter(r => r._latlng || r._latlngs && be(r._latlngs)), t = t.filter(r => !r._pmTempLayer), this._otherSnapLayers ? (this._otherSnapLayers.forEach(() => {
                    let r = L.polyline([], {
                        color: "red",
                        pmIgnore: !0
                    });
                    r._pmTempLayer = !0, e.push(r)
                }), this._snapList = t.concat(this._otherSnapLayers)) : this._snapList = t, this.debugIndicatorLines = e
            },
            _handleSnapLayerRemoval({
                layer: t
            }) {
                if (!t._leaflet_id) return;
                let e = this._snapList.findIndex(i => i._leaflet_id === t._leaflet_id);
                e > -1 && this._snapList.splice(e, 1)
            },
            _calcClosestLayer(t, e) {
                return this._calcClosestLayers(t, e, 1)[0]
            },
            _calcClosestLayers(t, e, i = 1) {
                let r = [],
                    n = {};
                e.forEach((a, o) => {
                    if (a._parentCopy && a._parentCopy === this._layer) return;
                    let l = this._calcLayerDistances(t, a);
                    if (l.distance = Math.floor(l.distance), this.debugIndicatorLines) {
                        if (!this.debugIndicatorLines[o]) {
                            let u = L.polyline([], {
                                color: "red",
                                pmIgnore: !0
                            });
                            u._pmTempLayer = !0, this.debugIndicatorLines[o] = u
                        }
                        this.debugIndicatorLines[o].setLatLngs([t, l.latlng])
                    }
                    i === 1 && (n.distance === void 0 || l.distance - 5 <= n.distance) ? (l.distance + 5 < n.distance && (r = []), n = l, n.layer = a, r.push(n)) : i !== 1 && (n = {}, n = l, n.layer = a, r.push(n))
                }), i !== 1 && (r = r.sort((a, o) => a.distance - o.distance)), i === -1 && (i = r.length);
                let s = this._getClosestLayerByPriority(r, i);
                return L.Util.isArray(s) ? s : [s]
            },
            _calcLayerDistances(t, e) {
                let i = this._map,
                    r = e instanceof L.Marker || e instanceof L.CircleMarker,
                    n = e instanceof L.Polygon,
                    s = t;
                if (r) {
                    let a = e.getLatLng();
                    return {
                        latlng: {
                            ...a
                        },
                        distance: this._getDistance(i, a, s)
                    }
                }
                return this._calcLatLngDistances(s, e.getLatLngs(), i, n)
            },
            _calcLatLngDistances(t, e, i, r = !1) {
                let n, s, a, o = l => {
                    l.forEach((u, f) => {
                        if (Array.isArray(u)) {
                            o(u);
                            return
                        }
                        if (this.options.snapSegment) {
                            let d = u,
                                P;
                            r ? P = f + 1 === l.length ? 0 : f + 1 : P = f + 1 === l.length ? void 0 : f + 1;
                            let E = l[P];
                            if (E) {
                                let T = this._getDistanceToSegment(i, t, d, E);
                                (s === void 0 || T < s) && (s = T, a = [d, E])
                            }
                        } else {
                            let d = this._getDistance(i, t, u);
                            (s === void 0 || d < s) && (s = d, n = u)
                        }
                    })
                };
                return o(e), this.options.snapSegment ? {
                    latlng: {
                        ...this._getClosestPointOnSegment(i, t, a[0], a[1])
                    },
                    segment: a,
                    distance: s
                } : {
                    latlng: n,
                    distance: s
                }
            },
            _getClosestLayerByPriority(t, e = 1) {
                t = t.sort((a, o) => a._leaflet_id - o._leaflet_id);
                let i = ["Marker", "CircleMarker", "Circle", "Line", "Polygon", "Rectangle"],
                    r = this._map.pm.globalOptions.snappingOrder || [],
                    n = 0,
                    s = {};
                return r.concat(i).forEach(a => {
                    s[a] || (n += 1, s[a] = n)
                }), t.sort(jo("instanceofShape", s)), e === 1 ? t[0] || {} : t.slice(0, e)
            },
            _checkPrioritiySnapping(t) {
                let e = this._map,
                    i = t.segment[0],
                    r = t.segment[1],
                    n = t.latlng,
                    s = this._getDistance(e, i, n),
                    a = this._getDistance(e, r, n),
                    o = s < a ? i : r,
                    l = s < a ? s : a;
                if (this.options.snapMiddle) {
                    let d = L.PM.Utils.calcMiddleLatLng(e, i, r),
                        P = this._getDistance(e, d, n);
                    P < s && P < a && (o = d, l = P)
                }
                let u = this.options.snapDistance,
                    f;
                return l < u ? f = o : f = n, {
                    ...f
                }
            },
            _unsnap() {
                delete this._snapLatLng
            },
            _getClosestPointOnSegment(t, e, i, r) {
                let n = t.getMaxZoom();
                n === 1 / 0 && (n = t.getZoom());
                let s = t.project(e, n),
                    a = t.project(i, n),
                    o = t.project(r, n),
                    l = L.LineUtil.closestPointOnSegment(s, a, o);
                return t.unproject(l, n)
            },
            _getDistanceToSegment(t, e, i, r) {
                let n = t.latLngToLayerPoint(e),
                    s = t.latLngToLayerPoint(i),
                    a = t.latLngToLayerPoint(r);
                return L.LineUtil.pointToSegmentDistance(n, s, a)
            },
            _getDistance(t, e, i) {
                return t.latLngToLayerPoint(e).distanceTo(t.latLngToLayerPoint(i))
            }
        },
        Fe = um;
    var cm = L.Class.extend({
            includes: [Fe, Tt],
            options: {
                snappable: !0,
                snapDistance: 20,
                snapMiddle: !1,
                allowSelfIntersection: !0,
                tooltips: !0,
                templineStyle: {},
                hintlineStyle: {
                    color: "#3388ff",
                    dashArray: "5,5"
                },
                pathOptions: null,
                cursorMarker: !0,
                finishOn: null,
                markerStyle: {
                    draggable: !0,
                    icon: L.icon()
                },
                hideMiddleMarkers: !1,
                minRadiusCircle: null,
                maxRadiusCircle: null,
                minRadiusCircleMarker: null,
                maxRadiusCircleMarker: null,
                resizeableCircleMarker: !1,
                resizableCircle: !0,
                markerEditable: !0,
                continueDrawing: !1,
                snapSegment: !0,
                requireSnapToFinish: !1,
                rectangleAngle: 0
            },
            setOptions(t) {
                L.Util.setOptions(this, t), this.setStyle(this.options)
            },
            setStyle() {},
            getOptions() {
                return this.options
            },
            initialize(t) {
                let e = new L.Icon.Default;
                e.options.tooltipAnchor = [0, 0], this.options.markerStyle.icon = e, this._map = t, this.shapes = ["Marker", "CircleMarker", "Line", "Polygon", "Rectangle", "Circle", "Cut", "Text"], this.shapes.forEach(i => {
                    this[i] = new L.PM.Draw[i](this._map)
                }), this.Marker.setOptions({
                    continueDrawing: !0
                }), this.CircleMarker.setOptions({
                    continueDrawing: !0
                })
            },
            setPathOptions(t, e = !1) {
                e ? this.options.pathOptions = (0, Yo.default)(this.options.pathOptions, t) : this.options.pathOptions = t
            },
            getShapes() {
                return this.shapes
            },
            getShape() {
                return this._shape
            },
            enable(t, e) {
                if (!t) throw new Error(`Error: Please pass a shape as a parameter. Possible shapes are: ${this.getShapes().join(",")}`);
                this.disable(), this[t].enable(e)
            },
            disable() {
                this.shapes.forEach(t => {
                    this[t].disable()
                })
            },
            addControls() {
                this.shapes.forEach(t => {
                    this[t].addButton()
                })
            },
            getActiveShape() {
                let t;
                return this.shapes.forEach(e => {
                    this[e]._enabled && (t = e)
                }), t
            },
            _setGlobalDrawMode() {
                this._shape === "Cut" ? this._fireGlobalCutModeToggled() : this._fireGlobalDrawModeToggled();
                let t = [];
                this._map.eachLayer(e => {
                    (e instanceof L.Polyline || e instanceof L.Marker || e instanceof L.Circle || e instanceof L.CircleMarker || e instanceof L.ImageOverlay) && (e._pmTempLayer || t.push(e))
                }), this._enabled ? t.forEach(e => {
                    L.PM.Utils.disablePopup(e)
                }) : t.forEach(e => {
                    L.PM.Utils.enablePopup(e)
                })
            },
            createNewDrawInstance(t, e) {
                let i = this._getShapeFromBtnName(e);
                if (this[t]) throw new TypeError("Draw Type already exists");
                if (!L.PM.Draw[i]) throw new TypeError(`There is no class L.PM.Draw.${i}`);
                return this[t] = new L.PM.Draw[i](this._map), this[t].toolbarButtonName = t, this[t]._shape = t, this.shapes.push(t), this[e] && this[t].setOptions(this[e].options), this[t].setOptions(this[t].options), this[t]
            },
            _getShapeFromBtnName(t) {
                let e = {
                    drawMarker: "Marker",
                    drawCircle: "Circle",
                    drawPolygon: "Polygon",
                    drawPolyline: "Line",
                    drawRectangle: "Rectangle",
                    drawCircleMarker: "CircleMarker",
                    editMode: "Edit",
                    dragMode: "Drag",
                    cutPolygon: "Cut",
                    removalMode: "Removal",
                    rotateMode: "Rotate",
                    drawText: "Text"
                };
                return e[t] ? e[t] : this[t] ? this[t]._shape : t
            },
            _finishLayer(t) {
                t.pm && (t.pm.setOptions(this.options), t.pm._shape = this._shape, t.pm._map = this._map), this._addDrawnLayerProp(t)
            },
            _addDrawnLayerProp(t) {
                t._drawnByGeoman = !0
            },
            _setPane(t, e) {
                e === "layerPane" ? t.options.pane = this._map.pm.globalOptions.panes && this._map.pm.globalOptions.panes.layerPane || "overlayPane" : e === "vertexPane" ? t.options.pane = this._map.pm.globalOptions.panes && this._map.pm.globalOptions.panes.vertexPane || "markerPane" : e === "markerPane" && (t.options.pane = this._map.pm.globalOptions.panes && this._map.pm.globalOptions.panes.markerPane || "markerPane")
            },
            _isFirstLayer() {
                return (this._map || this._layer._map).pm.getGeomanLayers().length === 0
            }
        }),
        X = cm;
    X.Marker = X.extend({
        initialize(t) {
            this._map = t, this._shape = "Marker", this.toolbarButtonName = "drawMarker"
        },
        enable(t) {
            L.Util.setOptions(this, t), this._enabled = !0, this._map.getContainer().classList.add("geoman-draw-cursor"), this._map.on("click", this._createMarker, this), this._map.pm.Toolbar.toggleButton(this.toolbarButtonName, !0), this._hintMarker = L.marker(this._map.getCenter(), this.options.markerStyle), this._setPane(this._hintMarker, "markerPane"), this._hintMarker._pmTempLayer = !0, this._hintMarker.addTo(this._map), this.options.tooltips && this._hintMarker.bindTooltip(V("tooltips.placeMarker"), {
                permanent: !0,
                offset: L.point(0, 10),
                direction: "bottom",
                opacity: .8
            }).openTooltip(), this._layer = this._hintMarker, this._map.on("mousemove", this._syncHintMarker, this), this.options.markerEditable && this._map.eachLayer(e => {
                this.isRelevantMarker(e) && e.pm.enable()
            }), this._fireDrawStart(), this._setGlobalDrawMode()
        },
        disable() {
            this._enabled && (this._enabled = !1, this._map.getContainer().classList.remove("geoman-draw-cursor"), this._map.off("click", this._createMarker, this), this._hintMarker.remove(), this._map.off("mousemove", this._syncHintMarker, this), this._map.eachLayer(t => {
                this.isRelevantMarker(t) && t.pm.disable()
            }), this._map.pm.Toolbar.toggleButton(this.toolbarButtonName, !1), this.options.snappable && this._cleanupSnapping(), this._fireDrawEnd(), this._setGlobalDrawMode())
        },
        enabled() {
            return this._enabled
        },
        toggle(t) {
            this.enabled() ? this.disable() : this.enable(t)
        },
        isRelevantMarker(t) {
            return t instanceof L.Marker && t.pm && !t._pmTempLayer && !t.pm._initTextMarker
        },
        _syncHintMarker(t) {
            if (this._hintMarker.setLatLng(t.latlng), this.options.snappable) {
                let e = t;
                e.target = this._hintMarker, this._handleSnapping(e)
            }
            this._fireChange(this._hintMarker.getLatLng(), "Draw")
        },
        _createMarker(t) {
            if (!t.latlng || this.options.requireSnapToFinish && !this._hintMarker._snapped && !this._isFirstLayer()) return;
            this._hintMarker._snapped || this._hintMarker.setLatLng(t.latlng);
            let e = this._hintMarker.getLatLng(),
                i = new L.Marker(e, this.options.markerStyle);
            this._setPane(i, "markerPane"), this._finishLayer(i), i.pm || (i.options.draggable = !1), i.addTo(this._map.pm._getContainingLayer()), i.pm && this.options.markerEditable ? i.pm.enable() : i.dragging && i.dragging.disable(), this._fireCreate(i), this._cleanupSnapping(), this.options.continueDrawing || this.disable()
        },
        setStyle() {
            this.options.markerStyle?.icon && this._hintMarker?.setIcon(this.options.markerStyle.icon)
        }
    });
    var at = 63710088e-1,
        Jo = {
            centimeters: at * 100,
            centimetres: at * 100,
            degrees: at / 111325,
            feet: at * 3.28084,
            inches: at * 39.37,
            kilometers: at / 1e3,
            kilometres: at / 1e3,
            meters: at,
            metres: at,
            miles: at / 1609.344,
            millimeters: at * 1e3,
            millimetres: at * 1e3,
            nauticalmiles: at / 1852,
            radians: 1,
            yards: at * 1.0936
        },
        Qb = {
            centimeters: 100,
            centimetres: 100,
            degrees: 1 / 111325,
            feet: 3.28084,
            inches: 39.37,
            kilometers: 1 / 1e3,
            kilometres: 1 / 1e3,
            meters: 1,
            metres: 1,
            miles: 1 / 1609.344,
            millimeters: 1e3,
            millimetres: 1e3,
            nauticalmiles: 1 / 1852,
            radians: 1 / at,
            yards: 1.0936133
        };

    function Dt(t, e, i) {
        i === void 0 && (i = {});
        var r = {
            type: "Feature"
        };
        return (i.id === 0 || i.id) && (r.id = i.id), i.bbox && (r.bbox = i.bbox), r.properties = e || {}, r.geometry = t, r
    }

    function _t(t, e, i) {
        if (i === void 0 && (i = {}), !t) throw new Error("coordinates is required");
        if (!Array.isArray(t)) throw new Error("coordinates must be an Array");
        if (t.length < 2) throw new Error("coordinates must be at least 2 numbers long");
        if (!Si(t[0]) || !Si(t[1])) throw new Error("coordinates must contain numbers");
        var r = {
            type: "Point",
            coordinates: t
        };
        return Dt(r, e, i)
    }

    function wt(t, e, i) {
        if (i === void 0 && (i = {}), t.length < 2) throw new Error("coordinates must be an array of two or more positions");
        var r = {
            type: "LineString",
            coordinates: t
        };
        return Dt(r, e, i)
    }

    function yt(t, e) {
        e === void 0 && (e = {});
        var i = {
            type: "FeatureCollection"
        };
        return e.id && (i.id = e.id), e.bbox && (i.bbox = e.bbox), i.features = t, i
    }

    function $o(t, e) {
        e === void 0 && (e = "kilometers");
        var i = Jo[e];
        if (!i) throw new Error(e + " units is invalid");
        return t * i
    }

    function Zo(t, e) {
        e === void 0 && (e = "kilometers");
        var i = Jo[e];
        if (!i) throw new Error(e + " units is invalid");
        return t / i
    }

    function Me(t) {
        var e = t % (2 * Math.PI);
        return e * 180 / Math.PI
    }

    function lt(t) {
        var e = t % 360;
        return e * Math.PI / 180
    }

    function Si(t) {
        return !isNaN(t) && t !== null && !Array.isArray(t)
    }

    function zt(t) {
        var e, i, r = {
            type: "FeatureCollection",
            features: []
        };
        if (t.type === "Feature" ? i = t.geometry : i = t, i.type === "LineString") e = [i.coordinates];
        else if (i.type === "MultiLineString") e = i.coordinates;
        else if (i.type === "MultiPolygon") e = [].concat.apply([], i.coordinates);
        else if (i.type === "Polygon") e = i.coordinates;
        else throw new Error("Input must be a LineString, MultiLineString, Polygon, or MultiPolygon Feature or Geometry");
        return e.forEach(function(n) {
            e.forEach(function(s) {
                for (var a = 0; a < n.length - 1; a++)
                    for (var o = a; o < s.length - 1; o++)
                        if (!(n === s && (Math.abs(a - o) === 1 || a === 0 && o === n.length - 2 && n[a][0] === n[n.length - 1][0] && n[a][1] === n[n.length - 1][1]))) {
                            var l = pm(n[a][0], n[a][1], n[a + 1][0], n[a + 1][1], s[o][0], s[o][1], s[o + 1][0], s[o + 1][1]);
                            l && r.features.push(_t([l[0], l[1]]))
                        }
            })
        }), r
    }

    function pm(t, e, i, r, n, s, a, o) {
        var l, u, f, d, P, E = {
            x: null,
            y: null,
            onLine1: !1,
            onLine2: !1
        };
        return l = (o - s) * (i - t) - (a - n) * (r - e), l === 0 ? E.x !== null && E.y !== null ? E : !1 : (u = e - s, f = t - n, d = (a - n) * u - (o - s) * f, P = (i - t) * u - (r - e) * f, u = d / l, f = P / l, E.x = t + u * (i - t), E.y = e + u * (r - e), u >= 0 && u <= 1 && (E.onLine1 = !0), f >= 0 && f <= 1 && (E.onLine2 = !0), E.onLine1 && E.onLine2 ? [E.x, E.y] : !1)
    }
    X.Line = X.extend({
        initialize(t) {
            this._map = t, this._shape = "Line", this.toolbarButtonName = "drawPolyline", this._doesSelfIntersect = !1
        },
        enable(t) {
            L.Util.setOptions(this, t), this._enabled = !0, this._markers = [], this._layerGroup = new L.FeatureGroup, this._layerGroup._pmTempLayer = !0, this._layerGroup.addTo(this._map), this._layer = L.polyline([], {
                ...this.options.templineStyle,
                pmIgnore: !1
            }), this._setPane(this._layer, "layerPane"), this._layer._pmTempLayer = !0, this._layerGroup.addLayer(this._layer), this._hintline = L.polyline([], this.options.hintlineStyle), this._setPane(this._hintline, "layerPane"), this._hintline._pmTempLayer = !0, this._layerGroup.addLayer(this._hintline), this._hintMarker = L.marker(this._map.getCenter(), {
                interactive: !1,
                zIndexOffset: 100,
                icon: L.divIcon({
                    className: "marker-icon cursor-marker"
                })
            }), this._setPane(this._hintMarker, "vertexPane"), this._hintMarker._pmTempLayer = !0, this._layerGroup.addLayer(this._hintMarker), this.options.cursorMarker && L.DomUtil.addClass(this._hintMarker._icon, "visible"), this.options.tooltips && this._hintMarker.bindTooltip(V("tooltips.firstVertex"), {
                permanent: !0,
                offset: L.point(0, 10),
                direction: "bottom",
                opacity: .8
            }).openTooltip(), this._map.getContainer().classList.add("geoman-draw-cursor"), this._map.on("click", this._createVertex, this), this.options.finishOn && this.options.finishOn !== "snap" && this._map.on(this.options.finishOn, this._finishShape, this), this.options.finishOn === "dblclick" && (this.tempMapDoubleClickZoomState = this._map.doubleClickZoom._enabled, this.tempMapDoubleClickZoomState && this._map.doubleClickZoom.disable()), this._map.on("mousemove", this._syncHintMarker, this), this._hintMarker.on("move", this._syncHintLine, this), this._map.pm.Toolbar.toggleButton(this.toolbarButtonName, !0), this._otherSnapLayers = [], this.isRed = !1, this._fireDrawStart(), this._setGlobalDrawMode()
        },
        disable() {
            this._enabled && (this._enabled = !1, this._map.getContainer().classList.remove("geoman-draw-cursor"), this._map.off("click", this._createVertex, this), this._map.off("mousemove", this._syncHintMarker, this), this.options.finishOn && this.options.finishOn !== "snap" && this._map.off(this.options.finishOn, this._finishShape, this), this.tempMapDoubleClickZoomState && this._map.doubleClickZoom.enable(), this._map.removeLayer(this._layerGroup), this._map.pm.Toolbar.toggleButton(this.toolbarButtonName, !1), this.options.snappable && this._cleanupSnapping(), this._fireDrawEnd(), this._setGlobalDrawMode())
        },
        enabled() {
            return this._enabled
        },
        toggle(t) {
            this.enabled() ? this.disable() : this.enable(t)
        },
        _syncHintLine() {
            let t = this._layer.getLatLngs();
            if (t.length > 0) {
                let e = t[t.length - 1];
                this._hintline.setLatLngs([e, this._hintMarker.getLatLng()])
            }
        },
        _syncHintMarker(t) {
            if (this._hintMarker.setLatLng(t.latlng), this.options.snappable) {
                let i = t;
                i.target = this._hintMarker, this._handleSnapping(i)
            }
            this.options.allowSelfIntersection || this._handleSelfIntersection(!0, this._hintMarker.getLatLng());
            let e = this._layer._defaultShape().slice();
            e.push(this._hintMarker.getLatLng()), this._change(e)
        },
        hasSelfIntersection() {
            return zt(this._layer.toGeoJSON(15)).features.length > 0
        },
        _handleSelfIntersection(t, e) {
            let i = L.polyline(this._layer.getLatLngs());
            t && (e || (e = this._hintMarker.getLatLng()), i.addLatLng(e));
            let r = zt(i.toGeoJSON(15));
            this._doesSelfIntersect = r.features.length > 0, this._doesSelfIntersect ? this.isRed || (this.isRed = !0, this._hintline.setStyle({
                color: "#f00000ff"
            }), this._fireIntersect(r, this._map, "Draw")) : this._hintline.isEmpty() || (this.isRed = !1, this._hintline.setStyle(this.options.hintlineStyle))
        },
        _createVertex(t) {
            if (!this.options.allowSelfIntersection && (this._handleSelfIntersection(!0, t.latlng), this._doesSelfIntersect)) return;
            this._hintMarker._snapped || this._hintMarker.setLatLng(t.latlng);
            let e = this._hintMarker.getLatLng(),
                i = this._layer.getLatLngs(),
                r = i[i.length - 1];
            if (e.equals(i[0]) || i.length > 0 && e.equals(r)) {
                this._finishShape();
                return
            }
            this._layer._latlngInfo = this._layer._latlngInfo || [], this._layer._latlngInfo.push({
                latlng: e,
                snapInfo: this._hintMarker._snapInfo
            }), this._layer.addLatLng(e);
            let n = this._createMarker(e);
            this._setTooltipText(), this._setHintLineAfterNewVertex(e), this._fireVertexAdded(n, void 0, e, "Draw"), this._change(this._layer.getLatLngs()), this.options.finishOn === "snap" && this._hintMarker._snapped && this._finishShape(t)
        },
        _setHintLineAfterNewVertex(t) {
            this._hintline.setLatLngs([t, t])
        },
        _removeLastVertex() {
            let t = this._markers;
            if (t.length <= 1) {
                this.disable();
                return
            }
            let e = this._layer.getLatLngs(),
                i = t[t.length - 1],
                {
                    indexPath: r
                } = L.PM.Utils.findDeepMarkerIndex(t, i);
            t.pop(), this._layerGroup.removeLayer(i);
            let n = t[t.length - 1],
                s = e.indexOf(n.getLatLng());
            e = e.slice(0, s + 1), this._layer.setLatLngs(e), this._layer._latlngInfo.pop(), this._syncHintLine(), this._setTooltipText(), this._fireVertexRemoved(i, r, "Draw"), this._change(this._layer.getLatLngs())
        },
        _finishShape() {
            if (!this.options.allowSelfIntersection && (this._handleSelfIntersection(!1), this._doesSelfIntersect) || this.options.requireSnapToFinish && !this._hintMarker._snapped && !this._isFirstLayer()) return;
            let t = this._layer.getLatLngs();
            if (t.length <= 1) return;
            let e = L.polyline(t, this.options.pathOptions);
            this._setPane(e, "layerPane"), this._finishLayer(e), e.addTo(this._map.pm._getContainingLayer()), this._fireCreate(e), this.options.snappable && this._cleanupSnapping(), this.disable(), this.options.continueDrawing && this.enable()
        },
        _createMarker(t) {
            let e = new L.Marker(t, {
                draggable: !1,
                icon: L.divIcon({
                    className: "marker-icon"
                })
            });
            return this._setPane(e, "vertexPane"), e._pmTempLayer = !0, this._layerGroup.addLayer(e), this._markers.push(e), e.on("click", this._finishShape, this), e
        },
        _setTooltipText() {
            let {
                length: t
            } = this._layer.getLatLngs().flat(), e = "";
            t <= 1 ? e = V("tooltips.continueLine") : e = V("tooltips.finishLine"), this._hintMarker.setTooltipContent(e)
        },
        _change(t) {
            this._fireChange(t, "Draw")
        },
        setStyle() {
            this._layer?.setStyle(this.options.templineStyle), this._hintline?.setStyle(this.options.hintlineStyle)
        }
    });
    X.Polygon = X.Line.extend({
        initialize(t) {
            this._map = t, this._shape = "Polygon", this.toolbarButtonName = "drawPolygon"
        },
        enable(t) {
            L.PM.Draw.Line.prototype.enable.call(this, t), this._layer.pm._shape = "Polygon"
        },
        _createMarker(t) {
            let e = new L.Marker(t, {
                draggable: !1,
                icon: L.divIcon({
                    className: "marker-icon"
                })
            });
            return this._setPane(e, "vertexPane"), e._pmTempLayer = !0, this._layerGroup.addLayer(e), this._markers.push(e), this._layer.getLatLngs().flat().length === 1 ? (e.on("click", this._finishShape, this), this._tempSnapLayerIndex = this._otherSnapLayers.push(e) - 1, this.options.snappable && this._cleanupSnapping()) : e.on("click", () => 1), e
        },
        _setTooltipText() {
            let {
                length: t
            } = this._layer.getLatLngs().flat(), e = "";
            t <= 2 ? e = V("tooltips.continueLine") : e = V("tooltips.finishPoly"), this._hintMarker.setTooltipContent(e)
        },
        _finishShape() {
            if (!this.options.allowSelfIntersection && (this._handleSelfIntersection(!0, this._layer.getLatLngs()[0]), this._doesSelfIntersect) || this.options.requireSnapToFinish && !this._hintMarker._snapped && !this._isFirstLayer()) return;
            let t = this._layer.getLatLngs();
            if (t.length <= 2) return;
            let e = L.polygon(t, this.options.pathOptions);
            this._setPane(e, "layerPane"), this._finishLayer(e), e.addTo(this._map.pm._getContainingLayer()), this._fireCreate(e), this._cleanupSnapping(), this._otherSnapLayers.splice(this._tempSnapLayerIndex, 1), delete this._tempSnapLayerIndex, this.disable(), this.options.continueDrawing && this.enable()
        }
    });
    X.Rectangle = X.extend({
        initialize(t) {
            this._map = t, this._shape = "Rectangle", this.toolbarButtonName = "drawRectangle"
        },
        enable(t) {
            if (L.Util.setOptions(this, t), this._enabled = !0, this._layerGroup = new L.FeatureGroup, this._layerGroup._pmTempLayer = !0, this._layerGroup.addTo(this._map), this._layer = L.rectangle([
                    [0, 0],
                    [0, 0]
                ], this.options.pathOptions), this._setPane(this._layer, "layerPane"), this._layer._pmTempLayer = !0, this._startMarker = L.marker(this._map.getCenter(), {
                    icon: L.divIcon({
                        className: "marker-icon rect-start-marker"
                    }),
                    draggable: !1,
                    zIndexOffset: -100,
                    opacity: this.options.cursorMarker ? 1 : 0
                }), this._setPane(this._startMarker, "vertexPane"), this._startMarker._pmTempLayer = !0, this._layerGroup.addLayer(this._startMarker), this._hintMarker = L.marker(this._map.getCenter(), {
                    zIndexOffset: 150,
                    icon: L.divIcon({
                        className: "marker-icon cursor-marker"
                    })
                }), this._setPane(this._hintMarker, "vertexPane"), this._hintMarker._pmTempLayer = !0, this._layerGroup.addLayer(this._hintMarker), this.options.cursorMarker && L.DomUtil.addClass(this._hintMarker._icon, "visible"), this.options.tooltips && this._hintMarker.bindTooltip(V("tooltips.firstVertex"), {
                    permanent: !0,
                    offset: L.point(0, 10),
                    direction: "bottom",
                    opacity: .8
                }).openTooltip(), this.options.cursorMarker) {
                this._styleMarkers = [];
                for (let e = 0; e < 2; e += 1) {
                    let i = L.marker(this._map.getCenter(), {
                        icon: L.divIcon({
                            className: "marker-icon rect-style-marker"
                        }),
                        draggable: !1,
                        zIndexOffset: 100
                    });
                    this._setPane(i, "vertexPane"), i._pmTempLayer = !0, this._layerGroup.addLayer(i), this._styleMarkers.push(i)
                }
            }
            this._map.getContainer().classList.add("geoman-draw-cursor"), this._map.on("click", this._placeStartingMarkers, this), this._map.on("mousemove", this._syncHintMarker, this), this._map.pm.Toolbar.toggleButton(this.toolbarButtonName, !0), this._otherSnapLayers = [], this._fireDrawStart(), this._setGlobalDrawMode()
        },
        disable() {
            this._enabled && (this._enabled = !1, this._map.getContainer().classList.remove("geoman-draw-cursor"), this._map.off("click", this._finishShape, this), this._map.off("click", this._placeStartingMarkers, this), this._map.off("mousemove", this._syncHintMarker, this), this._map.removeLayer(this._layerGroup), this._map.pm.Toolbar.toggleButton(this.toolbarButtonName, !1), this.options.snappable && this._cleanupSnapping(), this._fireDrawEnd(), this._setGlobalDrawMode())
        },
        enabled() {
            return this._enabled
        },
        toggle(t) {
            this.enabled() ? this.disable() : this.enable(t)
        },
        _placeStartingMarkers(t) {
            this._hintMarker._snapped || this._hintMarker.setLatLng(t.latlng);
            let e = this._hintMarker.getLatLng();
            L.DomUtil.addClass(this._startMarker._icon, "visible"), this._startMarker.setLatLng(e), this.options.cursorMarker && this._styleMarkers && this._styleMarkers.forEach(i => {
                L.DomUtil.addClass(i._icon, "visible"), i.setLatLng(e)
            }), this._map.off("click", this._placeStartingMarkers, this), this._map.on("click", this._finishShape, this), this._hintMarker.setTooltipContent(V("tooltips.finishRect")), this._setRectangleOrigin()
        },
        _setRectangleOrigin() {
            let t = this._startMarker.getLatLng();
            t && (this._layerGroup.addLayer(this._layer), this._layer.setLatLngs([t, t]), this._hintMarker.on("move", this._syncRectangleSize, this))
        },
        _syncHintMarker(t) {
            if (this._hintMarker.setLatLng(t.latlng), this.options.snappable) {
                let i = t;
                i.target = this._hintMarker, this._handleSnapping(i)
            }
            let e = this._layerGroup && this._layerGroup.hasLayer(this._layer) ? this._layer.getLatLngs() : [this._hintMarker.getLatLng()];
            this._fireChange(e, "Draw")
        },
        _syncRectangleSize() {
            let t = Ei(this._startMarker.getLatLng(), this._map),
                e = Ei(this._hintMarker.getLatLng(), this._map),
                i = L.PM.Utils._getRotatedRectangle(t, e, this.options.rectangleAngle || 0, this._map);
            if (this._layer.setLatLngs(i), this.options.cursorMarker && this._styleMarkers) {
                let r = [];
                i.forEach(n => {
                    !n.equals(t, 1e-8) && !n.equals(e, 1e-8) && r.push(n)
                }), r.forEach((n, s) => {
                    try {
                        this._styleMarkers[s].setLatLng(n)
                    } catch {}
                })
            }
        },
        _findCorners() {
            let t = this._layer.getLatLngs()[0];
            return L.PM.Utils._getRotatedRectangle(t[0], t[2], this.options.rectangleAngle || 0, this._map)
        },
        _finishShape(t) {
            this._hintMarker._snapped || this._hintMarker.setLatLng(t.latlng);
            let e = this._hintMarker.getLatLng(),
                i = this._startMarker.getLatLng();
            if (this.options.requireSnapToFinish && !this._hintMarker._snapped && !this._isFirstLayer() || i.equals(e)) return;
            let r = L.rectangle([i, e], this.options.pathOptions);
            if (this.options.rectangleAngle) {
                let n = L.PM.Utils._getRotatedRectangle(i, e, this.options.rectangleAngle || 0, this._map);
                r.setLatLngs(n), r.pm && r.pm._setAngle(this.options.rectangleAngle || 0)
            }
            this._setPane(r, "layerPane"), this._finishLayer(r), r.addTo(this._map.pm._getContainingLayer()), this._fireCreate(r), this.disable(), this.options.continueDrawing && this.enable()
        },
        setStyle() {
            this._layer?.setStyle(this.options.pathOptions)
        }
    });
    X.CircleMarker = X.extend({
        initialize(t) {
            this._map = t, this._shape = "CircleMarker", this.toolbarButtonName = "drawCircleMarker", this._layerIsDragging = !1, this._BaseCircleClass = L.CircleMarker, this._minRadiusOption = "minRadiusCircleMarker", this._maxRadiusOption = "maxRadiusCircleMarker", this._editableOption = "resizeableCircleMarker", this._defaultRadius = 10
        },
        enable(t) {
            if (L.Util.setOptions(this, t), this.options.editable && (this.options.resizeableCircleMarker = this.options.editable, delete this.options.editable), this._enabled = !0, this._map.pm.Toolbar.toggleButton(this.toolbarButtonName, !0), this._map.getContainer().classList.add("geoman-draw-cursor"), this.options[this._editableOption]) {
                let e = {};
                L.extend(e, this.options.templineStyle), e.radius = 0, this._layerGroup = new L.FeatureGroup, this._layerGroup._pmTempLayer = !0, this._layerGroup.addTo(this._map), this._layer = new this._BaseCircleClass(this._map.getCenter(), e), this._setPane(this._layer, "layerPane"), this._layer._pmTempLayer = !0, this._centerMarker = L.marker(this._map.getCenter(), {
                    icon: L.divIcon({
                        className: "marker-icon"
                    }),
                    draggable: !1,
                    zIndexOffset: 100
                }), this._setPane(this._centerMarker, "vertexPane"), this._centerMarker._pmTempLayer = !0, this._hintMarker = L.marker(this._map.getCenter(), {
                    zIndexOffset: 110,
                    icon: L.divIcon({
                        className: "marker-icon cursor-marker"
                    })
                }), this._setPane(this._hintMarker, "vertexPane"), this._hintMarker._pmTempLayer = !0, this._layerGroup.addLayer(this._hintMarker), this.options.cursorMarker && L.DomUtil.addClass(this._hintMarker._icon, "visible"), this.options.tooltips && this._hintMarker.bindTooltip(V("tooltips.startCircle"), {
                    permanent: !0,
                    offset: L.point(0, 10),
                    direction: "bottom",
                    opacity: .8
                }).openTooltip(), this._hintline = L.polyline([], this.options.hintlineStyle), this._setPane(this._hintline, "layerPane"), this._hintline._pmTempLayer = !0, this._layerGroup.addLayer(this._hintline), this._map.on("click", this._placeCenterMarker, this)
            } else this._map.on("click", this._createMarker, this), this._hintMarker = new this._BaseCircleClass(this._map.getCenter(), {
                radius: this._defaultRadius,
                ...this.options.templineStyle
            }), this._setPane(this._hintMarker, "layerPane"), this._hintMarker._pmTempLayer = !0, this._hintMarker.addTo(this._map), this._layer = this._hintMarker, this.options.tooltips && this._hintMarker.bindTooltip(V("tooltips.placeCircleMarker"), {
                permanent: !0,
                offset: L.point(0, 10),
                direction: "bottom",
                opacity: .8
            }).openTooltip();
            this._map.on("mousemove", this._syncHintMarker, this), this._extendingEnable(), this._otherSnapLayers = [], this._fireDrawStart(), this._setGlobalDrawMode()
        },
        _extendingEnable() {
            !this.options[this._editableOption] && this.options.markerEditable && this._map.eachLayer(t => {
                this.isRelevantMarker(t) && t.pm.enable()
            }), this._layer.bringToBack()
        },
        disable() {
            this._enabled && (this._enabled = !1, this._map.getContainer().classList.remove("geoman-draw-cursor"), this.options[this._editableOption] ? (this._map.off("click", this._finishShape, this), this._map.off("click", this._placeCenterMarker, this), this._map.removeLayer(this._layerGroup)) : (this._map.off("click", this._createMarker, this), this._extendingDisable(), this._hintMarker.remove()), this._map.off("mousemove", this._syncHintMarker, this), this._map.pm.Toolbar.toggleButton(this.toolbarButtonName, !1), this.options.snappable && this._cleanupSnapping(), this._fireDrawEnd(), this._setGlobalDrawMode())
        },
        _extendingDisable() {
            this._map.eachLayer(t => {
                this.isRelevantMarker(t) && t.pm.disable()
            })
        },
        enabled() {
            return this._enabled
        },
        toggle(t) {
            this.enabled() ? this.disable() : this.enable(t)
        },
        _placeCenterMarker(t) {
            this._layerGroup.addLayer(this._layer), this._layerGroup.addLayer(this._centerMarker), this._hintMarker._snapped || this._hintMarker.setLatLng(t.latlng);
            let e = this._hintMarker.getLatLng();
            this._layerGroup.addLayer(this._layer), this._centerMarker.setLatLng(e), this._map.off("click", this._placeCenterMarker, this), this._map.on("click", this._finishShape, this), this._placeCircleCenter()
        },
        _placeCircleCenter() {
            let t = this._centerMarker.getLatLng();
            t && (this._layer.setLatLng(t), this._hintMarker.on("move", this._syncHintLine, this), this._hintMarker.on("move", this._syncCircleRadius, this), this._hintMarker.setTooltipContent(V("tooltips.finishCircle")), this._fireCenterPlaced(), this._fireChange(this._layer.getLatLng(), "Draw"))
        },
        _syncHintLine() {
            let t = this._centerMarker.getLatLng(),
                e = this._getNewDestinationOfHintMarker();
            this._hintline.setLatLngs([t, e])
        },
        _syncCircleRadius() {
            let t = this._centerMarker.getLatLng(),
                e = this._hintMarker.getLatLng(),
                i = this._distanceCalculation(t, e);
            this.options[this._minRadiusOption] && i < this.options[this._minRadiusOption] ? this._layer.setRadius(this.options[this._minRadiusOption]) : this.options[this._maxRadiusOption] && i > this.options[this._maxRadiusOption] ? this._layer.setRadius(this.options[this._maxRadiusOption]) : this._layer.setRadius(i)
        },
        _syncHintMarker(t) {
            if (this._hintMarker.setLatLng(t.latlng), this._hintMarker.setLatLng(this._getNewDestinationOfHintMarker()), this.options.snappable) {
                let i = t;
                i.target = this._hintMarker, this._handleSnapping(i)
            }
            this._handleHintMarkerSnapping();
            let e = this._layerGroup && this._layerGroup.hasLayer(this._centerMarker) ? this._centerMarker.getLatLng() : this._hintMarker.getLatLng();
            this._fireChange(e, "Draw")
        },
        isRelevantMarker(t) {
            return t instanceof L.CircleMarker && !(t instanceof L.Circle) && t.pm && !t._pmTempLayer
        },
        _createMarker(t) {
            if (this.options.requireSnapToFinish && !this._hintMarker._snapped && !this._isFirstLayer() || !t.latlng || this._layerIsDragging) return;
            this._hintMarker._snapped || this._hintMarker.setLatLng(t.latlng);
            let e = this._hintMarker.getLatLng(),
                i = new this._BaseCircleClass(e, {
                    radius: this._defaultRadius,
                    ...this.options.pathOptions
                });
            this._setPane(i, "layerPane"), this._finishLayer(i), i.addTo(this._map.pm._getContainingLayer()), this._extendingCreateMarker(i), this._fireCreate(i), this._cleanupSnapping(), this.options.continueDrawing || this.disable()
        },
        _extendingCreateMarker(t) {
            t.pm && this.options.markerEditable && t.pm.enable()
        },
        _finishShape(t) {
            if (this.options.requireSnapToFinish && !this._hintMarker._snapped && !this._isFirstLayer()) return;
            this._hintMarker._snapped || this._hintMarker.setLatLng(t.latlng);
            let e = this._centerMarker.getLatLng(),
                i = this._defaultRadius;
            if (this.options[this._editableOption]) {
                let s = this._hintMarker.getLatLng();
                i = this._distanceCalculation(e, s), this.options[this._minRadiusOption] && i < this.options[this._minRadiusOption] ? i = this.options[this._minRadiusOption] : this.options[this._maxRadiusOption] && i > this.options[this._maxRadiusOption] && (i = this.options[this._maxRadiusOption])
            }
            let r = {
                    ...this.options.pathOptions,
                    radius: i
                },
                n = new this._BaseCircleClass(e, r);
            this._setPane(n, "layerPane"), this._finishLayer(n), n.addTo(this._map.pm._getContainingLayer()), n.pm && n.pm._updateHiddenPolyCircle(), this._fireCreate(n), this.disable(), this.options.continueDrawing && this.enable()
        },
        _getNewDestinationOfHintMarker() {
            let t = this._hintMarker.getLatLng();
            if (this.options[this._editableOption]) {
                if (!this._layerGroup.hasLayer(this._centerMarker)) return t;
                let e = this._centerMarker.getLatLng(),
                    i = this._distanceCalculation(e, t);
                this.options[this._minRadiusOption] && i < this.options[this._minRadiusOption] ? t = te(this._map, e, t, this._getMinDistanceInMeter()) : this.options[this._maxRadiusOption] && i > this.options[this._maxRadiusOption] && (t = te(this._map, e, t, this._getMaxDistanceInMeter()))
            }
            return t
        },
        _getMinDistanceInMeter() {
            return L.PM.Utils.pxRadiusToMeterRadius(this.options[this._minRadiusOption], this._map, this._centerMarker.getLatLng())
        },
        _getMaxDistanceInMeter() {
            return L.PM.Utils.pxRadiusToMeterRadius(this.options[this._maxRadiusOption], this._map, this._centerMarker.getLatLng())
        },
        _handleHintMarkerSnapping() {
            if (this.options[this._editableOption]) {
                if (this._hintMarker._snapped) {
                    let t = this._centerMarker.getLatLng(),
                        e = this._hintMarker.getLatLng(),
                        i = this._distanceCalculation(t, e);
                    this._layerGroup.hasLayer(this._centerMarker) && (this.options[this._minRadiusOption] && i < this.options[this._minRadiusOption] ? this._hintMarker.setLatLng(this._hintMarker._orgLatLng) : this.options[this._maxRadiusOption] && i > this.options[this._maxRadiusOption] && this._hintMarker.setLatLng(this._hintMarker._orgLatLng))
                }
                this._hintMarker.setLatLng(this._getNewDestinationOfHintMarker())
            }
        },
        setStyle() {
            let t = {};
            L.extend(t, this.options.templineStyle), this.options[this._editableOption] && (t.radius = 0), this._layer?.setStyle(t), this._hintline?.setStyle(this.options.hintlineStyle)
        },
        _distanceCalculation(t, e) {
            return this._map.project(t).distanceTo(this._map.project(e))
        }
    });
    X.Circle = X.CircleMarker.extend({
        initialize(t) {
            this._map = t, this._shape = "Circle", this.toolbarButtonName = "drawCircle", this._BaseCircleClass = L.Circle, this._minRadiusOption = "minRadiusCircle", this._maxRadiusOption = "maxRadiusCircle", this._editableOption = "resizableCircle", this._defaultRadius = 100
        },
        _extendingEnable() {},
        _extendingDisable() {},
        _extendingCreateMarker() {},
        isRelevantMarker() {},
        _getMinDistanceInMeter() {
            return this.options[this._minRadiusOption]
        },
        _getMaxDistanceInMeter() {
            return this.options[this._maxRadiusOption]
        },
        _distanceCalculation(t, e) {
            return this._map.distance(t, e)
        }
    });

    function rt(t) {
        if (!t) throw new Error("coord is required");
        if (!Array.isArray(t)) {
            if (t.type === "Feature" && t.geometry !== null && t.geometry.type === "Point") return t.geometry.coordinates;
            if (t.type === "Point") return t.coordinates
        }
        if (Array.isArray(t) && t.length >= 2 && !Array.isArray(t[0]) && !Array.isArray(t[1])) return t;
        throw new Error("coord must be GeoJSON Point or an Array of numbers")
    }

    function ot(t) {
        if (Array.isArray(t)) return t;
        if (t.type === "Feature") {
            if (t.geometry !== null) return t.geometry.coordinates
        } else if (t.coordinates) return t.coordinates;
        throw new Error("coords must be GeoJSON Feature, Geometry Object or an Array")
    }

    function ee(t) {
        return t.type === "Feature" ? t.geometry : t
    }

    function Bi(t, e) {
        return t.type === "FeatureCollection" ? "FeatureCollection" : t.type === "GeometryCollection" ? "GeometryCollection" : t.type === "Feature" && t.geometry !== null ? t.geometry.type : t.type
    }

    function xe(t, e, i) {
        if (t !== null)
            for (var r, n, s, a, o, l, u, f = 0, d = 0, P, E = t.type, T = E === "FeatureCollection", G = E === "Feature", _ = T ? t.features.length : 1, x = 0; x < _; x++) {
                u = T ? t.features[x].geometry : G ? t.geometry : t, P = u ? u.type === "GeometryCollection" : !1, o = P ? u.geometries.length : 1;
                for (var b = 0; b < o; b++) {
                    var R = 0,
                        D = 0;
                    if (a = P ? u.geometries[b] : u, a !== null) {
                        l = a.coordinates;
                        var O = a.type;
                        switch (f = i && (O === "Polygon" || O === "MultiPolygon") ? 1 : 0, O) {
                            case null:
                                break;
                            case "Point":
                                if (e(l, d, x, R, D) === !1) return !1;
                                d++, R++;
                                break;
                            case "LineString":
                            case "MultiPoint":
                                for (r = 0; r < l.length; r++) {
                                    if (e(l[r], d, x, R, D) === !1) return !1;
                                    d++, O === "MultiPoint" && R++
                                }
                                O === "LineString" && R++;
                                break;
                            case "Polygon":
                            case "MultiLineString":
                                for (r = 0; r < l.length; r++) {
                                    for (n = 0; n < l[r].length - f; n++) {
                                        if (e(l[r][n], d, x, R, D) === !1) return !1;
                                        d++
                                    }
                                    O === "MultiLineString" && R++, O === "Polygon" && D++
                                }
                                O === "Polygon" && R++;
                                break;
                            case "MultiPolygon":
                                for (r = 0; r < l.length; r++) {
                                    for (D = 0, n = 0; n < l[r].length; n++) {
                                        for (s = 0; s < l[r][n].length - f; s++) {
                                            if (e(l[r][n][s], d, x, R, D) === !1) return !1;
                                            d++
                                        }
                                        D++
                                    }
                                    R++
                                }
                                break;
                            case "GeometryCollection":
                                for (r = 0; r < a.geometries.length; r++)
                                    if (xe(a.geometries[r], e, i) === !1) return !1;
                                break;
                            default:
                                throw new Error("Unknown Geometry Type")
                        }
                    }
                }
            }
    }

    function Ft(t, e) {
        if (t.type === "Feature") e(t, 0);
        else if (t.type === "FeatureCollection")
            for (var i = 0; i < t.features.length && e(t.features[i], i) !== !1; i++);
    }

    function Wo(t, e, i) {
        var r = i;
        return Ft(t, function(n, s) {
            s === 0 && i === void 0 ? r = n : r = e(r, n, s)
        }), r
    }

    function fm(t, e) {
        var i, r, n, s, a, o, l, u, f, d, P = 0,
            E = t.type === "FeatureCollection",
            T = t.type === "Feature",
            G = E ? t.features.length : 1;
        for (i = 0; i < G; i++) {
            for (o = E ? t.features[i].geometry : T ? t.geometry : t, u = E ? t.features[i].properties : T ? t.properties : {}, f = E ? t.features[i].bbox : T ? t.bbox : void 0, d = E ? t.features[i].id : T ? t.id : void 0, l = o ? o.type === "GeometryCollection" : !1, a = l ? o.geometries.length : 1, n = 0; n < a; n++) {
                if (s = l ? o.geometries[n] : o, s === null) {
                    if (e(null, P, u, f, d) === !1) return !1;
                    continue
                }
                switch (s.type) {
                    case "Point":
                    case "LineString":
                    case "MultiPoint":
                    case "Polygon":
                    case "MultiLineString":
                    case "MultiPolygon": {
                        if (e(s, P, u, f, d) === !1) return !1;
                        break
                    }
                    case "GeometryCollection": {
                        for (r = 0; r < s.geometries.length; r++)
                            if (e(s.geometries[r], P, u, f, d) === !1) return !1;
                        break
                    }
                    default:
                        throw new Error("Unknown Geometry Type")
                }
            }
            P++
        }
    }

    function ie(t, e) {
        fm(t, function(i, r, n, s, a) {
            var o = i === null ? null : i.type;
            switch (o) {
                case null:
                case "Point":
                case "LineString":
                case "Polygon":
                    return e(Dt(i, n, {
                        bbox: s,
                        id: a
                    }), r, 0) === !1 ? !1 : void 0
            }
            var l;
            switch (o) {
                case "MultiPoint":
                    l = "Point";
                    break;
                case "MultiLineString":
                    l = "LineString";
                    break;
                case "MultiPolygon":
                    l = "Polygon";
                    break
            }
            for (var u = 0; u < i.coordinates.length; u++) {
                var f = i.coordinates[u],
                    d = {
                        type: l,
                        coordinates: f
                    };
                if (e(Dt(d, n), r, u) === !1) return !1
            }
        })
    }

    function dm(t) {
        if (!t) throw new Error("geojson is required");
        var e = [];
        return ie(t, function(i) {
            gm(i, e)
        }), yt(e)
    }

    function gm(t, e) {
        var i = [],
            r = t.geometry;
        if (r !== null) {
            switch (r.type) {
                case "Polygon":
                    i = ot(r);
                    break;
                case "LineString":
                    i = [ot(r)]
            }
            i.forEach(function(n) {
                var s = mm(n, t.properties);
                s.forEach(function(a) {
                    a.id = e.length, e.push(a)
                })
            })
        }
    }

    function mm(t, e) {
        var i = [];
        return t.reduce(function(r, n) {
            var s = wt([r, n], e);
            return s.bbox = _m(r, n), i.push(s), n
        }), i
    }

    function _m(t, e) {
        var i = t[0],
            r = t[1],
            n = e[0],
            s = e[1],
            a = i < n ? i : n,
            o = r < s ? r : s,
            l = i > n ? i : n,
            u = r > s ? r : s;
        return [a, o, l, u]
    }
    var we = dm;
    var gl = xt(Ui(), 1);

    function jm(t, e) {
        var i = {},
            r = [];
        if (t.type === "LineString" && (t = Dt(t)), e.type === "LineString" && (e = Dt(e)), t.type === "Feature" && e.type === "Feature" && t.geometry !== null && e.geometry !== null && t.geometry.type === "LineString" && e.geometry.type === "LineString" && t.geometry.coordinates.length === 2 && e.geometry.coordinates.length === 2) {
            var n = dl(t, e);
            return n && r.push(n), yt(r)
        }
        var s = (0, gl.default)();
        return s.load(we(e)), Ft(we(t), function(a) {
            Ft(s.search(a), function(o) {
                var l = dl(a, o);
                if (l) {
                    var u = ot(l).join(",");
                    i[u] || (i[u] = !0, r.push(l))
                }
            })
        }), yt(r)
    }

    function dl(t, e) {
        var i = ot(t),
            r = ot(e);
        if (i.length !== 2) throw new Error("<intersects> line1 must only contain 2 coordinates");
        if (r.length !== 2) throw new Error("<intersects> line2 must only contain 2 coordinates");
        var n = i[0][0],
            s = i[0][1],
            a = i[1][0],
            o = i[1][1],
            l = r[0][0],
            u = r[0][1],
            f = r[1][0],
            d = r[1][1],
            P = (d - u) * (a - n) - (f - l) * (o - s),
            E = (f - l) * (s - u) - (d - u) * (n - l),
            T = (a - n) * (s - u) - (o - s) * (n - l);
        if (P === 0) return null;
        var G = E / P,
            _ = T / P;
        if (G >= 0 && G <= 1 && _ >= 0 && _ <= 1) {
            var x = n + G * (a - n),
                b = s + G * (o - s);
            return _t([x, b])
        }
        return null
    }
    var pt = jm;
    var Xi = xt(Ui(), 1);

    function Km(t, e, i) {
        i === void 0 && (i = {});
        var r = rt(t),
            n = rt(e),
            s = lt(n[1] - r[1]),
            a = lt(n[0] - r[0]),
            o = lt(r[1]),
            l = lt(n[1]),
            u = Math.pow(Math.sin(s / 2), 2) + Math.pow(Math.sin(a / 2), 2) * Math.cos(o) * Math.cos(l);
        return $o(2 * Math.atan2(Math.sqrt(u), Math.sqrt(1 - u)), i.units)
    }
    var Ct = Km;

    function Hm(t) {
        var e = t[0],
            i = t[1],
            r = t[2],
            n = t[3],
            s = Ct(t.slice(0, 2), [r, i]),
            a = Ct(t.slice(0, 2), [e, n]);
        if (s >= a) {
            var o = (i + n) / 2;
            return [e, o - (r - e) / 2, r, o + (r - e) / 2]
        } else {
            var l = (e + r) / 2;
            return [l - (n - i) / 2, i, l + (n - i) / 2, n]
        }
    }
    var ml = Hm;

    function ji(t) {
        var e = [1 / 0, 1 / 0, -1 / 0, -1 / 0];
        return xe(t, function(i) {
            e[0] > i[0] && (e[0] = i[0]), e[1] > i[1] && (e[1] = i[1]), e[2] < i[0] && (e[2] = i[0]), e[3] < i[1] && (e[3] = i[1])
        }), e
    }
    ji.default = ji;
    var Vt = ji;

    function Xm(t, e) {
        e === void 0 && (e = {});
        var i = e.precision,
            r = e.coordinates,
            n = e.mutate;
        if (i = i == null || isNaN(i) ? 6 : i, r = r == null || isNaN(r) ? 3 : r, !t) throw new Error("<geojson> is required");
        if (typeof i != "number") throw new Error("<precision> must be a number");
        if (typeof r != "number") throw new Error("<coordinates> must be a number");
        (n === !1 || n === void 0) && (t = JSON.parse(JSON.stringify(t)));
        var s = Math.pow(10, i);
        return xe(t, function(a) {
            Ym(a, s, r)
        }), t
    }

    function Ym(t, e, i) {
        t.length > i && t.splice(i, t.length);
        for (var r = 0; r < t.length; r++) t[r] = Math.round(t[r] * e) / e;
        return t
    }
    var _l = Xm;

    function Ke(t, e, i) {
        if (i === void 0 && (i = {}), i.final === !0) return Jm(t, e);
        var r = rt(t),
            n = rt(e),
            s = lt(r[0]),
            a = lt(n[0]),
            o = lt(r[1]),
            l = lt(n[1]),
            u = Math.sin(a - s) * Math.cos(l),
            f = Math.cos(o) * Math.sin(l) - Math.sin(o) * Math.cos(l) * Math.cos(a - s);
        return Me(Math.atan2(u, f))
    }

    function Jm(t, e) {
        var i = Ke(e, t);
        return i = (i + 180) % 360, i
    }

    function He(t, e, i, r) {
        r === void 0 && (r = {});
        var n = rt(t),
            s = lt(n[0]),
            a = lt(n[1]),
            o = lt(i),
            l = Zo(e, r.units),
            u = Math.asin(Math.sin(a) * Math.cos(l) + Math.cos(a) * Math.sin(l) * Math.cos(o)),
            f = s + Math.atan2(Math.sin(o) * Math.sin(l) * Math.cos(a), Math.cos(l) - Math.sin(a) * Math.sin(u)),
            d = Me(f),
            P = Me(u);
        return _t([d, P], r.properties)
    }

    function $m(t, e, i) {
        i === void 0 && (i = {});
        var r = _t([1 / 0, 1 / 0], {
                dist: 1 / 0
            }),
            n = 0;
        return ie(t, function(s) {
            for (var a = ot(s), o = 0; o < a.length - 1; o++) {
                var l = _t(a[o]);
                l.properties.dist = Ct(e, l, i);
                var u = _t(a[o + 1]);
                u.properties.dist = Ct(e, u, i);
                var f = Ct(l, u, i),
                    d = Math.max(l.properties.dist, u.properties.dist),
                    P = Ke(l, u),
                    E = He(e, d, P + 90, i),
                    T = He(e, d, P - 90, i),
                    G = pt(wt([E.geometry.coordinates, T.geometry.coordinates]), wt([l.geometry.coordinates, u.geometry.coordinates])),
                    _ = null;
                G.features.length > 0 && (_ = G.features[0], _.properties.dist = Ct(e, _, i), _.properties.location = n + Ct(l, _, i)), l.properties.dist < r.properties.dist && (r = l, r.properties.index = o, r.properties.location = n), u.properties.dist < r.properties.dist && (r = u, r.properties.index = o + 1, r.properties.location = n + f), _ && _.properties.dist < r.properties.dist && (r = _, r.properties.index = o), n += f
            }
        }), r
    }
    var yl = $m;

    function Zm(t, e) {
        if (!t) throw new Error("line is required");
        if (!e) throw new Error("splitter is required");
        var i = Bi(t),
            r = Bi(e);
        if (i !== "LineString") throw new Error("line must be LineString");
        if (r === "FeatureCollection") throw new Error("splitter cannot be a FeatureCollection");
        if (r === "GeometryCollection") throw new Error("splitter cannot be a GeometryCollection");
        var n = _l(e, {
            precision: 7
        });
        switch (r) {
            case "Point":
                return Hi(t, n);
            case "MultiPoint":
                return Ll(t, n);
            case "LineString":
            case "MultiLineString":
            case "Polygon":
            case "MultiPolygon":
                return Ll(t, pt(t, n))
        }
    }

    function Ll(t, e) {
        var i = [],
            r = (0, Xi.default)();
        return ie(e, function(n) {
            if (i.forEach(function(o, l) {
                    o.id = l
                }), !i.length) i = Hi(t, n).features, i.forEach(function(o) {
                o.bbox || (o.bbox = ml(Vt(o)))
            }), r.load(yt(i));
            else {
                var s = r.search(n);
                if (s.features.length) {
                    var a = bl(n, s);
                    i = i.filter(function(o) {
                        return o.id !== a.id
                    }), r.remove(a), Ft(Hi(a, n), function(o) {
                        i.push(o), r.insert(o)
                    })
                }
            }
        }), yt(i)
    }

    function Hi(t, e) {
        var i = [],
            r = ot(t)[0],
            n = ot(t)[t.geometry.coordinates.length - 1];
        if (Ki(r, rt(e)) || Ki(n, rt(e))) return yt([t]);
        var s = (0, Xi.default)(),
            a = we(t);
        s.load(a);
        var o = s.search(e);
        if (!o.features.length) return yt([t]);
        var l = bl(e, o),
            u = [r],
            f = Wo(a, function(d, P, E) {
                var T = ot(P)[1],
                    G = rt(e);
                return E === l.id ? (d.push(G), i.push(wt(d)), Ki(G, T) ? [G] : [G, T]) : (d.push(T), d)
            }, u);
        return f.length > 1 && i.push(wt(f)), yt(i)
    }

    function bl(t, e) {
        if (!e.features.length) throw new Error("lines must contain features");
        if (e.features.length === 1) return e.features[0];
        var i, r = 1 / 0;
        return Ft(e, function(n) {
            var s = yl(n, t),
                a = s.properties.dist;
            a < r && (i = n, r = a)
        }), i
    }

    function Ki(t, e) {
        return t[0] === e[0] && t[1] === e[1]
    }
    var vl = Zm;

    function ne(t, e, i) {
        if (i === void 0 && (i = {}), !t) throw new Error("point is required");
        if (!e) throw new Error("polygon is required");
        var r = rt(t),
            n = ee(e),
            s = n.type,
            a = e.bbox,
            o = n.coordinates;
        if (a && Wm(r, a) === !1) return !1;
        s === "Polygon" && (o = [o]);
        for (var l = !1, u = 0; u < o.length && !l; u++)
            if (kl(r, o[u][0], i.ignoreBoundary)) {
                for (var f = !1, d = 1; d < o[u].length && !f;) kl(r, o[u][d], !i.ignoreBoundary) && (f = !0), d++;
                f || (l = !0)
            } return l
    }

    function kl(t, e, i) {
        var r = !1;
        e[0][0] === e[e.length - 1][0] && e[0][1] === e[e.length - 1][1] && (e = e.slice(0, e.length - 1));
        for (var n = 0, s = e.length - 1; n < e.length; s = n++) {
            var a = e[n][0],
                o = e[n][1],
                l = e[s][0],
                u = e[s][1],
                f = t[1] * (a - l) + o * (l - t[0]) + u * (t[0] - a) === 0 && (a - t[0]) * (l - t[0]) <= 0 && (o - t[1]) * (u - t[1]) <= 0;
            if (f) return !i;
            var d = o > t[1] != u > t[1] && t[0] < (l - a) * (t[1] - o) / (u - o) + a;
            d && (r = !r)
        }
        return r
    }

    function Wm(t, e) {
        return e[0] <= t[0] && e[1] <= t[1] && e[2] >= t[0] && e[3] >= t[1]
    }

    function Qm(t, e, i) {
        i === void 0 && (i = {});
        for (var r = rt(t), n = ot(e), s = 0; s < n.length - 1; s++) {
            var a = !1;
            if (i.ignoreEndVertices && (s === 0 && (a = "start"), s === n.length - 2 && (a = "end"), s === 0 && s + 1 === n.length - 1 && (a = "both")), t_(n[s], n[s + 1], r, a, typeof i.epsilon > "u" ? null : i.epsilon)) return !0
        }
        return !1
    }

    function t_(t, e, i, r, n) {
        var s = i[0],
            a = i[1],
            o = t[0],
            l = t[1],
            u = e[0],
            f = e[1],
            d = i[0] - o,
            P = i[1] - l,
            E = u - o,
            T = f - l,
            G = d * T - P * E;
        if (n !== null) {
            if (Math.abs(G) > n) return !1
        } else if (G !== 0) return !1;
        if (r) {
            if (r === "start") return Math.abs(E) >= Math.abs(T) ? E > 0 ? o < s && s <= u : u <= s && s < o : T > 0 ? l < a && a <= f : f <= a && a < l;
            if (r === "end") return Math.abs(E) >= Math.abs(T) ? E > 0 ? o <= s && s < u : u < s && s <= o : T > 0 ? l <= a && a < f : f < a && a <= l;
            if (r === "both") return Math.abs(E) >= Math.abs(T) ? E > 0 ? o < s && s < u : u < s && s < o : T > 0 ? l < a && a < f : f < a && a < l
        } else return Math.abs(E) >= Math.abs(T) ? E > 0 ? o <= s && s <= u : u <= s && s <= o : T > 0 ? l <= a && a <= f : f <= a && a <= l;
        return !1
    }
    var se = Qm;

    function Yi(t, e) {
        var i = ee(t),
            r = ee(e),
            n = i.type,
            s = r.type,
            a = i.coordinates,
            o = r.coordinates;
        switch (n) {
            case "Point":
                switch (s) {
                    case "Point":
                        return Ji(a, o);
                    default:
                        throw new Error("feature2 " + s + " geometry not supported")
                }
            case "MultiPoint":
                switch (s) {
                    case "Point":
                        return e_(i, r);
                    case "MultiPoint":
                        return i_(i, r);
                    default:
                        throw new Error("feature2 " + s + " geometry not supported")
                }
            case "LineString":
                switch (s) {
                    case "Point":
                        return se(r, i, {
                            ignoreEndVertices: !0
                        });
                    case "LineString":
                        return s_(i, r);
                    case "MultiPoint":
                        return r_(i, r);
                    default:
                        throw new Error("feature2 " + s + " geometry not supported")
                }
            case "Polygon":
                switch (s) {
                    case "Point":
                        return ne(r, i, {
                            ignoreBoundary: !0
                        });
                    case "LineString":
                        return a_(i, r);
                    case "Polygon":
                        return o_(i, r);
                    case "MultiPoint":
                        return n_(i, r);
                    default:
                        throw new Error("feature2 " + s + " geometry not supported")
                }
            default:
                throw new Error("feature1 " + n + " geometry not supported")
        }
    }

    function e_(t, e) {
        var i, r = !1;
        for (i = 0; i < t.coordinates.length; i++)
            if (Ji(t.coordinates[i], e.coordinates)) {
                r = !0;
                break
            } return r
    }

    function i_(t, e) {
        for (var i = 0, r = e.coordinates; i < r.length; i++) {
            for (var n = r[i], s = !1, a = 0, o = t.coordinates; a < o.length; a++) {
                var l = o[a];
                if (Ji(n, l)) {
                    s = !0;
                    break
                }
            }
            if (!s) return !1
        }
        return !0
    }

    function r_(t, e) {
        for (var i = !1, r = 0, n = e.coordinates; r < n.length; r++) {
            var s = n[r];
            if (se(s, t, {
                    ignoreEndVertices: !0
                }) && (i = !0), !se(s, t)) return !1
        }
        return !!i
    }

    function n_(t, e) {
        for (var i = 0, r = e.coordinates; i < r.length; i++) {
            var n = r[i];
            if (!ne(n, t, {
                    ignoreBoundary: !0
                })) return !1
        }
        return !0
    }

    function s_(t, e) {
        for (var i = !1, r = 0, n = e.coordinates; r < n.length; r++) {
            var s = n[r];
            if (se({
                    type: "Point",
                    coordinates: s
                }, t, {
                    ignoreEndVertices: !0
                }) && (i = !0), !se({
                    type: "Point",
                    coordinates: s
                }, t, {
                    ignoreEndVertices: !1
                })) return !1
        }
        return i
    }

    function a_(t, e) {
        var i = !1,
            r = 0,
            n = Vt(t),
            s = Vt(e);
        if (!Ml(n, s)) return !1;
        for (r; r < e.coordinates.length - 1; r++) {
            var a = l_(e.coordinates[r], e.coordinates[r + 1]);
            if (ne({
                    type: "Point",
                    coordinates: a
                }, t, {
                    ignoreBoundary: !0
                })) {
                i = !0;
                break
            }
        }
        return i
    }

    function o_(t, e) {
        if (t.type === "Feature" && t.geometry === null || e.type === "Feature" && e.geometry === null) return !1;
        var i = Vt(t),
            r = Vt(e);
        if (!Ml(i, r)) return !1;
        for (var n = ee(e).coordinates, s = 0, a = n; s < a.length; s++)
            for (var o = a[s], l = 0, u = o; l < u.length; l++) {
                var f = u[l];
                if (!ne(f, t)) return !1
            }
        return !0
    }

    function Ml(t, e) {
        return !(t[0] > e[0] || t[2] < e[2] || t[1] > e[1] || t[3] < e[3])
    }

    function Ji(t, e) {
        return t[0] === e[0] && t[1] === e[1]
    }

    function l_(t, e) {
        return [(t[0] + e[0]) / 2, (t[1] + e[1]) / 2]
    }
    var Kl = xt(Le());
    var Xe = t => () => t;
    var Ee = t => {
        let e = t ? (i, r) => r.minus(i).abs().isLessThanOrEqualTo(t) : Xe(!1);
        return (i, r) => e(i, r) ? 0 : i.comparedTo(r)
    };

    function xl(t) {
        let e = t ? (i, r, n, s, a) => i.exponentiatedBy(2).isLessThanOrEqualTo(s.minus(r).exponentiatedBy(2).plus(a.minus(n).exponentiatedBy(2)).times(t)) : Xe(!1);
        return (i, r, n) => {
            let s = i.x,
                a = i.y,
                o = n.x,
                l = n.y,
                u = a.minus(l).times(r.x.minus(o)).minus(s.minus(o).times(r.y.minus(l)));
            return e(u, s, a, o, l) ? 0 : u.comparedTo(0)
        }
    }
    var h_ = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,
        $i = Math.ceil,
        dt = Math.floor,
        ht = "[BigNumber Error] ",
        wl = ht + "Number primitive has more than 15 significant digits: ",
        Lt = 1e14,
        F = 14,
        Zi = 9007199254740991,
        Wi = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13],
        At = 1e7,
        tt = 1e9;

    function Cl(t) {
        var e, i, r, n = b.prototype = {
                constructor: b,
                toString: null,
                valueOf: null
            },
            s = new b(1),
            a = 20,
            o = 4,
            l = -7,
            u = 21,
            f = -1e7,
            d = 1e7,
            P = !1,
            E = 1,
            T = 0,
            G = {
                prefix: "",
                groupSize: 3,
                secondaryGroupSize: 0,
                groupSeparator: ",",
                decimalSeparator: ".",
                fractionGroupSize: 0,
                fractionGroupSeparator: "\xA0",
                suffix: ""
            },
            _ = "0123456789abcdefghijklmnopqrstuvwxyz",
            x = !0;

        function b(h, c) {
            var p, y, g, k, C, m, v, w, M = this;
            if (!(M instanceof b)) return new b(h, c);
            if (c == null) {
                if (h && h._isBigNumber === !0) {
                    M.s = h.s, !h.c || h.e > d ? M.c = M.e = null : h.e < f ? M.c = [M.e = 0] : (M.e = h.e, M.c = h.c.slice());
                    return
                }
                if ((m = typeof h == "number") && h * 0 == 0) {
                    if (M.s = 1 / h < 0 ? (h = -h, -1) : 1, h === ~~h) {
                        for (k = 0, C = h; C >= 10; C /= 10, k++);
                        k > d ? M.c = M.e = null : (M.e = k, M.c = [h]);
                        return
                    }
                    w = String(h)
                } else {
                    if (!h_.test(w = String(h))) return r(M, w, m);
                    M.s = w.charCodeAt(0) == 45 ? (w = w.slice(1), -1) : 1
                }(k = w.indexOf(".")) > -1 && (w = w.replace(".", "")), (C = w.search(/e/i)) > 0 ? (k < 0 && (k = C), k += +w.slice(C + 1), w = w.substring(0, C)) : k < 0 && (k = w.length)
            } else {
                if (J(c, 2, _.length, "Base"), c == 10 && x) return M = new b(h), A(M, a + M.e + 1, o);
                if (w = String(h), m = typeof h == "number") {
                    if (h * 0 != 0) return r(M, w, m, c);
                    if (M.s = 1 / h < 0 ? (w = w.slice(1), -1) : 1, b.DEBUG && w.replace(/^0\.0*|\./, "").length > 15) throw Error(wl + h)
                } else M.s = w.charCodeAt(0) === 45 ? (w = w.slice(1), -1) : 1;
                for (p = _.slice(0, c), k = C = 0, v = w.length; C < v; C++)
                    if (p.indexOf(y = w.charAt(C)) < 0) {
                        if (y == ".") {
                            if (C > k) {
                                k = v;
                                continue
                            }
                        } else if (!g && (w == w.toUpperCase() && (w = w.toLowerCase()) || w == w.toLowerCase() && (w = w.toUpperCase()))) {
                            g = !0, C = -1, k = 0;
                            continue
                        }
                        return r(M, String(h), m, c)
                    } m = !1, w = i(w, c, 10, M.s), (k = w.indexOf(".")) > -1 ? w = w.replace(".", "") : k = w.length
            }
            for (C = 0; w.charCodeAt(C) === 48; C++);
            for (v = w.length; w.charCodeAt(--v) === 48;);
            if (w = w.slice(C, ++v)) {
                if (v -= C, m && b.DEBUG && v > 15 && (h > Zi || h !== dt(h))) throw Error(wl + M.s * h);
                if ((k = k - C - 1) > d) M.c = M.e = null;
                else if (k < f) M.c = [M.e = 0];
                else {
                    if (M.e = k, M.c = [], C = (k + 1) % F, k < 0 && (C += F), C < v) {
                        for (C && M.c.push(+w.slice(0, C)), v -= F; C < v;) M.c.push(+w.slice(C, C += F));
                        C = F - (w = w.slice(C)).length
                    } else C -= v;
                    for (; C--; w += "0");
                    M.c.push(+w)
                }
            } else M.c = [M.e = 0]
        }
        b.clone = Cl, b.ROUND_UP = 0, b.ROUND_DOWN = 1, b.ROUND_CEIL = 2, b.ROUND_FLOOR = 3, b.ROUND_HALF_UP = 4, b.ROUND_HALF_DOWN = 5, b.ROUND_HALF_EVEN = 6, b.ROUND_HALF_CEIL = 7, b.ROUND_HALF_FLOOR = 8, b.EUCLID = 9, b.config = b.set = function(h) {
            var c, p;
            if (h != null)
                if (typeof h == "object") {
                    if (h.hasOwnProperty(c = "DECIMAL_PLACES") && (p = h[c], J(p, 0, tt, c), a = p), h.hasOwnProperty(c = "ROUNDING_MODE") && (p = h[c], J(p, 0, 8, c), o = p), h.hasOwnProperty(c = "EXPONENTIAL_AT") && (p = h[c], p && p.pop ? (J(p[0], -tt, 0, c), J(p[1], 0, tt, c), l = p[0], u = p[1]) : (J(p, -tt, tt, c), l = -(u = p < 0 ? -p : p))), h.hasOwnProperty(c = "RANGE"))
                        if (p = h[c], p && p.pop) J(p[0], -tt, -1, c), J(p[1], 1, tt, c), f = p[0], d = p[1];
                        else if (J(p, -tt, tt, c), p) f = -(d = p < 0 ? -p : p);
                    else throw Error(ht + c + " cannot be zero: " + p);
                    if (h.hasOwnProperty(c = "CRYPTO"))
                        if (p = h[c], p === !!p)
                            if (p)
                                if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes)) P = p;
                                else throw P = !p, Error(ht + "crypto unavailable");
                    else P = p;
                    else throw Error(ht + c + " not true or false: " + p);
                    if (h.hasOwnProperty(c = "MODULO_MODE") && (p = h[c], J(p, 0, 9, c), E = p), h.hasOwnProperty(c = "POW_PRECISION") && (p = h[c], J(p, 0, tt, c), T = p), h.hasOwnProperty(c = "FORMAT"))
                        if (p = h[c], typeof p == "object") G = p;
                        else throw Error(ht + c + " not an object: " + p);
                    if (h.hasOwnProperty(c = "ALPHABET"))
                        if (p = h[c], typeof p == "string" && !/^.?$|[+\-.\s]|(.).*\1/.test(p)) x = p.slice(0, 10) == "0123456789", _ = p;
                        else throw Error(ht + c + " invalid: " + p)
                } else throw Error(ht + "Object expected: " + h);
            return {
                DECIMAL_PLACES: a,
                ROUNDING_MODE: o,
                EXPONENTIAL_AT: [l, u],
                RANGE: [f, d],
                CRYPTO: P,
                MODULO_MODE: E,
                POW_PRECISION: T,
                FORMAT: G,
                ALPHABET: _
            }
        }, b.isBigNumber = function(h) {
            if (!h || h._isBigNumber !== !0) return !1;
            if (!b.DEBUG) return !0;
            var c, p, y = h.c,
                g = h.e,
                k = h.s;
            t: if ({}.toString.call(y) == "[object Array]") {
                if ((k === 1 || k === -1) && g >= -tt && g <= tt && g === dt(g)) {
                    if (y[0] === 0) {
                        if (g === 0 && y.length === 1) return !0;
                        break t
                    }
                    if (c = (g + 1) % F, c < 1 && (c += F), String(y[0]).length == c) {
                        for (c = 0; c < y.length; c++)
                            if (p = y[c], p < 0 || p >= Lt || p !== dt(p)) break t;
                        if (p !== 0) return !0
                    }
                }
            } else if (y === null && g === null && (k === null || k === 1 || k === -1)) return !0;
            throw Error(ht + "Invalid BigNumber: " + h)
        }, b.maximum = b.max = function() {
            return D(arguments, -1)
        }, b.minimum = b.min = function() {
            return D(arguments, 1)
        }, b.random = function() {
            var h = 9007199254740992,
                c = Math.random() * h & 2097151 ? function() {
                    return dt(Math.random() * h)
                } : function() {
                    return (Math.random() * 1073741824 | 0) * 8388608 + (Math.random() * 8388608 | 0)
                };
            return function(p) {
                var y, g, k, C, m, v = 0,
                    w = [],
                    M = new b(s);
                if (p == null ? p = a : J(p, 0, tt), C = $i(p / F), P)
                    if (crypto.getRandomValues) {
                        for (y = crypto.getRandomValues(new Uint32Array(C *= 2)); v < C;) m = y[v] * 131072 + (y[v + 1] >>> 11), m >= 9e15 ? (g = crypto.getRandomValues(new Uint32Array(2)), y[v] = g[0], y[v + 1] = g[1]) : (w.push(m % 1e14), v += 2);
                        v = C / 2
                    } else if (crypto.randomBytes) {
                    for (y = crypto.randomBytes(C *= 7); v < C;) m = (y[v] & 31) * 281474976710656 + y[v + 1] * 1099511627776 + y[v + 2] * 4294967296 + y[v + 3] * 16777216 + (y[v + 4] << 16) + (y[v + 5] << 8) + y[v + 6], m >= 9e15 ? crypto.randomBytes(7).copy(y, v) : (w.push(m % 1e14), v += 7);
                    v = C / 7
                } else throw P = !1, Error(ht + "crypto unavailable");
                if (!P)
                    for (; v < C;) m = c(), m < 9e15 && (w[v++] = m % 1e14);
                for (C = w[--v], p %= F, C && p && (m = Wi[F - p], w[v] = dt(C / m) * m); w[v] === 0; w.pop(), v--);
                if (v < 0) w = [k = 0];
                else {
                    for (k = -1; w[0] === 0; w.splice(0, 1), k -= F);
                    for (v = 1, m = w[0]; m >= 10; m /= 10, v++);
                    v < F && (k -= F - v)
                }
                return M.e = k, M.c = w, M
            }
        }(), b.sum = function() {
            for (var h = 1, c = arguments, p = new b(c[0]); h < c.length;) p = p.plus(c[h++]);
            return p
        }, i = function() {
            var h = "0123456789";

            function c(p, y, g, k) {
                for (var C, m = [0], v, w = 0, M = p.length; w < M;) {
                    for (v = m.length; v--; m[v] *= y);
                    for (m[0] += k.indexOf(p.charAt(w++)), C = 0; C < m.length; C++) m[C] > g - 1 && (m[C + 1] == null && (m[C + 1] = 0), m[C + 1] += m[C] / g | 0, m[C] %= g)
                }
                return m.reverse()
            }
            return function(p, y, g, k, C) {
                var m, v, w, M, B, I, N, j, $ = p.indexOf("."),
                    W = a,
                    U = o;
                for ($ >= 0 && (M = T, T = 0, p = p.replace(".", ""), j = new b(y), I = j.pow(p.length - $), T = M, j.c = c(Et(ft(I.c), I.e, "0"), 10, g, h), j.e = j.c.length), N = c(p, y, g, C ? (m = _, h) : (m = h, _)), w = M = N.length; N[--M] == 0; N.pop());
                if (!N[0]) return m.charAt(0);
                if ($ < 0 ? --w : (I.c = N, I.e = w, I.s = k, I = e(I, j, W, U, g), N = I.c, B = I.r, w = I.e), v = w + W + 1, $ = N[v], M = g / 2, B = B || v < 0 || N[v + 1] != null, B = U < 4 ? ($ != null || B) && (U == 0 || U == (I.s < 0 ? 3 : 2)) : $ > M || $ == M && (U == 4 || B || U == 6 && N[v - 1] & 1 || U == (I.s < 0 ? 8 : 7)), v < 1 || !N[0]) p = B ? Et(m.charAt(1), -W, m.charAt(0)) : m.charAt(0);
                else {
                    if (N.length = v, B)
                        for (--g; ++N[--v] > g;) N[v] = 0, v || (++w, N = [1].concat(N));
                    for (M = N.length; !N[--M];);
                    for ($ = 0, p = ""; $ <= M; p += m.charAt(N[$++]));
                    p = Et(p, w, m.charAt(0))
                }
                return p
            }
        }(), e = function() {
            function h(y, g, k) {
                var C, m, v, w, M = 0,
                    B = y.length,
                    I = g % At,
                    N = g / At | 0;
                for (y = y.slice(); B--;) v = y[B] % At, w = y[B] / At | 0, C = N * v + w * I, m = I * v + C % At * At + M, M = (m / k | 0) + (C / At | 0) + N * w, y[B] = m % k;
                return M && (y = [M].concat(y)), y
            }

            function c(y, g, k, C) {
                var m, v;
                if (k != C) v = k > C ? 1 : -1;
                else
                    for (m = v = 0; m < k; m++)
                        if (y[m] != g[m]) {
                            v = y[m] > g[m] ? 1 : -1;
                            break
                        } return v
            }

            function p(y, g, k, C) {
                for (var m = 0; k--;) y[k] -= m, m = y[k] < g[k] ? 1 : 0, y[k] = m * C + y[k] - g[k];
                for (; !y[0] && y.length > 1; y.splice(0, 1));
            }
            return function(y, g, k, C, m) {
                var v, w, M, B, I, N, j, $, W, U, K, it, De, si, ai, bt, le, ct = y.s == g.s ? 1 : -1,
                    st = y.c,
                    Z = g.c;
                if (!st || !st[0] || !Z || !Z[0]) return new b(!y.s || !g.s || (st ? Z && st[0] == Z[0] : !Z) ? NaN : st && st[0] == 0 || !Z ? ct * 0 : ct / 0);
                for ($ = new b(ct), W = $.c = [], w = y.e - g.e, ct = k + w + 1, m || (m = Lt, w = gt(y.e / F) - gt(g.e / F), ct = ct / F | 0), M = 0; Z[M] == (st[M] || 0); M++);
                if (Z[M] > (st[M] || 0) && w--, ct < 0) W.push(1), B = !0;
                else {
                    for (si = st.length, bt = Z.length, M = 0, ct += 2, I = dt(m / (Z[0] + 1)), I > 1 && (Z = h(Z, I, m), st = h(st, I, m), bt = Z.length, si = st.length), De = bt, U = st.slice(0, bt), K = U.length; K < bt; U[K++] = 0);
                    le = Z.slice(), le = [0].concat(le), ai = Z[0], Z[1] >= m / 2 && ai++;
                    do {
                        if (I = 0, v = c(Z, U, bt, K), v < 0) {
                            if (it = U[0], bt != K && (it = it * m + (U[1] || 0)), I = dt(it / ai), I > 1)
                                for (I >= m && (I = m - 1), N = h(Z, I, m), j = N.length, K = U.length; c(N, U, j, K) == 1;) I--, p(N, bt < j ? le : Z, j, m), j = N.length, v = 1;
                            else I == 0 && (v = I = 1), N = Z.slice(), j = N.length;
                            if (j < K && (N = [0].concat(N)), p(U, N, K, m), K = U.length, v == -1)
                                for (; c(Z, U, bt, K) < 1;) I++, p(U, bt < K ? le : Z, K, m), K = U.length
                        } else v === 0 && (I++, U = [0]);
                        W[M++] = I, U[0] ? U[K++] = st[De] || 0 : (U = [st[De]], K = 1)
                    } while ((De++ < si || U[0] != null) && ct--);
                    B = U[0] != null, W[0] || W.splice(0, 1)
                }
                if (m == Lt) {
                    for (M = 1, ct = W[0]; ct >= 10; ct /= 10, M++);
                    A($, k + ($.e = M + w * F - 1) + 1, C, B)
                } else $.e = w, $.r = +B;
                return $
            }
        }();

        function R(h, c, p, y) {
            var g, k, C, m, v;
            if (p == null ? p = o : J(p, 0, 8), !h.c) return h.toString();
            if (g = h.c[0], C = h.e, c == null) v = ft(h.c), v = y == 1 || y == 2 && (C <= l || C >= u) ? Je(v, C) : Et(v, C, "0");
            else if (h = A(new b(h), c, p), k = h.e, v = ft(h.c), m = v.length, y == 1 || y == 2 && (c <= k || k <= l)) {
                for (; m < c; v += "0", m++);
                v = Je(v, k)
            } else if (c -= C, v = Et(v, k, "0"), k + 1 > m) {
                if (--c > 0)
                    for (v += "."; c--; v += "0");
            } else if (c += k - m, c > 0)
                for (k + 1 == m && (v += "."); c--; v += "0");
            return h.s < 0 && g ? "-" + v : v
        }

        function D(h, c) {
            for (var p, y, g = 1, k = new b(h[0]); g < h.length; g++) y = new b(h[g]), (!y.s || (p = Ut(k, y)) === c || p === 0 && k.s === c) && (k = y);
            return k
        }

        function O(h, c, p) {
            for (var y = 1, g = c.length; !c[--g]; c.pop());
            for (g = c[0]; g >= 10; g /= 10, y++);
            return (p = y + p * F - 1) > d ? h.c = h.e = null : p < f ? h.c = [h.e = 0] : (h.e = p, h.c = c), h
        }
        r = function() {
            var h = /^(-?)0([xbo])(?=\w[\w.]*$)/i,
                c = /^([^.]+)\.$/,
                p = /^\.([^.]+)$/,
                y = /^-?(Infinity|NaN)$/,
                g = /^\s*\+(?=[\w.])|^\s+|\s+$/g;
            return function(k, C, m, v) {
                var w, M = m ? C : C.replace(g, "");
                if (y.test(M)) k.s = isNaN(M) ? null : M < 0 ? -1 : 1;
                else {
                    if (!m && (M = M.replace(h, function(B, I, N) {
                            return w = (N = N.toLowerCase()) == "x" ? 16 : N == "b" ? 2 : 8, !v || v == w ? I : B
                        }), v && (w = v, M = M.replace(c, "$1").replace(p, "0.$1")), C != M)) return new b(M, w);
                    if (b.DEBUG) throw Error(ht + "Not a" + (v ? " base " + v : "") + " number: " + C);
                    k.s = null
                }
                k.c = k.e = null
            }
        }();

        function A(h, c, p, y) {
            var g, k, C, m, v, w, M, B = h.c,
                I = Wi;
            if (B) {
                t: {
                    for (g = 1, m = B[0]; m >= 10; m /= 10, g++);
                    if (k = c - g, k < 0) k += F,
                    C = c,
                    v = B[w = 0],
                    M = dt(v / I[g - C - 1] % 10);
                    else if (w = $i((k + 1) / F), w >= B.length)
                        if (y) {
                            for (; B.length <= w; B.push(0));
                            v = M = 0, g = 1, k %= F, C = k - F + 1
                        } else break t;
                    else {
                        for (v = m = B[w], g = 1; m >= 10; m /= 10, g++);
                        k %= F, C = k - F + g, M = C < 0 ? 0 : dt(v / I[g - C - 1] % 10)
                    }
                    if (y = y || c < 0 || B[w + 1] != null || (C < 0 ? v : v % I[g - C - 1]), y = p < 4 ? (M || y) && (p == 0 || p == (h.s < 0 ? 3 : 2)) : M > 5 || M == 5 && (p == 4 || y || p == 6 && (k > 0 ? C > 0 ? v / I[g - C] : 0 : B[w - 1]) % 10 & 1 || p == (h.s < 0 ? 8 : 7)), c < 1 || !B[0]) return B.length = 0,
                    y ? (c -= h.e + 1, B[0] = I[(F - c % F) % F], h.e = -c || 0) : B[0] = h.e = 0,
                    h;
                    if (k == 0 ? (B.length = w, m = 1, w--) : (B.length = w + 1, m = I[F - k], B[w] = C > 0 ? dt(v / I[g - C] % I[C]) * m : 0), y)
                        for (;;)
                            if (w == 0) {
                                for (k = 1, C = B[0]; C >= 10; C /= 10, k++);
                                for (C = B[0] += m, m = 1; C >= 10; C /= 10, m++);
                                k != m && (h.e++, B[0] == Lt && (B[0] = 1));
                                break
                            } else {
                                if (B[w] += m, B[w] != Lt) break;
                                B[w--] = 0, m = 1
                            } for (k = B.length; B[--k] === 0; B.pop());
                }
                h.e > d ? h.c = h.e = null : h.e < f && (h.c = [h.e = 0])
            }
            return h
        }

        function q(h) {
            var c, p = h.e;
            return p === null ? h.toString() : (c = ft(h.c), c = p <= l || p >= u ? Je(c, p) : Et(c, p, "0"), h.s < 0 ? "-" + c : c)
        }
        return n.absoluteValue = n.abs = function() {
            var h = new b(this);
            return h.s < 0 && (h.s = 1), h
        }, n.comparedTo = function(h, c) {
            return Ut(this, new b(h, c))
        }, n.decimalPlaces = n.dp = function(h, c) {
            var p, y, g, k = this;
            if (h != null) return J(h, 0, tt), c == null ? c = o : J(c, 0, 8), A(new b(k), h + k.e + 1, c);
            if (!(p = k.c)) return null;
            if (y = ((g = p.length - 1) - gt(this.e / F)) * F, g = p[g])
                for (; g % 10 == 0; g /= 10, y--);
            return y < 0 && (y = 0), y
        }, n.dividedBy = n.div = function(h, c) {
            return e(this, new b(h, c), a, o)
        }, n.dividedToIntegerBy = n.idiv = function(h, c) {
            return e(this, new b(h, c), 0, 1)
        }, n.exponentiatedBy = n.pow = function(h, c) {
            var p, y, g, k, C, m, v, w, M, B = this;
            if (h = new b(h), h.c && !h.isInteger()) throw Error(ht + "Exponent not an integer: " + q(h));
            if (c != null && (c = new b(c)), m = h.e > 14, !B.c || !B.c[0] || B.c[0] == 1 && !B.e && B.c.length == 1 || !h.c || !h.c[0]) return M = new b(Math.pow(+q(B), m ? h.s * (2 - Ye(h)) : +q(h))), c ? M.mod(c) : M;
            if (v = h.s < 0, c) {
                if (c.c ? !c.c[0] : !c.s) return new b(NaN);
                y = !v && B.isInteger() && c.isInteger(), y && (B = B.mod(c))
            } else {
                if (h.e > 9 && (B.e > 0 || B.e < -1 || (B.e == 0 ? B.c[0] > 1 || m && B.c[1] >= 24e7 : B.c[0] < 8e13 || m && B.c[0] <= 9999975e7))) return k = B.s < 0 && Ye(h) ? -0 : 0, B.e > -1 && (k = 1 / k), new b(v ? 1 / k : k);
                T && (k = $i(T / F + 2))
            }
            for (m ? (p = new b(.5), v && (h.s = 1), w = Ye(h)) : (g = Math.abs(+q(h)), w = g % 2), M = new b(s);;) {
                if (w) {
                    if (M = M.times(B), !M.c) break;
                    k ? M.c.length > k && (M.c.length = k) : y && (M = M.mod(c))
                }
                if (g) {
                    if (g = dt(g / 2), g === 0) break;
                    w = g % 2
                } else if (h = h.times(p), A(h, h.e + 1, 1), h.e > 14) w = Ye(h);
                else {
                    if (g = +q(h), g === 0) break;
                    w = g % 2
                }
                B = B.times(B), k ? B.c && B.c.length > k && (B.c.length = k) : y && (B = B.mod(c))
            }
            return y ? M : (v && (M = s.div(M)), c ? M.mod(c) : k ? A(M, T, o, C) : M)
        }, n.integerValue = function(h) {
            var c = new b(this);
            return h == null ? h = o : J(h, 0, 8), A(c, c.e + 1, h)
        }, n.isEqualTo = n.eq = function(h, c) {
            return Ut(this, new b(h, c)) === 0
        }, n.isFinite = function() {
            return !!this.c
        }, n.isGreaterThan = n.gt = function(h, c) {
            return Ut(this, new b(h, c)) > 0
        }, n.isGreaterThanOrEqualTo = n.gte = function(h, c) {
            return (c = Ut(this, new b(h, c))) === 1 || c === 0
        }, n.isInteger = function() {
            return !!this.c && gt(this.e / F) > this.c.length - 2
        }, n.isLessThan = n.lt = function(h, c) {
            return Ut(this, new b(h, c)) < 0
        }, n.isLessThanOrEqualTo = n.lte = function(h, c) {
            return (c = Ut(this, new b(h, c))) === -1 || c === 0
        }, n.isNaN = function() {
            return !this.s
        }, n.isNegative = function() {
            return this.s < 0
        }, n.isPositive = function() {
            return this.s > 0
        }, n.isZero = function() {
            return !!this.c && this.c[0] == 0
        }, n.minus = function(h, c) {
            var p, y, g, k, C = this,
                m = C.s;
            if (h = new b(h, c), c = h.s, !m || !c) return new b(NaN);
            if (m != c) return h.s = -c, C.plus(h);
            var v = C.e / F,
                w = h.e / F,
                M = C.c,
                B = h.c;
            if (!v || !w) {
                if (!M || !B) return M ? (h.s = -c, h) : new b(B ? C : NaN);
                if (!M[0] || !B[0]) return B[0] ? (h.s = -c, h) : new b(M[0] ? C : o == 3 ? -0 : 0)
            }
            if (v = gt(v), w = gt(w), M = M.slice(), m = v - w) {
                for ((k = m < 0) ? (m = -m, g = M) : (w = v, g = B), g.reverse(), c = m; c--; g.push(0));
                g.reverse()
            } else
                for (y = (k = (m = M.length) < (c = B.length)) ? m : c, m = c = 0; c < y; c++)
                    if (M[c] != B[c]) {
                        k = M[c] < B[c];
                        break
                    } if (k && (g = M, M = B, B = g, h.s = -h.s), c = (y = B.length) - (p = M.length), c > 0)
                for (; c--; M[p++] = 0);
            for (c = Lt - 1; y > m;) {
                if (M[--y] < B[y]) {
                    for (p = y; p && !M[--p]; M[p] = c);
                    --M[p], M[y] += Lt
                }
                M[y] -= B[y]
            }
            for (; M[0] == 0; M.splice(0, 1), --w);
            return M[0] ? O(h, M, w) : (h.s = o == 3 ? -1 : 1, h.c = [h.e = 0], h)
        }, n.modulo = n.mod = function(h, c) {
            var p, y, g = this;
            return h = new b(h, c), !g.c || !h.s || h.c && !h.c[0] ? new b(NaN) : !h.c || g.c && !g.c[0] ? new b(g) : (E == 9 ? (y = h.s, h.s = 1, p = e(g, h, 0, 3), h.s = y, p.s *= y) : p = e(g, h, 0, E), h = g.minus(p.times(h)), !h.c[0] && E == 1 && (h.s = g.s), h)
        }, n.multipliedBy = n.times = function(h, c) {
            var p, y, g, k, C, m, v, w, M, B, I, N, j, $, W, U = this,
                K = U.c,
                it = (h = new b(h, c)).c;
            if (!K || !it || !K[0] || !it[0]) return !U.s || !h.s || K && !K[0] && !it || it && !it[0] && !K ? h.c = h.e = h.s = null : (h.s *= U.s, !K || !it ? h.c = h.e = null : (h.c = [0], h.e = 0)), h;
            for (y = gt(U.e / F) + gt(h.e / F), h.s *= U.s, v = K.length, B = it.length, v < B && (j = K, K = it, it = j, g = v, v = B, B = g), g = v + B, j = []; g--; j.push(0));
            for ($ = Lt, W = At, g = B; --g >= 0;) {
                for (p = 0, I = it[g] % W, N = it[g] / W | 0, C = v, k = g + C; k > g;) w = K[--C] % W, M = K[C] / W | 0, m = N * w + M * I, w = I * w + m % W * W + j[k] + p, p = (w / $ | 0) + (m / W | 0) + N * M, j[k--] = w % $;
                j[k] = p
            }
            return p ? ++y : j.splice(0, 1), O(h, j, y)
        }, n.negated = function() {
            var h = new b(this);
            return h.s = -h.s || null, h
        }, n.plus = function(h, c) {
            var p, y = this,
                g = y.s;
            if (h = new b(h, c), c = h.s, !g || !c) return new b(NaN);
            if (g != c) return h.s = -c, y.minus(h);
            var k = y.e / F,
                C = h.e / F,
                m = y.c,
                v = h.c;
            if (!k || !C) {
                if (!m || !v) return new b(g / 0);
                if (!m[0] || !v[0]) return v[0] ? h : new b(m[0] ? y : g * 0)
            }
            if (k = gt(k), C = gt(C), m = m.slice(), g = k - C) {
                for (g > 0 ? (C = k, p = v) : (g = -g, p = m), p.reverse(); g--; p.push(0));
                p.reverse()
            }
            for (g = m.length, c = v.length, g - c < 0 && (p = v, v = m, m = p, c = g), g = 0; c;) g = (m[--c] = m[c] + v[c] + g) / Lt | 0, m[c] = Lt === m[c] ? 0 : m[c] % Lt;
            return g && (m = [g].concat(m), ++C), O(h, m, C)
        }, n.precision = n.sd = function(h, c) {
            var p, y, g, k = this;
            if (h != null && h !== !!h) return J(h, 1, tt), c == null ? c = o : J(c, 0, 8), A(new b(k), h, c);
            if (!(p = k.c)) return null;
            if (g = p.length - 1, y = g * F + 1, g = p[g]) {
                for (; g % 10 == 0; g /= 10, y--);
                for (g = p[0]; g >= 10; g /= 10, y++);
            }
            return h && k.e + 1 > y && (y = k.e + 1), y
        }, n.shiftedBy = function(h) {
            return J(h, -Zi, Zi), this.times("1e" + h)
        }, n.squareRoot = n.sqrt = function() {
            var h, c, p, y, g, k = this,
                C = k.c,
                m = k.s,
                v = k.e,
                w = a + 4,
                M = new b("0.5");
            if (m !== 1 || !C || !C[0]) return new b(!m || m < 0 && (!C || C[0]) ? NaN : C ? k : 1 / 0);
            if (m = Math.sqrt(+q(k)), m == 0 || m == 1 / 0 ? (c = ft(C), (c.length + v) % 2 == 0 && (c += "0"), m = Math.sqrt(+c), v = gt((v + 1) / 2) - (v < 0 || v % 2), m == 1 / 0 ? c = "5e" + v : (c = m.toExponential(), c = c.slice(0, c.indexOf("e") + 1) + v), p = new b(c)) : p = new b(m + ""), p.c[0]) {
                for (v = p.e, m = v + w, m < 3 && (m = 0);;)
                    if (g = p, p = M.times(g.plus(e(k, g, w, 1))), ft(g.c).slice(0, m) === (c = ft(p.c)).slice(0, m))
                        if (p.e < v && --m, c = c.slice(m - 3, m + 1), c == "9999" || !y && c == "4999") {
                            if (!y && (A(g, g.e + a + 2, 0), g.times(g).eq(k))) {
                                p = g;
                                break
                            }
                            w += 4, m += 4, y = 1
                        } else {
                            (!+c || !+c.slice(1) && c.charAt(0) == "5") && (A(p, p.e + a + 2, 1), h = !p.times(p).eq(k));
                            break
                        }
            }
            return A(p, p.e + a + 1, o, h)
        }, n.toExponential = function(h, c) {
            return h != null && (J(h, 0, tt), h++), R(this, h, c, 1)
        }, n.toFixed = function(h, c) {
            return h != null && (J(h, 0, tt), h = h + this.e + 1), R(this, h, c)
        }, n.toFormat = function(h, c, p) {
            var y, g = this;
            if (p == null) h != null && c && typeof c == "object" ? (p = c, c = null) : h && typeof h == "object" ? (p = h, h = c = null) : p = G;
            else if (typeof p != "object") throw Error(ht + "Argument not an object: " + p);
            if (y = g.toFixed(h, c), g.c) {
                var k, C = y.split("."),
                    m = +p.groupSize,
                    v = +p.secondaryGroupSize,
                    w = p.groupSeparator || "",
                    M = C[0],
                    B = C[1],
                    I = g.s < 0,
                    N = I ? M.slice(1) : M,
                    j = N.length;
                if (v && (k = m, m = v, v = k, j -= k), m > 0 && j > 0) {
                    for (k = j % m || m, M = N.substr(0, k); k < j; k += m) M += w + N.substr(k, m);
                    v > 0 && (M += w + N.slice(k)), I && (M = "-" + M)
                }
                y = B ? M + (p.decimalSeparator || "") + ((v = +p.fractionGroupSize) ? B.replace(new RegExp("\\d{" + v + "}\\B", "g"), "$&" + (p.fractionGroupSeparator || "")) : B) : M
            }
            return (p.prefix || "") + y + (p.suffix || "")
        }, n.toFraction = function(h) {
            var c, p, y, g, k, C, m, v, w, M, B, I, N = this,
                j = N.c;
            if (h != null && (m = new b(h), !m.isInteger() && (m.c || m.s !== 1) || m.lt(s))) throw Error(ht + "Argument " + (m.isInteger() ? "out of range: " : "not an integer: ") + q(m));
            if (!j) return new b(N);
            for (c = new b(s), w = p = new b(s), y = v = new b(s), I = ft(j), k = c.e = I.length - N.e - 1, c.c[0] = Wi[(C = k % F) < 0 ? F + C : C], h = !h || m.comparedTo(c) > 0 ? k > 0 ? c : w : m, C = d, d = 1 / 0, m = new b(I), v.c[0] = 0; M = e(m, c, 0, 1), g = p.plus(M.times(y)), g.comparedTo(h) != 1;) p = y, y = g, w = v.plus(M.times(g = w)), v = g, c = m.minus(M.times(g = c)), m = g;
            return g = e(h.minus(p), y, 0, 1), v = v.plus(g.times(w)), p = p.plus(g.times(y)), v.s = w.s = N.s, k = k * 2, B = e(w, y, k, o).minus(N).abs().comparedTo(e(v, p, k, o).minus(N).abs()) < 1 ? [w, y] : [v, p], d = C, B
        }, n.toNumber = function() {
            return +q(this)
        }, n.toPrecision = function(h, c) {
            return h != null && J(h, 1, tt), R(this, h, c, 2)
        }, n.toString = function(h) {
            var c, p = this,
                y = p.s,
                g = p.e;
            return g === null ? y ? (c = "Infinity", y < 0 && (c = "-" + c)) : c = "NaN" : (h == null ? c = g <= l || g >= u ? Je(ft(p.c), g) : Et(ft(p.c), g, "0") : h === 10 && x ? (p = A(new b(p), a + g + 1, o), c = Et(ft(p.c), p.e, "0")) : (J(h, 2, _.length, "Base"), c = i(Et(ft(p.c), g, "0"), 10, h, y, !0)), y < 0 && p.c[0] && (c = "-" + c)), c
        }, n.valueOf = n.toJSON = function() {
            return q(this)
        }, n._isBigNumber = !0, n[Symbol.toStringTag] = "BigNumber", n[Symbol.for("nodejs.util.inspect.custom")] = n.valueOf, t != null && b.set(t), b
    }

    function gt(t) {
        var e = t | 0;
        return t > 0 || t === e ? e : e - 1
    }

    function ft(t) {
        for (var e, i, r = 1, n = t.length, s = t[0] + ""; r < n;) {
            for (e = t[r++] + "", i = F - e.length; i--; e = "0" + e);
            s += e
        }
        for (n = s.length; s.charCodeAt(--n) === 48;);
        return s.slice(0, n + 1 || 1)
    }

    function Ut(t, e) {
        var i, r, n = t.c,
            s = e.c,
            a = t.s,
            o = e.s,
            l = t.e,
            u = e.e;
        if (!a || !o) return null;
        if (i = n && !n[0], r = s && !s[0], i || r) return i ? r ? 0 : -o : a;
        if (a != o) return a;
        if (i = a < 0, r = l == u, !n || !s) return r ? 0 : !n ^ i ? 1 : -1;
        if (!r) return l > u ^ i ? 1 : -1;
        for (o = (l = n.length) < (u = s.length) ? l : u, a = 0; a < o; a++)
            if (n[a] != s[a]) return n[a] > s[a] ^ i ? 1 : -1;
        return l == u ? 0 : l > u ^ i ? 1 : -1
    }

    function J(t, e, i, r) {
        if (t < e || t > i || t !== dt(t)) throw Error(ht + (r || "Argument") + (typeof t == "number" ? t < e || t > i ? " out of range: " : " not an integer: " : " not a primitive number: ") + String(t))
    }

    function Ye(t) {
        var e = t.c.length - 1;
        return gt(t.e / F) == e && t.c[e] % 2 != 0
    }

    function Je(t, e) {
        return (t.length > 1 ? t.charAt(0) + "." + t.slice(1) : t) + (e < 0 ? "e" : "e+") + e
    }

    function Et(t, e, i) {
        var r, n;
        if (e < 0) {
            for (n = i + "."; ++e; n += i);
            t = n + t
        } else if (r = t.length, ++e > r) {
            for (n = i, e -= r; --e; n += i);
            t += n
        } else e < r && (t = t.slice(0, e) + "." + t.slice(e));
        return t
    }
    var u_ = Cl(),
        mt = u_;
    var Qi = class {
            key;
            left = null;
            right = null;
            constructor(e) {
                this.key = e
            }
        },
        jt = class extends Qi {
            constructor(e) {
                super(e)
            }
        };
    var tr = class {
        size = 0;
        modificationCount = 0;
        splayCount = 0;
        splay(e) {
            let i = this.root;
            if (i == null) return this.compare(e, e), -1;
            let r = null,
                n = null,
                s = null,
                a = null,
                o = i,
                l = this.compare,
                u;
            for (;;)
                if (u = l(o.key, e), u > 0) {
                    let f = o.left;
                    if (f == null || (u = l(f.key, e), u > 0 && (o.left = f.right, f.right = o, o = f, f = o.left, f == null))) break;
                    r == null ? n = o : r.left = o, r = o, o = f
                } else if (u < 0) {
                let f = o.right;
                if (f == null || (u = l(f.key, e), u < 0 && (o.right = f.left, f.left = o, o = f, f = o.right, f == null))) break;
                s == null ? a = o : s.right = o, s = o, o = f
            } else break;
            return s != null && (s.right = o.left, o.left = a), r != null && (r.left = o.right, o.right = n), this.root !== o && (this.root = o, this.splayCount++), u
        }
        splayMin(e) {
            let i = e,
                r = i.left;
            for (; r != null;) {
                let n = r;
                i.left = n.right, n.right = i, i = n, r = i.left
            }
            return i
        }
        splayMax(e) {
            let i = e,
                r = i.right;
            for (; r != null;) {
                let n = r;
                i.right = n.left, n.left = i, i = n, r = i.right
            }
            return i
        }
        _delete(e) {
            if (this.root == null || this.splay(e) != 0) return null;
            let r = this.root,
                n = r,
                s = r.left;
            if (this.size--, s == null) this.root = r.right;
            else {
                let a = r.right;
                r = this.splayMax(s), r.right = a, this.root = r
            }
            return this.modificationCount++, n
        }
        addNewRoot(e, i) {
            this.size++, this.modificationCount++;
            let r = this.root;
            if (r == null) {
                this.root = e;
                return
            }
            i < 0 ? (e.left = r, e.right = r.right, r.right = null) : (e.right = r, e.left = r.left, r.left = null), this.root = e
        }
        _first() {
            let e = this.root;
            return e == null ? null : (this.root = this.splayMin(e), this.root)
        }
        _last() {
            let e = this.root;
            return e == null ? null : (this.root = this.splayMax(e), this.root)
        }
        clear() {
            this.root = null, this.size = 0, this.modificationCount++
        }
        has(e) {
            return this.validKey(e) && this.splay(e) == 0
        }
        defaultCompare() {
            return (e, i) => e < i ? -1 : e > i ? 1 : 0
        }
        wrap() {
            return {
                getRoot: () => this.root,
                setRoot: e => {
                    this.root = e
                },
                getSize: () => this.size,
                getModificationCount: () => this.modificationCount,
                getSplayCount: () => this.splayCount,
                setSplayCount: e => {
                    this.splayCount = e
                },
                splay: e => this.splay(e),
                has: e => this.has(e)
            }
        }
    };
    var Pt = class t extends tr {
            root = null;
            compare;
            validKey;
            constructor(e, i) {
                super(), this.compare = e ?? this.defaultCompare(), this.validKey = i ?? (r => r != null && r != null)
            }
            delete(e) {
                return this.validKey(e) ? this._delete(e) != null : !1
            }
            deleteAll(e) {
                for (let i of e) this.delete(i)
            }
            forEach(e) {
                let i = this[Symbol.iterator](),
                    r;
                for (; r = i.next(), !r.done;) e(r.value, r.value, this)
            }
            add(e) {
                let i = this.splay(e);
                return i != 0 && this.addNewRoot(new jt(e), i), this
            }
            addAndReturn(e) {
                let i = this.splay(e);
                return i != 0 && this.addNewRoot(new jt(e), i), this.root.key
            }
            addAll(e) {
                for (let i of e) this.add(i)
            }
            isEmpty() {
                return this.root == null
            }
            isNotEmpty() {
                return this.root != null
            }
            single() {
                if (this.size == 0) throw "Bad state: No element";
                if (this.size > 1) throw "Bad state: Too many element";
                return this.root.key
            }
            first() {
                if (this.size == 0) throw "Bad state: No element";
                return this._first().key
            }
            last() {
                if (this.size == 0) throw "Bad state: No element";
                return this._last().key
            }
            lastBefore(e) {
                if (e == null) throw "Invalid arguments(s)";
                if (this.root == null) return null;
                if (this.splay(e) < 0) return this.root.key;
                let r = this.root.left;
                if (r == null) return null;
                let n = r.right;
                for (; n != null;) r = n, n = r.right;
                return r.key
            }
            firstAfter(e) {
                if (e == null) throw "Invalid arguments(s)";
                if (this.root == null) return null;
                if (this.splay(e) > 0) return this.root.key;
                let r = this.root.right;
                if (r == null) return null;
                let n = r.left;
                for (; n != null;) r = n, n = r.left;
                return r.key
            }
            retainAll(e) {
                let i = new t(this.compare, this.validKey),
                    r = this.modificationCount;
                for (let n of e) {
                    if (r != this.modificationCount) throw "Concurrent modification during iteration.";
                    this.validKey(n) && this.splay(n) == 0 && i.add(this.root.key)
                }
                i.size != this.size && (this.root = i.root, this.size = i.size, this.modificationCount++)
            }
            lookup(e) {
                return !this.validKey(e) || this.splay(e) != 0 ? null : this.root.key
            }
            intersection(e) {
                let i = new t(this.compare, this.validKey);
                for (let r of this) e.has(r) && i.add(r);
                return i
            }
            difference(e) {
                let i = new t(this.compare, this.validKey);
                for (let r of this) e.has(r) || i.add(r);
                return i
            }
            union(e) {
                let i = this.clone();
                return i.addAll(e), i
            }
            clone() {
                let e = new t(this.compare, this.validKey);
                return e.size = this.size, e.root = this.copyNode(this.root), e
            }
            copyNode(e) {
                if (e == null) return null;

                function i(n, s) {
                    let a, o;
                    do {
                        if (a = n.left, o = n.right, a != null) {
                            let l = new jt(a.key);
                            s.left = l, i(a, l)
                        }
                        if (o != null) {
                            let l = new jt(o.key);
                            s.right = l, n = o, s = l
                        }
                    } while (o != null)
                }
                let r = new jt(e.key);
                return i(e, r), r
            }
            toSet() {
                return this.clone()
            }
            entries() {
                return new ir(this.wrap())
            }
            keys() {
                return this[Symbol.iterator]()
            }
            values() {
                return this[Symbol.iterator]()
            } [Symbol.iterator]() {
                return new er(this.wrap())
            } [Symbol.toStringTag] = "[object Set]"
        },
        $e = class {
            tree;
            path = new Array;
            modificationCount = null;
            splayCount;
            constructor(e) {
                this.tree = e, this.splayCount = e.getSplayCount()
            } [Symbol.iterator]() {
                return this
            }
            next() {
                return this.moveNext() ? {
                    done: !1,
                    value: this.current()
                } : {
                    done: !0,
                    value: null
                }
            }
            current() {
                if (!this.path.length) return null;
                let e = this.path[this.path.length - 1];
                return this.getValue(e)
            }
            rebuildPath(e) {
                this.path.splice(0, this.path.length), this.tree.splay(e), this.path.push(this.tree.getRoot()), this.splayCount = this.tree.getSplayCount()
            }
            findLeftMostDescendent(e) {
                for (; e != null;) this.path.push(e), e = e.left
            }
            moveNext() {
                if (this.modificationCount != this.tree.getModificationCount()) {
                    if (this.modificationCount == null) {
                        this.modificationCount = this.tree.getModificationCount();
                        let r = this.tree.getRoot();
                        for (; r != null;) this.path.push(r), r = r.left;
                        return this.path.length > 0
                    }
                    throw "Concurrent modification during iteration."
                }
                if (!this.path.length) return !1;
                this.splayCount != this.tree.getSplayCount() && this.rebuildPath(this.path[this.path.length - 1].key);
                let e = this.path[this.path.length - 1],
                    i = e.right;
                if (i != null) {
                    for (; i != null;) this.path.push(i), i = i.left;
                    return !0
                }
                for (this.path.pop(); this.path.length && this.path[this.path.length - 1].right === e;) e = this.path.pop();
                return this.path.length > 0
            }
        },
        er = class extends $e {
            getValue(e) {
                return e.key
            }
        },
        ir = class extends $e {
            getValue(e) {
                return [e.key, e.key]
            }
        };
    var El = t => t;
    var Pl = t => {
        if (t) {
            let e = new Pt(Ee(t)),
                i = new Pt(Ee(t)),
                r = (s, a) => a.addAndReturn(s),
                n = s => ({
                    x: r(s.x, e),
                    y: r(s.y, i)
                });
            return n({
                x: new mt(0),
                y: new mt(0)
            }), n
        }
        return El
    };
    var rr = t => ({
            set: e => {
                ut = rr(e)
            },
            reset: () => rr(t),
            compare: Ee(t),
            snap: Pl(t),
            orient: xl(t)
        }),
        ut = rr();
    var ae = (t, e) => t.ll.x.isLessThanOrEqualTo(e.x) && e.x.isLessThanOrEqualTo(t.ur.x) && t.ll.y.isLessThanOrEqualTo(e.y) && e.y.isLessThanOrEqualTo(t.ur.y),
        Pe = (t, e) => {
            if (e.ur.x.isLessThan(t.ll.x) || t.ur.x.isLessThan(e.ll.x) || e.ur.y.isLessThan(t.ll.y) || t.ur.y.isLessThan(e.ll.y)) return null;
            let i = t.ll.x.isLessThan(e.ll.x) ? e.ll.x : t.ll.x,
                r = t.ur.x.isLessThan(e.ur.x) ? t.ur.x : e.ur.x,
                n = t.ll.y.isLessThan(e.ll.y) ? e.ll.y : t.ll.y,
                s = t.ur.y.isLessThan(e.ur.y) ? t.ur.y : e.ur.y;
            return {
                ll: {
                    x: i,
                    y: n
                },
                ur: {
                    x: r,
                    y: s
                }
            }
        };
    var Ze = (t, e) => t.x.times(e.y).minus(t.y.times(e.x)),
        Tl = (t, e) => t.x.times(e.x).plus(t.y.times(e.y)),
        We = t => Tl(t, t).sqrt(),
        Rl = (t, e, i) => {
            let r = {
                    x: e.x.minus(t.x),
                    y: e.y.minus(t.y)
                },
                n = {
                    x: i.x.minus(t.x),
                    y: i.y.minus(t.y)
                };
            return Ze(n, r).div(We(n)).div(We(r))
        },
        Dl = (t, e, i) => {
            let r = {
                    x: e.x.minus(t.x),
                    y: e.y.minus(t.y)
                },
                n = {
                    x: i.x.minus(t.x),
                    y: i.y.minus(t.y)
                };
            return Tl(n, r).div(We(n)).div(We(r))
        },
        Sl = (t, e, i) => e.y.isZero() ? null : {
            x: t.x.plus(e.x.div(e.y).times(i.minus(t.y))),
            y: i
        },
        Bl = (t, e, i) => e.x.isZero() ? null : {
            x: i,
            y: t.y.plus(e.y.div(e.x).times(i.minus(t.x)))
        },
        Ol = (t, e, i, r) => {
            if (e.x.isZero()) return Bl(i, r, t.x);
            if (r.x.isZero()) return Bl(t, e, i.x);
            if (e.y.isZero()) return Sl(i, r, t.y);
            if (r.y.isZero()) return Sl(t, e, i.y);
            let n = Ze(e, r);
            if (n.isZero()) return null;
            let s = {
                    x: i.x.minus(t.x),
                    y: i.y.minus(t.y)
                },
                a = Ze(s, e).div(n),
                o = Ze(s, r).div(n),
                l = t.x.plus(o.times(e.x)),
                u = i.x.plus(a.times(r.x)),
                f = t.y.plus(o.times(e.y)),
                d = i.y.plus(a.times(r.y)),
                P = l.plus(u).div(2),
                E = f.plus(d).div(2);
            return {
                x: P,
                y: E
            }
        };
    var et = class t {
        point;
        isLeft;
        segment;
        otherSE;
        consumedBy;
        static compare(e, i) {
            let r = t.comparePoints(e.point, i.point);
            return r !== 0 ? r : (e.point !== i.point && e.link(i), e.isLeft !== i.isLeft ? e.isLeft ? 1 : -1 : Mt.compare(e.segment, i.segment))
        }
        static comparePoints(e, i) {
            return e.x.isLessThan(i.x) ? -1 : e.x.isGreaterThan(i.x) ? 1 : e.y.isLessThan(i.y) ? -1 : e.y.isGreaterThan(i.y) ? 1 : 0
        }
        constructor(e, i) {
            e.events === void 0 ? e.events = [this] : e.events.push(this), this.point = e, this.isLeft = i
        }
        link(e) {
            if (e.point === this.point) throw new Error("Tried to link already linked events");
            let i = e.point.events;
            for (let r = 0, n = i.length; r < n; r++) {
                let s = i[r];
                this.point.events.push(s), s.point = this.point
            }
            this.checkForConsuming()
        }
        checkForConsuming() {
            let e = this.point.events.length;
            for (let i = 0; i < e; i++) {
                let r = this.point.events[i];
                if (r.segment.consumedBy === void 0)
                    for (let n = i + 1; n < e; n++) {
                        let s = this.point.events[n];
                        s.consumedBy === void 0 && r.otherSE.point.events === s.otherSE.point.events && r.segment.consume(s.segment)
                    }
            }
        }
        getAvailableLinkedEvents() {
            let e = [];
            for (let i = 0, r = this.point.events.length; i < r; i++) {
                let n = this.point.events[i];
                n !== this && !n.segment.ringOut && n.segment.isInResult() && e.push(n)
            }
            return e
        }
        getLeftmostComparator(e) {
            let i = new Map,
                r = n => {
                    let s = n.otherSE;
                    i.set(n, {
                        sine: Rl(this.point, e.point, s.point),
                        cosine: Dl(this.point, e.point, s.point)
                    })
                };
            return (n, s) => {
                i.has(n) || r(n), i.has(s) || r(s);
                let {
                    sine: a,
                    cosine: o
                } = i.get(n), {
                    sine: l,
                    cosine: u
                } = i.get(s);
                return a.isGreaterThanOrEqualTo(0) && l.isGreaterThanOrEqualTo(0) ? o.isLessThan(u) ? 1 : o.isGreaterThan(u) ? -1 : 0 : a.isLessThan(0) && l.isLessThan(0) ? o.isLessThan(u) ? -1 : o.isGreaterThan(u) ? 1 : 0 : l.isLessThan(a) ? -1 : l.isGreaterThan(a) ? 1 : 0
            }
        }
    };
    var c_ = 0,
        Mt = class t {
            id;
            leftSE;
            rightSE;
            rings;
            windings;
            ringOut;
            consumedBy;
            prev;
            _prevInResult;
            _beforeState;
            _afterState;
            _isInResult;
            static compare(e, i) {
                let r = e.leftSE.point.x,
                    n = i.leftSE.point.x,
                    s = e.rightSE.point.x,
                    a = i.rightSE.point.x;
                if (a.isLessThan(r)) return 1;
                if (s.isLessThan(n)) return -1;
                let o = e.leftSE.point.y,
                    l = i.leftSE.point.y,
                    u = e.rightSE.point.y,
                    f = i.rightSE.point.y;
                if (r.isLessThan(n)) {
                    if (l.isLessThan(o) && l.isLessThan(u)) return 1;
                    if (l.isGreaterThan(o) && l.isGreaterThan(u)) return -1;
                    let d = e.comparePoint(i.leftSE.point);
                    if (d < 0) return 1;
                    if (d > 0) return -1;
                    let P = i.comparePoint(e.rightSE.point);
                    return P !== 0 ? P : -1
                }
                if (r.isGreaterThan(n)) {
                    if (o.isLessThan(l) && o.isLessThan(f)) return -1;
                    if (o.isGreaterThan(l) && o.isGreaterThan(f)) return 1;
                    let d = i.comparePoint(e.leftSE.point);
                    if (d !== 0) return d;
                    let P = e.comparePoint(i.rightSE.point);
                    return P < 0 ? 1 : P > 0 ? -1 : 1
                }
                if (o.isLessThan(l)) return -1;
                if (o.isGreaterThan(l)) return 1;
                if (s.isLessThan(a)) {
                    let d = i.comparePoint(e.rightSE.point);
                    if (d !== 0) return d
                }
                if (s.isGreaterThan(a)) {
                    let d = e.comparePoint(i.rightSE.point);
                    if (d < 0) return 1;
                    if (d > 0) return -1
                }
                if (!s.eq(a)) {
                    let d = u.minus(o),
                        P = s.minus(r),
                        E = f.minus(l),
                        T = a.minus(n);
                    if (d.isGreaterThan(P) && E.isLessThan(T)) return 1;
                    if (d.isLessThan(P) && E.isGreaterThan(T)) return -1
                }
                return s.isGreaterThan(a) ? 1 : s.isLessThan(a) || u.isLessThan(f) ? -1 : u.isGreaterThan(f) ? 1 : e.id < i.id ? -1 : e.id > i.id ? 1 : 0
            }
            constructor(e, i, r, n) {
                this.id = ++c_, this.leftSE = e, e.segment = this, e.otherSE = i, this.rightSE = i, i.segment = this, i.otherSE = e, this.rings = r, this.windings = n
            }
            static fromRing(e, i, r) {
                let n, s, a, o = et.comparePoints(e, i);
                if (o < 0) n = e, s = i, a = 1;
                else if (o > 0) n = i, s = e, a = -1;
                else throw new Error(`Tried to create degenerate segment at [${e.x}, ${e.y}]`);
                let l = new et(n, !0),
                    u = new et(s, !1);
                return new t(l, u, [r], [a])
            }
            replaceRightSE(e) {
                this.rightSE = e, this.rightSE.segment = this, this.rightSE.otherSE = this.leftSE, this.leftSE.otherSE = this.rightSE
            }
            bbox() {
                let e = this.leftSE.point.y,
                    i = this.rightSE.point.y;
                return {
                    ll: {
                        x: this.leftSE.point.x,
                        y: e.isLessThan(i) ? e : i
                    },
                    ur: {
                        x: this.rightSE.point.x,
                        y: e.isGreaterThan(i) ? e : i
                    }
                }
            }
            vector() {
                return {
                    x: this.rightSE.point.x.minus(this.leftSE.point.x),
                    y: this.rightSE.point.y.minus(this.leftSE.point.y)
                }
            }
            isAnEndpoint(e) {
                return e.x.eq(this.leftSE.point.x) && e.y.eq(this.leftSE.point.y) || e.x.eq(this.rightSE.point.x) && e.y.eq(this.rightSE.point.y)
            }
            comparePoint(e) {
                return ut.orient(this.leftSE.point, e, this.rightSE.point)
            }
            getIntersection(e) {
                let i = this.bbox(),
                    r = e.bbox(),
                    n = Pe(i, r);
                if (n === null) return null;
                let s = this.leftSE.point,
                    a = this.rightSE.point,
                    o = e.leftSE.point,
                    l = e.rightSE.point,
                    u = ae(i, o) && this.comparePoint(o) === 0,
                    f = ae(r, s) && e.comparePoint(s) === 0,
                    d = ae(i, l) && this.comparePoint(l) === 0,
                    P = ae(r, a) && e.comparePoint(a) === 0;
                if (f && u) return P && !d ? a : !P && d ? l : null;
                if (f) return d && s.x.eq(l.x) && s.y.eq(l.y) ? null : s;
                if (u) return P && a.x.eq(o.x) && a.y.eq(o.y) ? null : o;
                if (P && d) return null;
                if (P) return a;
                if (d) return l;
                let E = Ol(s, this.vector(), o, e.vector());
                return E === null || !ae(n, E) ? null : ut.snap(E)
            }
            split(e) {
                let i = [],
                    r = e.events !== void 0,
                    n = new et(e, !0),
                    s = new et(e, !1),
                    a = this.rightSE;
                this.replaceRightSE(s), i.push(s), i.push(n);
                let o = new t(n, a, this.rings.slice(), this.windings.slice());
                return et.comparePoints(o.leftSE.point, o.rightSE.point) > 0 && o.swapEvents(), et.comparePoints(this.leftSE.point, this.rightSE.point) > 0 && this.swapEvents(), r && (n.checkForConsuming(), s.checkForConsuming()), i
            }
            swapEvents() {
                let e = this.rightSE;
                this.rightSE = this.leftSE, this.leftSE = e, this.leftSE.isLeft = !0, this.rightSE.isLeft = !1;
                for (let i = 0, r = this.windings.length; i < r; i++) this.windings[i] *= -1
            }
            consume(e) {
                let i = this,
                    r = e;
                for (; i.consumedBy;) i = i.consumedBy;
                for (; r.consumedBy;) r = r.consumedBy;
                let n = t.compare(i, r);
                if (n !== 0) {
                    if (n > 0) {
                        let s = i;
                        i = r, r = s
                    }
                    if (i.prev === r) {
                        let s = i;
                        i = r, r = s
                    }
                    for (let s = 0, a = r.rings.length; s < a; s++) {
                        let o = r.rings[s],
                            l = r.windings[s],
                            u = i.rings.indexOf(o);
                        u === -1 ? (i.rings.push(o), i.windings.push(l)) : i.windings[u] += l
                    }
                    r.rings = null, r.windings = null, r.consumedBy = i, r.leftSE.consumedBy = i.leftSE, r.rightSE.consumedBy = i.rightSE
                }
            }
            prevInResult() {
                return this._prevInResult !== void 0 ? this._prevInResult : (this.prev ? this.prev.isInResult() ? this._prevInResult = this.prev : this._prevInResult = this.prev.prevInResult() : this._prevInResult = null, this._prevInResult)
            }
            beforeState() {
                if (this._beforeState !== void 0) return this._beforeState;
                if (!this.prev) this._beforeState = {
                    rings: [],
                    windings: [],
                    multiPolys: []
                };
                else {
                    let e = this.prev.consumedBy || this.prev;
                    this._beforeState = e.afterState()
                }
                return this._beforeState
            }
            afterState() {
                if (this._afterState !== void 0) return this._afterState;
                let e = this.beforeState();
                this._afterState = {
                    rings: e.rings.slice(0),
                    windings: e.windings.slice(0),
                    multiPolys: []
                };
                let i = this._afterState.rings,
                    r = this._afterState.windings,
                    n = this._afterState.multiPolys;
                for (let o = 0, l = this.rings.length; o < l; o++) {
                    let u = this.rings[o],
                        f = this.windings[o],
                        d = i.indexOf(u);
                    d === -1 ? (i.push(u), r.push(f)) : r[d] += f
                }
                let s = [],
                    a = [];
                for (let o = 0, l = i.length; o < l; o++) {
                    if (r[o] === 0) continue;
                    let u = i[o],
                        f = u.poly;
                    if (a.indexOf(f) === -1)
                        if (u.isExterior) s.push(f);
                        else {
                            a.indexOf(f) === -1 && a.push(f);
                            let d = s.indexOf(u.poly);
                            d !== -1 && s.splice(d, 1)
                        }
                }
                for (let o = 0, l = s.length; o < l; o++) {
                    let u = s[o].multiPoly;
                    n.indexOf(u) === -1 && n.push(u)
                }
                return this._afterState
            }
            isInResult() {
                if (this.consumedBy) return !1;
                if (this._isInResult !== void 0) return this._isInResult;
                let e = this.beforeState().multiPolys,
                    i = this.afterState().multiPolys;
                switch (oe.type) {
                    case "union": {
                        let r = e.length === 0,
                            n = i.length === 0;
                        this._isInResult = r !== n;
                        break
                    }
                    case "intersection": {
                        let r, n;
                        e.length < i.length ? (r = e.length, n = i.length) : (r = i.length, n = e.length), this._isInResult = n === oe.numMultiPolys && r < n;
                        break
                    }
                    case "xor": {
                        let r = Math.abs(e.length - i.length);
                        this._isInResult = r % 2 === 1;
                        break
                    }
                    case "difference": {
                        let r = n => n.length === 1 && n[0].isSubject;
                        this._isInResult = r(e) !== r(i);
                        break
                    }
                }
                return this._isInResult
            }
        };
    var Qe = class {
            poly;
            isExterior;
            segments;
            bbox;
            constructor(e, i, r) {
                if (!Array.isArray(e) || e.length === 0) throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
                if (this.poly = i, this.isExterior = r, this.segments = [], typeof e[0][0] != "number" || typeof e[0][1] != "number") throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
                let n = ut.snap({
                    x: new mt(e[0][0]),
                    y: new mt(e[0][1])
                });
                this.bbox = {
                    ll: {
                        x: n.x,
                        y: n.y
                    },
                    ur: {
                        x: n.x,
                        y: n.y
                    }
                };
                let s = n;
                for (let a = 1, o = e.length; a < o; a++) {
                    if (typeof e[a][0] != "number" || typeof e[a][1] != "number") throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
                    let l = ut.snap({
                        x: new mt(e[a][0]),
                        y: new mt(e[a][1])
                    });
                    l.x.eq(s.x) && l.y.eq(s.y) || (this.segments.push(Mt.fromRing(s, l, this)), l.x.isLessThan(this.bbox.ll.x) && (this.bbox.ll.x = l.x), l.y.isLessThan(this.bbox.ll.y) && (this.bbox.ll.y = l.y), l.x.isGreaterThan(this.bbox.ur.x) && (this.bbox.ur.x = l.x), l.y.isGreaterThan(this.bbox.ur.y) && (this.bbox.ur.y = l.y), s = l)
                }(!n.x.eq(s.x) || !n.y.eq(s.y)) && this.segments.push(Mt.fromRing(s, n, this))
            }
            getSweepEvents() {
                let e = [];
                for (let i = 0, r = this.segments.length; i < r; i++) {
                    let n = this.segments[i];
                    e.push(n.leftSE), e.push(n.rightSE)
                }
                return e
            }
        },
        nr = class {
            multiPoly;
            exteriorRing;
            interiorRings;
            bbox;
            constructor(e, i) {
                if (!Array.isArray(e)) throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
                this.exteriorRing = new Qe(e[0], this, !0), this.bbox = {
                    ll: {
                        x: this.exteriorRing.bbox.ll.x,
                        y: this.exteriorRing.bbox.ll.y
                    },
                    ur: {
                        x: this.exteriorRing.bbox.ur.x,
                        y: this.exteriorRing.bbox.ur.y
                    }
                }, this.interiorRings = [];
                for (let r = 1, n = e.length; r < n; r++) {
                    let s = new Qe(e[r], this, !1);
                    s.bbox.ll.x.isLessThan(this.bbox.ll.x) && (this.bbox.ll.x = s.bbox.ll.x), s.bbox.ll.y.isLessThan(this.bbox.ll.y) && (this.bbox.ll.y = s.bbox.ll.y), s.bbox.ur.x.isGreaterThan(this.bbox.ur.x) && (this.bbox.ur.x = s.bbox.ur.x), s.bbox.ur.y.isGreaterThan(this.bbox.ur.y) && (this.bbox.ur.y = s.bbox.ur.y), this.interiorRings.push(s)
                }
                this.multiPoly = i
            }
            getSweepEvents() {
                let e = this.exteriorRing.getSweepEvents();
                for (let i = 0, r = this.interiorRings.length; i < r; i++) {
                    let n = this.interiorRings[i].getSweepEvents();
                    for (let s = 0, a = n.length; s < a; s++) e.push(n[s])
                }
                return e
            }
        },
        Se = class {
            isSubject;
            polys;
            bbox;
            constructor(e, i) {
                if (!Array.isArray(e)) throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
                try {
                    typeof e[0][0][0] == "number" && (e = [e])
                } catch {}
                this.polys = [], this.bbox = {
                    ll: {
                        x: new mt(Number.POSITIVE_INFINITY),
                        y: new mt(Number.POSITIVE_INFINITY)
                    },
                    ur: {
                        x: new mt(Number.NEGATIVE_INFINITY),
                        y: new mt(Number.NEGATIVE_INFINITY)
                    }
                };
                for (let r = 0, n = e.length; r < n; r++) {
                    let s = new nr(e[r], this);
                    s.bbox.ll.x.isLessThan(this.bbox.ll.x) && (this.bbox.ll.x = s.bbox.ll.x), s.bbox.ll.y.isLessThan(this.bbox.ll.y) && (this.bbox.ll.y = s.bbox.ll.y), s.bbox.ur.x.isGreaterThan(this.bbox.ur.x) && (this.bbox.ur.x = s.bbox.ur.x), s.bbox.ur.y.isGreaterThan(this.bbox.ur.y) && (this.bbox.ur.y = s.bbox.ur.y), this.polys.push(s)
                }
                this.isSubject = i
            }
            getSweepEvents() {
                let e = [];
                for (let i = 0, r = this.polys.length; i < r; i++) {
                    let n = this.polys[i].getSweepEvents();
                    for (let s = 0, a = n.length; s < a; s++) e.push(n[s])
                }
                return e
            }
        };
    var ti = class t {
            events;
            poly;
            _isExteriorRing;
            _enclosingRing;
            static factory(e) {
                let i = [];
                for (let r = 0, n = e.length; r < n; r++) {
                    let s = e[r];
                    if (!s.isInResult() || s.ringOut) continue;
                    let a = null,
                        o = s.leftSE,
                        l = s.rightSE,
                        u = [o],
                        f = o.point,
                        d = [];
                    for (; a = o, o = l, u.push(o), o.point !== f;)
                        for (;;) {
                            let P = o.getAvailableLinkedEvents();
                            if (P.length === 0) {
                                let G = u[0].point,
                                    _ = u[u.length - 1].point;
                                throw new Error(`Unable to complete output ring starting at [${G.x}, ${G.y}]. Last matching segment found ends at [${_.x}, ${_.y}].`)
                            }
                            if (P.length === 1) {
                                l = P[0].otherSE;
                                break
                            }
                            let E = null;
                            for (let G = 0, _ = d.length; G < _; G++)
                                if (d[G].point === o.point) {
                                    E = G;
                                    break
                                } if (E !== null) {
                                let G = d.splice(E)[0],
                                    _ = u.splice(G.index);
                                _.unshift(_[0].otherSE), i.push(new t(_.reverse()));
                                continue
                            }
                            d.push({
                                index: u.length,
                                point: o.point
                            });
                            let T = o.getLeftmostComparator(a);
                            l = P.sort(T)[0].otherSE;
                            break
                        }
                    i.push(new t(u))
                }
                return i
            }
            constructor(e) {
                this.events = e;
                for (let i = 0, r = e.length; i < r; i++) e[i].segment.ringOut = this;
                this.poly = null
            }
            getGeom() {
                let e = this.events[0].point,
                    i = [e];
                for (let u = 1, f = this.events.length - 1; u < f; u++) {
                    let d = this.events[u].point,
                        P = this.events[u + 1].point;
                    ut.orient(d, e, P) !== 0 && (i.push(d), e = d)
                }
                if (i.length === 1) return null;
                let r = i[0],
                    n = i[1];
                ut.orient(r, e, n) === 0 && i.shift(), i.push(i[0]);
                let s = this.isExteriorRing() ? 1 : -1,
                    a = this.isExteriorRing() ? 0 : i.length - 1,
                    o = this.isExteriorRing() ? i.length : -1,
                    l = [];
                for (let u = a; u != o; u += s) l.push([i[u].x.toNumber(), i[u].y.toNumber()]);
                return l
            }
            isExteriorRing() {
                if (this._isExteriorRing === void 0) {
                    let e = this.enclosingRing();
                    this._isExteriorRing = e ? !e.isExteriorRing() : !0
                }
                return this._isExteriorRing
            }
            enclosingRing() {
                return this._enclosingRing === void 0 && (this._enclosingRing = this._calcEnclosingRing()), this._enclosingRing
            }
            _calcEnclosingRing() {
                let e = this.events[0];
                for (let n = 1, s = this.events.length; n < s; n++) {
                    let a = this.events[n];
                    et.compare(e, a) > 0 && (e = a)
                }
                let i = e.segment.prevInResult(),
                    r = i ? i.prevInResult() : null;
                for (;;) {
                    if (!i) return null;
                    if (!r) return i.ringOut;
                    if (r.ringOut !== i.ringOut) return r.ringOut?.enclosingRing() !== i.ringOut ? i.ringOut : i.ringOut?.enclosingRing();
                    i = r.prevInResult(), r = i ? i.prevInResult() : null
                }
            }
        },
        ei = class {
            exteriorRing;
            interiorRings;
            constructor(e) {
                this.exteriorRing = e, e.poly = this, this.interiorRings = []
            }
            addInterior(e) {
                this.interiorRings.push(e), e.poly = this
            }
            getGeom() {
                let e = this.exteriorRing.getGeom();
                if (e === null) return null;
                let i = [e];
                for (let r = 0, n = this.interiorRings.length; r < n; r++) {
                    let s = this.interiorRings[r].getGeom();
                    s !== null && i.push(s)
                }
                return i
            }
        },
        ii = class {
            rings;
            polys;
            constructor(e) {
                this.rings = e, this.polys = this._composePolys(e)
            }
            getGeom() {
                let e = [];
                for (let i = 0, r = this.polys.length; i < r; i++) {
                    let n = this.polys[i].getGeom();
                    n !== null && e.push(n)
                }
                return e
            }
            _composePolys(e) {
                let i = [];
                for (let r = 0, n = e.length; r < n; r++) {
                    let s = e[r];
                    if (!s.poly)
                        if (s.isExteriorRing()) i.push(new ei(s));
                        else {
                            let a = s.enclosingRing();
                            a?.poly || i.push(new ei(a)), a?.poly?.addInterior(s)
                        }
                }
                return i
            }
        };
    var Be = class {
        queue;
        tree;
        segments;
        constructor(e, i = Mt.compare) {
            this.queue = e, this.tree = new Pt(i), this.segments = []
        }
        process(e) {
            let i = e.segment,
                r = [];
            if (e.consumedBy) return e.isLeft ? this.queue.delete(e.otherSE) : this.tree.delete(i), r;
            e.isLeft && this.tree.add(i);
            let n = i,
                s = i;
            do n = this.tree.lastBefore(n); while (n != null && n.consumedBy != null);
            do s = this.tree.firstAfter(s); while (s != null && s.consumedBy != null);
            if (e.isLeft) {
                let a = null;
                if (n) {
                    let l = n.getIntersection(i);
                    if (l !== null && (i.isAnEndpoint(l) || (a = l), !n.isAnEndpoint(l))) {
                        let u = this._splitSafely(n, l);
                        for (let f = 0, d = u.length; f < d; f++) r.push(u[f])
                    }
                }
                let o = null;
                if (s) {
                    let l = s.getIntersection(i);
                    if (l !== null && (i.isAnEndpoint(l) || (o = l), !s.isAnEndpoint(l))) {
                        let u = this._splitSafely(s, l);
                        for (let f = 0, d = u.length; f < d; f++) r.push(u[f])
                    }
                }
                if (a !== null || o !== null) {
                    let l = null;
                    a === null ? l = o : o === null ? l = a : l = et.comparePoints(a, o) <= 0 ? a : o, this.queue.delete(i.rightSE), r.push(i.rightSE);
                    let u = i.split(l);
                    for (let f = 0, d = u.length; f < d; f++) r.push(u[f])
                }
                r.length > 0 ? (this.tree.delete(i), r.push(e)) : (this.segments.push(i), i.prev = n)
            } else {
                if (n && s) {
                    let a = n.getIntersection(s);
                    if (a !== null) {
                        if (!n.isAnEndpoint(a)) {
                            let o = this._splitSafely(n, a);
                            for (let l = 0, u = o.length; l < u; l++) r.push(o[l])
                        }
                        if (!s.isAnEndpoint(a)) {
                            let o = this._splitSafely(s, a);
                            for (let l = 0, u = o.length; l < u; l++) r.push(o[l])
                        }
                    }
                }
                this.tree.delete(i)
            }
            return r
        }
        _splitSafely(e, i) {
            this.tree.delete(e);
            let r = e.rightSE;
            this.queue.delete(r);
            let n = e.split(i);
            return n.push(r), e.consumedBy === void 0 && this.tree.add(e), n
        }
    };
    var sr = class {
            type;
            numMultiPolys;
            run(e, i, r) {
                Te.type = e;
                let n = [new Se(i, !0)];
                for (let f = 0, d = r.length; f < d; f++) n.push(new Se(r[f], !1));
                if (Te.numMultiPolys = n.length, Te.type === "difference") {
                    let f = n[0],
                        d = 1;
                    for (; d < n.length;) Pe(n[d].bbox, f.bbox) !== null ? d++ : n.splice(d, 1)
                }
                if (Te.type === "intersection")
                    for (let f = 0, d = n.length; f < d; f++) {
                        let P = n[f];
                        for (let E = f + 1, T = n.length; E < T; E++)
                            if (Pe(P.bbox, n[E].bbox) === null) return []
                    }
                let s = new Pt(et.compare);
                for (let f = 0, d = n.length; f < d; f++) {
                    let P = n[f].getSweepEvents();
                    for (let E = 0, T = P.length; E < T; E++) s.add(P[E])
                }
                let a = new Be(s),
                    o = null;
                for (s.size != 0 && (o = s.first(), s.delete(o)); o;) {
                    let f = a.process(o);
                    for (let d = 0, P = f.length; d < P; d++) {
                        let E = f[d];
                        E.consumedBy === void 0 && s.add(E)
                    }
                    s.size != 0 ? (o = s.first(), s.delete(o)) : o = null
                }
                ut.reset();
                let l = ti.factory(a.segments);
                return new ii(l).getGeom()
            }
        },
        Te = new sr,
        oe = Te;
    var Al = (t, ...e) => oe.run("intersection", t, e);
    var Il = (t, ...e) => oe.run("difference", t, e),
        pM = ut.set;

    function ni(t) {
        let e = {
            type: "Feature"
        };
        return e.geometry = t, e
    }

    function ri(t) {
        return t.type === "Feature" ? t.geometry : t
    }

    function Gl(t) {
        return t && t.geometry && t.geometry.coordinates ? t.geometry.coordinates : t
    }

    function g_(t) {
        return ni({
            type: "LineString",
            coordinates: t
        })
    }

    function m_(t) {
        return ni({
            type: "MultiLineString",
            coordinates: t
        })
    }

    function ql(t) {
        return ni({
            type: "Polygon",
            coordinates: t
        })
    }

    function Nl(t) {
        return ni({
            type: "MultiPolygon",
            coordinates: t
        })
    }

    function zl(t, e) {
        let i = ri(t),
            r = ri(e),
            n = Al(i.coordinates, r.coordinates);
        return n.length === 0 ? null : n.length === 1 ? ql(n[0]) : Nl(n)
    }

    function Fl(t, e) {
        let i = ri(t),
            r = ri(e),
            n = Il(i.coordinates, r.coordinates);
        return n.length === 0 ? null : n.length === 1 ? ql(n[0]) : Nl(n)
    }

    function Vl(t) {
        return Array.isArray(t) ? 1 + Vl(t[0]) : -1
    }

    function Ul(t) {
        t instanceof L.Polyline && (t = t.toGeoJSON(15));
        let e = Gl(t),
            i = Vl(e),
            r = [];
        return i > 1 ? e.forEach(n => {
            r.push(g_(n))
        }) : r.push(t), r
    }

    function jl(t) {
        let e = [];
        return t.eachLayer(i => {
            e.push(Gl(i.toGeoJSON(15)))
        }), m_(e)
    }
    X.Cut = X.Polygon.extend({
        initialize(t) {
            this._map = t, this._shape = "Cut", this.toolbarButtonName = "cutPolygon"
        },
        _finishShape() {
            if (this._editedLayers = [], !this.options.allowSelfIntersection && (this._handleSelfIntersection(!0, this._layer.getLatLngs()[0]), this._doesSelfIntersect) || this.options.requireSnapToFinish && !this._hintMarker._snapped && !this._isFirstLayer()) return;
            let t = this._layer.getLatLngs();
            if (t.length <= 2) return;
            let e = L.polygon(t, this.options.pathOptions);
            e._latlngInfos = this._layer._latlngInfo, this.cut(e), this._cleanupSnapping(), this._otherSnapLayers.splice(this._tempSnapLayerIndex, 1), delete this._tempSnapLayerIndex, this._editedLayers.forEach(({
                layer: i,
                originalLayer: r
            }) => {
                this._fireCut(r, i, r), this._fireCut(this._map, i, r), r.pm._fireEdit()
            }), this._editedLayers = [], this.disable(), this.options.continueDrawing && this.enable()
        },
        cut(t) {
            let e = this._map._layers,
                i = t._latlngInfos || [];
            Object.keys(e).map(n => e[n]).filter(n => n.pm).filter(n => !n._pmTempLayer).filter(n => !L.PM.optIn && !n.options.pmIgnore || L.PM.optIn && n.options.pmIgnore === !1).filter(n => n instanceof L.Polyline).filter(n => n !== t).filter(n => n.pm.options.allowCutting).filter(n => this.options.layersToCut && L.Util.isArray(this.options.layersToCut) && this.options.layersToCut.length > 0 ? this.options.layersToCut.indexOf(n) > -1 : !0).filter(n => !this._layerGroup.hasLayer(n)).filter(n => {
                try {
                    let s = !!pt(t.toGeoJSON(15), n.toGeoJSON(15)).features.length > 0;
                    return s || n instanceof L.Polyline && !(n instanceof L.Polygon) ? s : !!zl(t.toGeoJSON(15), n.toGeoJSON(15))
                } catch {
                    return n instanceof L.Polygon && console.error("You can't cut polygons with self-intersections"), !1
                }
            }).forEach(n => {
                let s;
                if (n instanceof L.Polygon) {
                    s = L.polygon(n.getLatLngs());
                    let u = s.getLatLngs();
                    i.forEach(f => {
                        if (f && f.snapInfo) {
                            let {
                                latlng: d
                            } = f, P = this._calcClosestLayer(d, [s]);
                            if (P && P.segment && P.distance < this.options.snapDistance) {
                                let {
                                    segment: E
                                } = P;
                                if (E && E.length === 2) {
                                    let {
                                        indexPath: T,
                                        parentPath: G,
                                        newIndex: _
                                    } = L.PM.Utils._getIndexFromSegment(u, E);
                                    (T.length > 1 ? (0, Kl.default)(u, G) : u).splice(_, 0, d)
                                }
                            }
                        }
                    })
                } else s = n;
                let a = this._cutLayer(t, s),
                    o = L.geoJSON(a, n.options);
                o.getLayers().length === 1 && ([o] = o.getLayers()), this._setPane(o, "layerPane");
                let l = o.addTo(this._map.pm._getContainingLayer());
                if (l.pm.enable(n.pm.options), l.pm.disable(), n._pmTempLayer = !0, t._pmTempLayer = !0, n.remove(), n.removeFrom(this._map.pm._getContainingLayer()), t.remove(), t.removeFrom(this._map.pm._getContainingLayer()), l.getLayers && l.getLayers().length === 0 && this._map.pm.removeLayer({
                        target: l
                    }), l instanceof L.LayerGroup ? (l.eachLayer(u => {
                        this._addDrawnLayerProp(u)
                    }), this._addDrawnLayerProp(l)) : this._addDrawnLayerProp(l), this.options.layersToCut && L.Util.isArray(this.options.layersToCut) && this.options.layersToCut.length > 0) {
                    let u = this.options.layersToCut.indexOf(n);
                    u > -1 && this.options.layersToCut.splice(u, 1)
                }
                this._editedLayers.push({
                    layer: l,
                    originalLayer: n
                })
            })
        },
        _cutLayer(t, e) {
            let i = L.geoJSON(),
                r;
            if (e instanceof L.Polygon) r = Fl(e.toGeoJSON(15), t.toGeoJSON(15));
            else {
                let n = Ul(e);
                n.forEach(s => {
                    let a = vl(s, t.toGeoJSON(15)),
                        o;
                    a && a.features.length > 0 ? o = L.geoJSON(a) : o = L.geoJSON(s), o.getLayers().forEach(l => {
                        Yi(t.toGeoJSON(15), l.toGeoJSON(15)) || l.addTo(i)
                    })
                }), n.length > 1 ? r = jl(i) : r = i.toGeoJSON(15)
            }
            return r
        },
        _change: L.Util.falseFn
    });
    X.Text = X.extend({
        initialize(t) {
            this._map = t, this._shape = "Text", this.toolbarButtonName = "drawText"
        },
        enable(t) {
            L.Util.setOptions(this, t), this._enabled = !0, this._map.on("click", this._createMarker, this), this._map.pm.Toolbar.toggleButton(this.toolbarButtonName, !0), this._hintMarker = L.marker(this._map.getCenter(), {
                interactive: !1,
                zIndexOffset: 100,
                icon: L.divIcon({
                    className: "marker-icon cursor-marker"
                })
            }), this._setPane(this._hintMarker, "vertexPane"), this._hintMarker._pmTempLayer = !0, this._hintMarker.addTo(this._map), this.options.cursorMarker && L.DomUtil.addClass(this._hintMarker._icon, "visible"), this.options.tooltips && this._hintMarker.bindTooltip(V("tooltips.placeText"), {
                permanent: !0,
                offset: L.point(0, 10),
                direction: "bottom",
                opacity: .8
            }).openTooltip(), this._layer = this._hintMarker, this._map.on("mousemove", this._syncHintMarker, this), this._map.getContainer().classList.add("geoman-draw-cursor"), this._fireDrawStart(), this._setGlobalDrawMode()
        },
        disable() {
            this._enabled && (this._enabled = !1, this._map.off("click", this._createMarker, this), this._hintMarker?.remove(), this._map.getContainer().classList.remove("geoman-draw-cursor"), this._map.off("mousemove", this._syncHintMarker, this), this._map.pm.Toolbar.toggleButton(this.toolbarButtonName, !1), this.options.snappable && this._cleanupSnapping(), this._fireDrawEnd(), this._setGlobalDrawMode())
        },
        enabled() {
            return this._enabled
        },
        toggle(t) {
            this.enabled() ? this.disable() : this.enable(t)
        },
        _syncHintMarker(t) {
            if (this._hintMarker.setLatLng(t.latlng), this.options.snappable) {
                let e = t;
                e.target = this._hintMarker, this._handleSnapping(e)
            }
        },
        _createMarker(t) {
            if (!t.latlng || this.options.requireSnapToFinish && !this._hintMarker._snapped && !this._isFirstLayer()) return;
            this._hintMarker._snapped || this._hintMarker.setLatLng(t.latlng);
            let e = this._hintMarker.getLatLng();
            if (this.textArea = this._createTextArea(), this.options.textOptions?.className) {
                let n = this.options.textOptions.className.split(" ");
                this.textArea.classList.add(...n)
            }
            let i = this._createTextIcon(this.textArea),
                r = new L.Marker(e, {
                    textMarker: !0,
                    _textMarkerOverPM: !0,
                    icon: i
                });
            if (this._setPane(r, "markerPane"), this._finishLayer(r), r.pm || (r.options.draggable = !1), r.addTo(this._map.pm._getContainingLayer()), r.pm) {
                r.pm.textArea = this.textArea, L.setOptions(r.pm, {
                    removeIfEmpty: this.options.textOptions?.removeIfEmpty ?? !0
                });
                let n = this.options.textOptions?.focusAfterDraw ?? !0;
                r.pm._createTextMarker(n), this.options.textOptions?.text && r.pm.setText(this.options.textOptions.text)
            }
            this._fireCreate(r), this._cleanupSnapping(), this.disable(), this.options.continueDrawing && this.enable()
        },
        _createTextArea() {
            let t = document.createElement("textarea");
            return t.readOnly = !0, t.classList.add("pm-textarea", "pm-disabled"), t
        },
        _createTextIcon(t) {
            return L.divIcon({
                className: "pm-text-marker",
                html: t
            })
        }
    });
    var __ = {
            enableLayerDrag() {
                if (!this.options.draggable || !this._layer._map) return;
                this.disable(), this._layerDragEnabled = !0, this._map || (this._map = this._layer._map), (this._layer instanceof L.Marker || this._layer instanceof L.ImageOverlay) && L.DomEvent.on(this._getDOMElem(), "dragstart", this._stopDOMImageDrag), this._layer.dragging && this._layer.dragging.disable(), this._tempDragCoord = null, Rt(this._layer) instanceof L.Canvas ? (this._layer.on("mouseout", this.removeDraggingClass, this), this._layer.on("mouseover", this.addDraggingClass, this)) : this.addDraggingClass(), this._originalMapDragState = this._layer._map.dragging._enabled, this._safeToCacheDragState = !0;
                let t = this._getDOMElem();
                t && (Rt(this._layer) instanceof L.Canvas ? (this._layer.on("touchstart mousedown", this._dragMixinOnMouseDown, this), this._map.pm._addTouchEvents(t)) : L.DomEvent.on(t, "touchstart mousedown", this._simulateMouseDownEvent, this)), this._fireDragEnable()
            },
            disableLayerDrag() {
                this._layerDragEnabled = !1, Rt(this._layer) instanceof L.Canvas ? (this._layer.off("mouseout", this.removeDraggingClass, this), this._layer.off("mouseover", this.addDraggingClass, this)) : this.removeDraggingClass(), this._originalMapDragState && this._dragging && this._map.dragging.enable(), this._safeToCacheDragState = !1, this._layer.dragging && this._layer.dragging.disable();
                let t = this._getDOMElem();
                t && (Rt(this._layer) instanceof L.Canvas ? (this._layer.off("touchstart mousedown", this._dragMixinOnMouseDown, this), this._map.pm._removeTouchEvents(t)) : L.DomEvent.off(t, "touchstart mousedown", this._simulateMouseDownEvent, this)), this._layerDragged && this._fireUpdate(), this._layerDragged = !1, this._fireDragDisable()
            },
            dragging() {
                return this._dragging
            },
            layerDragEnabled() {
                return !!this._layerDragEnabled
            },
            _simulateMouseDownEvent(t) {
                let e = t.touches ? t.touches[0] : t,
                    i = {
                        originalEvent: e,
                        target: this._layer
                    };
                return i.containerPoint = this._map.mouseEventToContainerPoint(e), i.latlng = this._map.containerPointToLatLng(i.containerPoint), this._dragMixinOnMouseDown(i), !1
            },
            _simulateMouseMoveEvent(t) {
                let e = t.touches ? t.touches[0] : t,
                    i = {
                        originalEvent: e,
                        target: this._layer
                    };
                return i.containerPoint = this._map.mouseEventToContainerPoint(e), i.latlng = this._map.containerPointToLatLng(i.containerPoint), this._dragMixinOnMouseMove(i), !1
            },
            _simulateMouseUpEvent(t) {
                let i = {
                    originalEvent: t.touches ? t.touches[0] : t,
                    target: this._layer
                };
                return t.type.indexOf("touch") === -1 && (i.containerPoint = this._map.mouseEventToContainerPoint(t), i.latlng = this._map.containerPointToLatLng(i.containerPoint)), this._dragMixinOnMouseUp(i), !1
            },
            _dragMixinOnMouseDown(t) {
                if (t.originalEvent.button > 0) return;
                this._overwriteEventIfItComesFromMarker(t);
                let e = t._fromLayerSync,
                    i = this._syncLayers("_dragMixinOnMouseDown", t);
                if (this._layer instanceof L.Marker && (this.options.snappable && !e && !i ? this._initSnappableMarkers() : this._disableSnapping()), this._layer instanceof L.CircleMarker) {
                    let r = "resizeableCircleMarker";
                    this._layer instanceof L.Circle && (r = "resizableCircle"), this.options.snappable && !e && !i ? this._layer.pm.options[r] || this._initSnappableMarkersDrag() : this._layer.pm.options[r] ? this._layer.pm._disableSnapping() : this._layer.pm._disableSnappingDrag()
                }
                this._safeToCacheDragState && (this._originalMapDragState = this._layer._map.dragging._enabled, this._safeToCacheDragState = !1), this._tempDragCoord = t.latlng, L.DomEvent.on(this._map.getContainer(), "touchend mouseup", this._simulateMouseUpEvent, this), L.DomEvent.on(this._map.getContainer(), "touchmove mousemove", this._simulateMouseMoveEvent, this)
            },
            _dragMixinOnMouseMove(t) {
                this._overwriteEventIfItComesFromMarker(t);
                let e = this._getDOMElem();
                this._syncLayers("_dragMixinOnMouseMove", t), this._dragging || (this._dragging = !0, L.DomUtil.addClass(e, "leaflet-pm-dragging"), this._layer instanceof L.Marker || this._layer.bringToFront(), this._originalMapDragState && this._map.dragging.disable(), this._fireDragStart()), this._tempDragCoord || (this._tempDragCoord = t.latlng), this._onLayerDrag(t), this._layer instanceof L.CircleMarker && this._layer.pm._updateHiddenPolyCircle()
            },
            _dragMixinOnMouseUp(t) {
                let e = this._getDOMElem();
                return this._syncLayers("_dragMixinOnMouseUp", t), this._originalMapDragState && this._map.dragging.enable(), this._safeToCacheDragState = !0, L.DomEvent.off(this._map.getContainer(), "touchmove mousemove", this._simulateMouseMoveEvent, this), L.DomEvent.off(this._map.getContainer(), "touchend mouseup", this._simulateMouseUpEvent, this), this._dragging ? (this._layer instanceof L.CircleMarker && this._layer.pm._updateHiddenPolyCircle(), this._layerDragged = !0, window.setTimeout(() => {
                    this._dragging = !1, e && L.DomUtil.removeClass(e, "leaflet-pm-dragging"), this._fireDragEnd(), this._fireEdit(), this._layerEdited = !0
                }, 10), !0) : !1
            },
            _onLayerDrag(t) {
                let {
                    latlng: e
                } = t, i = {
                    lat: e.lat - this._tempDragCoord.lat,
                    lng: e.lng - this._tempDragCoord.lng
                }, r = n => n.map(s => {
                    if (Array.isArray(s)) return r(s);
                    let a = {
                        lat: s.lat + i.lat,
                        lng: s.lng + i.lng
                    };
                    return (s.alt || s.alt === 0) && (a.alt = s.alt), a
                });
                if (this._layer instanceof L.Circle && this._layer.options.resizableCircle || this._layer instanceof L.CircleMarker && this._layer.options.resizeableCircleMarker) {
                    let n = r([this._layer.getLatLng()]);
                    this._layer.setLatLng(n[0]), this._fireChange(this._layer.getLatLng(), "Edit")
                } else if (this._layer instanceof L.CircleMarker || this._layer instanceof L.Marker) {
                    let n = this._layer.getLatLng();
                    this._layer._snapped && (n = this._layer._orgLatLng);
                    let s = r([n]);
                    this._layer.setLatLng(s[0]), this._fireChange(this._layer.getLatLng(), "Edit")
                } else if (this._layer instanceof L.ImageOverlay) {
                    let n = r([this._layer.getBounds().getNorthWest(), this._layer.getBounds().getSouthEast()]);
                    this._layer.setBounds(n), this._fireChange(this._layer.getBounds(), "Edit")
                } else {
                    let n = r(this._layer.getLatLngs());
                    this._layer.setLatLngs(n), this._fireChange(this._layer.getLatLngs(), "Edit")
                }
                this._tempDragCoord = e, t.layer = this._layer, this._fireDrag(t)
            },
            addDraggingClass() {
                let t = this._getDOMElem();
                t && L.DomUtil.addClass(t, "leaflet-pm-draggable")
            },
            removeDraggingClass() {
                let t = this._getDOMElem();
                t && L.DomUtil.removeClass(t, "leaflet-pm-draggable")
            },
            _getDOMElem() {
                let t = null;
                return this._layer._path ? t = this._layer._path : this._layer._renderer && this._layer._renderer._container ? t = this._layer._renderer._container : this._layer._image ? t = this._layer._image : this._layer._icon && (t = this._layer._icon), t
            },
            _overwriteEventIfItComesFromMarker(t) {
                t.target.getLatLng && (!t.target._radius || t.target._radius <= 10) && (t.containerPoint = this._map.mouseEventToContainerPoint(t.originalEvent), t.latlng = this._map.containerPointToLatLng(t.containerPoint))
            },
            _syncLayers(t, e) {
                if (this.enabled()) return !1;
                if (!e._fromLayerSync && this._layer === e.target && this.options.syncLayersOnDrag) {
                    e._fromLayerSync = !0;
                    let i = [];
                    if (L.Util.isArray(this.options.syncLayersOnDrag)) i = this.options.syncLayersOnDrag, this.options.syncLayersOnDrag.forEach(r => {
                        r instanceof L.LayerGroup && (i = i.concat(r.pm.getLayers(!0)))
                    });
                    else if (this.options.syncLayersOnDrag === !0 && this._parentLayerGroup)
                        for (let r in this._parentLayerGroup) {
                            let n = this._parentLayerGroup[r];
                            n.pm && (i = n.pm.getLayers(!0))
                        }
                    return L.Util.isArray(i) && i.length > 0 && (i = i.filter(r => !!r.pm).filter(r => !!r.pm.options.draggable), i.forEach(r => {
                        r !== this._layer && r.pm[t] && (r._snapped = !1, r.pm[t](e))
                    })), i.length > 0
                }
                return !1
            },
            _stopDOMImageDrag(t) {
                return t.preventDefault(), !1
            }
        },
        Hl = __;
    var Xl = xt(Le());

    function y_(t, e, i, r) {
        return i.unproject(e.transform(i.project(t, r)), r)
    }

    function ar(t, e, i) {
        let r = i.getMaxZoom();
        if (r === 1 / 0 && (r = i.getZoom()), L.Util.isArray(t)) {
            let n = [];
            return t.forEach(s => {
                n.push(ar(s, e, i))
            }), n
        }
        return t instanceof L.LatLng ? y_(t, e, i, r) : null
    }

    function It(t, e) {
        e instanceof L.Layer && (e = e.getLatLng());
        let i = t.getMaxZoom();
        return i === 1 / 0 && (i = t.getZoom()), t.project(e, i)
    }

    function Re(t, e) {
        let i = t.getMaxZoom();
        return i === 1 / 0 && (i = t.getZoom()), t.unproject(e, i)
    }
    var L_ = {
            _onRotateStart(t) {
                this._preventRenderingMarkers(!0), this._rotationOriginLatLng = this._getRotationCenter().clone(), this._rotationOriginPoint = It(this._map, this._rotationOriginLatLng), this._rotationStartPoint = It(this._map, t.target.getLatLng()), this._initialRotateLatLng = vt(this._layer), this._startAngle = this.getAngle();
                let e = vt(this._rotationLayer, this._rotationLayer.pm._rotateOrgLatLng);
                this._fireRotationStart(this._rotationLayer, e), this._fireRotationStart(this._map, e)
            },
            _onRotate(t) {
                let e = It(this._map, t.target.getLatLng()),
                    i = this._rotationStartPoint,
                    r = this._rotationOriginPoint,
                    n = Math.atan2(e.y - r.y, e.x - r.x) - Math.atan2(i.y - r.y, i.x - r.x);
                this._layer.setLatLngs(this._rotateLayer(n, this._initialRotateLatLng, this._rotationOriginLatLng, L.PM.Matrix.init(), this._map));
                let s = this;

                function a(f, d = [], P = -1) {
                    if (P > -1 && d.push(P), L.Util.isArray(f[0])) f.forEach((E, T) => a(E, d.slice(), T));
                    else {
                        let E = (0, Xl.default)(s._markers, d);
                        f.forEach((T, G) => {
                            E[G].setLatLng(T)
                        })
                    }
                }
                a(this._layer.getLatLngs());
                let o = vt(this._rotationLayer);
                this._rotationLayer.setLatLngs(this._rotateLayer(n, this._rotationLayer.pm._rotateOrgLatLng, this._rotationOriginLatLng, L.PM.Matrix.init(), this._map));
                let l = n * 180 / Math.PI;
                l = l < 0 ? l + 360 : l;
                let u = l + this._startAngle;
                this._setAngle(u), this._rotationLayer.pm._setAngle(u), this._fireRotation(this._rotationLayer, l, o), this._fireRotation(this._map, l, o), this._rotationLayer.pm._fireChange(this._rotationLayer.getLatLngs(), "Rotation")
            },
            _onRotateEnd() {
                let t = this._startAngle;
                delete this._rotationOriginLatLng, delete this._rotationOriginPoint, delete this._rotationStartPoint, delete this._initialRotateLatLng, delete this._startAngle;
                let e = vt(this._rotationLayer, this._rotationLayer.pm._rotateOrgLatLng);
                this._rotationLayer.pm._rotateOrgLatLng = vt(this._rotationLayer), this._fireRotationEnd(this._rotationLayer, t, e), this._fireRotationEnd(this._map, t, e), this._rotationLayer.pm._fireEdit(this._rotationLayer, "Rotation"), this._preventRenderingMarkers(!1), this._layerRotated = !0
            },
            _rotateLayer(t, e, i, r, n) {
                let s = It(n, i);
                return this._matrix = r.clone().rotate(t, s).flip(), ar(e, this._matrix, n)
            },
            _setAngle(t) {
                t = t < 0 ? t + 360 : t, this._angle = t % 360
            },
            _getRotationCenter() {
                if (this._rotationCenter) return this._rotationCenter;
                let t = L.polygon(this._layer.getLatLngs(), {
                        stroke: !1,
                        fill: !1,
                        pmIgnore: !0
                    }).addTo(this._layer._map),
                    e = t.getCenter();
                return t.removeFrom(this._layer._map), e
            },
            enableRotate() {
                if (!this.options.allowRotation) {
                    this.disableRotate();
                    return
                }
                this.rotateEnabled() && this.disableRotate(), this._layer instanceof L.Rectangle && this._angle === void 0 && this.setInitAngle(ke(this._layer._map, this._layer.getLatLngs()[0][0], this._layer.getLatLngs()[0][1]) || 0);
                let t = {
                    fill: !1,
                    stroke: !1,
                    pmIgnore: !1,
                    snapIgnore: !0
                };
                this._rotatePoly = L.polygon(this._layer.getLatLngs(), t), this._rotatePoly._pmTempLayer = !0, this._rotatePoly.addTo(this._layer._map), this._rotatePoly.pm._setAngle(this.getAngle()), this._rotatePoly.pm.setRotationCenter(this.getRotationCenter()), this._rotatePoly.pm.setOptions(this._layer._map.pm.getGlobalOptions()), this._rotatePoly.pm.setOptions({
                    rotate: !0,
                    snappable: !1,
                    hideMiddleMarkers: !0
                }), this._rotatePoly.pm._rotationLayer = this._layer, this._rotatePoly.pm.enable(), this._rotateOrgLatLng = vt(this._layer), this._rotateEnabled = !0, this._layer.on("remove", this.disableRotate, this), this._fireRotationEnable(this._layer), this._fireRotationEnable(this._layer._map)
            },
            disableRotate() {
                this.rotateEnabled() && (this._rotatePoly.pm._layerRotated && this._fireUpdate(), this._rotatePoly.pm._layerRotated = !1, this._rotatePoly.pm.disable(), this._rotatePoly.remove(), this._rotatePoly.pm.setOptions({
                    rotate: !1
                }), this._rotatePoly = void 0, this._rotateOrgLatLng = void 0, this._layer.off("remove", this.disableRotate, this), this._rotateEnabled = !1, this._fireRotationDisable(this._layer), this._fireRotationDisable(this._layer._map))
            },
            rotateEnabled() {
                return !!this._rotateEnabled
            },
            rotateLayer(t) {
                let e = this.getAngle(),
                    i = this._layer.getLatLngs(),
                    r = t * (Math.PI / 180);
                this._layer.setLatLngs(this._rotateLayer(r, this._layer.getLatLngs(), this._getRotationCenter(), L.PM.Matrix.init(), this._layer._map)), this._rotateOrgLatLng = L.polygon(this._layer.getLatLngs()).getLatLngs(), this._setAngle(this.getAngle() + t), this.rotateEnabled() && this._rotatePoly && this._rotatePoly.pm.enabled() && (this._rotatePoly.setLatLngs(this._rotateLayer(r, this._rotatePoly.getLatLngs(), this._getRotationCenter(), L.PM.Matrix.init(), this._rotatePoly._map)), this._rotatePoly.pm._initMarkers());
                let n = this.getAngle() - e;
                n = n < 0 ? n + 360 : n, this._startAngle = e, this._fireRotation(this._layer, n, i, this._layer), this._fireRotation(this._map || this._layer._map, n, i, this._layer), delete this._startAngle, this._fireChange(this._layer.getLatLngs(), "Rotation")
            },
            rotateLayerToAngle(t) {
                let e = t - this.getAngle();
                this.rotateLayer(e)
            },
            getAngle() {
                return this._angle || 0
            },
            setInitAngle(t) {
                this._setAngle(t)
            },
            getRotationCenter() {
                return this._getRotationCenter()
            },
            setRotationCenter(t) {
                this._rotationCenter = t, this._rotatePoly && this._rotatePoly.pm.setRotationCenter(t)
            }
        },
        Yl = L_;
    var b_ = L.Class.extend({
            includes: [Hl, Fe, Yl, Tt],
            options: {
                snappable: !0,
                snapDistance: 20,
                allowSelfIntersection: !0,
                allowSelfIntersectionEdit: !1,
                preventMarkerRemoval: !1,
                removeLayerBelowMinVertexCount: !0,
                limitMarkersToCount: -1,
                hideMiddleMarkers: !1,
                snapSegment: !0,
                syncLayersOnDrag: !1,
                draggable: !0,
                allowEditing: !0,
                allowRemoval: !0,
                allowCutting: !0,
                allowRotation: !0,
                addVertexOn: "click",
                removeVertexOn: "contextmenu",
                removeVertexValidation: void 0,
                addVertexValidation: void 0,
                moveVertexValidation: void 0,
                resizeableCircleMarker: !1,
                resizableCircle: !0
            },
            setOptions(t) {
                L.Util.setOptions(this, t)
            },
            getOptions() {
                return this.options
            },
            applyOptions() {},
            isPolygon() {
                return this._layer instanceof L.Polygon
            },
            getShape() {
                return this._shape
            },
            _setPane(t, e) {
                e === "layerPane" ? t.options.pane = this._map.pm.globalOptions.panes && this._map.pm.globalOptions.panes.layerPane || "overlayPane" : e === "vertexPane" ? t.options.pane = this._map.pm.globalOptions.panes && this._map.pm.globalOptions.panes.vertexPane || "markerPane" : e === "markerPane" && (t.options.pane = this._map.pm.globalOptions.panes && this._map.pm.globalOptions.panes.markerPane || "markerPane")
            },
            remove() {
                (this._map || this._layer._map).pm.removeLayer({
                    target: this._layer
                })
            },
            _vertexValidation(t, e) {
                let i = e.target,
                    r = {
                        layer: this._layer,
                        marker: i,
                        event: e
                    },
                    n = "";
                return t === "move" ? n = "moveVertexValidation" : t === "add" ? n = "addVertexValidation" : t === "remove" && (n = "removeVertexValidation"), this.options[n] && typeof this.options[n] == "function" && !this.options[n](r) ? (t === "move" && (i._cancelDragEventChain = i.getLatLng()), !1) : (i._cancelDragEventChain = null, !0)
            },
            _vertexValidationDrag(t) {
                return t._cancelDragEventChain ? (t._latlng = t._cancelDragEventChain, t.update(), !1) : !0
            },
            _vertexValidationDragEnd(t) {
                return t._cancelDragEventChain ? (t._cancelDragEventChain = null, !1) : !0
            }
        }),
        H = b_;
    H.LayerGroup = L.Class.extend({
        initialize(t) {
            this._layerGroup = t, this._layers = this.getLayers(), this._getMap(), this._layers.forEach(r => this._initLayer(r));
            let e = r => {
                if (r.layer._pmTempLayer) return;
                this._layers = this.getLayers();
                let n = this._layers.filter(s => !s.pm._parentLayerGroup || !(this._layerGroup._leaflet_id in s.pm._parentLayerGroup));
                n.forEach(s => {
                    this._initLayer(s)
                }), n.length > 0 && this._getMap() && this._getMap().pm.globalEditModeEnabled() && this.enabled() && this.enable(this.getOptions())
            };
            this._layerGroup.on("layeradd", L.Util.throttle(e, 100, this), this), this._layerGroup.on("layerremove", r => {
                this._removeLayerFromGroup(r.target)
            }, this);
            let i = r => {
                r.target._pmTempLayer || (this._layers = this.getLayers())
            };
            this._layerGroup.on("layerremove", L.Util.throttle(i, 100, this), this)
        },
        enable(t, e = []) {
            e.length === 0 && (this._layers = this.getLayers()), this._options = t, this._layers.forEach(i => {
                i instanceof L.LayerGroup ? e.indexOf(i._leaflet_id) === -1 && (e.push(i._leaflet_id), i.pm.enable(t, e)) : i.pm.enable(t)
            })
        },
        disable(t = []) {
            t.length === 0 && (this._layers = this.getLayers()), this._layers.forEach(e => {
                e instanceof L.LayerGroup ? t.indexOf(e._leaflet_id) === -1 && (t.push(e._leaflet_id), e.pm.disable(t)) : e.pm.disable()
            })
        },
        enabled(t = []) {
            return t.length === 0 && (this._layers = this.getLayers()), !!this._layers.find(i => i instanceof L.LayerGroup ? t.indexOf(i._leaflet_id) === -1 ? (t.push(i._leaflet_id), i.pm.enabled(t)) : !1 : i.pm.enabled())
        },
        toggleEdit(t, e = []) {
            e.length === 0 && (this._layers = this.getLayers()), this._options = t, this._layers.forEach(i => {
                i instanceof L.LayerGroup ? e.indexOf(i._leaflet_id) === -1 && (e.push(i._leaflet_id), i.pm.toggleEdit(t, e)) : i.pm.toggleEdit(t)
            })
        },
        _initLayer(t) {
            let e = L.Util.stamp(this._layerGroup);
            t.pm._parentLayerGroup || (t.pm._parentLayerGroup = {}), t.pm._parentLayerGroup[e] = this._layerGroup
        },
        _removeLayerFromGroup(t) {
            if (t.pm && t.pm._layerGroup) {
                let e = L.Util.stamp(this._layerGroup);
                delete t.pm._layerGroup[e]
            }
        },
        dragging() {
            return this._layers = this.getLayers(), this._layers ? !!this._layers.find(e => e.pm.dragging()) : !1
        },
        getOptions() {
            return this.options
        },
        _getMap() {
            return this._map || this._layers.find(t => !!t._map)?._map || null
        },
        getLayers(t = !1, e = !0, i = !0, r = []) {
            let n = [];
            return t ? this._layerGroup.getLayers().forEach(s => {
                n.push(s), s instanceof L.LayerGroup && r.indexOf(s._leaflet_id) === -1 && (r.push(s._leaflet_id), n = n.concat(s.pm.getLayers(!0, !0, !0, r)))
            }) : n = this._layerGroup.getLayers(), i && (n = n.filter(s => !(s instanceof L.LayerGroup))), e && (n = n.filter(s => !!s.pm), n = n.filter(s => !s._pmTempLayer), n = n.filter(s => !L.PM.optIn && !s.options.pmIgnore || L.PM.optIn && s.options.pmIgnore === !1)), n
        },
        setOptions(t, e = []) {
            e.length === 0 && (this._layers = this.getLayers()), this.options = t, this._layers.forEach(i => {
                i.pm && (i instanceof L.LayerGroup ? e.indexOf(i._leaflet_id) === -1 && (e.push(i._leaflet_id), i.pm.setOptions(t, e)) : i.pm.setOptions(t))
            })
        }
    });
    H.Marker = H.extend({
        _shape: "Marker",
        initialize(t) {
            this._layer = t, this._enabled = !1, this._layer.on("dragend", this._onDragEnd, this)
        },
        enable(t = {
            draggable: !0
        }) {
            if (L.Util.setOptions(this, t), !this.options.allowEditing || !this._layer._map) {
                this.disable();
                return
            }
            this._map = this._layer._map, this.enabled() && this.disable(), this.applyOptions(), this._layer.on("remove", this.disable, this), this._enabled = !0, this._fireEnable()
        },
        disable() {
            this.enabled() && (this.disableLayerDrag(), this._layer.off("remove", this.disable, this), this._layer.off("contextmenu", this._removeMarker, this), this._layerEdited && this._fireUpdate(), this._layerEdited = !1, this._fireDisable(), this._enabled = !1)
        },
        enabled() {
            return this._enabled
        },
        toggleEdit(t) {
            this.enabled() ? this.disable() : this.enable(t)
        },
        applyOptions() {
            this.options.snappable ? this._initSnappableMarkers() : this._disableSnapping(), this.options.draggable ? this.enableLayerDrag() : this.disableLayerDrag(), this.options.preventMarkerRemoval || this._layer.on("contextmenu", this._removeMarker, this)
        },
        _removeMarker(t) {
            let e = t.target;
            e.remove(), this._fireRemove(e), this._fireRemove(this._map, e)
        },
        _onDragEnd() {
            this._fireEdit(), this._layerEdited = !0
        },
        _initSnappableMarkers() {
            let t = this._layer;
            this.options.snapDistance = this.options.snapDistance || 30, this.options.snapSegment = this.options.snapSegment === void 0 ? !0 : this.options.snapSegment, t.off("pm:drag", this._handleSnapping, this), t.on("pm:drag", this._handleSnapping, this), t.off("pm:dragend", this._cleanupSnapping, this), t.on("pm:dragend", this._cleanupSnapping, this), t.off("pm:dragstart", this._unsnap, this), t.on("pm:dragstart", this._unsnap, this)
        },
        _disableSnapping() {
            let t = this._layer;
            t.off("pm:drag", this._handleSnapping, this), t.off("pm:dragend", this._cleanupSnapping, this), t.off("pm:dragstart", this._unsnap, this)
        }
    });
    var St = xt(Le());
    var v_ = {
            filterMarkerGroup() {
                this.markerCache = [], this.createCache(), this._layer.on("pm:edit", this.createCache, this), this.applyLimitFilters({}), this.throttledApplyLimitFilters || (this.throttledApplyLimitFilters = L.Util.throttle(this.applyLimitFilters, 100, this)), this._layer.on("pm:disable", this._removeMarkerLimitEvents, this), this._layer.on("remove", this._removeMarkerLimitEvents, this), this.options.limitMarkersToCount > -1 && (this._layer.on("pm:vertexremoved", this._initMarkers, this), this._map.on("mousemove", this.throttledApplyLimitFilters, this))
            },
            _removeMarkerLimitEvents() {
                this._map.off("mousemove", this.throttledApplyLimitFilters, this), this._layer.off("pm:edit", this.createCache, this), this._layer.off("pm:disable", this._removeMarkerLimitEvents, this), this._layer.off("pm:vertexremoved", this._initMarkers, this)
            },
            createCache() {
                let t = [...this._markerGroup.getLayers(), ...this.markerCache];
                this.markerCache = t.filter((e, i, r) => r.indexOf(e) === i)
            },
            _removeFromCache(t) {
                let e = this.markerCache.indexOf(t);
                e > -1 && this.markerCache.splice(e, 1)
            },
            renderLimits(t) {
                this.markerCache.forEach(e => {
                    t.includes(e) ? this._markerGroup.addLayer(e) : this._markerGroup.removeLayer(e)
                })
            },
            applyLimitFilters({
                latlng: t = {
                    lat: 0,
                    lng: 0
                }
            }) {
                if (this._preventRenderMarkers) return;
                let i = [...this._filterClosestMarkers(t)];
                this.renderLimits(i)
            },
            _filterClosestMarkers(t) {
                let e = [...this.markerCache],
                    i = this.options.limitMarkersToCount;
                return i === -1 ? e : (e.sort((n, s) => {
                    let a = n._latlng.distanceTo(t),
                        o = s._latlng.distanceTo(t);
                    return a - o
                }), e.filter((n, s) => i > -1 ? s < i : !0))
            },
            _preventRenderMarkers: !1,
            _preventRenderingMarkers(t) {
                this._preventRenderMarkers = !!t
            }
        },
        Jl = v_;
    H.Line = H.extend({
        includes: [Jl],
        _shape: "Line",
        initialize(t) {
            this._layer = t, this._enabled = !1
        },
        enable(t) {
            if (L.Util.setOptions(this, t), this._map = this._layer._map, !!this._map) {
                if (!this.options.allowEditing) {
                    this.disable();
                    return
                }
                this.enabled() && this.disable(), this._enabled = !0, this._initMarkers(), this.applyOptions(), this._layer.on("remove", this.disable, this), this.options.allowSelfIntersection || this._layer.on("pm:vertexremoved", this._handleSelfIntersectionOnVertexRemoval, this), this.options.allowSelfIntersection ? this.cachedColor = void 0 : (this._layer.options.color !== "#f00000ff" ? (this.cachedColor = this._layer.options.color, this.isRed = !1) : this.isRed = !0, this._handleLayerStyle()), this._fireEnable()
            }
        },
        disable() {
            if (!this.enabled() || this._dragging) return;
            this._enabled = !1, this._markerGroup.clearLayers(), this._markerGroup.removeFrom(this._map), this._layer.off("remove", this.disable, this), this.options.allowSelfIntersection || this._layer.off("pm:vertexremoved", this._handleSelfIntersectionOnVertexRemoval, this);
            let t = this._layer._path ? this._layer._path : this._layer._renderer._container;
            L.DomUtil.removeClass(t, "leaflet-pm-draggable"), this._layerEdited && this._fireUpdate(), this._layerEdited = !1, this._fireDisable()
        },
        enabled() {
            return this._enabled
        },
        toggleEdit(t) {
            return this.enabled() ? this.disable() : this.enable(t), this.enabled()
        },
        applyOptions() {
            this.options.snappable ? this._initSnappableMarkers() : this._disableSnapping()
        },
        _initMarkers() {
            let t = this._map,
                e = this._layer.getLatLngs();
            this._markerGroup && this._markerGroup.clearLayers(), this._markerGroup = new L.FeatureGroup, this._markerGroup._pmTempLayer = !0;
            let i = r => {
                if (Array.isArray(r[0])) return r.map(i, this);
                let n = r.map(this._createMarker, this);
                return this.options.hideMiddleMarkers !== !0 && r.map((s, a) => {
                    let o = this.isPolygon() ? (a + 1) % r.length : a + 1;
                    return this._createMiddleMarker(n[a], n[o])
                }), n
            };
            this._markers = i(e), this.filterMarkerGroup(), t.addLayer(this._markerGroup)
        },
        _createMarker(t) {
            let e = new L.Marker(t, {
                draggable: !0,
                icon: L.divIcon({
                    className: "marker-icon"
                })
            });
            return this._setPane(e, "vertexPane"), e._pmTempLayer = !0, this.options.rotate ? (e.on("dragstart", this._onRotateStart, this), e.on("drag", this._onRotate, this), e.on("dragend", this._onRotateEnd, this)) : (e.on("click", this._onVertexClick, this), e.on("dragstart", this._onMarkerDragStart, this), e.on("move", this._onMarkerDrag, this), e.on("dragend", this._onMarkerDragEnd, this), this.options.preventMarkerRemoval || e.on(this.options.removeVertexOn, this._removeMarker, this)), this._markerGroup.addLayer(e), e
        },
        _createMiddleMarker(t, e) {
            if (!t || !e) return !1;
            let i = L.PM.Utils.calcMiddleLatLng(this._map, t.getLatLng(), e.getLatLng()),
                r = this._createMarker(i),
                n = L.divIcon({
                    className: "marker-icon marker-icon-middle"
                });
            return r.setIcon(n), r.leftM = t, r.rightM = e, t._middleMarkerNext = r, e._middleMarkerPrev = r, r.on(this.options.addVertexOn, this._onMiddleMarkerClick, this), r.on("movestart", this._onMiddleMarkerMoveStart, this), r
        },
        _onMiddleMarkerClick(t) {
            let e = t.target;
            if (!this._vertexValidation("add", t)) return;
            let i = L.divIcon({
                className: "marker-icon"
            });
            e.setIcon(i), this._addMarker(e, e.leftM, e.rightM)
        },
        _onMiddleMarkerMoveStart(t) {
            let e = t.target;
            if (e.on("moveend", this._onMiddleMarkerMoveEnd, this), !this._vertexValidation("add", t)) {
                e.on("move", this._onMiddleMarkerMovePrevent, this);
                return
            }
            e._dragging = !0, this._addMarker(e, e.leftM, e.rightM)
        },
        _onMiddleMarkerMovePrevent(t) {
            let e = t.target;
            this._vertexValidationDrag(e)
        },
        _onMiddleMarkerMoveEnd(t) {
            let e = t.target;
            if (e.off("move", this._onMiddleMarkerMovePrevent, this), e.off("moveend", this._onMiddleMarkerMoveEnd, this), !this._vertexValidationDragEnd(e)) return;
            let i = L.divIcon({
                className: "marker-icon"
            });
            e.setIcon(i), setTimeout(() => {
                delete e._dragging
            }, 100)
        },
        _addMarker(t, e, i) {
            t.off("movestart", this._onMiddleMarkerMoveStart, this), t.off(this.options.addVertexOn, this._onMiddleMarkerClick, this);
            let r = t.getLatLng(),
                n = this._layer._latlngs;
            delete t.leftM, delete t.rightM;
            let {
                indexPath: s,
                index: a,
                parentPath: o
            } = L.PM.Utils.findDeepMarkerIndex(this._markers, e), l = s.length > 1 ? (0, St.default)(n, o) : n, u = s.length > 1 ? (0, St.default)(this._markers, o) : this._markers;
            l.splice(a + 1, 0, r), u.splice(a + 1, 0, t), this._layer.setLatLngs(n), this.options.hideMiddleMarkers !== !0 && (this._createMiddleMarker(e, t), this._createMiddleMarker(t, i)), this._fireEdit(), this._layerEdited = !0, this._fireChange(this._layer.getLatLngs(), "Edit"), this._fireVertexAdded(t, L.PM.Utils.findDeepMarkerIndex(this._markers, t).indexPath, r), this.options.snappable && this._initSnappableMarkers()
        },
        hasSelfIntersection() {
            return zt(this._layer.toGeoJSON(15)).features.length > 0
        },
        _handleSelfIntersectionOnVertexRemoval() {
            this._handleLayerStyle(!0) && (this._layer.setLatLngs(this._coordsBeforeEdit), this._coordsBeforeEdit = null, this._initMarkers())
        },
        _handleLayerStyle(t) {
            let e = this._layer,
                i, r;
            if (this.options.allowSelfIntersection ? i = !1 : (r = zt(this._layer.toGeoJSON(15)), i = r.features.length > 0), i) {
                if (!this.options.allowSelfIntersection && this.options.allowSelfIntersectionEdit && this._updateDisabledMarkerStyle(this._markers, !0), this.isRed) return i;
                t ? this._flashLayer() : (e.setStyle({
                    color: "#f00000ff"
                }), this.isRed = !0), this._fireIntersect(r)
            } else e.setStyle({
                color: this.cachedColor
            }), this.isRed = !1, !this.options.allowSelfIntersection && this.options.allowSelfIntersectionEdit && this._updateDisabledMarkerStyle(this._markers, !1);
            return i
        },
        _flashLayer() {
            this.cachedColor || (this.cachedColor = this._layer.options.color), this._layer.setStyle({
                color: "#f00000ff"
            }), this.isRed = !0, window.setTimeout(() => {
                this._layer.setStyle({
                    color: this.cachedColor
                }), this.isRed = !1
            }, 200)
        },
        _updateDisabledMarkerStyle(t, e) {
            t.forEach(i => {
                Array.isArray(i) ? this._updateDisabledMarkerStyle(i, e) : i._icon && (e && !this._checkMarkerAllowedToDrag(i) ? L.DomUtil.addClass(i._icon, "vertexmarker-disabled") : L.DomUtil.removeClass(i._icon, "vertexmarker-disabled"))
            })
        },
        _removeMarker(t) {
            let e = t.target;
            if (!this._vertexValidation("remove", t)) return;
            this.options.allowSelfIntersection || (this._coordsBeforeEdit = vt(this._layer, this._layer.getLatLngs()));
            let i = this._layer.getLatLngs(),
                {
                    indexPath: r,
                    index: n,
                    parentPath: s
                } = L.PM.Utils.findDeepMarkerIndex(this._markers, e);
            if (!r) return;
            let a = r.length > 1 ? (0, St.default)(i, s) : i,
                o = r.length > 1 ? (0, St.default)(this._markers, s) : this._markers;
            if (!this.options.removeLayerBelowMinVertexCount && (a.length <= 2 || this.isPolygon() && a.length <= 3)) {
                this._flashLayer();
                return
            }
            a.splice(n, 1), this._layer.setLatLngs(i), this.isPolygon() && a.length <= 2 && a.splice(0, a.length);
            let l = !1;
            if (a.length <= 1 && (a.splice(0, a.length), s.length > 1 && r.length > 1 && (i = ve(i)), this._layer.setLatLngs(i), this._initMarkers(), l = !0), be(i) || this._layer.remove(), i = ve(i), this._layer.setLatLngs(i), this._markers = ve(this._markers), !l && (o = r.length > 1 ? (0, St.default)(this._markers, s) : this._markers, e._middleMarkerPrev && (this._markerGroup.removeLayer(e._middleMarkerPrev), this._removeFromCache(e._middleMarkerPrev)), e._middleMarkerNext && (this._markerGroup.removeLayer(e._middleMarkerNext), this._removeFromCache(e._middleMarkerNext)), this._markerGroup.removeLayer(e), this._removeFromCache(e), o)) {
                let u, f;
                if (this.isPolygon() ? (u = (n + 1) % o.length, f = (n + (o.length - 1)) % o.length) : (f = n - 1 < 0 ? void 0 : n - 1, u = n + 1 >= o.length ? void 0 : n + 1), u !== f) {
                    let d = o[f],
                        P = o[u];
                    this.options.hideMiddleMarkers !== !0 && this._createMiddleMarker(d, P)
                }
                o.splice(n, 1)
            }
            this._fireEdit(), this._layerEdited = !0, this._fireVertexRemoved(e, r), this._fireChange(this._layer.getLatLngs(), "Edit")
        },
        updatePolygonCoordsFromMarkerDrag(t) {
            let e = this._layer.getLatLngs(),
                i = t.getLatLng(),
                {
                    indexPath: r,
                    index: n,
                    parentPath: s
                } = L.PM.Utils.findDeepMarkerIndex(this._markers, t);
            (r.length > 1 ? (0, St.default)(e, s) : e).splice(n, 1, i), this._layer.setLatLngs(e)
        },
        _getNeighborMarkers(t) {
            let {
                indexPath: e,
                index: i,
                parentPath: r
            } = L.PM.Utils.findDeepMarkerIndex(this._markers, t), n = e.length > 1 ? (0, St.default)(this._markers, r) : this._markers, s = (i + 1) % n.length, a = (i + (n.length - 1)) % n.length, o = n[a], l = n[s];
            return {
                prevMarker: o,
                nextMarker: l
            }
        },
        _checkMarkerAllowedToDrag(t) {
            let {
                prevMarker: e,
                nextMarker: i
            } = this._getNeighborMarkers(t), r = L.polyline([e.getLatLng(), t.getLatLng()]), n = L.polyline([t.getLatLng(), i.getLatLng()]), s = pt(this._layer.toGeoJSON(15), r.toGeoJSON(15)).features.length, a = pt(this._layer.toGeoJSON(15), n.toGeoJSON(15)).features.length;
            return t.getLatLng() === this._markers[0][0].getLatLng() ? a += 1 : t.getLatLng() === this._markers[0][this._markers[0].length - 1].getLatLng() && (s += 1), !(s <= 2 && a <= 2)
        },
        _onMarkerDragStart(t) {
            let e = t.target;
            if (this.cachedColor || (this.cachedColor = this._layer.options.color), !this._vertexValidation("move", t)) return;
            let {
                indexPath: i
            } = L.PM.Utils.findDeepMarkerIndex(this._markers, e);
            this._fireMarkerDragStart(t, i), this.options.allowSelfIntersection || (this._coordsBeforeEdit = vt(this._layer, this._layer.getLatLngs())), !this.options.allowSelfIntersection && this.options.allowSelfIntersectionEdit && this.hasSelfIntersection() ? this._markerAllowedToDrag = this._checkMarkerAllowedToDrag(e) : this._markerAllowedToDrag = null
        },
        _onMarkerDrag(t) {
            let e = t.target;
            if (!this._vertexValidationDrag(e)) return;
            let {
                indexPath: i,
                index: r,
                parentPath: n
            } = L.PM.Utils.findDeepMarkerIndex(this._markers, e);
            if (!i) return;
            if (!this.options.allowSelfIntersection && this.options.allowSelfIntersectionEdit && this.hasSelfIntersection() && this._markerAllowedToDrag === !1) {
                this._layer.setLatLngs(this._coordsBeforeEdit), this._initMarkers(), this._handleLayerStyle();
                return
            }
            this.updatePolygonCoordsFromMarkerDrag(e);
            let s = i.length > 1 ? (0, St.default)(this._markers, n) : this._markers,
                a = (r + 1) % s.length,
                o = (r + (s.length - 1)) % s.length,
                l = e.getLatLng(),
                u = s[o].getLatLng(),
                f = s[a].getLatLng();
            if (e._middleMarkerNext) {
                let d = L.PM.Utils.calcMiddleLatLng(this._map, l, f);
                e._middleMarkerNext.setLatLng(d)
            }
            if (e._middleMarkerPrev) {
                let d = L.PM.Utils.calcMiddleLatLng(this._map, l, u);
                e._middleMarkerPrev.setLatLng(d)
            }
            this.options.allowSelfIntersection || this._handleLayerStyle(), this._fireMarkerDrag(t, i), this._fireChange(this._layer.getLatLngs(), "Edit")
        },
        _onMarkerDragEnd(t) {
            let e = t.target;
            if (!this._vertexValidationDragEnd(e)) return;
            let {
                indexPath: i
            } = L.PM.Utils.findDeepMarkerIndex(this._markers, e), r = this.hasSelfIntersection();
            r && this.options.allowSelfIntersectionEdit && this._markerAllowedToDrag && (r = !1);
            let n = !this.options.allowSelfIntersection && r;
            if (this._fireMarkerDragEnd(t, i, n), n) {
                this._layer.setLatLngs(this._coordsBeforeEdit), this._coordsBeforeEdit = null, this._initMarkers(), this.options.snappable && this._initSnappableMarkers(), this._handleLayerStyle(), this._fireLayerReset(t, i);
                return
            }!this.options.allowSelfIntersection && this.options.allowSelfIntersectionEdit && this._handleLayerStyle(), this._fireEdit(), this._layerEdited = !0, this._fireChange(this._layer.getLatLngs(), "Edit")
        },
        _onVertexClick(t) {
            let e = t.target;
            if (e._dragging) return;
            let {
                indexPath: i
            } = L.PM.Utils.findDeepMarkerIndex(this._markers, e);
            this._fireVertexClick(t, i)
        }
    });
    H.Polygon = H.Line.extend({
        _shape: "Polygon",
        _checkMarkerAllowedToDrag(t) {
            let {
                prevMarker: e,
                nextMarker: i
            } = this._getNeighborMarkers(t), r = L.polyline([e.getLatLng(), t.getLatLng()]), n = L.polyline([t.getLatLng(), i.getLatLng()]), s = pt(this._layer.toGeoJSON(15), r.toGeoJSON(15)).features.length, a = pt(this._layer.toGeoJSON(15), n.toGeoJSON(15)).features.length;
            return !(s <= 2 && a <= 2)
        }
    });
    H.Rectangle = H.Polygon.extend({
        _shape: "Rectangle",
        _initMarkers() {
            let t = this._map,
                e = this._findCorners();
            this._markerGroup && this._markerGroup.clearLayers(), this._markerGroup = new L.FeatureGroup, this._markerGroup._pmTempLayer = !0, t.addLayer(this._markerGroup), this._markers = [], this._markers[0] = e.map(this._createMarker, this), [this._cornerMarkers] = this._markers, this._layer.getLatLngs()[0].forEach((i, r) => {
                let n = this._cornerMarkers.find(s => s._index === r);
                n && n.setLatLng(i)
            })
        },
        applyOptions() {
            this.options.snappable ? this._initSnappableMarkers() : this._disableSnapping(), this._addMarkerEvents()
        },
        _createMarker(t, e) {
            let i = new L.Marker(t, {
                draggable: !0,
                icon: L.divIcon({
                    className: "marker-icon"
                })
            });
            return this._setPane(i, "vertexPane"), i._origLatLng = t, i._index = e, i._pmTempLayer = !0, i.on("click", this._onVertexClick, this), this._markerGroup.addLayer(i), i
        },
        _addMarkerEvents() {
            this._markers[0].forEach(t => {
                t.on("dragstart", this._onMarkerDragStart, this), t.on("drag", this._onMarkerDrag, this), t.on("dragend", this._onMarkerDragEnd, this), this.options.preventMarkerRemoval || t.on("contextmenu", this._removeMarker, this)
            })
        },
        _removeMarker() {
            return null
        },
        _onMarkerDragStart(t) {
            if (!this._vertexValidation("move", t)) return;
            let e = t.target,
                i = this._cornerMarkers;
            e._oppositeCornerLatLng = i.find(n => n._index === (e._index + 2) % 4).getLatLng(), e._snapped = !1;
            let {
                indexPath: r
            } = L.PM.Utils.findDeepMarkerIndex(this._markers, e);
            this._fireMarkerDragStart(t, r)
        },
        _onMarkerDrag(t) {
            let e = t.target;
            if (!this._vertexValidationDrag(e) || e._index === void 0) return;
            this._adjustRectangleForMarkerMove(e);
            let {
                indexPath: i
            } = L.PM.Utils.findDeepMarkerIndex(this._markers, e);
            this._fireMarkerDrag(t, i), this._fireChange(this._layer.getLatLngs(), "Edit")
        },
        _onMarkerDragEnd(t) {
            let e = t.target;
            if (!this._vertexValidationDragEnd(e)) return;
            this._cornerMarkers.forEach(r => {
                delete r._oppositeCornerLatLng
            });
            let {
                indexPath: i
            } = L.PM.Utils.findDeepMarkerIndex(this._markers, e);
            this._fireMarkerDragEnd(t, i), this._fireEdit(), this._layerEdited = !0, this._fireChange(this._layer.getLatLngs(), "Edit")
        },
        _adjustRectangleForMarkerMove(t) {
            L.extend(t._origLatLng, t._latlng);
            let e = L.PM.Utils._getRotatedRectangle(t.getLatLng(), t._oppositeCornerLatLng, this.getAngle(), this._map);
            this._layer.setLatLngs(e), this._adjustAllMarkers(), this._layer.redraw()
        },
        _adjustAllMarkers() {
            let t = this._layer.getLatLngs()[0];
            t && t.length !== 4 && t.length > 0 ? (t.forEach((i, r) => {
                this._cornerMarkers[r].setLatLng(i)
            }), this._cornerMarkers.slice(t.length).forEach(i => {
                i.setLatLng(t[0])
            })) : !t || !t.length ? console.error("The layer has no LatLngs") : this._cornerMarkers.forEach(e => {
                e.setLatLng(t[e._index])
            })
        },
        _findCorners() {
            this._angle === void 0 && this.setInitAngle(ke(this._map, this._layer.getLatLngs()[0][0], this._layer.getLatLngs()[0][1]) || 0);
            let t = this._layer.getLatLngs()[0];
            return L.PM.Utils._getRotatedRectangle(t[0], t[2], this.getAngle(), this._map || this)
        }
    });
    H.CircleMarker = H.extend({
        _shape: "CircleMarker",
        initialize(t) {
            this._layer = t, this._enabled = !1, this._minRadiusOption = "minRadiusCircleMarker", this._maxRadiusOption = "maxRadiusCircleMarker", this._editableOption = "resizeableCircleMarker", this._updateHiddenPolyCircle()
        },
        enable(t = {
            draggable: !0,
            snappable: !0
        }) {
            if (L.Util.setOptions(this, t), this.options.editable && (this.options.resizeableCircleMarker = this.options.editable, delete this.options.editable), !this.options.allowEditing || !this._layer._map) {
                this.disable();
                return
            }
            this._map = this._layer._map, this.enabled() && this.disable(), this.applyOptions(), this._layer.on("remove", this.disable, this), this._enabled = !0, this._extendingEnable(), this._updateHiddenPolyCircle(), this._fireEnable()
        },
        _extendingEnable() {
            this._layer.on("pm:dragstart", this._onDragStart, this), this._layer.on("pm:drag", this._onMarkerDrag, this), this._layer.on("pm:dragend", this._onMarkerDragEnd, this)
        },
        disable() {
            this.dragging() || (this._map || (this._map = this._layer._map), this._map && this.enabled() && (this.layerDragEnabled() && this.disableLayerDrag(), this.options[this._editableOption] ? (this._helperLayers && this._helperLayers.clearLayers(), this._map.off("move", this._syncMarkers, this), this._outerMarker.off("drag", this._handleOuterMarkerSnapping, this)) : this._map.off("move", this._updateHiddenPolyCircle, this), this._extendingDisable(), this._layer.off("remove", this.disable, this), this._layerEdited && this._fireUpdate(), this._layerEdited = !1, this._fireDisable(), this._enabled = !1))
        },
        _extendingDisable() {
            this._layer.off("contextmenu", this._removeMarker, this)
        },
        enabled() {
            return this._enabled
        },
        toggleEdit(t) {
            this.enabled() ? this.disable() : this.enable(t)
        },
        applyOptions() {
            this.options[this._editableOption] ? (this._initMarkers(), this._map.on("move", this._syncMarkers, this), this.options.snappable ? (this._initSnappableMarkers(), this._outerMarker.on("drag", this._handleOuterMarkerSnapping, this), this._outerMarker.on("move", this._syncHintLine, this), this._outerMarker.on("move", this._syncCircleRadius, this), this._centerMarker.on("move", this._moveCircle, this)) : this._disableSnapping()) : (this.options.draggable && this.enableLayerDrag(), this._map.on("move", this._updateHiddenPolyCircle, this), this.options.snappable ? this._initSnappableMarkersDrag() : this._disableSnappingDrag()), this._extendingApplyOptions()
        },
        _extendingApplyOptions() {
            this.options.preventMarkerRemoval || this._layer.on("contextmenu", this._removeMarker, this)
        },
        _initMarkers() {
            let t = this._map;
            this._helperLayers && this._helperLayers.clearLayers(), this._helperLayers = new L.FeatureGroup, this._helperLayers._pmTempLayer = !0, this._helperLayers.addTo(t);
            let e = this._layer.getLatLng(),
                i = this._layer._radius,
                r = this._getLatLngOnCircle(e, i);
            this._centerMarker = this._createCenterMarker(e), this._outerMarker = this._createOuterMarker(r), this._markers = [this._centerMarker, this._outerMarker], this._createHintLine(this._centerMarker, this._outerMarker)
        },
        _getLatLngOnCircle(t, e) {
            let i = this._map.project(t),
                r = L.point(i.x + e, i.y);
            return this._map.unproject(r)
        },
        _createHintLine(t, e) {
            let i = t.getLatLng(),
                r = e.getLatLng();
            this._hintline = L.polyline([i, r], this.options.hintlineStyle), this._setPane(this._hintline, "layerPane"), this._hintline._pmTempLayer = !0, this._helperLayers.addLayer(this._hintline)
        },
        _createCenterMarker(t) {
            let e = this._createMarker(t);
            return this.options.draggable ? L.DomUtil.addClass(e._icon, "leaflet-pm-draggable") : e.dragging.disable(), e
        },
        _createOuterMarker(t) {
            let e = this._createMarker(t);
            return e.on("drag", this._resizeCircle, this), e
        },
        _createMarker(t) {
            let e = new L.Marker(t, {
                draggable: !0,
                icon: L.divIcon({
                    className: "marker-icon"
                })
            });
            return this._setPane(e, "vertexPane"), e._origLatLng = t, e._pmTempLayer = !0, e.on("dragstart", this._onMarkerDragStart, this), e.on("drag", this._onMarkerDrag, this), e.on("dragend", this._onMarkerDragEnd, this), e.on("click", this._onVertexClick, this), this._helperLayers.addLayer(e), e
        },
        _moveCircle(t) {
            if (t.target._cancelDragEventChain) return;
            let i = this._centerMarker.getLatLng();
            this._layer.setLatLng(i);
            let r = this._layer._radius,
                n = this._getLatLngOnCircle(i, r);
            this._outerMarker._latlng = n, this._outerMarker.update(), this._syncHintLine(), this._updateHiddenPolyCircle(), this._fireCenterPlaced("Edit"), this._fireChange(this._layer.getLatLng(), "Edit")
        },
        _syncMarkers() {
            let t = this._layer.getLatLng(),
                e = this._layer._radius,
                i = this._getLatLngOnCircle(t, e);
            this._outerMarker.setLatLng(i), this._centerMarker.setLatLng(t), this._syncHintLine(), this._updateHiddenPolyCircle()
        },
        _resizeCircle() {
            this._outerMarker.setLatLng(this._getNewDestinationOfOuterMarker()), this._syncHintLine(), this._syncCircleRadius()
        },
        _syncCircleRadius() {
            let t = this._centerMarker.getLatLng(),
                e = this._outerMarker.getLatLng(),
                i = this._distanceCalculation(t, e);
            this.options[this._minRadiusOption] && i < this.options[this._minRadiusOption] ? this._layer.setRadius(this.options[this._minRadiusOption]) : this.options[this._maxRadiusOption] && i > this.options[this._maxRadiusOption] ? this._layer.setRadius(this.options[this._maxRadiusOption]) : this._layer.setRadius(i), this._updateHiddenPolyCircle(), this._fireChange(this._layer.getLatLng(), "Edit")
        },
        _syncHintLine() {
            let t = this._centerMarker.getLatLng(),
                e = this._outerMarker.getLatLng();
            this._hintline.setLatLngs([t, e])
        },
        _removeMarker() {
            this.options[this._editableOption] && this.disable(), this._layer.remove(), this._fireRemove(this._layer), this._fireRemove(this._map, this._layer)
        },
        _onDragStart() {
            this._map.pm.Draw.CircleMarker._layerIsDragging = !0
        },
        _onMarkerDragStart(t) {
            this._vertexValidation("move", t) && this._fireMarkerDragStart(t)
        },
        _onMarkerDrag(t) {
            let e = t.target;
            e instanceof L.Marker && !this._vertexValidationDrag(e) || this._fireMarkerDrag(t)
        },
        _onMarkerDragEnd(t) {
            this._extedingMarkerDragEnd();
            let e = t.target;
            this._vertexValidationDragEnd(e) && (this.options[this._editableOption] && (this._fireEdit(), this._layerEdited = !0), this._fireMarkerDragEnd(t))
        },
        _extedingMarkerDragEnd() {
            this._map.pm.Draw.CircleMarker._layerIsDragging = !1
        },
        _initSnappableMarkersDrag() {
            let t = this._layer;
            this.options.snapDistance = this.options.snapDistance || 30, this.options.snapSegment = this.options.snapSegment === void 0 ? !0 : this.options.snapSegment, t.off("pm:drag", this._handleSnapping, this), t.on("pm:drag", this._handleSnapping, this), t.off("pm:dragend", this._cleanupSnapping, this), t.on("pm:dragend", this._cleanupSnapping, this), t.off("pm:dragstart", this._unsnap, this), t.on("pm:dragstart", this._unsnap, this)
        },
        _disableSnappingDrag() {
            let t = this._layer;
            t.off("pm:drag", this._handleSnapping, this), t.off("pm:dragend", this._cleanupSnapping, this), t.off("pm:dragstart", this._unsnap, this)
        },
        _updateHiddenPolyCircle() {
            let t = this._layer._map || this._map;
            if (t) {
                let e = L.PM.Utils.pxRadiusToMeterRadius(this._layer.getRadius(), t, this._layer.getLatLng()),
                    i = L.circle(this._layer.getLatLng(), this._layer.options);
                i.setRadius(e);
                let r = t && t.pm._isCRSSimple();
                this._hiddenPolyCircle ? this._hiddenPolyCircle.setLatLngs(L.PM.Utils.circleToPolygon(i, 200, !r).getLatLngs()) : this._hiddenPolyCircle = L.PM.Utils.circleToPolygon(i, 200, !r), this._hiddenPolyCircle._parentCopy || (this._hiddenPolyCircle._parentCopy = this._layer)
            }
        },
        _getNewDestinationOfOuterMarker() {
            let t = this._centerMarker.getLatLng(),
                e = this._outerMarker.getLatLng(),
                i = this._distanceCalculation(t, e);
            return this.options[this._minRadiusOption] && i < this.options[this._minRadiusOption] ? e = te(this._map, t, e, this._getMinDistanceInMeter(t)) : this.options[this._maxRadiusOption] && i > this.options[this._maxRadiusOption] && (e = te(this._map, t, e, this._getMaxDistanceInMeter(t))), e
        },
        _handleOuterMarkerSnapping() {
            if (this._outerMarker._snapped) {
                let t = this._centerMarker.getLatLng(),
                    e = this._outerMarker.getLatLng(),
                    i = this._distanceCalculation(t, e);
                this.options[this._minRadiusOption] && i < this.options[this._minRadiusOption] ? this._outerMarker.setLatLng(this._outerMarker._orgLatLng) : this.options[this._maxRadiusOption] && i > this.options[this._maxRadiusOption] && this._outerMarker.setLatLng(this._outerMarker._orgLatLng)
            }
            this._outerMarker.setLatLng(this._getNewDestinationOfOuterMarker())
        },
        _distanceCalculation(t, e) {
            return this._map.project(t).distanceTo(this._map.project(e))
        },
        _getMinDistanceInMeter(t) {
            return L.PM.Utils.pxRadiusToMeterRadius(this.options[this._minRadiusOption], this._map, t)
        },
        _getMaxDistanceInMeter(t) {
            return L.PM.Utils.pxRadiusToMeterRadius(this.options[this._maxRadiusOption], this._map, t)
        },
        _onVertexClick(t) {
            t.target._dragging || this._fireVertexClick(t, void 0)
        }
    });
    H.Circle = H.CircleMarker.extend({
        _shape: "Circle",
        initialize(t) {
            this._layer = t, this._enabled = !1, this._minRadiusOption = "minRadiusCircle", this._maxRadiusOption = "maxRadiusCircle", this._editableOption = "resizableCircle", this._updateHiddenPolyCircle()
        },
        enable(t) {
            L.PM.Edit.CircleMarker.prototype.enable.call(this, t || {})
        },
        _extendingEnable() {},
        _extendingDisable() {
            this._layer.off("remove", this.disable, this);
            let t = this._layer._path ? this._layer._path : this._layer._renderer._container;
            L.DomUtil.removeClass(t, "leaflet-pm-draggable")
        },
        _extendingApplyOptions() {},
        _syncMarkers() {},
        _removeMarker() {},
        _onDragStart() {},
        _extedingMarkerDragEnd() {},
        _updateHiddenPolyCircle() {
            let t = this._map && this._map.pm._isCRSSimple();
            this._hiddenPolyCircle ? this._hiddenPolyCircle.setLatLngs(L.PM.Utils.circleToPolygon(this._layer, 200, !t).getLatLngs()) : this._hiddenPolyCircle = L.PM.Utils.circleToPolygon(this._layer, 200, !t), this._hiddenPolyCircle._parentCopy || (this._hiddenPolyCircle._parentCopy = this._layer)
        },
        _distanceCalculation(t, e) {
            return this._map.distance(t, e)
        },
        _getMinDistanceInMeter() {
            return this.options[this._minRadiusOption]
        },
        _getMaxDistanceInMeter() {
            return this.options[this._maxRadiusOption]
        },
        _onVertexClick(t) {
            t.target._dragging || this._fireVertexClick(t, void 0)
        }
    });
    H.ImageOverlay = H.extend({
        _shape: "ImageOverlay",
        initialize(t) {
            this._layer = t, this._enabled = !1
        },
        toggleEdit(t) {
            this.enabled() ? this.disable() : this.enable(t)
        },
        enabled() {
            return this._enabled
        },
        enable(t = {
            draggable: !0,
            snappable: !0
        }) {
            if (L.Util.setOptions(this, t), this._map = this._layer._map, !!this._map) {
                if (!this.options.allowEditing) {
                    this.disable();
                    return
                }
                this.enabled() || this.disable(), this.enableLayerDrag(), this._layer.on("remove", this.disable, this), this._enabled = !0, this._otherSnapLayers = this._findCorners(), this._fireEnable()
            }
        },
        disable() {
            this._dragging || (this._map || (this._map = this._layer._map), this.disableLayerDrag(), this._layer.off("remove", this.disable, this), this.enabled() || (this._layerEdited && this._fireUpdate(), this._layerEdited = !1, this._fireDisable()), this._enabled = !1)
        },
        _findCorners() {
            let t = this._layer.getBounds(),
                e = t.getNorthWest(),
                i = t.getNorthEast(),
                r = t.getSouthEast(),
                n = t.getSouthWest();
            return [e, i, r, n]
        }
    });
    H.Text = H.extend({
        _shape: "Text",
        initialize(t) {
            this._layer = t, this._enabled = !1
        },
        enable(t) {
            if (L.Util.setOptions(this, t), !!this.textArea) {
                if (!this.options.allowEditing || !this._layer._map) {
                    this.disable();
                    return
                }
                this._map = this._layer._map, this.enabled() && this.disable(), this.applyOptions(), this._safeToCacheDragState = !0, this._focusChange(), this.textArea.readOnly = !1, this.textArea.classList.remove("pm-disabled"), this._layer.on("remove", this.disable, this), L.DomEvent.on(this.textArea, "input", this._autoResize, this), L.DomEvent.on(this.textArea, "focus", this._focusChange, this), L.DomEvent.on(this.textArea, "blur", this._focusChange, this), this._layer.on("dblclick", L.DomEvent.stop), L.DomEvent.off(this.textArea, "mousedown", this._preventTextSelection), this._enabled = !0, this._fireEnable()
            }
        },
        disable() {
            if (!this.enabled()) return;
            this._layer.off("remove", this.disable, this), L.DomEvent.off(this.textArea, "input", this._autoResize, this), L.DomEvent.off(this.textArea, "focus", this._focusChange, this), L.DomEvent.off(this.textArea, "blur", this._focusChange, this), L.DomEvent.off(document, "click", this._documentClick, this), this._focusChange(), this.textArea.readOnly = !0, this.textArea.classList.add("pm-disabled");
            let t = document.activeElement;
            this.textArea.focus(), this.textArea.selectionStart = 0, this.textArea.selectionEnd = 0, L.DomEvent.on(this.textArea, "mousedown", this._preventTextSelection), t.focus(), this._disableOnBlurActive = !1, this._layerEdited && this._fireUpdate(), this._layerEdited = !1, this._fireDisable(), this._enabled = !1
        },
        enabled() {
            return this._enabled
        },
        toggleEdit(t) {
            this.enabled() ? this.disable() : this.enable(t)
        },
        applyOptions() {
            this.options.snappable ? this._initSnappableMarkers() : this._disableSnapping()
        },
        _initSnappableMarkers() {
            let t = this._layer;
            this.options.snapDistance = this.options.snapDistance || 30, this.options.snapSegment = this.options.snapSegment === void 0 ? !0 : this.options.snapSegment, t.off("pm:drag", this._handleSnapping, this), t.on("pm:drag", this._handleSnapping, this), t.off("pm:dragend", this._cleanupSnapping, this), t.on("pm:dragend", this._cleanupSnapping, this), t.off("pm:dragstart", this._unsnap, this), t.on("pm:dragstart", this._unsnap, this)
        },
        _disableSnapping() {
            let t = this._layer;
            t.off("pm:drag", this._handleSnapping, this), t.off("pm:dragend", this._cleanupSnapping, this), t.off("pm:dragstart", this._unsnap, this)
        },
        _autoResize() {
            this.textArea.style.height = "1px", this.textArea.style.width = "1px";
            let t = this.textArea.scrollHeight > 21 ? this.textArea.scrollHeight : 21,
                e = this.textArea.scrollWidth > 16 ? this.textArea.scrollWidth : 16;
            this.textArea.style.height = `${t}px`, this.textArea.style.width = `${e}px`, this._layer.options.text = this.getText(), this._fireTextChange(this.getText())
        },
        _disableOnBlur() {
            this._disableOnBlurActive = !0, setTimeout(() => {
                this.enabled() && L.DomEvent.on(document, "click", this._documentClick, this)
            }, 100)
        },
        _documentClick(t) {
            t.target !== this.textArea && (this.disable(), !this.getText() && this.options.removeIfEmpty && this.remove())
        },
        _focusChange(t = {}) {
            let e = this._hasFocus;
            this._hasFocus = t.type === "focus", !e != !this._hasFocus && (this._hasFocus ? (this._applyFocus(), this._focusText = this.getText(), this._fireTextFocus()) : (this._removeFocus(), this._fireTextBlur(), this._focusText !== this.getText() && (this._fireEdit(), this._layerEdited = !0)))
        },
        _applyFocus() {
            this.textArea.classList.add("pm-hasfocus"), this._map.dragging && (this._safeToCacheDragState && (this._originalMapDragState = this._map.dragging._enabled, this._safeToCacheDragState = !1), this._map.dragging.disable())
        },
        _removeFocus() {
            this._map.dragging && (this._originalMapDragState && this._map.dragging.enable(), this._safeToCacheDragState = !0), this.textArea.classList.remove("pm-hasfocus")
        },
        focus() {
            if (!this.enabled()) throw new TypeError("Layer is not enabled");
            this.textArea.focus()
        },
        blur() {
            if (!this.enabled()) throw new TypeError("Layer is not enabled");
            this.textArea.blur(), this._disableOnBlurActive && this.disable()
        },
        hasFocus() {
            return this._hasFocus
        },
        getElement() {
            return this.textArea
        },
        setText(t) {
            this.textArea.value = t, this._autoResize()
        },
        getText() {
            return this.textArea.value
        },
        _initTextMarker() {
            if (this.textArea = L.PM.Draw.Text.prototype._createTextArea.call(this), this.options.className) {
                let e = this.options.className.split(" ");
                this.textArea.classList.add(...e)
            }
            let t = L.PM.Draw.Text.prototype._createTextIcon.call(this, this.textArea);
            this._layer.setIcon(t), this._layer.once("add", this._createTextMarker, this)
        },
        _createTextMarker(t = !1) {
            this._layer.off("add", this._createTextMarker, this), this._layer.getElement().tabIndex = -1, this.textArea.wrap = "off", this.textArea.style.overflow = "hidden", this.textArea.style.height = L.DomUtil.getStyle(this.textArea, "font-size"), this.textArea.style.width = "1px", this._layer.options.text && this.setText(this._layer.options.text), this._autoResize(), t === !0 && (this.enable(), this.focus(), this._disableOnBlur())
        },
        _preventTextSelection(t) {
            t.preventDefault()
        }
    });
    var or = function(e, i, r, n, s, a) {
        this._matrix = [e, i, r, n, s, a]
    };
    or.init = () => new L.PM.Matrix(1, 0, 0, 1, 0, 0);
    or.prototype = {
        transform(t) {
            return this._transform(t.clone())
        },
        _transform(t) {
            let e = this._matrix,
                {
                    x: i,
                    y: r
                } = t;
            return t.x = e[0] * i + e[1] * r + e[4], t.y = e[2] * i + e[3] * r + e[5], t
        },
        untransform(t) {
            let e = this._matrix;
            return new L.Point((t.x / e[0] - e[4]) / e[0], (t.y / e[2] - e[5]) / e[2])
        },
        clone() {
            let t = this._matrix;
            return new L.PM.Matrix(t[0], t[1], t[2], t[3], t[4], t[5])
        },
        translate(t) {
            if (t === void 0) return new L.Point(this._matrix[4], this._matrix[5]);
            let e, i;
            return typeof t == "number" ? (e = t, i = t) : (e = t.x, i = t.y), this._add(1, 0, 0, 1, e, i)
        },
        scale(t, e) {
            if (t === void 0) return new L.Point(this._matrix[0], this._matrix[3]);
            let i, r;
            return e = e || L.point(0, 0), typeof t == "number" ? (i = t, r = t) : (i = t.x, r = t.y), this._add(i, 0, 0, r, e.x, e.y)._add(1, 0, 0, 1, -e.x, -e.y)
        },
        rotate(t, e) {
            let i = Math.cos(t),
                r = Math.sin(t);
            return e = e || new L.Point(0, 0), this._add(i, r, -r, i, e.x, e.y)._add(1, 0, 0, 1, -e.x, -e.y)
        },
        flip() {
            return this._matrix[1] *= -1, this._matrix[2] *= -1, this
        },
        _add(t, e, i, r, n, s) {
            let a = [
                    [],
                    [],
                    []
                ],
                o = this._matrix,
                l = [
                    [o[0], o[2], o[4]],
                    [o[1], o[3], o[5]],
                    [0, 0, 1]
                ],
                u = [
                    [t, i, n],
                    [e, r, s],
                    [0, 0, 1]
                ],
                f;
            t && t instanceof L.PM.Matrix && (o = t._matrix, u = [
                [o[0], o[2], o[4]],
                [o[1], o[3], o[5]],
                [0, 0, 1]
            ]);
            for (let d = 0; d < 3; d += 1)
                for (let P = 0; P < 3; P += 1) {
                    f = 0;
                    for (let E = 0; E < 3; E += 1) f += l[d][E] * u[E][P];
                    a[d][P] = f
                }
            return this._matrix = [a[0][0], a[1][0], a[0][1], a[1][1], a[0][2], a[1][2]], this
        }
    };
    var $l = or;
    var k_ = {
            calcMiddleLatLng(t, e, i) {
                let r = t.project(e),
                    n = t.project(i);
                return t.unproject(r._add(n)._divideBy(2))
            },
            findLayers(t) {
                let e = [];
                return t.eachLayer(i => {
                    (i instanceof L.Polyline || i instanceof L.Marker || i instanceof L.Circle || i instanceof L.CircleMarker || i instanceof L.ImageOverlay) && e.push(i)
                }), e = e.filter(i => !!i.pm), e = e.filter(i => !i._pmTempLayer), e = e.filter(i => !L.PM.optIn && !i.options.pmIgnore || L.PM.optIn && i.options.pmIgnore === !1), e
            },
            circleToPolygon(t, e = 60, i = !0) {
                let r = t.getLatLng(),
                    n = t.getRadius(),
                    s = Ci(r, n, e, 0, i),
                    a = [];
                for (let o = 0; o < s.length; o += 1) {
                    let l = [s[o].lat, s[o].lng];
                    a.push(l)
                }
                return L.polygon(a, t.options)
            },
            disablePopup(t) {
                t.getPopup() && (t._tempPopupCopy = t.getPopup(), t.unbindPopup())
            },
            enablePopup(t) {
                t._tempPopupCopy && (t.bindPopup(t._tempPopupCopy), delete t._tempPopupCopy)
            },
            _fireEvent(t, e, i, r = !1) {
                t.fire(e, i, r);
                let {
                    groups: n
                } = this.getAllParentGroups(t);
                n.forEach(s => {
                    s.fire(e, i, r)
                })
            },
            getAllParentGroups(t) {
                let e = [],
                    i = [],
                    r = n => {
                        for (let s in n._eventParents)
                            if (e.indexOf(s) === -1) {
                                e.push(s);
                                let a = n._eventParents[s];
                                i.push(a), r(a)
                            }
                    };
                return !t._pmLastGroupFetch || !t._pmLastGroupFetch.time || new Date().getTime() - t._pmLastGroupFetch.time > 1e3 ? (r(t), t._pmLastGroupFetch = {
                    time: new Date().getTime(),
                    groups: i,
                    groupIds: e
                }, {
                    groupIds: e,
                    groups: i
                }) : {
                    groups: t._pmLastGroupFetch.groups,
                    groupIds: t._pmLastGroupFetch.groupIds
                }
            },
            createGeodesicPolygon: Ci,
            getTranslation: V,
            findDeepCoordIndex(t, e, i = !0) {
                let r, n = a => (o, l) => {
                    let u = a.concat(l);
                    if (i) {
                        if (o.lat && o.lat === e.lat && o.lng === e.lng) return r = u, !0
                    } else if (o.lat && L.latLng(o).equals(e)) return r = u, !0;
                    return Array.isArray(o) && o.some(n(u))
                };
                t.some(n([]));
                let s = {};
                return r && (s = {
                    indexPath: r,
                    index: r[r.length - 1],
                    parentPath: r.slice(0, r.length - 1)
                }), s
            },
            findDeepMarkerIndex(t, e) {
                let i, r = s => (a, o) => {
                    let l = s.concat(o);
                    return a._leaflet_id === e._leaflet_id ? (i = l, !0) : Array.isArray(a) && a.some(r(l))
                };
                t.some(r([]));
                let n = {};
                return i && (n = {
                    indexPath: i,
                    index: i[i.length - 1],
                    parentPath: i.slice(0, i.length - 1)
                }), n
            },
            _getIndexFromSegment(t, e) {
                if (e && e.length === 2) {
                    let i = this.findDeepCoordIndex(t, e[0]),
                        r = this.findDeepCoordIndex(t, e[1]),
                        n = Math.max(i.index, r.index);
                    return (i.index === 0 || r.index === 0) && n !== 1 && (n += 1), {
                        indexA: i,
                        indexB: r,
                        newIndex: n,
                        indexPath: i.indexPath,
                        parentPath: i.parentPath
                    }
                }
                return null
            },
            _getRotatedRectangle(t, e, i, r) {
                let n = It(r, t),
                    s = It(r, e),
                    a = i * Math.PI / 180,
                    o = Math.cos(a),
                    l = Math.sin(a),
                    u = (s.x - n.x) * o + (s.y - n.y) * l,
                    f = (s.y - n.y) * o - (s.x - n.x) * l,
                    d = u * o + n.x,
                    P = u * l + n.y,
                    E = -f * l + n.x,
                    T = f * o + n.y,
                    G = Re(r, n),
                    _ = Re(r, {
                        x: d,
                        y: P
                    }),
                    x = Re(r, s),
                    b = Re(r, {
                        x: E,
                        y: T
                    });
                return [G, _, x, b]
            },
            pxRadiusToMeterRadius(t, e, i) {
                let r = e.project(i),
                    n = L.point(r.x + t, r.y);
                return e.distance(e.unproject(n), i)
            }
        },
        Zl = k_;
    L.PM = L.PM || {
        version: hr.version,
        Map: Ko,
        Toolbar: Xo,
        Draw: X,
        Edit: H,
        Utils: Zl,
        Matrix: $l,
        activeLang: "hu",
        optIn: !1,
        initialize(t) {
            this.addInitHooks(t)
        },
        setOptIn(t) {
            this.optIn = !!t
        },
        addInitHooks() {
            function t() {
                this.pm = void 0, L.PM.optIn ? this.options.pmIgnore === !1 && (this.pm = new L.PM.Map(this)) : this.options.pmIgnore || (this.pm = new L.PM.Map(this)), this.pm && this.pm.setGlobalOptions({})
            }
            L.Map.addInitHook(t);

            function e() {
                this.pm = void 0, L.PM.optIn ? this.options.pmIgnore === !1 && (this.pm = new L.PM.Edit.LayerGroup(this)) : this.options.pmIgnore || (this.pm = new L.PM.Edit.LayerGroup(this))
            }
            L.LayerGroup.addInitHook(e);

            function i() {
                this.pm = void 0, L.PM.optIn ? this.options.pmIgnore === !1 && (this.options.textMarker ? (this.pm = new L.PM.Edit.Text(this), this.options._textMarkerOverPM || this.pm._initTextMarker(), delete this.options._textMarkerOverPM) : this.pm = new L.PM.Edit.Marker(this)) : this.options.pmIgnore || (this.options.textMarker ? (this.pm = new L.PM.Edit.Text(this), this.options._textMarkerOverPM || this.pm._initTextMarker(), delete this.options._textMarkerOverPM) : this.pm = new L.PM.Edit.Marker(this))
            }
            L.Marker.addInitHook(i);

            function r() {
                this.pm = void 0, L.PM.optIn ? this.options.pmIgnore === !1 && (this.pm = new L.PM.Edit.CircleMarker(this)) : this.options.pmIgnore || (this.pm = new L.PM.Edit.CircleMarker(this))
            }
            L.CircleMarker.addInitHook(r);

            function n() {
                this.pm = void 0, L.PM.optIn ? this.options.pmIgnore === !1 && (this.pm = new L.PM.Edit.Line(this)) : this.options.pmIgnore || (this.pm = new L.PM.Edit.Line(this))
            }
            L.Polyline.addInitHook(n);

            function s() {
                this.pm = void 0, L.PM.optIn ? this.options.pmIgnore === !1 && (this.pm = new L.PM.Edit.Polygon(this)) : this.options.pmIgnore || (this.pm = new L.PM.Edit.Polygon(this))
            }
            L.Polygon.addInitHook(s);

            function a() {
                this.pm = void 0, L.PM.optIn ? this.options.pmIgnore === !1 && (this.pm = new L.PM.Edit.Rectangle(this)) : this.options.pmIgnore || (this.pm = new L.PM.Edit.Rectangle(this))
            }
            L.Rectangle.addInitHook(a);

            function o() {
                this.pm = void 0, L.PM.optIn ? this.options.pmIgnore === !1 && (this.pm = new L.PM.Edit.Circle(this)) : this.options.pmIgnore || (this.pm = new L.PM.Edit.Circle(this))
            }
            L.Circle.addInitHook(o);

            function l() {
                this.pm = void 0, L.PM.optIn ? this.options.pmIgnore === !1 && (this.pm = new L.PM.Edit.ImageOverlay(this)) : this.options.pmIgnore || (this.pm = new L.PM.Edit.ImageOverlay(this))
            }
            L.ImageOverlay.addInitHook(l)
        },
        reInitLayer(t) {
            t instanceof L.LayerGroup && t.eachLayer(e => {
                this.reInitLayer(e)
            }), t.pm || L.PM.optIn && t.options.pmIgnore !== !1 || t.options.pmIgnore || (t instanceof L.Map ? t.pm = new L.PM.Map(t) : t instanceof L.Marker ? t.options.textMarker ? (t.pm = new L.PM.Edit.Text(t), t.pm._initTextMarker(), t.pm._createTextMarker(!1)) : t.pm = new L.PM.Edit.Marker(t) : t instanceof L.Circle ? t.pm = new L.PM.Edit.Circle(t) : t instanceof L.CircleMarker ? t.pm = new L.PM.Edit.CircleMarker(t) : t instanceof L.Rectangle ? t.pm = new L.PM.Edit.Rectangle(t) : t instanceof L.Polygon ? t.pm = new L.PM.Edit.Polygon(t) : t instanceof L.Polyline ? t.pm = new L.PM.Edit.Line(t) : t instanceof L.LayerGroup ? t.pm = new L.PM.Edit.LayerGroup(t) : t instanceof L.ImageOverlay && (t.pm = new L.PM.Edit.ImageOverlay(t)))
        }
		
    };
    L.version === "1.7.1" && L.Canvas.include({
        _onClick(t) {
            let e = this._map.mouseEventToLayerPoint(t),
                i, r;
            for (let n = this._drawFirst; n; n = n.next) i = n.layer, i.options.interactive && i._containsPoint(e) && (!(t.type === "click" || t.type === "preclick") || !this._map._draggableMoved(i)) && (r = i);
            r && (L.DomEvent.fakeStop(t), this._fireEvent([r], t))
        }
    });
    L.PM.initialize();
})();
//# sourceMappingURL=leaflet-geoman.js.map