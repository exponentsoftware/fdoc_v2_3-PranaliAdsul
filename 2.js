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
  