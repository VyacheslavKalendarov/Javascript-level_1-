/* 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100. 

'use strict'

const seive = []
const primes = []
let i = 2 

while (i <= 100){
    if (!seive[i]) {
        primes.push(i)
        for (let j = i * 2; j <= 100; j += i) {
            seive[j] = true
        }
    }
    i++
}

console.log(primes) */

/** 2. С этого урока начинаем работать с функционалом интернет-магазина.
 * Предположим, есть сущность корзины. Нужно реализовать функционал подсчета
 * стоимости корзины в зависимости от находящихся в ней товаров.
 

const shoppingCart = [
     ["Item1", 100, "RUB", 1],
     ["Item2", 200, "RUB", 3],
     ["Item3", 300, "RUB", 5],
]
 
let purchaseValue = 0;
 
for (let i = 0; i < shoppingCart.length; i++) {
     purchaseValue += shoppingCart[i][1] * shoppingCart[i][3];
}
 console.log("В корзине товаров на сумму: ", purchaseValue); */
 
 
 /** 3. Товары в корзине хранятся в массиве. Задачи:
  * Организовать такой массив для хранения товаров в корзине;
  * Организовать функцию countBasketPrice, которая будет считать стоимость корзины.
  *
  
 
 console.log('Задание № 3:')
 
 function countBasketPrice (goods) {
     let purchaseValue = 0;
 
     for (let i = 0; i < goods.length; i++) {
         purchaseValue += goods[i][1] * goods[i][3];
     }
     return purchaseValue;
 }
 
 console.log("В корзине товаров на сумму: ", countBasketPrice(shoppingCart));*/
 






/* *4 Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла.

'use strict'
for (let i = 0; i < 10; console.log(i++)) { } */

/*5 * Нарисовать пирамиду с 20 рядами с помощью console.log

for (let i = 0; i < 20; i++) {
    let str = '';
    for (let j = 0; j <= i; j++)
        str += 'x';
    console.log(str);

} */