let name = "Anastasiya";
let age = 40;
let isStudent = true;
let rate = 4.5;


console.log(typeof name);
console.log(typeof age);
console.log(typeof isStudent);
console.log(typeof rate);

//value data type vs reference data type

let anastasiyaAge = age;//reference data type
console.log(anastasiyaAge);//выведет 40
age = 20;
console.log(anastasiyaAge);//выведет 40 потому что age - это примитив

//создаем объект, чтобы работать со ссылочными типами данных
let person = {
    name: "Anastasiya",
    age: 40
}

let person2 = person;
console.log(person);
console.log(person2);
person2.name = "Elvira";
console.log(person);
person.age = 20;
console.log(person2);
console.log(person);