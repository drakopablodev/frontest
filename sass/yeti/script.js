document.addEventListener("DOMContentLoaded", (()=>{
    const e = document.getElementById("carousel-style-1");
    if (e) {
        new Glide(e,{
            direction: (()=>"rtl" == document.dir ? "rtl" : "ltr")(),
            type: "carousel",
            perView: 4,
            gap: 20,
            breakpoints: {
                640: {
                    perView: 1
                },
                768: {
                    perView: 2
                }
            }
        }).mount()
    }
    const t = document.getElementById("ckeditor");
    t && ClassicEditor.create(t);
    let o = null;
    if (o = document.getElementById("sortable-style-1"),
    o) {
        Sortable.create(o, {
            animation: 150
        })
    }
    if (o = document.getElementById("sortable-style-2"),
    o) {
        Sortable.create(o, {
            handle: ".handle",
            animation: 150
        })
    }
    if (o = document.getElementById("sortable-style-3"),
    o) {
        Sortable.create(o, {
            animation: 150
        })
    }
}
));
const on = (e,t,o,a)=>{
    const r = document.querySelectorAll(e);
    for (element of r)
        element.addEventListener(t, (e=>{
            e.target.closest(o) && a(e)
        }
        ))
}
  , animateCSS = (e,t,o="animate__")=>new Promise(((a,r)=>{
    const n = `${o}${t}`
      , i = e;
    i.classList.add(`${o}animated`, `${o}faster`, n);
    i.addEventListener("animationend", (e=>{
        e.stopPropagation(),
        i.classList.remove(`${o}animated`, `${o}faster`, n),
        a("Animation Ended.")
    }
    ), {
        once: !0
    })
}
))
  , openCollapse = (e,t)=>{
    setTimeout((()=>{
        e.style.height = e.scrollHeight + "px",
        e.style.opacity = 1
    }
    ), 200),
    e.addEventListener("transitionend", (()=>{
        e.classList.add("open"),
        e.style.removeProperty("height"),
        e.style.removeProperty("opacity"),
        "function" == typeof t && t()
    }
    ), {
        once: !0
    })
}
  , closeCollapse = (e,t)=>{
    e.style.overflowY = "hidden",
    e.style.height = e.scrollHeight + "px",
    setTimeout((()=>{
        e.style.height = 0,
        e.style.opacity = 0
    }
    ), 200),
    e.addEventListener("transitionend", (()=>{
        e.classList.remove("open"),
        e.style.removeProperty("overflow-y"),
        e.style.removeProperty("height"),
        e.style.removeProperty("opacity"),
        "function" == typeof t && t()
    }
    ), {
        once: !0
    })
}
  , alerts = ()=>{
    on(".alert", "click", '[data-dismiss="alert"]', (e=>{
        (e=>{
            e.style.overflowY = "hidden",
            e.style.height = e.offsetHeight + "px",
            animateCSS(e, "fadeOut").then((()=>{
                e.style.opacity = 0,
                e.style.height = 0,
                e.style.marginTop = 0,
                e.style.marginBottom = 0,
                e.style.paddingTop = 0,
                e.style.paddingBottom = 0,
                e.style.border = 0
            }
            )),
            e.addEventListener("transitionend", (()=>{
                e.parentNode && e.parentNode.removeChild(e)
            }
            ), {
                once: !0
            })
        }
        )(e.target.closest(".alert"))
    }
    ))
}
;
alerts();
const showBackdrop = e=>{
    if (document.querySelector(".backdrop"))
        return;
    document.body.classList.add("backdrop-show");
    const t = document.createElement("div");
    e ? t.setAttribute("class", "backdrop backdrop_workspace") : t.setAttribute("class", "backdrop"),
    document.body.appendChild(t),
    t.classList.add("active")
}
  , hideBackdrop = ()=>{
    backdropToRemove = document.querySelector(".backdrop"),
    backdropToRemove && (document.body.classList.remove("backdrop-show"),
    backdropToRemove.classList.remove("active"),
    document.body.removeChild(backdropToRemove))
}
  , cards = ()=>{
    on("body", "click", '[data-toggle="cardSelection"]', (e=>{
        (e=>{
            e.target.closest(".card").classList.toggle("card_selected")
        }
        )(e)
    }
    )),
    on("body", "click", '[data-toggle="rowSelection"]', (e=>{
        (e=>{
            e.target.closest("tr").classList.toggle("row_selected")
        }
        )(e)
    }
    ))
}
;
on("body", "click", '[data-toggle="cardSelection"]', (e=>{
    (e=>{
        e.target.closest(".card").classList.toggle("card_selected")
    }
    )(e)
}
)),
on("body", "click", '[data-toggle="rowSelection"]', (e=>{
    (e=>{
        e.target.closest("tr").classList.toggle("row_selected")
    }
    )(e)
}
));
const collapse = ()=>{
    const e = '[data-toggle="collapse"]';
    on("body", "click", e, (t=>{
        (t=>{
            t.classList.toggle("active"),
            document.querySelectorAll(t.dataset.target).forEach((e=>{
                e.classList.contains("open") ? closeCollapse(e) : openCollapse(e)
            }
            ));
            const o = t.closest(".accordion");
            o && (o.querySelectorAll(e).forEach((e=>{
                e !== t && e.classList.remove("active")
            }
            )),
            o.querySelectorAll(".collapse").forEach((e=>{
                e.classList.contains("open") && closeCollapse(e)
            }
            )))
        }
        )(t.target.closest(e))
    }
    ))
}
;
collapse();
const customizer = ()=>{
    const e = document.documentElement
      , t = document.getElementById("customizer")
      , o = document.querySelector(".menu-bar")
      , a = document.querySelector(".menu-items");
    if (!t)
        return;
    const r = [{
        id: "default",
        label: "Default"
    }, {
        id: "hidden",
        label: "Hidden"
    }, {
        id: "icon-only",
        label: "Icon Only"
    }, {
        id: "wide",
        label: "Wide"
    }];
    let n = "";
    r.forEach((e=>{
        n += `\n      <label class="custom-radio">\n        <input\n          type="radio"\n          name="menuType"\n          data-toggle="menu-type"\n          data-value=${e.id}\n        />\n        <span></span>\n        <span>${e.label}</span>\n      </label>`
    }
    ));
    document.getElementById("customizerMenuTypes").innerHTML = n;
    const i = [{
        id: "default",
        label: "Sky",
        color: "#0284C7"
    }, {
        id: "red",
        label: "Red",
        color: "#DC2626"
    }, {
        id: "orange",
        label: "Orange",
        color: "#EA580C"
    }, {
        id: "amber",
        label: "Amber",
        color: "#D97706"
    }, {
        id: "yellow",
        label: "Yellow",
        color: "#CA8A04"
    }, {
        id: "lime",
        label: "Lime",
        color: "#65A30D"
    }, {
        id: "green",
        label: "Green",
        color: "#65A30D"
    }, {
        id: "emerald",
        label: "Emerald",
        color: "#059669"
    }, {
        id: "teal",
        label: "Teal",
        color: "#0D9488"
    }, {
        id: "cyan",
        label: "Cyan",
        color: "#0891B2"
    }, {
        id: "blue",
        label: "Blue",
        color: "#2563EB"
    }, {
        id: "indigo",
        label: "Indigo",
        color: "#4F46E5"
    }, {
        id: "violet",
        label: "Violet",
        color: "#7C3AED"
    }, {
        id: "purple",
        label: "Purple",
        color: "#9333EA"
    }, {
        id: "fuchsia",
        label: "Fuchsia",
        color: "#C026D3"
    }, {
        id: "pink",
        label: "Pink",
        color: "#DB2777"
    }, {
        id: "rose",
        label: "Rose",
        color: "#E11D48"
    }];
    let d = "";
    i.forEach((e=>{
        d += `\n      <button data-toggle="theme" data-value=${e.id}>\n        <span class="color bg-[${e.color}]"></span>\n        <span>${e.label}</span>\n      </button>`
    }
    ));
    document.getElementById("customizerThemes").innerHTML = d;
    const l = [{
        id: "default",
        label: "Pure",
        color: "#4B5563"
    }, {
        id: "slate",
        label: "Slate",
        color: "#475569"
    }, {
        id: "zinc",
        label: "Zinc",
        color: "#52525B"
    }, {
        id: "neutral",
        label: "Neutral",
        color: "#525252"
    }, {
        id: "stone",
        label: "Stone",
        color: "#57534E"
    }];
    let s = "";
    l.forEach((e=>{
        s += `\n      <button data-toggle="gray" data-value=${e.id}>\n        <span class="color bg-[${e.color}]"></span>\n        <span>${e.label}</span>\n      </button>`
    }
    ));
    document.getElementById("customizerGrays").innerHTML = s;
    const c = [{
        id: "default",
        heading: "Nunito",
        headingLabel: "Nunito",
        body: "Nunito_Sans",
        bodyLabel: "Nunito Sans"
    }, {
        id: "montserrat",
        heading: "Montserrat",
        headingLabel: "Montserrat",
        body: "Montserrat",
        bodyLabel: "Montserrat"
    }, {
        id: "raleway",
        heading: "Raleway",
        headingLabel: "Raleway",
        body: "Raleway",
        bodyLabel: "Raleway"
    }, {
        id: "poppins",
        heading: "Poppins",
        headingLabel: "Poppins",
        body: "Poppins",
        bodyLabel: "Poppins"
    }, {
        id: "oswald",
        heading: "Oswald",
        headingLabel: "Oswald",
        body: "Oswald",
        bodyLabel: "Oswald"
    }, {
        id: "roboto-condensed-roboto",
        heading: "Roboto Condensed",
        headingLabel: "Roboto Condensed",
        body: "Roboto",
        bodyLabel: "Roboto"
    }, {
        id: "inter",
        heading: "Inter",
        headingLabel: "Inter",
        body: "Inter",
        bodyLabel: "Inter"
    }, {
        id: "yantramanav",
        heading: "Yantramanav",
        headingLabel: "Yantramanav",
        body: "Yantramanav",
        bodyLabel: "Yantramanav"
    }];
    let p = "";
    c.forEach((e=>{
        p += `\n      <button data-toggle="font" data-value=${e.id}>\n        <h5 class="font-['${e.heading}']">${e.headingLabel}</h5>\n        <p class="font-['${e.body}']">${e.bodyLabel}</p>\n      </button>`
    }
    ));
    document.getElementById("customizerFonts").innerHTML = p;
    const m = ()=>{
        const a = localStorage.getItem("scheme")
          , r = t.querySelector('[data-toggle="dark-mode"]');
        r.checked = !!a;
        const n = localStorage.getItem("dir");
        if (n) {
            document.dir = n;
            const e = t.querySelector('[data-toggle="rtl"]');
            e.checked = "rtl" === n
        }
        let i = localStorage.getItem("brandedMenu");
        const d = t.querySelector('[data-toggle="branded-menu"]');
        i && o ? (e.classList.add("menu_branded"),
        o.classList.add("menu_branded"),
        d.checked = !0) : d.checked = !1;
        let l = localStorage.getItem("menuType");
        l = l ? l.replace("menu-", "") : "default";
        t.querySelector("[data-value='" + l + "']").checked = !0;
        let s, c = localStorage.getItem("theme");
        c ? (e.classList.add("theme-" + c),
        s = t.querySelector("[data-toggle='theme'][data-value='" + c + "']")) : s = t.querySelector("[data-toggle='theme'][data-value='default']"),
        s && s.classList.add("active");
        let p, m = localStorage.getItem("gray");
        m ? (e.classList.add("gray-" + m),
        p = t.querySelector("[data-toggle='gray'][data-value='" + m + "']")) : p = t.querySelector("[data-toggle='gray'][data-value='default']"),
        p && p.classList.add("active");
        let g, u = localStorage.getItem("font");
        u ? (e.classList.add("font-" + u),
        g = t.querySelector("[data-toggle='font'][data-value='" + u + "']")) : g = t.querySelector("[data-toggle='font'][data-value='default']"),
        g && g.classList.add("active")
    }
      , g = e=>e[Math.floor(Math.random() * e.length)]
      , u = ()=>{
        document.getElementById("darkModeToggler").click()
    }
      , h = ()=>{
        e.classList.contains("menu_branded") ? (e.classList.remove("menu_branded"),
        o.classList.remove("menu_branded"),
        localStorage.removeItem("brandedMenu")) : (e.classList.add("menu_branded"),
        o.classList.add("menu_branded"),
        localStorage.setItem("brandedMenu", "menu_branded"))
    }
      , y = t=>{
        const a = o.querySelector(".menu-detail.open");
        switch (e.classList.remove("menu-icon-only"),
        o.classList.remove("menu-icon-only"),
        e.classList.remove("menu-wide"),
        o.classList.remove("menu-wide"),
        C(),
        e.classList.remove("menu-hidden"),
        o.classList.remove("menu-hidden"),
        t) {
        case "icon-only":
            e.classList.add("menu-icon-only"),
            o.classList.add("menu-icon-only"),
            localStorage.setItem("menuType", "menu-icon-only"),
            a && showBackdrop(!0);
            break;
        case "wide":
            e.classList.add("menu-wide"),
            o.classList.add("menu-wide"),
            localStorage.setItem("menuType", "menu-wide"),
            b(),
            a && hideBackdrop();
            break;
        case "hidden":
            e.classList.add("menu-hidden"),
            o.classList.add("menu-hidden"),
            localStorage.setItem("menuType", "menu-hidden"),
            v();
            break;
        default:
            localStorage.removeItem("menuType"),
            a && showBackdrop(!0)
        }
    }
      , b = ()=>{
        o.querySelector(".menu-header").classList.remove("hidden"),
        o.querySelectorAll(".menu-items .link").forEach((e=>{
            const t = e.dataset.target
              , a = o.querySelector(".menu-detail" + t);
            a && (a.classList.add("collapse"),
            e.setAttribute("data-toggle", "collapse"),
            e.after(a))
        }
        ))
    }
      , C = ()=>{
        e.classList.remove("menu-wide"),
        o.classList.remove("menu-wide"),
        o.querySelector(".menu-header").classList.add("hidden"),
        o.querySelectorAll(".menu-items .link").forEach((e=>{
            const t = e.dataset.target
              , r = o.querySelector(".menu-detail" + t);
            r && (r.classList.remove("collapse"),
            e.removeAttribute("data-toggle", "collapse"),
            a.after(r))
        }
        ))
    }
      , v = ()=>{
        o.querySelectorAll(".menu-detail.open").forEach((e=>{
            hideBackdrop(),
            o.classList.contains("menu-wide") || e.classList.remove("open")
        }
        ))
    }
      , w = o=>{
        t.querySelectorAll("[data-toggle='theme']").forEach((e=>{
            e.classList.remove("active")
        }
        ));
        t.querySelector("[data-toggle='theme'][data-value='" + o + "']").classList.add("active"),
        e.classList.forEach((t=>{
            t.startsWith("theme-") && e.classList.remove(t)
        }
        )),
        "default" == o ? localStorage.removeItem("theme") : (e.classList.add("theme-" + o),
        localStorage.setItem("theme", o));
        const a = new Event("ThemeChanged");
        document.dispatchEvent(a)
    }
      , S = o=>{
        t.querySelectorAll("[data-toggle='gray']").forEach((e=>{
            e.classList.remove("active")
        }
        ));
        t.querySelector("[data-toggle='gray'][data-value='" + o + "']").classList.add("active"),
        e.classList.forEach((t=>{
            t.startsWith("gray-") && e.classList.remove(t)
        }
        )),
        "default" == o ? localStorage.removeItem("gray") : (e.classList.add("gray-" + o),
        localStorage.setItem("gray", o));
        const a = new Event("ThemeChanged");
        document.dispatchEvent(a)
    }
      , L = o=>{
        t.querySelectorAll("[data-toggle='font']").forEach((e=>{
            e.classList.remove("active")
        }
        ));
        t.querySelector("[data-toggle='font'][data-value='" + o + "']").classList.add("active"),
        e.classList.forEach((t=>{
            t.startsWith("font-") && e.classList.remove(t)
        }
        )),
        "default" == o ? localStorage.removeItem("font") : (e.classList.add("font-" + o),
        localStorage.setItem("font", o));
        const a = new Event("ThemeChanged");
        document.dispatchEvent(a),
        location.reload()
    }
    ;
    on("#customizer", "click", '[data-toggle="customizer"]', (()=>{
        t.classList.contains("open") ? t.classList.remove("open") : (m(),
        t.classList.add("open"))
    }
    )),
    on("#customizer", "click", '[data-toggle="randomizer"]', (()=>{
        (()=>{
            const e = Math.random() < .25;
            e && u(),
            e && h(),
            e && y(g(r).id),
            w(g(i).id),
            S(g(l).id),
            L(g(c).id)
        }
        )()
    }
    )),
    on("#customizer", "click", '[data-toggle="dark-mode"]', (()=>{
        u()
    }
    )),
    on("#customizer", "click", '[data-toggle="rtl"]', (()=>{
        "ltr" === document.dir ? (document.dir = "rtl",
        localStorage.setItem("dir", "rtl")) : (document.dir = "ltr",
        localStorage.setItem("dir", "ltr"))
    }
    )),
    on("#customizer", "click", '[data-toggle="branded-menu"]', (()=>{
        h()
    }
    )),
    on("#customizer", "click", "[data-toggle='menu-type']", (e=>{
        const t = e.target.closest("[data-toggle='menu-type']").dataset.value;
        y(t)
    }
    )),
    on("#customizer", "click", '[data-toggle="theme"]', (e=>{
        const t = e.target.closest("[data-toggle='theme']").dataset.value;
        w(t)
    }
    )),
    on("#customizer", "click", '[data-toggle="gray"]', (e=>{
        const t = e.target.closest("[data-toggle='gray']").dataset.value;
        S(t)
    }
    )),
    on("#customizer", "click", '[data-toggle="font"]', (e=>{
        const t = e.target.closest("[data-toggle='font']").dataset.value;
        L(t)
    }
    )),
    m()
}
;
customizer();
const darkMode = ()=>{
    const e = document.documentElement
      , t = document.getElementById("darkModeToggler");
    if (!t)
        return;
    const o = localStorage.getItem("scheme");
    o && e.classList.add(o),
    "dark" === o && t && (t.checked = "checked");
    on("body", "change", "#darkModeToggler", (()=>{
        e.classList.contains("dark") ? (e.classList.remove("dark"),
        e.classList.add("light"),
        localStorage.removeItem("scheme")) : (e.classList.remove("light"),
        e.classList.add("dark"),
        localStorage.setItem("scheme", "dark"))
    }
    ))
}
;
if (darkMode(),
"undefined" != typeof Chart) {
    let e = {}
      , t = {};
    const o = getComputedStyle(document.body);
    e.primary = o.getPropertyValue("--color-primary"),
    e.text = o.getPropertyValue("--color-text-normal"),
    t.body = o.getPropertyValue("--font-body"),
    document.addEventListener("ThemeChanged", (()=>{
        e.primary = o.getPropertyValue("--color-primary")
    }
    ));
    const a = {
        backgroundColor: "white",
        borderColor: "rgb(" + e.primary + ")",
        borderWidth: .5,
        bodyColor: "rgb(" + e.text + ")",
        bodySpacing: 8,
        cornerRadius: 4,
        padding: 16,
        titleColor: "rgb(" + e.primary + ")"
    };
    Chart.defaults.color = "rgb(" + e.text + ")",
    Chart.defaults.font.family = t.body;
    class r extends Chart.elements.LineElement {
        draw(e) {
            const t = e.stroke;
            e.stroke = function() {
                e.save(),
                e.shadowColor = "rgba(0, 0, 0, 0.25)",
                e.shadowBlur = 8,
                e.shadowOffsetX = 0,
                e.shadowOffsetY = 4,
                t.apply(this, arguments),
                e.restore()
            }
            ,
            Chart.elements.LineElement.prototype.draw.apply(this, arguments)
        }
    }
    r.id = "lineWithShadowElement",
    Chart.register(r);
    class n extends Chart.controllers.line {
    }
    n.id = "lineWithShadow",
    n.defaults = {
        datasetElementType: "lineWithShadowElement"
    },
    Chart.register(n);
    class i extends Chart.controllers.bar {
        draw(e) {
            const t = this.chart.ctx
              , o = t.stroke;
            t.stroke = function() {
                t.save(),
                t.shadowColor = "rgba(0, 0, 0, 0.25)",
                t.shadowBlur = 8,
                t.shadowOffsetX = 0,
                t.shadowOffsetY = 4,
                o.apply(this, arguments),
                t.restore()
            }
            ,
            Chart.controllers.bar.prototype.draw.call(this, e),
            t.save(),
            t.shadowColor = "rgba(0, 0, 0, 0.25)",
            t.shadowBlur = 8,
            t.shadowOffsetX = 0,
            t.shadowOffsetY = 4,
            Chart.controllers.bar.prototype.draw.apply(this, arguments),
            t.restore()
        }
    }
    i.id = "barWithShadow",
    Chart.register(i);
    class d extends Chart.controllers.pie {
    }
    d.id = "pieWithShadow",
    d.defaults = {
        datasetElementType: "lineWithShadowElement"
    },
    Chart.register(d);
    class l extends Chart.controllers.doughnut {
    }
    l.id = "doughnutWithShadow",
    l.defaults = {
        datasetElementType: "lineWithShadowElement"
    },
    Chart.register(l);
    class s extends Chart.controllers.radar {
    }
    s.id = "radarWithShadow",
    s.defaults = {
        datasetElementType: "lineWithShadowElement"
    },
    Chart.register(s);
    class c extends Chart.controllers.polarArea {
    }
    c.id = "polarAreaWithShadow",
    c.defaults = {
        datasetElementType: "lineWithShadowElement"
    },
    Chart.register(c);
    class p extends Chart.controllers.line {
        draw(e) {
            const t = this.chart.ctx;
            if (Chart.controllers.line.prototype.draw.call(this, e),
            this.chart.tooltip._active && this.chart.tooltip._active.length) {
                const e = this.chart.tooltip._active[0].element.x
                  , o = this.chart.scales.y.top
                  , a = this.chart.scales.y.bottom;
                t.save(),
                t.beginPath(),
                t.moveTo(e, o),
                t.lineTo(e, a),
                t.lineWidth = 1,
                t.stroke(),
                t.restore()
            }
        }
    }
    p.id = "lineWithAnnotation",
    Chart.register(p);
    class m extends Chart.controllers.line {
        draw(e) {
            const t = this.chart.ctx;
            if (Chart.controllers.line.prototype.draw.call(this, e),
            this.chart.tooltip._active && this.chart.tooltip._active.length) {
                const e = this.chart.tooltip._active[0].element.x
                  , o = this.chart.scales.y.top
                  , a = this.chart.scales.y.bottom;
                t.save(),
                t.beginPath(),
                t.moveTo(e, o),
                t.lineTo(e, a),
                t.lineWidth = 1,
                t.stroke(),
                t.restore()
            }
        }
    }
    m.id = "lineWithAnnotationAndShadow",
    m.defaults = {
        datasetElementType: "lineWithShadowElement"
    },
    Chart.register(m);
    let g = "";
    if (g = document.getElementById("visitorsChart"),
    g) {
        g = g.getContext("2d");
        let t = g.createLinearGradient(0, 0, 0, 450);
        t.addColorStop(0, "rgb(" + e.primary + "/ .5)"),
        t.addColorStop(.75, "rgb(" + e.primary + "/ 0)");
        var visitorsChart = new Chart(g,{
            type: "lineWithShadow",
            data: {
                labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                datasets: [{
                    data: [6.25, 7.5, 10, 7.5, 10, 12.5, 10, 12.5, 10, 12.5, 15, 16.25],
                    backgroundColor: "rgb(" + e.primary + "/ .1)",
                    borderColor: "rgb(" + e.primary + ")",
                    borderWidth: 2,
                    fill: !0,
                    pointBackgroundColor: "white",
                    pointBorderColor: "rgb(" + e.primary + ")",
                    pointBorderWidth: 2,
                    pointRadius: 4,
                    pointHoverBackgroundColor: "rgb(" + e.primary + ")",
                    pointHoverBorderColor: "white",
                    pointHoverBorderWidth: 2,
                    pointHoverRadius: 6,
                    tension: .5
                }]
            },
            options: {
                plugins: {
                    legend: {
                        display: !1
                    },
                    tooltip: a
                },
                scales: {
                    y: {
                        grid: {
                            display: !0,
                            drawBorder: !1
                        },
                        min: 0,
                        max: 20,
                        ticks: {
                            stepSize: 5
                        }
                    },
                    x: {
                        grid: {
                            display: !1
                        }
                    }
                }
            }
        })
    }
    if (document.addEventListener("ThemeChanged", (()=>{
        if (visitorsChart) {
            const t = visitorsChart.data.datasets[0];
            t.backgroundColor = "rgb(" + e.primary + "/ .1)",
            t.borderColor = "rgb(" + e.primary + ")",
            t.pointBorderColor = "rgb(" + e.primary + ")",
            t.pointHoverBackgroundColor = "rgb(" + e.primary + ")",
            visitorsChart.options.plugins.tooltip.borderColor = "rgb(" + e.primary + ")",
            visitorsChart.options.plugins.tooltip.titleColor = "rgb(" + e.primary + ")",
            visitorsChart.update()
        }
    }
    )),
    g = document.getElementById("categoriesChart"),
    g) {
        g.getContext("2d");
        var categoriesChart = new Chart(g,{
            type: "polarAreaWithShadow",
            data: {
                labels: ["Potatoes", "Tomatoes", "Onions"],
                datasets: [{
                    data: [25, 10, 15],
                    backgroundColor: ["rgb(" + e.primary + "/ .1)", "rgb(" + e.primary + "/ .5)", "rgb(" + e.primary + "/ .25)"],
                    borderColor: "rgb(" + e.primary + ")",
                    borderWidth: 2
                }]
            },
            options: {
                maintainAspectRatio: !1,
                plugins: {
                    legend: {
                        position: "bottom",
                        labels: {
                            usePointStyle: !0,
                            padding: 20
                        }
                    },
                    tooltip: a
                },
                scales: {
                    r: {
                        ticks: {
                            display: !1
                        }
                    }
                },
                layout: {
                    padding: 5
                }
            }
        })
    }
    document.addEventListener("ThemeChanged", (()=>{
        if (categoriesChart) {
            const t = categoriesChart.data.datasets[0];
            t.backgroundColor = ["rgb(" + e.primary + "/ .1)", "rgb(" + e.primary + "/ .5)", "rgb(" + e.primary + "/ .25)"],
            t.borderColor = "rgb(" + e.primary + ")",
            categoriesChart.options.plugins.tooltip.borderColor = "rgb(" + e.primary + ")",
            categoriesChart.options.plugins.tooltip.titleColor = "rgb(" + e.primary + ")",
            categoriesChart.update()
        }
    }
    )),
    g = document.getElementById("areaChart"),
    g && (g.getContext("2d"),
    new Chart(g,{
        type: "line",
        data: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [{
                data: [5, 10, 15, 10, 15, 10],
                backgroundColor: "rgb(" + e.primary + "/ .1)",
                borderColor: "rgb(" + e.primary + ")",
                borderWidth: 2,
                fill: !0,
                pointBackgroundColor: "white",
                pointBorderColor: "rgb(" + e.primary + ")",
                pointBorderWidth: 2,
                pointRadius: 4,
                pointHoverBackgroundColor: "rgb(" + e.primary + ")",
                pointHoverBorderColor: "white",
                pointHoverBorderWidth: 2,
                pointHoverRadius: 6,
                tension: .5
            }]
        },
        options: {
            plugins: {
                legend: {
                    display: !1
                },
                tooltip: a
            },
            scales: {
                y: {
                    grid: {
                        display: !0,
                        drawBorder: !1
                    },
                    min: 0,
                    max: 20,
                    ticks: {
                        stepSize: 5
                    }
                },
                x: {
                    grid: {
                        display: !1
                    }
                }
            }
        }
    })),
    g = document.getElementById("areaChartWithShadow"),
    g && (g.getContext("2d"),
    new Chart(g,{
        type: "lineWithShadow",
        data: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [{
                data: [5, 10, 15, 10, 15, 10],
                backgroundColor: "rgb(" + e.primary + "/ .1)",
                borderColor: "rgb(" + e.primary + ")",
                borderWidth: 2,
                fill: !0,
                pointBackgroundColor: "white",
                pointBorderColor: "rgb(" + e.primary + ")",
                pointBorderWidth: 2,
                pointRadius: 4,
                pointHoverBackgroundColor: "rgb(" + e.primary + ")",
                pointHoverBorderColor: "white",
                pointHoverBorderWidth: 2,
                pointHoverRadius: 6,
                tension: .5
            }]
        },
        options: {
            plugins: {
                legend: {
                    display: !1
                },
                tooltip: a
            },
            scales: {
                y: {
                    grid: {
                        display: !0,
                        drawBorder: !1
                    },
                    min: 0,
                    max: 20,
                    ticks: {
                        stepSize: 5
                    }
                },
                x: {
                    grid: {
                        display: !1
                    }
                }
            }
        }
    })),
    g = document.getElementById("barChart"),
    g && (g.getContext("2d"),
    new Chart(g,{
        type: "bar",
        data: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [{
                label: "Potatoes",
                data: [5, 10, 15, 10, 15, 10],
                backgroundColor: "rgb(" + e.primary + "/ .1)",
                borderColor: "rgb(" + e.primary + ")",
                borderWidth: 2
            }, {
                label: "Tomatoes",
                data: [7.5, 10, 17.5, 15, 12.5, 5],
                backgroundColor: "rgb(" + e.primary + "/ .5)",
                borderColor: "rgb(" + e.primary + ")",
                borderWidth: 2
            }]
        },
        options: {
            plugins: {
                legend: {
                    position: "bottom",
                    labels: {
                        usePointStyle: !0,
                        padding: 20
                    }
                },
                tooltip: a
            },
            scales: {
                y: {
                    grid: {
                        display: !0,
                        drawBorder: !1
                    },
                    min: 0,
                    max: 20,
                    ticks: {
                        stepSize: 5
                    }
                },
                x: {
                    grid: {
                        display: !1
                    }
                }
            }
        }
    })),
    g = document.getElementById("barChartWithShadow"),
    g && (g.getContext("2d"),
    new Chart(g,{
        type: "barWithShadow",
        data: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [{
                label: "Potatoes",
                data: [5, 10, 15, 10, 15, 10],
                backgroundColor: "rgb(" + e.primary + "/ .1)",
                borderColor: "rgb(" + e.primary + ")",
                borderWidth: 2
            }, {
                label: "Tomatoes",
                data: [7.5, 10, 17.5, 15, 12.5, 5],
                backgroundColor: "rgb(" + e.primary + "/ .5)",
                borderColor: "rgb(" + e.primary + ")",
                borderWidth: 2
            }]
        },
        options: {
            plugins: {
                legend: {
                    position: "bottom",
                    labels: {
                        usePointStyle: !0,
                        padding: 20
                    }
                },
                tooltip: a
            },
            scales: {
                y: {
                    grid: {
                        display: !0,
                        drawBorder: !1
                    },
                    min: 0,
                    max: 20,
                    ticks: {
                        stepSize: 5
                    }
                },
                x: {
                    grid: {
                        display: !1
                    }
                }
            }
        }
    })),
    g = document.getElementById("lineChart"),
    g && (g.getContext("2d"),
    new Chart(g,{
        type: "line",
        data: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [{
                data: [5, 10, 15, 10, 15, 10],
                borderColor: "rgb(" + e.primary + ")",
                borderWidth: 2,
                pointBackgroundColor: "white",
                pointBorderColor: "rgb(" + e.primary + ")",
                pointBorderWidth: 2,
                pointRadius: 6,
                pointHoverBackgroundColor: "rgb(" + e.primary + ")",
                pointHoverBorderColor: "white",
                pointHoverRadius: 8,
                pointHoverBorderWidth: 2,
                tension: .5
            }]
        },
        options: {
            plugins: {
                legend: {
                    display: !1
                },
                tooltip: a
            },
            scales: {
                y: {
                    grid: {
                        display: !0,
                        drawBorder: !1
                    },
                    min: 0,
                    max: 20,
                    ticks: {
                        stepSize: 5
                    }
                },
                x: {
                    grid: {
                        display: !1
                    }
                }
            }
        }
    })),
    g = document.getElementById("lineChartWithShadow"),
    g && (g.getContext("2d"),
    new Chart(g,{
        type: "lineWithShadow",
        data: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [{
                data: [5, 10, 15, 10, 15, 10],
                borderColor: "rgb(" + e.primary + ")",
                borderWidth: 2,
                pointBackgroundColor: "white",
                pointBorderColor: "rgb(" + e.primary + ")",
                pointBorderWidth: 2,
                pointRadius: 6,
                pointHoverBackgroundColor: "rgb(" + e.primary + ")",
                pointHoverBorderColor: "white",
                pointHoverRadius: 8,
                pointHoverBorderWidth: 2,
                tension: .5
            }]
        },
        options: {
            plugins: {
                legend: {
                    display: !1
                },
                tooltip: a
            },
            scales: {
                y: {
                    grid: {
                        display: !0,
                        drawBorder: !1
                    },
                    min: 0,
                    max: 20,
                    ticks: {
                        stepSize: 5
                    }
                },
                x: {
                    grid: {
                        display: !1
                    }
                }
            }
        }
    })),
    g = document.getElementById("pieChart"),
    g && (g.getContext("2d"),
    new Chart(g,{
        type: "pie",
        data: {
            labels: ["Potatoes", "Tomatoes", "Onions"],
            datasets: [{
                data: [25, 10, 15],
                backgroundColor: ["rgb(" + e.primary + "/ .1)", "rgb(" + e.primary + "/ .5)", "rgb(" + e.primary + "/ .25)"],
                borderColor: "rgb(" + e.primary + ")",
                borderWidth: 2
            }]
        },
        options: {
            maintainAspectRatio: !1,
            plugins: {
                legend: {
                    position: "bottom",
                    labels: {
                        usePointStyle: !0,
                        padding: 20
                    }
                },
                tooltip: a
            }
        }
    })),
    g = document.getElementById("pieChartWithShadow"),
    g && (g.getContext("2d"),
    new Chart(g,{
        type: "pieWithShadow",
        data: {
            labels: ["Potatoes", "Tomatoes", "Onions"],
            datasets: [{
                data: [25, 10, 15],
                backgroundColor: ["rgb(" + e.primary + "/ .1)", "rgb(" + e.primary + "/ .5)", "rgb(" + e.primary + "/ .25)"],
                borderColor: "rgb(" + e.primary + ")",
                borderWidth: 2
            }]
        },
        options: {
            maintainAspectRatio: !1,
            plugins: {
                legend: {
                    position: "bottom",
                    labels: {
                        usePointStyle: !0,
                        padding: 20
                    }
                },
                tooltip: a
            }
        }
    })),
    g = document.getElementById("doughnutChart"),
    g && (g.getContext("2d"),
    new Chart(g,{
        type: "doughnut",
        data: {
            labels: ["Potatoes", "Tomatoes", "Onions"],
            datasets: [{
                data: [25, 10, 15],
                backgroundColor: ["rgb(" + e.primary + "/ .1)", "rgb(" + e.primary + "/ .5)", "rgb(" + e.primary + "/ .25)"],
                borderColor: "rgb(" + e.primary + ")",
                borderWidth: 2
            }]
        },
        options: {
            maintainAspectRatio: !1,
            cutout: "75%",
            plugins: {
                legend: {
                    position: "bottom",
                    labels: {
                        usePointStyle: !0,
                        padding: 20
                    }
                },
                tooltip: a
            }
        }
    })),
    g = document.getElementById("doughnutChartWithShadow"),
    g && (g.getContext("2d"),
    new Chart(g,{
        type: "doughnutWithShadow",
        data: {
            labels: ["Potatoes", "Tomatoes", "Onions"],
            datasets: [{
                data: [25, 10, 15],
                backgroundColor: ["rgb(" + e.primary + "/ .1)", "rgb(" + e.primary + "/ .5)", "rgb(" + e.primary + "/ .25)"],
                borderColor: "rgb(" + e.primary + ")",
                borderWidth: 2
            }]
        },
        options: {
            maintainAspectRatio: !1,
            cutout: "75%",
            plugins: {
                legend: {
                    position: "bottom",
                    labels: {
                        usePointStyle: !0,
                        padding: 20
                    }
                },
                tooltip: a
            }
        }
    })),
    g = document.getElementById("radarChart"),
    g && (g.getContext("2d"),
    new Chart(g,{
        type: "radar",
        data: {
            labels: ["Drinks", "Snacks", "Lunch", "Dinner"],
            datasets: [{
                label: "Potatoes",
                data: [25, 25, 25, 25],
                backgroundColor: "rgb(" + e.primary + "/ .1)",
                borderColor: "rgb(" + e.primary + ")",
                borderWidth: 2,
                fill: !0,
                pointBackgroundColor: "white",
                pointBorderColor: "rgb(" + e.primary + ")",
                pointBorderWidth: 2,
                pointRadius: 4,
                pointHoverBackgroundColor: "rgb(" + e.primary + ")",
                pointHoverBorderColor: "white",
                pointHoverBorderWidth: 2,
                pointHoverRadius: 6
            }, {
                label: "Tomatoes",
                data: [15, 15, 0, 15],
                backgroundColor: "rgb(" + e.primary + "/ .25",
                borderColor: "rgb(" + e.primary + ")",
                borderWidth: 2,
                fill: !0,
                pointBackgroundColor: "white",
                pointBorderColor: "rgb(" + e.primary + ")",
                pointBorderWidth: 2,
                pointRadius: 4,
                pointHoverBackgroundColor: "rgb(" + e.primary + ")",
                pointHoverBorderColor: "white",
                pointHoverBorderWidth: 2,
                pointHoverRadius: 6
            }]
        },
        options: {
            maintainAspectRatio: !1,
            plugins: {
                legend: {
                    position: "bottom",
                    labels: {
                        usePointStyle: !0,
                        padding: 20
                    }
                },
                tooltip: a
            },
            scales: {
                r: {
                    max: 30,
                    ticks: {
                        display: !1
                    }
                }
            }
        }
    })),
    g = document.getElementById("radarChartWithShadow"),
    g && (g.getContext("2d"),
    new Chart(g,{
        type: "radarWithShadow",
        data: {
            labels: ["Drinks", "Snacks", "Lunch", "Dinner"],
            datasets: [{
                label: "Potatoes",
                data: [25, 25, 25, 25],
                backgroundColor: "rgb(" + e.primary + "/ .1)",
                borderColor: "rgb(" + e.primary + ")",
                borderWidth: 2,
                fill: !0,
                pointBackgroundColor: "white",
                pointBorderColor: "rgb(" + e.primary + ")",
                pointBorderWidth: 2,
                pointRadius: 4,
                pointHoverBackgroundColor: "rgb(" + e.primary + ")",
                pointHoverBorderColor: "white",
                pointHoverBorderWidth: 2,
                pointHoverRadius: 6
            }, {
                label: "Tomatoes",
                data: [15, 15, 0, 15],
                backgroundColor: "rgb(" + e.primary + "/ .25",
                borderColor: "rgb(" + e.primary + ")",
                borderWidth: 2,
                fill: !0,
                pointBackgroundColor: "white",
                pointBorderColor: "rgb(" + e.primary + ")",
                pointBorderWidth: 2,
                pointRadius: 4,
                pointHoverBackgroundColor: "rgb(" + e.primary + ")",
                pointHoverBorderColor: "white",
                pointHoverBorderWidth: 2,
                pointHoverRadius: 6
            }]
        },
        options: {
            maintainAspectRatio: !1,
            plugins: {
                legend: {
                    position: "bottom",
                    labels: {
                        usePointStyle: !0,
                        padding: 20
                    }
                },
                tooltip: a
            },
            scales: {
                r: {
                    max: 30,
                    ticks: {
                        display: !1
                    }
                }
            }
        }
    })),
    g = document.getElementById("polarChart"),
    g && (g.getContext("2d"),
    new Chart(g,{
        type: "polarArea",
        data: {
            labels: ["Potatoes", "Tomatoes", "Onions"],
            datasets: [{
                data: [25, 10, 15],
                backgroundColor: ["rgb(" + e.primary + "/ .1)", "rgb(" + e.primary + "/ .5)", "rgb(" + e.primary + "/ .25)"],
                borderColor: "rgb(" + e.primary + ")",
                borderWidth: 2
            }]
        },
        options: {
            maintainAspectRatio: !1,
            plugins: {
                legend: {
                    position: "bottom",
                    labels: {
                        usePointStyle: !0,
                        padding: 20
                    }
                },
                tooltip: a
            },
            scales: {
                r: {
                    ticks: {
                        display: !1
                    }
                }
            },
            layout: {
                padding: 5
            }
        }
    })),
    g = document.getElementById("polarChartWithShadow"),
    g && (g.getContext("2d"),
    new Chart(g,{
        type: "polarAreaWithShadow",
        data: {
            labels: ["Potatoes", "Tomatoes", "Onions"],
            datasets: [{
                data: [25, 10, 15],
                backgroundColor: ["rgb(" + e.primary + "/ .1)", "rgb(" + e.primary + "/ .5)", "rgb(" + e.primary + "/ .25)"],
                borderColor: "rgb(" + e.primary + ")",
                borderWidth: 2
            }]
        },
        options: {
            maintainAspectRatio: !1,
            plugins: {
                legend: {
                    position: "bottom",
                    labels: {
                        usePointStyle: !0,
                        padding: 20
                    }
                },
                tooltip: a
            },
            scales: {
                r: {
                    ticks: {
                        display: !1
                    }
                }
            },
            layout: {
                padding: 5
            }
        }
    }));
    const u = {
        afterInit: e=>{
            const t = e.canvas.parentNode
              , o = e.data.datasets[0].data[0]
              , a = e.data.datasets[0].label
              , r = e.data.labels[0];
            t.querySelector(".chart-heading").innerHTML = a,
            t.querySelector(".chart-value").innerHTML = "$" + o,
            t.querySelector(".chart-label").innerHTML = r
        }
    }
      , h = {
        plugins: {
            legend: {
                display: !1
            },
            tooltip: {
                enabled: !1,
                intersect: !1,
                external: e=>{
                    const t = e.chart.canvas.parentNode
                      , o = e.tooltip.dataPoints[0].formattedValue
                      , a = e.tooltip.dataPoints[0].dataset.label
                      , r = e.tooltip.dataPoints[0].label;
                    t.querySelector(".chart-heading").innerHTML = a,
                    t.querySelector(".chart-value").innerHTML = "$" + o,
                    t.querySelector(".chart-label").innerHTML = r
                }
            }
        },
        scales: {
            y: {
                display: !1
            },
            x: {
                display: !1
            }
        },
        layout: {
            padding: {
                left: 5,
                right: 5,
                top: 10,
                bottom: 10
            }
        }
    };
    if (g = document.getElementById("lineWithAnnotationChart1"),
    g) {
        g.getContext("2d");
        var lineWithAnnotationChart1 = new Chart(g,{
            type: "lineWithAnnotation",
            plugins: [u],
            data: {
                labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                datasets: [{
                    label: "Total Orders",
                    data: [1250, 1300, 1550, 900, 1800, 1100, 1600],
                    borderColor: "rgb(" + e.primary + ")",
                    borderWidth: 2,
                    pointBorderColor: "rgb(" + e.primary + ")",
                    pointBorderWidth: 4,
                    pointRadius: 2,
                    pointHoverBackgroundColor: "rgb(" + e.primary + ")",
                    pointHoverBorderColor: "white",
                    pointHoverRadius: 2,
                    tension: .5
                }]
            },
            options: h
        })
    }
    if (document.addEventListener("ThemeChanged", (()=>{
        if (lineWithAnnotationChart1) {
            const t = lineWithAnnotationChart1.data.datasets[0];
            t.borderColor = "rgb(" + e.primary + ")",
            t.pointBorderColor = "rgb(" + e.primary + ")",
            t.pointHoverBackgroundColor = "rgb(" + e.primary + ")",
            lineWithAnnotationChart1.update()
        }
    }
    )),
    g = document.getElementById("lineWithAnnotationChart2"),
    g) {
        g.getContext("2d");
        var lineWithAnnotationChart2 = new Chart(g,{
            type: "lineWithAnnotation",
            plugins: [u],
            data: {
                labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                datasets: [{
                    label: "Active Orders",
                    data: [100, 125, 75, 125, 100, 75, 75],
                    borderColor: "rgb(" + e.primary + ")",
                    borderWidth: 2,
                    pointBorderColor: "rgb(" + e.primary + ")",
                    pointBorderWidth: 4,
                    pointRadius: 2,
                    pointHoverBackgroundColor: "rgb(" + e.primary + ")",
                    pointHoverBorderColor: "white",
                    pointHoverRadius: 2,
                    tension: .5
                }]
            },
            options: h
        })
    }
    if (document.addEventListener("ThemeChanged", (()=>{
        if (lineWithAnnotationChart2) {
            const t = lineWithAnnotationChart2.data.datasets[0];
            t.borderColor = "rgb(" + e.primary + ")",
            t.pointBorderColor = "rgb(" + e.primary + ")",
            t.pointHoverBackgroundColor = "rgb(" + e.primary + ")",
            lineWithAnnotationChart2.update()
        }
    }
    )),
    g = document.getElementById("lineWithAnnotationChart3"),
    g) {
        g.getContext("2d");
        var lineWithAnnotationChart3 = new Chart(g,{
            type: "lineWithAnnotation",
            plugins: [u],
            data: {
                labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                datasets: [{
                    label: "Pending Orders",
                    data: [300, 300, 600, 700, 600, 300, 300],
                    borderColor: "rgb(" + e.primary + ")",
                    borderWidth: 2,
                    pointBorderColor: "rgb(" + e.primary + ")",
                    pointBorderWidth: 4,
                    pointRadius: 2,
                    pointHoverBackgroundColor: "rgb(" + e.primary + ")",
                    pointHoverBorderColor: "white",
                    pointHoverRadius: 2,
                    tension: .5
                }]
            },
            options: h
        })
    }
    if (document.addEventListener("ThemeChanged", (()=>{
        if (lineWithAnnotationChart3) {
            const t = lineWithAnnotationChart3.data.datasets[0];
            t.borderColor = "rgb(" + e.primary + ")",
            t.pointBorderColor = "rgb(" + e.primary + ")",
            t.pointHoverBackgroundColor = "rgb(" + e.primary + ")",
            lineWithAnnotationChart3.update()
        }
    }
    )),
    g = document.getElementById("lineWithAnnotationChart4"),
    g) {
        g.getContext("2d");
        var lineWithAnnotationChart4 = new Chart(g,{
            type: "lineWithAnnotation",
            plugins: [u],
            data: {
                labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                datasets: [{
                    label: "Shipped Orders",
                    data: [200, 400, 200, 500, 100, 100, 400],
                    borderColor: "rgb(" + e.primary + ")",
                    borderWidth: 2,
                    pointBorderColor: "rgb(" + e.primary + ")",
                    pointBorderWidth: 4,
                    pointRadius: 2,
                    pointHoverBackgroundColor: "rgb(" + e.primary + ")",
                    pointHoverBorderColor: "white",
                    pointHoverRadius: 2,
                    tension: .5
                }]
            },
            options: h
        })
    }
    document.addEventListener("ThemeChanged", (()=>{
        if (lineWithAnnotationChart4) {
            const t = lineWithAnnotationChart4.data.datasets[0];
            t.borderColor = "rgb(" + e.primary + ")",
            t.pointBorderColor = "rgb(" + e.primary + ")",
            t.pointHoverBackgroundColor = "rgb(" + e.primary + ")",
            lineWithAnnotationChart4.update()
        }
    }
    )),
    g = document.getElementById("lineWithAnnotationAndShadowChart1"),
    g && (g.getContext("2d"),
    new Chart(g,{
        type: "lineWithAnnotationAndShadow",
        plugins: [u],
        data: {
            labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            datasets: [{
                label: "Total Orders",
                data: [1250, 1300, 1550, 900, 1800, 1100, 1600],
                borderColor: "rgb(" + e.primary + ")",
                borderWidth: 2,
                pointBorderColor: "rgb(" + e.primary + ")",
                pointBorderWidth: 4,
                pointRadius: 2,
                pointHoverBackgroundColor: "rgb(" + e.primary + ")",
                pointHoverBorderColor: "white",
                pointHoverRadius: 2,
                tension: .5
            }]
        },
        options: h
    })),
    g = document.getElementById("lineWithAnnotationAndShadowChart2"),
    g && (g.getContext("2d"),
    new Chart(g,{
        type: "lineWithAnnotationAndShadow",
        plugins: [u],
        data: {
            labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            datasets: [{
                label: "Active Orders",
                data: [100, 125, 75, 125, 100, 75, 75],
                borderColor: "rgb(" + e.primary + ")",
                borderWidth: 2,
                pointBorderColor: "rgb(" + e.primary + ")",
                pointBorderWidth: 4,
                pointRadius: 2,
                pointHoverBackgroundColor: "rgb(" + e.primary + ")",
                pointHoverBorderColor: "white",
                pointHoverRadius: 2,
                tension: .5
            }]
        },
        options: h
    })),
    g = document.getElementById("lineWithAnnotationAndShadowChart3"),
    g && (g.getContext("2d"),
    new Chart(g,{
        type: "lineWithAnnotationAndShadow",
        plugins: [u],
        data: {
            labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            datasets: [{
                label: "Pending Orders",
                data: [300, 300, 600, 700, 600, 300, 300],
                borderColor: "rgb(" + e.primary + ")",
                borderWidth: 2,
                pointBorderColor: "rgb(" + e.primary + ")",
                pointBorderWidth: 4,
                pointRadius: 2,
                pointHoverBackgroundColor: "rgb(" + e.primary + ")",
                pointHoverBorderColor: "white",
                pointHoverRadius: 2,
                tension: .5
            }]
        },
        options: h
    })),
    g = document.getElementById("lineWithAnnotationAndShadowChart4"),
    g && (g.getContext("2d"),
    new Chart(g,{
        type: "lineWithAnnotationAndShadow",
        plugins: [u],
        data: {
            labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            datasets: [{
                label: "Shipped Orders",
                data: [200, 400, 200, 500, 100, 100, 400],
                borderColor: "rgb(" + e.primary + ")",
                borderWidth: 2,
                pointBorderColor: "rgb(" + e.primary + ")",
                pointBorderWidth: 4,
                pointRadius: 2,
                pointHoverBackgroundColor: "rgb(" + e.primary + ")",
                pointHoverBorderColor: "white",
                pointHoverRadius: 2,
                tension: .5
            }]
        },
        options: h
    }))
}
const customFileInput = ()=>{
    on("body", "change", 'input[type="file"]', (e=>{
        const t = e.target.value.split("\\").pop();
        e.target.parentNode.querySelector(".file-name").innerHTML = t
    }
    ))
}
;
on("body", "change", 'input[type="file"]', (e=>{
    const t = e.target.value.split("\\").pop();
    e.target.parentNode.querySelector(".file-name").innerHTML = t
}
));
const fullscreen = ()=>{
    const e = document.getElementById("fullScreenToggler");
    if (!e)
        return;
    const t = document.documentElement;
    on("body", "click", "#fullScreenToggler", (()=>{
        document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement ? document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.msExitFullscreen && document.msExitFullscreen() : t.requestFullscreen ? t.requestFullscreen() : t.mozRequestFullScreen ? t.mozRequestFullScreen() : t.webkitRequestFullscreen ? t.webkitRequestFullscreen() : t.msRequestFullscreen && t.msRequestFullscreen(),
        e.classList.contains("la-expand-arrows-alt") ? (e.classList.remove("la-expand-arrows-alt"),
        e.classList.add("la-compress-arrows-alt")) : (e.classList.remove("la-compress-arrows-alt"),
        e.classList.add("la-expand-arrows-alt"))
    }
    ))
}
;
fullscreen();
const menu = ()=>{
    const e = document.documentElement
      , t = document.querySelector(".menu-bar")
      , o = document.querySelector(".menu-items");
    if (!t && !o)
        return;
    const a = localStorage.getItem("menuType");
    a && (e.classList.add(a),
    t.classList.add(a));
    const r = ()=>{
        t.querySelectorAll(".menu-detail.open").forEach((e=>{
            hideBackdrop(),
            t.classList.contains("menu-wide") || e.classList.remove("open")
        }
        ))
    }
      , n = ()=>{
        e.classList.remove("menu-hidden"),
        t.classList.remove("menu-hidden")
    }
      , i = ()=>{
        e.classList.add("menu-hidden"),
        t.classList.add("menu-hidden")
    }
      , d = ()=>{
        t.querySelector(".menu-header").classList.remove("hidden"),
        t.querySelectorAll(".menu-items .link").forEach((e=>{
            const o = e.dataset.target
              , a = t.querySelector(".menu-detail" + o);
            a && (a.classList.add("collapse"),
            e.setAttribute("data-toggle", "collapse"),
            e.after(a))
        }
        ))
    }
      , l = ()=>{
        e.classList.remove("menu-wide"),
        t.classList.remove("menu-wide"),
        t.querySelector(".menu-header").classList.add("hidden"),
        t.querySelectorAll(".menu-items .link").forEach((e=>{
            const a = e.dataset.target
              , r = t.querySelector(".menu-detail" + a);
            r && (r.classList.remove("collapse"),
            e.removeAttribute("data-toggle", "collapse"),
            o.after(r))
        }
        ))
    }
    ;
    window.addEventListener("resize", (()=>{
        (()=>{
            const e = window.innerWidth || document.documentElement.clientWidth;
            e < 640 && (t.querySelector(".menu-detail.open") || i());
            e > 640 && n()
        }
        )()
    }
    ), !1),
    t.classList.contains("menu-wide") && d(),
    document.addEventListener("click", (e=>{
        e.target.closest(".menu-bar") || t.classList.contains("menu-wide") || r()
    }
    )),
    on(".top-bar", "click", "[data-toggle='menu']", (e=>{
        t.classList.contains("menu-hidden") ? n() : i()
    }
    )),
    on(".menu-items", "click", ".link", (e=>{
        (e=>{
            const o = e.target.closest(".link").dataset.target
              , a = t.querySelector(o);
            if (a && !t.classList.contains("menu-wide")) {
                const e = a.classList.contains("open");
                r(),
                a && !e ? (showBackdrop(!0),
                a.classList.add("open")) : hideBackdrop()
            }
        }
        )(e)
    }
    )),
    on(".menu-bar", "click", "[data-toggle='menu-type']", (o=>{
        (o=>{
            const a = t.querySelector(".menu-detail.open");
            switch (e.classList.remove("menu-icon-only"),
            t.classList.remove("menu-icon-only"),
            e.classList.remove("menu-wide"),
            t.classList.remove("menu-wide"),
            l(),
            e.classList.remove("menu-hidden"),
            t.classList.remove("menu-hidden"),
            o) {
            case "icon-only":
                e.classList.add("menu-icon-only"),
                t.classList.add("menu-icon-only"),
                localStorage.setItem("menuType", "menu-icon-only"),
                a && showBackdrop(!0);
                break;
            case "wide":
                e.classList.add("menu-wide"),
                t.classList.add("menu-wide"),
                localStorage.setItem("menuType", "menu-wide"),
                d(),
                a && hideBackdrop();
                break;
            case "hidden":
                e.classList.add("menu-hidden"),
                t.classList.add("menu-hidden"),
                localStorage.setItem("menuType", "menu-hidden"),
                r();
                break;
            default:
                localStorage.removeItem("menuType"),
                a && showBackdrop(!0)
            }
        }
        )(o.target.closest("[data-toggle='menu-type']").dataset.value)
    }
    ))
}
;
menu();
const showActivePage = ()=>{
    const e = window.location.href.split(/[?#]/)[0]
      , t = document.querySelectorAll(".menu-bar a");
    t && t.forEach((t=>{
        if (t.href === e) {
            t.classList.add("active");
            const e = t.closest(".menu-detail");
            if (!e)
                return;
            document.querySelector('.menu-items .link[data-target="[data-menu=' + e.dataset.menu + ']"]').classList.add("active")
        }
    }
    ))
}
;
showActivePage();
const modal = ()=>{
    const e = '[data-toggle="modal"]'
      , t = e=>{
        hideBackdrop();
        const t = e.dataset.animations.split(", ")[1]
          , o = e.querySelector(".modal-content");
        animateCSS(o, t).then((()=>{
            e.classList.remove("active")
        }
        ))
    }
    ;
    on("body", "click", e, (o=>{
        const a = o.target.closest(e);
        (e=>{
            showBackdrop(),
            e.classList.add("active");
            const o = e.dataset.animations.split(", ")[0]
              , a = e.querySelector(".modal-content");
            animateCSS(a, o),
            e.addEventListener("click", (o=>{
                void 0 === e.dataset.staticBackdrop && e === o.target && t(e)
            }
            ))
        }
        )(document.querySelector(a.dataset.target))
    }
    )),
    on(".modal", "click", '[data-dismiss="modal"]', (e=>{
        const o = e.target.closest(".modal");
        t(o)
    }
    ))
}
;
modal();
const ratingStars = ()=>{
    rateStars = e=>{
        const t = e.target.closest(".rating-stars")
          , o = Array.from(t.children);
        let a = 0;
        a = o.length - o.indexOf(e.target),
        o.forEach((e=>e.classList.remove("active"))),
        e.target.classList.add("active"),
        console.log("You have rated " + a + " stars.")
    }
    ,
    on("body", "click", ".rating-stars", (e=>{
        rateStars(e)
    }
    ))
}
;
rateStars = e=>{
    const t = e.target.closest(".rating-stars")
      , o = Array.from(t.children);
    let a = 0;
    a = o.length - o.indexOf(e.target),
    o.forEach((e=>e.classList.remove("active"))),
    e.target.classList.add("active"),
    console.log("You have rated " + a + " stars.")
}
,
on("body", "click", ".rating-stars", (e=>{
    rateStars(e)
}
));
const showPassword = ()=>{
    on("body", "click", '[data-toggle="password-visibility"]', (e=>{
        (e=>{
            const t = e.closest(".form-control-addon-within").querySelector("input");
            "password" === t.type ? (t.type = "text",
            e.classList.remove("text-gray-600", "dark:text-gray-600"),
            e.classList.add("text-primary", "dark:text-primary")) : (t.type = "password",
            e.classList.remove("text-primary", "dark:text-primary"),
            e.classList.add("text-gray-600", "dark:text-gray-600"))
        }
        )(e.target.closest('[data-toggle="password-visibility"]'))
    }
    ))
}
;
on("body", "click", '[data-toggle="password-visibility"]', (e=>{
    (e=>{
        const t = e.closest(".form-control-addon-within").querySelector("input");
        "password" === t.type ? (t.type = "text",
        e.classList.remove("text-gray-600", "dark:text-gray-600"),
        e.classList.add("text-primary", "dark:text-primary")) : (t.type = "password",
        e.classList.remove("text-primary", "dark:text-primary"),
        e.classList.add("text-gray-600", "dark:text-gray-600"))
    }
    )(e.target.closest('[data-toggle="password-visibility"]'))
}
));
const sidebar = ()=>{
    const e = document.querySelector(".sidebar:not(.sidebar_customizer)");
    if (!e)
        return;
    const t = ()=>{
        hideBackdrop(),
        e.classList.remove("open")
    }
      , o = ()=>{
        e.classList.contains("open") ? t() : (showBackdrop(!0),
        e.classList.add("open"))
    }
    ;
    window.addEventListener("resize", (()=>{
        (window.innerWidth || document.documentElement.clientWidth) > 1024 && t()
    }
    ), !1),
    on("body", "click", '[data-toggle="sidebar"]', (()=>{
        o()
    }
    ))
}
;
sidebar();
const tabs = ()=>{
    let e = !1;
    on("body", "click", '[data-toggle="tab"]', (t=>{
        const o = t.target.closest('[data-toggle="tab"]')
          , a = o.closest(".tabs")
          , r = a.querySelector(".tab-nav .active")
          , n = a.querySelector(".collapse.open")
          , i = a.querySelector(o.dataset.target);
        e || r !== o && (r.classList.remove("active"),
        o.classList.add("active"),
        e = !0,
        closeCollapse(n, (()=>{
            openCollapse(i, (()=>{
                e = !1
            }
            ))
        }
        )))
    }
    )),
    on("body", "click", '[data-toggle="wizard"]', (e=>{
        const t = e.target.closest(".wizard")
          , o = e.target.dataset.direction
          , a = t.querySelectorAll(".nav-link")
          , r = t.querySelector(".nav-link.active");
        let n = 0;
        switch (a.forEach(((e,t)=>{
            e === r && (n = t)
        }
        )),
        o) {
        case "next":
            a[n + 1] && a[n + 1].click();
            break;
        case "previous":
            a[n - 1] && a[n - 1].click()
        }
    }
    ))
}
;
tabs();
const customTippy = ()=>{
    tippy.delegate("body", {
        target: '.menu-icon-only [data-toggle="tooltip-menu"]',
        touch: ["hold", 500],
        theme: "light-border tooltip",
        offset: [0, 12],
        interactive: !0,
        animation: "scale",
        placement: "right",
        appendTo: ()=>document.body
    }),
    tippy('[data-toggle="tooltip"]', {
        theme: "light-border tooltip",
        touch: ["hold", 500],
        offset: [0, 12],
        interactive: !0,
        animation: "scale",
        appendTo: ()=>document.body
    }),
    tippy('[data-toggle="popover"]', {
        theme: "light-border popover",
        offset: [0, 12],
        interactive: !0,
        allowHTML: !0,
        trigger: "click",
        animation: "shift-toward-extreme",
        content: e=>"<h5>" + e.dataset.popoverTitle + '</h5><div class="mt-5">' + e.dataset.popoverContent + "</div>",
        appendTo: ()=>document.body
    }),
    tippy('[data-toggle="dropdown-menu"]', {
        theme: "light-border",
        offset: [0, 8],
        arrow: !1,
        placement: "bottom-start",
        interactive: !0,
        allowHTML: !0,
        animation: "shift-toward-extreme",
        content: e=>{
            let t = e.closest(".dropdown").querySelector(".dropdown-menu");
            return t = t.outerHTML,
            t
        }
        ,
        appendTo: ()=>document.body
    }),
    tippy('[data-toggle="custom-dropdown-menu"]', {
        theme: "light-border",
        offset: [0, 8],
        arrow: !1,
        placement: "bottom-start",
        interactive: !0,
        allowHTML: !0,
        animation: "shift-toward-extreme",
        content: e=>{
            let t = e.closest(".dropdown").querySelector(".custom-dropdown-menu");
            return t = t.outerHTML,
            t
        }
        ,
        appendTo: ()=>document.body
    }),
    tippy('[data-toggle="search-select"]', {
        theme: "light-border",
        offset: [0, 8],
        maxWidth: "none",
        arrow: !1,
        placement: "bottom-start",
        trigger: "click",
        interactive: !0,
        allowHTML: !0,
        animation: "shift-toward-extreme",
        content: e=>{
            let t = e.closest(".search-select").querySelector(".search-select-menu");
            return t = t.outerHTML,
            t
        }
        ,
        appendTo: e=>e.closest(".search-select")
    })
}
;
tippy.delegate("body", {
    target: '.menu-icon-only [data-toggle="tooltip-menu"]',
    touch: ["hold", 500],
    theme: "light-border tooltip",
    offset: [0, 12],
    interactive: !0,
    animation: "scale",
    placement: "right",
    appendTo: ()=>document.body
}),
tippy('[data-toggle="tooltip"]', {
    theme: "light-border tooltip",
    touch: ["hold", 500],
    offset: [0, 12],
    interactive: !0,
    animation: "scale",
    appendTo: ()=>document.body
}),
tippy('[data-toggle="popover"]', {
    theme: "light-border popover",
    offset: [0, 12],
    interactive: !0,
    allowHTML: !0,
    trigger: "click",
    animation: "shift-toward-extreme",
    content: e=>"<h5>" + e.dataset.popoverTitle + '</h5><div class="mt-5">' + e.dataset.popoverContent + "</div>",
    appendTo: ()=>document.body
}),
tippy('[data-toggle="dropdown-menu"]', {
    theme: "light-border",
    offset: [0, 8],
    arrow: !1,
    placement: "bottom-start",
    interactive: !0,
    allowHTML: !0,
    animation: "shift-toward-extreme",
    content: e=>{
        let t = e.closest(".dropdown").querySelector(".dropdown-menu");
        return t = t.outerHTML,
        t
    }
    ,
    appendTo: ()=>document.body
}),
tippy('[data-toggle="custom-dropdown-menu"]', {
    theme: "light-border",
    offset: [0, 8],
    arrow: !1,
    placement: "bottom-start",
    interactive: !0,
    allowHTML: !0,
    animation: "shift-toward-extreme",
    content: e=>{
        let t = e.closest(".dropdown").querySelector(".custom-dropdown-menu");
        return t = t.outerHTML,
        t
    }
    ,
    appendTo: ()=>document.body
}),
tippy('[data-toggle="search-select"]', {
    theme: "light-border",
    offset: [0, 8],
    maxWidth: "none",
    arrow: !1,
    placement: "bottom-start",
    trigger: "click",
    interactive: !0,
    allowHTML: !0,
    animation: "shift-toward-extreme",
    content: e=>{
        let t = e.closest(".search-select").querySelector(".search-select-menu");
        return t = t.outerHTML,
        t
    }
    ,
    appendTo: e=>e.closest(".search-select")
});
const toasts = ()=>{
    const e = document.getElementById("toasts-container");
    if (!e)
        return;
    on("body", "click", '[data-toggle="toast"]', (t=>{
        (t=>{
            const o = t.dataset.title
              , a = t.dataset.content;
            let r = `\n    <div class="toast mb-5">\n      <div class="toast-header">\n        <h5>${o}</h5><small>${t.dataset.time}</small>\n        <button class="close" data-dismiss="toast">&times</button>\n      </div>\n      <div class="toast-body">${a}</div>\n    </div>`;
            r = (new DOMParser).parseFromString(r, "text/html").body.firstChild,
            e.appendChild(r),
            animateCSS(r, "fadeInUp")
        }
        )(t.target)
    }
    )),
    on("body", "click", '[data-dismiss="toast"]', (e=>{
        (e=>{
            e.style.overflowY = "hidden",
            e.style.height = e.offsetHeight + "px",
            animateCSS(e, "fadeOutUp").then((()=>{
                e.style.opacity = 0,
                e.style.height = 0,
                e.style.marginTop = 0,
                e.style.marginBottom = 0,
                e.style.paddingTop = 0,
                e.style.paddingBottom = 0,
                e.style.border = 0
            }
            )),
            e.addEventListener("transitionend", (()=>{
                e.parentNode && e.parentNode.removeChild(e)
            }
            ), {
                once: !0
            })
        }
        )(e.target.closest(".toast"))
    }
    ))
}
;
toasts();
