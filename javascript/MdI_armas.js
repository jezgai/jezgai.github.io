
class Arma {
    constructor(nombre, dano, alcance, precio) {
        this._nombre = nombre;
        this._dano = dano;
        this._alcance = alcance;
        this._precio = precio;
    }

    get nombre() {
        return this._nombre;
    }
    get dano() {
        return this._dano;
    }
    get alcance() {
        return this._alcance;
    }
    get precio() {
        return this._precio;
    }
}

class Armas {
    constructor() {
        this._armasCaC = [];
        this._armasCaC.push(new Arma("Alabarda", 4, "2", 7));
        this._armasCaC.push(new Arma("Espadón", 7, "", 10));
        this._armasCaC.push(new Arma("Daga", 2, "**", 3));
        this._armasCaC.push(new Arma("Espada", 3, "", 6));
        this._armasCaC.push(new Arma("Estoque", 3, "", 6));
        this._armasCaC.push(new Arma("Hacha", 3, "**", 3));
        this._armasCaC.push(new Arma("Hacha a 2 manos", 7, "", 10));
        this._armasCaC.push(new Arma("Látigo", 2, "4", 5));
        this._armasCaC.push(new Arma("Lanza", 3, "20", 3));
        this._armasCaC.push(new Arma("Martillo a 2 manos", 7, "", 10));
        this._armasCaC.push(new Arma("Martillo de guerra", 3, "", 5));
        this._armasCaC.push(new Arma("Maza", 3, "", 5));
        this._armasCaC.push(new Arma("Maza a 2 manos", 7, "", 10));

        this._armasAD = [];
        this._armasAD.push(new Arma("Arcabuz", 6, "20/40", 13));
        this._armasAD.push(new Arma("Arco", 3, "40/80", 4));
        this._armasAD.push(new Arma("Arco largo", 4, "60/120", 8));
        this._armasAD.push(new Arma("Ballesta", 5, "40/80", 8));
        this._armasAD.push(new Arma("Mosquete", 7, "20/40", 50));
        this._armasAD.push(new Arma("Pistola ligera", 4, "10/20", 12));
        this._armasAD.push(new Arma("Pistola pesada", 5, "10/20", 30));
    }

    armaCaC() {
        return this._armasCaC[Comun.random(this._armasCaC.length, 0)];
    }

    armaAD() {
        return this._armasAD[Comun.random(this._armasCaC.length, 0)];
    }
}

