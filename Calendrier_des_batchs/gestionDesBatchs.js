
function liste() {
    //var jsonString = {"lBatchs":[{"col1":"cell in row 0, column 0","col2":"cell in row 0, column 1 "},{"col1":"cell in row 1, column 0","col2":"cell in row 1, column 1 "}]};

    ListeBatch = listeDesBatchs();
    // get the reference for the body
    var body = document.getElementsByTagName("body")[0];

    // creates a <table> element and a <tbody> element
    var tbl = document.createElement("table");
    var tblBody = document.createElement("tbody");

    // creating all cells s
    for (var i = 0; i < ListeBatch.lBatchs.length; i++) {
        // creates a table row
        if (verifFrequence(ListeBatch.lBatchs[i].Freq, ListeBatch.lBatchs[i].Date)) {
            var row = document.createElement("tr");

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
    var ladate = new Date()
    ladate.setDate(1);
    ladate.setMonth(10);
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
            if (tabDate[0] == ladate.getDay() + "/" + ladate.getMonth() || tabDate[1] == ladate.getDay() + "/" + ladate.getMonth()) {
                return true;
            }
            break;
        case 'annuel':
            if (date == ladate.getDay() + "/" + ladate.getMonth()) {
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
                "Date": "-"
            },
            {
                "Nom": "pj_224",
                "Desc": "Export EDU Quotidien",
                "Freq": "journalier",
                "Date": "-"
            },
            {
                "Nom": "pj_211",
                "Desc": "Export SIDIS",
                "Freq": "journalier",
                "Date": "-"
            },
            {
                "Nom": "pj_213",
                "Desc": "Export EDU",
                "Freq": "mensuel",
                "Date": "1"
            },
            {
                "Nom": "pj_214",
                "Desc": "Export Accidents Circulation SURF",
                "Freq": "mensuel",
                "Date": "1"
            },
            {
                "Nom": "pj_215",
                "Desc": "Export Accidents Métier SURF",
                "Freq": "mensuel",
                "Date": "16"
            },
            {
                "Nom": "pj_218",
                "Desc": "Export BSST",
                "Freq": "mensuel",
                "Date": "14"
            },
            {
                "Nom": "pj_221",
                "Desc": "Import Utilisations",
                "Freq": "mensuel",
                "Date": "14"
            },
            {
                "Nom": "pj_225",
                "Desc": "Envoi mail CE",
                "Freq": "mensuel",
                "Date": "1"
            },
            {
                "Nom": "pj_212",
                "Desc": "Export NEMO RCT",
                "Freq": "hebdomadaire",
                "Date": "mardi"
            },
            {
                "Nom": "pj_209",
                "Desc": "Import Absences SIGP",
                "Freq": "hebdomadaire",
                "Date": "dimanche"
            },
            {
                "Nom": "pj_210",
                "Desc": "Import Absences GEP",
                "Freq": "hebdomadaire",
                "Date": "dimanche"
            },
            {
                "Nom": "pj_201",
                "Desc": "Import Référentiels",
                "Freq": "hebdomadaire",
                "Date": "mercredi"
            },
            {
                "Nom": "pj_220",
                "Desc": "Import Fonctions Connexe",
                "Freq": "hebdomadaire",
                "Date": "mercredi"
            },
            {
                "Nom": "pj_202",
                "Desc": "Import Fonctions",
                "Freq": "hebdomadaire",
                "Date": "mercredi"
            },
            {
                "Nom": "pj_203",
                "Desc": "Import Entité Connexe",
                "Freq": "hebdomadaire",
                "Date": "mercredi"
            },
            {
                "Nom": "pj_204",
                "Desc": "Import Entité",
                "Freq": "hebdomadaire",
                "Date": "mercredi"
            },
            {
                "Nom": "pj_205",
                "Desc": "Import Agents Connexe",
                "Freq": "hebdomadaire",
                "Date": "mercredi"
            },
            {
                "Nom": "pj_208",
                "Desc": "Import Agents Sortis",
                "Freq": "hebdomadaire",
                "Date": "mercredi"
            },
            {
                "Nom": "pj_207",
                "Desc": "Import Agents Inactifs",
                "Freq": "hebdomadaire",
                "Date": "mercredi"
            },
            {
                "Nom": "pj_206",
                "Desc": "Import Agents actifs",
                "Freq": "hebdomadaire",
                "Date": "mercredi"
            },
            {
                "Nom": "pj_219",
                "Desc": "Import Historique Agents",
                "Freq": "hebdomadaire",
                "Date": "mercredi"
            },
            {
                "Nom": "pj_216",
                "Desc": "Export Accidents Métiers SURF",
                "Freq": "annuel",
                "Date": "1/2"
            },
            {
                "Nom": "pj_226",
                "Desc": "Export Accidents comparaison CNAM",
                "Freq": "annuel",
                "Date": "19/0"
            },
            {
                "Nom": "pj_227",
                "Desc": "Purge SIPREVA",
                "Freq": "biannuel",
                "Date": "0/4,0/10"
            },
            {
                "Nom": "pj_228",
                "Desc": "Purge SI-PENIB",
                "Freq": "biannuel",
                "Date": "0/4,0/10"
            }

        ]
    };
    return ListeBatch;
}