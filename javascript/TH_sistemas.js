
class Sistemas {
    constructor() {
		this.nombressistemas = [ "", "Por las Tierras Hundidas", "Aventuras en La Marca del Este", "Cronicas de la Marca", "Axis Mundi", "Dungeon Hack", "Tierras Quebradas" ];
        this.sistemas = new Map();
        this.sistemas.set(this.nombressistemas[1], new PlTH());
        this.sistemas.set(this.nombressistemas[2], new AeLMdE());
        this.sistemas.set(this.nombressistemas[3], new CdLM());
        this.sistemas.set(this.nombressistemas[4], new AxM());
        this.sistemas.set(this.nombressistemas[5], new DH());
        this.sistemas.set(this.nombressistemas[6], new TQuebradas());
    }
    
    getSistema(_sistema) {
        return this.sistemas.get(_sistema);
    }
    
    getSistemas() {
        return Array.from(this.sistemas.keys());
    }
    
    seleccionasistema(thelist) {
		var objsistema = null;
		var idx = thelist.selectedIndex;
		if ( idx > 0 ) {
			objsistema=this.getSistema(this.nombressistemas[idx]);
		}
		return objsistema;
	}
}

let sistemas = new Sistemas();
