class Person {
  constructor(name, age) {
    this.name = name;
    this.ageValue = age; // using a different internal variable to support getter/setter
  }

  // Getter for name
  get name() {
    return this.nameValue;
  }



  // Setter for age
  set age(newAge) {
    this.ageValue = newAge;
  }
}

class Student extends Person {
  study() {
    console.log(`${this.name} is studying`);
  }
}

class Teacher extends Person {
  teach() {
    console.log(`${this.name} is teaching`);
  }
}


// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
