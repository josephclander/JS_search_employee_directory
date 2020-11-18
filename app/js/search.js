const searchHandler = (event) => {
  const searchInput = event.target.value.toLowerCase();
  const employeeList = document.querySelectorAll('.employee');

  for (let i = 0; i < employeeList.length; i++) {
    let name = employeeList[i].querySelector('.employee__name').textContent;
    if (name.toLowerCase().indexOf(searchInput) > -1) {
      employeeList[i].style.display = '';
    } else {
      employeeList[i].style.display = 'none';
    }
  }
};
