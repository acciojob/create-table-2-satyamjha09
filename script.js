function createTable() {
    // Get user input for rows and columns
    let rn = prompt("Input number of rows");
    let cn = prompt("Input number of columns");

    // Convert input to numbers
    rn = parseInt(rn);
    cn = parseInt(cn);

    // Validate input (must be a positive number)
    if (isNaN(rn) || isNaN(cn) || rn <= 0 || cn <= 0) {
        alert("Please enter valid positive numbers for rows and columns.");
        return;
    }

    // Get reference to the table
    let table = document.getElementById("myTable");

    // Clear existing table content
    table.innerHTML = "";

    // Create the table dynamically
    for (let i = 0; i < rn; i++) {
        let row = document.createElement("tr"); // Create a row

        for (let j = 0; j < cn; j++) {
            let cell = document.createElement("td"); // Create a cell
            cell.textContent = `Row-${i} Column-${j}`; // Set cell text
            row.appendChild(cell); // Append cell to row
        }

        table.appendChild(row); // Append row to table
    }
}
