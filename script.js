// Dados para os botões de soluções
const solucoes = [
    { p: "Pragas", s: "Drones identificam focos de pragas, economizando 40% de agrotóxicos." },
    { p: "Água", s: "A hidroponia circula nutrientes na água, gastando 90% menos água que o solo." },
    { p: "Solo", s: "O plantio direto protege a terra com restos vegetais, evitando a erosão." }
];

// Dados para a galeria (o que aparece ao clicar na imagem)
const infosGaleria = {
    drone: { t: "Monitoramento Aéreo", d: "Drones com sensores captam fotos da plantação e mostram onde falta adubo ou água." },
    hidro: { t: "Hidroponia Avançada", d: "Técnica de cultivar plantas sem terra, apenas em água corrente com nutrientes." },
    solar: { t: "Energia Limpa", d: "O uso de placas solares reduz o custo de eletricidade da fazenda e não polui." }
};

// Gerar Botões de Soluções
const box = document.getElementById('lista-problemas');
solucoes.forEach(item => {
    const btn = document.createElement('button');
    btn.innerText = item.p;
    btn.onclick = () => document.getElementById('texto-resposta').innerHTML = `<strong>Dica Técnica:</strong> ${item.s}`;
    box.appendChild(btn);
});

// Mostrar Info da Galeria
function exibirInfo(id) {
    const painel = document.getElementById('info-detalhada');
    document.getElementById('info-titulo').innerText = infosGaleria[id].t;
    document.getElementById('info-texto').innerText = infosGaleria[id].d;
    painel.style.display = 'block';
    painel.scrollIntoView({ behavior: 'smooth' });
}

// Controles de Zoom e Tema
let nivelZoom = 1.0;
function alterarZoom(v) { nivelZoom = (v > 1) ? nivelZoom + 0.05 : nivelZoom - 0.05; document.body.style.zoom = nivelZoom; }
document.getElementById('btn-theme').onclick = () => document.body.classList.toggle('dark-mode');

// Quiz
function verificarQuiz(acertou) {
    const res = document.getElementById('quiz-resultado');
    res.innerText = acertou ? "✅ Correto! A tecnologia evita o desperdício." : "❌ Tente novamente!";
    res.style.color = acertou ? "green" : "red";
}
