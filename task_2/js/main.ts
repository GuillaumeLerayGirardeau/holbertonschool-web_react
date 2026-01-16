// Interfaces for Director and teacher classes
interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;  
}

// Classes Director and Teacher, implementing their interfaces
class Director implements DirectorInterface {
    workFromHome(): string {
        return ('Working from home');
    }

    getCoffeeBreak(): string {
        return ('Getting a coffee break');
    }

    workDirectorTasks(): string {
        return ('Getting to director tasks');
    }
}

class Teacher implements TeacherInterface {
    workFromHome(): string {
        return ('Cannot work from home');
    }

    getCoffeeBreak(): string {
        return ('Cannot have a break');
    }

    workTeacherTasks(): string {
        return ('Getting to work');
    }
}

// Function creating an instace of a Teacher or Director, based on the salary variable
function createEmployee(salary: (number | string)): (TeacherInterface | DirectorInterface) {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher();
    }
    return new Director();
}

/* test script for createEmployee
console.log(createEmployee(200));
Teacher
console.log(createEmployee(1000));
Director
console.log(createEmployee('$500'));
Director
*/


// function to check if the current employee is an instance of a teacher or a director
function isDirector(employee: Teacher | Director): employee is Director {
    return (employee instanceof Director)
}

// Function to execute different work if the employee is a teacher or a director
function executeWork(employee: Teacher | Director): string {
    if(isDirector(employee)) {
        /* Test script
        console.log(employee.workDirectorTasks());
        // Expected result => Getting to director tasks
        */
        return employee.workDirectorTasks();
    }
    /* Test script
    console.log(employee.workTeacherTasks());
    // Expected result => Getting to work
    */
    return employee.workTeacherTasks();
}

/* Test script for executeWork, remove comments in function executeWork tu use them
executeWork(createEmployee(200));
executeWork(createEmployee(1000));
*/


// Creation of the string literal type Subject
type Subjects = 'Math' | 'History';

// Function teachClass that return a different string if todayClass is either Maths or History
function teachClass(todayClass: Subjects): string {
    if(todayClass === 'Math') {
        /* Test script
        console.log('Teaching Math')
        // Expected result => Teaching Math
        */
        return ('Teaching Math');
    }
    /* Test script
    console.log('Teaching History')
    // Expected result => Teaching History
    */
    return ('Teaching History');
}

/* Test script for teachClass, remove comments in function teachClass tu use them
teachClass('Math');
teachClass('History');
*/
