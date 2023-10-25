(()=>{"use strict";const n=()=>'\n    \n    <div class="Header__main">\n        <div class="Header__logo">\n            <h1>\n                <a href="/">\n                    Rick and Morty\n                </a>\n            </h1>\n        </div>\n        <div class="Header__nav">\n            <a href="#/about/">\n            About\n            </a>\n        </div>\n    </div>\n    ',a="https://rickandmortyapi.com/api/character/",e=async n=>{const e=n?`${a}${n}`:a;try{const n=await fetch(e);return await n.json()}catch(n){console.log("Fetch Error",n)}},t=()=>location.hash.slice(1).toLocaleLowerCase().split("/")[1]||"/",s=()=>'\n      <div class="Error404">\n        <h2>Error 404</h2>\n      </div>\n    ',i=n=>{if(n.length<=3){return"/"===n?n:"/:id"}return`/${n}`},r={"/":async()=>`\n    <div class="Characters">\n      ${(await e()).results.map((n=>`\n        <article class="Character__item">\n          <a href="#/${n.id}/">\n            <img src="${n.image}" alt="${n.name}">\n            <h2>${n.name}</h2>\n          </a>\n        </article>\n      `)).join("")}\n    </div>\n  `,"/:id":async()=>{const n=t(),a=await e(n);console.log(a.name);return`\n    <div class="Characters__inner">\n      <article class="Characters__card">\n        <img src="${a.image}" alt="${a.name}">\n        </article>\n        <article class="Characters__card-info">\n        <h2>${a.name}</h2>\n        <h3>Episodes: <span>${a.episode.length}</span></h3>\n        <h3>Status: <span>${a.status}</span></h3>\n        <h3>Species: <span>${a.species}</span></h3>\n        <h3>Gender: <span>${a.gender}</span></h3>\n        <h3>Origin: <span>${a.origin.name}</span></h3>\n        <h3>Last Location: ${a.location.name}</h3>\n      </article>\n    </div>\n  `},"/contact":"Contact"},c=async()=>{const a=document.getElementById("header"),e=document.getElementById("content");a.innerHTML=await n();let c=t(),o=await i(c),h=r[o]?r[o]:s;e.innerHTML=await h()};window.addEventListener("DOMContentLoaded",c),window.addEventListener("hashchange",c)})();