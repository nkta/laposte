
function liste() {
    //var jsonString = {"lBatchs":[{"col1":"cell in row 0, column 0","col2":"cell in row 0, column 1 "},{"col1":"cell in row 1, column 0","col2":"cell in row 1, column 1 "}]};
    ListeBatch = {"lBatchs":[{"col1":"cell in row 0, column 0","col2":"cell in row 0, column 1 "},{"col1":"cell in row 1, column 0","col2":"cell in row 1, column 1 "}]}
    // get the reference for the body
    var body = document.getElementsByTagName("body")[0];

    // creates a <table> element and a <tbody> element
    var tbl = document.createElement("table");
    var tblBody = document.createElement("tbody");

    // creating all cells s
    for (var i = 0; i < 2; i++) {
        // creates a table row
        var row = document.createElement("tr");

        var cell = document.createElement("td");
        var cellText = document.createTextNode(ListeBatch.lBatchs[i].col1);
        cell.appendChild(cellText);
        row.appendChild(cell);

        var cell = document.createElement("td");
        var cellText = document.createTextNode(ListeBatch.lBatchs[i].col2);
        cell.appendChild(cellText);
        row.appendChild(cell);
        // add the row to the end of the table body
        tblBody.appendChild(row);
    }

    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);
    // appends <table> into <body>
    body.appendChild(tbl);
    // sets the border attribute of tbl to 2;
    tbl.setAttribute("border", "2");
}
