/* empty css                      */import{a as p,S as g,i as n}from"./assets/vendor-C4-ZuMk8.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const h="46890776-0488e2a41df654acea73f1764",y="https://pixabay.com/api/";async function b(o,t=1,s=40){const i={key:h,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:s};try{const{data:e}=await p.get(y,{params:i});return e}catch(e){throw console.error("Error fetching images:",e),e}}function L(o){return o.map(({webformatURL:t,largeImageURL:s,tags:i,likes:e,views:r,comments:a,downloads:m})=>`
      <div class="photo-card">
        <a href="${s}">
          <img src="${t}" alt="${i}" loading="lazy" />
        </a>
        <div class="info">
          <p><b>Likes</b> ${e}</p>
          <p><b>Views</b> ${r}</p>
          <p><b>Comments</b> ${a}</p>
          <p><b>Downloads</b> ${m}</p>
          
        </div>
      </div>
    `).join("")}let c="",l=1;const v=40,d=document.querySelector("#search-form"),u=document.querySelector(".gallery"),f=document.querySelector(".loader");let w=new g(".gallery a");n.settings({position:"topRight",timeout:5e3});d.addEventListener("submit",S);async function S(o){if(o.preventDefault(),c=o.target.elements.searchQuery.value.trim(),!c){n.error({title:"Error",message:"Please enter a search query!"});return}l=1,u.innerHTML="",q();try{const{hits:t,totalHits:s}=await b(c,l,v);if(!t.length){n.warning({title:"No Results",message:"Sorry, there are no images matching your search query."});return}u.innerHTML=L(t),n.success({title:"Success",message:`Found ${s} images!`}),w.refresh(),d.elements.searchQuery.value=""}catch{n.error({title:"Error",message:"Something went wrong!"})}finally{$()}}function q(){f.classList.remove("hidden")}function $(){f.classList.add("hidden")}
//# sourceMappingURL=index.js.map
