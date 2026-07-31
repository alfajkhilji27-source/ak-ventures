document.addEventListener("DOMContentLoaded",()=>{

document.querySelectorAll('a[href^="#"]').forEach(link=>{
 link.addEventListener("click",e=>{
   e.preventDefault();
   const id=link.getAttribute("href");
   const el=document.querySelector(id);
   if(el){
     el.scrollIntoView({behavior:"smooth"});
   }
 });
});

const observer=new IntersectionObserver((entries)=>{
 entries.forEach(entry=>{
   if(entry.isIntersecting){
     entry.target.style.opacity="1";
     entry.target.style.transform="translateY(0)";
   }
 });
},{threshold:0.02});

document.querySelectorAll("section").forEach(sec=>{
 sec.style.opacity="0";
 sec.style.transform="translateY(40px)";
 sec.style.transition="all .45s ease";
 observer.observe(sec);
});

const topBtn=document.createElement("button");
topBtn.innerHTML="↑";
topBtn.id="topBtn";
document.body.appendChild(topBtn);

Object.assign(topBtn.style,{
position:"fixed",
right:"20px",
bottom:"20px",
width:"50px",
height:"50px",
borderRadius:"50%",
border:"none",
cursor:"pointer",
fontSize:"22px",
display:"none",
background:"#d4af37",
color:"#000",
zIndex:"9999"
});

window.addEventListener("scroll",()=>{
 topBtn.style.display=window.scrollY>400?"block":"none";
});

topBtn.onclick=()=>window.scrollTo({top:0,behavior:"smooth"});

});
/* Scroll Progress */

window.addEventListener("scroll",()=>{

const scrollTop=document.documentElement.scrollTop;

const height=document.documentElement.scrollHeight-document.documentElement.clientHeight;

const progress=(scrollTop/height)*100;

document.getElementById("progress-bar").style.width=progress+"%";

});