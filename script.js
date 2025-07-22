//complete this code
class Person {
	constructor(name, number){
		this.name = name;
		this.number = number;
	}

		get name(){
			return this.name;
		}
		set age(number){
			this.number = number;
		}
}

class Student extends Person {
	study(){
		console.log(`${this.name} is studying`)}
}

class Teacher extends Person {
		teach(){
		console.log(`${this.name} is teaching`)}
}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
