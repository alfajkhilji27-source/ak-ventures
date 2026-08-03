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
const knowledge = [
{
keywords:["hello","hi","hey","namaste","salam","assalamualaikum"],
reply:"👋 Welcome to AK Ventures! I'm AK AI Assistant. I can help you with Finance, Healthcare, Business, Real Estate, Investment, Partnerships and more."
},

{
keywords:["ak ventures","about","company","who are you"],
reply:"🏢 AK Ventures is a diversified business initiative focused on Finance, Healthcare, Real Estate, Business Consulting and long-term innovation. Our mission is to build trusted solutions for people and businesses."
},

{
keywords:["finance","investment","sip","mutual fund","stock","share market"],
reply:"📈 AK Ventures provides educational guidance on investing, SIPs, mutual funds, stock markets and wealth creation. Investment decisions should always consider your financial goals and risk tolerance."
},

{
keywords:["health","medical","medicine","doctor","healthcare"],
reply:"🏥 We provide healthcare awareness and general medical information. For diagnosis or treatment, always consult a qualified healthcare professional."
},

{
keywords:["real estate","property","plot","land","flat","house"],
reply:"🏢 We assist with property guidance, investment awareness, rental solutions and real estate consultation."
},

{
keywords:["contact","phone","whatsapp","email","instagram"],
reply:"📞 WhatsApp: +91 9530106832<br>📧 Email: alfajkhilji27@gmail.com<br>📷 Instagram: @alfaj__ak"
},

{
keywords:["partnership","collaboration","investor","startup"],
reply:"🤝 AK Ventures welcomes strategic partnerships, startups and investors interested in long-term collaboration."
},

{
keywords:["thank","thanks"],
reply:"😊 You're welcome! I'm always here to help."
}
,
{
keywords:[
"who made you",
"who created you",
"who built you",
"kisne banaya",
"tumhe kisne banaya",
"creator",
"developer"
],

reply:`👨‍💻 I was created exclusively for AK Ventures.

I was designed and developed by <b>Alfaj Khilji</b> to help visitors with finance, healthcare, business, real estate, investments and partnerships. 🚀`
},

{
keywords:[
"who is alfaj",
"alfaj",
"alfaj khilji",
"founder",
"owner",
"ceo",
"who is the founder",
"ak ventures founder",
"founder of ak ventures"
],

reply:`👤 <b>Alfaj Khilji</b> is the Founder of <b>AK Ventures</b>.

His vision is to build a trusted business ecosystem focused on finance, healthcare, real estate, business partnerships and future social impact. 🚀`
}
,
{
keywords:[
"your name",
"what is your name",
"who are you",
"tum kaun ho",
"tumhara naam",
"name"
],

reply:`🤖 My name is <b>AK AI Assistant</b>.

I'm the official virtual assistant of <b>AK Ventures</b>.

I can help you with Finance, Healthcare, Real Estate, Business, Investments, Partnerships and general information about AK Ventures.

How may I assist you today?`
}
,
{
keywords:[
"what can you do",
"help",
"services",
"how can you help",
"kya kar sakte ho",
"madad"
],

reply:`🚀 I can help you with:

📈 Finance & Investments

🏥 Healthcare Information

🏢 Real Estate Guidance

🤝 Business & Partnerships

💼 Startup Ideas

📞 Contact Information

❓ AK Ventures FAQs

Just ask your question and I'll do my best to help you.`
}
];

let found = false;

for (const item of knowledge) {

    for (const key of item.keywords) {

        if (text.includes(key)) {

            msg = item.reply;
            found = true;
            break;

        }

    }

    if (found) break;

}

if (!found) {

msg = `🤖 Sorry, I couldn't find an exact answer.

You can ask me about:

📈 Finance
🏥 Healthcare
🏢 Real Estate
🤝 Business
💼 Investments
📞 Contact
❓ AK Ventures

I'm learning every day to serve you better.`;

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
