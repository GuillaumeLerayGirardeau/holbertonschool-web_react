// Interface Teacher 
interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;

    [key: string]: any;
}

// Extension de l'interface teacher avec l'interface Directors
interface Directors extends Teacher {
    numberOfReports: number;
}

//Interface définissant les arguments de la fonction printTeacher
interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

// Fontion printTeacher
const printTeacher: printTeacherFunction = (firstName, lastName) => {
    return (`${firstName[0]}. ${lastName}`);
}


// Interface de la classe StudentClass
interface StudentClassInterface {
    firstName: string;
    lastName: string;
    workOnHomework(): string;
    displayName(): string;
}

//Interface du constructeur de la classe StudentClass
interface StudentConstructorInterface {
    new (firstName: string, lastName: string): StudentClassInterface;
}

// Classe StudentClass, implémentant une interface
class StudentClass implements StudentClassInterface {
    constructor(public firstName: string, public lastName: string) {}

    workOnHomework(): string {
        return ('Currently working');
    }

    displayName(): string {
        return (this.firstName);
    }
}
