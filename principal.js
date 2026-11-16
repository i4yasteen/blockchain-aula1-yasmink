const Blockchain = require('./blockchain');

function imprimirCadeia(cadeia) {
    console.log('\n========== REGISTRO DE ENTREGAS ==========');

    for (const bloco of cadeia) {
        console.log(`Índice: ${bloco.indice}`);
        console.log(`Dados: ${bloco.dados}`);
        console.log(`Hash: ${bloco.hash.slice(0, 10)}...`);
        console.log(`Hash anterior: ${bloco.hashAnterior.slice(0, 10)}...`);
        console.log('------------------------------------------');
    }
}

const registro = new Blockchain();

registro.adicionar('Entrega E-001 para Ji-Paraná: em rota');
registro.adicionar('Entrega E-002 para Porto Velho: saiu para entrega');
registro.adicionar('Entrega E-003 para Ariquemes: entregue');

imprimirCadeia(registro.cadeia);

console.log('\nA cadeia é válida?', registro.ehValida());

console.log('\n========== TESTE DE ERRO ==========');

try {
    registro.adicionar('Oi');
} catch (erro) {
    console.log('Erro ao cadastrar entrega:', erro.message);
}

console.log('\n========== TESTE DE ADULTERAÇÃO ==========');

registro.cadeia[1].dados = 'Entrega E-001 adulterada';

imprimirCadeia(registro.cadeia);

console.log('\nA cadeia continua válida?', registro.ehValida());
