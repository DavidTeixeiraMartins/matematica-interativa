class Lousa {

    constructor(svg) {
        this.svg = svg;
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
