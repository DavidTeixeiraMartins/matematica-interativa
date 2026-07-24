class Circunferencia {

    constructor(centro, raio) {
        this.centro = centro;
        this.raio = raio;
    }

    desenhar(svg) {

        let circulo = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "circle"
        );

        circulo.setAttribute("cx", this.centro.x);
        circulo.setAttribute("cy", this.centro.y);
        circulo.setAttribute("r", this.raio);

        circulo.setAttribute("fill", "none");
        circulo.setAttribute("stroke", "black");

        svg.appendChild(circulo);

        this.centro.desenhar(svg);
    }

}

