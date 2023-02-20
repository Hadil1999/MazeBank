(function() {
    var t, e, n, r, a, o, i, u, l, c, h, s, p, g, v, f, d, m, y, C, T, w = [].slice,
        D = [].indexOf || function(t) {
            for (var e = 0, n = this.length; n > e; e++)
                if (e in this && this[e] === t) return e;
            return -1
        };
    $.payment = {}, $.payment.fn = {}, $.fn.payment = function() {
        var t, e;
        return e = arguments[0], t = 2 <= arguments.length ? w.call(arguments, 1) : [], $.payment.fn[e].apply(this, t)
    }, r = /(\d{1,4})/g, $.payment.cards = n = [{
        type: "visaelectron",
        pattern: /^4(026|17500|405|508|844|91[37])/,
        format: r,
        length: [16],
        cvcLength: [3],
        luhn: !0
    }, {
        type: "maestro",
        pattern: /^(5(018|0[23]|[68])|6(39|7))/,
        format: r,
        length: [12, 13, 14, 15, 16, 17, 18, 19],
        cvcLength: [3],
        luhn: !0
    }, {
        type: "forbrugsforeningen",
        pattern: /^600/,
        format: r,
        length: [16],
        cvcLength: [3],
        luhn: !0
    }, {
        type: "dankort",
        pattern: /^5019/,
        format: r,
        length: [16],
        cvcLength: [3],
        luhn: !0
    }, {
        type: "visa",
        pattern: /^4/,
        format: r,
        length: [13, 16],
        cvcLength: [3],
        luhn: !0
    }, {
        type: "mastercard",
        pattern: /^5[0-5]/,
        format: r,
        length: [16],
        cvcLength: [3],
        luhn: !0
    }, {
        type: "amex",
        pattern: /^3[47]/,
        format: /(\d{1,4})(\d{1,6})?(\d{1,5})?/,
        length: [15],
        cvcLength: [3, 4],
        luhn: !0
    }, {
        type: "dinersclub",
        pattern: /^3[0689]/,
        format: /(\d{1,4})(\d{1,6})?(\d{1,4})?/,
        length: [14],
        cvcLength: [3],
        luhn: !0
    }, {
        type: "discover",
        pattern: /^6([045]|22)/,
        format: r,
        length: [16],
        cvcLength: [3],
        luhn: !0
    }, {
        type: "unionpay",
        pattern: /^(62|88)/,
        format: r,
        length: [16, 17, 18, 19],
        cvcLength: [3],
        luhn: !1
    }, {
        type: "jcb",
        pattern: /^35/,
        format: r,
        length: [16],
        cvcLength: [3],
        luhn: !0
    }], t = function(t) {
        var e, r, a;
        for (t = (t + "").replace(/\D/g, ""), r = 0, a = n.length; a > r; r++)
            if (e = n[r], e.pattern.test(t)) return e
    }, e = function(t) {
        var e, r, a;
        for (r = 0, a = n.length; a > r; r++)
            if (e = n[r], e.type === t) return e
    }, s = function(t) {
        var e, n, r, a, o, i;
        for (r = !0, a = 0, n = (t + "").split("").reverse(), o = 0, i = n.length; i > o; o++) e = n[o], e = parseInt(e, 10), (r = !r) && (e *= 2), e > 9 && (e -= 9), a += e;
        return a % 10 === 0
    }, h = function(t) {
        var e;
        return null != t.prop("selectionStart") && t.prop("selectionStart") !== t.prop("selectionEnd") ? !0 : null != ("undefined" != typeof document && null !== document && null != (e = document.selection) ? e.createRange : void 0) && document.selection.createRange().text ? !0 : !1
    }, f = function(t) {
        return setTimeout(function() {
            var e, n;
            return e = $(t.currentTarget), n = e.val(), n = n.replace(/\D/g, ""), e.val(n)
        })
    }, g = function(t) {
        return setTimeout(function() {
            var e, n;
            return e = $(t.currentTarget), n = e.val(), n = $.payment.formatCardNumber(n), e.val(n)
        })
    }, i = function(e) {
        var n, r, a, o, i, u, l;
        return a = String.fromCharCode(e.which), !/^\d+$/.test(a) || (n = $(e.currentTarget), l = n.val(), r = t(l + a), o = (l.replace(/\D/g, "") + a).length, u = 16, r && (u = r.length[r.length.length - 1]), o >= u || null != n.prop("selectionStart") && n.prop("selectionStart") !== l.length) ? void 0 : (i = r && "amex" === r.type ? /^(\d{4}|\d{4}\s\d{6})$/ : /(?:^|\s)(\d{4})$/, i.test(l) ? (e.preventDefault(), setTimeout(function() {
            return n.val(l + " " + a)
        })) : i.test(l + a) ? (e.preventDefault(), setTimeout(function() {
            return n.val(l + a + " ")
        })) : void 0)
    }, a = function(t) {
        var e, n;
        return e = $(t.currentTarget), n = e.val(), 8 !== t.which || null != e.prop("selectionStart") && e.prop("selectionStart") !== n.length ? void 0 : /\d\s$/.test(n) ? (t.preventDefault(), setTimeout(function() {
            return e.val(n.replace(/\d\s$/, ""))
        })) : /\s\d?$/.test(n) ? (t.preventDefault(), setTimeout(function() {
            return e.val(n.replace(/\d$/, ""))
        })) : void 0
    }, v = function(t) {
        return setTimeout(function() {
            var e, n;
            return e = $(t.currentTarget), n = e.val(), n = $.payment.formatExpiry(n), e.val(n)
        })
    }, u = function(t) {
        var e, n, r;
        return n = String.fromCharCode(t.which), /^\d+$/.test(n) ? (e = $(t.currentTarget), r = e.val() + n, /^\d$/.test(r) && "0" !== r && "1" !== r ? (t.preventDefault(), setTimeout(function() {
            return e.val("0" + r + " / ")
        })) : /^\d\d$/.test(r) ? (t.preventDefault(), setTimeout(function() {
            return e.val("" + r + " / ")
        })) : void 0) : void 0
    }, l = function(t) {
        var e, n, r;
        return n = String.fromCharCode(t.which), /^\d+$/.test(n) ? (e = $(t.currentTarget), r = e.val(), /^\d\d$/.test(r) ? e.val("" + r + " / ") : void 0) : void 0
    }, c = function(t) {
        var e, n, r;
        return r = String.fromCharCode(t.which), "/" === r || " " === r ? (e = $(t.currentTarget), n = e.val(), /^\d$/.test(n) && "0" !== n ? e.val("0" + n + " / ") : void 0) : void 0
    }, o = function(t) {
        var e, n;
        return e = $(t.currentTarget), n = e.val(), 8 !== t.which || null != e.prop("selectionStart") && e.prop("selectionStart") !== n.length ? void 0 : /\d\s\/\s$/.test(n) ? (t.preventDefault(), setTimeout(function() {
            return e.val(n.replace(/\d\s\/\s$/, ""))
        })) : void 0
    }, p = function(t) {
        return setTimeout(function() {
            var e, n;
            return e = $(t.currentTarget), n = e.val(), n = n.replace(/\D/g, "").slice(0, 4), e.val(n)
        })
    }, C = function(t) {
        var e;
        return t.metaKey || t.ctrlKey ? !0 : 32 === t.which ? !1 : 0 === t.which ? !0 : t.which < 33 ? !0 : (e = String.fromCharCode(t.which), !!/[\d\s]/.test(e))
    }, m = function(e) {
        var n, r, a, o;
        return n = $(e.currentTarget), a = String.fromCharCode(e.which), /^\d+$/.test(a) && !h(n) ? (o = (n.val() + a).replace(/\D/g, ""), r = t(o), r ? o.length <= r.length[r.length.length - 1] : o.length <= 16) : void 0
    }, y = function(t) {
        var e, n, r;
        return e = $(t.currentTarget), n = String.fromCharCode(t.which), /^\d+$/.test(n) && !h(e) ? (r = e.val() + n, r = r.replace(/\D/g, ""), r.length > 6 ? !1 : void 0) : void 0
    }, d = function(t) {
        var e, n, r;
        return e = $(t.currentTarget), n = String.fromCharCode(t.which), /^\d+$/.test(n) && !h(e) ? (r = e.val() + n, r.length <= 4) : void 0
    }, T = function(t) {
        var e, r, a, o, i;
        return e = $(t.currentTarget), i = e.val(), o = $.payment.cardType(i) || "unknown", e.hasClass(o) ? void 0 : (r = function() {
            var t, e, r;
            for (r = [], t = 0, e = n.length; e > t; t++) a = n[t], r.push(a.type);
            return r
        }(), e.removeClass("unknown"), e.removeClass(r.join(" ")), e.addClass(o), e.toggleClass("identified", "unknown" !== o), e.trigger("payment.cardType", o))
    }, $.payment.fn.formatCardCVC = function() {
        return this.on("keypress", C), this.on("keypress", d), this.on("paste", p), this.on("change", p), this.on("input", p), this
    }, $.payment.fn.formatCardExpiry = function() {
        return this.on("keypress", C), this.on("keypress", y), this.on("keypress", u), this.on("keypress", c), this.on("keypress", l), this.on("keydown", o), this.on("change", v), this.on("input", v), this
    }, $.payment.fn.formatCardNumber = function() {
        return this.on("keypress", C), this.on("keypress", m), this.on("keypress", i), this.on("keydown", a), this.on("keyup", T), this.on("paste", g), this.on("change", g), this.on("input", g), this.on("input", T), this
    }, $.payment.fn.restrictNumeric = function() {
        return this.on("keypress", C), this.on("paste", f), this.on("change", f), this.on("input", f), this
    }, $.payment.fn.cardExpiryVal = function() {
        return $.payment.cardExpiryVal($(this).val())
    }, $.payment.cardExpiryVal = function(t) {
        var e, n, r, a;
        return t = t.replace(/\s/g, ""), a = t.split("/", 2), e = a[0], r = a[1], 2 === (null != r ? r.length : void 0) && /^\d+$/.test(r) && (n = (new Date).getFullYear(), n = n.toString().slice(0, 2), r = n + r), e = parseInt(e, 10), r = parseInt(r, 10), {
            month: e,
            year: r
        }
    }, $.payment.validateCardNumber = function(e) {
        var n, r;
        return e = (e + "").replace(/\s+|-/g, ""), /^\d+$/.test(e) ? (n = t(e), n ? (r = e.length, D.call(n.length, r) >= 0 && (n.luhn === !1 || s(e))) : !1) : !1
    }, $.payment.validateCardExpiry = function(t, e) {
        var n, r, a;
        return "object" == typeof t && "month" in t && (a = t, t = a.month, e = a.year), t && e ? (t = $.trim(t), e = $.trim(e), /^\d+$/.test(t) && /^\d+$/.test(e) && t >= 1 && 12 >= t ? (2 === e.length && (e = 70 > e ? "20" + e : "19" + e), 4 !== e.length ? !1 : (r = new Date(e, t), n = new Date, r.setMonth(r.getMonth() - 1), r.setMonth(r.getMonth() + 1, 1), r > n)) : !1) : !1
    }, $.payment.validateCardCVC = function(t, n) {
        var r, a;
        return t = $.trim(t), /^\d+$/.test(t) ? (r = e(n), null != r ? (a = t.length, D.call(r.cvcLength, a) >= 0) : t.length >= 3 && t.length <= 4) : !1
    }, $.payment.cardType = function(e) {
        var n;
        return e ? (null != (n = t(e)) ? n.type : void 0) || null : null
    }, $.payment.formatCardNumber = function(e) {
        var n, r, a, o;
        return e = e.replace(/\D/g, ""), (n = t(e)) ? (a = n.length[n.length.length - 1], e = e.slice(0, a), n.format.global ? null != (o = e.match(n.format)) ? o.join(" ") : void 0 : (r = n.format.exec(e), null != r ? (r.shift(), r = $.grep(r, function(t) {
            return t
        }), r.join(" ")) : void 0)) : e
    }, $.payment.formatExpiry = function(t) {
        var e, n, r, a;
        return (n = t.match(/^\D*(\d{1,2})(\D+)?(\d{1,4})?/)) ? (e = n[1] || "", r = n[2] || "", a = n[3] || "", a.length > 0 ? r = " / " : " /" === r ? (e = e.substring(0, 1), r = "") : 2 === e.length || r.length > 0 ? r = " / " : 1 === e.length && "0" !== e && "1" !== e && (e = "0" + e, r = " / "), e + r + a) : ""
    }
}).call(this);