const loader = (index, employeeObjectList) => {
  const leftArrow = document.querySelector('.left-arrow');
  const rightArrow = document.querySelector('.right-arrow');
  const modal = document.querySelector('.modal');

  const leftMove = () => {
    let modalDisplayed = modal.style.display === 'grid';
    if (position !== 0 && modalDisplayed) {
      position--;
      let newCardPosition = arrayOfCurrentIds[position];
      const cardContent = createModalCard(newCardPosition, employeeObjectList);
      modalContent.innerHTML = cardContent;
    }
    arrowValidator(position, arrayOfCurrentIds);
  };

  const rightMove = () => {
    let modalDisplayed = modal.style.display === 'grid';
    if (position !== arrayOfCurrentIds.length - 1 && modalDisplayed) {
      position++;
      let newCardPosition = arrayOfCurrentIds[position];
      const cardContent = createModalCard(newCardPosition, employeeObjectList);
      modalContent.innerHTML = cardContent;
    }
    arrowValidator(position, arrayOfCurrentIds);
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

  const arrayOfCurrentIds = reCheckDom();
  let position = arrayOfCurrentIds.indexOf(index);
  arrowValidator(position, arrayOfCurrentIds);

  leftArrow.addEventListener('click', leftMove);
  rightArrow.addEventListener('click', rightMove);

  const arrowKeyHandler = (e) => {
    let modalDisplayed = modal.style.display === 'grid';
    if (modalDisplayed) {
      if (e.keyCode === 37) leftMove();
      if (e.keyCode === 39) rightMove();
    }
  };

  document.addEventListener('keydown', arrowKeyHandler);
};
