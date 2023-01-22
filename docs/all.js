fetch("https://randomuser.me/api/?results=12&inc=name,email,location,cell,dob,picture&nat=gb",{mode:"cors"}).then((e=>e.json())).then((({results:e})=>{const t=e,l=mergeCardList(t);document.getElementById("employees").innerHTML=l;const o=document.getElementsByClassName("employee");clickHandler(o,t);document.querySelector("#searchInput").addEventListener("keyup",searchHandler)})).catch((e=>{console.error("Error:",e);document.querySelector("#employees").textContent=":: Failed to connect to server. Try refreshing the page."}));const createEmployeeCard=(e,t)=>`<li class="employee" id="${t}">\n    <div class="employee__photo"><img src="${e.picture.large}" alt="Profile photo of ${e.name.first} ${e.name.last}"></div>\n    <div class="employee__info">\n        <div class="employee__name">${e.name.first} ${e.name.last}</div>\n        <div class="employee__email"><a href="mailto:${e.email}">${e.email}</a></div>\n        <div class="employee__city">${e.location.city}</div>\n    </div>\n</li>`,mergeCardList=e=>e.map(((e,t)=>createEmployeeCard(e,t))).join(""),clickHandler=(e,t)=>{for(let l=0;l<e.length;l++)e[l].addEventListener("click",(o=>{e[l]===o.target&&showModal(o.target.id,t)}))},createModalCard=(e,t)=>{const{street:l,city:o,state:a,postcode:d}=t[e].location,n=`${l.number} ${l.name}, ${a}, ${d}`,s=t[e].dob.date,c=parseDate(s);return`<div class="modal__photo"><img src="${t[e].picture.large}" alt="Profile photo of employee"></div>\n                <div class="modal__name">${t[e].name.first} ${t[e].name.last}</div>\n                <div class="modal__email"><a href="mailto:${t[e].email}">${t[e].email}</a></div>\n                <div class="modal__city">${o}</div>\n                <hr class="modal__line">\n                <div class="modal__cell">${t[e].cell}</div>\n                <div class="modal__location">${n}</div>\n                <div class="modal__bday">Birthday: ${c}</div>`},parseDate=e=>{const t=e.substr(2,2),l=e.substr(5,2);return`${e.substr(8,2)}/${l}/${t}`},showModal=(e,t)=>{const l=document.querySelector(".modal"),o=document.querySelector("#modalContent");l.style.display="grid";const a=createModalCard(e,t);o.innerHTML=a,closeModalHandler(l),loader(e,t)},closeModalHandler=e=>{e.addEventListener("click",(e=>{const t=document.querySelector(".modal"),l=document.querySelector(".modal__close"),o=document.querySelector("#modalContent");e.target!=t&&e.target!=l||(t.style.display="none",o.innerHTML=defaultModalContent)}))},defaultModalContent='<div class="mock mock__photo"></div>\n<div class="mock mock__name"></div>\n<div class="mock mock__email"></div>\n<div class="mock mock__city"></div>\n<hr class="modal__line">\n<div class="mock mock__cell"></div>\n<div class="mock mock__location"></div>\n<div class="mock mock__bday">',loader=(e,t)=>{const l=document.querySelector(".left-arrow"),o=document.querySelector(".right-arrow"),a=document.querySelector(".modal"),d=()=>{const e="grid"===a.style.display;if(!(0===r)&&e){r--;let e=c[r];const l=createModalCard(e,t);modalContent.innerHTML=l}s(r,c)},n=()=>{const e="grid"===a.style.display;if(!(r===c.length-1)&&e){r++;let e=c[r];const l=createModalCard(e,t);modalContent.innerHTML=l}s(r,c)},s=(e,t)=>{const l=document.querySelector(".left-arrow"),o=document.querySelector(".right-arrow");0===e?l.classList.add("disabled"):l.classList.remove("disabled"),e===t.length-1?o.classList.add("disabled"):o.classList.remove("disabled")},c=[...document.getElementsByClassName("employee")].filter((e=>"none"!==e.style.display)).map((e=>e.id));let r=c.indexOf(e);s(r,c),l.addEventListener("click",d),o.addEventListener("click",n);document.addEventListener("keydown",(e=>{"grid"===a.style.display&&(37===e.keyCode&&d(),39===e.keyCode&&n())}))},searchHandler=e=>{const t=e.target.value.toLowerCase(),l=document.querySelectorAll(".employee");for(let e=0;e<l.length;e++){l[e].querySelector(".employee__name").textContent.toLowerCase().indexOf(t)>-1?l[e].style.display="":l[e].style.display="none"}};