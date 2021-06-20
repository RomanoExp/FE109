//Реализуйте класс Student (Студент) и Teacher (Учитель), который будет наследоваться от класса User, 
//Этот класс должен иметь следующие свойства: name (имя, наследуется от User), surname (фамилия, наследуется от User), year (год поступления в вуз). 
//Класс должен иметь метод getFullName() (наследуется от User), с помощью которого можно вывести одновременно имя и фамилию студента. 
//Также класс должен иметь метод getCourse(), который будет выводить текущий курс студента (от 1 до 5). Курс вычисляется так: нужно от текущего года отнять год поступления в вуз. Текущий год получите самостоятельно
//
//
//User
//-	Name
//-	Surname
//-	Status (учитель или студент)
//-	getFullName() метод
//
//Student
//-	 Наследует все свойства USER
//-	 Свои свойства: Year – год поступления
//-	 getCourse() – вывод текущего курса
//
//Teacher
//-	Наследует все свойства USER
//-	+ свои свойства – предмет (может быть несколько!) и зарплата
//-	Метод getCourse() – выводит все предметы, которые преподает
//Можно добавлять свои методы и параметры





class User {
    constructor(data) {
        this.name = data.name;
        this.surname = data.surname;
        this.status = data.status;

    }

    getFullName() {
        console.log(this.name + ' ' + this.surname);
    }
}


let userTest = new User({
    name: 'Ivan',
    surname: 'Ivanov',
    status: 'student'
});
console.log(userTest);
userTest.getFullName();


class Student extends User {
    constructor(data) {
        super(data);
        this.year = data.year;
    }

    getCourse() {
        let date = new Date;
        let course = date.getFullYear() - this.year;
        if (course > 5) {
            console.log('Магистр =)');
        }
        console.log(course + 'й' + ' Курс');
    }
}


let studentTest = new Student({
    name: 'Vasia',
    surname: 'Vasiliev',
    status: 'student',
    year: 2016
});

console.log(studentTest);
studentTest.getFullName();
studentTest.getCourse();




class Teacher extends User {
    constructor(data) {
        super(data);
        this.univerSubj = data.univerSubj;
        this.timeWork = data.timeWork;

    }

    getCourse() {
        console.log('Предметы: ' + this.univerSubj.join(', '));

    }
    getSalary() {
        console.log('Зарплата за месяц: ' + (this.timeWork * 5));

    }

}


let teacherTest = new Teacher({
    name: 'Petr',
    surname: 'Petroff',
    status: 'teacher',
    univerSubj: ['Geometry', 'Math', 'Algebra'],
    timeWork: 168

});

console.log(teacherTest);
teacherTest.getFullName();
teacherTest.getCourse();
teacherTest.getSalary();