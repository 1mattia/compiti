// variabile per chiudere e aprire il menu
menu = document.getElementById("buy");
ordine = document.getElementById("ordine");

function open_menu(modelloId) {
    console.log(`Apertura del menu per il modello ${modelloId}`);
    const menu = document.getElementById(`buy${modelloId}`);
    if (menu) {
        menu.style.display = "block";
    }
}

function close_menu(modelloId) {
    console.log(`Chiusura del menu per il modello ${modelloId}`);
    const menu = document.getElementById(`buy${modelloId}`);
    if (menu) {
        menu.style.display = "none";
    }
}



function open_ordine() {
    ordine.style.display = "block";
}

function close_ordine() {
    ordine.style.display = "none";
}

const telefoni = [
    {
        id: 1,
        modello: "Iphone 6",
        prezzo: 649,
        disponibilita: 20
    },
    {
        id: 2,
        modello: "Iphone 7+",
        prezzo: 799,
        disponibilita: 20
    },
    {
        id: 3,
        modello: "Iphone x",
        prezzo: 999,
        disponibilita: 20
    },
    {
        id: 4,
        modello: "Iphone 12",
        prezzo: 839,
        disponibilita: 20
    },
    {
        id: 5,
        modello: "Iphone 13",
        prezzo: 899,
        disponibilita: 20
    },
    {
        id: 6,
        modello: "Iphone 14",
        prezzo: 999,
        disponibilita: 20
    }
];
const ordini = [];


// Dichiarare un array per memorizzare gli ordini

function buy(modelloId) {
    const telefonoSelezionato = telefoni.find(telefono => telefono.id === modelloId);

    if (telefonoSelezionato) {
        const quantity = parseInt(document.getElementById(`numero${modelloId}`).value, 10);
        const costoTotale = telefonoSelezionato.prezzo * quantity;

        ordini.push({ modello: telefonoSelezionato.modello, quantita: quantity, costoTotale });

        visualizzaOrdini();

        // console.log(`Hai selezionato il modello ${modelloId} (${telefonoSelezionato.modello}) con prezzo ${telefonoSelezionato.prezzo}€.`);
        // console.log(`Quantità: ${quantity}, Costo totale: ${costoTotale}€.`);
    } else {
        alert("Modello non trovato");
    }
}

function visualizzaOrdini() {
    const ordiniMenu = document.getElementById('ordini-menu');
    ordiniMenu.innerHTML = '';

    const listaOrdini = document.createElement('ul');

    ordini.forEach((ordine, indice) => {
        const elementoOrdine = document.createElement('li');
        elementoOrdine.textContent = `Ordine ${indice + 1}: ${ordine.modello}, Quantità: ${ordine.quantita}, Costo Totale: ${ordine.costoTotale}€`;
        listaOrdini.appendChild(elementoOrdine);
    });

    ordiniMenu.appendChild(listaOrdini);
}