students = [
	{
		name: "Nani",
		gender: "male",
		email: "Venkatesh66@gmail.com",
		course: "diploma",
		collage: "kiet",
		address: "brahmapuri",
		phoneNumber: 5438790784,
		password:"nani@123"
	},
	{
		name: "Chitti",
		gender: "female",
		email: "chitti66@gmail.com",
		course: "10th class",
		collage: "zpph school",
		address: "brahmapuri",
		phoneNumber: 7997548947,
		password: "chitti@2233",
	},
	{
		name: "Chinna",
		gender: "male",
		email: "chinna@gmail.com",
		course: "inter",
		collage: "ravi",
		address: "brahmapuri",
		phoneNumber: 9948313478,
		password: "chinna@223",
	},
];
students.push({
	name: "Babby",
	gender: "male",
	email: "babby@gmail.com",
	course: "inter",
	collage: "aditya",
	address: "brahmapuri",
	phoneNumber: 9948413478,
	password: "babby@223",
});


function displayStudentDetails(studentSerionNo) {
	const studentIndex = studentSerionNo - 1;

	const tableBody = document.getElementById("students-list");
	const newRow = document.createElement("tr");
	newRow.className = "table-data-row";
	const serialNo=createTableRowCell(studentSerionNo,"serial-no");
	const name=createTableRowCell(students[studentIndex].name,"user-name");
	const email=createTableRowCell(students[studentIndex].email,"user-email");
	const gender=createTableRowCell(students[studentIndex].gender,"user-gender");
	const phoneNumber=createTableRowCell(students[studentIndex].phoneNumber,"user-phone-number");
	const password=createTableRowCell(students[studentIndex].password,"user-password");
	const collage=createTableRowCell(students[studentIndex].collage,"user-collage");
	const course=createTableRowCell(students[studentIndex].course,"user-course");
	const address = createTableRowCell(students[studentIndex].address, "user-address");

	newRow.append(
		serialNo,
		name,
		email,
		gender,
		phoneNumber,
		password,
		collage,
		course,
		address
	);
	tableBody.append(newRow);
}

function createTableRowCell(text, className) {
	const cell = document.createElement("td");
	cell.innerText = text;
	cell.className = className;
	return cell;
}

for (i = 1; i <= students.length; i++) {
	displayStudentDetails(i);
}
