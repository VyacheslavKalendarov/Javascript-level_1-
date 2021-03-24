/* 1. Дан код:
var a = 1, b = 1, c, d;

c = ++a; alert(c);           // 2  «Префиксная форма» инкремента: увеличивает значение переменной на 1 и возвращает значение

d = b++; alert(d);           // 1  "постфиксная форма" инкремента: увеличивает значение переменной на 1, но возвращает предыдущее значение

c = (2+ ++a); alert(c);      // 5  увеличение значение переменной на 2 (строка 4 и 8)
d = (2+ b++); alert(d);      // 4  увеличение значение переменной b на 2, но вернулось предыдущее значение переменной b, т.е. 2 
alert(a);                    // 3    было увеличение на 1 два раза посредством инкрементов
alert(b);                    // 3    было увеличение на 1 два раза посредством инкрементов
Почему код даёт именно такие результаты? */


/* 2. Чему будет равен x в примере ниже?
var a = 2;
var x = 1 + (a *= 2);

ответ: 5 */

/* 3. Объявить две целочисленные переменные a и b и задать им произвольные начальные значения. Затем написать скрипт, который работает по следующему принципу:
если a и b положительные, вывести их разность;
если а и b отрицательные, вывести их произведение;
если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом.

function calculation (a, b) {
    if (a >= 0 && b >= 0) {
        return a - b;
    } else if (a < 0 && b < 0) {
        return a * b;
    } else {
        return a + b;
    }
} */

/* 4.Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15 

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
  }

let a = getRandomIntInclusive(0, 15)
switch (a) {
    case 0:
        alert(a++)
	case 1:
		alert(a++);
	case 2:
		alert(a++);
	case 3:
		alert(a++);
	case 4:
		alert(a++);
	case 5:
		alert(a++);
	case 6:
		alert(a++);
	case 7:
		alert(a++);
	case 8:
		alert(a++);
	case 9:
		alert(a++);
	case 10:
		alert(a++);
	case 11:
		alert(a++);
	case 12:
		alert(a++);
	case 13:
		alert(a++);
	case 14:
		alert(a++);
	case 15:
		alert(a);
		break
} */

/*5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return.

var a = +prompt('Введите a: ');
var b = +prompt('Введите b: ');

function add(a, b) {
	return a + b;
}

var result = add(a, b);
alert('Сумма a и b равна: ' + result);

function sub(a, b) {
	return a - b;
}

result = sub(a, b);
alert('Разность a и b равна: ' + result);

function mult(a, b) {
	return a * b;
}
result = mult(a, b);

alert('Произведение a и b равно: ' + result);

function div(a, b) {
	return a / b;
}
result = div(a, b);
alert('Частное a и b равно: ' + result); */

 /* 6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от переданного значения операции выполнить одну из арифметических операций (использовать функции из пункта 5) и вернуть полученное значение (использовать switch). 

function mathOperation(arg1, arg2, operation){
    switch (operation) {
		case 'сложение':
			return arg1 + arg2;
			break;
		case 'вычитание':
			return arg1 - arg2;
			break;
		case 'умножение':
			return arg1 * arg2;
			break;
		case 'деление':
			return arg1 / arg2;
			break;
    }
}  */