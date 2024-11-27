/*let T = document.querySelector("h1");
T.innerHTML = "Texto kkk";
//T = tittle / PR = paragraph
let PR = document.querySelector("P");
PR.innerHTML = "Escolha um texto... de 1 a 10";*/

let SNL = [];
let MN = 12;
let SN = RNG();
let PT = 1;

// MN = max number / SN = secret number / PT = player tryes

function ST(TG, TXT) {

    let campo = document.querySelector(TG);
    campo.innerHTML = TXT;
    responsiveVoice.speak(TXT, "Brazilian Portuguese Female", {rate:1.2})

}

function SIT() {

    ST("h1", "Texto kkk")
    ST("p", `Escolha um texto... de 1 a ${MN}`)

}

SIT();

// seePN = see player number / ST = show text

function seePN() {

    let PN = document.querySelector("input").value;

    if (PN == SN) {

        let WT = PT > 1? "tentatóvas" : "tetativa";
        //Não é um bug nem um erro de português, e sim uma FEATURE!
        //WT = word tryes / TM = tryes mensage
        let TM = `Parabéns zé! O texto era ${PN}, tu levou ${PT} ${WT}`;
        ST("p",TM);
        document.getElementById("retry").removeAttribute("disabled");

    } else {

        if (PN > SN){

            ST("p","O texto é menor q isso aí...");

        } else {

            ST("p","O texto é maior mano...");

        }
         
        PT ++;
        CC();

    }

}

// RNG = random number generator

function RNG() {

    let SLCN =  parseInt(Math.random() * MN + 1);
    let QSN = SNL.length;

    if (QSN == MN) {

        SNL = [];

    }
    if (SNL.includes(SLCN)){

        return RNG(MN);

    } else {

        SNL.push(SLCN);
        console.log(SNL);
        return SLCN;

    }

}

function CC(){

    PN = document.querySelector("input");
    PN.value = "";
}

function Retry() {

    SIT();
    CC();
    PT = 1;
    SN = RNG(MN);
    document.getElementById("retry").setAttribute("disabled", true)

}