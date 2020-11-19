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
    const employeeObjectList = results;
    // populate employee list attach to DOM
    const employeeHTMLList = mergeCardList(employeeObjectList);
    const employeesContainer = document.getElementById('employees');
    employeesContainer.innerHTML = employeeHTMLList;

    // click handlers
    const domEmployees = document.getElementsByClassName('employee');
    clickHandler(domEmployees, employeeObjectList);
    // const modal = document.querySelector('.modal');
    // closeModalHandler(modal);

    // search functionality
    const searchbar = document.querySelector('#searchInput');
    searchbar.addEventListener('keyup', searchHandler);
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
const clickHandler = (employeeDOMList, employeeObjectList) => {
  for (let i = 0; i < employeeDOMList.length; i++) {
    employeeDOMList[i].addEventListener('click', (event) => {
      if (employeeDOMList[i] !== event.target) return;
      showModal(event.target.id, employeeObjectList);
    });
  }
};

// actions on click
// create modal employee
const createModalCard = (index, employeeObjectList) => {
  const { street, city, state, postcode } = employeeObjectList[index].location;
  const address = `${street.number} ${street.name}, ${city}, ${state}, ${postcode}`;
  const dateString = employeeObjectList[index].dob.date;
  const birthday = parseDate(dateString);

  let htmlOutput = `<div class="modal__photo"><img src="${employeeObjectList[index].picture.large}" alt="Profile photo of employee"></div>
                <div class="modal__name">${employeeObjectList[index].name.first} ${employeeObjectList[index].name.last}</div>
                <div class="modal__email"><a href="mailto:${employeeObjectList[index].email}">${employeeObjectList[index].email}</a></div>
                <div class="modal__city">${employeeObjectList[index].location.city}</div>
                <hr class="modal__line">
                <div class="modal__cell">${employeeObjectList[index].cell}</div>
                <div class="modal__location">${address}</div>
                <div class="modal__bday">Birthday: ${birthday}</div>`;
  return htmlOutput;
};

// date parser
const parseDate = (date) => {
  // need day / month / year
  // example input = 1957-11-16T01:45:46.027Z
  // so arrives as full year-month-day
  const year = date.substr(2, 2);
  const month = date.substr(5, 2);
  const day = date.substr(8, 2);
  const parsedDate = `${day}/${month}/${year}`;
  return parsedDate;
};

// show modal box
const showModal = (index, employeeObjectList) => {
  const modal = document.querySelector('.modal');
  const modalContent = document.querySelector('#modalContent');
  // add modal employee card
  // show the modal at this point
  modal.style.display = 'grid';
  const cardContent = createModalCard(index, employeeObjectList);
  modalContent.innerHTML = cardContent;
  closeModalHandler(modal);
  loader(index, employeeObjectList);
};

// close modal
const closeModalHandler = (item) => {
  item.addEventListener('click', (event) => {
    const modal = document.querySelector('.modal');
    const closeButton = document.querySelector('.modal__close');
    const modalContent = document.querySelector('#modalContent');
    if (event.target == modal || event.target == closeButton) {
      modal.style.display = 'none';
      modalContent.innerHTML = defaultModalContent;
    }
  });
};

// default loading modal
const defaultModalContent = `<div class="mock mock__photo"></div>
<div class="mock mock__name"></div>
<div class="mock mock__email"></div>
<div class="mock mock__city"></div>
<hr class="modal__line">
<div class="mock mock__cell"></div>
<div class="mock mock__location"></div>
<div class="mock mock__bday">`;
