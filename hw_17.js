class Person{
    #id;
    #name;
    constructor(id, name) {
        this.#id = id;
        this.#name = name;
    }
    getId(){
        return this.#id;
    }
    getName(){
        return this.#name;
    }
    toString(){
        return `id: ${this.#id}, name: ${this.#name}`;
    }
}
const person = new Person(123, "Moshe");
// console.log(person.constructor.name)

class Employee extends Person{
    #salary;
    constructor(id, name, salary) {
        super(id, name);
        this.#salary = salary;
    }
    computeSalary(){
        return this.#salary;
    }
    toString() {
        return super.toString() + ` salary: ${this.computeSalary()}`
    }
}
const person2 = new Employee(1234, 'Sara', 2_000);

class Child extends Person {
    #kindergarten
    constructor(id, name, kindergarten) {
        super(id, name);
        this.#kindergarten = kindergarten;
    }
    getKindergarten(){
        return this.#kindergarten;
    }
    toString() {
        return super.toString() + ` kindergarten: ${this.#kindergarten}`;
    }
}
const person3 = new Child(125, 'Yakod', 'Shalom');

class WageEmployee extends Employee{
    #hours
    #wage
    constructor(id, name, salary, hours, wage) {
        super(id, name, salary,);
        this.#hours = hours;
        this.#wage = wage;
    }
    computeSalary() {
        return super.computeSalary() + this.#hours * this.#wage;
    }
}

const person4 = new WageEmployee(126, 'Asaf', 1000, 10, 100);

const persons = [
    new Child(100, 'Olya', 'Shalom'),
    new Child(101, 'Serega', "Boker"),
    new Child(102, 'Kolya', 'Shalom'),
    new Employee(103, 'Vasya', 1000),
    new WageEmployee(104, 'Tolya', 1000, 10, 100)
]

function countOfPersonType(persons, type) {
    let a = 0;
    persons.filter(i => { i.constructor.name === type ? a=a+1 : a;})
    console.log(a)
}
countOfPersonType(persons, 'WageEmployee');
function computeSalaryBudget(persons) {
    const res = persons.reduce((acc, index) => {
        if(index.constructor.name === 'WageEmployee')
        {
            let res = index.computeSalary();
            acc = acc + res;
        }
        return acc;
    }, 0)
    console.log(res);
}
computeSalaryBudget(persons);
function countChildrenGindergarten(persons, kindergarten) {
    let res = 0;

    persons.filter(i => {
        let b = Boolean(i.getKindergarten) ? i.getKindergarten() : false;
        if(b === kindergarten){
            // console.log("+");
            res=res+1;
        }
        return res;
        }, 0)
    console.log(res)
}
countChildrenGindergarten(persons, 'Shalom')
