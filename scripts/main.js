window.addEventListener("load", nlo);
window.addEventListener("mousemove", pricel);
window.addEventListener("click", pli);
window.addEventListener("load", function() {
    document.getElementById("start").addEventListener("mouseover", start);
});

var i;
var m;
var pri;
var vis=0;
var fin=0;
var p=340;
var stop=0;
var sto;
var wse;
var nach=0;

function start() {
    document.getElementById("start").style.visibility="hidden";
    document.getElementById("ataka").style.visibility="visible";
    document.getElementById("chet").innerHTML="";
    document.getElementById("pif").style.left="45px";
    document.getElementById("pif").innerHTML="Выстрелы - 0";
    vis=0;
    fin=0;
    p=340;
    stop=0;
    nlo();
}

function nlo() {
    i=Math.floor(Math.random() * 600)+10;
    m=Math.floor(Math.random() * 170)+110;
    document.getElementById("nlo").style.left=i+"px";
    document.getElementById("nlo").style.top=m+"px";
    document.getElementById("bah").style.visibility="hidden";
    document.getElementById("nlo").style.visibility="visible";
    document.getElementById("ataka").style.visibility="visible";
    document.getElementById("pif").style.visibility="visible";
    sto=window.setTimeout(nlo, 1500);
}

function pli(event) {
var e=event;
var x=e.clientX;
if(stop==0) {
   if(nach==0) {
      if(685<x) {
      pri=684;
      }
   else if(x<55) {
      pri=57;
    }
   else {
      pri=x-3;
    }
      vis++;
      if(vis==16) {
         window.clearTimeout(sto);
         window.clearTimeout(wse);
         document.getElementById("pif").style.left="30px";
         document.getElementById("chet").innerHTML="ВАС СБИЛИ !";
         document.getElementById("pif").innerHTML="ЭНЕРГИЯ ИСЧЕРПАНА !";
         document.getElementById("ataka").style.visibility="hidden";
         document.getElementById("start").style.visibility="visible";
         stop=1;
      }
      else {
         document.getElementById("torp").style.left=pri+"px";
         document.getElementById("torp").style.visibility="visible";
         document.getElementById("pif").innerHTML="Выстрелы - "+vis;
         nach=1;
         polet();
      }
      }
   }
}

function polet() {
if(p>120) {
   if((p<m)&&(p>m-50)&&(pri<i+105)&&(pri>i))
      {
      window.clearTimeout(sto);
      window.clearTimeout(wse);
      document.getElementById("nlo").style.visibility="hidden";
      document.getElementById("torp").style.visibility="hidden";
      document.getElementById("bah").style.top=m+"px";
      document.getElementById("bah").style.left=i+"px";
      document.getElementById("bah").style.visibility="visible";
      nach=0;
      fin++;
      if(fin==1) {
         document.getElementById("chet").innerHTML="Повреждения НЛО - 20%";
         sto=window.setTimeout(nlo, 1200);
         p=340;
      }
      if(fin==2) {
         document.getElementById("chet").innerHTML="Повреждения НЛО - 40%";
         sto=window.setTimeout(nlo, 1200);
         p=340;
      }
      if(fin==3) {
         document.getElementById("chet").innerHTML="Повреждения НЛО - 60%";
         sto=window.setTimeout(nlo, 1200);
         p=340;
      }
      if(fin==4) {
         document.getElementById("chet").innerHTML="Повреждения НЛО - 80%";
         sto=window.setTimeout(nlo, 1200);
         p=340;
      }
      if(fin==5) {
         document.getElementById("chet").innerHTML="НЛО СБИТ !";
         document.getElementById("ataka").style.visibility="hidden";
         document.getElementById("start").style.visibility="visible";
         stop=1;
      }
      }
   else
      {
      p=p-10;
      document.getElementById("torp").style.top=p+"px";
      wse=window.setTimeout(polet, 20);
      }
   }
else
   {
   document.getElementById("torp").style.visibility="hidden";
   nach=0;
   p=340;
   window.clearTimeout(wse);
   }
}

function pricel(event)
{
var e=event;
var x=e.clientX;
if(687<x)
   {
   document.getElementById("pricel").style.left=662+"px";
   }
else if(x<60)
   {
   document.getElementById("pricel").style.left=35+"px";
   }
else
   {
   document.getElementById("pricel").style.left=event.x-26+"px";
   }
}