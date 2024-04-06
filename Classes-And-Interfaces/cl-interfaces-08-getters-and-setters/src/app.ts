class Department {
  protected employees: string[] = [];

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
  private lastReport: string;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error('No reports found.');
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error('Please pass in a valid value!')
    }
    this.addReport(value);
  }

  constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
    this.lastReport = reports[0];
  }

  addEmployee(employee: string) {
    if (employee === 'Stan') {
      return;
    }
    this.employees.push(employee);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
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

accounting.mostRecentReport = 'Year End Report'
accounting.addReport('Something went wrong...');
console.log(accounting.mostRecentReport);


accounting.printReports();

accounting.addEmployee('Stan');
accounting.addEmployee('Steven');

accounting.printEmployeeInfo();

console.log(accounting);
