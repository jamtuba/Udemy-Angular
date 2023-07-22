// Primitives

let age: number;

age = 12;

let userName: string;

userName = 'Max';

let isInstructor: boolean;

isInstructor = true;

// More complex types

let hobbies: string[];

hobbies = ['Sports', 'Cooking'];

type Person = {
    name: string, 
    age: number
};


let person : Person;

person = {
    name: 'Max',
    age: 32
};

let people: Person[];

// Type inference, union types |

let course: string | number = 'React - The Complete Guide';

course = 12341;

// Functions & types

function add(a: number, b: number){
    return a + b;
}

function printOutput(value: any){
    console.log(value);
}

// Generics

function insertAtBeginning<T>(array: T[], value: T){
    const newArray = [value, ...array];
    return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]
const stringArray = insertAtBeginning(['a', 'b', 'c'], 'd');

// Classes & interfaces

class Student{
    firstName: string;
    lastName: string;
    age: number;
    private courses: string[];

    constructor(firstName: string, lastName: string, age: number, courses: string[]){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.courses = courses;
    }

    enrol(courseName: string){
        this.courses.push(courseName);
    }

    listCourses(){
        return this.courses.slice();
    }
}

const student = new Student('Max', 'Schwarz', 32, ['Angular', 'React']);
student.enrol('MongoDB');

interface Human {
    firstName: string;
    age: number;

    greet: () => void;
}

let max: Human;

max = {
    firstName: 'Max',
    age: 32,
    greet() {
        console.log('Hello!');
    }
};

class Instructor implements Human {
    firstName = "Max";
    age = 32;
    greet () {
        console.log('Hello!!!!');
    }
}