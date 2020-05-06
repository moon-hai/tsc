abstract class Department {
  // id: string;
  // name: string;
  // private employees: string[] = [];
  // using protected to sharing instace class
  protected employees: string[] = [];

  constructor(protected readonly id: string, public name: string) {
    // this.id = id;
    // this.name = name;
  }

  static createEmployee(name: string) {
    return { name }
  }

  abstract describe (this: Department): void;

  addEmployee (employee: string) {
    this.employees.push(employee)
  }

  getEmployees (): void {
    console.log(this.employees)
  }
}

class ITDepartment extends Department {
  admin: string;

  constructor(id: string, admin: string) {
    super(id, 'IT');
    this.admin = admin
  }

  addEmployee (employee: string) {
    if (employee === 'John') return
    this.employees.push(employee)
  }

  getEmployees () {
    console.log(this.employees)
  }

  describe () {
    console.log(`IT ${this.id}`)
  }
}

const it = new ITDepartment('it', 'Max')
it.describe()

class AccoutingDepartment extends Department {
  private lastReport: string

  constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
    this.lastReport = reports[0]
  }

  get mostRecentReport () {
    if (this.lastReport) return this.lastReport
    throw new Error('No report found')
  }

  set mostRecentReport (report: string) {
    if (report) this.addReport(report)
  }

  describe () {
    console.log(`Accounting ${this.id}`)
  }

  getReports () {
    console.log(this.reports)
  }

  addReport (report: string) {
    this.reports.push(report)
    this.lastReport = report
  }
}

const accouting = new AccoutingDepartment('d1', []);
accouting.addReport('Today is Monday')
accouting.mostRecentReport = 'Today is Sunday'
accouting.mostRecentReport = 'Today is lala'

console.log(accouting.mostRecentReport)
accouting.describe()

accouting.getReports()
