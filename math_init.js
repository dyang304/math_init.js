(function(head) {
    if ((window.MathJax === undefined) || (typeof window["MathJax"] === "undefined"))
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
        "MathJax.Hub.Config({\n\t\
            jax: [\"input/TeX\", \"output\/HTML-CSS\"],\n\t\
            tex2jax: {\n\t\t\
                inlineMath: [ [\"$\", \"$\"], [\"\\\\(\", \"\\\\)\"], [\"[;\", \";]\"] ],\n\t\t\
                displayMath: [ [\"$$\", \"$$\"], [\"\\\\[\", \"\\\\]\"] ],\n\t\t\
                processEscapes: true\n\t\
            },\n\t\
            \"HTML-CSS\": {\n\t\t\
                fonts: [\"TeX\"]\n\t\
            }\n\
        });";
    head.appendChild(cd);
})(document.getElementsByTagName("HEAD")[0]);
