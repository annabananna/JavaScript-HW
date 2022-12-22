// HOMEWORK
// CREATE A DYNAMIC TABLE
// Write a Javascript function that will dynamiclly create a table
// User should input the number of Colums and Rows
// In every table cell print which row and column it is (ex. Row-3 Column-1)



btn = document.getElementById("submit");
container = document.getElementById("container");


let rows = document.getElementById("rows");
let columns = document.getElementById("columns");

function createTable(rows, columns){

    let theader = '<table>';
    let tFooter = '</table>';
    let tbody = "";   

    for(let i = 1; i <= rows; i++){
        tbody += `<tr>`
        for(let j=1; j <= columns; j++){
            tbody += `<td>` + `Row-` + i + ` Column-` + j + `</td>`  
        }
        tbody += `</tr>`
    }
  
    container.innerHTML += `${theader}` + `${tbody}` + `${tFooter}`;

}

btn.addEventListener("click", function(){

    let inputRows = rows.value;
    let inputColumns = columns.value;
    createTable(inputRows, inputColumns)
})





