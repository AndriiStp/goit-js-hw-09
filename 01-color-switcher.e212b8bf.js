!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),a=document.querySelector("body");t.addEventListener("click",(function(){setInterval((function(){a.style.backgroundColor="#".concat(Math.floor(16777214*Math.random()).toString(16).padStart(6,0))}),1e3)&&t.setAttribute("disabled","disabled")})),e.addEventListener("click",(function(){clearInterval(changer),t.removeAttribute("disabled","disabled")}))}();
//# sourceMappingURL=01-color-switcher.e212b8bf.js.map
