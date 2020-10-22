class User {
    constructor(name, surname, age) {
        this.name = name;
        this.surname = surname;
        this.age = age;
    }
}
let vasya = new User("Василий",  "Васильев",  15)
let petya = new User("Петя",  "Иванов",  21)
// созданы два объекта
console.log(typeof petya)
console.log(typeof User)
console.log(typeof new User())
console.log(vasya.__proto__)
