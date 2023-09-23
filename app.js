const btnCreate = document.querySelector('.btn-main');
btnCreate.addEventListener('click', () =>{
  const input = document.querySelector('.input-main');
  const list = document.querySelector('ul');
  
  list.insertAdjacentHTML(
    'afterbegin',
    `<li> ${input.value} </li>`
  );
  input.value = ''; 
});

//Hide or Show all the lists 
const btnToggle = document.querySelector('.btn-toggle');
btnToggle.addEventListener('click', () => {                          
 const listContainer = document.querySelector('.list-container');
  if (listContainer.style.display === 'none') {
    btnToggle.textContent = 'Hide List';
    listContainer.removeAttribute('style');
  }else {
    btnToggle.textContent = 'Show List';
    listContainer.style.display = 'none';
  }
});

//Remove the Last Item from the lists
const btnRemove = document.querySelector('.btn-remove');
btnRemove.addEventListener('click', () => {
  const lastItem = document.querySelector('li:last-child');
  lastItem.remove();                 
});







