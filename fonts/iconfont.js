(function(window){var svgSprite='<svg><symbol id="icon-star" viewBox="0 0 1024 1024"><path d="M512.005628 86.322018 619.43129 394.883629l340.15005 2.428306L696.758446 605.436042 800.160467 937.679006 512.005628 739.707119 223.851812 937.679006l96.717785-336.665693L64.416614 397.311935l340.16233-2.428306L512.005628 86.322018z"  ></path></symbol><symbol id="icon-check" viewBox="0 0 1024 1024"><path d="M887.904 298.208c-12.864-12.064-33.152-11.488-45.216 1.408L415.936 753.984l-233.12-229.696C170.208 511.872 149.952 512 137.536 524.608c-12.416 12.576-12.256 32.864 0.352 45.248l256.48 252.672c0.096 0.096 0.224 0.128 0.32 0.224 0.096 0.096 0.128 0.224 0.224 0.32 2.016 1.92 4.448 3.008 6.784 4.288 1.152 0.672 2.144 1.664 3.36 2.144 3.776 1.472 7.776 2.24 11.744 2.24 4.192 0 8.384-0.832 12.288-2.496 1.312-0.544 2.336-1.664 3.552-2.368 2.4-1.408 4.896-2.592 6.944-4.672 0.096-0.096 0.128-0.256 0.224-0.352 0.064-0.096 0.192-0.128 0.288-0.224l449.184-478.208C901.44 330.592 900.768 310.336 887.904 298.208z"  ></path></symbol><symbol id="icon-caidan" viewBox="0 0 1024 1024"><path d="M79.169331 113.350554l121.006899 0 0 120.557773-121.006899 0 0-120.557773ZM324.965581 113.350554l647.967334 0 0 120.557773-647.967334 0 0-120.557773ZM79.169331 444.549837l121.006899 0 0 120.557773-121.006899 0 0-120.557773ZM324.965581 444.549837l647.967334 0 0 120.557773-647.967334 0 0-120.557773ZM79.169331 754.840781l121.006899 0 0 120.334643-121.006899 0 0-120.334643ZM324.965581 754.840781l647.967334 0 0 120.334643-647.967334 0 0-120.334643Z"  ></path></symbol><symbol id="icon-xiangxia" viewBox="0 0 1024 1024"><path d="M903.889 316.017c0 8.805-2.828 17.65-8.685 25.14l-279.696 356.91c-25.261 32.232-63.271 50.759-104.268 50.759-41.037 0-79.047-18.527-104.308-50.799l-278.141-354.877c-13.905-17.811-10.758-43.388 6.933-57.294 17.729-13.905 43.388-10.797 57.294 6.933l278.141 354.917c9.722 12.43 24.305 19.523 40.082 19.523 15.738 0 30.321-7.092 40.043-19.483l279.696-356.95c13.905-17.729 39.523-20.838 57.294-6.933 10.239 8.049 15.618 20.041 15.618 32.153z"  ></path></symbol><symbol id="icon-up" viewBox="0 0 1024 1024"><path d="M64.633 702.181L511.145 255.67l446.512 446.511z" fill="" ></path></symbol><symbol id="icon-down" viewBox="0 0 1024 1024"><path d="M128.005 302.974l386.971 420.571 381.019-422.746z" fill="" ></path></symbol><symbol id="icon-message" viewBox="0 0 1024 1024"><path d="M64 79.9v720h159.9l74.2 144.2 184.2-144.2H960v-720H64z m846 670H465.1l-13.6 10.6-136.6 107-46.5-90.5-14-27.1H114v-620h796v620zM321.7 482h-50V382h50v100z m210.3 0h-50V382h50v100z m220.3 0h-50V382h50v100z" fill="" ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)