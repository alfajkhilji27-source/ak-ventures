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
/* Navbar Scroll Effect */

window.addEventListener("scroll",function(){

const nav=document.querySelector(".navbar");

if(window.scrollY>60){

nav.classList.add("scrolled");

}

else{

nav.classList.remove("scrolled");

}

});
/* Mobile Menu */

const menu=document.getElementById("menu-toggle");

const nav=document.getElementById("nav-menu");

menu.addEventListener("click",()=>{

nav.classList.toggle("active");

if(nav.classList.contains("active")){

menu.innerHTML="✕";

}else{

menu.innerHTML="☰";

}

});
/* ==========================================================
                    SCROLL REVEAL
========================================================== */

const reveals=document.querySelectorAll(".reveal");

function revealSections(){

reveals.forEach(section=>{

const top=section.getBoundingClientRect().top;

const visible=window.innerHeight-120;

if(top<visible){

section.classList.add("active");

}

});

}

window.addEventListener("scroll",revealSections);

revealSections();
document.querySelectorAll(".faq-question").forEach(btn=>{

btn.onclick=function(){

this.parentElement.classList.toggle("active");

}

});
/* =====================================
   AK AI Assistant
===================================== */

const aiBtn = document.getElementById("openAI");
const aiChat = document.getElementById("aiChat");
const closeAI = document.getElementById("closeAI");
const sendBtn = document.getElementById("sendBtn");
const userInput = document.getElementById("userInput");
const chatBody = document.getElementById("chatBody");
const quickBtns = document.querySelectorAll(".quick-btn");

aiBtn.onclick = () => {
    aiChat.style.display = "flex";
};

closeAI.onclick = () => {
    aiChat.style.display = "none";
};

function botReply(text){

let msg = "";

text = text.toLowerCase();

if(text.includes("finance") || text.includes("investment")){

msg="📈 AK Ventures provides financial education, investment awareness and long-term wealth building strategies.";

}

else if(text.includes("health") || text.includes("medical")){

msg="🏥 Our healthcare division focuses on trusted guidance and pharmaceutical experience.";

}

else if(text.includes("real")){

msg="🏢 We help with property consultation, investment opportunities and rental solutions.";

}

else if(text.includes("contact")){

msg=`📞 WhatsApp: +91 9530106832<br>
📧 Email: alfajkhilji27@gmail.com<br>
📷 Instagram: @alfaj__ak`;

}

else if(text.includes("faq")){

msg="❓You can ask me anything about AK Ventures, Finance, Healthcare, Real Estate or Business.";

}

else if(text.includes("partnership")){

msg="🤝 AK Ventures welcomes startups, investors and businesses for strategic partnerships.";

}

else{

msg="🤖 Sorry, I'm still learning. Soon I'll become a real AI Assistant powered by AI.";

}

chatBody.innerHTML += `
<div style="text-align:right;margin:15px 0;">
<div style="display:inline-block;background:#b00000;color:white;padding:12px 18px;border-radius:18px;max-width:80%;">
${text}
</div>
</div>
`;

setTimeout(()=>{

chatBody.innerHTML += `
<div class="bot-message">
${msg}
</div>
`;

chatBody.scrollTop = chatBody.scrollHeight;

},600);

}

sendBtn.onclick=()=>{

if(userInput.value.trim()=="") return;

botReply(userInput.value);

userInput.value="";

};

userInput.addEventListener("keypress",(e)=>{

if(e.key==="Enter"){

sendBtn.click();

}

});

quickBtns.forEach(btn=>{

btn.onclick=()=>{

botReply(btn.innerText);

};

});
