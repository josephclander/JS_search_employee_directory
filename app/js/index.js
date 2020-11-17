// This method taught in the Treehouse was implemented successfully

// var xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function () {
//   if (xhr.readyState === 4) {
//     const { results } = JSON.parse(xhr.responseText);
//     console.log(results);
//   }
// };
// xhr.open(
//   'GET',
//   'https://randomuser.me/api/?results=12&inc=name,email,location,cell,dob,picture&nat=gb'
// );
// xhr.send();

// Moving forward the fetch api has been used

fetch(
  'https://randomuser.me/api/?results=12&inc=name,email,location,cell,dob,picture&nat=gb',
  {
    mode: 'cors',
  }
)
  .then((response) => response.json())
  .then(({ results }) => {
    // populate employee list attach to DOM
    const mergedList = mergeCardList(results);
    const employeesContainer = document.getElementById('employees');
    employeesContainer.innerHTML = mergedList;

    // click handlers
    const domEmployees = document.getElementsByClassName('employee');
    clickHandler(domEmployees);
  });

// create a card
const createEmployeeCard = (employee, index) => {
  let htmlOutput = `<li class="employee" id="${index}">
    <div class="employee__photo"><img src="${employee.picture.large}" alt="Profile photo of ${employee.name.first} ${employee.name.last}"></div>
    <div class="employee__info">
        <div class="employee__name">${employee.name.first} ${employee.name.last}</div>
        <div class="employee__email"><a href="mailto:${employee.email}">${employee.email}</a></div>
        <div class="employee__city">${employee.location.city}</div>
    </div>
</li>`;
  return htmlOutput;
};

// join cards into html list
const mergeCardList = (list) => {
  const listArray = list.map((employee, index) => {
    return createEmployeeCard(employee, index);
  });
  const mergedList = listArray.join('');
  return mergedList;
};

// add eventlistener to cards
const clickHandler = (employeesList) => {
  for (let i = 0; i < employeesList.length; i++) {
    employeesList[i].addEventListener('click', (event) => {
      if (employeesList[i] !== event.target) return;
      console.log(event.target.id);
    });
  }
};
