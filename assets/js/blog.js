const hamburger=document.getElementById("hamburger"),navbar=document.getElementById("navbar"),closeBtn=document.getElementById("close-btn"),overlay=document.createElement("div");function openNav(){navbar.classList.add("active"),overlay.style.opacity="1",overlay.style.visibility="visible",document.body.style.overflow="hidden"}function closeNav(){navbar.classList.remove("active"),overlay.style.opacity="0",overlay.style.visibility="hidden",document.body.style.overflow="auto"}overlay.id="menu-overlay",overlay.style.cssText=`
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: rgba(0,0,0,0.45);
  opacity: 0;
  visibility: hidden;
  transition: all 0.4s ease;
  z-index: 999;
`,document.body.appendChild(overlay),hamburger.addEventListener("click",openNav),closeBtn.addEventListener("click",closeNav),overlay.addEventListener("click",closeNav),document.addEventListener("keydown",e=>{"Escape"===e.key&&closeNav()});const typingText=document.querySelector(".typing-text"),words=["Starting your journey","Achieve fitness goals","Feel better every day"];let wordIndex=0,charIndex=0;function typeWords(){var e;typingText&&(e=words[wordIndex],typingText.textContent=e.slice(0,charIndex++),charIndex>e.length?setTimeout(()=>eraseWord(),1e3):setTimeout(typeWords,100))}function eraseWord(){var e=words[wordIndex];typingText.textContent=e.slice(0,--charIndex),0===charIndex?(wordIndex=(wordIndex+1)%words.length,setTimeout(typeWords,300)):setTimeout(eraseWord,50)}document.addEventListener("DOMContentLoaded",()=>{setTimeout(typeWords,500)});const reveals=document.querySelectorAll(".reveal");function revealOnScroll(){for(var e of reveals){var t=window.innerHeight;e.getBoundingClientRect().top<t-100&&(e.style.opacity=1,e.style.transform="translateY(0)",e.style.transition="all 0.6s ease")}}window.addEventListener("scroll",revealOnScroll),revealOnScroll();
