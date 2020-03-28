var ladate = new Date();
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const product = urlParams.get('dateBatch')

if( product != null){
    inputDate = product.split("-");
    ladate.setDate(inputDate[2]);
    ladate.setMonth(inputDate[1]-1);
    ladate.setFullYear(inputDate[0]);
}

function titre(){
    tab_jour = new Array("dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi");
    tab_mois = new Array("janvier","février","mars","avril","mai","juin","juillet","aout","septembre","octobre","novembre","décembre");
    splitDate = ladate.toString().split(" ");
    var body = document.getElementsByTagName("body")[0];
    stitre = document.createElement("h1");
    titreText = document.createTextNode("Liste des batchs du "+tab_jour[ladate.getDay()]+" "+splitDate[2]+" "+tab_mois[ladate.getMonth()]+" "+splitDate[3]);
    stitre.appendChild(titreText);
    body.appendChild(stitre);
}

function liste() {

    ListeBatch = listeDesBatchs();
    // get the reference for the body
    var body = document.getElementsByTagName("body")[0];

    // creates a <table> element and a <tbody> element
    var tbl = document.createElement("table");
    tbl.setAttribute("class", "table");
    var tblBody = document.createElement("tbody");

    var row = document.createElement("tr");

    var cell = document.createElement("th");
    var cellText = document.createTextNode("Nom");
    cell.appendChild(cellText);
    row.appendChild(cell);   

    var cell = document.createElement("th");
    var cellText = document.createTextNode("Description");
    cell.appendChild(cellText);
    row.appendChild(cell);

    var cell = document.createElement("th");
    var cellText = document.createTextNode("Fréquence");
    cell.appendChild(cellText);
    row.appendChild(cell);

    var cell = document.createElement("th");
    var cellText = document.createTextNode("Date");
    cell.appendChild(cellText);
    row.appendChild(cell);

    var cell = document.createElement("th");
    var cellText = document.createTextNode("Information");
    cell.appendChild(cellText);
    row.appendChild(cell);

    tblBody.appendChild(row);

    // creating all cells s
    for (var i = 0; i < ListeBatch.lBatchs.length; i++) {
        // creates a table row
        if (verifFrequence(ListeBatch.lBatchs[i].Freq, ListeBatch.lBatchs[i].Date)) {
            var row = document.createElement("tr");
            switch(ListeBatch.lBatchs[i].Freq){
                case 'journalier':
                    row.setAttribute("class", "warning");
                    break;
                case 'hebdomadaire':
                    row.setAttribute("class", "info");
                    break;
                case 'mensuel':
                    row.setAttribute("class", "active");
                    break;
                case 'biannuel':
                    row.setAttribute("class", "danger");
                    break;
                case 'annuel':
                    row.setAttribute("class", "success");
                    break; 
            }
            var cell = document.createElement("td");
            var cellText = document.createTextNode(ListeBatch.lBatchs[i].Nom);
            cell.appendChild(cellText);
            row.appendChild(cell);

            var cell = document.createElement("td");
            var cellText = document.createTextNode(ListeBatch.lBatchs[i].Desc);
            cell.appendChild(cellText);
            row.appendChild(cell);
            // add the row to the end of the table body
            tblBody.appendChild(row);

            var cell = document.createElement("td");
            var cellText = document.createTextNode(ListeBatch.lBatchs[i].Freq);
            cell.appendChild(cellText);
            row.appendChild(cell);
            // add the row to the end of the table body
            tblBody.appendChild(row);

            var cell = document.createElement("td");
            var cellText = document.createTextNode(ListeBatch.lBatchs[i].Date);
            cell.appendChild(cellText);
            row.appendChild(cell);
            // add the row to the end of the table body
            tblBody.appendChild(row);

            var cell = document.createElement("td");
            var cellText = document.createTextNode(ListeBatch.lBatchs[i].Info);
            cell.appendChild(cellText);
            row.appendChild(cell);
            // add the row to the end of the table body
            tblBody.appendChild(row);
        }
    }

    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);
    // appends <table> into <body>
    body.appendChild(tbl);
    // sets the border attribute of tbl to 2;
    tbl.setAttribute("border", "2");
}

function verifFrequence(freq, date) {
    //ladate.setDate(1);
    //ladate.setMonth(10);
    switch (freq) {
        case 'journalier':
            return true;
        case 'hebdomadaire':
            tab_jour = new Array("dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi");
            if (date == tab_jour[ladate.getDay()]) {
                return true;
            }
            break;
        case 'mensuel':
            if (date == ladate.getDate()) {
                return true;
            }
            break;
        case 'biannuel':
            tabDate = date.split(',')
            if (tabDate[0] == ladate.getDate() + "/" + (ladate.getMonth()+1) || tabDate[1] == ladate.getDate() + "/" + (ladate.getMonth()+1)) {
                return true;
            }
            break;
        case 'annuel':
            if (date == ladate.getDate() + "/" + (ladate.getMonth()+1)) {
                return true;
            }
            break;

        default:
            return false
    }
    return false;
}
function listeDesBatchs() {
    ListeBatch = {
        "lBatchs": [
            {
                "Nom": "pj_217",
                "Desc": "Export SIGP",
                "Freq": "journalier",
                "Date": "-",
                "Info" : "00:10"
            },
            {
                "Nom": "pj_224",
                "Desc": "Export EDU Quotidien",
                "Freq": "journalier",
                "Date": "-",
                "Info" : "Après sauvegarde quotidienne"
            },
            {
                "Nom": "pj_211",
                "Desc": "Export SIDIS",
                "Freq": "journalier",
                "Date": "-",
                "Info" : "Après pj_224"
            },
            {
                "Nom": "pj_212",
                "Desc": "Export NEMO RCT",
                "Freq": "hebdomadaire",
                "Date": "mardi",
                "Info" : "Mardi après pj_211"

            },
            {
                "Nom": "pj_209",
                "Desc": "Import Absences SIGP",
                "Freq": "hebdomadaire",
                "Date": "dimanche",
                "Info" : "Dimanche après pj_211"
            },
            {
                "Nom": "pj_210",
                "Desc": "Import Absences GEP",
                "Freq": "hebdomadaire",
                "Date": "dimanche",
                "Info" : "Dimanche après pj_209"
            },
            {
                "Nom": "pj_201",
                "Desc": "Import Référentiels",
                "Freq": "hebdomadaire",
                "Date": "mercredi",
                "Info" : "Mercredi sur bonne fin pj_211"
            },
            {
                "Nom": "pj_220",
                "Desc": "Import Fonctions Connexe",
                "Freq": "hebdomadaire",
                "Date": "mercredi",
                "Info" : "Mercredi sur bonne fin pj_201"
            },
            {
                "Nom": "pj_202",
                "Desc": "Import Fonctions",
                "Freq": "hebdomadaire",
                "Date": "mercredi",
                "Info" : "Mercredi sur bonne fin pj_220"
            },
            {
                "Nom": "pj_203",
                "Desc": "Import Entité Connexe",
                "Freq": "hebdomadaire",
                "Date": "mercredi",
                "Info" : "Mercredi sur bonne fin pj_202"
            },
            {
                "Nom": "pj_204",
                "Desc": "Import Entité",
                "Freq": "hebdomadaire",
                "Date": "mercredi",
                "Info" : "Mercredi sur bonne fin pj_203"
            },
            {
                "Nom": "pj_205",
                "Desc": "Import Agents Connexe",
                "Freq": "hebdomadaire",
                "Date": "mercredi",
                "Info" : "Mercredi sur bonne fin pj_204"
            },
            {
                "Nom": "pj_208",
                "Desc": "Import Agents Sortis",
                "Freq": "hebdomadaire",
                "Date": "mercredi",
                "Info" : "Mercredi sur bonne fin pj_205"
            },
            {
                "Nom": "pj_207",
                "Desc": "Import Agents Inactifs",
                "Freq": "hebdomadaire",
                "Date": "mercredi",
                "Info" : "Mercredi sur bonne fin pj_208"
            },
            {
                "Nom": "pj_206",
                "Desc": "Import Agents actifs",
                "Freq": "hebdomadaire",
                "Date": "mercredi",
                "Info" : "Mercredi sur bonne fin pj_207"
            },
            {
                "Nom": "pj_219",
                "Desc": "Import Historique Agents",
                "Freq": "hebdomadaire",
                "Date": "mercredi",
                "Info" : "Mercredi sur bonne fin pj_206"
            },
            {
                "Nom": "pj_213",
                "Desc": "Export EDU",
                "Freq": "mensuel",
                "Date": "1",
                "Info" : "Premier jour du mois après pj_212 si mardi, pj_219 si mercredi, pj_210 si dimanche ou pj_211 les autres jours"
            },
            {
                "Nom": "pj_214",
                "Desc": "Export Accidents Circulation SURF",
                "Freq": "mensuel",
                "Date": "1",
                "Info" : "Premier jour du mois après pj_213"
            },
            {
                "Nom": "pj_215",
                "Desc": "Export Accidents Métier SURF",
                "Freq": "mensuel",
                "Date": "16",
                "Info" : "Le 16 du mois : après pj_212 si mardi, pj_219 si mercredi, pj_210 si dimanche ou pj_211 les autres jours"
            },
            {
                "Nom": "pj_218",
                "Desc": "Export BSST",
                "Freq": "mensuel",
                "Date": "14",
                "Info" : "Le 14 du mois : après pj_212 si mardi, pj_219 si mercredi, pj_210 si dimanche ou pj_211 les autres jours"
            },
            {
                "Nom": "pj_221",
                "Desc": "Import Utilisations",
                "Freq": "mensuel",
                "Date": "14",
                "Info" : "Le 14 du mois après pj_218"
            },
            {
                "Nom": "pj_225",
                "Desc": "Envoi mail CE",
                "Freq": "mensuel",
                "Date": "1",
                "Info" : "Premier jour du mois après pj_214"
            },
            {
                "Nom": "pj_227",
                "Desc": "Purge SIPREVA",
                "Freq": "biannuel",
                "Date": "1/5,1/11",
                "Info" : "Le 01/05 et 01/11 après pj_225"
            },
            {
                "Nom": "pj_228",
                "Desc": "Purge SI-PENIB",
                "Freq": "biannuel",
                "Date": "1/5,1/11",
                "Info" : "Le 01/05 et 01/11 après pj_227"
            },
            {
                "Nom": "pj_216",
                "Desc": "Export Accidents Métiers SURF",
                "Freq": "annuel",
                "Date": "1/2",
                "Info" : "Le 01/02 après pj_225"
            },
            {
                "Nom": "pj_226",
                "Desc": "Export Accidents comparaison CNAM",
                "Freq": "annuel",
                "Date": "20/1",
                "Info" : "Le 20 janvier : après pj_212 si mardi, pj_219 si mercredi, pj_210 si dimanche ou pj_211 les autres jours"
            }

        ]
    };
    return ListeBatch;
}