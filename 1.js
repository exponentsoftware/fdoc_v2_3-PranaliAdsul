const companies = [
    {
      name: 'Company 1',
      employees: [
        { name: 'Alice', role: 'Developer', department: 'Engineering' },
        { name: 'Bob', role: 'Manager', department: 'Engineering' },
        { name: 'Charlie', role: 'Designer', department: 'Design' },
      ],
    },
     {
      name: 'Company 2',
      employees: [
        { name: 'Anna', role: 'Software Engineer', department: 'Engineering' },
        { name: 'Joy', role: 'Ass Manager', department: 'Engineering' },
        { name: 'Manu', role: 'fullstack', department: 'Frontend Developer' },
        { name: 'Urvi', role: 'UI Designer', department: 'Frontend Developer' },
      ],
    },
    {
      name: 'Company 3',
      employees: [
        { name: 'Aman', role: 'Team Leader', department: 'Assistant Manager' },
        { name: 'Pratik', role: 'Senior Consultant', department: 'Consultant' },
      ],
    },
    // ... (more companies)
  ];
  const processedCompanies = processCompanies(companies);
console.log(processedCompanies);

function processCompanies(companies) {
  return companies.map((company) => {
    const numEmployees = company.employees.length;
    const departments = {};

    company.employees.forEach((employee) => {
      if (departments[employee.department]) {
        departments[employee.department]++;
      } else {
        departments[employee.department] = 1;
      }
    });

    return {
      ...company,
      numEmployees,
      departments,
    };
  });
}
