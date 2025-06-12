//your JS code here. If required.
document.getElementById('submit').addEventListener('click', function() {
    // Get input values
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;

    // Create a new row
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${title}</td>
        <td>${author}</td>
        <td>${isbn}</td>
        <td><button class="delete btn btn-danger">Clear</button></td>
    `;

    // Append the new row to the table body
    document.getElementById('book-list').appendChild(newRow);

    // Clear input fields
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';

    // Add event listener to the clear button
    newRow.querySelector('.delete').addEventListener('click', function() {
        newRow.remove();
    });
});