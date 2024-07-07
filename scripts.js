document.getElementById('stocksButton').addEventListener('click', function () {
    document.getElementById('stocksTable').classList.remove('hidden');
    document.getElementById('fundsTable').classList.add('hidden');
    this.classList.add('active');
    document.getElementById('fundsButton').classList.remove('active');
});

document.getElementById('fundsButton').addEventListener('click', function () {
    document.getElementById('stocksTable').classList.add('hidden');
    document.getElementById('fundsTable').classList.remove('hidden');
    this.classList.add('active');
    document.getElementById('stocksButton').classList.remove('active');
});

document.getElementById('themeButton').addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
    this.innerHTML = document.body.classList.contains('dark-mode') ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
});

function sortTable(columnIndex, tableId) {
    const table = document.getElementById(tableId).querySelector('table tbody');
    const rows = Array.from(table.rows);
    const isAsc = table.getAttribute('data-sort-order') === 'asc';
    const newOrder = isAsc ? 'desc' : 'asc';

    rows.sort((rowA, rowB) => {
        const cellA = rowA.cells[columnIndex].textContent.trim();
        const cellB = rowB.cells[columnIndex].textContent.trim();
        if (!isNaN(cellA) && !isNaN(cellB)) {
            return newOrder === 'asc' ? cellA - cellB : cellB - cellA;
        }
        return newOrder === 'asc' ? cellA.localeCompare(cellB) : cellB.localeCompare(cellA);
    });

    while (table.firstChild) {
        table.removeChild(table.firstChild);
    }

    rows.forEach(row => table.appendChild(row));
    table.setAttribute('data-sort-order', newOrder);
}