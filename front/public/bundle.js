(()=>{var e={989:e=>{e.exports=e=>{e.forEach((e=>{let t=document.getElementById("containerRow"),d=document.createElement("div");d.classList.add("card"),d.classList.add("card-size"),d.classList.add("col");let a=document.createElement("img");a.src=e.poster,a.alt=e.title,a.classList.add("card-img-top");let l=document.createElement("div");l.classList.add("card-body");let s=document.createElement("h5");s.classList.add("card-title"),s.innerHTML=e.title;let i=document.createElement("ul");i.classList.add("list-group"),i.classList.add("list-group-flush");let n=document.createElement("li");n.classList.add("list-group-item"),n.innerHTML=e.director;let c=document.createElement("li");c.classList.add("list-group-item"),c.innerHTML=e.duration;let r=document.createElement("li");r.classList.add("list-group-item"),r.innerHTML=e.genre;let o=document.createElement("span");o.classList.add("badge"),o.classList.add("rounded-pill"),e.rate>=7&&o.classList.add("text-bg-success"),e.rate>=4&&e.rate<7&&o.classList.add("text-bg-warning"),e.rate<4&&o.classList.add("text-bg-danger"),o.innerHTML=e.rate;let p=document.createElement("li");p.classList.add("list-group-item");let m=document.createElement("div");m.classList.add("card-body");let u=document.createElement("a"),L=document.createElement("a");u.classList.add("card-link"),u.innerHTML="Ver",u.href="#",L.classList.add("card-link"),L.innerHTML="Descargar",L.href="#",t.appendChild(d),d.appendChild(a),d.appendChild(l),d.appendChild(i),d.appendChild(m),l.appendChild(s),i.appendChild(n),i.appendChild(c),i.appendChild(r),i.appendChild(p),p.appendChild(o),m.appendChild(u),m.appendChild(L)}))}}},t={};!function d(a){var l=t[a];if(void 0!==l)return l.exports;var s=t[a]={exports:{}};return e[a](s,s.exports,d),s.exports}(989),$.get("https://jsonplaceholder.typicode.com/todos/1",((e,t)=>{console.log(e)}))})();