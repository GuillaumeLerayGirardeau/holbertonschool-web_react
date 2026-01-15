interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string
}

let student1: Student = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    location: 'New-York'
}

let student2: Student = {
    firstName: 'Lou',
    lastName: 'Smith',
    age: 28,
    location: 'Boston',
}

let studentsList: Student[] = [student1, student2];

const table = document.createElement("table");
const tbody = document.createElement("tbody");
const theader = document.createElement("thead");
const headerRow = document.createElement("tr");

const headerTitle: string[] = ['Firstname', 'Location'];

for (const title of headerTitle) {
    const headerElement = document.createElement("th");
    headerElement.textContent = title;

    headerRow.appendChild(headerElement);
}

table.appendChild(headerRow);

for(const student of studentsList) {
    const row = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = student.firstName;

    const locationCell = document.createElement("td");
    locationCell.textContent = student.location;

    row.appendChild(firstNameCell);
    row.appendChild(locationCell);

    tbody.appendChild(row);
}

table.appendChild(tbody);
table.setAttribute("border", "1");

document.body.appendChild(table);
