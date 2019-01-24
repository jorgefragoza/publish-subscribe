class ceroParametro {
    constructor(){
    }
};

class unParametro {
    constructor(param1){
        this.param1 = param1;
    }
};

class dosParametro {
    constructor(param1, param2){
        this.param1 = param1;
        this.param2 = param2;
    }
};

class tresParametro {
    constructor(param1, param2, param3) {
        this.param1 = param1;
        this.param2 = param2;
        this.param3 = param3;
    }
}

module.exports.ceroParametro = ceroParametro;
module.exports.unParametro = unParametro;
module.exports.dosParametro = dosParametro;
module.exports.tresParametro = tresParametro;