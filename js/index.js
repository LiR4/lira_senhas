const senha = document.getElementById("pass");
const copia = document.getElementById("butao");
const tamanho = document.getElementById("tam");
const maiusc = document.getElementById("maiusc");
const minusc = document.getElementById("minusc");
const number = document.getElementById("number");
const caractere = document.getElementById("especial");
const gene = document.getElementById("gerar");

const listaMaiusc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const listaMinusc = "abcdefghijklmnopqrstuvwxyz";
const numeros = "0123456789";
const caracteres = "!@#$%^&*()_+=";

function InserirMinusc() {
    return listaMinusc[Math.floor(Math.random() * listaMinusc.length)];
}

function InserirMaiusc() {
    return listaMaiusc[Math.floor(Math.random() * listaMaiusc.length)];
}

function inserirNum() {
    return numeros[Math.floor(Math.random() * numeros.length)];
}

function INserirCaracteres() {
    return caracteres[Math.floor(Math.random() * caracteres.length)];
}

function generatePassword() {
    const len = tamanho.value;

    let password = "";

    if (maiusc.checked) {
        password += InserirMaiusc();
    }

    if (minusc.checked) {
        password += InserirMinusc();
    }

    if (number.checked) {
        password += inserirNum();
    }

    if (caractere.checked) {
        password += INserirCaracteres();
    }

    for (let i = password.length; i < len; i++) {
        const x = generateX();
        password += x;
    }

    senha.innerText = password;
}

function generateX() {
    const xs = [];
    if (maiusc.checked) {
        xs.push(InserirMaiusc());
    }

    if (minusc.checked) {
        xs.push(InserirMinusc());
    }

    if (number.checked) {
        xs.push(inserirNum());
    }

    if (caractere.checked) {
        xs.push(INserirCaracteres());
    }

    if (xs.length === 0) return "";

    return xs[Math.floor(Math.random() * xs.length)];
}

gene.addEventListener("click", generatePassword);

copia.addEventListener("click", () => {
    const textarea = document.createElement("textarea");
    const password = senha.innerText;

    if (!password) {
        return;
    }

    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    alert("Senha copiada");
});

function Codigo() {
    window.location.href = "https://youtu.be/ReeXikbxc3I?t=25";
}