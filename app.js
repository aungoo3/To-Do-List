const btnCreate = document.querySelector('.btn-main');
const taskList = document.querySelector('.list-container ul');
const listItems = taskList.children;

function attachRemoveButton(li) {
  let remove = document.createElement('button');
  remove.className = 'remove';
  remove.textContent = 'Delete';
  li.appendChild(remove);
}

for (let i = 0; i < listItems.length; i++) {
  attachRemoveButton(listItems[i]);
}

taskList.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    const button = event.target;
    const li = button.parentNode;
    li.remove();
  }
});

btnCreate.addEventListener('click', () => {
  let ul = document.getElementsByTagName('ul')[0];
  const input = document.querySelector('.input-main');
  let li = document.createElement('li');
  li.textContent = input.value;
  attachRemoveButton(li);
  ul.prepend(li);
  input.value = '';
});

//Hide & Show all the lists 
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

