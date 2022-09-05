var string1='1234567890';
var string2="startupistan is for the best place for web"
var string3="A B C D E F G H I J K L M N O P Q R S T U V W X Y Z";
/*
console.log(string1);

console.log(string2.length);


console.log(string3.slice(0,4));

console.log(string1.substring(6));

console.log(string2.substr(1,6));
*/

// charAt()
console.log(string2.charAt(13))

console.log(string3.charCodeAt('s'))

console.log(string2.concat(" ",string3," ",string1))

console.log(string1+string2)

console.log(string3.endsWith('YZ'))
// i love you in asci code
console.log(String.fromCharCode(73,32,76,79,86,69,32,89,79,85))

console.log(string2.includes('best p'))

console.log(string2.indexOf('for'))

console.log(string2.lastIndexOf('for'))

// match
console.log(string2.match(/is/g))

// document.write(string3.repeat(2))

console.log(string2.replace(string1))

console.log(string2.replace('for','what'))
console.log(string2.replace(/for/g,'what'))

console.log(string3.startsWith("ABC"))

console.log(string2.toUpperCase())
console.log(string3.toLowerCase())

// trim
console.log(string3.length)
console.log(string3.trim())
console.log(string3.length)

console.log(string3.split(' , '))


function clickup1(){
    // document.querySelector('in').value
   var in1 = document.getElementById('in').value
   alert(in1.toUpperCase())
}

