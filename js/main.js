document.getElementById('player').addEventListener("mouseover",sumarPuntos);


var puntos=0;
var tiempo=30;
var puntosObjetivo=30;
var level = 1;
var centinela = false;

var it = setInterval(restarTiempo,1000);


function sumarPuntos(){
 puntos++;
 document.getElementById("score").innerHTML= "PUNTOS: <b>"+puntos+ "/"+puntosObjetivo+"</b>";
 let ranNum= Math.round(Math.random()*500);
 let ranNum2= Math.round(Math.random()*500);
 document.getElementById("player").style.marginTop=ranNum+"px";
 document.getElementById("player").style.marginLeft=ranNum2+"px";
  if(puntos==puntosObjetivo){
    if(level==2){
        puntosfinales = tiempo*100;
        alert ("Felicidades pasaste el nivel 2, tu puntaje final fue de "+puntosfinales);
        clearInterval(it);
    }else{
    var puntosfinales = tiempo*100;
    alert ("Felicidades ganaste el nivel 1, tu puntaje final fue de "+puntosfinales);
    document.getElementById("Titulo").innerHTML="Level 2";
    clearInterval(it);
    centinela = true;
    tiempo = 15;
    puntos = 0;
    puntosObjetivo = 25;
    level ++; 
    }   
  }
  }



function restarTiempo(){
    tiempo--;
    document.getElementById("time").innerHTML=" Tiempo: "+tiempo+ " ";
    if(tiempo==0){
        alert("Lo siento Perdiste :(");
        tiempo=20;
        puntos=0;
        puntosObjetivo =15
    }
}


