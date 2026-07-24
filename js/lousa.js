class Lousa {

    constructor(elementoSvg) {
        this.svg = elementoSvg;
        this.objetos = [];
    }


    adicionar(objeto) {
        this.objetos.push(objeto);
        objeto.desenhar(this.svg);
    }


    limpar() {
        this.svg.innerHTML = "";
        this.objetos = [];
    }

}
