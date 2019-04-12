(function(head) {
    if ((window.MathJax === undefined) || (typeof window.MathJax === "undefined"))
    {
        var ab = document.createElement("script");
        ab.setAttribute("type", "text/javascript");
        ab.setAttribute("src", "http" + (("https:" === document.location.protocol) ? "s" : "") + 
            "://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/latest.js?config=TeX-MML-AM_CHTML");
        head.appendChild(ab);
    }

    var cd = document.createElement("script");
    cd.setAttribute("type", "text/x-mathjax-config");
    cd.innerText = 
        "MathJax.Hub.Config({" + 
            "jax: [\"input/TeX\", \"output\/HTML-CSS\"], " + 
            "tex2jax: { " + 
                "inlineMath: [ [\"$\", \"$\"], [\"\\\\(\", \"\\\\)\"], " + 
                "[\"[;\", \";]\"] ], displayMath: [ [\"$$\", \"$$\"], [\"\\\\[\", \"\\\\]\"] ], " + 
                "processEscapes: true" + 
            "}, " + 
            "\"HTML-CSS\": {" + 
                "fonts: [\"TeX\"]" + 
            "} " + 
        "});";
    head.appendChild(cd);
})(document.getElementsByTagName("HEAD")[0]);
