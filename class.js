class Student {
    constructor(sId, sName) {
        this.id = sId;
        this.name = sName;
        this.schoolName = "comilla school"
    }
}

const student1 = new Student(12, "piash");
const student2 = new Student(22, "priya");
const student3 = new Student(13, "tuntuni");

console.log(student1, student2, student3);
console.log(student1.name, student2.name);