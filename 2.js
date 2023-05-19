const projects = [
    {
      name: "ImpactX",
      client: "Nova Enterprises",
      tasks: [
        {
          title: "Event Planning and Coordination",
          assignee: "John",
          status: "In Progress",
          dueDate: "2023-04-15",
        },
        {
          title: "Branding and Identity Development",
          assignee: "Alice",
          status: "Completed",
          dueDate: "2023-04-10",
        },
      ],
    },
    {
      name: "CatalystX",
      client: "Apex Industries",
      tasks: [
        {
          title: "Continuous Improvement Programs and Lean Manufacturing",
          assignee: "Bob",
          status: "In Progress",
          dueDate: "2023-04-20",
        },
        {
          title: "Employee Training and Development ",
          assignee: "Tina",
          status: "Not Started",
          dueDate: "2023-04-18",
        },
      ],
    },
  ];
  // a. `findOverdueTasks` - Returns an array of tasks with a due date before a specified date.
function findOverdueTasks(projects, specifiedDate) {
    const overdueTasks = [];
  
     for (let i = 0; i < projects.length; i++) {
       const project = projects[i];
  
      for (let j = 0; j < project.tasks.length; j++) {
        const task = project.tasks[j];
        if (task.dueDate < specifiedDate) {
          overdueTasks.push(task);
        }
      }
    }
    return overdueTasks;
  }
  const specifiedDate = "2023-05-01";
  const overdueTasks = findOverdueTasks(projects, specifiedDate);
  console.log(overdueTasks);
  
  //b. Assigns a task with a specified title to an employee with a given name,
//  only if the employee and task exist

function assignTaskToEmployee(projects, taskTitle, employeeName) {
    let taskFound = false;
  
    projects.forEach((project) => {
      project.tasks.forEach((task) => {
        if (task.title === taskTitle) {
          task.assignee = employeeName;
          taskFound = true;
          console.log(`Task "${taskTitle}" assigned to employee "${employeeName}" in project "${project.name}".`);
        }
      });
    });
  
    if (!taskFound) {
      console.log(`Task "${taskTitle}" not found in any project.`);
    }
  }
  
  assignTaskToEmployee(projects, "Continuous Improvement Programs and Lean Manufacturing", "Bob");
  assignTaskToEmployee(projects, "Event Planning and Coordination", "John");

//c. Updates a task's status in a specified project only if the task and project exist. This function should be able to update the task's status
// Function to update a task's status in a specified project
function updateTaskStatus(projects, projectName, taskTitle, newStatus) {
  let project = projects.find((project) => project.name === projectName);
  let task = project.tasks.find((task) => task.title === taskTitle);
      if (task) {
      task.status = newStatus;
      console.log(`Updated the task '${taskTitle}' status is '${newStatus}' in the project '${projectName}'`);
      return;
    }
  }
updateTaskStatus(projects, 'ImpactX', 'Event Planning and Coordination', 'In Progress');
