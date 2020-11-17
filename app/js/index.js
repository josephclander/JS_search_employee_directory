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
    const card = createEmployeeCard(results[0]);
    const employeesContainer = document.getElementById('employees');
    employeesContainer.innerHTML = card;
  });

// create a card
const createEmployeeCard = (employee) => {
  let htmlOutput = ` <div class="employee">
    <div class="employee__photo"><img src="${employee.picture.large}" alt="Profile photo of ${employee.name.first} ${employee.name.last}"></div>
    <div class="employee__info">
        <div class="employee__name">${employee.name.first} ${employee.name.last}</div>
        <div class="employee__email"><a href="${employee.email}">${employee.email}</a></div>
        <div class="employee__state">${employee.location.state}</div>
    </div>
</div>`;
  return htmlOutput;
};
