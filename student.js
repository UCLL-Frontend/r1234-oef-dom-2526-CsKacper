// Oefening 1: Tijdstip van laden

newDate = new Date();
const hours = newDate.getHours();
const minutes = newDate.getMinutes();
const seconds = newDate.getSeconds();

divTime = document.getElementById("oef1");
divTime.innerHTML = `De pagina is geladen om ${hours}:${minutes}:${seconds}`;

// Oefening 2: Voetbal uitslagen 

function voegVoetbalUitslagToe(ploegen, datum, aantalRodeKaarten) {
    const divOef2 = document.getElementById("oef2");
    const article = document.createElement("article");
    const h3 = document.createElement("h3");
    h3.textContent = ploegen;
    const pDatum = document.createElement("p");
    pDatum.textContent = datum;
    const pRodeKaarten = document.createElement("p");
    pRodeKaarten.textContent = `Rode kaarten: ${aantalRodeKaarten}`;
    if (aantalRodeKaarten > 0) {
        pRodeKaarten.classList.add("rodeKaart");
    }
    article.appendChild(h3);
    article.appendChild(pDatum);
    article.appendChild(pRodeKaarten);
    divOef2.appendChild(article);
}
voegVoetbalUitslagToe("Team A vs Team B", "2024-06-15", 2);

// Oefening 3: Waterpolo uitslagen

function voegWaterpoloUitslagToe(ploegen, datum, aantalTijdstraffen) {
    const divOef3 = document.getElementById("oef3");
    const article = document.createElement("article");
    const h3 = document.createElement("h3");
    h3.textContent = ploegen;
    const pDatum = document.createElement("p");
    pDatum.textContent = datum;
    const pTijdstraffen = document.createElement("p");
    pTijdstraffen.textContent = `Tijdstraffen: ${aantalTijdstraffen}`;
    if (aantalTijdstraffen > 0) {
        pTijdstraffen.classList.add("tijdstraf");
    }
    article.appendChild(h3);
    article.appendChild(pDatum);
    article.appendChild(pTijdstraffen);
    divOef3.appendChild(article);
}
voegWaterpoloUitslagToe("Team C vs Team D", "2025-06-16", 3);


// Oefening 4: Getallenvierkant
const zijde = 14; // kan je later aanpassen om grotere of kleinere vierkanten te tekenen

// schrijf hieronder je code  
