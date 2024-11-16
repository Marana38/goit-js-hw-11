/* empty css                      */import{a as m,i,S as p}from"./assets/vendor-Cn7RiZ6s.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const g="46890776-0488e2a41df654acea73f1764",y="https://pixabay.com/api/";async function h(o,t=1,s=40){const a={key:g,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:s};try{const{data:e}=await m.get(y,{params:a});return e}catch(e){throw console.error("Error fetching images:",e),e}}function b(o){return o.map(({webformatURL:t,largeImageURL:s,tags:a,likes:e,views:r,comments:n,downloads:d})=>`
      <div class="photo-card">
        <a href="${s}">
          <img src="${t}" alt="${a}" loading="lazy" />
        </a>
        <div class="info">
          <p><b>Likes</b>: ${e}</p>
          <p><b>Views</b>: ${r}</p>
          <p><b>Comments</b>: ${n}</p>
          <p><b>Downloads</b>: ${d}</p>
          
        </div>
      </div>
    `).join("")}let c="",l=1;const L=40,w=document.querySelector("#search-form"),u=document.querySelector(".gallery"),f=document.querySelector(".loader");w.addEventListener("submit",S);async function S(o){if(o.preventDefault(),c=o.target.elements.searchQuery.value.trim(),!c){i.error({title:"Error",message:"Please enter a search query!"});return}l=1,u.innerHTML="",v();try{const{hits:t,totalHits:s}=await h(c,l,L);if(!t.length){i.warning({title:"No Results",message:"Sorry, there are no images matching your search query."});return}u.innerHTML=b(t),i.success({title:"Success",message:`Found ${s} images!`}),new p(".gallery a").refresh()}catch{i.error({title:"Error",message:"Something went wrong!"})}finally{q()}}function v(){f.style.display="block"}function q(){f.style.display="none"}
//# sourceMappingURL=index.js.map
