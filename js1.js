var intN=234;
var str="alphabit";
var strN="234";


document.write("</br>" + intN/str)
document.write("</br>" + intN/strN+ "</br>" )
document.write( intN==strN)
document.write("</br>")
document.write( intN===strN)
document.write("</br>")
// number to string
var intNN = intN.toString()
document.write(typeof(intNN))
var sum = intNN + intN;
var sum2= intN + intNN
document.write("</br>")
document.write(sum)
document.write("</br>")
document.write(sum2)
document.write("</br>")
// stirng to number
// x="233"
// x.parseInt()

// let x = 123;
// x.toString()
// var xx=(100+23).toString()
// aconsole.log(xx)


let x=9.65565
console.log(x.toFixed(0))

let y =123;
console.log(y.valueOf())
console.log((123).valueOf())
console.log((100+23).valueOf())

var a = "120.333"
console.log(typeof(a))
var b=Number(a)
console.log(b)
console.log(typeof(b))


// number Methods
console.log(Number(true))
console.log(Number(false))
console.log(Number('10'))
console.log(Number('   10'))
console.log(Number('10   '))
console.log(Number(' 10 '))
console.log(Number('10.33'))
console.log(Number('10,33'))
console.log(Number('10 33'))
console.log(Number('john'))

// parseInt Mehods
console.log(parseInt("-10"))
console.log(parseInt("-10.33"))
console.log(parseInt("10"))
console.log(parseInt("10.33"))
console.log(parseInt("10 20 30"))
console.log(parseInt("10 years"))
console.log(parseInt("years 10"))

// float Mehods
console.log(parseFloat("10"))
console.log(parseFloat("10.33"))
console.log(parseFloat("10 20 30"))
console.log(parseFloat("10 years"))
console.log(parseFloat("years 10"))
