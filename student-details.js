let student = localStorage.getItem("student");
student = JSON.parse(student);

let name = document.getElementById("name");
name.innerText = student.name;

let gender = document.getElementById("Gender");
gender.innerText = student.gender;

let email = document.getElementById("Email");
email.innerText = student.email;

let course = document.getElementById("Course");
course.innerText = student.course;

let collage = document.getElementById("Collage");
collage.innerText = student.collage;

let Address = document.getElementById("Address");
Address.innerText = student.address;

let phoneNumber = document.getElementById("Phone-number");
phoneNumber.innerText = student.phoneNumber;
