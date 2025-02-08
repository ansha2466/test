// Show the selected page (Home, Today, Completed)
function showPage(pageId) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
      page.classList.remove('active');
    });
    // Show the selected page
    document.getElementById(pageId).classList.add('active');
  }
  
  // Add a new task
  function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
  
    if (taskInput.value.trim() === '') return;
  
    // Create a new task item
    const li = document.createElement('li');
    li.textContent = taskInput.value;
    
    // Add delete button to the task
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '❌';
    deleteBtn.style.marginLeft = '10px';
    deleteBtn.onclick = function() {
      li.remove();
    };
    li.appendChild(deleteBtn);
  
    taskList.appendChild(li);
    taskInput.value = '';
  }