
//charAt(x) - Эта функция вернет символ в позиции x в строке.
let myString = 'jQuery FTW!!!';
console.log(myString.charAt(7));        //output: F

//charCodeAt(position) - Эта функция вернет значение Unicode символа в позиции «x» в строке.
let message="jquery4u"
console.log(message.charCodeAt(1))      //113

//concat(v1, v2,..) - Эта функция объединяет одну или несколько строк (argv1, v2 и т. д.) в существующую.
message="Sam"
let final=message.concat(" is a"," hopeless romantic.")     // "Sam is a hopeless romantic."
console.log(final)

//fromCharCode(c1, c2,...) - Функция вернет строку, созданную с использованием указанной последовательности значений Unicode (argc1, c2).
console.log(String.fromCharCode(97,98,99,120,121,122))  //output: abcxyz
console.log(String.fromCharCode(72,69,76,76,79))        //output: HELLO

//indexOf(char/substring) -- Ищет и (если находит) возвращает порядковый номер искомого символа или подстроки в строке.
                            // Если не найдено, возвращается -1. «Начало» — это необязательный аргумент,
                            // указывающий позицию в строке, с которой начинается поиск. По умолчанию 0.
let sentence="Hi, my name is Sam!"
if (sentence.indexOf("Sam") != -1)
    console.log("Sam is in there!")

//lastIndexOf(substr, [start])  Ищет и (если находит) возвращает порядковый номер искомого символа
                                // или подстроки в строке. Ищет строку с конца в начало. Если не найдено,
                                // возвращается -1. «Начало» — это необязательный аргумент, указывающий
                                // позицию в строке, с которой начинается поиск. Значение по умолчанию — string.length-1
myString = 'javascript rox';
console.log(myString.lastIndexOf('r')); //output: 11

// Выполняет поиск совпадения в строке на основе регулярного выражения.
// Он возвращает массив информации или ноль, если совпадений не найдено.
//match(regexp) //select integers only
let intRegex = /[0-9 -()+]+$/;

let myNumber = '999';
let myInt = myNumber.match(intRegex);
console.log(myInt); //output: 999   [ '999', index: 0, input: '999', groups: undefined ]

myString = '999 JS Coders';
myInt = myString.match(intRegex);
console.log(myInt);     //output: null

//Ищет и заменяет часть регулярного выражения (или подстроки) (совпадение) замененным текстом.
//replace(substr, replacetext)
myString = '999 JavaScript Coders';
console.log(myString.replace(/JavaScript/i, "jQuery"));     //output: 999 jQuery Coders

//replace(regexp, replacetext)
myString = '999 JavaScript Coders';
console.log(myString.replace(new RegExp( "999", "gi" ), "The"));//output: The JavaScript Coders


//search(regexp)    Проверяет совпадение в строке. Он возвращает индекс совпадения или -1, если не найдено.
intRegex = /[0-9 -()+]+$/;

myNumber = 'asdsd 999';
let isInt = myNumber.search(intRegex);
console.log(isInt); //output: 0

// Эта функция возвращает подстроку строки на основе аргументов индекса «начало» и «конец»,
// НЕ включая сам индекс «конец». «Конец» является необязательным, и если он не указан,
//     срез включает все символы от «начала» до конца строки.

//slice(start, end)
let text="excellent"
text.slice(0,4) //returns "exce"
text.slice(2,4) //returns "ce"

// Это разделит строку на несколько частей в соответствии с указанным разделителем и вернет массив,
// содержащий каждый элемент. Необязательный «предел» — это целое число,
// которое позволяет указать максимальное количество возвращаемых элементов.
//split(delimiter)
message="Welcome to jQuery4u"
//word[0] contains "We"
//word[1] contains "lcome to jQuery4u"
let word=message.split("l")     //[ 'We', 'come to jQuery4u' ]
console.log(word)

// Эта функция возвращает символы в строке, начиная с «start» и заканчивая указанным количеством символов «length».
// «Длина» не является обязательной, и если она опущена, предполагается, что она до конца строки.
//substring(from, to)
text="excellent"
text.substring(0,4) //returns "exce"
text.substring(2,4) //returns "ce"

// Он возвращает символы в строке между индексами «от» и «до», НЕ включая сам «до». «Кому»
// является необязательным, и если он опущен, предполагается, что до конца строки.
//substring(from, [to])
myString = 'javascript rox';
myString = myString.substring(0, 10);
console.log(myString)       //output: javascript

// Он используется для проверки того, содержит ли строка указанную строку или символы.
//includes()
mystring = "Hello, welcome to edureka";
let n = mystring.includes("edureka");
console.log(n)                          //output: True

// Эта функция проверяет, заканчивается ли строка указанной строкой или символами.
//endsWith()
mystr = "List of javascript functions";
n = mystr.endsWith("functions");     //output: True

// Это возвращает новую строку с указанным количеством копий существующей строки.
//repeat()
string = "Welcome to Edureka";
string.repeat(2);           //output: Welcome to Edureka Welcome to Edureka

// Он используется для возврата примитивного значения объекта String.
//valueOf()
mystr = "Hello World!";
let res = mystr.valueOf();    //output: Hello World!

//Эта функция удаляет пробелы с обоих концов строки.
//trim()
let str = "     Hello Edureka!     ";
console.log(str.trim());

