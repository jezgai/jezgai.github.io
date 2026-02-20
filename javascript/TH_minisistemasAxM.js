
class Sistemas {
    constructor() {
		this.nombressistemas = [ "", "Axis Mundi" ];
        this.sistemas = new Map();
        this.sistemas.set(this.nombressistemas[1], new AxM());
    }
    
    getSistema(_sistema) {
        return this.sistemas.get(_sistema);
    }
    
    getSistemas() {
        return Array.from(this.sistemas.keys());
    }
    
    seleccionasistema(idx) {
		var objsistema = null;
		if ( idx > 0 ) {
			objsistema=this.getSistema(this.nombressistemas[idx]);
		}
		return objsistema;
	}
}

let sistemas = new Sistemas();
