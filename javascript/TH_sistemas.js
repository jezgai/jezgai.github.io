
class Sistemas {
    constructor() {
        this.sistemas = new Map();
        this.sistemas.set("Por las Tierras Hundidas", new PlTH());
        this.sistemas.set("Aventuras en La Marca del Este", new AeLMdE());
        this.sistemas.set("Cronicas de la Marca", new CdLM());
        this.sistemas.set("Axis Mundi", new AxM());
        this.sistemas.set("Dungeon Hack", new DH());
    }
    
    getSistema(_sistema) {
        return this.sistemas.get(_sistema);
    }
    
    getSistemas() {
        return Array.from(this.sistemas.keys());
    }
}

let sistemas = new Sistemas();
