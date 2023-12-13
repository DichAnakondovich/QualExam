document.addEventListener('DOMContentLoaded', function() {
  const requestForm = document.getElementById('requestForm');
  const requestTable = document.getElementById('requestTable');

  requestForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const requestNumber = document.getElementById('requestNumber').value;
    const requestDate = document.getElementById('requestDate').value;
    const requestDescription = document.getElementById('requestDescription').value;
    const requestStatus = document.getElementById('requestStatus').value;

    const newRow = requestTable.insertRow(-1);
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);
    const cell5 = newRow.insertCell(4);

    cell1.innerHTML = requestNumber;
    cell2.innerHTML = requestDate;
    cell3.innerHTML = requestDescription;
    cell4.innerHTML = requestStatus;
    if (requestStatus === 'выполнено') {
        newRow.style.backgroundColor = 'lightgreen';
      }
    if (requestStatus === 'в работе') {
        newRow.style.backgroundColor = 'lightyellow'
    }
    cell5.innerHTML = '<button onclick="editRequest(this)">Редактировать</button><button onclick="deleteRequest(this)">Удалить</button>';
    requestForm.reset();
  });
});

function deleteRequest(button) {
    const row = button.parentNode.parentNode;
    row.remove();
  }

function editRequest(button) {
  const row = button.parentNode.parentNode;
  const requestNumber = row.cells[0].innerHTML;
  const requestDate = row.cells[1].innerHTML;
  const requestDescription = row.cells[2].innerHTML;
  const requestStatus = row.cells[3].innerHTML;

  document.getElementById('requestNumber').value = requestNumber;
  document.getElementById('requestDate').value = requestDate;
  document.getElementById('requestDescription').value = requestDescription;
  document.getElementById('requestStatus').value = requestStatus;

  row.remove();
}