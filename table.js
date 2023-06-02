function filterTable() {
  var inputDate = document.getElementById("date-filter").value;
  var table = document.getElementById("data-table");
  var rows = table.getElementsByTagName("tr");

  for (var i = 0; i < rows.length; i++) {
    var cells = rows[i].getElementsByTagName("td");
    var dateCell = cells[1];
    var row = rows[i];

    if (dateCell) {
      var cellDate = new Date(dateCell.textContent);
      if (
        inputDate !== "" &&
        cellDate.toISOString().split("T")[0] !== inputDate
      ) {
        row.style.display = "none";
      } else {
        row.style.display = "";
      }
    }
  }
  
}
function searchFun(){
  // value from input box
    let filter = document.getElementById('myInput').value.toUpperCase();
    // my table
    let myTable = document.getElementById('data-table');
    // all rows
    let rows = myTable.getElementsByTagName('tr');

    // loop on rows array
    for(let i = 0; i< rows.length; i++){
      // first column in each row
      let td = rows[i].getElementsByTagName('td')[0];
      if(td){
        // tag changed to text of first column of any row
        let textValue = td.textContent || td.innerHTML;

        if(textValue.toUpperCase().indexOf(filter) > -1){
          rows[i].style.display = "";
        }else{
          rows[i].style.display= "none";
        }
      }

    }
}
