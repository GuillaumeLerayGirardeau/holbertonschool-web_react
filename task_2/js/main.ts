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

/* test script 
console.log(createEmployee(200));
Teacher
console.log(createEmployee(1000));
Director
console.log(createEmployee('$500'));
Director
*/
