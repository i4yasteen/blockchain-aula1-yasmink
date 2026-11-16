const Bloco = require('./bloco');

class Blockchain {
    constructor() {
        const genesis = new Bloco(0, 'Bloco gênese da cadeia', '0');

        this.cadeia = [genesis];
    }

    adicionar(dados) {
        const ultimoBloco = this.cadeia[this.cadeia.length - 1];

        const novoBloco = new Bloco(
            this.cadeia.length,
            dados,
            ultimoBloco.hash
        );

        this.cadeia.push(novoBloco);
    }

    ehValida() {
        for (let i = 1; i < this.cadeia.length; i++) {

            const atual = this.cadeia[i];
            const anterior = this.cadeia[i - 1];

            if (atual.hash !== atual.calcularHash()) {
                return false;
            }

            if (atual.hashAnterior !== anterior.hash) {
                return false;
            }
        }

        return true;
    }
}

module.exports = Blockchain;
