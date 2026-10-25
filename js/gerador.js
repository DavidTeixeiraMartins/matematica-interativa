alert("JavaScript carregado!");
const campo = document.getElementById("funcao");
const botao = document.getElementById("gerar");
const grafico = document.getElementById("grafico");

// Cria uma camada para a curva, sem alterar os eixos.
const camadaCurva = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "g"
);

camadaCurva.setAttribute("transform", "translate(400, 250)");
grafico.appendChild(camadaCurva);

botao.addEventListener("click", function () {
    const expressao = campo.value.trim();

    if (expressao === "") {
        alert("Digite uma função.");
        return;
    }

    try {
        const funcao = math.compile(expressao);
        const pontos = [];

        for (let x = -11; x <= 11; x += 0.05) {
            const y = funcao.evaluate({ x: x });

            if (typeof y !== "number" || !Number.isFinite(y)) {
                continue;
            }

            pontos.push(`${x * 30},${-y * 30}`);
        }

        const curva = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "polyline"
        );

        curva.setAttribute("points", pontos.join(" "));
        curva.setAttribute("fill", "none");
        curva.setAttribute("stroke", "#2563eb");
        curva.setAttribute("stroke-width", "2");

        camadaCurva.replaceChildren(curva);
    } catch (erro) {
        alert("Não foi possível interpretar essa função.");
    }
});
