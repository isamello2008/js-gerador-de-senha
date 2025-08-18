const numeroSenha = document.querySelector('.parametro-senha__texto');
let tamanhoSenha = 12; 
numeroSenha.textContent = tamanhoSenha;

const botoes = document.querySelectorAll('.parametro-senha__botao');

botoes[0].onclik = diminuiTamanho;
botoes[1].onclik = aumentaTamanho;

function diminuiTamanho(){
    if (tamanhoSenha > 1){
    tamanhoSenha = tamanhoSenha - 1;
    }
    numeroSenha.textContent = tamanhoSenha;   
}

function aumentaTamanho(){
    if (tamanhoSenha <20){
    tamanhoSenha = tamanhoSenha + 1;
    }
    numeroSenha.textContent = tamanhoSenha;   
}

const campoSenha=document.querySelector('#campoSenha');

const letraMaiscula = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const letrasMinusculas = 'abcdefghijklmnopqrstuvwxyz';
cost numeros = '0123456789';
const simbolos = '!@%*?';




geraSenha();

function geraSenha();{ 
    let alfabeto = '';
    if (checkbox[0].checked){
        alfabeto = alfabeto + letrasMaiusculas;
    }
     if (checkbox[1].checked){
        alfabeto = alfabeto + letrasMinusculas;
    } 
    if (checkbox[2].checked){
        alfabeto = alfabeto + numeros;
    }
    if (checkbox[3].checked){
        alfabeto = alfabeto + simbolos;
    }
    let = senha = '';
    for (let i = 0; i < tamanhoSenha; i++){
        let numeroAleatorio = Math.random() * letrasMaiuscular.length;
        numeroAleatorio = Math.floor(numeroAleatorio);
        
    }
}
