!function(){var e=document.getElementById("burger-menu"),t=document.getElementById("menu");e.addEventListener("click",(function(){this.classList.toggle("close"),t.classList.toggle("overlay")})),t.addEventListener("click",(function(s){s.target.matches("a"),t.classList.remove("overlay"),e.classList.remove("close")}));var s=0;!function e(){var t,l=document.getElementsByClassName("mySlides");for(t=0;t<l.length;t++)l[t].style.display="none";++s>l.length&&(s=1);l[s-1].style.display="flex",setTimeout(e,4e3)}()}();
//# sourceMappingURL=index.9b50abc0.js.map
