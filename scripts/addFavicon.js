const timeout=setTimeout((()=>{const e=Boolean(document.body.getAttribute("data-isdev"));console.log(e);const o=e?"/favicon.ico":"/SuncovRussian/favicon.ico",t=document.createElement("link");t.rel="icon",t.type="image/x-icon",t.href=o,document.head.appendChild(t),clearTimeout(timeout)}),1e3);