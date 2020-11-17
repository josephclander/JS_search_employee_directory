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
    console.log(results);
  });

//   // create a card
//   const createEmployeeCard = (employee) => {
//     let htmlOutput = `<div class="employee">
//     <div class="employee__photo"></div>
//     <div class="employee__info">
//         <div class="employee__name"></div>
//         <div class="employee__email"></div>
//         <div class="employee__state"></div>
//     </div>
// </div>`
//   }
