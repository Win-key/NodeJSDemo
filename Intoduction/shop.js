var faker = require('faker');

console.log("Welcome to the club :p");
console.log("=======================");
let printer = ()=>{
	let randomName = faker.name.findName();
	let randomEmail = faker.internet.email();
	// let randomCard = faker.helpers.createCard(); 	
	console.log(randomName, randomEmail);
}

for(let i = 0; i<10; i++){
	printer();
}