let e,t,n,l=!1,o=!1,s=!1,r=!1,i=0,c=!1;const a="undefined"!=typeof window?window:{},f=a.CSS,u=a.document||{head:{}},p={t:0,l:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,l)=>e.addEventListener(t,n,l),rel:(e,t,n,l)=>e.removeEventListener(t,n,l)},d=(()=>(u.head.attachShadow+"").indexOf("[native")>-1)(),m=e=>Promise.resolve(e),$=(()=>{try{return new CSSStyleSheet,!0}catch(e){}return!1})(),w=(e,t,n)=>{n&&n.map(([n,l,o])=>{const s=e,r=h(t,o),i=y(n);p.ael(s,l,r,i),(t.o=t.o||[]).push(()=>p.rel(s,l,r,i))})},h=(e,t)=>n=>{256&e.t?e.s[t](n):(e.u=e.u||[]).push([t,n])},y=e=>0!=(2&e),b="http://www.w3.org/1999/xlink",v=new WeakMap,g=e=>"sc-"+e,_={},j=e=>"object"==(e=typeof e)||"function"===e,k=(e,t,...n)=>{let l=null,o=null,s=null,r=!1,i=!1,c=[];const a=t=>{for(let n=0;n<t.length;n++)l=t[n],Array.isArray(l)?a(l):null!=l&&"boolean"!=typeof l&&((r="function"!=typeof e&&!j(l))&&(l+=""),r&&i?c[c.length-1].p+=l:c.push(r?M(null,l):l),i=r)};if(a(n),t){t.key&&(o=t.key),t.name&&(s=t.name);{const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter(t=>e[t]).join(" "))}}if("function"==typeof e)return e(null===t?{}:t,c,U);const f=M(e,null);return f.$=t,c.length>0&&(f.h=c),f.v=o,f.g=s,f},M=(e,t)=>({t:0,_:e,p:t,j:null,h:null,$:null,v:null,g:null}),R={},U={forEach:(e,t)=>e.map(L).forEach(t),map:(e,t)=>e.map(L).map(t).map(O)},L=e=>({vattrs:e.$,vchildren:e.h,vkey:e.v,vname:e.g,vtag:e._,vtext:e.p}),O=e=>{const t=M(e.vtag,e.vtext);return t.$=e.vattrs,t.h=e.vchildren,t.v=e.vkey,t.g=e.vname,t},S=(e,t,n,l,o,s)=>{if(n!==l){let i=de(e,t),c=t.toLowerCase();if("class"===t){const t=e.classList,o=C(n),s=C(l);t.remove(...o.filter(e=>e&&!s.includes(e))),t.add(...s.filter(e=>e&&!o.includes(e)))}else if("style"===t){for(const t in n)l&&null!=l[t]||(t.includes("-")?e.style.removeProperty(t):e.style[t]="");for(const t in l)n&&l[t]===n[t]||(t.includes("-")?e.style.setProperty(t,l[t]):e.style[t]=l[t])}else if("key"===t);else if("ref"===t)l&&l(e);else if(i||"o"!==t[0]||"n"!==t[1]){const a=j(l);if((i||a&&null!==l)&&!o)try{if(e.tagName.includes("-"))e[t]=l;else{let o=null==l?"":l;"list"===t?i=!1:null!=n&&e[t]==o||(e[t]=o)}}catch(r){}let f=!1;c!==(c=c.replace(/^xlink\:?/,""))&&(t=c,f=!0),null==l||!1===l?f?e.removeAttributeNS(b,t):e.removeAttribute(t):(!i||4&s||o)&&!a&&(l=!0===l?"":l,f?e.setAttributeNS(b,t,l):e.setAttribute(t,l))}else t="-"===t[2]?t.slice(3):de(a,c)?c.slice(2):c[2]+t.slice(3),n&&p.rel(e,t,n,!1),l&&p.ael(e,t,l,!1)}},x=/\s/,C=e=>e?e.split(x):[],P=(e,t,n,l)=>{const o=11===t.j.nodeType&&t.j.host?t.j.host:t.j,s=e&&e.$||_,r=t.$||_;for(l in s)l in r||S(o,l,s[l],void 0,n,t.t);for(l in r)S(o,l,s[l],r[l],n,t.t)},T=(o,i,c,a)=>{let f,p,d,m=i.h[c],$=0;if(l||(s=!0,"slot"===m._&&(e&&a.classList.add(e+"-s"),m.t|=m.h?2:1)),null!==m.p)f=m.j=u.createTextNode(m.p);else if(1&m.t)f=m.j=u.createTextNode("");else{if(r||(r="svg"===m._),f=m.j=u.createElementNS(r?"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",2&m.t?"slot-fb":m._),r&&"foreignObject"===m._&&(r=!1),P(null,m,r),null!=e&&f["s-si"]!==e&&f.classList.add(f["s-si"]=e),m.h)for($=0;$<m.h.length;++$)p=T(o,m,$,f),p&&f.appendChild(p);"svg"===m._?r=!1:"foreignObject"===f.tagName&&(r=!0)}return f["s-hn"]=n,3&m.t&&(f["s-sr"]=!0,f["s-cr"]=t,f["s-sn"]=m.g||"",d=o&&o.h&&o.h[c],d&&d._===m._&&o.j&&E(o.j,!1)),f},E=(e,t)=>{p.t|=1;const l=e.childNodes;for(let o=l.length-1;o>=0;o--){const e=l[o];e["s-hn"]!==n&&e["s-ol"]&&(H(e).insertBefore(e,W(e)),e["s-ol"].remove(),e["s-ol"]=void 0,s=!0),t&&E(e,t)}p.t&=-2},A=(e,t,l,o,s,r)=>{let i,c=e["s-cr"]&&e["s-cr"].parentNode||e;for(c.shadowRoot&&c.tagName===n&&(c=c.shadowRoot);s<=r;++s)o[s]&&(i=T(null,l,s,e),i&&(o[s].j=i,c.insertBefore(i,W(t))))},D=(e,t,n,l,s)=>{for(;t<=n;++t)(l=e[t])&&(s=l.j,G(l),o=!0,s["s-ol"]?s["s-ol"].remove():E(s,!0),s.remove())},F=(e,t)=>e._===t._&&("slot"===e._?e.g===t.g:e.v===t.v),W=e=>e&&e["s-ol"]||e,H=e=>(e["s-ol"]?e["s-ol"]:e).parentNode,N=(e,t)=>{const n=t.j=e.j,l=e.h,o=t.h,s=t._,i=t.p;let c;null===i?(r="svg"===s||"foreignObject"!==s&&r,"slot"===s||P(e,t,r),null!==l&&null!==o?((e,t,n,l)=>{let o,s,r=0,i=0,c=0,a=0,f=t.length-1,u=t[0],p=t[f],d=l.length-1,m=l[0],$=l[d];for(;r<=f&&i<=d;)if(null==u)u=t[++r];else if(null==p)p=t[--f];else if(null==m)m=l[++i];else if(null==$)$=l[--d];else if(F(u,m))N(u,m),u=t[++r],m=l[++i];else if(F(p,$))N(p,$),p=t[--f],$=l[--d];else if(F(u,$))"slot"!==u._&&"slot"!==$._||E(u.j.parentNode,!1),N(u,$),e.insertBefore(u.j,p.j.nextSibling),u=t[++r],$=l[--d];else if(F(p,m))"slot"!==u._&&"slot"!==$._||E(p.j.parentNode,!1),N(p,m),e.insertBefore(p.j,u.j),p=t[--f],m=l[++i];else{for(c=-1,a=r;a<=f;++a)if(t[a]&&null!==t[a].v&&t[a].v===m.v){c=a;break}c>=0?(s=t[c],s._!==m._?o=T(t&&t[i],n,c,e):(N(s,m),t[c]=void 0,o=s.j),m=l[++i]):(o=T(t&&t[i],n,i,e),m=l[++i]),o&&H(u.j).insertBefore(o,W(u.j))}r>f?A(e,null==l[d+1]?null:l[d+1].j,n,l,i,d):i>d&&D(t,r,f)})(n,l,t,o):null!==o?(null!==e.p&&(n.textContent=""),A(n,null,t,o,0,o.length-1)):null!==l&&D(l,0,l.length-1),r&&"svg"===s&&(r=!1)):(c=n["s-cr"])?c.parentNode.textContent=i:e.p!==i&&(n.data=i)},q=e=>{let t,n,l,o,s,r,i=e.childNodes;for(n=0,l=i.length;n<l;n++)if(t=i[n],1===t.nodeType){if(t["s-sr"])for(s=t["s-sn"],t.hidden=!1,o=0;o<l;o++)if(i[o]["s-hn"]!==t["s-hn"])if(r=i[o].nodeType,""!==s){if(1===r&&s===i[o].getAttribute("slot")){t.hidden=!0;break}}else if(1===r||3===r&&""!==i[o].textContent.trim()){t.hidden=!0;break}q(t)}},B=[],V=e=>{let t,n,l,s,r,i,c=0,a=e.childNodes,f=a.length;for(;c<f;c++){if(t=a[c],t["s-sr"]&&(n=t["s-cr"]))for(l=n.parentNode.childNodes,s=t["s-sn"],i=l.length-1;i>=0;i--)n=l[i],n["s-cn"]||n["s-nr"]||n["s-hn"]===t["s-hn"]||(z(n,s)?(r=B.find(e=>e.k===n),o=!0,n["s-sn"]=n["s-sn"]||s,r?r.M=t:B.push({M:t,k:n}),n["s-sr"]&&B.map(e=>{z(e.k,n["s-sn"])&&(r=B.find(e=>e.k===n),r&&!e.M&&(e.M=r.M))})):B.some(e=>e.k===n)||B.push({k:n}));1===t.nodeType&&V(t)}},z=(e,t)=>1===e.nodeType?null===e.getAttribute("slot")&&""===t||e.getAttribute("slot")===t:e["s-sn"]===t||""===t,G=e=>{e.$&&e.$.ref&&e.$.ref(null),e.h&&e.h.map(G)},I=e=>fe(e).R,J=(e,t,n)=>{const l=I(e);return{emit:e=>K(l,t,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:e})}},K=(e,t,n)=>{const l=new CustomEvent(t,n);return e.dispatchEvent(l),l},Q=(e,t)=>{t&&!e.U&&t["s-p"]&&t["s-p"].push(new Promise(t=>e.U=t))},X=(e,t)=>{if(e.t|=16,!(4&e.t))return Q(e,e.L),Me(()=>Y(e,t));e.t|=512},Y=(e,t)=>{const n=e.s;let l;return t&&(e.t|=256,e.u&&(e.u.map(([e,t])=>le(n,e,t)),e.u=null),l=le(n,"componentWillLoad")),oe(l,()=>Z(e,n,t))},Z=(r,i,c)=>{const a=r.R,f=a["s-rc"];c&&(e=>{const t=e.O,n=e.R,l=t.t,o=((e,t)=>{let n=g(t.S),l=he.get(n);if(e=11===e.nodeType?e:u,l)if("string"==typeof l){let t,o=v.get(e=e.head||e);o||v.set(e,o=new Set),o.has(n)||(t=u.createElement("style"),t.innerHTML=l,e.insertBefore(t,e.querySelector("link")),o&&o.add(n))}else e.adoptedStyleSheets.includes(l)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,l]);return n})(d&&n.shadowRoot?n.shadowRoot:n.getRootNode(),t);10&l&&(n["s-sc"]=o,n.classList.add(o+"-h"),2&l&&n.classList.add(o+"-s"))})(r),((r,i)=>{const c=r.R,a=r.O,f=r.C||M(null,null),m=(e=>e&&e._===R)(i)?i:k(null,null,i);if(n=c.tagName,a.P&&(m.$=m.$||{},a.P.map(([e,t])=>m.$[t]=c[e])),m._=null,m.t|=4,r.C=m,m.j=f.j=c.shadowRoot||c,e=c["s-sc"],t=c["s-cr"],l=d&&0!=(1&a.t),o=!1,N(f,m),p.t|=1,s){let e,t,n,l,o,s;V(m.j);let r=0;for(;r<B.length;r++)e=B[r],t=e.k,t["s-ol"]||(n=u.createTextNode(""),n["s-nr"]=t,t.parentNode.insertBefore(t["s-ol"]=n,t));for(r=0;r<B.length;r++)if(e=B[r],t=e.k,e.M){for(l=e.M.parentNode,o=e.M.nextSibling,n=t["s-ol"];n=n.previousSibling;)if(s=n["s-nr"],s&&s["s-sn"]===t["s-sn"]&&l===s.parentNode&&(s=s.nextSibling,!s||!s["s-nr"])){o=s;break}(!o&&l!==t.parentNode||t.nextSibling!==o)&&t!==o&&(!t["s-hn"]&&t["s-ol"]&&(t["s-hn"]=t["s-ol"].parentNode.nodeName),l.insertBefore(t,o))}else 1===t.nodeType&&(t.hidden=!0)}o&&q(m.j),p.t&=-2,B.length=0})(r,ee(i)),r.t&=-17,r.t|=2,f&&(f.map(e=>e()),a["s-rc"]=void 0);{const e=a["s-p"],t=()=>te(r);0===e.length?t():(Promise.all(e).then(t),r.t|=4,e.length=0)}},ee=e=>{try{e=e.render()}catch(t){me(t)}return e},te=e=>{const t=e.R,n=e.s,l=e.L;64&e.t?le(n,"componentDidUpdate"):(e.t|=64,se(t),le(n,"componentDidLoad"),e.T(t),l||ne()),e.U&&(e.U(),e.U=void 0),512&e.t&&ke(()=>X(e,!1)),e.t&=-517},ne=()=>{se(u.documentElement),p.t|=2,ke(()=>K(a,"appload",{detail:{namespace:"peculiar"}}))},le=(e,t,n)=>{if(e&&e[t])try{return e[t](n)}catch(l){me(l)}},oe=(e,t)=>e&&e.then?e.then(t):t(),se=e=>e.classList.add("hydrated"),re=(e,t,n)=>{if(t.A){e.watchers&&(t.D=e.watchers);const l=Object.entries(t.A),o=e.prototype;if(l.map(([e,[l]])=>{(31&l||2&n&&32&l)&&Object.defineProperty(o,e,{get(){return((e,t)=>fe(this).F.get(t))(0,e)},set(n){((e,t,n,l)=>{const o=fe(this),s=o.F.get(t),r=o.t,i=o.s;if(n=((e,t)=>null==e||j(e)?e:4&t?"false"!==e&&(""===e||!!e):2&t?parseFloat(e):1&t?e+"":e)(n,l.A[t][0]),!(8&r&&void 0!==s||n===s)&&(o.F.set(t,n),i)){if(l.D&&128&r){const e=l.D[t];e&&e.map(e=>{try{i[e](n,s,t)}catch(l){me(l)}})}2==(18&r)&&X(o,!1)}})(0,e,n,t)},configurable:!0,enumerable:!0})}),1&n){const n=new Map;o.attributeChangedCallback=function(e,t,l){p.jmp(()=>{const t=n.get(e);this[t]=(null!==l||"boolean"!=typeof this[t])&&l})},e.observedAttributes=l.filter(([e,t])=>15&t[0]).map(([e,l])=>{const o=l[1]||e;return n.set(o,e),512&l[0]&&t.P.push([e,o]),o})}}return e},ie=(e,t={})=>{const n=[],l=t.exclude||[],o=a.customElements,s=u.head,r=s.querySelector("meta[charset]"),i=u.createElement("style"),c=[];let f,m=!0;Object.assign(p,t),p.l=new URL(t.resourcesUrl||"./",u.baseURI).href,t.syncQueue&&(p.t|=4),e.map(e=>e[1].map(t=>{const s={t:t[0],S:t[1],A:t[2],W:t[3]};s.A=t[2],s.W=t[3],s.P=[],s.D={},!d&&1&s.t&&(s.t|=8);const r=s.S,i=class extends HTMLElement{constructor(e){super(e),pe(e=this,s),1&s.t&&(d?e.attachShadow({mode:"open"}):"shadowRoot"in e||(e.shadowRoot=e))}connectedCallback(){f&&(clearTimeout(f),f=null),m?c.push(this):p.jmp(()=>(e=>{if(0==(1&p.t)){const t=fe(e),n=t.O,l=()=>{};if(1&t.t)w(e,t,n.W);else{t.t|=1,12&n.t&&(e=>{const t=e["s-cr"]=u.createComment("");t["s-cn"]=!0,e.insertBefore(t,e.firstChild)})(e);{let n=e;for(;n=n.parentNode||n.host;)if(n["s-p"]){Q(t,t.L=n);break}}n.A&&Object.entries(n.A).map(([t,[n]])=>{if(31&n&&e.hasOwnProperty(t)){const n=e[t];delete e[t],e[t]=n}}),ke(()=>(async(e,t,n,l,o)=>{if(0==(32&t.t)){t.t|=32;{if((o=we(n)).then){const e=()=>{};o=await o,e()}o.isProxied||(n.D=o.watchers,re(o,n,2),o.isProxied=!0);const e=()=>{};t.t|=8;try{new o(t)}catch(i){me(i)}t.t&=-9,t.t|=128,e()}const e=g(n.S);if(!he.has(e)&&o.style){const t=()=>{};let l=o.style;8&n.t&&(l=await __sc_import_peculiar("./p-de803772.js").then(t=>t.scopeCss(l,e,!1))),((e,t,n)=>{let l=he.get(e);$&&n?(l=l||new CSSStyleSheet,l.replace(t)):l=t,he.set(e,l)})(e,l,!!(1&n.t)),t()}}const s=t.L,r=()=>X(t,!0);s&&s["s-rc"]?s["s-rc"].push(r):r()})(0,t,n))}l()}})(this))}disconnectedCallback(){p.jmp(()=>(()=>{if(0==(1&p.t)){const e=fe(this),t=e.s;e.o&&(e.o.map(e=>e()),e.o=void 0),le(t,"componentDidUnload")}})())}forceUpdate(){(()=>{{const e=fe(this);e.R.isConnected&&2==(18&e.t)&&X(e,!1)}})()}componentOnReady(){return fe(this).H}};s.N=e[0],l.includes(r)||o.get(r)||(n.push(r),o.define(r,re(i,s,1)))})),i.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",i.setAttribute("data-styles",""),s.insertBefore(i,r?r.nextSibling:s.firstChild),m=!1,c.length?c.map(e=>e.connectedCallback()):p.jmp(()=>f=setTimeout(ne,30))},ce=e=>{const t=new URL(e,p.l);return t.origin!==a.location.origin?t.href:t.pathname},ae=new WeakMap,fe=e=>ae.get(e),ue=(e,t)=>ae.set(t.s=e,t),pe=(e,t)=>{const n={t:0,R:e,O:t,F:new Map};return n.H=new Promise(e=>n.T=e),e["s-p"]=[],e["s-rc"]=[],w(e,n,t.W),ae.set(e,n)},de=(e,t)=>t in e,me=e=>console.error(e),$e=new Map,we=e=>{const t=e.S.replace(/-/g,"_"),n=e.N,l=$e.get(n);return l?l[t]:__sc_import_peculiar(`./${n}.entry.js`).then(e=>($e.set(n,e),e[t]),me)},he=new Map,ye=[],be=[],ve=[],ge=(e,t)=>n=>{e.push(n),c||(c=!0,t&&4&p.t?ke(je):p.raf(je))},_e=(e,t)=>{let n=0,l=0;for(;n<e.length&&(l=performance.now())<t;)try{e[n++](l)}catch(o){me(o)}n===e.length?e.length=0:0!==n&&e.splice(0,n)},je=()=>{i++,(e=>{for(let n=0;n<e.length;n++)try{e[n](performance.now())}catch(t){me(t)}e.length=0})(ye);{const e=2==(6&p.t)?performance.now()+14*Math.ceil(.1*i):1/0;_e(be,e),_e(ve,e),be.length>0&&(ve.push(...be),be.length=0),(c=ye.length+be.length+ve.length>0)?p.raf(je):i=0}},ke=e=>m().then(e),Me=ge(be,!0),Re=()=>f&&f.supports&&f.supports("color","var(--c)")?m():__sc_import_peculiar("./p-9f8c4bca.js").then(()=>(p.q=a.__cssshim)?(!1).i():0),Ue=()=>{p.q=a.__cssshim;const e=Array.from(u.querySelectorAll("script")).find(e=>/\/peculiar(\.esm)?\.js($|\?|#)/.test(e.src)||"peculiar"===e.getAttribute("data-stencil-namespace")),t=e["data-opts"]||{};return"onbeforeload"in e&&!history.scrollRestoration?{then(){}}:(t.resourcesUrl=new URL(".",new URL(e.getAttribute("data-resources-url")||e.src,a.location.href)).href,Le(t.resourcesUrl,e),a.customElements?m(t):__sc_import_peculiar("./p-2b669725.js").then(()=>t))},Le=(e,t)=>{try{a.__sc_import_peculiar=Function("w","return import(w);//"+Math.random())}catch(n){const l=new Map;a.__sc_import_peculiar=n=>{const o=new URL(n,e).href;let s=l.get(o);if(!s){const e=u.createElement("script");e.type="module",e.crossOrigin=t.crossOrigin,e.src=URL.createObjectURL(new Blob([`import * as m from '${o}'; window.__sc_import_peculiar.m = m;`],{type:"application/javascript"})),s=new Promise(t=>{e.onload=()=>{t(a.__sc_import_peculiar.m),e.remove()}}),l.set(o,s),u.head.appendChild(e)}return s}}};export{R as H,Re as a,ie as b,J as c,I as d,ce as g,k as h,Ue as p,ue as r}