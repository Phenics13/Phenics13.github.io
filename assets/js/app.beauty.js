! function() {
    const e = document.querySelectorAll("._anim");
    if (e.length > 0) {
        function t() {
            for (let t = 0; t < e.length; t++) {
                const o = e[t],
                    c = o.offsetHeight,
                    l = n(o).top,
                    i = 4;
                itemPoint = window.innerHeight - c / i, c > window.innerHeight && (itemPoint = window.innerHeight - window.innerHeight / i), scrollY > l - itemPoint && scrollY < l + c && o.classList.add("_show")
            }
        }

        function n(e) {
            const t = e.getBoundingClientRect(),
                n = window.pageXOffset || document.documentElement.scrollLeft,
                o = window.pageYOffset || document.documentElement.scrollTop;
            return {
                top: t.top + o,
                left: t.left + n
            }
        }
        window.addEventListener("scroll", t), setTimeout((() => {
            t()
        }), 600)
    }
}(),
function() {
    const e = document.querySelector("main");
    setTimeout((function() {
        null != e && e.classList.add("_show")
    }), 200)
}(),
function() {
    const e = document.getElementById("mainButton");
    null != e && e.addEventListener("click", (function(e) {
        document.getElementById("mainSection").scrollIntoView({
            block: "start",
            behavior: "smooth"
        })
    }))
}(),
function() {
    const e = document.forms.main;

    function t(e, t, n) {
        t && !e.nextElementSibling && e.parentElement.insertAdjacentHTML("beforeend", `<div class="main-form__error">\n                Введите ${e.name}\n            </div>`), t && n.preventDefault()
    }
    null != e && (function() {
        for (let t = 0; t < e.length - 1; t++) {
            const n = e[t];
            n.addEventListener("focus", (function(e) {
                n.nextElementSibling && n.nextElementSibling.remove()
            }))
        }
    }(), e.addEventListener("submit", (function(n) {
        t(e[0], /[0-9]/.test(e[0].value) || 0 == e[0].value.length, n), t(e[1], !/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(e[1].value), n), t(e[2], !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(e[2].value), n);
        const o = {};
        for (let t of e) {
            let e = t.name;
            e && (o[e] = t.value)
        }
    })))
}(),
function() {
    const e = document.getElementsByTagName("img");
    for (let t in e) e[t].oncontextmenu = function() {
        return !1
    }
}(),
function() {
    const e = document.querySelector(".menu-burger"),
        t = document.querySelector(".cancel-button");
    null != e && e.addEventListener("click", (() => {
        document.querySelector(".header").classList.add("_active"), document.body.classList.add("_lock")
    })), null != t && t.addEventListener("click", (() => {
        document.querySelector(".header").classList.remove("_active"), document.body.classList.remove("_lock")
    }))
}(),
function() {
    let e = 0;
    const t = document.querySelectorAll(".gallery__pic");
    let n = document.getElementById("current-pic");
    if (document.getElementById("modal"), t.length > 0)
        for (let o = 0; o < t.length; o++) {
            const c = t.item(o);
            c.onclick = function(t) {
                const o = c.src;
                modal.classList.add("_display"), n.src = o, e = i(c)
            }
        }
    const o = document.getElementById("cancel-button");
    null != o && (o.addEventListener("click", (() => {
        modal.classList.remove("_display")
    })), document.addEventListener("keydown", (e => {
        "Escape" == e.code && o.click()
    })));
    const c = document.getElementById("left-button");
    null != c && (c.addEventListener("click", r), document.addEventListener("keydown", (e => {
        "ArrowLeft" == e.code && r()
    })));
    const l = document.getElementById("right-button");

    function i(e) {
        for (let n = 0; n < t.length; n++)
            if (e.src === t[n].src) return n
    }

    function d(e) {
        return t[e].src
    }

    function s() {
        e === t.length - 1 ? (e = 0, n.src = d(e)) : (e += 1, n.src = d(e))
    }

    function r() {
        0 === e ? (e = t.length - 1, n.src = d(e)) : (e -= 1, n.src = d(e))
    }
    null != l && (l.addEventListener("click", s), document.addEventListener("keydown", (e => {
        "ArrowRight" == e.code && s()
    })))
}(),
function() {
    const e = document.getElementById("top-button");
    null != e && window.innerWidth > 425 && (e.addEventListener("click", (() => {
        document.body.scrollIntoView({
            block: "start",
            behavior: "smooth"
        })
    })), window.addEventListener("scroll", (function() {
        0 === scrollY ? e.classList.remove("_display") : e.classList.add("_display")
    })))
}();