// DOM Elements
const studentForm = document.getElementById("studentForm");
const studentsContainer = document.querySelector(".students");
const nameInput = studentForm["name"];
const ageInput = studentForm["age"];
const GroupInput = studentForm["Group_number"];


const students = JSON.parse(localStorage.getItem("students")) || [];

const addStudent = (name, age, Group_number) => {
  students.push({
    name,
    age,
    Group_number,
  });

  localStorage.setItem("students", JSON.stringify(students));

  return { name, age, Group_number };
};

const createStudentElement = ({ name, age, Group_number }) => {
  // Create elements
  const studentDiv = document.createElement("div");
  const studentName = document.createElement("h2");
  const studentAge = document.createElement("p");
  const studentGroup = document.createElement("p");

  // Fill the content
  studentName.innerText = "Student name: " + name;
  studentAge.innerText = "Student age: " + age;
  studentGroup.innerText = "Student Group: " + roll;

  // Add to the DOM
  studentDiv.append(studentName, studentAge, studentGroup);
  studentsContainer.appendChild(studentDiv);

  studentsContainer.style.display = students.length === 0 ? "none" : "flex";
};

studentsContainer.style.display = students.length === 0 ? "none" : "flex";

students.forEach(createStudentElement);

studentForm.onsubmit = e => {
  e.preventDefault();

  const newStudent = addStudent(
    nameInput.value,
    ageInput.value,
    GroupInput.value
  );

  createStudentElement(newStudent);

  nameInput.value = "";
  ageInput.value = "";
  GroupInput.value = "";
};