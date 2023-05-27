let horas = document.getElementById("horas");
let minutos = document.getElementById("minutos");
let segundos = document.getElementById("segundos");






const relogio = setInterval(function time(){
    let data = new Date();
    let obterHora = data.getHours();
    let obterMinutos = data.getMinutes();
    let obterSegundos = data.getSeconds();
    
    
    horas.textContent = obterHora;
    minutos.textContent = obterMinutos;
    segundos.textContent = obterSegundos;

    if(obterHora === 0) horas.textContent = "00";
    if(obterMinutos === 0) minutos.textContent = "00";
    if(obterSegundos === 0) segundos.textContent = "00";
    
    if(obterHora < 10) horas.textContent = '0' + obterHora;
    if(obterMinutos < 10) minutos.textContent = '0' + obterMinutos;
    if(obterSegundos < 10) segundos.textContent = '0' + obterSegundos;
    

    
})

