const e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]"),r=document.querySelector("body");e.addEventListener("click",(()=>{changer=setInterval((()=>{r.style.backgroundColor=`#${Math.floor(16777214*Math.random()).toString(16).padStart(6,0)}`}),1e3),changer&&e.setAttribute("disabled","disabled")})),t.addEventListener("click",(()=>{clearInterval(changer),e.removeAttribute("disabled","disabled")}));
//# sourceMappingURL=01-color-switcher.9135d720.js.map
