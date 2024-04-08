type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: 'Stan',
  privileges: ['create-server'],
  startDate: new Date()
};

type Combinable = string | number;

type Numeric = number | boolean;

type Universal = Combinable & Numeric;

function add(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}

type UnknownEmployee = Employee | Admin;

function printEmployeeInfo(emp: UnknownEmployee) {
  console.log('Name ' + emp.name);

  if ('privileges' in emp) {
    console.log('Privileges ' + emp.privileges);
  }

  if ('startDate' in emp) {
    console.log('Start Date ' + emp.startDate);
  }
}

printEmployeeInfo(e1);

console.log('---');

printEmployeeInfo({ name: 'Ivan', startDate: new Date() });

console.log('---');

class Car {
  drive() {
    console.log('Driving...');
  }
}

class Truck {
  drive() {
    console.log('Driving a truck...');
  }

  loadCargo(load: number) {
    console.log('Loading cargo ' + load);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();

  if (vehicle instanceof Truck) {
    vehicle.loadCargo(100);
  }
}

useVehicle(v1);
useVehicle(v2);