//функция, которая складывает любое количество аргументов

function sum(){
    console.log(arguments) // создаем нумерованные объект аргументов
    let arg = Object.values(arguments); // в виде массива все значения складываются
    console.log(arg)
    let result = 0;
    for (let i = 0; i < arg.length; i ++){
        result += arg[i];
    }
    return result;
}
console.log(sum(1, 3))

console.log(sum(1, 2))
console.log(sum(1, 2, 3))
console.log(sum(1, 2, 3, 4))
