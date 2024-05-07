 // questao 1 e 2
let anoInicial = 1930;
let anoFinal = 2022;
let semOlim = [1942, 1946];
let anosOlim = [];


for(let ano = anoInicial; ano <= anoFinal; ano++) {
    if (ano % 4 === 2 && !semOlim.includes(ano)) {
        anosOlim.push(ano);
    }
}
console.log(`A decima sexta copa ocorreu em ${anosOlim[15]}, na França \n`)

// questao 4
console.log(`Ocorrem ${anosOlim.length} copas desde 1930`)


// questao 3
let anoInicial = 1970;
let anoFinal = 2020;
let semOlim = [1942, 1946];
let anosOlim = [];


for(let ano = anoInicial; ano <= anoFinal; ano++) {
    if (ano % 4 === 2 && !semOlim.includes(ano)) {
        anosOlim.push(ano);
    }
}
console.log(anosOlim.length)