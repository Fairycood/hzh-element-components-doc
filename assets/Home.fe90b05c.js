import{u as y,a as F,N as g}from"./app.da7b580f.js";import{_ as m}from"./plugin-vue_export-helper.21dcd24c.js";import{N as v,H as c,Q as e,O as o,P as a,U as _,R as r,T as l,W as x,F as I,a1 as L,a5 as C,C as d,a2 as k}from"./framework.9c1109af.js";const N={key:0,class:"home-hero"},A={key:0,class:"figure"},B=["src","alt"],w={key:1,id:"main-title",class:"title"},V={key:2,class:"tagline"},b=v({__name:"HomeHero",setup(h){const{site:s,frontmatter:t}=y(),i=c(()=>{const{heroImage:n,heroText:u,tagline:H,actionLink:$,actionText:T}=t.value;return n||u||H||$&&T}),p=c(()=>t.value.heroText||s.value.title),f=c(()=>t.value.tagline||s.value.description);return(n,u)=>e(i)?(o(),a("header",N,[e(t).heroImage?(o(),a("figure",A,[_("img",{class:"image",src:e(F)(e(t).heroImage),alt:e(t).heroAlt},null,8,B)])):r("v-if",!0),e(p)?(o(),a("h1",w,l(e(p)),1)):r("v-if",!0),e(f)?(o(),a("p",V,l(e(f)),1)):r("v-if",!0),e(t).actionLink&&e(t).actionText?(o(),x(g,{key:3,item:{link:e(t).actionLink,text:e(t).actionText},class:"action"},null,8,["item"])):r("v-if",!0),e(t).altActionLink&&e(t).altActionText?(o(),x(g,{key:4,item:{link:e(t).altActionLink,text:e(t).altActionText},class:"action alt"},null,8,["item"])):r("v-if",!0)])):r("v-if",!0)}});var D=m(b,[["__scopeId","data-v-370f18c0"]]);const S={key:0,class:"home-features"},E={class:"wrapper"},O={class:"container"},P={class:"features"},Q={key:0,class:"title"},R={key:1,class:"details"},U=v({__name:"HomeFeatures",setup(h){const{frontmatter:s}=y(),t=c(()=>s.value.features&&s.value.features.length>0),i=c(()=>s.value.features?s.value.features:[]);return(p,f)=>e(t)?(o(),a("div",S,[_("div",E,[_("div",O,[_("div",P,[(o(!0),a(I,null,L(e(i),(n,u)=>(o(),a("section",{key:u,class:"feature"},[n.title?(o(),a("h2",Q,l(n.title),1)):r("v-if",!0),n.details?(o(),a("p",R,l(n.details),1)):r("v-if",!0)]))),128))])])])])):r("v-if",!0)}});var W=m(U,[["__scopeId","data-v-e39c13e0"]]);const j={key:0,class:"footer"},q={class:"container"},z={class:"text"},G=v({__name:"HomeFooter",setup(h){const{frontmatter:s}=y();return(t,i)=>e(s).footer?(o(),a("footer",j,[_("div",q,[_("p",z,l(e(s).footer),1)])])):r("v-if",!0)}});var J=m(G,[["__scopeId","data-v-30918238"]]);const K={class:"home","aria-labelledby":"main-title"},M={class:"home-content"},X=v({__name:"Home",setup(h){return(s,t)=>{const i=C("Content");return o(),a("main",K,[d(D),k(s.$slots,"hero",{},void 0,!0),d(W),_("div",M,[d(i)]),k(s.$slots,"features",{},void 0,!0),d(J),k(s.$slots,"footer",{},void 0,!0)])}}});var te=m(X,[["__scopeId","data-v-10122c92"]]);export{te as default};
