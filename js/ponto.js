class Ponto {

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    desenhar(svg){

        let ponto = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "circle"
        );

        ponto.setAttribute("cx", this.x);
        ponto.setAttribute("cy", this.y);
        ponto.setAttribute("r", 2);
        ponto.setAttribute("fill", "red");

        svg.appendChild(ponto);
    }

}
