(()=>{"use strict";const e=document.querySelector(".quote"),t=document.querySelector(".author"),o=document.querySelector(".change-quote");function n(){!async function(){const o=`./assets/quotes/quotes-${j}.json`,n=await fetch(o),a=await n.json();let c=Math.floor(Math.random()*a.length);e.innerHTML=`"${a[c].text}"`,t.innerHTML=a[c].author}(),o.addEventListener("click",n)}let a=document.querySelector(".city");async function c(){const e=document.querySelector(".weather-icon"),t=document.querySelector(".temperature"),o=document.querySelector(".weather-description"),n=document.querySelector(".wind"),c=document.querySelector(".humidity"),r=document.querySelector(".weather-error"),l=`https://api.openweathermap.org/data/2.5/weather?q=${a.value}&lang=${j}&appid=7153241524dddce83603c2b94a1ad19c&units=metric`,i=await fetch(l),s=await i.json();try{r&&(r.textContent=""),e.className="weather-icon owf",e.classList.add(`owf-${s.weather[0].id}`),t.textContent=`${H[j].temperature}: ${Math.round(s.main.temp)}°C`,n.textContent=`${H[j].windSpeed}: ${Math.round(s.wind.speed)} ${H[j].windSpeedUnit}`,c.textContent=`${H[j].humidity}: ${Math.round(s.main.humidity)}%`,o.textContent=s.weather[0].description}catch{e.textContent="",t.textContent="",n.textContent="",c.textContent="",o.textContent="",404==s.cod?r.textContent="Error! City not found!":400==s.cod&&(r.textContent="Nothing to geocode!")}}a.addEventListener("change",c),window.addEventListener("beforeunload",(function(){a.value!=H[j].defaultCity&&localStorage.setItem("city",a.value)})),window.addEventListener("load",(function(){localStorage.getItem("city")&&(a.value=localStorage.getItem("city"))}));const r=document.querySelector(".greeting"),l=document.querySelector(".name");function i(){localStorage.setItem("name",l.value)}function s(){localStorage.getItem("name")&&(l.value=localStorage.getItem("name"))}function d(){const e=(new Date).getHours();return["night","morning","afternoon","evening"][Math.floor(e/6)]}function u(){const e=d(),t=`${H[j][e]}`;r.textContent=t,window.addEventListener("beforeunload",i),window.addEventListener("load",s)}function m(){l.placeholder=`${H[j].placeholder}`}let g=k();const h=document.body,p=document.querySelector(".slide-next"),y=document.querySelector(".slide-prev"),f=document.querySelector(".switch-background"),S=document.querySelector(".bgThemeBlock"),v=document.querySelector(".switch-background-theme");document.querySelector(".set-theme-button");let b=localStorage.getItem("bgApi")?+localStorage.getItem("bgApi"):0;const w=d();v.value=localStorage.getItem("theme")??w,f.selectedIndex=b;let L=w;function k(e=20){return Math.floor(Math.random()*e+1)}function q(){switch(b=f.selectedIndex,b){case 0:!function(){const e=new Image,t=g.toString().padStart(2,"0");e.src=`https://raw.githubusercontent.com/olmeor/momentum-backgrounds/main/${d()}/${t}.jpg`,e.onload=()=>{h.style.backgroundImage=`url(${e.src})`}}(),S.classList.contains("disable-block")||S.classList.add("disable-block");break;case 1:!async function(){L=v.value?v.value:w;const e=new Image,t=(window.screen.availWidth,window.screen.availHeight),o=`https://api.unsplash.com/photos/random?orientation=landscape&query=${L??w}&tag_mode=all&client_id=5_cu-PhTl04g5fxrPnaoSP5Qch_SC8ayif3cS-3G5Pw`,n=await fetch(o),a=await n.json();e.src=a.urls.raw+`&h=${t}`,e.onload=()=>{h.style.background=`center/cover rgba(0, 0, 0, 0.5) url(${e.src})`}}(),S.classList.contains("disable-block")&&S.classList.remove("disable-block");break;case 2:!async function(){L=(v.value?v.value:w).replace(/[^0-9a-zа-яё]/gi,",");const e=new Image,t=`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=50923158ad5431f62ff0ef2cee01c12a&tags=${L}&extras=url_l&format=json&nojsoncallback=1`,o=await fetch(t),n=await o.json();e.src=n.photos.photo[k(100)].url_l,e.onload=()=>{h.style.background=`center/cover rgba(0, 0, 0, 0.5) url(${e.src})`}}(),S.classList.contains("disable-block")&&S.classList.remove("disable-block")}}window.addEventListener("beforeunload",(function(){localStorage.setItem("theme",v.value),localStorage.setItem("bgApi",f.selectedIndex)})),window.addEventListener("load",(function(){localStorage.getItem("theme")&&(v.value=localStorage.getItem("theme")),localStorage.getItem("bgApi")&&(f.selectedIndex=localStorage.getItem("bgApi"))}));const E=document.querySelector(".todo-wrapper"),x=document.querySelector(".todo-button"),I=document.querySelector(".todo-close-button"),C=document.querySelector(".todo-input-button"),$=document.querySelector(".todo-input"),M=document.querySelector(".todo-list"),N=document.querySelector(".todo-header");let T="false",A=JSON.parse(localStorage.getItem("todos"))??[];const B=["active","completed","deleted"];function P(){E.classList.toggle("todo-close"),E.classList.toggle("hidden-block")}function _(){if("false"!=T&&A[T].text==$.value&&(A.splice(T,1),T="false"),"false"!=T)return A[T].text=$.value,T="false",void D();const e={text:$.value,status:"active",id:`${Math.random()}`};A.push(e),D()}function D(){$.value="";let e="";A.forEach((t=>{B[N.selectedIndex]==t.status&&(e+=`\n        <div class="todo-item">\n          <input id="${t.id}" type="checkbox" class="todoCheckbox disable-block" value="active">\n          <span class="todo-text" contentEditable="false">${t.text}</span>\n          <div class="todo-buttons-wrapper">\n            <button class="todo-item-done"></button>\n            <button class="todo-item-edit"></button>\n            <button  class="todo-item-delete"></button>\n          </div>\n        </div>\n      `)})),M.innerHTML=e,localStorage.setItem("todos",JSON.stringify(A))}x.addEventListener("click",P),I.addEventListener("click",P),C.addEventListener("click",_),$.addEventListener("keypress",(function(e){"Enter"!==e.code&&"NumpadEnter"!==e.code||(_(),e.preventDefault())})),N.addEventListener("change",(e=>{D()})),M.addEventListener("click",(e=>{var t;e.target.classList.contains("todo-item-delete")&&function(e){for(let t=0;t<A.length;t++){if(A[t].id===e&&"deleted"!=A[t].status)return A[t].status="deleted",void D();if(A[t].id===e&&"deleted"==A[t].status)return A.splice(t,1),void D()}}(e.target.parentNode.parentNode.firstElementChild.id),e.target.classList.contains("todo-item-done")&&(t=e.target.parentNode.parentNode.firstElementChild.id,A.forEach((e=>{e.id===t&&(e.status="completed")})),D()),e.target.classList.contains("todo-item-edit")&&function(e){for(let t=0;t<A.length;t++)if(A[t].id===e)return T=t,$.value=A[t].text,A[t].status="active",void $.focus()}(e.target.parentNode.parentNode.firstElementChild.id)}));let j=localStorage.getItem("language")??"en";const H={en:{placeholder:"[Enter name]",night:"Good night,",morning:"Good morning,",afternoon:"Good afternoon,",evening:"Good evening,",temperature:"Temperature",windSpeed:"Wind speed",windSpeedUnit:"m/s",humidity:"Humidity",dataLanguage:"en-EN",defaultCity:"Minsk",language:"Change language",time:"Time",date:"Date",greeting:"Greeting",quotes:"Quotes",weather:"Weather",audioPlayer:"Audio player",background:"Background",bgPlaceholder:"Enter the theme",todoActive:"Active",todoCompleted:"Completed",todoDeleted:"Deleted",todoPlaceholder:"New todo"},ru:{placeholder:"[Введите имя]",night:"Доброй ночи,",morning:"Доброе утро,",afternoon:"Добрый день,",evening:"Добрый вечер,",temperature:"Температура",windSpeed:"Скорость ветра",windSpeedUnit:"м/с",humidity:"Влажность",dataLanguage:"ru-RU",defaultCity:"Минск",language:"Изменить язык",time:"Время",date:"Дата",greeting:"Приветствие",quotes:"Цитаты",weather:"Погода",audioPlayer:"Аудио плеер",background:"Фон",bgPlaceholder:"Введите тему",todoActive:"Список дел",todoCompleted:"Завершенные",todoDeleted:"Удаленные",todoPlaceholder:"Новая задача"}};function J(){j="en"==j?"ru":"en",n(),m(),v.placeholder=`${H[j].bgPlaceholder}`,$.placeholder=`${H[j].todoPlaceholder}`,N.options[0].text=`${H[j].todoActive}`,N.options[1].text=`${H[j].todoCompleted}`,N.options[2].text=`${H[j].todoDeleted}`,a.value=localStorage.getItem("city")?a.value=localStorage.getItem("city"):a.value=H[j].defaultCity,c()}const O=document.querySelector(".date"),G=function(){const e=(new Date).toLocaleDateString(H[j].dataLanguage,{weekday:"long",month:"long",day:"numeric"});O.textContent=e},W=document.querySelector(".time"),U=[{title:"ME - Vigil",src:"https://raw.githubusercontent.com/olmeor/momentum-backgrounds/sounds/ME-Vigil.mp3",duration:104},{title:"ME - Uncharted Worlds",src:"https://raw.githubusercontent.com/olmeor/momentum-backgrounds/sounds/ME-Uncharted_Worlds.mp3",duration:224},{title:"ME2 - Afterlife",src:"https://raw.githubusercontent.com/olmeor/momentum-backgrounds/sounds/ME2-Afterlife.mp3",duration:297},{title:"ME2 - New Worlds",src:"https://raw.githubusercontent.com/olmeor/momentum-backgrounds/sounds/ME2-New_Worlds.mp3",duration:150},{title:"ME2 - The Illusive Man",src:"https://raw.githubusercontent.com/olmeor/momentum-backgrounds/sounds/ME2-The_Illusive_Man.mp3",duration:142},{title:"ME3 - Leaving Earth",src:"https://raw.githubusercontent.com/olmeor/momentum-backgrounds/sounds/ME3-Leaving_Earth.mp3",duration:122},{title:"ME3 - Das Malefitz",src:"https://raw.githubusercontent.com/olmeor/momentum-backgrounds/sounds/ME3-Das_Malefitz.mp3",duration:252}],z=new Audio,Q=document.querySelector(".play"),V=document.querySelector(".play-next"),R=document.querySelector(".play-prev"),F=document.querySelector(".play-list"),K=document.querySelector(".play-title"),X=document.querySelector(".vol-mute"),Y=document.querySelector(".progress-bar"),Z=document.querySelector(".vol-line"),ee=document.querySelector(".play-current-time"),te=document.querySelector(".play-duration-time");let oe,ne,ae=!1,ce=0,re=[],le=0;function ie(){const e=document.querySelectorAll("li.item-active");var t,o;e.length&&e[0].classList.remove("item-active"),ne.forEach((e=>{e.classList.contains("play-item-pause")&&e.classList.remove("play-item-pause")})),z.src=U[ce].src,z.currentTime=le,t=U[ce].duration,te.innerHTML=ge(t),ae?(ae=!1,z.pause()):(ae=!0,z.play(),z.volume=Z.value/100,re[ce].classList.add("item-active"),ne[ce].classList.add("play-item-pause"),he()),o=U[ce].title,K.textContent=o}function se(){Q.classList.add("pause")}function de(){ce==U.length-1?ce=0:ce++,ae=!1,le=0,se(),ie()}function ue(){z.volume=Z.value/100}function me(e){const{currentTime:t,duration:o}=e.target,n=t/o*100;isNaN(n)||(le=t,Y.value=n)}function ge(e){let t,o,n,a;return t=Math.floor(e/60),o=Math.floor(e%60),n=t<10?"0"+String(t):String(t),a=o<10?"0"+String(o):String(o),`${n}:${a}`}function he(){ee.innerHTML=ge(le),setTimeout(he,500)}const pe=document.querySelector(".settings-button"),ye=document.querySelector(".settings-form"),fe=document.querySelector(".settings-wrapper"),Se=document.querySelectorAll(".checkbox"),ve=document.querySelector(".time"),be=document.querySelector(".date"),we=document.querySelector(".greeting-container"),Le=document.querySelector(".quote-wrapper"),ke=document.querySelector(".player"),qe=document.querySelector(".weather");let Ee,xe={languageButton:!1,timeBlock:!0,dateBlock:!0,greetingBlock:!0,quotesBlock:!0,playerBlock:!0,weatherBlock:!0};function Ie(){ye.classList.toggle("settings-open"),ye.classList.toggle("hidden-block"),fe.classList.toggle("settings-menu-shadow")}function Ce(e){switch(e){case"languageButton":J(),$e();break;case"timeBlock":ve.classList.toggle("hidden-block");break;case"dateBlock":be.classList.toggle("hidden-block");break;case"greetingBlock":we.classList.toggle("hidden-block");break;case"quotesBlock":Le.classList.toggle("hidden-block");break;case"playerBlock":ke.classList.toggle("hidden-block");break;case"weatherBlock":qe.classList.toggle("hidden-block")}}function $e(){document.querySelector(".setting-lang").textContent=`${H[j].language}`,document.querySelector(".setting-time").textContent=`${H[j].time}`,document.querySelector(".setting-date").textContent=`${H[j].date}`,document.querySelector(".setting-greeting").textContent=`${H[j].greeting}`,document.querySelector(".setting-quotes").textContent=`${H[j].quotes}`,document.querySelector(".setting-weather").textContent=`${H[j].weather}`,document.querySelector(".setting-audio").textContent=`${H[j].audioPlayer}`,document.querySelector(".setting-bg").textContent=`${H[j].background}`}window.addEventListener("beforeunload",(function(){localStorage.setItem("settings",JSON.stringify(Ee))})),window.addEventListener("load",(function(){localStorage.getItem("settings")&&(Ee=JSON.parse(localStorage.getItem("settings")))})),function e(){const t=(new Date).toLocaleTimeString("en-GB");W.textContent=t,setTimeout(e,1e3),setTimeout(G,1e3),setTimeout(u,1e3)}(),G(),u(),m(),localStorage.getItem("name")&&(l.value=localStorage.getItem("name")),q(),p.addEventListener("click",(function(){20==g?g=1:g++,q()})),y.addEventListener("click",(function(){1==g?g=20:g--,q()})),f.addEventListener("change",(e=>{q()})),v.addEventListener("change",(e=>{q()})),U.forEach((e=>{const t=document.createElement("li");t.classList.add("play-item");const o=document.createElement("span");o.classList.add("play-item-text"),t.append(o),o.textContent=e.title,F.append(t);const n=document.createElement("span");n.classList.add("play"),n.classList.add("play-item-btn"),t.append(n)})),re=document.querySelectorAll(".play-item"),ne=document.querySelectorAll(".play-item-btn"),function(){for(let e=0;e<ne.length;e++)ne[e].addEventListener("click",(function(){e==ce&&ae?(ae=!0,le=z.currentTime,ie(),se()):(e!=ce&&(le=0),ne.forEach((e=>e.classList.remove("play-item-pause"))),ne[e].classList.add("play-item-pause"),ce=e,ae=!1,ie(),se())}))}(),Q.addEventListener("click",ie),Q.addEventListener("click",(function(){Q.classList.toggle("pause")})),V.addEventListener("click",de),R.addEventListener("click",(function(){0==ce?U.length:ce--,ae=!1,le=0,se(),ie()})),z.addEventListener("ended",de),X.addEventListener("click",(function(){Z.value>0?(oe=Z.value,Z.value=0,X.classList.add("mute-icon"),ue()):(Z.value=oe,X.classList.remove("mute-icon"),ue())})),Z.addEventListener("change",ue),Y.addEventListener("change",(function(){const e=z.duration;isNaN(e)||(z.currentTime=Y.value/100*e),z.addEventListener("timeupdate",me)})),z.addEventListener("timeupdate",me),Y.oninput=function(){z.removeEventListener("timeupdate",me)},function(){"null"!=localStorage.getItem("settings")&&"undefined"!=localStorage.getItem("settings")||localStorage.setItem("settings",JSON.stringify(xe)),localStorage.getItem("settings")?Ee=JSON.parse(localStorage.getItem("settings")):(Ee=xe,localStorage.setItem("settings",JSON.stringify(Ee)));for(let e=0;e<7;e++)Se[e].checked=Ee[Se[e].name],Se[e].checked||Ce(Se[e].name);localStorage.setItem("settings",JSON.stringify(Ee))}(),$e(),pe.addEventListener("click",Ie),fe.addEventListener("click",(e=>{e.target===fe&&Ie()})),ye.addEventListener("change",(e=>{!function(){for(let e=0;e<7;e++)Se[e].checked!=Ee[Se[e].name]&&(Ee[Se[e].name]=!Ee[Se[e].name],Ce(Se[e].name))}()})),n(),D()})();