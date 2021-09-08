const listElem = document.querySelector('.list');

const tasks = [
  { text: 'Buy milk', done: false },
  { text: 'Pick up Tom from airport', done: false },
  { text: 'Visit party', done: false },
  { text: 'Visit doctor', done: true },
  { text: 'Buy meat', done: true },
];

const renderTasks = (tasksList) => {
  listElem.innerHTML = '';

  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done }, index) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      const checkbox = document.createElement('input');

      checkbox.setAttribute('type', 'checkbox');
      checkbox.setAttribute('data-id', index);
      checkbox.checked = done;

      checkbox.classList.add('list__item-checkbox');
      if (done) {
        listItemElem.classList.add('list__item_done');
      }

      listItemElem.append(checkbox, text);

      return listItemElem;
    });

  listElem.append(...tasksElems);
};

renderTasks(tasks);

// add event to the elements
// create event handlers

const createBtnElement = document.querySelector('.create-task-btn');
const inputElement = document.querySelector('.task-input');
// input: obj
// output: undefined

// algo
// 1. get data
// 2. create task object , add to array
// 3. re-render
function onCreateTaskHandler() {
  const { value } = inputElement;

  const task = {
    text: value,
    done: false,
  };
  tasks.push(task);

  renderTasks(tasks);
}

//WEB FLOW
// 1. get data
// 2. render
// 3. update data , dont update DOM (!!!!!!!)
// 4. re-render

// input: string, callback
// output: undefined

createBtnElement.addEventListener('click', onCreateTaskHandler);

function updateTaskHandler(event) {
  // console.log(event.target);
  // console.log(event.target.classList);
  
  if (!event.target.classList.contains('list__item-checkbox')) {
    return;
  }

  console.log('checkbox is clicked')
  console.log(event.target.dataset)

  // TO DO
}

listElem.addEventListener('click', updateTaskHandler);
