abstract class Department {
  static fiscalYear = 2023;
  protected employees: string[] = [];

  constructor(protected readonly id: string, public name: string) {

  }

  static createEmployee(name: string) {
    return { name: name };
  }

  abstract describe(this: Department): void;

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

  describe() {
    console.log(`IT Department with ID - ${this.id}`);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;

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

  private constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
    this.lastReport = reports[0];
  }

  static getInstance() {
    if (this.instance) {
      return this.instance;
    }

    this.instance = new AccountingDepartment('d4', []);
    return this.instance;
  }

  describe() {
    console.log(`Accounting Department with ID - ${this.id}`);
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

const employee1 = Department.createEmployee('Ivan');
console.log(employee1, Department.fiscalYear);

const it = new ITDepartment('d3', ['Stan']);

it.addEmployee('John');
it.addEmployee('Peter');

it.describe();
it.name = 'New name';
it.printEmployeeInfo();

console.log(it);

it.describe();

// const accounting = new AccountingDepartment('d4', []);

const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();

console.log(accounting);
console.log('---');
console.log(accounting2);

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
