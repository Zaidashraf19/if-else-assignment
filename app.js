var user = "zaid"
user.toUpperCase()
console.log(user.toUpperCase());


// Q1)
const divideby3 = document.querySelector ("#divideby3");
const a = document.querySelector ("#a");
function divisibleby3() {
    if(a.value % 3 === 0 ){
    divideby3.innerHTML = (a.value + " IS DIVISIBLE BY 3")
} else {
    divideby3.innerHTML = (a.value + " IS NOT DIVISIBLE BY 3")
}
a.value = ""
}


// Q2)
const evenorodd = document.querySelector ("#evenorodd");
const b = document.querySelector ("#b");
function evenOrodd(){
     if (b.value % 2 === 0){
    evenorodd.innerHTML = (b.value + " IS AN EVEN NUMBER")
}else {
    evenorodd.innerHTML = (b.value + " IS AN ODD NUMBER")
}
b.value = ""
}


// Q3)
const age = document.querySelector ("#age");
const c = document.querySelector ("#c");
function checkage(){
    if(c.value >= 18){
    age.innerHTML = ("OLD ENOUGH")
} else {
    age.innerHTML = ("TOO YOUNG")
}
c.value = ""
}


// Q4)
const d = document.querySelector ("#d");
const name = document.querySelector ("#name");
function NAME() {
    var D = d.value.toUpperCase();
    if(D == "ZAID"){
    name.innerHTML = ("THE PROGRAMMER NAME IS ALSO ZAID")
} else {
    name.innerHTML = (`THE PROGRAMMER NAME IS NOT ${D}`)
}
d.value = ""
}
// Q5)
const Divide3 = document.querySelector ("#Divide3");
const e = document.querySelector ("#e");
function Divisibleby3() {
    if(e.value % 3 === 0 ){
    Divide3.innerHTML = (e.value + " IS DIVISIBLE BY 3")
} else {
    divide3.innerHTML = (e.value + " IS NOT DIVISIBLE BY 3")
}
e.value = ""
}


// Q7)
const calculator = document.querySelector("#calculator");
const num1 = document.querySelector("#num1");
const operator = document.querySelector("#operator");
const num2 = document.querySelector("#num2");
function Calculator() {
    const number1 = parseFloat(num1.value);
    const number2 = parseFloat(num2.value);
    if (operator.value === "+") {
        calculator.innerHTML = `${number1} + ${number2} = ${number1 + number2}`;
    } else if (operator.value === "-") {
        calculator.innerHTML = `${number1} - ${number2} = ${number1 - number2}`;
    } else if (operator.value === "*") {
        calculator.innerHTML = `${number1} * ${number2} = ${number1 * number2}`;
    } else if (operator.value === "/") {
        if (number2 !== 0) {
            calculator.innerHTML = `${number1} / ${number2} = ${number1 / number2}`;
        } else {
            calculator.innerHTML = "ERROR: Division by zero is not allowed.";
        }
    } else if (operator.value === "%") {
        calculator.innerHTML = `${number1} % ${number2} = ${number1 % number2}`;
    } else {
        calculator.innerHTML = "ERROR: Invalid operator.";
    }
    num1.value = "";
    operator.value = "";
    num2.value = "";
}


// Q8) 
const time = document.querySelector ("#time");
const f = document.querySelector ("#f");
function Time(){
    if(f.value >= 00 && f.value < 12){
    time.innerHTML = ("GOOOD MORNING  ⛅")
} else if (f.value >= 12 && f.value < 17){
    time.innerHTML = ("GOOD AFTERNOON  🌅")
} else if (f.value >= 17 && f.value < 21){
    time.innerHTML = ("GOOD EVENING  🌆")
} else if (f.value >= 21 && f.value < 23.59){
    time.innerHTML = ("GOOD NIGHT  🌃")
} else {
    time.innerHTML = ("ERROR: INVALID TIME")
}
f.value = ""
}


// Q9)
const lapyear = document.querySelector ("#leapyear");
const g = document.querySelector ("#g");
function yearchecker(){
    if (g.value % 4 == 0 && g % 100 != 0 || g % 400 == 0){
    lapyear.innerHTML = (g.value + " IS A LEAPYEAR")
} else {
    lapyear.innerHTML = (g.value + " IS NOT A LEAPYEAR")
}
g.value = ""
}


// Q10)
const input = document.querySelector ("#pass");
const output = document.querySelector ("#output");
const h = "zaidashraf19"
function password(){
    if(input.value == ""){
        output.innerHTML = "ENTER THE PASSWORD"
    } else if (h == input.value){
        output.innerHTML = "CORRECT! THE PASSWORD YOU ENTERED MATCHES THE ORIGNAL PASSWORD"
    } else {
        output.innerHTML = "INCORRECT PASSWORD"
    }
input.value = ""
}


// Q11)
const firstname = document.querySelector ("#firstname");
const i = document.querySelector ("#i");
const Name = "ZAID";
function NAME1(){
    const I = i.value.toUpperCase();
    if (I === Name){
    firstname.innerHTML = "HELLO ZAID!"
} else {
    firstname.innerHTML = "YOU ARE NOT ZAID"
}
i.value = ""
}


// Q13)
const j = document.querySelector ("#j");
const integer1 = document.querySelector("#integer1");
const integer2 = document.querySelector ("#integer2");
function compare(){
    if(integer1.value > integer2.value){
        j.innerHTML = (`${integer1.value} > ${integer2.value}`)
    }else if (integer2.value > integer1.value){
        j.innerHTML = (`${integer2.value} > ${integer1.value}`)
    }else if (integer1.value == integer2.value){
        j.innerHTML = (`${integer1.value} = ${integer2.value}`)
    }
integer1.value = ""
integer2.value = ""
}


// Q14)
const k = document.querySelector ("#k");
const int = document.querySelector ("#int");
function intcheck() {
    if(int.value > 0){
        k.innerHTML = ("POSITIVE")
    } else if (int.value < 0){
        k.innerHTML = ("NEGATIVE")
    } else if (int.value == 0){
        k.innerHTML = ("ZERO")
    }
int.value = ""
}


// Q15)
const TIME = document.querySelector ("#TIME");
const l = document.querySelector ("#l");
function routine() {
    if(TIME.value > 6 && TIME.value < 9 ){
        l.innerHTML = ("BREAKFAST IS SERVED")
    }else if(TIME.value > 11 && TIME.value < 13 ){
        l.innerHTML = ("TIME FOR LUNCH")
    }else if(TIME.value > 17 && TIME.value < 20 ){
        l.innerHTML = ("IT'S DINNER TIME")
    }else {
        l.innerHTML = ("SORRY YOU'LL HAVE TO WAIT OR GO GET A SNACK")
    }
TIME.value = ""
}


// // // Q16)
// const Type = document.querySelector ("#type");
// const m = document.querySelector ("#m");
// function Typeof() {
//     if(typeof (Type.value) == "string"){
//         m.innerHTML = "THE INPUT IS STRING"
//     } else if (typeof (Type.value) === 1 ){
//         m.innerHTML = "THE INPUT IS NUMBER"
//     } else if (typeType.value === "bolean"){
//         m.innerHTML = "THE INPUT IS BOLEAN"
//     } else if (typeType.value === ""){
//         m.innerHTML = "THE INTPUT IS UNDEFINED"
//     }
// type.value = ""
// }


// Q17)
const vowel = document.querySelector ("#vowel");
const o = document.querySelector("#o");
function vowels(){
    const VOWELS = vowel.value.toUpperCase();
    if (VOWELS === "A" || VOWELS === "E" || VOWELS === "I" ||VOWELS === "O" || VOWELS === "U"){
        o.innerHTML = `${VOWELS} IS A VOWEL`
    } else {
        o.innerHTML = `${VOWELS} IS NOT A  VOWEL`
    }
vowel.value = ""
}


// Q18)



// Q19)
const y = document.querySelector ("#y");
const month = document.querySelector("#month");
function MONTH(){
    if (month.value == 1){
        y.innerHTML = `JANUARY`
    } else if (month.value == 2){
        y.innerHTML = `FEBRUARY`
    }  else if (month.value == 3){
        y.innerHTML = `MARCH`
    } else if (month.value == 4){
        y.innerHTML = `APRIL`
    }  else if (month.value == 5){
        y.innerHTML = `MAY`
    }  else if (month.value == 6){
        y.innerHTML = `JUNE`
    } else if (month.value == 7){
        y.innerHTML = `JULY`
    } else if (month.value == 8){
        y.innerHTML = `AUGUST`
    } else if (month.value == 9){
        y.innerHTML = `SEPTEMBER`
    } else if (month.value == 10){
        y.innerHTML = `OCTOBER`
    } else if (month.value == 11){
        y.innerHTML = `NOVEMBER`
    }  else if (month.value == 12){
        y.innerHTML = `DECEMBER`
    } else {
        y.innerHTML =   `INVALID NUMBER`
    }
month.value = ""    
}


// Q20)
const Age = document.querySelector ("#Age");
const z = document.querySelector ("#z");
function AGE(){
    if(z.value >= 18){
    Age.innerHTML = ("OLD ENOUGH")
} else {
    Age.innerHTML = ("TOO YOUNG")
}
z.value = ""
}