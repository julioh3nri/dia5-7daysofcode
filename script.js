// ** Arrays e Coleções
// Arrays são estrutura de dados usadas para armenizar e organizar valores dentro de uma variável, tipo uma lista de mercado. Assim não precisa fazer várias variáveis. Exemplo: 

// let frutas = ["Maçã", "Banana", "Laranja"];
// console.log(frutas); resultado: ["Maçã", "Banana", "Laranja"]

// Exercício do dia 5

let listaDeCompras = {
    Frutas: [],
    Laticínios: [],
    Congelados: [],
    Doces: [],
    Outros: []
};

let categorias = ["frutas", "laticínios", "congelados", "doces", "outros"];
let adicionarMais = true;

while (adicionarMais) {
    let resposta = prompt("Deseja adicionar uma comida à lista de compras? (sim/não)").toLowerCase();
    
    if (resposta === "não") {
        adicionarMais = false;
    } else if (resposta === "sim") {
        let item = prompt("Qual comida deseja adicionar?");
        let categoria = prompt("Em qual categoria essa comida se encaixa? (Frutas, Laticínios, Congelados, Doces, Outros)").toLowerCase();
        
        if (categorias.includes(categoria)) {
            listaDeCompras[categoria.charAt(0).toUpperCase() + categoria.slice(1)].push(item);
        } else {
            listaDeCompras.Outros.push(item);
        }
    } else {
        alert("Por favor, responda apenas com 'sim' ou 'não'.");
    }
}

let resultado = "Lista de compras:\n";
for (let categoria in listaDeCompras) {
    if (listaDeCompras[categoria].length > 0) {
        resultado += `  ${categoria}: ${listaDeCompras[categoria].join(", ")}\n`;
    }
}
alert(resultado);