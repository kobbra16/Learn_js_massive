// Работа с  массивами

// const cars = ['Mazda', 'Ford', 'BMW', 'Mercedes'] // структура данных содержащая набор элементов -массив
// const people = [
//     { name: 'Maxim ', budjet: 4200 },
//     { name: 'Elena ', budjet: 3500 },
//     { name: 'Vika ', budjet: 1700 }
// ]



const fib = [1, 1, 2, 3, 5, 8, 13, ] // сохраняет значение предыдущего числа путем сложения



// function 
// function addItemToEnd() {

// }
// console.log(cars)
//     //Method
// cars.push('Reno') // добавит новый "5" элемент в массив в конце списка
//     //     // console.log(cars)
// cars.unshift('lada')
// console.log(cars) // добавит новый"6"элемент в начале списка

// cars.shift() //удаляет первый элемент из массива
// const firstItem = cars.shift()
// const lastCar = cars.pop()
// console.log(firstItem)
// console.log(lastCar)
// console.log(cars)


// console.log(cars.reverse())//выведет все записи в обратном порядке
// console.log(cars)


// const index = cars.indexOf('BMW')
// cars[index] = 'porshe'
// console.log(cars)


//Задача 1.Сделать предложение 'hello , we learn JavaScript' =>'tpircSavaj nrael ew,olleh'
// const text = 'hello , we learn JavaScript'
// const reverseText = text.split('').reverse().join('')
// console.log(reverseText)
// const index = people.findIndex(function(person) {
//     return person.budjet === 3500
// })
// console.log(people[index]) //данный код выведет человека с бюджетом 3500.

// const person = people.find(function(person) {
//     return person.budjet === 3500
// })
// console.log(person) //данный код выведет человека с бюджетом 3500.


// let findedPerson
// for (const person of people) {
//     if (person.budjet === 3500) {
//         findedPerson = person
//     }
// }

// console.log(findedPerson)
//     //применен метод for of,данная функция находит человека с бюджетом 3500.


// const person = people.find(person => person.budjet === 3500)
// console.log(person) //применение стрелловной функции,находит человека с бюджетом 3500.
// console.log(cars.includes('Mazda')) //DВ данном случае includes проверяет есть ли в массиве мазда.


// const upperCaseCars = cars.map(car => {
//     return car.toUpperCase()
// })
// console.log(upperCaseCars)
// console.log(cars) //в данном случае uperCaseCars сначала покажет все машины в массиве с заглавной буквы.

// const pow2Fib = fib.map(num => num ** 2)
// console.log(pow2Fib) //по методу фибоначчи данная функция возводит кажде число из массива в квадрат.[1, 1, 2, 3, 5, 8, 13,]



// const pow2 = num => num ** 2


// const pow2Fib = fib.map(pow2)
// console.log(pow2Fib) //передает num2 **2 в pow2



// const pow2 = num => num ** 2

// const pow2Fib = fib.map(pow2)
// const filteredNumbers = pow2Fib.filter(num => num > 20)
// console.log(pow2Fib)
// console.log(filteredNumbers) //данный массив вернет намвсе значения больше 20.

// // const cars = ['Mazda', 'Ford', 'BMW', 'Mercedes'] // структура данных содержащая набор элементов -массив
// const people = [
//     { name: 'Maxim ', budjet: 4200 },
//     { name: 'Elena ', budjet: 3500 },
//     { name: 'Vika ', budjet: 1700 }
// ]


// const allBudjet = people
//     .filter(person => person.budjet > 2000) //фильтр работает по фильтрации бюджета person 2000
//     .reduce((acc, person) => { //вщзвращает сумму 3500+4200
//         acc += person.budjet
//         return acc
//     }, 0)

// console.log(allBudjet)