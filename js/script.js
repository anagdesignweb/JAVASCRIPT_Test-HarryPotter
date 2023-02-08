
window.onload=inicio;

// let test=[
//     {pregunta1: "1. ¿En qué año murieron Lily and James Potter?", r1:"1990"},
//     {pregunta1: "2. ¿Qué palabra en inglés de Harry Potter forma parte ahora del Oxford English Dictionary?", r1:"muggle"},
//     {pregunta1: "3. ¿De qué color es la bebida de la desesperación que Dumbledore debe beber?", r1:"azul"}
// ];
let test2=[
    {pregunta: "¿En qué año murieron Lily and James Potter?", r1:"1990", r2:"1988",r3:"1955",solucion:"1990"},
    {pregunta: "¿Qué palabra en inglés de Harry Potter forma parte ahora del Oxford English Dictionary?", r1:"Muggle", r2:"Voldemort",r3:"Hobgoblin",solucion:"Muggle"},
    {pregunta: "¿De qué color es la bebida de la desesperación que Dumbledore debe beber?", r1:"Azul", r2:"Amarillo",r3:"verde",solucion:"verde"},
    {pregunta: "¿Por qué Tom Riddle se llama a sí mismo Voldemort?", r1:"Porque es su nombre de nacimento", r2:"Era el nombre de su padre",r3:"Es un anagrama",solucion:"Es un anagrama"},
    {pregunta: "¿Quién fue el primero en ser paralizado por el basilisco?", r1:"Señora Norris", r2:"Ginny Weasley",r3:"Hermione Granger",solucion:"Señora Norris"},
    {pregunta: "¿Cuál era el séptimo Horcrux de Voldemort?", r1:"La copa", r2:"La diadema",r3:"Harry Potter",solucion:"Harry Potter"},
    {pregunta: "¿Quiénes son los tíos muggles con los que Harry debe vivir cada verano?", r1:"Jennifer y Peter Dingleweed", r2:"Vernon y Petunia Dursley",r3:"Lily y Sirius Dudley",solucion:"Vernon y Petunia Dursley"},
    {pregunta: "¿Cuáles son las 3 maldiciones imperdonables?", r1:"Impedimenta, incarcerous e Incendio", r2:"Avada Kedavra, Crucio e imperio",r3:"Expelliarmus, Expecto Patronum y Diffindo",solucion:"Avada Kedavra, Crucio e imperio"},
    {pregunta: "¿Qué le regala Lavander a Ron en navidad?", r1:"Un colgante", r2:"Una varita",r3:"Una foto",solucion:"Una foto"},
    {pregunta: "¿Qué le deja Dumbledore a Hermione en su testamento?", r1:"Su varita", r2:"Una snich dorada",r3:"Los cuentos de Beedle el Bardo",solucion:"Los cuentos de Beedle el Bardo"},
];
let aciertos=0;
let errores=0;
let preguntaVisible=-1;

function inicio(){
    ocultar(1,"hidden");
    document.querySelector(".iniciarTest").onclick=comenzarTest;
    document.querySelector(".siguiente").onclick=preguntar2;
    document.querySelector(".iniciarTest2").onclick=comenzarTest;
}

function comenzarTest(){
    ocultar(0,"hidden");
    ocultar(1,"visible");
    preguntar2();
}

function ocultar(x,v){
	document.querySelectorAll(".caja")[x].style.visibility=v;
}

function preguntar2(){
    preguntaVisible++;
    if(preguntaVisible<test2.length){
        document.querySelector(".preguntaYrespuestas").innerHTML=
        `<div>${preguntaVisible+1}.${test2[preguntaVisible].pregunta}</div>
        <div><input type="radio" class="pre1" name="pregunta"><label for="pre1">${test2[preguntaVisible].r1}</label></div>
        <div><input type="radio" class="pre2" name="pregunta"><label for="pre2">${test2[preguntaVisible].r2}</label></div>
        <div><input type="radio" class="pre3" name="pregunta"><label for="pre3">${test2[preguntaVisible].r3}</label></div>`;
        for (let k=1; k<4;k++){
            document.querySelector(`.pre${k}`).onclick=evaluar2;
        } 
    } else if (preguntaVisible==test2.length){
        mensajeFinal();
    }

}

function evaluar2(){
    respuestaUsuario=this.parentNode.querySelector("label").innerHTML;

    if(respuestaUsuario==test2[preguntaVisible].solucion){
        aciertos++;
    } else {
        errores++;
    }
    mostrarRespuesta();

}
function mostrarRespuesta(){
    document.querySelector(".cajaAciertos").innerHTML=`La respuesta a la pregunta <strong>${test2[preguntaVisible].pregunta}</strong> ha sido  <strong>${respuestaUsuario}</strong>`;
}

function mensajeFinal(){
    preguntaVisible=-1;
    document.querySelectorAll(".caja")[1].innerHTML=`<div>has acertado ${aciertos} de ${test2.length}</div><button class="iniciarTest2">inténtalo de nuevo!</button>`; 
    if(aciertos>9){
        document.querySelectorAll(".caja")[1].innerHTML+=`<div>Has ganado la copa de las casas! <br> Eres un auténtico FAN!</div>`; 
    } if(aciertos>5){
        document.querySelectorAll(".caja")[1].innerHTML+=`<div>No está nada mal, creo que estas preparado para acompañar a harry en alguna de sus aventuras.</div>`;
    } if(aciertos<5){
        document.querySelectorAll(".caja")[1].innerHTML+=`<div>No has superado las pruebas</div>`;
    }

}