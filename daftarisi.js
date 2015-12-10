var loadToc, loadCategories, _toc = {
    init: function() {
        var b = {
                homePage: "http://madahrohani.blogspot.com",
                maxResults: 30,
                numChars: 270,
                thumbWidth: 80,
                navText: "Berikutnya",
                resetToc: "Kembali ke Awal",
                noImage: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAA3NCSVQICAjb4U/gAAAADElEQVQImWOor68HAAL+AX7vOF2TAAAAAElFTkSuQmCC",
                loading: "<span class='button disabled'>Memuat...</span>",
                counting: "<div class='dte_search-description-message'>Menghitung artikel...</div>",
                searching: "<span class='button disabled'>Mencari...</span>"
            },
            a = window,
            g = document,
            e = function(d) {
                return g.getElementById(d)
            },
            f = {
                a: e("dte_toc-feed-order"),
                b: e("dte_toc-label-sorter").parentNode,
                c: e("dte_toc-feed-searcher"),
                d: e("dte_toc-feed-searcher-text"),
                e: e("dte_toc-result-description"),
                f: e("dte_toc-feed-container"),
                g: e("dte_toc-feed-nav"),
                h: g.getElementsByTagName("head")[0],
                i: 0,
                j: null,
                k: "published",
                l: 0,
                m: ""
            },
            c = {
                a: function(id) {
                    var old = e(id);
                    old.parentNode.removeChild(old)
                },
                b: function(h, id) {
                    var d = g.createElement("script");
                    d.type = "text/javascript";
                    d.id = id;
                    d.src = h;
                    if (e(id)) {
                        c.a(id)
                    }
                    f.h.appendChild(d)
                },
                c: function(i, h, d) {
                    f.i++;
                    f.e.innerHTML = b.counting;
                    f.g.innerHTML = b[i == 1 ? "searching" : "loading"];
                    if (i === 0) {
                        c.b(h !== null ? b.homePage + "/feeds/posts/summary/-/" + h + "?alt=json-in-script&start-index=" + ((f.i * b.maxResults) + 1) + "&max-results=" + b.maxResults + "&orderby=" + d + "&callback=loadToc" : b.homePage + "/feeds/posts/summary?alt=json-in-script&start-index=" + ((f.i * b.maxResults) + 1) + "&max-results=" + b.maxResults + "&orderby=" + d + "&callback=loadToc", "dte_temporer-script-1")
                    } else {
                        if (i == 1) {
                            c.b(b.homePage + "/feeds/posts/summary?alt=json-in-script&start-index=" + ((f.i * b.maxResults) + 1) + "&max-results=" + b.maxResults + "&q=" + h + "&orderby=" + d + "&callback=loadToc", "dte_temporer-script-1")
                        }
                    }
                    f.j = (h !== null) ? h : null;
                    f.l = i;
                    f.a.disabled = true;
                    f.b.children[0].disabled = true
                },
                d: function(w) {
                    var o;
                    f.g.innerHTML = "";
                    f.e.innerHTML = f.l == 1 ? '<div class="dte_search-description-message">Hasil penelusuran untuk kata kunci <strong>&#8220;' + f.m + '&#8221;</strong> (' + w.feed.openSearch$totalResults.$t + ' Temuan)</div>' : '<div class="dte_search-description-message">Total: ' + w.feed.openSearch$totalResults.$t + ' Artikel</div>';
                    if ("entry" in w.feed) {
                        var v = w.feed.entry,
                            u, t, s, r = "0 Komentar",
                            q = "",
                            p;
                        for (var n = 0; n < b.maxResults; n++) {
                            if (n == v.length) {
                                break
                            }
                            u = v[n].title.$t;
                            s = ("summary" in v[n]) ? v[n].summary.$t.replace(/<br ?\/?>/ig, " ").replace(/<.*?>/g, "").replace(/[<>]/g, "").substring(0, b.numChars) : "";
                            p = ("media$thumbnail" in v[n]) ? v[n].media$thumbnail.url.replace(/\/s[0-9]+\-c/, "/s" + b.thumbWidth + "-c") : b.noImage.replace(/\/s[0-9]+\-c/, "/s" + b.thumbWidth + "-c");
                            for (var m = 0, d = v[n].link.length; m < d; m++) {
                                if (v[n].link[m].rel == "alternate") {
                                    t = v[n].link[m].href;
                                    break
                                }
                            }
                            for (var l = 0, h = v[n].link.length; l < h; l++) {
                                if (v[n].link[l].rel == "replies" && v[n].link[l].type == "text/html") {
                                    r = v[n].link[l].title;
                                    break
                                }
                            }
                            o = g.createElement("li");
                            o.innerHTML = '<div class="dte_toc-inner cf"><img style="width:' + b.thumbWidth + 'px!important;height:' + b.thumbWidth + 'px!important;max-width:none!important;max-height:none!important;" src="' + p + '" alt="' + u + '" class="dte_toc-thumbnail"><a class="dte_toc-title" href="' + t + '" target="_blank">' + u + '</a><strong> - (' + r + ')</strong><br><div class="dte_toc-summary">' + s + '&hellip;</div></div>';
                            f.f.appendChild(o)
                        }
                        o = g.createElement("a");
                        o.className = "button";
                        o.href = "#load-more";
                        o.innerHTML = b.navText;
                        o.onclick = function() {
                            c.c(f.l, f.j, f.k);
                            return false
                        }
                    } else {
                        o = g.createElement("a");
                        o.className = "button";
                        o.href = "#reset-content";
                        o.innerHTML = b.resetToc;
                        o.onclick = function() {
                            f.i = -1;
                            f.e.innerHTML = b.counting;
                            f.f.innerHTML = "";
                            c.c(0, null, "published");
                            f.a.innerHTML = f.a.innerHTML;
                            f.b.children[0].innerHTML = f.b.children[0].innerHTML;
                            return false
                        }
                    }
                    f.g.appendChild(o);
                    f.a.disabled = false;
                    f.b.children[0].disabled = false
                },
                e: function(l) {
                    var j = l.feed.category,
                        h = '<select id="dte_toc-label-sorter"><option value="" selected disabled>Kategori...</option>';
                    for (var k = 0, d = j.length; k < d; k++) {
                        h += '<option value="' + encodeURIComponent(j[k].term) + '">' + j[k].term + "</option>"
                    }
                    h += "</select>";
                    f.b.innerHTML = h;
                    f.b.children[0].onchange = function() {
                        f.i = -1;
                        f.f.innerHTML = "";
                        f.g.innerHTML = b.loading;
                        c.c(0, this.value, f.k)
                    }
                }
            };
        loadToc = c.d;
        loadCategories = c.e;
        c.b(b.homePage + "/feeds/posts/summary?alt=json-in-script&start-index=" + (f.i + 1) + "&max-results=" + b.maxResults + "&orderby=published&callback=loadToc", "dte_temporer-script-1");
        c.b(b.homePage + "/feeds/posts/summary?alt=json-in-script&max-results=0&orderby=published&callback=loadCategories", "dte_temporer-script-2");
        f.a.onchange = function() {
            f.i = -1;
            f.f.innerHTML = "";
            f.g.innerHTML = b.counting;
            f.b.children[0].innerHTML = f.b.children[0].innerHTML;
            c.c(0, null, this.value);
            f.k = this.value
        };
        f.c.onsubmit = function() {
            f.i = -1;
            f.f.innerHTML = "";
            f.m = f.d.value;
            c.c(1, f.d.value, f.k);
            return false
        }
    }
};
_toc.init();
