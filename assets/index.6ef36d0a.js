import{r as e,R as t,I as r,a as n,b as a,B as o,C as l,S as s,c,H as i,G as m,T as u,V as p,d as h,L as d,e as E,f,g,h as b}from"./vendor.1899ede7.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const r of e)if("childList"===r.type)for(const e of r.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const w=({name:e,works:r})=>{const n={};for(const t of r)n[t.publisher]?n[t.publisher].push(t.article):n[t.publisher]=[t.article];return t.createElement(c,{minW:"64rem",bg:"brown",borderRadius:"md",padding:"1rem",margin:"0.5rem"},t.createElement(i,{mb:4},e),Object.entries(n).map((([e,r])=>t.createElement(m,{templateColumns:"repeat(2, 1fr)"},t.createElement(u,{fontSize:"xl"},e),t.createElement(c,null,r.map((e=>t.createElement(u,{fontSize:"lg"}," ",e," "))))))))},k=()=>{const[c,i]=e.exports.useState(!1),[m,u]=e.exports.useState(""),[p,h]=e.exports.useState([]);return t.useState([]),t.createElement(t.Fragment,null,t.createElement(r,{size:"md"},t.createElement(n,{bg:"white",color:"black",pr:"4.5rem",type:"text",placeholder:"Enter search",value:m,onChange:e=>u(e.target.value)}),t.createElement(a,{width:"4.5rem"},t.createElement(o,{h:"1.75rem",size:"sm",onClick:e=>(async e=>{i(!0);const t=["https://reporter-link-backend.herokuapp.com","/","journalist","?",isNaN(parseInt(m))?"name":"id","=",m].join(""),r=await fetch(t),n=await r.json();h(n.map((e=>(e=>{const t=[];for(const r of e.work){const e={publisher:r.link.replace("https://","").split("/")[0],article:r.title,link:r.link};t.push(e)}return{name:e.name,works:t}})(e)))),i(!1)})(),color:"darkgrey"},"Search"))),c&&t.createElement(l,{h:"70vh"},t.createElement(s,{w:"8vh",h:"8vh"})),!c&&p.map((e=>t.createElement(w,{name:e.name,works:e.works}))))},y=()=>t.createElement(l,{paddingTop:"20vh",bg:"orange"},t.createElement(p,null,t.createElement(h,null,t.createElement(u,{fontSize:"md"},"Want to see the source code? Have an issue with this website?"," ",t.createElement(d,{href:"https://github.com/Moop204/journa-link-search",color:"blue"},"View on Github."))),t.createElement(i,{as:"h3",size:"lg"},"Contributors"),t.createElement(h,null,t.createElement(E,{href:"https://github.com/Moop204"},"Follow @Moop204"),t.createElement(E,{href:"https://github.com/sengyh"},"Follow @Sengyh"))));function S(){return e.exports.useState(0),t.createElement(f,null,t.createElement(c,{bg:"tomato",width:"100%",height:"100vh"},t.createElement(g,{bg:"tomato",color:"white",columns:1,spacingX:"40px",spacingY:"20px",flexGrow:1},t.createElement(l,null,t.createElement(i,null," Journa-Link Search")),t.createElement(k,null)),t.createElement(y,null)))}b.render(t.createElement(t.StrictMode,null,t.createElement(S,null)),document.getElementById("root"));
