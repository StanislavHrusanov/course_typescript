class Department {
  private employees: string[] = [];

  constructor(private readonly id: string, public name: string) {

  }

  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInfo() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, 'IT');
    this.admins = admins;
  }

}

class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
  }

  addReports(text: string) {
    this.reports.push(text);
  }

  printReports() {
    console.log(this.reports);
  }
}

const it = new ITDepartment('d3', ['Stan']);

it.addEmployee('John');
it.addEmployee('Peter');

it.describe();
it.name = 'New name';
it.printEmployeeInfo();

console.log(it);

it.describe();

const accounting = new AccountingDepartment('d4', []);

accounting.describe();

console.log(accounting);

accounting.addReports('Something went wrong...');

accounting.printReports();

console.log(accounting);
