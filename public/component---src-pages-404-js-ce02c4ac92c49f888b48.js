(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{199:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(232);t.default=function(){return i.a.createElement(r.a,null,i.a.createElement("h1",null,"NOT FOUND"),i.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},204:function(e,t,a){"use strict";a(111),a(64),a(238);var n=a(202),i={mobile:"(max-width: 767px)",tabletPortrait:"(min-width: 768px) and (orientation: portrait)",tabletLandscape:"(min-width: 768px) and (orientation: landscape)",tablet:768,desktop:1024,oldIE:"all and (-ms-high-contrast: none)"},r=Object.keys(i).reduce(function(e,t){var a="string"==typeof i[t]?"":"(min-width:",r="string"==typeof i[t]?"":"px)";return e[t]=function(e){return Object(n.a)("@media ",a+i[t]+r,"{",e,";}")},e},{});t.a=r},209:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return b}),a.d(t,"StaticQueryContext",function(){return g}),a.d(t,"StaticQuery",function(){return m});var n=a(0),i=a.n(n),r=a(7),o=a.n(r),l=a(203),c=a.n(l);a.d(t,"Link",function(){return c.a}),a.d(t,"withPrefix",function(){return l.withPrefix}),a.d(t,"push",function(){return l.push}),a.d(t,"replace",function(){return l.replace}),a.d(t,"navigateTo",function(){return l.navigateTo});var d=a(215),s=a.n(d);a.d(t,"PageRenderer",function(){return s.a});var u=a(61);a.d(t,"parsePath",function(){return u.a});var g=i.a.createContext({}),m=function(e){return i.a.createElement(g.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};function b(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},210:function(e,t,a){"use strict";t.a=function(e,t){void 0===t&&(t=1e3);var a,n=(window.pageYOffset||document.documentElement.scrollTop)-(document.documentElement.clientTop||0),i=document.querySelector("section"+e).offsetTop+1,r=0;window.requestAnimationFrame(function e(o){a||(a=o);var l,c=1==(l=(r+=o-a)/t)?1:1-Math.pow(2,-10*l);window.scrollTo(0,Math.floor(n+c*(i-n))),r<t?(window.requestAnimationFrame(e),a=o):a=null})}},211:function(e,t,a){"use strict";t.a=function(e,t,a){void 0===a&&(a="click"),window.ga&&window.ga("send","event",e,a,t)}},215:function(e,t,a){var n;e.exports=(n=a(227))&&n.default||n},226:function(e){e.exports={data:{site:{siteMetadata:{title:"alliuca.com - a Front End developer story",description:"Luca Allievi's portfolio, a box full of HTML5, CSS3, JavaScript and other web stuff.",siteUrl:"https://alliuca.com"}}}}},227:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(7),o=a.n(r),l=a(54),c=a(2),d=function(e){var t=e.location,a=c.a.getResourcesForPathname(t.pathname);return i.a.createElement(l.a,{location:t,pageResources:a})};d.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=d},228:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAABSlBMVEUAAAAbGxsaGBobGxscHRxRl08ZFhkaGhoaGxoaGhoaGhobGxsbGxtNlEoYFBkZFxkcHBxJkUYbGxtIkUYSBRIbGxtNlEpDjEAeJR4cHBxar1cXExgcHBxiuWIaGhpOnktMmEhKk0dJj0YQAREaGhpQoU1SpE9NmEpLlEg3aTQsRysSBhMSBBJEjEEyWjBBfz4hKiAbGxsWDhdRmU5Hj0QlNSVCij9Kk0gmNiUbGxtCgUBTq1BRlk9Sl1AdHhwbGxtPmUtYtFUbGxtpsGlQmE1TpVASBRNstWxQl01HhkQcHRxOmUsfIB9YmVUaGhpIj0VHjkRGjEMbHBtJkkZNnkpIjUVRpk1RqE1PoUxLlkhFikJCgz8RBBJTrU9FjEJEikEWERYUCxQPAA9MlUk/eDw2dDEgKyBLmkg5ZzYzWTIvTi0fJh4cHxwYFBju4IOeAAAATnRSTlMAoyhIQk0h8sfDv7GYPzw3JeG2ppeTimJSKx8aEQn48fHu6ebi4dbV0sy+t7SysKyrqqednJualpSNjIV/fX11cWhbVVVMRj47Ly8tFRF2MPllAAABcUlEQVQ4y32RVXPDMBCEL8xN06ThlJmZmdGSTAE7DOX//1q5TidgR9/D6aS92bkdQR+2OLDxzrB1J8cFgYWF49wsPcFRbIwBvzYwMli3UplpYdEHvIwInMtFyxDD4PyKFjdjgxTwtNrBjFEtgX74BhokANJjehDTDTa15tA8iFMzeNK6tHkQH3316+0ZbT39+jB95NsfmTIL4qf68v8lYgxipbr6AklHLOZIAkwbglj4n9pGYK5EEMKF2duDWoX39GzAV6ufEyKVNYg4/lGp8vZuA7XSKL5peqlEC84XFU51dxmofCFL3/FU+OR0J4SIhGWhVetYRL7zMkY45NCvgQWMSE5srXQi5HNSuRztWF4UypKY+7prX7cUmWDhBrp4qBOcE9pBnO9FLDSvoYf7pkCyDf1HdmUBKcfQx6WCUHbpbwMkSngdDBwRlBdpkOBaViKTGTAyX5DkxTg8RuuYOMCEZ7r5doA2mb0wmLK/+grwCzHyWpbW86t4AAAAAElFTkSuQmCC"},229:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjExOHB4IiBoZWlnaHQ9IjEyNXB4IiB2aWV3Qm94PSIwIDAgMTE4IDEyNSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMzkuMSAoMzE3MjApIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPgogICAgPHRpdGxlPkdyb3VwIENvcHkgMjwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJMb2dvIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjA0LjAwMDAwMCwgLTE2Ni4wMDAwMDApIiBzdHJva2Utd2lkdGg9IjE1Ij4KICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLUNvcHktMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjExLjAwMDAwMCwgMTgzLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPHBvbHlsaW5lIGlkPSJUcmlhbmdsZSIgc3Ryb2tlPSIjMUExQTFBIiBwb2ludHM9IjAgMTA0IDUyIDAgMTA0IDEwNCI+PC9wb2x5bGluZT4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMDQsMTA0LjUgQzEwNCwxMDQuNSA4NCw2MyA1Miw2MyBDMjAsNjMgMCwxMDQuNSAwLDEwNC41IiBpZD0iVHJpYW5nbGUiIHN0cm9rZT0iIzQ4OEY0NSI+PC9wYXRoPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4="},230:function(e){e.exports={data:{allNavJson:{edges:[{node:{id:"/Users/alliuca/Sites/alliuca.com-gatsby/src/data/nav/contact.json absPath of file >>> JSON",title:"Contact",url:"#contact"}}]}}}},232:function(e,t,a){"use strict";var n=a(226),i=a(0),r=a.n(i),o=a(7),l=a.n(o),c=a(235),d=a.n(c),s=a(209),u=a(228),g=a.n(u),m=(a(237),a(98)),b=a(204);Object(m.injectGlobal)(".u - clearfix{&:after{content:'';display:table;clear:both;}}.u - padding{padding:var(--default_padding);}",b.a.mobile(Object(m.css)(".hidden-sm{display:none;}"))," ",b.a.tablet(Object(m.css)(".hidden-md{display:none;}"))),Object(m.injectGlobal)(":root{--white:#fdfdfd;--black:#1d1d1d;--red:#f42b39;--grey:#cdcdcd;--green:#488f45;--muse:#c42aa2;--skookum_festival:#38077f;--storm_crow:#42bdf1;--michelin:#2e4996;--sony_pictures:#1d1d1d;--jaguar:#567a60;--nikon:#ffdc01;--bac:#119bbc;--nu3:#7cc7c8;--yellow_pages:#feda2d;--cpa:#a50010;--ardua:#f1efef;--color-vancouver:#d6dedc;--color-amsterdam:#f18857;--color-berlin:#a8adb1;--color-malta:#f6dbbd;--color-adro:#a2b538;--site_max_width:1980px;--default_padding:2em;--default_font_size:12;--default_line_height:21;--font_standard:Helvetica,Arial,sans-serif;--font_body:'Open Sans',Helvetica,Arial,sans-serif;--font_ctas:'Open Sans',Helvetica,Arial,sans-serif;",b.a.tablet(Object(m.css)("--default_font_size:16;--default_line_height:27;"))," ",b.a.desktop(Object(m.css)("--default_font_size:16;")),";}"),Object(m.injectGlobal)("@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600&subset=latin');*,*:before,*:after{box-sizing:border-box;}body{background:var(--white);font-family:var(--font_body);font-size:calc(var(--default_font_size) * 1px);line-height:calc(var(--default_line_height) / var(--default_font_size));-webkit-font-smoothing:antialiased;}a{color:var(--black);text-decoration:none;border-bottom:.1em solid currentColor;transition:border .2s linear,color .2s linear;&:hover{color:var(--white);border-bottom-color:var(--white);}}nav a{font-weight:bold;text-decoration:none;text-transform:uppercase;}img{max-width:100%;}.hide{display:none;}.invisible{visibility:hidden;}.icon{display:inline-block;width:30px;height:30px;}.icon--arrow-left,.icon--arrow-right{width:1.7em;height:1.7em;border-top:.2em solid currentColor;border-right:.2em solid currentColor;transform:rotate(-135deg);cursor:pointer;}.icon--arrow-right{transform:rotate(45deg);}.icon--close{width:2em;height:2em;&:before,&:after{content:'';position:absolute;display:block;width:2em;height:.2em;background:currentColor;}&:before{transform:translateY(1em) rotate(45deg);}&:after{transform:translateY(1em) rotate(-45deg);}}");var f=a(202),p=Object(f.b)("div",{target:"e10c3j2g0"})("max-width:var(--site_max_width);margin:0 auto;overflow:hidden;"),h=Object(f.b)("div",{target:"e1pa1xh50"})("position:absolute;left:0;z-index:1;display:flex;align-items:center;justify-content:space-between;width:100%;padding:calc(var(--default_padding) / 1.5);"),w=Object(f.b)("a",{target:"e1p16kas0"})("height:2.6em;border:0;img{width:auto;height:100%;}"),A=a(229),I=a.n(A),v=function(){return r.a.createElement(w,{href:"/",clLogossName:"logo",itemProp:"url"},r.a.createElement("img",{src:I.a,alt:"alliuca.com logo",itemProp:"logo"}))},x=(a(239),a(241),a(230)),y=Object(f.b)("nav",{target:"elgc6b50"})(),E=Object(f.b)("ul",{target:"elgc6b51"})("display:flex;list-style:none;"),k=Object(f.b)("li",{target:"elgc6b52"})("font-size:0.9em;"),j=Object(f.b)("a",{target:"elgc6b53"})("border-bottom-width:0;border-bottom-color:transparent;&:hover{border-bottom-width:0.1em;border-bottom-color:var(--black);color:var(--black);}");y.MainNav=E,y.MainNavItem=k,y.MainNavItemLink=j;var C=y,M=a(210),G=a(211),S=function(){return r.a.createElement(C,null,r.a.createElement(C.MainNav,null,r.a.createElement(s.StaticQuery,{query:"245906342",render:function(e){return e.allNavJson.edges.map(function(e){return r.a.createElement(C.MainNavItem,{key:e.node.id.toString()},r.a.createElement(C.MainNavItemLink,{href:e.node.url,onClick:function(){Object(G.a)("Main nav item",e.node.title),Object(M.a)(e.node.url)}},e.node.title))})},data:x})))},B=function(e){return e.siteTitle,r.a.createElement(h,null,r.a.createElement(v,null),r.a.createElement(S,null))},N=Object(f.b)("footer",{target:"euq6igc0"})("display:flex;flex-direction:column;padding:calc(var(--default_padding) / 2) var(--default_padding);background:var(--black);font-size:0.85em;p{width:100%;color:var(--white);text-align:center;}span{display:inline-block;margin-right:1.2em;}a{color:var(--white);&:hover{border-bottom-color:#999;}}",b.a.tablet(Object(f.a)("flex-direction:row;flex-wrap:wrap;text-align:left;")),";"),T=function(){return r.a.createElement(N,null,r.a.createElement("p",null,r.a.createElement("strong",null,"alliuca.com"),r.a.createElement("span",null," © 2018"),r.a.createElement("a",{href:"#intro",onClick:function(){Object(G.a)("Scroll to section Button","Intro"),Object(M.a)("#intro")}},"Back to top")))},O=function(e){var t=e.children;return e.data,r.a.createElement(s.StaticQuery,{query:"1695598592",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:e.site.siteMetadata.description}]},r.a.createElement("html",{lang:"en"}),r.a.createElement("link",{rel:"icon",type:"image/png",href:g.a}),r.a.createElement("link",{rel:"canonical",href:e.site.siteMetadata.siteUrl})),r.a.createElement(B,{siteTitle:e.site.siteMetadata.title}),r.a.createElement(p,{itemScope:!0,itemType:"http://schema.org/Organization"},t),r.a.createElement(T,null))},data:n})};O.propTypes={children:l.a.node.isRequired},t.a=O}}]);
//# sourceMappingURL=component---src-pages-404-js-ce02c4ac92c49f888b48.js.map