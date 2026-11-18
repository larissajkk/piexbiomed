
// ===== CRIANDO O MAPA =====

const mapa = L.map('mapa').setView([-25.4284, -49.2733], 12);


// ===== ADICIONANDO OPENSTREETMAP =====

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {

    attribution: '&copy; OpenStreetMap contributors',

    maxZoom: 19

}).addTo(mapa);

// ===== LISTA DE FARMÁCIAS NISSEI =====

const farmacias = [

    {
        nome: "Farmácia Nissei - Bacacheri",
        endereco: "Avenida Prefeito Erasto Gaertner, 387, Bacacheri, Curitiba, PR, Brasil"
    },

    {
        nome: "Farmácia Nissei - Hugo Lange",
        endereco: "Avenida Nossa Senhora da Luz, 1957, Hugo Lange, Curitiba, PR, Brasil"
    },

    {
        nome: "Farmácia Nissei - Bairro Alto",
        endereco: "Rua Alberico Flores Bueno, 863, Bairro Alto, Curitiba, PR, Brasil"
    },

    {
        nome: "Farmácia Nissei - Pilarzinho",
        endereco: "Rua Amaury Lange Silvério, 128, Pilarzinho, Curitiba, PR, Brasil"
    },

    {
        nome: "Farmácia Nissei - Cajuru",
        endereco: "Rua Filipinas, 601, Cajuru, Curitiba, PR, Brasil"
    },

    {
        nome: "Farmácia Nissei - Vista Alegre",
        endereco: "Rua Antônio Grade, 497, Vista Alegre, Curitiba, PR, Brasil"
    },

    {
        nome: "Farmácia Nissei - Santa Felicidade",
        endereco: "Avenida Antônio Escorsin, 535, Santa Felicidade, Curitiba, PR, Brasil"
    },

    {
        nome: "Farmácia Nissei - Jardim das Américas",
        endereco: "Avenida Nossa Senhora de Lourdes, 412, Jardim das Américas, Curitiba, PR, Brasil"
    },

    {
        nome: "Farmácia Nissei - Fazendinha",
        endereco: "Rua Carlos Klemtz, 814, Fazendinha, Curitiba, PR, Brasil"
    },

    {
        nome: "Farmácia Nissei - Guabirotuba",
        endereco: "Avenida Senador Salgado Filho, 1930, Guabirotuba, Curitiba, PR, Brasil"
    },

    {
        nome: "Farmácia Nissei - Tarumã",
        endereco: "Avenida Victor Ferreira do Amaral, 1494, Tarumã, Curitiba, PR, Brasil"
    }

];

// ===== LOCALIZANDO AS FARMÁCIAS =====

async function localizarFarmacias() {

    const localizacoes = [];

    for (const farmacia of farmacias) {

        try {

            const endereco = encodeURIComponent(farmacia.endereco);

            const resposta = await fetch(
                `https://photon.komoot.io/api/?q=${endereco}&limit=1&lat=-25.4284&lon=-49.2733`
            );

            if (!resposta.ok) {
                throw new Error("Erro ao consultar endereço");
            }

            const dados = await resposta.json();

            if (dados.features.length > 0) {

                const coordenadas = dados.features[0].geometry.coordinates;

                const latitude = coordenadas[1];
                const longitude = coordenadas[0];

                const marcador = L.marker([latitude, longitude]).addTo(mapa);

                const linkGoogleMaps =
                    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(farmacia.endereco)}`;

                marcador.bindPopup(`
                    <strong>${farmacia.nome}</strong>
                    <br><br>
                    ${farmacia.endereco}
                    <br><br>
                    <a href="${linkGoogleMaps}" target="_blank" rel="noopener noreferrer">
                        Abrir no Google Maps
                    </a>
                `);

                localizacoes.push([latitude, longitude]);

            }

            // Intervalo entre as consultas

            await new Promise(resolve => setTimeout(resolve, 1000));

        } catch (erro) {

            console.error("Erro ao localizar:", farmacia.nome, erro);

        }

    }

    // Ajustando o zoom para mostrar todas as farmácias encontradas

    if (localizacoes.length > 0) {

        mapa.fitBounds(localizacoes, {
            padding: [30, 30]
        });

    }

}

// Executando a função

localizarFarmacias();
