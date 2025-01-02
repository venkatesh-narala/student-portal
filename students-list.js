students = [
	{
		name: "Nani",
		gender: "male",
		Email: "Venkateshnarala66@gmail.com",
		course: "diploma",
		collage: "kiet",
		Address: "brahmapuri",
		phoneNumber: 7997543478,
	},
	{
		name: "Chitti",
		gender: "female",
		Email: "chitti66@gmail.com",
		course: "10th class",
		collage: "zpph school",
		Address: "brahmapuri",
		phoneNumber: 7997548947,
		password: "chitti@2233",
	},
	{
		name: "Chinna",
		gender: "male",
		Email: "chinna@gmail.com",
		course: "inter",
		collage: "ravi",
		Address: "brahmapuri",
		phoneNumber: 9948113478,
		password: "chinna@223",
	},
	{
		name: "Chinna",
		gender: "male",
		Email: "chinna@gmail.com",
		course: "inter",
		collage: "ravi",
		Address: "brahmapuri",
		phoneNumber: 9948113478,
		password: "chinna@223",
	},
];
students.push({
	name: "Babby",
	gender: "male",
	Email: "babby@gmail.com",
	course: "inter",
	collage: "aditya",
	Address: "brahmapuri",
	phoneNumber: 9948113478,
	password: "babby@223",
});

function displayStudentDetails(studentSerionNo) {
	const studentIndex = studentSerionNo - 1;

	const tableBody = document.getElementById("students-list");
	const newRow = document.createElement("tr");
	newRow.className = "table-data-row";

	const serialNoCell = document.createElement("td");
	serialNoCell.innerText = studentSerionNo;
	serialNoCell.className = "serial-no";

	const studentnameCell = document.createElement("td");
	studentnameCell.innerText = students[studentIndex].name;
	studentnameCell.className = "user-name";

	const emailCell = document.createElement("td");
	emailCell.innerText = students[studentIndex].Email;
	emailCell.className = "user-email";

	const genderCell = document.createElement("td");
	genderCell.innerText = students[studentIndex].gender;
	genderCell.className = "user-gender";

	const phoneNumberCell = document.createElement("td");
	phoneNumberCell.innerText = students[studentIndex].phoneNumber;
	phoneNumberCell.className = "user-phone-number";

	const passwordCell = document.createElement("td");
	passwordCell.innerText = students[studentIndex].password;
	passwordCell.className = "user-password";

	const collageCell = document.createElement("td");
	collageCell.innerText = students[studentIndex].collage;
	collageCell.className = "user-collage";

	const courseCell = document.createElement("td");
	courseCell.innerText = students[studentIndex].course;
	courseCell.className = "user-course";
	
	AddressCell = createTableRowCell(students[studentIndex].Address, "user-address");

	newRow.append(
		serialNoCell,
		studentnameCell,
		emailCell,
		genderCell,
		passwordCell,
		phoneNumberCell,
		collageCell,
		courseCell,
		AddressCell
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
