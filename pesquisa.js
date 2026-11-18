const terminaisCuritiba = [
    "Centenário", "Bairro Alto", "Campo Comprido", "Boqueirão", "Guadalupe", "Capão Raso", "Boa Vista", 
    "Caiuá", "Hauer", "Santa Felicidade", "Vila Oficinas", "Sítio Cercado", "Rui Barbosa", "Fazendinha", 
    "Barreirinha", "Sites", "CIC", "Carmo", "Pinheirinho", "Campina do Siqueira", "Portão", "Capão da Imbuia",
    "Cabral", "Santa Cândida", "Tatuquara"
];

terminaisCuritiba.sort();

const infoTerminais = {

"Centenário": {
    jan: "JANEIRO: 02/01/2026",
    fev: "FEVEREIRO: 31/01/2026",
    mar: "MARÇO: 02/03/2026",
    abr: "ABRIL: 31/03/2026",
    mai: "MAIO: 02/05/2026",
    jun: "JUNHO: 01/06/2026",
    jul: "JULHO: 01/07/2026", 
    ago: "AGOSTO: 30/07/2026",
    set: "SETEMBRO: 28/08/2026",
    out: "OUTUBRO: 30/09/2026",
    nov: "NOVEMBRO: 30/10/2026",
    dez: "DEZEMBRO: 01/12/2026",
    endereco: "Rua Tailândia, entre as Ruas Lourival Wendler e Manoel Max dos Santos",
    horario: "Horário: 07:30 ás 15:00"
},

"Bairro Alto": {
    jan: "JANEIRO: 03/01/2026",
    fev: "FEVEREIRO: 02/02/2026",
    mar: "MARÇO: 03/03/2026",
    abr: "ABRIL: 01/04/2026",
    mai: "MAIO: 04/05/2026",
    jun: "JUNHO: 02/06/2026",
    jul: "JULHO: 02/07/2026",
    ago: "AGOSTO: 31/07/2026",
    set: "SETEMBRO: 29/08/2026",
    out: "OUTUBRO: 01/10/2026",
    nov: "NOVEMBRO: 31/10/2026",
    dez: "DEZEMBRO: 02/12/2026",
    endereco: "Rua Adílio Ramos, entre as Ruas Jornalista Alceu Chichorro e João Ramalho",
    horario: "Horário: 07:30 ás 15:00"
},

"Campo Comprido": {
    jan: "JANEIRO: 05/01/2026",
    fev: "FEVEREIRO:03/02/2026",
    mar: "MARÇO: 04/03/2026",
    abr: "ABRIL: 02/04/2026",
    mai: "MAIO: 05/05/2026",
    jun: "JUNHO: 03/06/2026",
    jul: "JULHO: 03/07/2026",
    ago: "AGOSTO: 01/08/2026",
    set: "SETEMBRO: 01/09/2026",
    out: "OUTUBRO: 02/10/2026",
    nov: "NOVEMBRO: 03/11/2026",
    dez: "DEZEMBRO: 03/12/2026",
    endereco: "Rua Deputado Heitor de Alencar Furtado, ao lado do terminal",
    horario: "Horário: 07:30 ás 15:00"
},

"BOQUEIRÃO": {
    jan: "JANEIRO: 06/01/2026",
    fev: "FEVEREIRO: 04/02/2026",
    mar: "MARÇO: 05/03/2026",
    abr: "ABRIL: 04/04/2026",
    mai: "MAIO: 06/05/2026",
    jun: "JUNHO: 05/06/2026",
    jul: "JULHO: 04/07/2026",
    ago: "AGOSTO: 03/08/2026",
    set: "SETEMBRO: 02/09/2026",
    out: "OUTUBRO: 03/10/2026",
    nov: "NOVEMBRO: 04/11/2026",
    dez: "DEZEMBRO: 04/12/2026",
    endereco: "Rua Zonardy Ribas, dentro do estacionamento do terminal",
    horario: "Horário: 07:30 ás 15:00"
},

"GUADALUPE": {
    jan: "JANEIRO: 07/01/2026",
    fev: "FEVEREIRO: 05/02/2026",
    mar: "MARÇO: 06/03/2026",
    abr: "ABRIL: 06/04/2026",
    mai: "MAIO: 07/05/2026",
    jun: "JUNHO: 06/06/2026",
    jul: "JULHO: 06/07/2026",
    ago: "AGOSTO: 04/08/2026",
    set: "SETEMBRO: 03/09/2026",
    out: "OUTUBRO: 05/10/2026",
    nov: "NOVEMBRO: 05/11/2026",
    dez: "DEZEMBRO: 05/12/2026",
    endereco: "Praça Senador Correia, ao lado da Igreja Guadalupe",
    horario: "Horário: 07:30 ás 15:00"
},

"CAPÃO RASO": {
    jan: "JANEIRO: 08/01/2026",
    fev: "FEVEREIRO: 06/02/2026",
    mar: "MARÇO: 07/03/2026",
    abr: "ABRIL: 07/04/2026",
    mai: "MAIO: 08/05/2026",
    jun: "JUNHO: 08/06/2026",
    jul: "JULHO: 07/07/2026",
    ago: "AGOSTO: 05/08/2026",
    set: "SETEMBRO: 04/09/2026",
    out: "OUTUBRO: 06/10/2026",
    nov: "NOVEMBRO: 06/11/2026",
    dez: "DEZEMBRO: 07/12/2026",
    endereco: "Av. República Argentina, entre as Ruas Francisco Ader e Gustavo Schier",
    horario: "Horário: 07:30 ás 15:00"
},

"BOA VISTA": {
    jan: "JANEIRO: 09/01/2026",
    fev: "FEVEREIRO: 07/02/2026",
    mar: "MARÇO: 09/03/2026",
    abr: "ABRIL: 08/04/2026",
    mai: "MAIO: 09/05/2026",
    jun: "JUNHO: 09/06/2026",
    jul: "JULHO: 08/07/2026",
    ago: "AGOSTO: 06/08/2026",
    set: "SETEMBRO: 05/09/2026",
    out: "OUTUBRO: 07/10/2026",
    nov: "NOVEMBRO: 07/11/2026",
    dez: "DEZEMBRO: 08/12/2026",
    endereco: "Rua João Havro, entre as Ruas José Merhy e Carlos de Campos",
    horario: "Horário: 07:30 ás 15:00"
},

"CAIUÁ": {
    jan: "JANEIRO: 10/01/2026",
    fev: "FEVEREIRO: 09/02/2026",
    mar: "MARÇO: 10/03/2026",
    abr: "ABRIL: 09/04/2026",
    mai: "MAIO: 11/05/2026",
    jun: "JUNHO: 10/06/2026",
    jul: "JULHO: 09/07/2026",
    ago: "AGOSTO: 07/08/2026",
    set: "SETEMBRO: 09/09/2026",
    out: "OUTUBRO: 08/10/2026",
    nov: "NOVEMBRO: 09/11/2026",
    dez: "DEZEMBRO: 09/12/2026",
    endereco: "Rua Raul Pompéia, entre Ruas Durval Leopoldo Landal e Hilda Cadilhe de Oliveira",
    horario: "Horário: 07:30 ás 15:00"
},

"HAUER": {
    jan: "JANEIRO: 12/01/2026",
    fev: "FEVEREIRO: 10/02/2026",
    mar: "MARÇO: 11/03/2026",
    abr: "ABRIL: 10/04/2026",
    mai: "MAIO: 12/05/2026",
    jun: "JUNHO: 11/06/2026",
    jul: "JULHO: 10/07/2026",
    ago: "AGOSTO: 08/08/2026",
    set: "SETEMBRO: 10/09/2026",
    out: "OUTUBRO: 09/10/2026",
    nov: "NOVEMBRO: 10/11/2026",
    dez: "DEZEMBRO: 10/12/2026",
    endereco: "Rua Alcino Guanabara, esquina com a Rua Anne Frank",
    horario: "Horário: 07:30 ás 15:00"
},

"SANTA FELICIDADE": {
    jan: "JANEIRO: 13/01/2026",
    fev: "FEVEREIRO: 11/02/2026",
    mar: "MARÇO: 12/03/2026",
    abr: "ABRIL: 11/04/2026",
    mai: "MAIO: 13/05/2026",
    jun: "JUNHO: 12/06/2026",
    jul: "JULHO: 11/07/2026",
    ago: "AGOSTO: 10/08/2026",
    set: "SETEMBRO: 11/09/2026",
    out: "OUTUBRO: 10/10/2026",
    nov: "NOVEMBRO: 11/11/2026",
    dez: "DEZEMBRO: 11/12/2026",
    endereco: "Rua Santa Bertilla Boscardin esquina com Via Veneto",
    horario: "Horário: 07:30 ás 15:00"
},

"VILA OFICINAS": {
    jan: "JANEIRO: 14/01/2026",
    fev: "FEVEREIRO: 12/02/2026",
    mar: "MARÇO: 13/03/2026",
    abr: "ABRIL: 13/04/2026",
    mai: "MAIO: 14/05/2026",
    jun: "JUNHO: 13/06/2026",
    jul: "JULHO: 13/07/2026",
    ago: "AGOSTO: 11/08/2026",
    set: "SETEMBRO: 12/09/2026",
    out: "OUTUBRO: 13/10/2026",
    nov: "NOVEMBRO: 12/11/2026",
    dez: "DEZEMBRO: 12/12/2026",
    endereco: "Rua Engenheiro Costa Barros, entre as Ruas Roraima e Cuiabá",
    horario: "Horário: 07:30 ás 15:00"
},

"SÍTIO CERCADO": {
    jan: "JANEIRO: 15/01/2026",
    fev: "FEVEREIRO: 13/02/2026",
    mar: "MARÇO: 14/03/2026",
    abr: "ABRIL: 14/04/2026",
    mai: "MAIO: 15/05/2026",
    jun: "JUNHO: 15/06/2026",
    jul: "JULHO: 14/07/2026",
    ago: "AGOSTO: 12/08/2026",
    set: "SETEMBRO: 14/09/2026",
    out: "OUTUBRO: 14/10/2026",
    nov: "NOVEMBRO: 13/11/2026",
    dez: "DEZEMBRO: 14/12/2026",
    endereco: "Rua dos Pioneiros, entre as Ruas Planalto e Joaquim de Melo",
    horario: "Horário: 07:30 ás 15:00"
},

"RUI BARBOSA": {
    jan: "JANEIRO: 16/01/2026",
    fev: "FEVEREIRO: 14/02/2026",
    mar: "MARÇO: 16/03/2026",
    abr: "ABRIL: 15/04/2026",
    mai: "MAIO: 16/05/2026",
    jun: "JUNHO: 16/06/2026",
    jul: "JULHO: 15/07/2026",
    ago: "AGOSTO: 13/08/2026",
    set: "SETEMBRO: 15/09/2026",
    out: "OUTUBRO: 15/10/2026",
    nov: "NOVEMBRO: 14/11/2026",
    dez: "DEZEMBRO: 15/12/2026",
    endereco: "No centro da Praça",
    horario: "Horário: 07:30 ás 15:00"
},

"FAZENDINHA": {
    jan: "JANEIRO: 17/01/2026",
    fev: "FEVEREIRO: 16/02/2026",
    mar: "MARÇO: 17/03/2026",
    abr: "ABRIL: 16/04/2026",
    mai: "MAIO: 18/05/2026",
    jun: "JUNHO: 17/06/2026",
    jul: "JULHO: 16/07/2026",
    ago: "AGOSTO: 14/08/2026",
    set: "SETEMBRO: 16/09/2026",
    out: "OUTUBRO: 16/10/2026",
    nov: "NOVEMBRO: 16/11/2026",
    dez: "DEZEMBRO: 16/12/2026",
    endereco: "Dentro do estacionamento da Rua da Cidadania Fazendinha",
    horario: "Horário: 07:30 ás 15:00"
},

"BARREIRINHA": {
    jan: "JANEIRO: 19/01/2026",
    fev: "FEVEREIRO: 17/02/2026",
    mar: "MARÇO: 18/03/2026",
    abr: "ABRIL: 17/04/2026",
    mai: "MAIO: 19/05/2026",
    jun: "JUNHO: 18/06/2026",
    jul: "JULHO: 17/07/2026",
    ago: "AGOSTO: 15/08/2026",
    set: "SETEMBRO: 17/09/2026",
    out: "OUTUBRO: 17/10/2026",
    nov: "NOVEMBRO: 17/11/2026",
    dez: "DEZEMBRO: 17/12/2026",
    endereco: "Rua Maria de Lurdes Kudri quase esquina com a Av. Anita Garibaldi",
    horario: "Horário: 07:30 ás 15:00"
},

"SITES": {
    jan: "JANEIRO: 20/01/2026",
    fev: "FEVEREIRO: 18/02/2026",
    mar: "MARÇO: 19/03/2026",
    abr: "ABRIL: 18/04/2026",
    mai: "MAIO: 20/05/2026",
    jun: "JUNHO: 19/06/2026",
    jul: "JULHO: 18/07/2026",
    ago: "AGOSTO: 17/08/2026",
    set: "SETEMBRO: 18/09/2026",
    out: "OUTUBRO: 19/10/2026",
    nov: "NOVEMBRO: 18/11/2026",
    dez: "DEZEMBRO: 18/12/2026",
    endereco: "Av. Visconde de Guarapuava, entre as Ruas Schiller e Reinaldino S. de Quadros",
    horario: "Horário: 07:30 ás 15:00"
},

"CIC": {
    jan: "JANEIRO: 21/01/2026",
    fev: "FEVEREIRO: 19/02/2026",
    mar: "MARÇO: 20/03/2026",
    abr: "ABRIL: 20/04/2026",
    mai: "MAIO: 21/05/2026",
    jun: "JUNHO: 20/06/2026",
    jul: "JULHO: 20/07/2026",
    ago: "AGOSTO: 18/08/2026",
    set: "SETEMBRO: 19/09/2026",
    out: "OUTUBRO: 20/10/2026",
    nov: "NOVEMBRO: 19/11/2026",
    dez: "DEZEMBRO: 19/12/2026",
    endereco: "Rua Pedro Gusso, na praça do Terminal CIC",
    horario: "Horário: 07:30 ás 15:00"
},

"CARMO": {
    jan: "JANEIRO: 22/01/2026",
    fev: "FEVEREIRO: 20/02/2026",
    mar: "MARÇO: 21/03/2026",
    abr: "ABRIL: 22/04/2026",
    mai: "MAIO: 22/05/2026",
    jun: "JUNHO: 22/06/2026",
    jul: "JULHO: 21/07/2026",
    ago: "AGOSTO: 19/08/2026",
    set: "SETEMBRO: 21/09/2026",
    out: "OUTUBRO: 21/10/2026",
    nov: "NOVEMBRO: 21/11/2026",
    dez: "DEZEMBRO: 21/12/2026",
    endereco: "Rua Italino Peruffo, dentro do estacionamento da Rua da Cidadania",
    horario: "Horário: 07:30 ás 15:00"
},

"PINHEIRINHO": {
    jan: "JANEIRO: 23/01/2026",
    fev: "FEVEREIRO: 21/02/2026",
    mar: "MARÇO: 23/03/2026",
    abr: "ABRIL: 23/04/2026+",
    mai: "MAIO: 23/05/2026",
    jun: "JUNHO: 23/06/2026",
    jul: "JULHO: 22/07/2026",
    ago: "AGOSTO: 20/08/2026",
    set: "SETEMBRO: 22/09/2026",
    out: "OUTUBRO: 22/10/2026",
    nov: "NOVEMBRO: 23/11/2026",
    dez: "DEZEMBRO: 22/12/2026",
    endereco: "Rua Antonio Pires Viana, próximo ao Supermercado ASSAI",
    horario: "Horário: 07:30 ás 15:00"
},

"CAMPINA DO SIQUEIRA": {
    jan: "JANEIRO: 24/01/2026",
    fev: "FEVEREIRO: 23/02/2026",
    mar: "MARÇO: 24/03/2026",
    abr: "ABRIL: 24/04/2026",
    mai: "MAIO: 25/05/2026",
    jun: "JUNHO: 24/06/2026",
    jul: "JULHO: 23/07/2026",
    ago: "AGOSTO: 21/08/2026",
    set: "SETEMBRO: 23/09/2026",
    out: "OUTUBRO: 23/10/2026",
    nov: "NOVEMBRO: 24/11/2026",
    dez: "DEZEMBRO: 23/12/2026",
    endereco: "Rua São Vicente de Paula, entre as Ruas General Mário Tourinho e Jerônimo Durski",
    horario: "Horário: 07:30 ás 15:00"
},

"PORTÃO": {
    jan: "JANEIRO: 26/01/2026",
    fev: "FEVEREIRO: 24/02/2026",
    mar: "MARÇO: 25/03/2026",
    abr: "ABRIL: 25/04/2026",
    mai: "MAIO: 26/05/2026",
    jun: "JUNHO: 25/06/2026",
    jul: "JULHO: 24/07/2026",
    ago: "AGOSTO: 22/08/2026",
    set: "SETEMBRO: 24/09/2026",
    out: "OUTUBRO: 24/10/2026",
    nov: "NOVEMBRO: 25/11/2026",
    dez: "DEZEMBRO: 24/12/2026",
    endereco: "Av. República Argentina, na pracinha do Terminal Portão",
    horario: "Horário: 07:30 ás 15:00"
},

"CAPÃO DA IMBUIA": {
    jan: "JANEIRO: 27/01/2026",
    fev: "FEVEREIRO: 25/02/2026",
    mar: "MARÇO: 26/03/2026",
    abr: "ABRIL: 27/04/2026",
    mai: "MAIO: 27/05/2026",
    jun: "JUNHO: 26/06/2026",
    jul: "JULHO: 25/07/2026",
    ago: "AGOSTO: 24/08/2026",
    set: "SETEMBRO: 25/09/2026",
    out: "OUTUBRO: 26/10/2026",
    nov: "NOVEMBRO: 26/11/2026",
    dez: "DEZEMBRO: 26/12/2026",
    endereco: "Av. Presidente Affonso Camargo, entre as Ruas Prof. Nivaldo Braga e Profª Olga Balster",
    horario: "Horário: 07:30 ás 15:00"
},

"CABRAL": {
    jan: "JANEIRO: 28/01/2026",
    fev: "FEVEREIRO: 26/02/2026",
    mar: "MARÇO: 27/03/2026",
    abr: "ABRIL: 28/04/2026",
    mai: "MAIO: 28/05/2026",
    jun: "JUNHO: 27/06/2026",
    jul: "JULHO: 27/07/2026",
    ago: "AGOSTO: 25/08/2026",
    set: "SETEMBRO: 26/09/2026",
    out: "OUTUBRO: 27/10/2026",
    nov: "NOVEMBRO: 27/11/2026",
    dez: "DEZEMBRO: 28/12/2026",
    endereco: "Rua Luciano Cardinale, ao lado do Terminal Cabral",
    horario: "Horário: 07:30 ás 15:00"
},

"SANTA CÂNDIDA": {
    jan: "JANEIRO: 29/01/2026",
    fev: "FEVEREIRO: 27/02/2026",
    mar: "MARÇO: 28/03/2026",
    abr: "ABRIL: 29/04/2026",
    mai: "MAIO: 29/05/2026",
    jun: "JUNHO: 29/06/2026",
    jul: "JULHO: 28/07/2026",
    ago: "AGOSTO: 26/08/2026",
    set: "SETEMBRO: 28/09/2026",
    out: "OUTUBRO: 28/10/2026",
    nov: "NOVEMBRO: 28/11/2026",
    dez: "DEZEMBRO: 29/12/2026",
    endereco: "Av. Paraná, entre Rua Dr. Sátilas do Amaral Camargo e Av. Marechal Mascarenhas de Moraes",
    horario: "Horário: 07:30 ás 15:00"
},

"TATUQUARA": {
    jan: "JANEIRO: 30/01/2026",
    fev: "FEVEREIRO: 28/02/2026",
    mar: "MARÇO: 30/03/2026",
    abr: "ABRIL: 30/04/2026",
    mai: "MAIO: 30/05/2026",
    jun: "JUNHO: 30/06/2026",
    jul: "JULHO: 29/07/2026",
    ago: "AGOSTO: 27/08/2026",
    set: "SETEMBRO: 29/09/2026",
    out: "OUTUBRO: 29/10/2026",
    nov: "NOVEMBRO: 30/11/2026",
    dez: "DEZEMBRO: 30/12/2026",
    endereco: "Rua Guilherme Nizer esquina com Rua Albor Pimpão de Almeida",
    horario: "Horário: 07:30 ás 15:00"
},

};


/* ===== MOSTRAR LISTA DE TERMINAIS ===== */

function mostrarTerminais() {

    const terminaisList = document.getElementById("terminais-list");

    // Limpa a lista antes de carregar
    terminaisList.innerHTML = "";

    terminaisCuritiba.forEach(terminal => {

        const button = document.createElement("button");

        button.textContent = terminal;
        button.className = "terminal-button";

        // Ao clicar, mostra as informações do terminal
        button.onclick = () => mostrarInformacoes(terminal);

        terminaisList.appendChild(button);

    });
}


/* ===== MOSTRAR INFORMAÇÕES DO TERMINAL ===== */

function mostrarInformacoes(terminal) {

    const resultado = document.getElementById("resultado");

    // Procura o terminal ignorando diferenças entre maiúsculas e minúsculas
    const nomeEncontrado = Object.keys(infoTerminais).find(nome =>
        nome.toLocaleLowerCase("pt-BR") === terminal.toLocaleLowerCase("pt-BR")
    );

    const info = nomeEncontrado ? infoTerminais[nomeEncontrado] : null;

    if (info) {

        resultado.innerHTML = `
            <h3>${terminal}</h3>

            <h4>CALENDÁRIO DE COLETA</h4>

            <p>${info.jan}</p>
            <p>${info.fev}</p>
            <p>${info.mar}</p>
            <p>${info.abr}</p>
            <p>${info.mai}</p>
            <p>${info.jun}</p>
            <p>${info.jul}</p>
            <p>${info.ago}</p>
            <p>${info.set}</p>
            <p>${info.out}</p>
            <p>${info.nov}</p>
            <p>${info.dez}</p>

            <h4>LOCALIZAÇÃO</h4>
            <p>${info.endereco}</p>

            <h4>HORÁRIO DE ATENDIMENTO</h4>
            <p>${info.horario}</p>
        `;

        // Rola suavemente até as informações
        resultado.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    } else {

        resultado.innerHTML = `
            <p>Informações não encontradas para este terminal.</p>
        `;

    }
}


/* ===== CARREGAR A PÁGINA ===== */

window.onload = mostrarTerminais;
