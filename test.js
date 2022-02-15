
function copy(mainObj){
    let objCopy = {};
    let key;
    for(key in mainObj){
        objCopy[key] = mainObj[key];
    }
    return objCopy
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y:4
    }
};

const add = {
    d: 17,
    e: 20,
}

const clone = Object.assign({}, add);
clone.d = 20;
// console.log(clone)
// console.log(add)


const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'Hello';

// console.log(newArray)
// console.log(oldArray)

const video = ['youtube', 'vimeo', 'rutube'],
    blogs = ['wordpress', 'livejournal', 'blogger'],
    internet = [...video, ...blogs, 'vk', 'facebook'];
// console.log(video)
// console.log(blogs)
// console.log(internet.sort())

function log(a, b, c){
    // console.log(a);
    // console.log(b);
    // console.log(c);
}
class Person {
    #id;
    #name;
    constructor(id, name) {
        this.#id = id;
        this.#name = name
    }
    getId() {
        return this.#id;
    }
    getName() {
        return this.#name
    }
    toString() {
        return `id: ${this.#id}; name: ${this.#name};`
    }
}
const person = new Person(123, 'Moshe');
// console.log(`person is ${person}`)
class Employee extends Person {
    #salary;
    constructor(id, name, salary) {
        super(id, name); //call the constructor of the class Person
        this.#salary = salary;
    }
    computeSalary() {
        return this.#salary
    }
    toString() {
        return super.toString() + ` salary: ${this.computeSalary()}`
    }
}
const person2 = new Employee(124, "Sara", 5000);
// console.log(`person2 is ${person2}`)
// console.log(typeof(person2)) // just object
// console.log(person2.constructor.name) // only this way JS allow getting constructor name
class Child extends Person {
    #kindergarten
    constructor(id, name, kindergarten) {
        super(id, name);
        this.#kindergarten = kindergarten
    }
    getKindergarten() {
        return this.#kindergarten;
    }
    toString() {
        return `${super.toString()} kindergarten: ${this.#kindergarten}`
    }
}
const person3 = new Child(125, 'Yakob', 'Shalom');
// console.log(`person3 is ${person3}`)

class WageEmployee extends Employee {
    #hours
    #wage
    constructor(id, name, salary, hours, wage) {
        super(id, name, salary)
        this.#hours = hours;
        this.#wage = wage;
    }
    computeSalary() {
        return super.computeSalary() + this.#hours * this.#wage
    }


}
const person4 = new WageEmployee(126, 'Asaf', 1000, 10, 100);
// console.log(`person4 is ${person4}`)
/**************************************************************HW #17 definition */
const persons = [
    new Child(100, 'Olya', 'Shalom'),
    new WageEmployee(104, 'Tolya', 1000, 10, 100),
    new Child(101, 'Serega', "Boker"),
    new WageEmployee(104, 'Tolya', 1000, 10, 100),
    new Child(102, 'Kolya', 'Shalom'),
    new Employee(103, 'Vasya', 1000),
]
function countOfPersonType(persons, type) {
    return persons.filter(i => i.constructor.name === type).length;
    //return count of persons of the given type
    //Example:
    //countOfPersonType(persons, 'WageEmployee') ---> 1
}
function computeSalaryBudget(persons) {
    return persons.reduce((acc, index) => "computeSalary" in index ? acc +=index.computeSalary() : acc, 0)
    //returns total salary of all employee objects in the given array
    //Example:
    //computeSalaryBudget(persons) ---> 3000
}
function countChildrenGindergarten(persons, kindergarten) {
    return persons.reduce((acc, index) => (("getKindergarten" in index) && (index.getKindergarten() === kindergarten)) ? acc +=1 : acc, 0)
    //returns number of children in the given kindergarten
    //Example:
    //countChildrenGindergarten(persons, 'Shalom') ---> 2
}
let test = countOfPersonType(persons, 'WageEmployee')
console.log(test);
test = computeSalaryBudget(persons)
console.log(test);
console.log(countChildrenGindergarten(persons, 'Shalom'));
test = countChildrenGindergarten(persons, 'Shalom');
console.log(test)

// let test = computeSalaryBudget(persons)
// console.log(test + " test")

















