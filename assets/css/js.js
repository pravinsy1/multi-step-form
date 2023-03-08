(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function o(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerpolicy&&(l.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?l.credentials="include":s.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(s){if(s.ep)return;s.ep=!0;const l=o(s);fetch(s.href,l)}})();function v(){const t=document.getElementById("wizard-form"),e=document.querySelector("[data-summary-plan]"),o=document.querySelector("[data-summary-add-ons]"),a=document.querySelector("[data-summary-total]");if(t){const s=new FormData(t);L(s,{summaryPlan:e,summaryAddOns:o,summaryTotal:a})}}window.populateConfirmation=v;const z={arcade:{monthly:9,yearly:90},advanced:{monthly:12,yearly:120},pro:{monthly:15,yearly:150}},y={"option-games":{monthly:1,yearly:10},"option-storage":{monthly:2,yearly:20},"option-theme":{monthly:2,yearly:20}};function L(t,e){const o=t.get("plan")||"arcade",a=t.has("plan-yearly")?"yearly":"monthly",s=z[o][a];let l=s;t.has("option-games")&&(l+=y["option-games"][a]),t.has("option-storage")&&(l+=y["option-storage"][a]),t.has("option-theme")&&(l+=y["option-theme"][a]);let u;Array.from(e.summaryPlan.children).forEach(f=>{f.tagName==="P"?e.summaryPlan.removeChild(f):f.tagName==="BUTTON"&&(u=f)});const O=_(o)+" ("+_(a)+")";new m("p").text(w(s,a)).class("summary__price").class("heading--6").insertBefore(e.summaryPlan,u),new m("p").text(O).class("summary__plan").class("heading--5").insertBefore(e.summaryPlan,u),e.summaryAddOns.innerText="",t.has("option-games")&&(new m("p").text("Online service").class("summary__option").class("text--2").addTo(e.summaryAddOns),new m("p").text(g(y["option-games"][a],a)).class("summary__option-price").class("text--2").addTo(e.summaryAddOns)),t.has("option-storage")&&(new m("p").text("Larger storage").class("summary__option").class("text--2").addTo(e.summaryAddOns),new m("p").text(g(y["option-storage"][a],a)).class("summary__option-price").class("text--2").addTo(e.summaryAddOns)),t.has("option-theme")&&(new m("p").text("Customizable profile").class("summary__option").class("text--2").addTo(e.summaryAddOns),new m("p").text(g(y["option-theme"][a],a)).class("summary__option-price").class("text--2").addTo(e.summaryAddOns)),e.summaryTotal.innerText="",new m("p").text("Total (per "+a+")").class("summary__total-plan").class("text--2").addTo(e.summaryTotal),new m("p").text("+"+w(l,a)).class("summary__total-price").class("heading--7").addTo(e.summaryTotal)}function _(t){if(!(t&&t.length<1))return t.charAt(0).toUpperCase()+t.slice(1)}function g(t,e){let o=t;return e==="yearly"&&(t*=10),"+"+w(o,e)}function w(t,e){const o=[];return o.push("$"),o.push(t),e==="yearly"?o.push("/yr"):o.push("/mo"),o.join("")}class m{constructor(e){this.el=document.createElement(e)}text(e){return this.el.appendChild(document.createTextNode(e)),this}class(e){return this.el.classList.add(e),this}attribute(e,o){return this.el.setAttribute(e,o),this}addTo(e){e.appendChild(this.el)}insertBefore(e,o){e.insertBefore(this.el,o)}}document.getElementById("select-plan__term-toggle");const E=document.getElementById("select-plan__term-toggle-switch");document.getElementById("select-plan__fieldset");S();E.addEventListener("click",t=>{S()});function S(){const t=E.checked?"yearly":"monthly";Array.from(document.querySelectorAll("[data-plan-type]")).forEach(o=>{o.setAttribute("data-plan-type",t)})}const h=document.querySelector("[data-wizard-form]"),T=Array.from(document.querySelector("[data-wizard-steps]").children),i=document.querySelector("[data-wizard-form-next]"),n=document.querySelector("[data-wizard-form-previous]"),r=document.querySelector("[data-wizard-form-finished]"),A=document.querySelector("[data-wizard-form-change]");let c=0;const d=q();d.length>1&&(n==null||n.setAttribute("disabled",!0),r==null||r.setAttribute("disabled",!0));i==null||i.addEventListener("click",t=>{if(c<d.length-1){if(h.reportValidity())h.removeAttribute("data-failed-validation");else{h.setAttribute("data-failed-validation","");return}c+=1,p(c,d)}c===d.length-2&&(i==null||i.setAttribute("disabled",""),r==null||r.removeAttribute("disabled"),r==null||r.focus()),c===d.length-1&&(i==null||i.setAttribute("disabled",""),r==null||r.setAttribute("disabled",""),n==null||n.setAttribute("disabled","")),c===1&&(n==null||n.removeAttribute("disabled"))});n==null||n.addEventListener("click",t=>{c>0&&(c-=1,p(c,d)),c===0&&(n==null||n.setAttribute("disabled",""),i.focus()),c===d.length-2&&(i==null||i.setAttribute("disabled",""),r==null||r.removeAttribute("disabled")),c===d.length-3&&(r==null||r.setAttribute("disabled",""),i==null||i.removeAttribute("disabled"))});r==null||r.addEventListener("click",t=>{c<d.length-1&&(c+=1,i==null||i.setAttribute("disabled",""),n==null||n.setAttribute("disabled",""),r==null||r.setAttribute("disabled",""),p(c,d))});A==null||A.addEventListener("click",t=>{c=1,p(c,d),r==null||r.setAttribute("disabled",""),i==null||i.removeAttribute("disabled")});p(c,d);function q(){return Array.from(h.children)}function p(t,e){e.forEach((o,a)=>{var s,l;if(a===t){o.style.display="grid";const u=o.getAttribute("data-wizard-form-on-show");(s=o.querySelector("[autofocus]"))==null||s.focus(),u&&((l=window[u])==null||l.call(window))}else o.style.display="none"}),t<T.length&&T.forEach((o,a)=>{a==t?o.setAttribute("aria-current","step"):o.removeAttribute("aria-current")})}function x(){console.log("Wizard Form populate confirmation")}window.wizardFormPopulateConfirmation=x;
//# sourceMappingURL=index-746db83e.js.map