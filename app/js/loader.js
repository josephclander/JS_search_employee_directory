const loader = (index, employeeObjectList) => {
  const leftArrow = document.querySelector('.left-arrow');
  const rightArrow = document.querySelector('.right-arrow');
  const arrayOfCurrentIds = reCheckDom();
  let position = arrayOfCurrentIds.indexOf(index);
  arrowValidator(position, arrayOfCurrentIds);

  leftArrow.addEventListener('click', () => {
    if (position !== 0) {
      position--;
      let newCardPosition = arrayOfCurrentIds[position];
      const cardContent = createModalCard(newCardPosition, employeeObjectList);
      modalContent.innerHTML = cardContent;
    }
    arrowValidator(position, arrayOfCurrentIds);
  });

  rightArrow.addEventListener('click', () => {
    if (position !== arrayOfCurrentIds.length - 1) {
      position++;
      let newCardPosition = arrayOfCurrentIds[position];
      const cardContent = createModalCard(newCardPosition, employeeObjectList);
      modalContent.innerHTML = cardContent;
    }
    arrowValidator(position, arrayOfCurrentIds);
  });
};

const reCheckDom = () => {
  const fullList = document.getElementsByClassName('employee');
  const currentList = [...fullList].filter((item) => {
    return item.style.display !== 'none';
  });
  const arrayOfCurrentIds = currentList.map((item) => {
    return item.id;
  });
  return arrayOfCurrentIds;
};

const arrowValidator = (position, arrayOfCurrentIds) => {
  const leftArrow = document.querySelector('.left-arrow');
  const rightArrow = document.querySelector('.right-arrow');
  // if first position, left arrow disabled
  if (position === 0) {
    leftArrow.classList.add('disabled');
  } else {
    leftArrow.classList.remove('disabled');
  }
  // if last position, right arrow disabled
  if (position === arrayOfCurrentIds.length - 1) {
    rightArrow.classList.add('disabled');
  } else {
    rightArrow.classList.remove('disabled');
  }
};
