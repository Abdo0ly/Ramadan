document.getElementById('addRowBtn').addEventListener('click', function() {
    const table = document.querySelector('.ramadan-table');
    const newRow = document.createElement('tr');

    // إنشاء 3 خلايا جديدة
    for (let i = 0; i < 3; i++) {
        const cell = document.createElement('td');
        cell.contentEditable = true;
        newRow.appendChild(cell);
    }

    table.appendChild(newRow);
});
