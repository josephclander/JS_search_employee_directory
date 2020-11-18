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
    const modal = document.querySelector('.modal');
    clickHandler(domEmployees);
    closeModalHandler(modal);
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
      showModal(event.target.id);
    });
  }
};

// actions on click
// create modal employee
const createModalCard = (employeeList, index) => {
  let htmlOutput = `<div class="modal__close">&times;</div>
                <div class="modal__photo"><img src="https://randomuser.me/api/portraits/men/35.jpg" alt="Profile photo of employee"></div>
                <div class="modal__name">John Smith</div>
                <div class="modal__email"><a href="employee@example.com">employee@example.com</a></div>
                <div class="modal__city">Baltimore</div>
                <hr class="modal__line">
                <div class="modal__cell">(593) 364-3249</div>
                <div class="modal__location">851 Scoville Plymouth, WV 84814</div>
                <div class="modal__bday">Birthday: 01/04/85</div>`;
  return htmlOutput;
};

// show modal box
const showModal = (employeeList, index) => {
  const modal = document.querySelector('.modal');
  const modalCard = document.querySelector('#modalCard');
  // add modal employee card
  const cardContent = createModalCard(employeeList, index);
  modalCard.innerHTML = cardContent;
  // attach closeHandler when modal is 'created'
  const closeButton = document.querySelector('.modal__close');
  closeModalHandler(closeButton);
  // show the modal at this point
  modal.style.display = 'grid';
};

// close modal
const closeModalHandler = (item) => {
  item.addEventListener('click', (event) => {
    const modal = document.querySelector('.modal');
    const closeButton = document.querySelector('.modal__close');
    if (event.target == modal || event.target == closeButton)
      modal.style.display = 'none';
  });
};
